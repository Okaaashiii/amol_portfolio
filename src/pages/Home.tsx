import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAudio } from "@/hooks/use-audio";
import LoadingScreen from "@/components/gaming/LoadingScreen";

export default function Home() {
  const navigate = useNavigate();
  const { playTreasureChest, playDing, playTransitionSoundtrack, stopTransitionSoundtrack } = useAudio();
  const [isLoading, setIsLoading] = useState(false);

  const handlePressStart = async () => {
    playTreasureChest();
    setIsLoading(true);

    // Play the transition soundtrack
    const audioElement = await playTransitionSoundtrack();

    // Simulate loading time for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Stop the soundtrack before navigation (optional)
    // stopTransitionSoundtrack();

    navigate("/world-map");
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen message="Loading world assets..." />}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-dark flex items-center justify-center relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 1920],
                y: [0, Math.random() * 1080],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        <div className="text-center space-y-8 z-10 max-w-4xl mx-auto px-6">
          {/* Logo/Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block"
            >
              <Gamepad2 className="w-16 h-16 text-primary mx-auto shadow-glow-magic" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black gaming-text bg-gradient-magic bg-clip-text text-transparent">
              Amol Pashte
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-accent">
              QUEST
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Welcome, brave adventurer! Enter the realm where code meets creativity,
            and discover the epic quests completed by a developer who turns
            imagination into reality.
          </motion.p>

          {/* Press Start Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              type: "spring",
              stiffness: 200
            }}
            className="space-y-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={handlePressStart}
              onMouseEnter={playDing}
              disabled={isLoading}
              className="group animate-glow-pulse hover:animate-pulse transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
            >
              <Play className="w-6 h-6 mr-3 group-hover:animate-spin transition-transform duration-300" />
              PRESS START
            </Button>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-sm text-muted-foreground"
            >
              Click to begin your journey
            </motion.p>
          </motion.div>

          {/* Controls hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center space-y-2"
          >
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <div className="px-2 py-1 border border-border rounded gaming-text">
                WASD
              </div>
              <span>to navigate</span>
              <div className="px-2 py-1 border border-border rounded gaming-text">
                CLICK
              </div>
              <span>to interact</span>
            </div>
          </motion.div>
        </div>

        {/* Ambient lighting effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1s" }} />
      </div>
    </>
  );
}