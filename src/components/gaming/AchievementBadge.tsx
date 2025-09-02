import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Zap } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: "trophy" | "award" | "star" | "zap";
  rarity: "common" | "rare" | "epic" | "legendary";
  dateEarned: string;
  className?: string;
}

const icons = {
  trophy: Trophy,
  award: Award,
  star: Star,
  zap: Zap
};

const rarityStyles = {
  common: "border-gaming-silver bg-card/60",
  rare: "border-gaming-mana bg-card/70 shadow-glow-magic",
  epic: "border-gaming-magic bg-card/80 shadow-glow-magic animate-glow-pulse",
  legendary: "border-gaming-gold bg-gradient-gold/10 shadow-glow-gold animate-glow-pulse"
};

const rarityTextColors = {
  common: "text-gaming-silver",
  rare: "text-gaming-mana",
  epic: "text-gaming-magic",
  legendary: "text-gaming-gold"
};

export function AchievementBadge({ 
  title, 
  description, 
  icon, 
  rarity, 
  dateEarned, 
  className = "" 
}: AchievementBadgeProps) {
  const IconComponent = icons[icon];
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.5 
      }}
      className={className}
    >
      <Card className={`relative p-4 border-2 ${rarityStyles[rarity]} transition-all duration-300 hover:shadow-gaming backdrop-blur-sm`}>
        <div className="text-center space-y-3">
          <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${rarityTextColors[rarity]} opacity-20 animate-glow-pulse`} />
            <IconComponent className={`w-8 h-8 ${rarityTextColors[rarity]} z-10`} />
          </div>
          
          <div className="space-y-1">
            <h3 className={`font-bold text-sm gaming-text ${rarityTextColors[rarity]}`}>
              {title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="space-y-2">
            <Badge 
              className={`${rarityTextColors[rarity]} bg-transparent border text-xs font-semibold uppercase tracking-wider`}
            >
              {rarity}
            </Badge>
            <p className="text-xs text-muted-foreground">
              Earned: {dateEarned}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}