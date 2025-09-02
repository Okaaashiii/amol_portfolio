import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: "magic" | "gold" | "health" | "mana" | "exp";
  level?: number;
  className?: string;
}

const colorClasses = {
  magic: "from-gaming-magic to-gaming-magic-blue",
  gold: "from-gaming-gold to-accent",
  health: "from-gaming-health to-destructive",
  mana: "from-gaming-mana to-primary",
  exp: "from-gaming-exp to-gaming-exp"
};

export function StatBar({ label, value, maxValue, color, level, className = "" }: StatBarProps) {
  const percentage = (value / maxValue) * 100;
  
  return (
    <motion.div 
      className={`space-y-2 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <span className="gaming-text font-semibold text-sm uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="relative">
        <Progress
          value={percentage}
          className="h-3 bg-secondary shadow-inner"
        />
        <div 
          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClasses[color]} rounded-full transition-all duration-1000 shadow-glow-magic`}
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-foreground drop-shadow-lg gaming-text">
            {value}/{maxValue}
          </span>
        </div>
      </div>
    </motion.div>
  );
}