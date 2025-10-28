import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Access to 200 SBA questions",
        "20 OSCE scenarios",
        "10 video lectures",
        "Basic progress tracking",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      description: "Most popular for serious students",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Access to all 500+ SBA questions",
        "All OSCE scenarios",
        "All 60+ video lectures",
        "Advanced analytics",
        "Priority support",
        "Downloadable resources",
        "Mock exams",
      ],
      highlighted: true,
    },
    {
      name: "Ultimate",
      description: "Complete mastery package",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Everything in Professional",
        "1-on-1 mentorship sessions",
        "Custom study plans",
        "Early access to new content",
        "Private study group access",
        "Unlimited mock exams",
        "Certificate of completion",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Learning Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Flexible pricing to match your learning goals
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-background rounded-full border-2 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isYearly
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isYearly
                  ? "bg-secondary text-secondary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-secondary-light/20 px-2 py-1 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative animate-fade-in-up ${
                plan.highlighted
                  ? "border-primary shadow-2xl scale-105 bg-gradient-to-br from-card to-primary/5"
                  : "hover:shadow-xl transition-shadow"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm text-muted-foreground">
                    ${(plan.yearlyPrice / 12).toFixed(0)}/month billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    : ""
                }`}
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
