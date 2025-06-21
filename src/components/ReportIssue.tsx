
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReportIssueProps {
  country?: string;
  carrier?: string;
}

export const ReportIssue = ({ country, carrier }: ReportIssueProps) => {
  const [isReporting, setIsReporting] = useState(false);
  const { toast } = useToast();

  const handleReport = () => {
    setIsReporting(true);
    
    const subject = encodeURIComponent(`APN Issue Report: ${country} - ${carrier || 'General'}`);
    const body = encodeURIComponent(`Hello,

I want to report an issue with the APN data:

Country: ${country || 'Not specified'}
Carrier: ${carrier || 'Not specified'}

Issue type (please describe):
☐ Missing carrier
☐ Incorrect APN settings
☐ Outdated information
☐ Other: ___________

Additional details:


Thank you for helping improve the APN Lookup Tool!`);

    const mailtoLink = `mailto:charmantshema112@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');

    setTimeout(() => {
      setIsReporting(false);
      toast({
        title: "Report opened",
        description: "Email client opened. Thank you for helping improve our data!",
      });
    }, 1000);
  };

  return (
    <Card className="border-amber-200 bg-amber-50">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-amber-800 text-sm">
          <AlertTriangle className="w-4 h-4" />
          Missing or incorrect data?
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-amber-700 mb-3">
          Help us improve by reporting missing carriers or incorrect APN settings.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={handleReport}
          disabled={isReporting}
          className="w-full border-amber-300 text-amber-800 hover:bg-amber-100"
        >
          <Mail className="w-3 h-3 mr-2" />
          {isReporting ? "Opening email..." : "Report Issue"}
        </Button>
      </CardContent>
    </Card>
  );
};
