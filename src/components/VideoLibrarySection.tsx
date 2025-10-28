import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoLibrarySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore our huge video lectures library
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sample Video covering everything you need from basics sciences to examination tutorials.
          </p>
          <div className="relative max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5"></div>
                <Button size="lg" className="relative z-10 h-16 w-16 rounded-full">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoLibrarySection;
