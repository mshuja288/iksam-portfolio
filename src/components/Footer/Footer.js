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
            <SocialIconLink href="https://github.com/mshuja288" target="_blank" aria-label="GitHub">
              <FaGithub />
            </SocialIconLink>
            {/* <SocialIconLink href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink> */}
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
              <span>mshuja288@gmail.com</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+92 305 6305158</span>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Mandi Bahauddin, Punjab, Pakistan</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          Shuja © {new Date().getFullYear()} . All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
