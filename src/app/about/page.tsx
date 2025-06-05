"use client";
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Row,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// export async function generateMetadata() {
//   const title = about.title;
//   const description = about.description;
//   const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;


//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "website",
//       url: `https://${baseURL}/about`,
//       images: [
//         {
//           url: ogImage,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

export default function About() {
  const videos=[
    
        {
      title:"Pro ‪@naitwapro‬ x Kristoff ‪@KristoffMWB‬ feat Bwanangoma - Tukadunde (official music video)",
      link:"MQfczJpXwtU"
        },
    {
      title:"PRO TALKS ABOUT MUSIC ON CHAT SPOT SWITCH TV",
      link:"Rsq-0QKwnT8"
        },
    {
      title:"Pro - VIBES ft Curlzin (Official Video)",
      link:"WZrMOUFpWMk"
        },

    {
    title:"Kameshika",
    link:"lz8Hgc2dh9Y"
      },

      {
        title:"Pro - More",
        link:"f0m9mIX_xis"
          },

          {
            title:"Pro - Everyday, Everywhere Acoustic (Official Audio)",
            link:"kQ5f-ktG4XI"
              },
              {
                title:"Pro - Dont Be Mad (Freestyle)",
                link:"ivLFurf_ew0"
                  }
      
    ];
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },

    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link)
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                {social.map(
                  (item) =>
                    item.link && (
                        <>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}




          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <h2 className="text-xl font-bold text-center mb-4">🔥 Latest Videos 🔥</h2>
      {/* <Carousel showThumbs={false} autoPlay infiniteLoop> */}
        {videos.map((video,index) => (
          <div key={index} className="relative">
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${video.link}`}
              title={video.title}
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
            <br/>
            <Row
    paddingY="12"
    gap="8"
    vertical="center"
    textVariant="label-default-s"
    onBackground="neutral-medium"
  >

            <h3 className="  bg-black bg-opacity-70 text-white text-sm p-10 rounded mt-5 title bg-red">
              {video.title} 
            </h3>
            </Row>
            <Row
            paddingY="12"
            gap="8"
            vertical="center"
            textVariant="label-default-s"
            onBackground="neutral-medium"
            className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <h3 className="bg-black bg-opacity-70 text-white text-xl font-semibold p-4 rounded-lg transition-all duration-300 transform group-hover:translate-y-2">
              {video.title}
            </h3>
          </Row>
          </div>
        ))}
      {/* </Carousel> */}

      {/* <Carousel showThumbs={false} autoPlay infiniteLoop> */}
        {/* {videos.map((link, index) => {
          return (
            link && (
              <div key={index} className="relative"> */}
                {/* Thumbnail Image */}
                {/* <img
                  src={`https://img.youtube.com/vi/${link.link}/hqdefault.jpg`} // YouTube thumbnail URL
                  alt={`YouTube Video ${index + 1}`}
                  className="rounded-lg shadow-lg cursor-pointer"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${link.link}`, "_blank")}
                />
                <p className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                  Click to Watch 🎥
                </p>
              </div>
            )
          );
        })} */}

              {/* <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column> */}
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
