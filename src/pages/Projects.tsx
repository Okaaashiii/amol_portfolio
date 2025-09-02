import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QuestCard } from "@/components/gaming/QuestCard";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { projects, getProjectStats } from "@/data/projects";

const difficulties = ["All", "Easy", "Medium", "Hard", "Legendary"];
const statuses = ["All", "Completed", "In Progress", "Available"];

export default function Projects() {
  const navigate = useNavigate();

  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  
  const projectStats = getProjectStats();

  const filteredProjects = projects.filter(project => {
    const matchesDifficulty = selectedDifficulty === "All" || project.difficulty === selectedDifficulty;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;

    return matchesDifficulty && matchesStatus;
  });

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
              Quest Board
            </h1>
            <p className="text-muted-foreground mt-1">
              Epic projects and legendary achievements
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/50 max-w-2xl mx-auto"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary justify-center">
              <Filter className="w-4 h-4" />
              <h3 className="font-semibold text-sm">Quest Filters</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">


              {/* Difficulty Filter */}
              <div className="text-center">
                <label className="text-xs font-medium text-muted-foreground block mb-2">Difficulty</label>
                <div className="flex flex-wrap gap-1 justify-center">
                  {difficulties.map(difficulty => (
                    <Badge
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? "default" : "secondary"}
                      className="cursor-pointer hover:scale-105 transition-transform text-xs"
                      onClick={() => setSelectedDifficulty(difficulty)}
                    >
                      {difficulty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="text-center">
                <label className="text-xs font-medium text-muted-foreground block mb-2">Status</label>
                <div className="flex flex-wrap gap-1 justify-center">
                  {statuses.map(status => (
                    <Badge
                      key={status}
                      variant={selectedStatus === status ? "default" : "secondary"}
                      className="cursor-pointer hover:scale-105 transition-transform text-xs"
                      onClick={() => setSelectedStatus(status)}
                    >
                      {status}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/50 text-center">
            <div className="text-2xl font-bold text-gaming-exp">
              {projectStats.completed}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/50 text-center">
            <div className="text-2xl font-bold text-gaming-gold">
              {projectStats.inProgress}
            </div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/50 text-center">
            <div className="text-2xl font-bold text-gaming-mana">
              {projectStats.available}
            </div>
            <div className="text-sm text-muted-foreground">Available</div>
          </div>
          <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-border/50 text-center">
            <div className="text-2xl font-bold text-primary">
              {projectStats.total}
            </div>
            <div className="text-sm text-muted-foreground">Total Quests</div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <QuestCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold gaming-text mb-2">No Quests Found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters to discover more epic adventures!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}