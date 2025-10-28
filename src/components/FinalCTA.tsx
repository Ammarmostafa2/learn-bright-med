import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 via-transparent to-primary/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-foreground">
            Ready to Transform Your Studies?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Start your free trial today and experience the difference
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Schedule a Demo
              <Calendar className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
