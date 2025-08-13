"use client";

import { Flex, RevealFx, Scroller, SmartImage } from "@/once-ui/components";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Image {
  src: string;
  alt: string;
}

type TransitionEffect = "slide" | "fade" | "flip" | "glow" | "parallax" | "zoom";

interface CarouselProps extends React.ComponentProps<typeof Flex> {
  images: Image[];
  indicator?: "line" | "thumbnail" | "none";
  aspectRatio?: string;
  sizes?: string;
  revealedByDefault?: boolean;
  autoPlay?: boolean;
  interval?: number;
  transitionEffect?: TransitionEffect;
  transitionDuration?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images = [],
  indicator = "line",
  aspectRatio = "12 / 9",
  sizes,
  revealedByDefault = false,
  autoPlay = false,
  interval = 5000,
  transitionEffect = "slide",
  transitionDuration = 0.8,
  ...rest
}) => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [isTransitioning, setIsTransitioning] = useState(revealedByDefault);
  const [initialTransition, setInitialTransition] = useState(revealedByDefault);
  const autoPlayRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const goToNext = () => {
    if (images.length <= 1) return;
    setActiveIndex([(activeIndex + 1) % images.length, 1]);
  };

  const goToPrev = () => {
    if (images.length <= 1) return;
    setActiveIndex([(activeIndex - 1 + images.length) % images.length, -1]);
  };

  const handleControlClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex([index, index > activeIndex ? 1 : -1]);
    }
  };

  const getTransitionVariant = () => {
    const baseTransition = {
      duration: transitionDuration,
      ease: [0.32, 0.72, 0, 1]
    };

    switch (transitionEffect) {
      case "slide":
        return {
          enter: { x: direction > 0 ? "100%" : "-100%", opacity: 0 },
          center: { x: "0%", opacity: 1 },
          exit: { x: direction > 0 ? "-50%" : "50%", opacity: 0 }
        };
      case "fade":
        return {
          enter: { opacity: 0 },
          center: { opacity: 1 },
          exit: { opacity: 0 }
        };
      case "flip":
        return {
          enter: { 
            rotateY: direction > 0 ? 90 : -90,
            opacity: 0,
            scale: 0.8
          },
          center: { 
            rotateY: 0,
            opacity: 1,
            scale: 1
          },
          exit: { 
            rotateY: direction > 0 ? -90 : 90,
            opacity: 0,
            scale: 0.8
          }
        };
      case "glow":
        return {
          enter: { 
            opacity: 0,
            filter: "blur(8px) brightness(2)"
          },
          center: { 
            opacity: 1,
            filter: "blur(0px) brightness(1)"
          },
          exit: { 
            opacity: 0,
            filter: "blur(8px) brightness(2)"
          }
        };
      case "parallax":
        return {
          enter: { 
            x: direction > 0 ? "50%" : "-50%",
            opacity: 0,
            scale: 0.9
          },
          center: { 
            x: "0%",
            opacity: 1,
            scale: 1
          },
          exit: { 
            x: direction > 0 ? "-30%" : "30%",
            opacity: 0,
            scale: 0.9
          }
        };
      case "zoom":
        return {
          enter: { 
            scale: 0.7,
            opacity: 0
          },
          center: { 
            scale: 1,
            opacity: 1
          },
          exit: { 
            scale: 1.3,
            opacity: 0
          }
        };
      default:
        return {
          enter: { x: direction > 0 ? "100%" : "-100%", opacity: 0 },
          center: { x: "0%", opacity: 1 },
          exit: { x: direction > 0 ? "-50%" : "50%", opacity: 0 }
        };
    }
  };

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      autoPlayRef.current = setInterval(goToNext, interval);
      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [activeIndex, autoPlay, interval, images.length]);

  useEffect(() => {
    if (!revealedByDefault && !initialTransition) {
      setIsTransitioning(true);
      setInitialTransition(true);
    }
  }, [revealedByDefault, initialTransition]);

  if (images.length === 0) {
    return null;
  }

  return (
    <Flex fillWidth gap="12" direction="column" {...rest}>
      <div 
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: aspectRatio,
          overflow: 'hidden',
          borderRadius: 'var(--radius-l)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
        onClick={goToNext}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={getTransitionVariant()}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: transitionDuration,
              ease: [0.32, 0.72, 0, 1]
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--radius-l)',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-l)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                zIndex: 1,
              }} />
              <SmartImage
                sizes={sizes}
                priority
                radius="l"
                alt={images[activeIndex]?.alt}
                aspectRatio={aspectRatio}
                src={images[activeIndex]?.src}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: images.length > 1 ? 'pointer' : 'default'
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {images.length > 1 && indicator !== "none" && (
        <>
          {indicator === "line" ? (
            <Flex gap="4" paddingX="s" fillWidth horizontal="center">
              {images.map((_, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleControlClick(index)}
                  style={{
                    background: activeIndex === index
                      ? "var(--neutral-on-background-strong)"
                      : "var(--neutral-alpha-medium)",
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                  initial={{ scaleX: 0.5 }}
                  animate={{ 
                    scaleX: activeIndex === index ? 1.5 : 1,
                    opacity: activeIndex === index ? 1 : 0.6
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="indicator-line"
                />
              ))}
            </Flex>
          ) : (
            <Scroller fillWidth gap="4" onItemClick={handleControlClick}>
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleControlClick(index)}
                  style={{
                    border: activeIndex === index 
                      ? "2px solid var(--brand-solid-strong)" 
                      : "2px solid transparent",
                    borderRadius: "var(--radius-m-nest-4)",
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  initial={{ scale: 0.9 }}
                  animate={{ 
                    scale: activeIndex === index ? 1.05 : 1,
                    borderColor: activeIndex === index 
                      ? "var(--brand-solid-strong)" 
                      : "rgba(255, 255, 255, 0.2)"
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <SmartImage
                    alt={image.alt}
                    aspectRatio="1 / 1"
                    sizes="120px"
                    src={image.src}
                    radius="m"
                    style={{
                      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </motion.div>
              ))}
            </Scroller>
          )}
        </>
      )}
    </Flex>
  );
};

Carousel.displayName = "Carousel";
export { Carousel };