
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { MapPin, Users, TrendingUp, Target, Calendar, DollarSign } from "lucide-react";

const impactData = [
  { month: "Jan", farmers: 520, yield: 1200, revenue: 45000 },
  { month: "Feb", farmers: 550, yield: 1350, revenue: 52000 },
  { month: "Mar", farmers: 580, yield: 1480, revenue: 58000 },
  { month: "Apr", farmers: 620, yield: 1650, revenue: 65000 },
  { month: "May", farmers: 680, yield: 1800, revenue: 72000 },
  { month: "Jun", farmers: 770, yield: 2100, revenue: 85000 }
];

const projectData = [
  { project: "Cassava Enhancement", completion: 85, farmers: 320 },
  { project: "Water Management", completion: 70, farmers: 180 },
  { project: "Soil Health Program", completion: 92, farmers: 450 },
  { project: "Tool Distribution", completion: 60, farmers: 200 }
];

export const PartnerDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Impact Summary */}
      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-emerald-600" />
            Partnership Impact Summary
          </CardTitle>
          <CardDescription>Overall impact metrics for partner investment and support</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-emerald-700">770</p>
              <p className="text-sm text-emerald-600">Farmers Supported</p>
              <p className="text-xs text-emerald-500 mt-1">+48% this quarter</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-700">2,100 kg</p>
              <p className="text-sm text-blue-600">Total Yield</p>
              <p className="text-xs text-blue-500 mt-1">+23% vs last month</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
              <DollarSign className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-amber-700">$85,000</p>
              <p className="text-sm text-amber-600">Farmer Revenue</p>
              <p className="text-xs text-amber-500 mt-1">Monthly total</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-700">5</p>
              <p className="text-sm text-purple-600">Active Regions</p>
              <p className="text-xs text-purple-500 mt-1">Ghana coverage</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth Trend */}
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Growth & Impact Trends</CardTitle>
          <CardDescription>Monthly progression of farmer engagement and agricultural output</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={impactData}>
              <defs>
                <linearGradient id="colorFarmers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="farmers" stackId="1" stroke="#059669" fillOpacity={1} fill="url(#colorFarmers)" />
              <Area type="monotone" dataKey="yield" stackId="2" stroke="#3B82F6" fillOpacity={1} fill="url(#colorYield)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Regional Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Impact</CardTitle>
          <CardDescription>Farmer distribution by region</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Central</span>
              <Badge className="bg-emerald-100 text-emerald-700">230 farmers</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Eastern</span>
              <Badge className="bg-blue-100 text-blue-700">180 farmers</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Greater Accra</span>
              <Badge className="bg-amber-100 text-amber-700">145 farmers</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Volta</span>
              <Badge className="bg-purple-100 text-purple-700">120 farmers</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Western</span>
              <Badge className="bg-slate-100 text-slate-700">95 farmers</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Progress */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
          <CardDescription>Current partnership project status and completion rates</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={projectData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="project" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="completion" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Upcoming Milestones */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-600" />
            Upcoming Milestones
          </CardTitle>
          <CardDescription>Key dates and partnership objectives</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 border border-emerald-200 bg-emerald-50 rounded-lg">
            <h4 className="font-semibold text-emerald-900">Q2 Impact Assessment</h4>
            <p className="text-sm text-emerald-700 mt-1">June 30, 2024</p>
            <p className="text-xs text-emerald-600 mt-1">Comprehensive review of farmer outcomes</p>
          </div>
          <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900">Tool Distribution Phase 2</h4>
            <p className="text-sm text-blue-700 mt-1">July 15, 2024</p>
            <p className="text-xs text-blue-600 mt-1">Next batch of agricultural equipment</p>
          </div>
          <div className="p-3 border border-amber-200 bg-amber-50 rounded-lg">
            <h4 className="font-semibold text-amber-900">Annual Partnership Review</h4>
            <p className="text-sm text-amber-700 mt-1">August 10, 2024</p>
            <p className="text-xs text-amber-600 mt-1">Strategic planning for 2025 initiatives</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
