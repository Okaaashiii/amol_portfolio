Portfolio Quest: An Interactive Gamified Portfolio
Welcome to my Portfolio Quest! This isn't just a portfolio; it's an interactive, RPG-style adventure showcasing my skills, projects, and professional journey as a Business Analyst and Data Professional. Navigate through the world map, view my character stats, check out completed quests (projects), and see the trophies (certifications) I've earned along the way.

Live Demo
(Link to your deployed Vercel/Netlify site will go here)

Features
🎮 Gamified RPG Theme: A unique and engaging user interface inspired by classic role-playing games.

🗺️ Interactive World Map: Navigate through different sections of the portfolio using a clickable world map.

👤 Character Profile: A dynamic profile page displaying my skills, stats, and a downloadable resume.

📜 Quest Board: A project showcase where each project is presented as a completed quest with details on difficulty, technologies used, and rewards.

🏆 Trophy Hall: A collection of my certifications and achievements.

📧 Contact Portal: A themed contact form to send me a "message quest."

📱 Fully Responsive: The entire experience is designed to be seamless on desktops, tablets, and mobile devices.

Tech Stack
This project was built using a modern and powerful set of technologies:

Frontend: React, TypeScript, Vite

Styling: Tailwind CSS, shadcn/ui

Animation: Framer Motion

Routing: React Router

Getting Started & Local Development
You can clone and run this project on your local machine.

Prerequisites
Node.js (v18 or later recommended)

npm or any other package manager

Installation & Setup
Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

Navigate to the project directory:

cd your-repo-name

Install the dependencies:

npm install

Run the development server:

npm run dev

The application will be running at http://localhost:8080.

Updating Portfolio Content
Managing the content for this portfolio is straightforward.

Updating Projects & Achievements
The project and achievement data is currently managed directly within their respective component files.

Projects: To add, remove, or edit a project, modify the projects array in src/pages/Projects.tsx.

Achievements: To update certifications, modify the achievements array in src/pages/Achievements.tsx.

For easier updates post-deployment, consider moving this data to external JSON files or a Headless CMS.

Updating the Resume
Place your resume PDF file inside the public/ directory.

Update the link in src/pages/Profile.tsx to point to your new file. For example:

<a href="/Your_Resume_Name.pdf" download>
  Download Resume
</a>

Contact
Let's connect! Feel free to reach out for collaboration, opportunities, or just a friendly chat.

LinkedIn: linkedin.com/in/amolpashte

Email: amolpashte42@gmail.com
