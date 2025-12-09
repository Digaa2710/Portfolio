import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
  title: "Sentinel-XAI",
  description:
    "An advanced Machine Learning system developed for credit risk assessment. The core model is integrated with LIME and SHAP to deliver Explainable AI (XAI) outputs. The system provides immediate, local explanations that detail the precise feature contributions to every risk prediction, ensuring transparency and trust in the ML pipeline.",
  technologies: ["Python", "SHAP", "LIME", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter/Colab"],
  image: "https://miaoda-site-img.s3cdn.medo.dev/images/3b377cec-db9e-4486-935c-6a9c32ba0cb7.jpg", 
  github: "https://github.com/Digaa2710/Sentinel-XAI",
  demo: "#",
  category: "AI/ML (XAI Focus)",
},
    {
  title: "ZevEx: Cross-Lingual Event Extraction (NLP)",
  description:
    "Developed a Q&A-based event extraction model using XLM-RoBERTa-Large to identify Event Actor, Event Type, and Event Reason from news statements. Applied zero-shot cross-lingual transfer learning to evaluate the model on Gujarati (F1: 80.7%) and Marathi (F1: 82.95%) datasets. This project demonstrated the effectiveness of multilingual transformers in generalizing event extraction tasks to low-resource Indian languages.",
  technologies: ["XLM-RoBERTa-Large", "Transformers", "Hugging Face", "Python", "NLP"],
  image: "https://miaoda-site-img.s3cdn.medo.dev/images/1b9ffdd7-ed48-42e7-9aa0-b9c5e790cf74.jpg", 
  github: "https://github.com/Digaa2710/ZevEx",
  demo: "#", 
  category: "AI/ML (NLP Focus)",
},
{
  title: "Noteng",
  description:
    "Developed the entire frontend using React.js and Tailwind CSS. Noteng serves as an optimized, responsive, and accessible resource hub, helping college students quickly access notes, video lectures, and competition materials via a clean, reusable component library.",
  technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  image: "https://miaoda-site-img.s3cdn.medo.dev/images/d7a8a88f-a134-4f9f-b6ff-ecfec90440d6.jpg", // Placeholder image URL for a clean dashboard/UI
  github: "https://github.com/Digaa2710/noteng", 
  demo: "https://noteng.vercel.app/", 
  category: "Web Development (Front-End)",
},
{
  title: "SmartMail",
  description:
    "Built an end-to-end AI-powered email system using Java Full Stack (Spring Boot). The application utilizes a Large Language Model (LLM) for advanced communication automation, analyzing the tone of incoming emails and generating context-aware responses via sophisticated Prompt Engineering and robust REST APIs. The frontend is built with React.js.",
  technologies: ["Java", "Spring Boot", "React.js", "Large Language Model (LLM)", "REST APIs", "Prompt Engineering"],
  image: "https://miaoda-site-img.s3cdn.medo.dev/images/1be9f0f3-755c-47a7-8829-8cd7627cc654.jpg", 
  github: "https://github.com/Digaa2710/Email-Writer", 
  demo: "#", 
  category: "Full-Stack AI (Java/LLM)",
},
    {
  title: "SummarHire",
  description:
    "Built a full-stack job scraper that demonstrates end-to-end integration. The backend uses Flask and Selenium to extract job listings from a target site (Zepto). The core innovation is using DeepSeek AI to summarize lengthy job descriptions, which are then rendered as interactive, responsive cards on a React.js + TailwindCSS frontend.",
  technologies: ["React.js", "Tailwind CSS", "Flask", "Selenium", "DeepSeek AI", "Python", "JavaScript"],
  image: "https://miaoda-site-img.s3cdn.medo.dev/images/0dd7cbd5-f95f-45cc-82ae-11832344c4e6.jpg", 
  github: "https://github.com/Digaa2710/Job-Scraper", 
  demo: "#", 
  category: "Full-Stack AI/Web",
}
  ];

  return (
    <section id="projects" className="py-16 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="text-center mb-12 xl:mb-16 animate-fade-in">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
         
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
