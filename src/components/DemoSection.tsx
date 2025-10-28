import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Stethoscope, Video, CheckCircle } from "lucide-react";

type DemoType = "sba" | "osce" | "video";

const demoContent = {
  sba: {
    title: "Single Best Answer (SBA) Questions",
    description: "Test your knowledge with clinically relevant multiple-choice questions",
    features: [
      "500+ questions across all medical subjects",
      "Detailed explanations for each answer",
      "Difficulty levels from basic to advanced",
      "Track your progress and performance",
    ],
    example: "Example: A 45-year-old patient presents with chest pain radiating to the left arm. What is the most appropriate immediate management?",
  },
  osce: {
    title: "OSCE Examinations",
    description: "Practice structured clinical examinations with realistic scenarios",
    features: [
      "Comprehensive station scenarios",
      "Step-by-step guidance",
      "Communication skills training",
      "Marking criteria and feedback",
    ],
    example: "Station: Cardiovascular Examination - Examine this patient who has been experiencing shortness of breath.",
  },
  video: {
    title: "Video Lectures",
    description: "Learn from expert-led video content covering essential topics",
    features: [
      "60+ hours of video content",
      "HD quality lectures",
      "Downloadable resources",
      "Closed captions available",
    ],
    example: "Featured: Cardiac Auscultation Techniques - Learn to identify heart sounds and murmurs (Duration: 45 minutes)",
  },
};

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState<DemoType>("sba");

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience Our Platform
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Try Demo Content
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore how our learning tools can help you master medical education
          </p>
        </div>

        {/* Demo Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            size="lg"
            variant={activeDemo === "sba" ? "default" : "outline"}
            onClick={() => setActiveDemo("sba")}
            className={`px-8 ${activeDemo === "sba" ? "bg-primary" : ""}`}
          >
            <FileText className="w-5 h-5 mr-2" />
            SBA Questions
          </Button>
          <Button
            size="lg"
            variant={activeDemo === "osce" ? "default" : "outline"}
            onClick={() => setActiveDemo("osce")}
            className={`px-8 ${activeDemo === "osce" ? "bg-secondary" : ""}`}
          >
            <Stethoscope className="w-5 h-5 mr-2" />
            OSCE
          </Button>
          <Button
            size="lg"
            variant={activeDemo === "video" ? "default" : "outline"}
            onClick={() => setActiveDemo("video")}
            className={`px-8 ${activeDemo === "video" ? "bg-primary" : ""}`}
          >
            <Video className="w-5 h-5 mr-2" />
            Videos
          </Button>
        </div>

        {/* Demo Content */}
        <Card className="max-w-5xl mx-auto p-8 md:p-12 animate-fade-in shadow-2xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-3">
                {demoContent[activeDemo].title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {demoContent[activeDemo].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Features:</h4>
                {demoContent[activeDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted/50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3">Sample:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {demoContent[activeDemo].example}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Start Practicing Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;
