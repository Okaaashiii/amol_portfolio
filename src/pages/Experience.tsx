import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Briefcase, Star } from "lucide-react";

const experiences = [
  {
    role: "Junior Business Analyst",
    company: "VTech Solution Inc",
    duration: "Dec 2024 – May 2025",
    tasks: [
      "Gathered and analyzed requirements from business stakeholders, ensuring alignment with technical feasibility.",
      "Prepared BRDs, FRDs, workflow diagrams, and process documentation to capture requirements and track changes.",
      "Supported the development of an AI-driven resume matching application, contributing to requirement analysis, test planning, and validation of model outputs.",
      "Collaborated with data scientists and developers to refine matching algorithms by analyzing recruiter feedback and candidate-job outcomes.",
      "Wrote Python and SQL scripts for data validation, extraction, and transformation, improving accuracy of profile-job matching.",
      "Developed Power BI dashboards to visualize recruiter engagement, matching score trends, and system adoption metrics.",
      "Facilitated requirement workshops and sprint planning sessions, bridging the gap between technical teams and business stakeholders.",
      "Conducted UAT sessions with recruiters, collected feedback, and ensured smooth roll-out of application updates."
    ],
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
];

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gaming-text">
              Experience Forest
            </h1>
            <p className="text-muted-foreground mt-1">
              A journey through professional quests and challenges
            </p>
          </div>

          <Button
            variant="magic"
            onClick={() => navigate("/world-map")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </Button>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-9 top-0 w-0.5 h-full bg-border/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
              className="relative pl-20 mb-12"
            >
              <div className="absolute left-0 top-0 flex items-center justify-center w-16 h-16">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center border-2 border-primary shadow-glow-magic">
                  {exp.icon}
                </div>
              </div>

              <Card className="bg-card/60 backdrop-blur-sm border border-border/50">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                    <h2 className="text-xl font-bold gaming-text text-primary">
                      {exp.role}
                    </h2>
                    <div className="text-sm text-muted-foreground font-semibold">
                      {exp.duration}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-4">
                    {exp.company}
                  </h3>

                  <ul className="space-y-3">
                    {exp.tasks.map((task, taskIndex) => (
                      <motion.li
                        key={taskIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (taskIndex * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <Star className="w-4 h-4 text-gaming-gold mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{task}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}