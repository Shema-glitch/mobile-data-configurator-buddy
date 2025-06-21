
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
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-gray-700 mb-1">{label}</div>
        <div className={`text-sm truncate ${
          isNotSet 
            ? "text-gray-400 italic" 
            : "text-gray-900 font-mono bg-gray-100 px-2 py-1 rounded text-xs"
        }`}>
          {displayValue}
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        disabled={isNotSet || copied}
        className={`ml-3 flex items-center gap-2 transition-all ${
          copied 
            ? "bg-green-600 text-white border-green-600 hover:bg-green-600" 
            : isNotSet 
              ? "opacity-50" 
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
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
