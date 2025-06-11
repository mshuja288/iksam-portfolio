import React, { useState } from 'react';
import styled from 'styled-components';
import { projects, categories } from './Data';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectDetails from '../../components/ProjectDetails';

const ProjectsContainer = styled.div`
  padding: 80px 0;
  background: #f9f9f9;
`;

const ProjectsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
  background: #f3f5ff;
  border-radius: 32px;
  box-shadow: 0 2px 12px rgba(75,89,247,0.06);
  padding: 12px 24px;
`;

const CategoryTab = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  background: ${({ active }) => (active ? '#4b59f7' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  font-weight: 600;
  font-size: 1.08rem;
  position: relative;
  outline: none;

  &:hover {
    background: #4b59f7;
    color: #fff;
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 4px 12px rgba(75,89,247,0.10);
  }

  &::after {
    content: '';
    display: ${({ active }) => (active ? 'block' : 'none')};
    position: absolute;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: #4b59f7;
    border-radius: 2px;
    transition: width 0.3s;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px;
  margin-top: 40px;
  padding-bottom: 40px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255,255,255,0.95);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 32px rgba(75, 89, 247, 0.10), 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), border 0.25s;
  border: 2.5px solid transparent;
  position: relative;

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 40px rgba(75, 89, 247, 0.18), 0 2px 8px rgba(0,0,0,0.12);
    border-color: #4b59f7;
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(75,89,247,0.18) 0%, rgba(0,0,0,0.18) 100%);
  opacity: 0.7;
  pointer-events: none;
`;

const ViewDetailsButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  background: #4b59f7;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.25s, transform 0.25s;
  box-shadow: 0 2px 12px rgba(75,89,247,0.12);
  cursor: pointer;
  z-index: 2;
  pointer-events: auto;

  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #4b59f7;
  font-size: 1.45rem;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  margin: 0 0 16px 0;
  color: #666;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;

const TechTag = styled.span`
  background: #e7eafe;
  color: #4b59f7;
  border-radius: 18px;
  padding: 6px 18px;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 1px 4px rgba(75,89,247,0.06);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [activeSubCategory, setActiveSubCategory] = useState('react');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <CategoryTabs>
          {Object.keys(categories).map((category) => (
            <CategoryTab
              key={category}
              active={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
                setActiveSubCategory(Object.keys(projects[category])[0]);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <CategoryTabs>
          {categories[activeCategory].map((subCategory) => (
            <CategoryTab
              key={subCategory.id}
              active={activeSubCategory === subCategory.id}
              onClick={() => setActiveSubCategory(subCategory.id)}
            >
              {subCategory.name}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <ProjectsGrid>
          {projects[activeCategory][activeSubCategory]?.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleProjectClick(project)}
            >
              <ProjectImageWrapper>
                <ProjectImage src={project.imageUrl} alt={project.title} />
                <ImageOverlay />
                <ViewDetailsButton>View Details</ViewDetailsButton>
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> Code
                  </ProjectLink>
                  <ProjectLink 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsWrapper>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails 
            project={{
              title: selectedProject.title,
              description: selectedProject.description,
              videoUrl: selectedProject.videoUrl,
              screenshots: selectedProject.screenshots,
              technologies: selectedProject.technologies,
              githubUrl: selectedProject.githubUrl,
              liveUrl: selectedProject.liveUrl
            }} 
            onClose={handleCloseProject}
          />
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects; 