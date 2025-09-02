export interface Project {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Legendary";
  reward: string;
  technologies: string[];
  status: "Completed" | "In Progress" | "Available";
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Stock Market Prediction",
    description: "Built a time-series forecasting model for stock price movements using Python, Pandas, and scikit-learn. Applied feature engineering with technical indicators and evaluated models with RMSE/MAPE.",
    difficulty: "Hard",
    reward: "8,000 XP + Forecasting Badge",
    technologies: ["Python", "Pandas", "scikit-learn"],
    status: "Completed",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Customer Churn Prediction",
    description: "Developed a classification model using logistic regression and random forest. Handled imbalanced datasets with SMOTE and created churn risk dashboards in Power BI.",
    difficulty: "Hard",
    reward: "7,500 XP + Analytics Badge",
    technologies: ["Python", "scikit-learn", "Power BI", "SMOTE"],
    status: "Completed",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Chatbot with NLP",
    description: "Designed a sentiment classification system using TF-IDF, Word2Vec, and logistic regression. Experimented with BERT embeddings for improved accuracy.",
    difficulty: "Legendary",
    reward: "10,000 XP + NLP Mastery Badge",
    technologies: ["Python", "TensorFlow", "Keras", "NLTK", "BERT"],
    status: "Completed",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Diversity and Inclusion Dashboard",
    description: "Developed a Power BI dashboard to track and analyze diversity and inclusion metrics within an organization.",
    difficulty: "Medium",
    reward: "5,000 XP + Inclusion Advocate Badge",
    technologies: ["Power BI", "DAX", "SQL"],
    status: "Completed",
    liveUrl: "https://example.com"
  },
  {
    title: "Call Center Dashboard",
    description: "Created a comprehensive Power BI dashboard to monitor and analyze call center performance metrics.",
    difficulty: "Medium",
    reward: "5,000 XP + Support Hero Badge",
    technologies: ["Power BI", "DAX", "SQL"],
    status: "Completed",
    liveUrl: "https://example.com"
  },
  {
    title: "Playing Obstacle Games using OpenCV",
    description: "Developed a Python application that uses OpenCV to play obstacle-based games by detecting and reacting to on-screen elements.",
    difficulty: "Hard",
    reward: "8,000 XP + Visionary Gamer Badge",
    technologies: ["Python", "OpenCV", "TensorFlow"],
    status: "Completed",
    githubUrl: "https://github.com/example"
  },
  {
    title: "AI Desktop Voice Assistant",
    description: "Created a voice-activated desktop assistant using Python, enabling users to perform tasks through voice commands.",
    difficulty: "Hard",
    reward: "8,500 XP + AI Companion Badge",
    technologies: ["Python", "SpeechRecognition", "pyttsx3"],
    status: "Completed",
    githubUrl: "https://github.com/example"
  },
  {
    title: "MCQ Quiz in Java",
    description: "Developed a multiple-choice quiz application in Java with a graphical user interface.",
    difficulty: "Easy",
    reward: "3,000 XP + Java Novice Badge",
    technologies: ["Java", "Swing"],
    status: "Completed",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Data Analysis of Fraudulent Transactions",
    description: "Conducted an in-depth analysis of transactional data to identify and predict fraudulent activities.",
    difficulty: "Hard",
    reward: "9,000 XP + Fraud Detective Badge",
    technologies: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    status: "Completed",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Data Analysis on Zomato Orders",
    description: "Analyzed Zomato order data to uncover trends, patterns, and insights into customer behavior and restaurant performance.",
    difficulty: "Medium",
    reward: "6,000 XP + Foodie Analyst Badge",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    status: "Completed",
    githubUrl: "https://github.com/example"
  }
];

// Helper functions to get project statistics
export const getProjectStats = () => {
  const completed = projects.filter(p => p.status === "Completed").length;
  const inProgress = projects.filter(p => p.status === "In Progress").length;
  const available = projects.filter(p => p.status === "Available").length;
  const total = projects.length;
  
  // Get unique technologies count
  const allTechnologies = projects.flatMap(p => p.technologies);
  const uniqueTechnologies = new Set(allTechnologies);
  
  return {
    completed,
    inProgress,
    available,
    total,
    technologiesCount: uniqueTechnologies.size
  };
};