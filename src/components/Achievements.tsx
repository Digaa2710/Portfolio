import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star, GitBranch } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Women Who Code Fullstack Hackathon Winner",
      description:
        "First place winner in a competitive fullstack development hackathon, showcasing innovative solutions and technical excellence",
      highlight: true,
    },
    
   {
  icon: 'GitBranch', 
  title: "Hacktoberfest Super Contributor & Top Contributor",
  description:
    "Successfully completed Hacktoberfest, earning the Super Contributor badge. Recognized for consistent and high-quality contributions to open-source projects and maintaining active code repositories.",
  highlight: true, 
},
  ];

  return (
    <section id="achievements" className="py-16 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="text-center mb-12 xl:mb-16 animate-fade-in">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements & Recognition</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-2xl mx-auto">
            Milestones and accomplishments in technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className={`bg-card border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up ${
                  achievement.highlight
                    ? "border-primary/50 hover:border-primary shadow-lg shadow-primary/10"
                    : "hover:border-primary/30 hover:shadow-primary/5"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg transition-transform hover:scale-110 ${
                        achievement.highlight ? "bg-primary/20 animate-pulse-slow" : "bg-muted"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 xl:w-7 xl:h-7 ${
                          achievement.highlight ? "text-primary" : "text-foreground/70"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle
                        className={`text-lg xl:text-xl mb-2 ${
                          achievement.highlight ? "text-primary" : ""
                        }`}
                      >
                        {achievement.title}
                      </CardTitle>
                      <CardDescription className="text-sm xl:text-base">
                        {achievement.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
