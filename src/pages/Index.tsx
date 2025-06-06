
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, BarChart3, FileText, Users, MapPin, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FarmerDashboard } from "@/components/FarmerDashboard";
import { AdminDashboard } from "@/components/AdminDashboard";
import { PartnerDashboard } from "@/components/PartnerDashboard";
import { DataEntryForm } from "@/components/DataEntryForm";
import { StoryModule } from "@/components/StoryModule";

type UserRole = "farmer" | "admin" | "partner";

const Index = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>("farmer");
  const [activeTab, setActiveTab] = useState("dashboard");

  const roleConfig = {
    farmer: {
      name: "Afi Mensah",
      location: "Gomoa Region, Ghana",
      tabs: [
        { id: "dashboard", label: "My Profile", icon: User },
        { id: "reports", label: "Reports", icon: FileText },
        { id: "community", label: "Community", icon: Users }
      ]
    },
    admin: {
      name: "Admin Portal",
      location: "SOLFA Operations",
      tabs: [
        { id: "dashboard", label: "Overview", icon: BarChart3 },
        { id: "data-entry", label: "Data Entry", icon: FileText },
        { id: "stories", label: "Stories", icon: Users }
      ]
    },
    partner: {
      name: "Partner Dashboard",
      location: "Impact Monitoring",
      tabs: [
        { id: "dashboard", label: "Regional Stats", icon: MapPin },
        { id: "impact", label: "Impact Reports", icon: TrendingUp },
        { id: "farmers", label: "Farmers", icon: Users }
      ]
    }
  };

  const currentConfig = roleConfig[currentRole];

  const renderTabContent = () => {
    if (currentRole === "farmer") {
      switch (activeTab) {
        case "dashboard":
          return <FarmerDashboard />;
        case "reports":
          return <div className="p-6 text-center text-muted-foreground">Reports section coming soon...</div>;
        case "community":
          return <StoryModule />;
        default:
          return <FarmerDashboard />;
      }
    } else if (currentRole === "admin") {
      switch (activeTab) {
        case "dashboard":
          return <AdminDashboard />;
        case "data-entry":
          return <DataEntryForm />;
        case "stories":
          return <StoryModule />;
        default:
          return <AdminDashboard />;
      }
    } else {
      switch (activeTab) {
        case "dashboard":
          return <PartnerDashboard />;
        case "impact":
          return <div className="p-6 text-center text-muted-foreground">Impact reports coming soon...</div>;
        case "farmers":
          return <StoryModule />;
        default:
          return <PartnerDashboard />;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Header />
      
      {/* Role Switcher */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-sm font-medium text-slate-600 mr-2">Switch Role:</span>
          {Object.entries(roleConfig).map(([role, config]) => (
            <Button
              key={role}
              variant={currentRole === role ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setCurrentRole(role as UserRole);
                setActiveTab("dashboard");
              }}
              className="text-xs"
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </Button>
          ))}
        </div>

        {/* User Info */}
        <Card className="mb-6 border-0 shadow-lg bg-gradient-to-r from-emerald-600 to-green-700 text-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold">{currentConfig.name}</CardTitle>
                <CardDescription className="text-emerald-100 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {currentConfig.location}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-white shadow-sm">
            {currentConfig.tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-2 data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[500px]">
            {renderTabContent()}
          </div>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
