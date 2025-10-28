import { Card } from "@/components/ui/card";
import { BookOpen, Video, Stethoscope, FileText, Award, Clock } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "SBA Questions",
    description: "Practice with 500+ single best answer questions covering all medical subjects, written by experts.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Stethoscope,
    title: "OSCE Preparation",
    description: "Master clinical examinations with structured scenarios and comprehensive feedback.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Video,
    title: "Video Lectures",
    description: "Learn from 60+ expert-led video lectures covering basic sciences to clinical practice.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "Study Notes",
    description: "Access 500+ comprehensive notes organized by subject and difficulty level.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Award,
    title: "Track Progress",
    description: "Monitor your improvement with detailed analytics and personalized recommendations.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with 24/7 access to all content on any device.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive tools and resources designed for medical students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
