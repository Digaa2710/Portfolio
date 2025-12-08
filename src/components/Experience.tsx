import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer Intern",
      company: "Tech Company Name",
      period: "Month Year - Month Year",
      description: [
        "Developed and maintained RESTful APIs using Node.js and Express.js, improving application performance by 30%",
        "Built responsive React components with modern state management patterns and hooks",
        "Designed and optimized MongoDB database schemas for efficient data retrieval",
        "Collaborated with cross-functional teams using Git for version control and code reviews",
      ],
      type: "internship",
    },
    {
      title: "Data Science Analyst Internship",
      company: "Analytics Firm Name",
      period: "Month Year - Month Year",
      description: [
        "Implemented and fine-tuned NLP models using Hugging Face Transformers for text classification",
        "Conducted comprehensive data analysis using Python, Pandas, and NumPy for business insights",
        "Developed machine learning pipelines for automated data processing and model deployment",
        "Created interactive business intelligence dashboards using Power BI for stakeholder reporting",
      ],
      type: "internship",
    },
  ];

  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "University Name, Mumbai",
    period: "Year - Year",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "Web Development",
      "Database Management Systems",
      "Natural Language Processing",
    ],
  };

  return (
    <section id="experience" className="py-16 xl:py-24 bg-background">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="text-center mb-12 xl:mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-muted-foreground text-base xl:text-lg max-w-2xl mx-auto">
            Professional journey and academic foundation in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 xl:space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 xl:w-6 xl:h-6 text-primary" />
              </div>
              <h3 className="text-2xl xl:text-3xl font-bold">Work Experience</h3>
            </div>

            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2 mb-2">
                    <CardTitle className="text-xl xl:text-2xl">{exp.title}</CardTitle>
                    <Badge variant="outline" className="border-primary/30 text-primary w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-base xl:text-lg font-medium text-foreground/80">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 xl:space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3 text-sm xl:text-base text-muted-foreground">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10">
                <GraduationCap className="w-5 h-5 xl:w-6 xl:h-6 text-secondary" />
              </div>
              <h3 className="text-2xl xl:text-3xl font-bold">Education</h3>
            </div>

            <Card className="bg-card border-border hover:border-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2 mb-2">
                  <CardTitle className="text-xl xl:text-2xl">{education.degree}</CardTitle>
                  <Badge variant="outline" className="border-secondary/30 text-secondary w-fit">
                    {education.period}
                  </Badge>
                </div>
                <CardDescription className="text-base xl:text-lg font-medium text-foreground/80">
                  {education.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm xl:text-base font-medium mb-3 text-foreground/90">
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-secondary/10 border-secondary/30 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-xs xl:text-sm px-3 py-1.5 hover:scale-105"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
