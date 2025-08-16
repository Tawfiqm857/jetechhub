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
      description: "Business intelligence, data visualization, predictive analytics",
      category: "Analytics",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Reporting"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User interface design, user experience research, prototyping",
      category: "Design",
      features: ["UI Design", "UX Research", "Prototyping", "User Testing"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO, social media marketing, content creation, ad campaigns",
      category: "Marketing",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Ad Campaigns"]
    }
  ];

  const repairServices = [
    {
      icon: Smartphone,
      title: "Phone Repairs",
      description: "Screen replacement, battery issues, water damage, software problems",
      duration: "1-2 hours"
    },
    {
      icon: Laptop,
      title: "Laptop Repairs",
      description: "Hardware upgrades, virus removal, screen replacement, keyboard fixes",
      duration: "1-3 days"
    },
    {
      icon: Tablet,
      title: "Tablet Repairs",
      description: "Touch screen issues, charging problems, software troubleshooting",
      duration: "2-4 hours"
    },
    {
      icon: Monitor,
      title: "Monitor Repairs",
      description: "Display issues, power problems, cable and port repairs",
      duration: "1-2 days"
    }
  ];

  const gadgetCategories = [
    {
      icon: Smartphone,
      title: "Smartphones",
      description: "Latest iPhone, Samsung, and Android devices",
      features: ["Latest Models", "Warranty Included", "Competitive Prices"]
    },
    {
      icon: Laptop,
      title: "Laptops",
      description: "Business and gaming laptops from top brands",
      features: ["HP, Dell, Lenovo", "Custom Configurations", "Student Discounts"]
    },
    {
      icon: Headphones,
      title: "Audio Devices",
      description: "Headphones, speakers, and audio accessories",
      features: ["Premium Brands", "Wireless Options", "Professional Audio"]
    },
    {
      icon: Camera,
      title: "Cameras",
      description: "DSLR, mirrorless, and action cameras",
      features: ["Professional Grade", "Accessories Available", "Training Included"]
    }
  ];

  const deliveryFeatures = [
    "Same-day delivery within Lagos",
    "Express delivery (2-4 hours)",
    "Standard delivery (24-48 hours)",
    "Nationwide shipping available",
    "Real-time tracking",
    "Secure packaging",
    "Cash on delivery option",
    "Free delivery for orders above ₦50,000"
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              🔧 Professional Tech Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Complete Tech Solutions for
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent"> All Your Needs</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From professional gadget repairs to the latest tech products and reliable delivery services, 
              we're your one-stop destination for all technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Licensed Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Warranty Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span>Fast Turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-green-500" />
                <span>5-Star Rated Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Tech Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <Badge variant="secondary">Professional Services</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Professional Tech Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From software development to digital marketing, we offer comprehensive tech services to help your business grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {techServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-tech-blue to-tech-purple rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full group-hover:bg-primary transition-colors">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact for Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gadget Repairs Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Wrench className="h-6 w-6 text-primary" />
              <Badge variant="secondary">Repair Services</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Professional Gadget Repairs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert repair services for all your devices. Our certified technicians use genuine parts and provide warranty on all repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {repairServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-muted-foreground flex items-center justify-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-primary transition-colors">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact for Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Our Repair Service?</h3>
                  <ul className="space-y-3">
                    {[
                      "Certified and experienced technicians",
                      "Genuine parts and components",
                      "30-day warranty on all repairs",
                      "Free diagnostic and quote",
                      "Quick turnaround time",
                      "Transparent pricing"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <Button size="lg" className="w-full tech-gradient hover:shadow-glow transition-all duration-300">
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Repair: +234 123 456 7890
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Delivery Services Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Truck className="h-6 w-6 text-primary" />
              <Badge variant="secondary">Delivery Services</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Fast & Reliable Delivery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver your gadgets and tech products safely and quickly across Lagos and nationwide. 
              Track your orders in real-time and enjoy flexible delivery options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Delivery Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliveryFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-tech">
              <CardHeader>
                <CardTitle className="text-xl">Delivery Zones & Pricing</CardTitle>
                <CardDescription>
                  Choose the delivery option that works best for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Express Delivery (2-4 hours)</div>
                      <div className="text-sm text-muted-foreground">Lagos Island & Mainland</div>
                    </div>
                    <div className="text-primary font-bold">₦2,000</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Same Day Delivery</div>
                      <div className="text-sm text-muted-foreground">Within Lagos State</div>
                    </div>
                    <div className="text-primary font-bold">₦1,500</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Standard Delivery (24-48 hours)</div>
                      <div className="text-sm text-muted-foreground">Lagos & Surrounding States</div>
                    </div>
                    <div className="text-primary font-bold">₦1,000</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                      <div className="font-medium text-green-700">Free Delivery</div>
                      <div className="text-sm text-green-600">Orders above ₦50,000</div>
                    </div>
                    <div className="text-green-700 font-bold">Free</div>
                  </div>
                </div>
                <Button className="w-full mt-6 tech-gradient hover:shadow-glow transition-all duration-300">
                  Track Your Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gadget Sales Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <Badge variant="secondary">Gadget Sales</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Latest Tech Gadgets & Accessories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Shop the latest technology products from trusted brands. All products come with manufacturer warranty and our excellent customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {gadgetCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:bg-primary transition-colors">
                    Browse {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Genuine Products</CardTitle>
                <CardDescription>
                  100% authentic products from authorized distributors
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Best Prices</CardTitle>
                <CardDescription>
                  Competitive pricing with regular discounts and offers
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Warranty Support</CardTitle>
                <CardDescription>
                  Full manufacturer warranty with local support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Truck className="h-6 w-6 text-primary" />
              <Badge variant="secondary">Delivery Services</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Fast & Reliable Delivery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver your gadgets and tech products safely and quickly across Lagos and nationwide. 
              Track your orders in real-time and enjoy flexible delivery options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Delivery Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deliveryFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-tech">
              <CardHeader>
                <CardTitle className="text-xl">Delivery Zones & Pricing</CardTitle>
                <CardDescription>
                  Choose the delivery option that works best for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Express Delivery (2-4 hours)</div>
                      <div className="text-sm text-muted-foreground">Lagos Island & Mainland</div>
                    </div>
                    <div className="text-primary font-bold">₦2,000</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Same Day Delivery</div>
                      <div className="text-sm text-muted-foreground">Within Lagos State</div>
                    </div>
                    <div className="text-primary font-bold">₦1,500</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Standard Delivery (24-48 hours)</div>
                      <div className="text-sm text-muted-foreground">Lagos & Surrounding States</div>
                    </div>
                    <div className="text-primary font-bold">₦1,000</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                      <div className="font-medium text-green-700">Free Delivery</div>
                      <div className="text-sm text-green-600">Orders above ₦50,000</div>
                    </div>
                    <div className="text-green-700 font-bold">Free</div>
                  </div>
                </div>
                <Button className="w-full mt-6 tech-gradient hover:shadow-glow transition-all duration-300">
                  Track Your Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Need Help with Your Tech?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether it's a repair, purchase, or delivery question, our expert team is here to help. 
            Get in touch with us today for personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:shadow-glow transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-colors"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;