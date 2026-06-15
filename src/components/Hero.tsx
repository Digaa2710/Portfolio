import { ArrowDown, Trophy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = "/Resume/Divya_Gandhi_Resume.pdf"; // Path to resume file in public folder
    link.download = 'Divya_Gandhi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Flex container for image + text */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          
          {/* Text Section */}
          <div className="flex-1 w-full text-center lg:text-left space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-xs sm:text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 animate-fade-in inline-flex items-center mx-auto lg:mx-0">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2" />
              Women Who Code Fullstack Hackathon Winner
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up" style={{ animationDelay: "200ms" }}>
              <span className="gradient-text">MERN Stack Engineer</span>
              <br />
              <span className="text-foreground">AI/ML Practitioner</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Specializing in Natural Language Processing and Explainable AI (XAI) with expertise in 
              full-stack development using MERN and Java. Building intelligent, scalable solutions 
              from Mumbai.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 md:gap-4 pt-2 md:pt-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-sm md:text-base lg:text-lg px-6 md:px-8 py-5 md:py-6 hover:scale-105 transition-transform"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-sm md:text-base lg:text-lg px-6 md:px-8 py-5 md:py-6 hover:scale-105 transition-transform"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto text-sm md:text-base lg:text-lg px-6 md:px-8 py-5 md:py-6 hover:scale-105 transition-transform"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse-slow" />
              <img
                src="/images/logo/profile.jpeg"
                alt="Divya Gandhi - MERN Stack & AI/ML Engineer"
                className="relative w-full h-full object-cover rounded-full border-2 sm:border-4 border-primary/30 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* Scroll Down Button */}
        <div className="pt-8 md:pt-12 lg:pt-16 text-center animate-bounce">
          <button
            onClick={() => scrollToSection("skills")}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to skills section"
          >
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
