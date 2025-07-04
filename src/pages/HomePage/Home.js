import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from '../../components';
import { FaReact, FaNodeJs, FaPython, FaWhatsapp } from 'react-icons/fa';
import { SiTypescript, SiFlutter, SiCsharp } from 'react-icons/si';

// Import images
import heroBg from '../../assets/images/hero-bg.png';

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(42, 42, 42, 0.9) 100%), 
              url(${heroBg}) center/cover no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroContent = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  color: #fff;
  padding: 0 20px;

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: clamp(1rem, 3vw, 1.5rem);
    text-align: center;
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
`;

const Button = styled(motion.button)`
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  background: ${({ primary }) => (primary ? '#2563eb' : 'transparent')};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border: ${({ primary }) => (primary ? 'none' : '2px solid #fff')};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const TechIcon = styled(motion.div)`
  font-size: 2.5rem;
  color: #fff;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-5px);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const scrollToFooter = () => {
    // Try multiple selectors to find the footer
    const footer = document.querySelector('footer') || 
                  document.querySelector('.footer') || 
                  document.querySelector('[class*="footer"]');
    
    if (footer) {
      // Add a small delay to ensure the DOM is ready
      setTimeout(() => {
        footer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      // Fallback: scroll to bottom of page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const navigateToProjects = () => {
    navigate('/projects');
  };

  const navigateToServices = () => {
    navigate('/services');
  };

  const openWhatsApp = () => {
    const phoneNumber = '923706979629';
    const message = encodeURIComponent("Hi! I'm interested in your development services. Can we discuss a project?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <HeroSection>
        <HeroWrapper>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Full Stack & Mobile Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Specializing in modern web and mobile application development.
              Creating scalable, efficient, and user-friendly solutions.
            </motion.p>
            <HeroButtons>
              <Button
                primary
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToProjects}
              >
                View Projects
              </Button>
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToFooter}
              >
                Contact Me
              </Button>
              <Button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
                style={{ backgroundColor: '#25D366', borderColor: '#25D366', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <FaWhatsapp />
                WhatsApp
              </Button>
            </HeroButtons>
            <TechStack>
              <TechIcon whileHover={{ scale: 1.2 }}><FaReact /></TechIcon>
              <TechIcon whileHover={{ scale: 1.2 }}><FaNodeJs /></TechIcon>
              <TechIcon whileHover={{ scale: 1.2 }}><SiTypescript /></TechIcon>
              <TechIcon whileHover={{ scale: 1.2 }}><SiFlutter /></TechIcon>
              <TechIcon whileHover={{ scale: 1.2 }}><SiCsharp /></TechIcon>
              <TechIcon whileHover={{ scale: 1.2 }}><FaPython /></TechIcon>
            </TechStack>
          </HeroContent>
        </HeroWrapper>
      </HeroSection>

      <InfoSection 
        {...homeObjOne} 
        buttonOnClick={navigateToProjects}
      />
      <InfoSection 
        {...homeObjTwo} 
        buttonOnClick={navigateToServices}
      />
      <InfoSection 
        {...homeObjThree} 
        buttonOnClick={navigateToProjects}
      />
      <InfoSection 
        {...homeObjFour} 
        buttonOnClick={scrollToFooter}
      />
    </>
  );
};

export default Home;
