import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";
import teamImage from "@/assets/team-photo.jpg";

const About = () => {
  const milestones = [
    {
      year: "2020",
      title: "TechHub Founded",
      description: "Started with a vision to democratize tech education in Nigeria"
    },
    {
      year: "2021",
      title: "First 100 Graduates",
      description: "Celebrated our first cohort of successful tech professionals"
    },
    {
      year: "2022",
      title: "Service Expansion",
      description: "Added gadget repair and sales services to serve the community better"
    },
    {
      year: "2023",
      title: "Industry Partnerships",
      description: "Partnered with 50+ tech companies for job placements"
    },
    {
      year: "2024",
      title: "500+ Success Stories",
      description: "Reached milestone of 500+ graduates now working in tech"
    }
  ];

  const teamMembers = [
    {
      name: "David Okafor",
      role: "Founder & CEO",
      specialization: "Software Development & Business Strategy",
      experience: "8+ years",
      description: "Former software engineer at Microsoft Nigeria with passion for education."
    },
    {
      name: "Sarah Adebayo",
      role: "Head of Training",
      specialization: "UI/UX Design & Digital Marketing",
      experience: "6+ years",
      description: "Ex-Design Lead at Paystack, expert in user experience and digital design."
    },
    {
      name: "Michael Johnson",
      role: "Technical Director",
      specialization: "Data Science & Web Development",
      experience: "7+ years",
      description: "PhD in Computer Science, former Data Scientist at Andela."
    },
    {
      name: "Fatima Aliyu",
      role: "Operations Manager",
      specialization: "Project Management & Business Operations",
      experience: "5+ years",
      description: "MBA graduate with extensive experience in educational technology."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Education",
      description: "We believe in the transformative power of quality tech education and are passionate about making it accessible to everyone."
    },
    {
      icon: CheckCircle,
      title: "Excellence & Quality",
      description: "We maintain the highest standards in our training programs, ensuring students receive world-class education."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "We're committed to building a thriving tech community and contributing to Nigeria's digital transformation."
    },
    {
      icon: TrendingUp,
      title: "Innovation & Growth",
      description: "We continuously evolve our curriculum and methods to stay ahead of industry trends and demands."
    }
  ];

  const achievements = [
    { number: "500+", label: "Graduates" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "50+", label: "Partner Companies" },
    { number: "4.9/5", label: "Student Rating" }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              👥 About TechHub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Empowering the Next Generation of
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent"> Tech Leaders</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Since 2020, we've been at the forefront of technology education in Nigeria, 
              transforming lives through comprehensive training programs and professional services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TechHub was born from a simple observation: Nigeria has incredible talent, 
                  but many young people lack access to quality tech education that could 
                  transform their careers and lives.
                </p>
                <p>
                  Founded in 2020 by a team of experienced tech professionals, we set out 
                  to bridge this gap by creating comprehensive, practical training programs 
                  that prepare students for real-world tech careers.
                </p>
                <p>
                  What started as a small training center has grown into a comprehensive 
                  tech hub offering education, repair services, and gadget sales - all 
                  under one roof, serving our community's diverse technology needs.
                </p>
                <p>
                  Today, we're proud to have helped over 500 students launch successful 
                  tech careers while building partnerships with leading companies across 
                  Nigeria and beyond.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="TechHub Team" 
                className="rounded-2xl shadow-tech w-full"
              />
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-lg border">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Lives Transformed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-tech hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To democratize access to quality technology education and services, 
                  empowering individuals and communities to thrive in the digital economy 
                  through practical skills, innovation, and excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-tech hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-tech-purple to-tech-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To be Africa's leading technology education and services hub, 
                  recognized for producing world-class tech professionals and 
                  driving digital transformation across communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the culture of excellence we've built at TechHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-tech transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform tech education in Nigeria.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-tech-blue to-tech-purple"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-tech transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">{milestone.year}</Badge>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals passionate about technology education and student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="text-sm">
                    <div className="font-medium">{member.specialization}</div>
                    <div className="text-muted-foreground">{member.experience} experience</div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Our Achievements
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and student success.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to start your tech career or need professional tech services, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="tech-gradient hover:shadow-glow transition-all duration-300"
            >
              Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;