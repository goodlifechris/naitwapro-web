"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m">

      {/* <Carousel 
            aspectRatio="9/ 12"

 images={images.map((image) => ({
          src: image,
          width: "100px",
          height: 100,
          alt: title,
        }))}
  transitionEffect="slide"
  autoPlay 
/> */}

{/* // Glowing flip transition */}
<Carousel
  aspectRatio="9 / 12"
  autoPlay
  interval={4000}
  transitionEffect="slide"
  
  images={[
    { src: "/images/1.jpeg", alt: "Global Vibes, African Roots" },
    { src: "/images/2.jpeg", alt: "Beats That Move You" },
    { src: "/images/3.jpeg", alt: "Rhythm Meets Soul" }
  ]}
/>
{/* // Parallax with thumbnails */}
{/* <Carousel 
  images={images.map((image) => ({
          src: image,
          width: "100px",
          height: 100,
          alt: title,
        }))}
  transitionEffect="parallax" 
  indicator="thumbnail"
  autoPlay
/> */}
{/* 
      <Carousel
      aspectRatio="9/ 12"
        images={images.map((image) => ({
          src: image,
          width: "100px",
          height: 100,
          alt: title,
        }))}
      /> */}
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >

    
      </Flex>
    </Column>
  );
};
