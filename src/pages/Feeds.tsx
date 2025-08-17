import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Play,
  Image as ImageIcon,
  Users,
  Award,
  Code,
  Palette,
  Monitor,
  Zap
} from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Media", icon: ImageIcon },
    { id: "classrooms", name: "Classrooms", icon: Users },
    { id: "workshops", name: "Workshops", icon: Code },
    { id: "events", name: "Events", icon: Award },
    { id: "facilities", name: "Facilities", icon: Monitor }
  ];

  const mediaItems = [
    {
      type: "image",
      category: "classrooms",
      title: "Software Development Class",
      description: "Students learning React and JavaScript fundamentals",
      thumbnail: "/api/placeholder/400/300",
      featured: true
    },
    {
      type: "video",
      category: "workshops",
      title: "UI/UX Design Workshop",
      description: "Hands-on prototyping session with Figma",
      thumbnail: "/api/placeholder/400/300",
      duration: "5:30"
    },
    {
      type: "image",
      category: "events",
      title: "Graduation Ceremony 2024",
      description: "Celebrating our latest batch of graduates",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      category: "facilities",
      title: "Modern Computer Lab",
      description: "State-of-the-art equipment for practical learning",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "video",
      category: "classrooms",
      title: "Data Analysis Bootcamp",
      description: "Students working with Python and data visualization",
      thumbnail: "/api/placeholder/400/300",
      duration: "8:45"
    },
    {
      type: "image",
      category: "workshops",
      title: "Graphics Design Masterclass",
      description: "Creative session using Adobe Creative Suite",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      category: "events",
      title: "Tech Career Fair",
      description: "Connecting students with industry partners",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "video",
      category: "facilities",
      title: "TechHub Campus Tour",
      description: "Virtual walkthrough of our modern facilities",
      thumbnail: "/api/placeholder/400/300",
      duration: "3:20"
    },
    {
      type: "image",
      category: "classrooms",
      title: "Digital Marketing Session",
      description: "Learning SEO and social media strategies",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      category: "workshops",
      title: "Video Editing Workshop",
      description: "Professional editing techniques with Premiere Pro",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      category: "events",
      title: "Industry Expert Talk",
      description: "Guest lecture from tech industry leaders",
      thumbnail: "/api/placeholder/400/300"
    },
    {
      type: "image",
      category: "facilities",
      title: "Student Collaboration Space",
      description: "Modern co-working area for project development",
      thumbnail: "/api/placeholder/400/300"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const stats = [
    { number: "200+", label: "Training Hours Documented" },
    { number: "50+", label: "Workshop Sessions" },
    { number: "100+", label: "Success Stories" },
    { number: "25+", label: "Industry Events" }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${feedsHeroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              📸 Media Gallery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Experience TechHub
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent"> In Action</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Take a visual journey through our vibrant learning environment. See our students in action, 
              explore our modern facilities, and witness the transformation happening every day at TechHub.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "tech-gradient hover:shadow-glow" 
                    : "hover:bg-muted"
                }`}
              >
                <category.icon className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={index} 
                className={`group overflow-hidden hover:shadow-tech transition-all duration-300 hover:-translate-y-1 ${
                  item.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative">
                  <div className={`bg-gradient-to-br from-muted to-muted/50 ${
                    item.featured ? 'aspect-[2/1]' : 'aspect-[4/3]'
                  } flex items-center justify-center`}>
                    {item.type === 'video' ? (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                        <p className="text-muted-foreground text-sm">Video Preview</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground text-sm">Image Preview</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Overlay for featured badge and video duration */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.featured && (
                      <Badge className="bg-gradient-to-r from-tech-blue to-tech-purple text-white">
                        Featured
                      </Badge>
                    )}
                    {item.type === 'video' && (
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {item.duration}
                      </Badge>
                    )}
                  </div>

                  {/* Play button overlay for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Load More Media
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Featured: A Day at TechHub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our comprehensive campus tour and see what makes TechHub the perfect place to start your tech journey.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-tech">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative group cursor-pointer">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <Play className="h-12 w-12 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">TechHub Campus Tour</h3>
                  <p className="text-muted-foreground">See our facilities, meet our instructors, and experience our learning environment</p>
                </div>
                
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    12:30
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial with Media */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Student Spotlight</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                "TechHub Changed My Life"
              </h2>
              <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6">
                "When I joined TechHub's Software Development program, I had no coding experience. 
                The hands-on approach, supportive instructors, and modern facilities made learning 
                enjoyable and effective. Six months later, I landed my dream job as a Frontend Developer."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Sarah Adebayo</div>
                  <div className="text-sm text-muted-foreground">Frontend Developer at Paystack</div>
                </div>
              </div>
            </div>

            <Card className="shadow-tech">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">Sarah's Success Story</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our vibrant community of learners and become the next success story. 
            Your journey in tech starts here at TechHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:shadow-glow transition-all duration-300"
            >
              <Zap className="mr-2 h-4 w-4" />
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-colors"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Feeds;