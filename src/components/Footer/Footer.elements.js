import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const FooterLink = styled(Link)`
  color: #a9b3c1;
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4b59f7;
    transform: translateX(5px);
  }
`;

export const FooterText = styled.p`
  color: #a9b3c1;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4b59f7;
    transform: translateY(-3px);
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

export const Copyright = styled.p`
  color: #a9b3c1;
  font-size: 0.9rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a9b3c1;
  font-size: 0.95rem;
`;
