import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const WhatsAppButtonContainer = styled.button`
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.3);

  &:hover {
    background-color: #128C7E;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const WhatsAppButton = ({ 
  phoneNumber = '923706979629', 
  message = "Hi! I'm interested in your development services. Can we discuss a project?",
  children = 'WhatsApp',
  ...props 
}) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <WhatsAppButtonContainer onClick={openWhatsApp} {...props}>
      <FaWhatsapp />
      {children}
    </WhatsAppButtonContainer>
  );
};

export default WhatsAppButton; 