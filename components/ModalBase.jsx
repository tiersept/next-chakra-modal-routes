import {
  Box,
  Container,
  AspectRatio,
  Image,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export const ModalBase = ({ isOpen, onClose }) => {
  const { query } = useRouter();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay backdropFilter="auto" backdropBlur="4px" />
      <ModalContent layoutId={`card-container-${query.articleId}`}>
        <Box
          as={motion.div}
          initial={{
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
            // backgroundColor: 'rgba(255, 255, 255, 0)',
          }}
          animate={{
            // backgroundColor: 'rgba(255, 255, 255, 1)',
            boxShadow: '10px 8px 84px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.3, delay: 0.3 },
          }}
          exit={{
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
            // backgroundColor: 'rgba(255, 255, 255, 0)',
          }}
        >
          <ModalHeader p={0}>
            <Box
              as={motion.div}
              layoutId={`card-image-container-${query.articleId}`}
              w="full"
              h="full"
              borderTopRadius="lg"
              overflow="hidden"
            >
              <AspectRatio width="100%" height="40vh" ratio={4 / 3}>
                <Image src="../images/naruto.webp" alt="naruto" objectFit="cover" />
              </AspectRatio>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <Box
                as={motion.div}
                layoutId={`title-container-${query.articleId}`}
                display="inline-block"
                mt={4}
              >
                <Heading as="h3" fontSize="2xl">
                  Naruto
                </Heading>
              </Box>
              <Box
                as={motion.div}
                initial={{ opacity: 0, y: '12px' }}
                animate={{ opacity: 1, y: '0', transition: { duration: 0.3, delay: 0.3 } }}
                pb={8}
              >
                <Text mt={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac finibus magna.
                  Mauris ac libero porttitor, egestas neque quis, porttitor libero. Nunc pharetra,
                  arcu eget euismod rhoncus, nisi nulla aliquet lacus, sit amet condimentum nisl
                  purus sit amet leo. Nunc in tincidunt magna. Sed lacus elit, congue fringilla dui
                  ut, tincidunt rhoncus sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Phasellus suscipit metus ac elit hendrerit, molestie ultricies sapien
                  bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </Text>
              </Box>
            </Container>
          </ModalBody>
        </Box>
      </ModalContent>
    </Modal>
  );
};
