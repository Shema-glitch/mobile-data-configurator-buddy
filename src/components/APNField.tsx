
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface APNFieldProps {
  label: string;
  value?: string | number;
  onCopy: (value: string, fieldName: string) => void;
}

export const APNField = ({ label, value, onCopy }: APNFieldProps) => {
  const [copied, setCopied] = useState(false);
  
  const displayValue = value || "Not set";
  const isNotSet = !value;

  const handleCopy = async () => {
    if (!isNotSet) {
      await onCopy(String(value), label);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-between p-3 border rounded-lg bg-card">
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-foreground">{label}</div>
        <div className={`text-sm truncate ${isNotSet ? "text-muted-foreground italic" : "text-foreground font-mono"}`}>
          {displayValue}
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        disabled={isNotSet || copied}
        className="ml-3 flex items-center gap-1"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" />
            Copy
          </>
        )}
      </Button>
    </div>
  );
};
