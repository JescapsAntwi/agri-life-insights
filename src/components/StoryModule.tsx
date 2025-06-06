
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, MessageCircle, Calendar, MapPin, User } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Meet Afi: Transforming Cassava Farming in Gomoa",
    excerpt: "Afi Mensah has increased her cassava yield by 40% after participating in SOLFA's soil testing program. Her success story inspires other farmers in her community.",
    author: "SOLFA Team",
    date: "June 5, 2024",
    location: "Gomoa Region, Ghana",
    image: "https://images.unsplash.com/photo-1594736797933-d0eb8ba7ad29?w=400",
    category: "Success Story",
    readTime: "3 min read",
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    title: "Community Water Project Brings Hope to Eastern Region",
    excerpt: "A new water management system has helped 150 farmers in the Eastern Region maintain consistent crop irrigation during the dry season.",
    author: "Samuel Osei",
    date: "June 3, 2024",
    location: "Eastern Region, Ghana",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    category: "Community Impact",
    readTime: "4 min read",
    likes: 31,
    comments: 12
  },
  {
    id: 3,
    title: "Young Farmer Kwame Leads Innovation in Maize Cultivation",
    excerpt: "At just 24 years old, Kwame Asante has become a mentor for sustainable farming practices, helping 20 farmers adopt modern techniques.",
    author: "Grace Addo",
    date: "May 28, 2024",
    location: "Volta Region, Ghana",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    category: "Innovation",
    readTime: "5 min read",
    likes: 18,
    comments: 6
  }
];

export const StoryModule = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-emerald-600 to-green-700 text-white border-0">
        <CardHeader>
          <CardTitle className="text-2xl">Community Stories & Impact</CardTitle>
          <CardDescription className="text-emerald-100">
            Discover inspiring stories from farmers across Ghana and see the real impact of our agricultural programs
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <Badge 
                className="absolute top-4 left-4 bg-white/90 text-slate-700 border-0"
              >
                {story.category}
              </Badge>
            </div>
            
            <CardContent className="p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {story.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{story.date}</span>
                  </div>
                  <span>{story.readTime}</span>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <MapPin className="h-3 w-3" />
                  <span>{story.location}</span>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{story.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{story.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                  <Button size="sm" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                    Read More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Impact Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Community Impact by the Numbers</CardTitle>
          <CardDescription>Real metrics showing the difference we're making together</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <p className="text-3xl font-bold text-emerald-700">770</p>
              <p className="text-sm text-emerald-600">Farmers Supported</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-700">45%</p>
              <p className="text-sm text-blue-600">Avg. Yield Increase</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <p className="text-3xl font-bold text-amber-700">2,450</p>
              <p className="text-sm text-amber-600">Tools Distributed</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-700">124</p>
              <p className="text-sm text-purple-600">Training Sessions</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-slate-50 to-emerald-50 border-emerald-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Share Your Story</h3>
          <p className="text-slate-600 mb-6">
            Have an inspiring farming journey or community impact story? We'd love to hear from you and share it with our community.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Submit Your Story
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
