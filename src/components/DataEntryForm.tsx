
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FileText, Users, Package, Droplets, Calendar } from "lucide-react";

export const DataEntryForm = () => {
  const [formType, setFormType] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Data Submitted Successfully",
      description: "Your report has been saved and will be processed shortly.",
    });
  };

  const renderFormContent = () => {
    switch (formType) {
      case "yield":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="farmer-name">Farmer Name</Label>
                <Input id="farmer-name" placeholder="Enter farmer's full name" />
              </div>
              <div>
                <Label htmlFor="farm-id">Farm ID</Label>
                <Input id="farm-id" placeholder="e.g., GH-001-2024" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="crop-type">Crop Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cassava">Cassava</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="yam">Yam</SelectItem>
                    <SelectItem value="plantain">Plantain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="yield-amount">Yield (kg)</Label>
                <Input id="yield-amount" type="number" placeholder="e.g., 250" />
              </div>
              <div>
                <Label htmlFor="harvest-date">Harvest Date</Label>
                <Input id="harvest-date" type="date" />
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any observations about harvest quality, weather conditions, etc." />
            </div>
          </div>
        );
      
      case "training":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="training-title">Training Title</Label>
                <Input id="training-title" placeholder="e.g., Soil Testing Workshop" />
              </div>
              <div>
                <Label htmlFor="training-date">Training Date</Label>
                <Input id="training-date" type="date" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g., Gomoa Community Center" />
              </div>
              <div>
                <Label htmlFor="attendees">Number of Attendees</Label>
                <Input id="attendees" type="number" placeholder="e.g., 25" />
              </div>
              <div>
                <Label htmlFor="trainer">Trainer Name</Label>
                <Input id="trainer" placeholder="Enter trainer's name" />
              </div>
            </div>
            <div>
              <Label htmlFor="training-topics">Topics Covered</Label>
              <Textarea id="training-topics" placeholder="List the main topics and skills covered during the training" />
            </div>
            <div>
              <Label htmlFor="feedback">Participant Feedback</Label>
              <Textarea id="feedback" placeholder="Summary of participant feedback and engagement" />
            </div>
          </div>
        );
      
      case "distribution":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="distribution-date">Distribution Date</Label>
                <Input id="distribution-date" type="date" />
              </div>
              <div>
                <Label htmlFor="distribution-location">Location</Label>
                <Input id="distribution-location" placeholder="e.g., SOLFA Regional Office" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="item-type">Item Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select item" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seeds">Seeds</SelectItem>
                    <SelectItem value="tools">Farming Tools</SelectItem>
                    <SelectItem value="fertilizer">Fertilizer</SelectItem>
                    <SelectItem value="equipment">Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" placeholder="e.g., 50" />
              </div>
              <div>
                <Label htmlFor="recipients">Number of Recipients</Label>
                <Input id="recipients" type="number" placeholder="e.g., 15" />
              </div>
            </div>
            <div>
              <Label htmlFor="recipient-list">Recipient Details</Label>
              <Textarea id="recipient-list" placeholder="List farmer names and contact information" />
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-8 text-muted-foreground">
            Please select a form type to begin data entry
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Form Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Data Entry Portal</CardTitle>
          <CardDescription>Select the type of data you want to record</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant={formType === "yield" ? "default" : "outline"}
              className="h-20 flex flex-col gap-2"
              onClick={() => setFormType("yield")}
            >
              <FileText className="h-6 w-6" />
              <span>Yield Report</span>
            </Button>
            <Button
              variant={formType === "training" ? "default" : "outline"}
              className="h-20 flex flex-col gap-2"
              onClick={() => setFormType("training")}
            >
              <Users className="h-6 w-6" />
              <span>Training Session</span>
            </Button>
            <Button
              variant={formType === "distribution" ? "default" : "outline"}
              className="h-20 flex flex-col gap-2"
              onClick={() => setFormType("distribution")}
            >
              <Package className="h-6 w-6" />
              <span>Tool Distribution</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dynamic Form */}
      {formType && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {formType === "yield" && <FileText className="h-5 w-5 text-emerald-600" />}
              {formType === "training" && <Users className="h-5 w-5 text-blue-600" />}
              {formType === "distribution" && <Package className="h-5 w-5 text-amber-600" />}
              {formType === "yield" && "Crop Yield Report"}
              {formType === "training" && "Training Session Report"}
              {formType === "distribution" && "Tool Distribution Report"}
            </CardTitle>
            <CardDescription>
              Fill in the required information to record this {formType} entry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderFormContent()}
              
              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={() => setFormType("")}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                  Submit Report
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Recent Submissions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Submissions</CardTitle>
          <CardDescription>Latest data entries in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-emerald-600" />
                <div>
                  <p className="text-sm font-medium">Yield Report - Afi Mensah</p>
                  <p className="text-xs text-slate-600">Cassava harvest: 185kg</p>
                </div>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700">2h ago</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Training Session - Soil Testing</p>
                  <p className="text-xs text-slate-600">25 participants in Central Region</p>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-700">5h ago</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Package className="h-4 w-4 text-amber-600" />
                <div>
                  <p className="text-sm font-medium">Tool Distribution - Eastern Region</p>
                  <p className="text-xs text-slate-600">50 hoes distributed to 15 farmers</p>
                </div>
              </div>
              <Badge className="bg-amber-100 text-amber-700">1d ago</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
