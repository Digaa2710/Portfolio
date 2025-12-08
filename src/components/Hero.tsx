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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 xl:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 xl:space-y-8">
          <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-sm xl:text-base px-4 py-2 animate-fade-in">
            <Trophy className="w-4 h-4 xl:w-5 xl:h-5 mr-2" />
            Women Who Code Fullstack Hackathon Winner
          </Badge>

          <h1 className="text-4xl xl:text-7xl font-bold leading-tight animate-slide-up" style={{ animationDelay: "200ms" }}>
            <span className="gradient-text">MERN Stack Engineer</span>
            <br />
            <span className="text-foreground">AI/ML Practitioner</span>
          </h1>

          <p className="text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
            Specializing in Natural Language Processing and Explainable AI (XAI) with expertise in 
            full-stack development using MERN and Java. Building intelligent, scalable solutions 
            from Mumbai.
          </p>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full xl:w-auto hover:scale-105 transition-transform"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary/10 w-full xl:w-auto hover:scale-105 transition-transform"
            >
              Get in Touch
            </Button>
          </div>

          <div className="pt-8 xl:pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="w-6 h-6 xl:w-8 xl:h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
