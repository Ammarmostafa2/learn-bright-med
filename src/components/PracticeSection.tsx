import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, RefreshCw } from "lucide-react";

const PracticeSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                Practice Makes Perfect!
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Test yourself with hundreds of our practice questions on all medical subjects written by medical students like you and reviewed by experts in the relevant field.
              </p>
              <Button size="lg" className="text-lg px-8">
                Start Practicing <FileText className="ml-2" />
              </Button>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 border-2 border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">REPETITION IS KEY!</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our adaptive learning system ensures you practice the topics you need most. The more you practice, the better you perform.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
