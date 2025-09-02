import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Mail, MessageSquare, User, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Quest Message Sent! 🎉",
          description: "Your message has been delivered to the developer. Expect a response within 24 hours!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Quest Failed! ⚠️",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold gaming-text">
              Portal Gate
            </h1>
            <p className="text-muted-foreground mt-1">
              Send a message quest to the developer
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary shadow-glow-magic">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 mx-auto bg-gradient-magic rounded-full flex items-center justify-center shadow-glow-magic"
                  >
                    <Sparkles className="w-8 h-8 text-background" />
                  </motion.div>
                  <h2 className="text-2xl font-bold gaming-text">
                    Initiate Communication
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below to send your message through the mystical portal
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary font-semibold">
                        <User className="w-4 h-4 inline mr-2" />
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your adventurer name"
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-semibold">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@realm.com"
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-primary font-semibold">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Quest Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this quest about?"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-semibold">
                      Message Scroll
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your quest, project idea, or any questions you have..."
                      required
                      rows={6}
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="quest"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Quest Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Contact Info & Stats */}
          <div className="space-y-6">


            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 bg-card/60 backdrop-blur-sm">
                <h3 className="text-xl font-bold gaming-text mb-4">
                  Alternative Contact Methods
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:amolpashte42@gmail.com"
                    className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">Direct Email</div>
                      <div className="text-sm text-muted-foreground">
                        Click to send email
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/amol-pashte-a398831a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 text-gaming-mana" />
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">
                        /in/amol-pashte-a398831a7
                      </div>
                    </div>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Quest Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="p-6 bg-card/60 backdrop-blur-sm">
                <h3 className="text-xl font-bold gaming-text mb-4">
                  Quest Guidelines
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gaming-exp rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Project Collaborations:</strong> Describe your project goals and timeline
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gaming-gold rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Technical Questions:</strong> Feel free to ask about technologies or best practices
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-gaming-mana rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Job Opportunities:</strong> Include role details and company information
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>General Inquiries:</strong> Any other questions or collaboration ideas
                    </div>
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