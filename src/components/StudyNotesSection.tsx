import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, CheckCircle } from "lucide-react";

const highlights = [
  "Comprehensive notes covering all medical subjects",
  "Written by medical students, reviewed by experts",
  "Organized by subject and difficulty level",
  "Updated regularly with latest medical guidelines",
];

const StudyNotesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground uppercase">
            PUT YOUR PENS DOWN, WE'VE WRITTEN YOUR NOTES FOR YOU
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Access over 500 comprehensive study notes, carefully crafted to help you succeed in your medical studies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ready-Made Notes</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Stop wasting time writing notes. Our expertly prepared study materials cover everything you need to know.
            </p>
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 border-2 bg-primary/5 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4">What You Get</h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Study Notes</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-1">All Subjects</div>
                <div className="text-sm text-muted-foreground">Comprehensive Coverage</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">24/7 Access</div>
                <div className="text-sm text-muted-foreground">Study Anytime, Anywhere</div>
              </div>
            </div>
            <Button size="lg" className="w-full" variant="secondary">
              Browse Notes
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudyNotesSection;
