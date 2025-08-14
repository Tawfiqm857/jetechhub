import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
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
  CheckCircle,
  Target,
  Globe,
  Clock,
  Zap,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Play,
  BookOpen,
  Monitor
} from "lucide-react";
import heroImage from "@/assets/hero-tech-hub.jpg";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about our latest courses and tech news.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const features = [
    {
      icon: Target,
      title: "Expert-Led Training",
      description: "Learn from industry professionals with real-world experience",
    },
    {
      icon: Globe,
      title: "Modern Curriculum",
      description: "Up-to-date courses designed for today's tech landscape",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a vibrant community of learners and professionals",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn recognized certificates upon course completion",
    },
  ];

  const quickStats = [
    { number: "1000+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Job Placement Rate", icon: TrendingUp },
    { number: "50+", label: "Expert Instructors", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const courses = [
    {
      icon: Code,
      title: "Software Development",
      description: "Learn modern programming languages and frameworks",
      duration: "6 months",
      level: "Beginner to Advanced",
      price: "₦150,000",
      students: "120+"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly digital experiences",
      duration: "4 months",
      level: "Beginner to Intermediate",
      price: "₦100,000",
      students: "85+"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Master data science and analytics tools",
      duration: "5 months",
      level: "Intermediate",
      price: "₦130,000",
      students: "95+"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Grow businesses through digital strategies",
      duration: "3 months",
      level: "Beginner",
      price: "₦80,000",
      students: "150+"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video production and editing",
      duration: "3 months",
      level: "Beginner to Intermediate",
      price: "₦90,000",
      students: "70+"
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Visual communication and brand design",
      duration: "4 months",
      level: "Beginner",
      price: "₦85,000",
      students: "110+"
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

  const testimonials = [
    {
      name: "Adebayo Samuel",
      role: "Frontend Developer",
      content: "JE Tech Hub transformed my career. The software development program gave me the skills I needed to land my dream job at a top tech company.",
      rating: 5
    },
    {
      name: "Fatima Mohammed",
      role: "Digital Marketer",
      content: "The practical approach to learning digital marketing helped me start my own agency. The instructors were knowledgeable and supportive.",
      rating: 5
    },
    {
      name: "Chioma Okafor",
      role: "UX Designer",
      content: "The UI/UX program was comprehensive and hands-on. I gained real-world experience that made me confident in my abilities.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-secondary/30 to-accent/5 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary/30 animate-bounce-in">
                  🚀 Leading Tech Education Hub in Nigeria
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                  Master Technology, Shape Your Future
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Join Nigeria's premier tech hub where innovation meets education. 
                  Learn cutting-edge skills from industry experts and launch your tech career with confidence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Button size="lg" className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 tech-gradient hover:shadow-glow hover-lift transition-all duration-300 group" asChild>
                  <Link to="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 border-primary text-primary hover:bg-primary hover:text-white hover-lift" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                {quickStats.map((stat, index) => (
                  <div key={index} className={`text-center animate-slide-up animate-stagger-${index + 1}`}>
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="h-5 w-5 text-primary mr-1" />
                      <span className="text-xl lg:text-2xl font-bold text-primary">{stat.number}</span>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-tech animate-float group">
                <img 
                  src={heroImage} 
                  alt="Students learning technology at JE Tech Hub" 
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover-scale transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/10"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-accent rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">1000+ Students</p>
                        <p className="text-sm text-muted-foreground">Currently Enrolled</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-slow">
                <Code className="h-6 lg:h-8 w-6 lg:w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 lg:w-16 h-14 lg:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-tech animate-bounce">
                <Lightbulb className="h-5 lg:h-6 w-5 lg:w-6 text-white" />
              </div>
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center shadow-lg animate-float">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose JE Tech Hub?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive tech education with industry-relevant curriculum and hands-on experience.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`text-center hover-lift border-0 shadow-lg animate-scale-in animate-stagger-${index + 1}`}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 animate-fade-in-up">
              Stay Updated with Tech Trends
            </h2>
            <p className="text-lg mb-8 opacity-90 animate-fade-in-up">
              Subscribe to our newsletter and get the latest updates on courses, tech news, and industry insights.
            </p>
            
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-scale-in">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button 
                type="submit" 
                disabled={isSubscribing}
                className="bg-white text-primary hover:bg-white/90 px-8"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-2">Featured Programs</Badge>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Transform Your Career with Our Courses</h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of tech programs designed to equip you with industry-relevant skills.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`group hover:shadow-tech transition-all duration-500 hover-lift border-0 shadow-lg animate-scale-in animate-stagger-${(index % 4) + 1} overflow-hidden`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover-scale">
                      <course.icon className="h-5 lg:h-6 w-5 lg:w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-primary font-semibold text-xs lg:text-sm">
                      {course.duration}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-lg lg:text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-sm lg:text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl lg:text-2xl font-bold text-primary">{course.price}</span>
                    <div className="flex items-center text-xs lg:text-sm text-muted-foreground">
                      <Users className="h-3 lg:h-4 w-3 lg:w-4 mr-1" />
                      {course.students} students
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300 hover-scale text-sm lg:text-base">
                    Enroll Now
                    <ArrowRight className="ml-2 h-3 lg:h-4 w-3 lg:w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up">
            <Button variant="outline" size="lg" className="px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg border-primary text-primary hover:bg-primary hover:text-white hover-lift" asChild>
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-2">Our Services</Badge>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Professional Tech Services</h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-3xl mx-auto">
              Beyond education, we offer comprehensive tech services to support individuals and businesses.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`text-center group hover:shadow-tech transition-all duration-500 hover-lift animate-scale-in animate-stagger-${(index % 3) + 1} bg-gradient-to-b from-background to-secondary/10`}>
                <CardHeader className="pb-4">
                  <div className="w-14 lg:w-16 h-14 lg:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 group-hover-scale">
                    <service.icon className="h-6 lg:h-8 w-6 lg:w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-lg lg:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm lg:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 hover-scale text-sm lg:text-base" asChild>
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="ml-2 h-3 lg:h-4 w-3 lg:w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-2">Success Stories</Badge>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers with our training programs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`group hover:shadow-tech transition-all duration-500 hover-lift animate-scale-in animate-stagger-${(index % 3) + 1} bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-3 lg:mr-4 group-hover-scale transition-transform">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm lg:text-base">{testimonial.name}</h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 lg:h-4 w-3 lg:w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white animate-fade-in-up">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
            <p className="text-base lg:text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of students who have transformed their careers with our expert-led training programs.
              Take the first step towards your tech future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 bg-white text-primary hover:bg-white/90 hover-lift shadow-lg" asChild>
                <Link to="/courses">
                  Enroll Today
                  <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base lg:text-lg px-6 lg:px-8 py-4 lg:py-6 border-white text-white hover:bg-white hover:text-primary hover-lift" asChild>
                <Link to="/contact">
                  Contact Us
                  <Phone className="ml-2 h-4 lg:h-5 w-4 lg:w-5" />
                </Link>
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="h-6 w-6 mb-2 opacity-80" />
                  <p className="text-sm opacity-90">Call Us</p>
                  <p className="font-semibold">+234 806 123 4567</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="h-6 w-6 mb-2 opacity-80" />
                  <p className="text-sm opacity-90">Email Us</p>
                  <p className="font-semibold">info@jetechhub.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="h-6 w-6 mb-2 opacity-80" />
                  <p className="text-sm opacity-90">Visit Us</p>
                  <p className="font-semibold">Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;