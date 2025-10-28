import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 via-transparent to-primary/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Start Your Journey Today</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Excel in Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Medical Education?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of medical students who are already mastering their studies with our comprehensive platform. 
            Start your free trial today and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 border-2 hover:bg-primary/5"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required • 14-day free trial • Cancel anytime
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
