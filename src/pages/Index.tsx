
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Check, Grid, List } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { carrierData } from "@/data/carrierData";
import { APNField } from "@/components/APNField";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCarrier, setSelectedCarrier] = useState("");
  const [isGridLayout, setIsGridLayout] = useState(true);
  const { toast } = useToast();

  const countries = Object.keys(carrierData);
  const carriers = selectedCountry ? carrierData[selectedCountry] || [] : [];
  const currentAPN = selectedCarrier ? carriers.find(c => c.name === selectedCarrier) : null;

  const handleCopy = async (value: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({
        title: "Copied!",
        description: `${fieldName} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">APN Lookup Tool</h1>
          <p className="text-muted-foreground">
            Configure mobile data settings for your device manually
          </p>
        </div>

        {/* Country Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Your Country</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your country..." />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Carrier Selection */}
        {selectedCountry && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Select Your Mobile Carrier</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedCarrier} onValueChange={setSelectedCarrier}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your carrier..." />
                </SelectTrigger>
                <SelectContent>
                  {carriers.map((carrier) => (
                    <SelectItem key={carrier.name} value={carrier.name}>
                      {carrier.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}

        {/* APN Configuration Display */}
        {currentAPN && (
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>APN Configuration - {currentAPN.name}</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsGridLayout(!isGridLayout)}
                  className="flex items-center gap-2"
                >
                  {isGridLayout ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                  {isGridLayout ? "List View" : "Grid View"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className={`gap-4 ${isGridLayout ? "grid grid-cols-1 md:grid-cols-2" : "space-y-4"}`}>
                <APNField label="Name" value={currentAPN.apn_name} onCopy={handleCopy} />
                <APNField label="APN" value={currentAPN.apn} onCopy={handleCopy} />
                <APNField label="Proxy" value={currentAPN.proxy} onCopy={handleCopy} />
                <APNField label="Port" value={currentAPN.port} onCopy={handleCopy} />
                <APNField label="Username" value={currentAPN.username} onCopy={handleCopy} />
                <APNField label="Password" value={currentAPN.password} onCopy={handleCopy} />
                <APNField label="Server" value={currentAPN.server} onCopy={handleCopy} />
                <APNField label="MMSC" value={currentAPN.mmsc} onCopy={handleCopy} />
                <APNField label="MMS proxy" value={currentAPN.mms_proxy} onCopy={handleCopy} />
                <APNField label="MMS port" value={currentAPN.mms_port} onCopy={handleCopy} />
                <APNField label="MCC" value={currentAPN.mcc} onCopy={handleCopy} />
                <APNField label="MNC" value={currentAPN.mnc} onCopy={handleCopy} />
                <APNField label="Authentication type" value={currentAPN.auth_type} onCopy={handleCopy} />
                <APNField label="APN type" value={currentAPN.apn_type} onCopy={handleCopy} />
                <APNField label="APN protocol" value={currentAPN.apn_protocol} onCopy={handleCopy} />
                <APNField label="APN roaming protocol" value={currentAPN.apn_roaming_protocol} onCopy={handleCopy} />
                <APNField label="APN enable/disable" value="APN enabled" onCopy={handleCopy} />
                <APNField label="Bearer" value={currentAPN.bearer} onCopy={handleCopy} />
                <APNField label="MVNO type" value={currentAPN.mvno_type} onCopy={handleCopy} />
                <APNField label="MVNO value" value={currentAPN.mvno_value} onCopy={handleCopy} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Text */}
        {!currentAPN && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="text-center text-muted-foreground">
                <p className="mb-2">Select your country and carrier to view APN settings</p>
                <p className="text-sm">
                  This tool is especially helpful for imported smartphones, travelers, or users with network configuration issues.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
