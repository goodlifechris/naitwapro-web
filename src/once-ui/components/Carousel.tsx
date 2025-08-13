"use client";

import { Flex, Scroller, SmartImage } from "@/once-ui/components";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local"; // Optional if you want a local font
import { Bebas_Neue } from "next/font/google"; // Google font example

// Google Font import (bold, blocky style)
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface Image {
  src: string;
  alt: string; // used as animated text
}

type TransitionEffect = "slide" | "fade" | "zoom";

interface CarouselProps extends React.ComponentProps<typeof Flex> {
  images: Image[];
  indicator?: "line" | "thumbnail" | "none";
  aspectRatio?: string;
  sizes?: string;
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
  autoPlay = false,
  interval = 5000,
  transitionEffect = "slide",
  transitionDuration = 0.8,
  ...rest
}) => {
  const [[activeIndex, direction], setActiveIndex] = useState<[number, number]>([0, 0]);
  const autoPlayRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const goToNext = () => {
    if (images.length <= 1) return;
    setActiveIndex([(activeIndex + 1) % images.length, 1]);
  };

  const handleControlClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex([index, index > activeIndex ? 1 : -1]);
    }
  };

  const getTransitionVariant = () => {
    switch (transitionEffect) {
      case "slide":
        return {
          enter: { y: direction > 0 ? "100%" : "-100%", opacity: 0 },
          center: { y: "0%", opacity: 1 },
          exit: { y: direction > 0 ? "-50%" : "50%", opacity: 0 }
        };
      case "fade":
        return {
          enter: { opacity: 0 },
          center: { opacity: 1 },
          exit: { opacity: 0 }
        };
      case "zoom":
        return {
          enter: { scale: 0.7, opacity: 0 },
          center: { scale: 1, opacity: 1 },
          exit: { scale: 1.3, opacity: 0 }
        };
      default:
        return {
          enter: { y: direction > 0 ? "100%" : "-100%", opacity: 0 },
          center: { y: "0%", opacity: 1 },
          exit: { y: direction > 0 ? "-50%" : "50%", opacity: 0 }
        };
    }
  };

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      autoPlayRef.current = setInterval(goToNext, interval);
      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
    }
  }, [activeIndex, autoPlay, interval, images.length]);

  if (images.length === 0) return null;

  return (
    <Flex fillWidth gap="12" direction="column" {...rest}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: aspectRatio,
          overflow: "hidden",
          borderRadius: "var(--radius-l)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }}
        onClick={goToNext}
      >
        {/* Image Animation */}
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={getTransitionVariant()}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: transitionDuration,
              ease: [0.32, 0.72, 0, 1],
            }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
            }}
          >
            {/* <SmartImage
              sizes={sizes}
              priority
              radius="l"
              alt={images[activeIndex]?.alt}
              aspectRatio={aspectRatio}
              src={images[activeIndex]?.src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: images.length > 1 ? "pointer" : "default",
              }}
            /> */}
            <SmartImage
  priority
  alt={images[activeIndex]?.alt}
  src={images[activeIndex]?.src}
  style={{
    width: '100%',
    height: '100vh', // Fixed height
    objectFit: 'contain'
  }}
/>
          </motion.div>
        </AnimatePresence>

        {/* Text Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex + "-text"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{
              duration: transitionDuration / 1.3,
              ease: "easeOut",
            }}
            className={bebas.className}
            style={{
              position: "absolute",
              bottom: "30px",
              left: "20px",
              color: "#fff",
              fontSize: "3rem", // BIG
              fontWeight: "900", // VERY BOLD
              letterSpacing: "2px",
              textTransform: "uppercase",
              textShadow: "0px 4px 16px rgba(0,0,0,0.9)",
              lineHeight: "1",
              maxWidth: "80%",
            }}
          >
            {images[activeIndex]?.alt}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator */}
      {images.length > 1 && indicator !== "none" && (
        indicator === "line" ? (
          <Flex gap="4" paddingX="s" fillWidth horizontal="center">
            {images.map((_, index) => (
              <motion.div
                key={index}
                onClick={() => handleControlClick(index)}
                style={{
                  background: activeIndex === index
                    ? "var(--neutral-on-background-strong)"
                    : "var(--neutral-alpha-medium)",
                  height: "4px",
                  width: activeIndex === index ? "24px" : "12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                transition={{ type: "spring", stiffness: 300 }}
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
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                <SmartImage
  priority
  alt={image.alt}
  src={image.src}
  style={{
    width: '100%',
    height:'100vh',
    objectFit: 'cover'
  }}
/>
                {/* <SmartImage
                  alt={image.alt}
                  aspectRatio="1 / 1"
                  sizes="120px"
                  src={image.src}
                  radius="m"
                  
                /> */}
              </motion.div>
            ))}
          </Scroller>
        )
      )}
    </Flex>
  );
};

Carousel.displayName = "Carousel";
export { Carousel };
