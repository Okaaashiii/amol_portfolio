import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AchievementBadge } from "@/components/gaming/AchievementBadge";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy } from "lucide-react";

const achievements = [
  {
    title: "Power BI",
    description: "Certified by PwC",
    icon: "award" as const,
    rarity: "rare" as const,
    dateEarned: "2023"
  },
  {
    title: "Data Analytics & Visualization",
    description: "Certified by Accenture",
    icon: "award" as const,
    rarity: "rare" as const,
    dateEarned: "2023"
  },
  {
    title: "SQL & Python for Data Analysis",
    description: "Certified by Anudip Foundation",
    icon: "award" as const,
    rarity: "rare" as const,
    dateEarned: "2024"
  },
  {
    title: "Business Analytics",
    description: "Certified by Agile Enterprise Coach",
    icon: "award" as const,
    rarity: "rare" as const,
    dateEarned: "2025"
  },
  {
    title: "RPA Essentials",
    description: "Certified by Automation Anywhere",
    icon: "award" as const,
    rarity: "rare" as const,
    dateEarned: "2025"
  },
  {
    title: "Alteryx Designer Core",
    description: "Certified by Alteryx",
    icon: "award" as const,
    rarity: "rare" as const,
    dateEarned: "2025"
  },
  {
    title: "OCI AI Foundation",
    description: "Certified by Oracle",
    icon: "award" as const,
    rarity: "rare" as const,
    dateEarned: "2025"
  }
];

const rarityStats = {
  common: achievements.filter(a => a.rarity === "common").length,
  rare: achievements.filter(a => a.rarity === "rare").length,
  epic: achievements.filter(a => a.rarity === "epic").length,
  legendary: achievements.filter(a => a.rarity === "legendary").length
};

export default function Achievements() {
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
              Trophy Hall
            </h1>
            <p className="text-muted-foreground mt-1">
              Legendary achievements and rare accomplishments
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

        {/* Achievement Stats - Hidden */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <Card className="p-4 text-center bg-card/60 backdrop-blur-sm border border-gaming-silver/50">
            <div className="text-2xl font-bold text-gaming-silver mb-1">
              {rarityStats.common}
            </div>
            <div className="text-sm text-muted-foreground">Common</div>
          </Card>
          <Card className="p-4 text-center bg-card/60 backdrop-blur-sm border border-gaming-mana/50">
            <div className="text-2xl font-bold text-gaming-mana mb-1">
              {rarityStats.rare}
            </div>
            <div className="text-sm text-muted-foreground">Rare</div>
          </Card>
          <Card className="p-4 text-center bg-card/60 backdrop-blur-sm border border-gaming-magic/50">
            <div className="text-2xl font-bold text-gaming-magic mb-1">
              {rarityStats.epic}
            </div>
            <div className="text-sm text-muted-foreground">Epic</div>
          </Card>
          <Card className="p-4 text-center bg-card/60 backdrop-blur-sm border border-gaming-gold/50 shadow-glow-gold">
            <div className="text-2xl font-bold text-gaming-gold mb-1">
              {rarityStats.legendary}
            </div>
            <div className="text-sm text-muted-foreground">Legendary</div>
          </Card>
        </motion.div>
        */}

        {/* Total Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-card/60 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-gaming-gold" />
              <h2 className="text-2xl font-bold gaming-text">Achievement Progress</h2>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                {achievements.length}/20
              </div>
              <p className="text-muted-foreground">
                Total achievements unlocked
              </p>
              <div className="w-full bg-secondary rounded-full h-4 mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(achievements.length / 20) * 100}%` }}
                  transition={{ duration: 2, delay: 0.8 }}
                  className="bg-gradient-gold h-4 rounded-full shadow-glow-gold"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.8 + index * 0.05,
                type: "spring",
                stiffness: 200
              }}
            >
              <AchievementBadge {...achievement} />
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Card className="p-8 bg-card/40 backdrop-blur-sm border-2 border-dashed border-primary/50 text-center">
            <div className="space-y-4">
              <div className="text-6xl animate-glow-pulse">✨</div>
              <h3 className="text-xl font-bold gaming-text text-primary">
                More Achievements Coming Soon!
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                New legendary achievements will be unlocked as you complete more epic quests 
                and master advanced development techniques.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}