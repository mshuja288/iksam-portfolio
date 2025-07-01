import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp
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
            <SocialIconLink href="https://github.com/mayashamaim" target="_blank" aria-label="GitHub">
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href="http://www.linkedin.com/in/haram-shamaim-b44678360" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="https://wa.me/923706979629?text=Hi! I'm interested in your development services. Can we discuss a project?" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp />
            </SocialIconLink>
            {/* <SocialIconLink href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">
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
              <span>shamaimharram@gmail.com</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+92 370 6979629</span>
            </ContactItem>
            <ContactItem>
              <FaWhatsapp />
              <a 
                href="https://wa.me/923706979629?text=Hi! I'm interested in your development services. Can we discuss a project?" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#a9b3c1', textDecoration: 'none' }}
              >
                Chat on WhatsApp
              </a>
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
          IKSAM CODE LAB © {new Date().getFullYear()} . All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
