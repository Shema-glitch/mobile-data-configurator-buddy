
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, List, Github, Smartphone, Globe, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { carrierData } from "@/data/carrierData";
import { APNField } from "@/components/APNField";
import { CountrySelector } from "@/components/CountrySelector";
import { ReportIssue } from "@/components/ReportIssue";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCarrier, setSelectedCarrier] = useState("");
  const [isGridLayout, setIsGridLayout] = useState(true);
  const { toast } = useToast();

  const countries = Object.keys(carrierData).sort();
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

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedCarrier(""); // Reset carrier when country changes
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              APN Lookup Tool
            </h1>
          </div>
          <p className="text-gray-600 text-lg mb-4">
            Configure mobile data settings for your device manually
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Globe className="w-4 h-4" />
            <span>Perfect for imported phones, travelers, and network troubleshooting</span>
          </div>
        </div>

        {/* GitHub Contributor Link */}
        <div className="mb-6 text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open("https://github.com", "_blank")}
            className="gap-2 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <Github className="w-4 h-4" />
            Missing your carrier? Contribute on GitHub
          </Button>
        </div>

        {/* Country Selection */}
        <Card className="mb-6 shadow-sm border border-gray-200 bg-white">
          <CardHeader className="bg-gray-900 text-white">
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Select Your Country
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <CountrySelector
              countries={countries}
              value={selectedCountry}
              onValueChange={handleCountryChange}
            />
          </CardContent>
        </Card>

        {/* Carrier Selection */}
        {selectedCountry && (
          <Card className="mb-6 shadow-sm border border-gray-200 bg-white">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Select Your Mobile Carrier
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
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

        {/* Report Issue Card */}
        {selectedCountry && (
          <div className="mb-6">
            <ReportIssue country={selectedCountry} carrier={selectedCarrier} />
          </div>
        )}

        {/* APN Configuration Display */}
        {currentAPN && (
          <Card className="mb-6 shadow-sm border border-gray-200 bg-white">
            <CardHeader className="flex flex-row items-center justify-between bg-green-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Copy className="w-5 h-5" />
                APN Configuration - {currentAPN.name}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsGridLayout(!isGridLayout)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  {isGridLayout ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                  {isGridLayout ? "List View" : "Grid View"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className={
                isGridLayout 
                  ? "grid grid-cols-1 md:grid-cols-2 gap-4" 
                  : "max-h-96 overflow-y-auto space-y-3 pr-2"
              }>
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
                <APNField label="Bearer" value={currentAPN.bearer || "Unspecified"} onCopy={handleCopy} />
                <APNField label="MVNO type" value={currentAPN.mvno_type} onCopy={handleCopy} />
                <APNField label="MVNO value" value={currentAPN.mvno_value} onCopy={handleCopy} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Text */}
        {!currentAPN && (
          <Card className="mb-6 border-2 border-dashed border-gray-300 bg-white">
            <CardContent className="pt-6">
              <div className="text-center text-gray-600">
                <div className="mb-4">
                  <div className="p-3 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                <p className="mb-2 text-lg font-medium">Select your country and carrier to view APN settings</p>
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
