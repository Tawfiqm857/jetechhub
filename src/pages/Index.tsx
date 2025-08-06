import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Code, 
  Palette, 
  BarChart3, 
  Smartphone, 
  Video, 
  TrendingUp,
  Wrench,
  ShoppingCart,
  Truck,
  Star,
  Users,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-tech-hub.jpg";

const Index = () => {
  const courses = [
    {
      icon: Code,
      title: "Software Development",
      description: "Learn modern programming languages and frameworks",
      duration: "6 months",
      level: "Beginner to Advanced"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly digital experiences",
      duration: "4 months",
      level: "Beginner to Intermediate"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Master data science and analytics tools",
      duration: "5 months",
      level: "Intermediate"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Grow businesses through digital strategies",
      duration: "3 months",
      level: "Beginner"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and editing",
      duration: "3 months",
      level: "Beginner to Intermediate"
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Visual communication and brand design",
      duration: "4 months",
      level: "Beginner"
    }
  ];

  const services = [
    {
      icon: Wrench,
      title: "Gadget Repairs",
      description: "Professional repair services for phones, laptops, and tablets"
    },
    {
      icon: ShoppingCart,
      title: "Gadget Sales",
      description: "Latest tech gadgets and accessories at competitive prices"
    },
    {
      icon: Truck,
      title: "Delivery Services",
      description: "Fast and reliable delivery across the city"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      content: "TechHub transformed my career. The software development program gave me the skills I needed to land my dream job.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Digital Marketer",
      content: "The practical approach to learning digital marketing helped me start my own agency. Highly recommended!",
      rating: 5
    },
    {
      name: "Amina Kader",
      role: "UX Designer",
      content: "The UI/UX program was comprehensive and the instructors were incredibly supportive throughout my journey.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge variant="secondary" className="w-fit">
                🚀 Transform Your Tech Career
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
                Master{" "}
                <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
                  Technology
                </span>{" "}
                Skills at TechHub
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Join hundreds of students who have transformed their careers through our comprehensive tech training programs and professional services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="tech-gradient hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover:bg-muted transition-colors"
                  asChild
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="TechHub Learning Environment" 
                className="rounded-2xl shadow-tech w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Classes Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
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

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Transform Your Career with Our
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent"> Training Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of technology courses designed to prepare you for the digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <course.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-primary transition-colors" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="tech-gradient hover:shadow-glow transition-all duration-300" asChild>
              <Link to="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Professional Tech Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond training, we offer comprehensive tech services to meet all your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-tech transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who have successfully transformed their careers through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-tech transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have transformed their careers. Enroll today and take the first step towards your tech future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="hover:shadow-glow transition-all duration-300"
                asChild
              >
                <Link to="/courses">
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary transition-colors"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;