import { ArrowDown, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10 max-w-7xl">
        {/* Flex container for image + text */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-20">
          
          {/* Text Section */}
          <div className="flex-1 text-center xl:text-left space-y-6 xl:space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-base xl:text-lg px-6 py-2.5 animate-fade-in inline-flex items-center justify-center xl:justify-start">
              <Trophy className="w-5 h-5 xl:w-6 xl:h-6 mr-2" />
              Women Who Code Fullstack Hackathon Winner
            </Badge>

            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-bold leading-tight animate-slide-up" style={{ animationDelay: "200ms" }}>
              <span className="gradient-text">MERN Stack Engineer</span>
              <br />
              <span className="text-foreground">AI/ML Practitioner</span>
            </h1>

            <p className="text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto xl:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
              Specializing in Natural Language Processing and Explainable AI (XAI) with expertise in 
              full-stack development using MERN and Java. Building intelligent, scalable solutions 
              from Mumbai.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 pt-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-lg px-8 py-6 hover:scale-105 transition-transform"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-lg px-8 py-6 hover:scale-105 transition-transform"
                
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/images/logo/profile.jpeg"
                alt="Divya Gandhi"
                className="relative w-64 h-64 sm:w-72 sm:h-72 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-primary/40 shadow-2xl ring-4 ring-primary/20"
              />
            </div>
          </div>

        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("skills")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-8 h-8 xl:w-10 xl:h-10" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;