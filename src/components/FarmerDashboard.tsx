
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Sprout, Droplets, Package, Award, TrendingUp, Calendar } from "lucide-react";

const yieldData = [
  { month: "Jan", yield: 120 },
  { month: "Feb", yield: 135 },
  { month: "Mar", yield: 148 },
  { month: "Apr", yield: 162 },
  { month: "May", yield: 180 },
  { month: "Jun", yield: 195 }
];

const waterUsageData = [
  { week: "Week 1", usage: 45 },
  { week: "Week 2", usage: 52 },
  { week: "Week 3", usage: 38 },
  { week: "Week 4", usage: 61 }
];

export const FarmerDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Profile Summary */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-emerald-600" />
            Farmer Profile
          </CardTitle>
          <CardDescription>Your current farming status and details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-slate-600">Crop Type</label>
                <p className="text-lg font-semibold text-slate-900">Cassava & Maize</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Farm Size</label>
                <p className="text-lg font-semibold text-slate-900">2.5 Hectares</p>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Current Season</label>
                <p className="text-lg font-semibold text-slate-900">Wet Season 2024</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-slate-600">Training Completed</label>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={85} className="flex-1" />
                  <span className="text-sm text-emerald-600 font-medium">85%</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Harvest Progress</label>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={60} className="flex-1" />
                  <span className="text-sm text-emerald-600 font-medium">60%</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Status</label>
                <div className="mt-1">
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Active</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            Quick Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-slate-600">Tools Received</span>
            </div>
            <span className="font-semibold text-emerald-700">8</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-slate-600">Water Used (L)</span>
            </div>
            <span className="font-semibold text-blue-700">196</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-amber-600" />
              <span className="text-sm text-slate-600">Achievements</span>
            </div>
            <span className="font-semibold text-amber-700">3</span>
          </div>
        </CardContent>
      </Card>

      {/* Yield Performance */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Crop Yield Performance</CardTitle>
          <CardDescription>Monthly yield tracking (kg per hectare)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={yieldData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="yield" stroke="#059669" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Water Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Water Usage</CardTitle>
          <CardDescription>Weekly consumption (liters)</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={waterUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="usage" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Upcoming Activities */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            Upcoming Activities
          </CardTitle>
          <CardDescription>Your scheduled farming activities and training sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-emerald-200 rounded-lg bg-emerald-50">
              <h4 className="font-semibold text-emerald-900">Soil Testing Workshop</h4>
              <p className="text-sm text-emerald-700 mt-1">June 15, 2024 • 9:00 AM</p>
              <p className="text-xs text-emerald-600 mt-2">Community Center, Gomoa</p>
            </div>
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
              <h4 className="font-semibold text-blue-900">Harvest Planning</h4>
              <p className="text-sm text-blue-700 mt-1">June 20, 2024 • 2:00 PM</p>
              <p className="text-xs text-blue-600 mt-2">Your Farm</p>
            </div>
            <div className="p-4 border border-amber-200 rounded-lg bg-amber-50">
              <h4 className="font-semibold text-amber-900">Seed Distribution</h4>
              <p className="text-sm text-amber-700 mt-1">June 25, 2024 • 10:00 AM</p>
              <p className="text-xs text-amber-600 mt-2">SOLFA Regional Office</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
