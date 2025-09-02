import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatBar } from "@/components/gaming/StatBar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, MapPin, Calendar, Code } from "lucide-react";
import characterStatsImage from "@/assets/character-stats.jpg";
import { getProjectStats } from "@/data/projects";

const skills = [
  // Core Business Analysis Skills
  { label: "Requirement Gathering", value: 95, maxValue: 100, color: "magic" as const, level: 95 },
  { label: "Stakeholder Management", value: 98, maxValue: 100, color: "health" as const, level: 98 },
  { label: "Business Process Analysis", value: 90, maxValue: 100, color: "mana" as const, level: 90 },
  { label: "Documentation & Reporting", value: 92, maxValue: 100, color: "gold" as const, level: 92 },
  
  // Data & Analytics Skills
  { label: "Data Analysis & Visualization", value: 88, maxValue: 100, color: "exp" as const, level: 88 },
  { label: "SQL & Database Management", value: 85, maxValue: 100, color: "mana" as const, level: 85 },
  { label: "Python Programming", value: 82, maxValue: 100, color: "magic" as const, level: 82 },
  { label: "Machine Learning & AI", value: 80, maxValue: 100, color: "gold" as const, level: 80 },
  
  // Technical Skills
  { label: "Power BI & Tableau", value: 87, maxValue: 100, color: "health" as const, level: 87 },
  { label: "Excel & Advanced Analytics", value: 95, maxValue: 100, color: "exp" as const, level: 95 },
  { label: "API Integration & Testing", value: 75, maxValue: 100, color: "mana" as const, level: 75 },
  { label: "Agile & Scrum Methodologies", value: 88, maxValue: 100, color: "magic" as const, level: 88 },
  
  // Soft Skills
  { label: "Project Management", value: 85, maxValue: 100, color: "gold" as const, level: 85 },
  { label: "Problem Solving", value: 93, maxValue: 100, color: "health" as const, level: 93 },
  { label: "Communication & Presentation", value: 90, maxValue: 100, color: "exp" as const, level: 90 }
];

export default function Profile() {
  const navigate = useNavigate();
  const projectStats = getProjectStats();
  
  const stats = [
    { label: "Projects Completed", value: projectStats.completed.toString() },
    { label: "Years of Experience", value: "1+" },
    { label: "Technologies Mastered", value: `${projectStats.technologiesCount}+` },
    { label: "Coffee Consumed", value: "∞" }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gaming-text">
              Character Profile
            </h1>
            <p className="text-muted-foreground mt-1">
              Level 99 Business Analyst & Data Professional
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Character Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary shadow-glow-magic">
              <div className="text-center space-y-6">
                {/* Character Portrait */}
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 mx-auto rounded-full border-4 border-primary shadow-glow-magic overflow-hidden"
                  >
                    <img 
                      src={characterStatsImage}
                      alt="Character Avatar"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 bg-gradient-gold text-background px-2 py-1 rounded-full text-xs font-bold">
                    LVL 99
                  </div>
                </div>

                {/* Character Info */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold gaming-text">
                      Amol Pashte
                    </h2>
                    <p className="text-primary font-semibold">
                      Business Analyst & Data Professional
                    </p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>Mumbai, Maharashtra</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>Available for quests</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Code className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-center">Specializes in AI, Data Science & Analytics</span>
                    </div>
                  </div>

                  <Button 
                    variant="quest" 
                    className="w-full gap-2"
                    asChild
                  >
                    <a 
                      href="/Amolp_resume.pdf" 
                      download="Amol_Pashte_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Skills & Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold gaming-text mb-4">Character Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={stat.label} className="p-4 text-center bg-card/60 backdrop-blur-sm border border-border/50">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    >
                      <div className="text-2xl font-bold text-accent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold gaming-text mb-4">Complete Skill Tree</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Core Business Skills */}
                <Card className="p-6 bg-card/60 backdrop-blur-sm space-y-4">
                  <h4 className="text-lg font-semibold text-primary mb-4 border-b border-border/50 pb-2">
                    🎯 Core Business Skills
                  </h4>
                  {skills.slice(0, 4).map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <StatBar {...skill} />
                    </motion.div>
                  ))}
                </Card>

                {/* Data & Analytics */}
                <Card className="p-6 bg-card/60 backdrop-blur-sm space-y-4">
                  <h4 className="text-lg font-semibold text-primary mb-4 border-b border-border/50 pb-2">
                    📊 Data & Analytics
                  </h4>
                  {skills.slice(4, 8).map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <StatBar {...skill} />
                    </motion.div>
                  ))}
                </Card>

                {/* Technical Skills */}
                <Card className="p-6 bg-card/60 backdrop-blur-sm space-y-4">
                  <h4 className="text-lg font-semibold text-primary mb-4 border-b border-border/50 pb-2">
                    ⚙️ Technical Skills
                  </h4>
                  {skills.slice(8, 12).map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 + index * 0.1 }}
                    >
                      <StatBar {...skill} />
                    </motion.div>
                  ))}
                </Card>

                {/* Leadership & Soft Skills */}
                <Card className="p-6 bg-card/60 backdrop-blur-sm space-y-4">
                  <h4 className="text-lg font-semibold text-primary mb-4 border-b border-border/50 pb-2">
                    🎭 Leadership & Soft Skills
                  </h4>
                  {skills.slice(12).map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.0 + index * 0.1 }}
                    >
                      <StatBar {...skill} />
                    </motion.div>
                  ))}
                </Card>
              </div>
            </motion.div>

            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-xl font-bold gaming-text mb-4">Character Bio</h3>
              <Card className="p-6 bg-card/60 backdrop-blur-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                  Proactive and detail-oriented Business Analyst & Data Professional with expertise in AI, Data Science, and Analytics. Experienced in requirement gathering, stakeholder collaboration, and translating business needs into functional/technical solutions.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Special Abilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Requirement Gathering & Documentation</Badge>
                      <Badge variant="secondary">Stakeholder Management</Badge>
                      <Badge variant="secondary">Data Analysis & Visualization</Badge>
                      <Badge variant="secondary">Machine Learning</Badge>
                      <Badge variant="secondary">SQL & Python</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Current Quest:</h4>
                    <p className="text-sm text-muted-foreground">
                    Seeking new opportunities to apply my skills in a challenging and rewarding environment.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}