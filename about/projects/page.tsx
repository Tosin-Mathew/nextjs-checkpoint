// app/projects/page.tsx
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

// Mock project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Stripe, and MongoDB.",
    imageUrl: "/images/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    projectUrl: "/projects/ecommerce",
    githubUrl: "https://github.com/username/project1"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    imageUrl: "/images/project2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    projectUrl: "/projects/taskapp",
    githubUrl: "https://github.com/username/project2"
  },
  // Add more projects...
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
