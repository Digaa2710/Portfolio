import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Text Summarizer",
      description:
        "Advanced NLP application leveraging Hugging Face Transformers for intelligent text summarization. Features real-time processing, multi-language support, and customizable summary lengths with a modern React interface.",
      technologies: ["Next.js", "Python", "Transformers", "Node.js", "MongoDB"],
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/3b377cec-db9e-4486-935c-6a9c32ba0cb7.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with MERN stack featuring responsive design and real-time inventory updates.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/d7a8a88f-a134-4f9f-b6ff-ecfec90440d6.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Explainable AI Model Dashboard",
      description:
        "Machine learning project implementing LIME and SHAP for model interpretability. Provides visual explanations for predictions, feature importance analysis, and interactive model exploration capabilities.",
      technologies: ["Python", "TensorFlow", "LIME", "SHAP", "Keras"],
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/36d04d47-be35-445f-bda6-415552f5587c.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive analytics dashboard for real-time data visualization and business intelligence. Features dynamic charts, customizable widgets, and comprehensive data filtering with export capabilities.",
      technologies: ["React", "D3.js", "Node.js", "Chart.js", "Express.js"],
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/0a04027e-b086-4eb4-916c-b04035fc0cbe.jpg",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="text-center mb-12 xl:mb-16 animate-fade-in">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions combining full-stack development with AI/ML capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden group hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 xl:h-56 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl xl:text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm xl:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-primary/30 text-primary text-xs hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/30 hover:bg-primary/10 hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
