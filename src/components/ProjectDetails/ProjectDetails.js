import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaTimes, FaSpinner } from 'react-icons/fa';
import {
  ProjectDetailsContainer,
  CloseButton,
  ContentWrapper,
  Title,
  Description,
  // Video,
  ScreenshotItem,
  Modal,
  ModalImage,
  LoadingSpinner,
  MasonryGrid
} from './ProjectDetails.elements';

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
};

const ProjectDetails = ({ project, onClose }) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  // const [isVideoLoading, setIsVideoLoading] = useState(true);
  // const [isVideoError, setIsVideoError] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    // Reset states when project changes
    console.log('Project changed, video URL:', project.videoUrl);
    //setIsPlaying(false);
    //setIsVideoLoading(true);
    //setIsVideoError(false);
    setLoadedImages({});

    // Preload the video
    if (project.videoUrl) {
      const video = new Audio(project.videoUrl);
      video.load();
    }
  }, [project]);

  //const handleVideoClick = () => {
  //  setIsPlaying(!isPlaying);
  //};

  const handleImageClick = (image) => {
    setSelectedImageIndex(image);
  };

  //const handleVideoLoad = () => {
  //  console.log('Video loaded successfully');
  //  setIsVideoLoading(false);
  //};

  //const handleVideoError = (error) => {
  //  console.error('Error loading video:', error);
  //  console.error('Video URL:', project.videoUrl);
  //  console.error('Native event:', error.nativeEvent);
  //  console.error('Error details:', error.nativeEvent?.target?.error);
  //  setIsVideoLoading(false);
  //  setIsVideoError(true);
  //};

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev === 0 ? project.screenshots.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) =>
          prev === project.screenshots.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, project.screenshots.length]);

  return (
    <ProjectDetailsContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>

      <ContentWrapper>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>

        {/* Video section temporarily disabled
        {project.videoUrl && (
          <VideoSection>
            <VideoWrapper onClick={handleVideoClick}>
              {isVideoLoading && (
                <LoadingSpinner>
                  <FaSpinner className="spinner" />
                </LoadingSpinner>
              )}
              {isVideoError && (
                <ErrorMessage>
                  Failed to load video. Please try refreshing the page.
                  <br />
                  <small>URL: {project.videoUrl}</small>
                </ErrorMessage>
              )}
              <Video
                key={project.videoUrl}
                controls={isPlaying}
                autoPlay={isPlaying}
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                style={{ display: isVideoLoading ? 'none' : 'block' }}
              >
                <source src={project.videoUrl} type="video/mp4" />
                <source src={project.videoUrl} type="video/webm" />
                Your browser does not support the video tag.
              </Video>
              {!isPlaying && !isVideoLoading && !isVideoError && (
                <PlayButton className="play-button">
                  <FaPlay />
                </PlayButton>
              )}
            </VideoWrapper>
          </VideoSection>
        )}
        */}

        {project.screenshots && project.screenshots.length > 0 && (
          <>
            {/* <ScreenshotsTitle>Screenshots</ScreenshotsTitle> 
            {/*
            <p style={{ color: '#a9b3c1', marginTop: '-12px', marginBottom: '32px', fontSize: '1rem' }}>
              Click any screenshot to enlarge it.
            </p> */}    
            <div style={{
              background: 'rgba(24,28,36,0.92)',
              borderRadius: '18px',
              padding: '32px 24px',
              boxShadow: '0 4px 32px rgba(75,89,247,0.08)',
              marginBottom: '48px',
              maxWidth: '100%',
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
            }}>
              <MasonryGrid
                breakpointCols={breakpointColumns}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
                style={{
                  display: 'inline-flex',
                  flexDirection: 'row',
                  gap: '32px',
                  minWidth: 'max-content',
                }}
              >
                {project.screenshots.map((screenshot, index) => (
                  <ScreenshotItem
                    key={index}
                    onClick={() => handleImageClick(index)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ display: 'inline-block', verticalAlign: 'top' }}
                  >
                    {!loadedImages[index] && (
                      <LoadingSpinner>
                        <FaSpinner className="spinner" />
                      </LoadingSpinner>
                    )}
                    <img 
                      src={screenshot} 
                      alt={`Screenshot ${index + 1}`} 
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                      style={{ opacity: loadedImages[index] ? 1 : 0 }}
                    />
                  </ScreenshotItem>
                ))}
              </MasonryGrid>
            </div>
          </>
        )}
      </ContentWrapper>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            style={{ cursor: 'pointer' }}
          >
            <ModalImage
              src={project.screenshots[selectedImageIndex]}
              alt={`Screenshot ${selectedImageIndex + 1}`}
            />
          </Modal>
        )}
      </AnimatePresence>
    </ProjectDetailsContainer>
  );
};

export default ProjectDetails; 