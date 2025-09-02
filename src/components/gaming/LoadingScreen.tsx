import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({ message = "Loading world assets..." }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-dark flex items-center justify-center z-50"
    >
      <div className="text-center space-y-6">
        {/* Animated loading icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative mx-auto w-16 h-16"
        >
          <Loader2 className="w-16 h-16 text-primary" />

          {/* Sparkles around the loader */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${i * 60}deg) translateY(-32px)`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Sparkles className="w-4 h-4 text-accent -translate-x-2 -translate-y-2" />
            </motion.div>
          ))}
        </motion.div>

        {/* Loading message */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold gaming-text text-primary">
            {message}
          </h2>

          {/* Sound indicator */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="flex items-center justify-center gap-2 text-sm text-accent"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>Portal opening...</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
          </motion.div>

          {/* Loading dots */}
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-border rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}