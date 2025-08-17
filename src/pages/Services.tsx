import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  ShoppingCart, 
  Truck,
  Smartphone,
  Laptop,
  Tablet,
  Monitor,
  Headphones,
  Camera,
  Clock,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Code,
  Palette,
  Video,
  BarChart3,
  TrendingUp
} from "lucide-react";
import servicesHeroImage from "@/assets/services-hero.jpg";

const Services = () => {
  const techServices = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile app development, API integration, database design",
      category: "Development",
      features: ["Full-stack Development", "Mobile Apps", "API Integration", "Database Design"]
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Logo design, branding, marketing materials, social media graphics",
      category: "Design",
      features: ["Brand Identity", "Marketing Materials", "Social Media Graphics", "Print Design"]
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing, motion graphics, promotional videos",
      category: "Media",
      features: ["Video Production", "Motion Graphics", "Color Grading", "Audio Enhancement"]
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Business intelligence, data visualization, analytics reporting",
      category: "Analytics",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Reports"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO optimization, social media marketing, content strategy",
      category: "Marketing",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"]
    }
  ];

  const repairServices = [
    {
      icon: Smartphone,
      title: "Phone Repairs",
      description: "Screen replacement, battery change, software troubleshooting",
      duration: "1-2 hours"
    },
    {
      icon: Laptop,
      title: "Laptop Repairs",
      description: "Hardware upgrades, virus removal, system optimization",
      duration: "2-4 hours"
    },
    {
      icon: Tablet,
      title: "Tablet Repairs",
      description: "Touch screen repair, charging port fix, system restore",
      duration: "1-3 hours"
    }
  ];

  const deliveryZones = [
    "Garki District",
    "Wuse I & II",
    "Maitama",
    "Asokoro",
    "Central Business District",
    "Gwarinpa",
    "Kubwa",
    "Karu"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
              Professional Tech Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              From software development to gadget repairs - we've got all your tech needs covered
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Expert Solutions
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                24/7 Support
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Fast Delivery
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Tech Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Tech Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert solutions for all your technology and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">{service.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-6">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 group">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gadget Repair Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Gadget Repairs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick and reliable repair services for all your devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {repairServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{service.duration}</span>
                    </div>
                    <Button className="w-full group">
                      Contact for Repair
                      <MessageCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fast & Reliable Delivery
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick delivery services across Abuja zones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Delivery Zones in Abuja</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliveryZones.map((zone, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-foreground font-medium">{zone}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Card className="p-8">
                <div className="text-center">
                  <Truck className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">Delivery Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-500" />
                      <span>Safe & Secure Delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-500" />
                      <span>Same Day Delivery Available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-500" />
                      <span>Real-time Order Tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-green-500" />
                      <span>Professional Delivery Team</span>
                    </div>
                  </div>
                  <Button className="w-full mt-8">
                    Request Delivery Quote
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote for any of our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;