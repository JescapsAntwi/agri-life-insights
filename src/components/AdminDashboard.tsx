
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Users, TrendingUp, MapPin, Package, Activity, AlertCircle } from "lucide-react";

const regionData = [
  { region: "Greater Accra", farmers: 145, yield: 180 },
  { region: "Central", farmers: 230, yield: 165 },
  { region: "Eastern", farmers: 180, yield: 195 },
  { region: "Western", farmers: 95, yield: 140 },
  { region: "Volta", farmers: 120, yield: 170 }
];

const cropDistribution = [
  { name: "Cassava", value: 45, color: "#059669" },
  { name: "Maize", value: 30, color: "#3B82F6" },
  { name: "Yam", value: 15, color: "#F59E0B" },
  { name: "Plantain", value: 10, color: "#8B5CF6" }
];

export const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Key Metrics */}
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-emerald-600" />
            System Overview
          </CardTitle>
          <CardDescription>Key performance indicators across all regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-emerald-700">770</p>
              <p className="text-sm text-emerald-600">Active Farmers</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-700">168 kg/ha</p>
              <p className="text-sm text-blue-600">Avg. Yield</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <Package className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-amber-700">2,450</p>
              <p className="text-sm text-amber-600">Tools Distributed</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-700">5</p>
              <p className="text-sm text-purple-600">Active Regions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regional Performance */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Regional Performance</CardTitle>
          <CardDescription>Farmer count and average yield by region</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="farmers" fill="#059669" name="Farmers" />
              <Bar dataKey="yield" fill="#3B82F6" name="Avg Yield (kg/ha)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Crop Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Crop Distribution</CardTitle>
          <CardDescription>Primary crops across all farms</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={cropDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {cropDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest system updates and farmer interactions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
            <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">New farmer registration</p>
              <p className="text-xs text-slate-600">Kwame Asante joined from Eastern Region</p>
            </div>
            <Badge variant="secondary" className="text-xs">2h ago</Badge>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Training session completed</p>
              <p className="text-xs text-slate-600">Soil testing workshop in Volta Region</p>
            </div>
            <Badge variant="secondary" className="text-xs">5h ago</Badge>
          </div>
          <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
            <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Yield report submitted</p>
              <p className="text-xs text-slate-600">Central Region cassava harvest data</p>
            </div>
            <Badge variant="secondary" className="text-xs">1d ago</Badge>
          </div>
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            System Alerts
          </CardTitle>
          <CardDescription>Important notifications requiring attention</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 border border-amber-200 bg-amber-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-900">Data Entry Pending</span>
            </div>
            <p className="text-xs text-amber-700">15 farmers have pending yield reports for May 2024</p>
          </div>
          <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Training Reminder</span>
            </div>
            <p className="text-xs text-blue-700">Soil testing workshop scheduled for tomorrow in Gomoa</p>
          </div>
          <div className="p-3 border border-emerald-200 bg-emerald-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900">System Update</span>
            </div>
            <p className="text-xs text-emerald-700">Mobile app update available for farmer devices</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
