import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Full-Stack/Web Development",
      icon: Code2,
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
      ],
    },
    {
      title: "AI/ML & Advanced NLP",
      icon: Brain,
      skills: [
        "Python",
        "Hugging Face",
        "Transformers",
        "TensorFlow",
        "Keras",
        "NLTK",
        "SpaCy",
        "Scikit-learn",
        "NumPy",
        "Pandas",
      ],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "Git", "Linux", "Cloudinary"],
    },
    {
      title: "Other Technologies",
      icon: Wrench,
      skills: ["Java", "C", "Power BI", "VBA"],
    },
  ];

  return (
    <section id="skills" className="py-16 xl:py-24 bg-background">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="text-center mb-12 xl:mb-16 animate-fade-in">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl xl:text-2xl">
                    <div className="p-2 rounded-lg bg-primary/20 animate-pulse-slow">
                      <Icon className="w-5 h-5 xl:w-6 xl:h-6 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="bg-primary/10 border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm px-3 py-1.5 cursor-default hover:scale-105 animate-fade-in"
                        style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
