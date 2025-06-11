import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectDetailsContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #4b59f7;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #a9b3c1;
`;

export const VideoSection = styled.div`
  margin-bottom: 3rem;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;
  cursor: pointer;

  &:hover .play-button {
    transform: scale(1.1);
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;

export const ScreenshotsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #4b59f7;
`;

export const MasonryGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 0;
  width: 100%;
  gap: 32px;
  padding: 32px 0 0 0;

  .masonry-grid_column {
    padding-left: 0;
    background-clip: padding-box;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const ScreenshotItem = styled(motion.div)`
  margin-bottom: 0;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  background: #181c24;
  border: 1.5px solid #2a2e38;
  transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1);
  padding: 12px;
  min-width: 220px;
  max-width: 320px;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.06) translateY(-6px);
    box-shadow: 0 8px 32px rgba(75, 89, 247, 0.18);
    border-color: #4b59f7;
  }

  img {
    width: 100%;
    height: 140px;
    object-fit: contain;
    display: block;
    background: #23272f;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`;

export const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1002;
`;

export const ModalImage = styled.img`
  max-width: 98vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 8px 40px rgba(75, 89, 247, 0.25), 0 2px 8px rgba(0,0,0,0.12);
`;

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;

  .spinner {
    animation: spin 1s linear infinite;
    font-size: 2rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff4444;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1.1rem;
  z-index: 2;
`; 