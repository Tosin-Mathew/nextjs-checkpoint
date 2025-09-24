// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
  githubUrl
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className={styles.links}>
          <Link href={projectUrl} className={styles.primaryLink}>
            View Project
          </Link>
          {githubUrl && (
            <Link href={githubUrl} className={styles.secondaryLink}>
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
