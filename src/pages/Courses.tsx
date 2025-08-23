import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/LazyImage";
import CourseCard from "@/components/CourseCard";
import { memo } from "react";
import { 
  Code, 
  Palette, 
  BarChart3, 
  Smartphone, 
  Video, 
  TrendingUp,
  Clock,
  Users,
  Award,
  CheckCircle,
  Download,
  Calendar
} from "lucide-react";

// Lazy load images
const softwareDevImage = "/src/assets/course-software-dev.jpg";
const uiuxDesignImage = "/src/assets/course-uiux-design.jpg";
const dataAnalysisImage = "/src/assets/course-data-analysis.jpg";
const digitalMarketingImage = "/src/assets/course-digital-marketing.jpg";
const videoEditingImage = "/src/assets/course-video-editing.jpg";
const graphicsDesignImage = "/src/assets/course-graphics-design.jpg";
const coursesHeroImage = "/src/assets/courses-hero.jpg";

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: "Software Development",
      description: "Master modern programming languages including Python, JavaScript, React, and Node.js. Build full-stack applications and prepare for developer roles.",
      duration: "6 months",
      level: "Beginner to Intermediate",
      price: "₦150,000",
      students: "120+",
      image: softwareDevImage,
      modules: [
        "HTML, CSS & JavaScript Fundamentals",
        "React & Frontend Development",
        "Node.js & Backend Development",
        "Database Management",
        "Project Development & Deployment"
      ],
      featured: true
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Learn user-centered design principles, wireframing, prototyping, and design tools like Figma and Adobe XD to create stunning digital experiences.",
      duration: "4 months",
      level: "Beginner to Intermediate",
      price: "₦100,000",
      students: "85+",
      image: uiuxDesignImage,
      modules: [
        "Design Principles & Theory",
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Dive into data science with Python, SQL, Excel, and visualization tools. Learn to extract insights and make data-driven decisions.",
      duration: "5 months",
      level: "Intermediate",
      price: "₦130,000",
      students: "95+",
      image: dataAnalysisImage,
      modules: [
        "Python for Data Analysis",
        "SQL & Database Querying",
        "Statistical Analysis",
        "Data Visualization",
        "Machine Learning Basics"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Master digital marketing strategies including SEO, social media marketing, content marketing, and paid advertising campaigns.",
      duration: "3 months",
      level: "Beginner",
      price: "₦80,000",
      students: "150+",
      image: digitalMarketingImage,
      modules: [
        "Digital Marketing Fundamentals",
        "SEO & Content Marketing",
        "Social Media Marketing",
        "Google Ads & Facebook Ads",
        "Analytics & Performance Tracking"
      ]
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Learn professional video editing using Adobe Premiere Pro, After Effects, and DaVinci Resolve. Create compelling visual content.",
      duration: "3 months",
      level: "Beginner to Intermediate",
      price: "₦90,000",
      students: "70+",
      image: videoEditingImage,
      modules: [
        "Video Editing Fundamentals",
        "Adobe Premiere Pro",
        "Motion Graphics with After Effects",
        "Color Grading & Audio",
        "Project Workflow & Export"
      ]
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description: "Master visual communication through typography, layout design, branding, and tools like Adobe Photoshop, Illustrator, and InDesign.",
      duration: "4 months",
      level: "Beginner",
      price: "₦85,000",
      students: "110+",
      image: graphicsDesignImage,
      modules: [
        "Design Fundamentals",
        "Adobe Creative Suite",
        "Typography & Layout",
        "Brand Identity Design",
        "Print & Digital Design"
      ]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${coursesHeroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              🎓 Professional Training Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Transform Your Career with Our
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent"> Expert-Led Courses</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose from our comprehensive range of technology courses designed by industry experts. 
              Get hands-on experience, personalized mentorship, and job placement assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Industry-Relevant Curriculum</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Job Placement Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Certificate on Completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Why Choose Our Training Programs?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support to ensure your success throughout your learning journey and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of practical experience"
              },
              {
                icon: Award,
                title: "Certified Programs",
                description: "Receive industry-recognized certificates upon successful completion"
              },
              {
                icon: Calendar,
                title: "Flexible Schedule",
                description: "Choose from weekday, evening, or weekend class options"
              },
              {
                icon: CheckCircle,
                title: "Job Placement",
                description: "95% job placement rate with our career support program"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-tech transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tech-blue to-tech-purple text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our next cohort and transform your career with practical, industry-relevant skills. 
            Limited seats available for the upcoming batch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="hover:shadow-glow transition-all duration-300"
            >
              Enroll Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:shadow-glow transition-all duration-300 hover:text-primary transition-colors"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
