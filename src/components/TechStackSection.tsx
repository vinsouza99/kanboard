import React from "react";

const TechStackSection: React.FC = () => {
  const techStack = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces.",
      logoURL: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "TypeScript",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
      logoURL: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      logoURL: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    {
      name: "Redux",
      description: "A predictable state container for JavaScript apps.",
      logoURL: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    },
  ];
  return (
    <section id="techstack" className="px-8 pt-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 justify-center-safe align-middle">
        {techStack.map((tech, index) => (
          <div key={index} className="bg-gray-100/50 p-6 rounded-lg shadow-lg">
            <img
              src={tech.logoURL}
              alt={tech.name}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-700 text-center">
              {tech.name}
            </h3>
            <p className="text-gray-700">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
