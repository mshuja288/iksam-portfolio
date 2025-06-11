import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiFlutter, SiCsharp } from 'react-icons/si';
import { servicesData } from './Data';

const ServicesContainer = styled.div`
  padding: 80px 0;
  background: #f9f9f9;
`;

const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const ServicesTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const ServicesSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceCard = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #2563eb;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  color: #4b5563;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  &:before {
    content: "•";
    color: #2563eb;
    font-weight: bold;
    margin-right: 8px;
  }
`;

const getIcon = (iconName) => {
  switch (iconName) {
    case 'react':
      return <FaReact />;
    case 'node':
      return <FaNodeJs />;
    case 'nest':
      return <SiTypescript />;
    case 'flutter':
      return <SiFlutter />;
    case 'dotnet':
      return <SiCsharp />;
    case 'python':
      return <FaPython />;
    default:
      return null;
  }
};

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesHeader>
          <ServicesTitle>{servicesData.title}</ServicesTitle>
          <ServicesSubtitle>{servicesData.subtitle}</ServicesSubtitle>
        </ServicesHeader>
        
        <ServicesGrid>
          {servicesData.services.map((service) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ServiceIcon>{getIcon(service.icon)}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
