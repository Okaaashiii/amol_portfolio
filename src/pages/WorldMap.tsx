import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Scroll, 
  TreePine, 
  Trophy, 
  Mail, 
  Home,
  Sparkles
} from "lucide-react";
import worldMapImage from "@/assets/world-map.jpg";

interface MapZone {
  id: string;
  title: string;
  description: string;
  route: string;
  icon: React.ElementType;
  position: { x: number; y: number };
  color: "magic" | "gold" | "exp" | "mana" | "health";
}

const zones: MapZone[] = [
  {
    id: "profile",
    title: "Stats Tower",
    description: "Character profile & abilities",
    route: "/profile",
    icon: User,
    position: { x: 20, y: 30 },
    color: "magic"
  },
  {
    id: "projects",
    title: "Quest Board",
    description: "Epic projects & challenges",
    route: "/projects",
    icon: Scroll,
    position: { x: 45, y: 60 },
    color: "gold"
  },
  {
    id: "experience",
    title: "Experience Forest",
    description: "Professional journey",
    route: "/experience",
    icon: TreePine,
    position: { x: 70, y: 25 },
    color: "exp"
  },
  {
    id: "achievements",
    title: "Trophy Cave",
    description: "Certifications & awards",
    route: "/achievements",
    icon: Trophy,
    position: { x: 65, y: 75 },
    color: "mana"
  },
  {
    id: "contact",
    title: "Portal Gate",
    description: "Send a message quest",
    route: "/contact",
    icon: Mail,
    position: { x: 85, y: 50 },
    color: "health"
  }
];

const colorClasses = {
  magic: "border-gaming-magic bg-gaming-magic/10 hover:shadow-glow-magic",
  gold: "border-gaming-gold bg-gaming-gold/10 hover:shadow-glow-gold",
  exp: "border-gaming-exp bg-gaming-exp/10 hover:shadow-glow-magic",
  mana: "border-gaming-mana bg-gaming-mana/10 hover:shadow-glow-magic",
  health: "border-gaming-health bg-gaming-health/10 hover:shadow-glow-magic"
};

export default function WorldMap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Map */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${worldMapImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-dark/80" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gaming-text">
              World Map
            </h1>
            <p className="text-muted-foreground mt-1">
              Choose your destination, adventurer
            </p>
          </div>
          
          <Button 
            variant="magic" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
        </div>
      </motion.div>

      {/* Interactive Map Zones */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6">
        <div className="relative h-[600px] md:h-[700px]">
          {zones.map((zone, index) => {
            const IconComponent = zone.icon;
            
            return (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200 
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${zone.position.x}%`,
                  top: `${zone.position.y}%`
                }}
              >
                {/* Zone Card */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group cursor-pointer"
                  onClick={() => navigate(zone.route)}
                >
                  <Card className={`p-4 border-2 ${colorClasses[zone.color]} backdrop-blur-sm transition-all duration-300 hover:shadow-gaming min-w-[200px]`}>
                    <div className="text-center space-y-3">
                      <div className="relative mx-auto w-12 h-12 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ 
                            duration: 8, 
                            repeat: Infinity, 
                            ease: "linear" 
                          }}
                          className="absolute inset-0 border-2 border-dashed border-current opacity-20 rounded-full"
                        />
                        <IconComponent className={`w-6 h-6 text-gaming-${zone.color} z-10`} />
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-sm gaming-text mb-1">
                          {zone.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {zone.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Hover tooltip */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1 text-xs whitespace-nowrap pointer-events-none shadow-gaming"
                  >
                    Click to explore
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-border" />
                  </motion.div>
                </motion.div>

                {/* Floating sparkles */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute -top-2 -right-2 pointer-events-none"
                >
                  <Sparkles className="w-4 h-4 text-primary opacity-60" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 p-6"
      >
        <Card className="max-w-2xl mx-auto p-4 bg-card/80 backdrop-blur-sm">
          <div className="text-center space-y-2">
            <h3 className="font-bold gaming-text text-primary">Navigation Guide</h3>
            <p className="text-sm text-muted-foreground">
              Each zone contains unique content and experiences. Click on any glowing landmark to teleport there instantly.
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}