import { memo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import { 
  Clock,
  Users,
  Award,
  CheckCircle,
  Download
} from "lucide-react";

interface Course {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  students: string;
  image: string;
  modules: string[];
  featured?: boolean;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = memo(({ course, index }: CourseCardProps) => {
  return (
    <Card 
      className={`group hover:shadow-tech transition-all duration-300 hover:-translate-y-1 ${
        course.featured ? 'border-primary shadow-lg' : ''
      }`}
    >
      {course.featured && (
        <div className="bg-gradient-to-r from-tech-blue to-tech-purple text-white px-4 py-2 text-sm font-medium text-center">
          🌟 Most Popular Course
        </div>
      )}
      
      <CardHeader className="pb-4">
         <div className="relative mb-6 overflow-hidden rounded-lg">
           <LazyImage
             src={course.image} 
             alt={`${course.title} training course at JE Tech Hub`}
             className="w-full h-56 group-hover:scale-105 transition-transform duration-500"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
           <Badge variant="outline" className="absolute top-3 right-3 bg-white/90 backdrop-blur text-primary font-semibold border-primary/20">
             {course.price}
           </Badge>
           <div className="absolute top-3 left-3 w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300 shadow-lg">
             <course.icon className="h-6 w-6 text-white" />
           </div>
           <div className="absolute bottom-3 left-3 right-3">
             <div className="text-white">
               <div className="text-sm font-medium opacity-90">{course.level}</div>
               <div className="text-xs opacity-75">{course.duration} • {course.students} enrolled</div>
             </div>
           </div>
         </div>
        
        <CardTitle className="group-hover:text-primary transition-colors text-xl">
          {course.title}
        </CardTitle>
         <CardDescription className="text-base leading-relaxed mb-4">
           {course.description}
         </CardDescription>
         
         <div className="flex flex-wrap gap-2 mb-4">
           <Badge variant="secondary" className="text-xs">{course.level}</Badge>
           <Badge variant="outline" className="text-xs">{course.duration}</Badge>
           <Badge variant="outline" className="text-xs">{course.students} students</Badge>
         </div>
      </CardHeader>

      <CardContent>
        {/* Course Details */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
          <div className="text-center">
            <Clock className="h-4 w-4 text-primary mx-auto mb-1" />
            <div className="text-sm font-medium">{course.duration}</div>
            <div className="text-xs text-muted-foreground">Duration</div>
          </div>
          <div className="text-center">
            <Users className="h-4 w-4 text-primary mx-auto mb-1" />
            <div className="text-sm font-medium">{course.students}</div>
            <div className="text-xs text-muted-foreground">Students</div>
          </div>
          <div className="text-center">
            <Award className="h-4 w-4 text-primary mx-auto mb-1" />
            <div className="text-sm font-medium">{course.level}</div>
            <div className="text-xs text-muted-foreground">Level</div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-sm">Course Modules:</h4>
          <ul className="space-y-2">
            {course.modules.map((module, moduleIndex) => (
              <li key={moduleIndex} className="flex items-start space-x-2 text-sm">
                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{module}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            className={`flex-1 transition-all duration-300 ${
              course.featured 
                ? 'tech-gradient hover:shadow-glow' 
                : 'hover:bg-primary'
            }`}
          >
            Enroll Now
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Syllabus</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

CourseCard.displayName = 'CourseCard';

export default CourseCard;