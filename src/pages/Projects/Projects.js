import React from "react";
import usePopcorn from "../../data/images/usePopcorn.png";
import forkify from "../../data/images/Forkify-bookmark.png";
import portfolio from "../../data/images/Portfolio.png";
import travelWorld from "../../data/images/Travel-World.png";
import shofy from "../../data/images/Shofy.png";

const projects = [
  {
    image: usePopcorn,
    title: "usePopcorn - Movie and Series Search Platform",
    description:
      "Built a feature-rich movie and series search application using React.js, integrating RESTful APIs for real-time access to ratings, summaries, and detailed information on over 10,000 title.Deployed a user-friendly watchlist functionality, enabling users to save and manage favorite titles, improving retention rates by 30%. Integrated IMDb rating and summary features for an enhanced user experience",
    demoLink: "https://usepopcorn-spandan.netlify.app/",
    codeLink: "https://github.com/Spandan2405/usePopcorn",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "REST API"],
  },
  {
    image: forkify,
    title: "Forkify - Personalized Recipe Explorer Website",
    description:
      " Designed and implemented a responsive recipe web application using HTML, CSS and JavaScript featuring API powered search, serving-based filtering, and detailed recipe viewing with ingredient lists and cooking instructions. Enhanced user engagement by 20% through interactive UI components and bookmarking features. Created a recipe creation module, allowing users to save custom recipes directly in the app",
    demoLink: "https://forkify-spandan.netlify.app/",
    codeLink: "https://github.com/Spandan2405/Forkify_Recipe",
    technologies: ["HTML", "SCSS", "JavaScript", "REST API", "Parcel"],
  },
  {
    image: portfolio,
    title: "Personal Portfolio Website - v1",
    description:
      "A clean and responsive single-page portfolio website. Showcases my projects, skills, and experience in a structured and professional layout. Designed for simplicity, accessibility, and mobile responsiveness, providing a seamless user experience.This site serves as a central hub for my professional identity.",
    demoLink: "https://portfolio-website-tawny-phi-52.vercel.app/",
    codeLink: "https://github.com/Spandan2405/portfolio-website",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    image: shofy,
    title: "Shofy - Jewelry E-commerce Platform",
    description:
      "Revamped an existing jewelry store website into a modern, mobile-friendly e-commerce platform using React.js, Bootstrap, and JavaScript, increasing user engagement. Created a visually appealing UI/UX design and a dynamic product catalog to showcase over 50 products effectively. Ensured cross-device compatibility by designing a fully responsive inter ",
    demoLink: "https://github.com/Spandan2405/Jwelery_Products",
    codeLink: "https://github.com/Spandan2405/Jwelery_Products",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Supabase",
    ],
  },
  {
    image: travelWorld,
    title: "Travel World - Tour Booking Website",
    description:
      "Developed a full-stack tour booking website using the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling users to browse tour packages, view details, and securely book tours. Streamlined the booking process by implementing an admin dashboard, reducing manual work by 30% . Integrated user authentication and authorization using JWT, ensuring secure and seamless transactions",
    demoLink: "https://github.com/Spandan2405/Travel-World",
    codeLink: "https://github.com/Spandan2405/Travel-World",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
    ],
  },
];
const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen w-full bg-[#1B1B1B] text-white py-12 px-6 md:px-12"
    >
      <div className="w-full md:max-w-[1500px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-2 border-cyan-400 inline-block py-4">
          Some of My Projects
        </h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        {projects.map((project, index) => (
          <div key={index} className="h-full w-full p-6 ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-md mb-4"
            />
            <div className="md:flex md:justify-between">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <div className="flex gap-4 mb-8">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 text-cyan-400 px-4 py-2 text-sm hover:bg-cyan-400 hover:text-white transition "
                >
                  DEMO
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 text-cyan-400 px-4 py-2 text-sm hover:bg-cyan-400 hover:text-white transition "
                >
                  CODE
                </a>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-lg mb-4 tracking-wide md:tracking-wider">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-gray-400 rounded-sm md:rounded-md px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
