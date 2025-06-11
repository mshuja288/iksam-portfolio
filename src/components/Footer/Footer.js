import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterText,
  SocialLinks,
  SocialIconLink,
  FooterBottom,
  Copyright,
  ContactInfo,
  ContactItem
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Me</FooterTitle>
          <FooterText>
            Full Stack & Mobile Developer specializing in modern web and mobile application development.
            Creating scalable, efficient, and user-friendly solutions.
          </FooterText>
          <SocialLinks>
            <SocialIconLink href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/projects">Projects</FooterLink>
          <FooterLink to="/about">About</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <FaEnvelope />
              <span>your.email@example.com</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+1 234 567 890</span>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Your Location, Country</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} IKSAM. All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
