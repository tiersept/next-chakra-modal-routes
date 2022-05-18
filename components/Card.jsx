import { Box, VStack, LinkOverlay, LinkBox, AspectRatio, Image, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

export const Card = ({ id, title, imageUrl }) => {
  const x = 'y';

  return (
    <LinkBox
      as={motion.div}
      layoutId={`card-container-${id}`}
      initial={{
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.0)',
      }}
      animate={{
        boxShadow: '10px 8px 84px rgba(0, 0, 0, 0.0)',
      }}
    >
      <Box
        as={motion.div}
        layoutId={`card-image-container-${id}`}
        borderRadius="lg"
        overflow="hidden"
      >
        <AspectRatio ratio={4 / 3}>
          {/* <Image src={imageUrl} alt={title} objectFit="cover" /> */}
          <Image src="../images/naruto.webp" alt={title} objectFit="cover" />
        </AspectRatio>
      </Box>
      <VStack alignItems="flex-start">
        <Box as={motion.div} layoutId={`title-container-${id}`} display="inline-block" mt={2}>
          <Heading as="h3" fontSize="md">
            <NextLink href={`/?articleId=${id}`} as={`/article/${id}`} passHref shallow>
              <LinkOverlay>{title}</LinkOverlay>
            </NextLink>
          </Heading>
        </Box>
      </VStack>
    </LinkBox>
  );
};
