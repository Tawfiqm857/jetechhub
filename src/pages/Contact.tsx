import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Navigation,
  Users,
  BookOpen,
  Wrench
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiry_type: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+234 123 456 7890",
      subtitle: "Mon-Fri 9AM-6PM",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@techhub.com",
      subtitle: "We'll respond within 24 hours",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+234 123 456 7890",
      subtitle: "Quick support available",
      action: "Chat Now"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "123 Tech Street, Victoria Island",
      subtitle: "Lagos, Nigeria",
      action: "Get Directions"
    }
  ];

  const departments = [
    {
      icon: BookOpen,
      title: "Training Inquiries",
      description: "Course enrollment, curriculum, and training programs",
      contact: "training@techhub.com"
    },
    {
      icon: Wrench,
      title: "Repair Services",
      description: "Gadget repairs, diagnostics, and technical support",
      contact: "repairs@techhub.com"
    },
    {
      icon: Users,
      title: "General Support",
      description: "General questions, partnerships, and information",
      contact: "info@techhub.com"
    }
  ];

  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We're open Monday to Friday from 9:00 AM to 6:00 PM, and Saturdays from 10:00 AM to 4:00 PM."
    },
    {
      question: "Do you offer payment plans for courses?",
      answer: "Yes, we offer flexible payment plans for all our courses. You can pay in installments over 2-3 months."
    },
    {
      question: "How long does gadget repair take?",
      answer: "Most repairs are completed within 1-3 days depending on the issue and parts availability."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes, we have a 95% job placement rate and work with 50+ partner companies to help graduates find employment."
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              📞 Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              We're Here to
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent"> Help You Succeed</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our courses, need tech support, or want to learn more about our services? 
              We'd love to hear from you. Our team is ready to assist you on your tech journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-tech transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {info.title}
                  </CardTitle>
                  <CardDescription className="font-medium text-foreground">
                    {info.content}
                  </CardDescription>
                  <CardDescription className="text-sm">
                    {info.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-tech">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+234 xxx xxx xxxx"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiry_type">Inquiry Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="courses">Course Information</SelectItem>
                          <SelectItem value="repairs">Gadget Repairs</SelectItem>
                          <SelectItem value="sales">Gadget Sales</SelectItem>
                          <SelectItem value="delivery">Delivery Services</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Brief subject of your message"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full tech-gradient hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Office Info */}
            <div className="space-y-6">
              <Card className="shadow-tech">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Visit Our Office</span>
                  </CardTitle>
                  <CardDescription>
                    Come visit us at our modern tech hub facility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-8 text-center mb-6">
                    <Navigation className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">Interactive map will be displayed here</p>
                    <Button variant="outline">Open in Google Maps</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-sm text-muted-foreground">
                          123 Tech Street, Victoria Island<br />
                          Lagos, Nigeria 101241
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Office Hours</div>
                        <div className="text-sm text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-tech">
                <CardHeader>
                  <CardTitle>Office Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {[
                      "Free Parking",
                      "WiFi Available",
                      "Wheelchair Accessible",
                      "Air Conditioned",
                      "Modern Facilities",
                      "Student Lounge"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to the right department for faster and more specialized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-tech transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                    <dept.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{dept.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-primary">{dept.contact}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Contact Department
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-tech transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button className="tech-gradient hover:shadow-glow transition-all duration-300">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            For urgent technical support or emergency repairs, reach out to us directly. 
            We're here to help when you need us most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:shadow-glow transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Emergency Hotline
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

export default Contact;