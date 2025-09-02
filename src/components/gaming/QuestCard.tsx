import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

interface QuestCardProps {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Legendary";
  reward: string;
  technologies: string[];
  status: "Completed" | "In Progress" | "Available";
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const difficultyColors = {
  Easy: "bg-gaming-exp text-background",
  Medium: "bg-gaming-gold text-background", 
  Hard: "bg-gaming-health text-foreground",
  Legendary: "bg-gradient-magic text-foreground"
};

const statusColors = {
  Completed: "border-gaming-exp shadow-glow-magic",
  "In Progress": "border-gaming-gold shadow-glow-gold",
  Available: "border-primary shadow-glow-magic"
};

export function QuestCard({ 
  title, 
  description, 
  difficulty, 
  reward, 
  technologies, 
  status, 
  liveUrl, 
  githubUrl, 
  className = "" 
}: QuestCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card className={`relative p-6 bg-card/50 backdrop-blur-sm border-2 ${statusColors[status]} transition-all duration-300 hover:shadow-gaming`}>
        <div className="absolute top-4 right-4 z-10">
          <Badge className={`${difficultyColors[difficulty]} font-bold text-xs`}>
            {difficulty}
          </Badge>
        </div>
        
        <div className="space-y-4 pr-20">
          <div>
            <h3 className="text-xl font-bold gaming-text mb-2 pr-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-accent">🏆 Reward:</h4>
            <p className="text-sm bg-gradient-gold bg-clip-text text-transparent font-semibold">
              {reward}
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-primary">⚡ Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2 pt-2">
            {liveUrl && (
              <Button variant="quest" size="sm" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button variant="magic" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
          
          <div className="absolute bottom-4 right-4 z-10">
            <Badge variant={status === "Completed" ? "default" : "secondary"} className="text-xs">
              <Star className="w-3 h-3 mr-1" />
              {status}
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}