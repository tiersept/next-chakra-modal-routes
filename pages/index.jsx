import { useEffect } from 'react';
import { Layout } from '@/layouts/default';
import { SimpleGrid, Box, Container, Heading, useDisclosure } from '@chakra-ui/react';
import { Card } from '@/components/Card';
import { router, useRouter } from 'next/router';
import { ModalBase } from '@/components/ModalBase';
import { LayoutGroup } from 'framer-motion';
import { CACHE_KEY, useContentQuery } from '@/hooks/useContentQuery';
// import useSWR from 'swr';
import { fetchPokemon } from '@/api/content';

export const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function Home({ fallback }) {
  const { pathname, query } = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  // const { data, isLoading, error } = useContentQuery();

  useEffect(() => {
    if (query.articleId) {
      onOpen();

      return;
    }
    onClose();
  }, [onClose, onOpen, pathname, query]);

  const handleOnClose = () => {
    router.push(pathname, undefined, { shallow: true });
  };

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <Container>
        <Heading as="h1" fontSize="6xl" color="brand.800" textAlign="center" fontWeight="bold">
          Its a fucking Next.js skeleton /w Chakra
        </Heading>
      </Container>

      <Box mt={12} mb={112} mx="auto" px={312}>
        <LayoutGroup>
          <SimpleGrid columns={3} spacing={10}>
            {/* {data?.map(({ id, name: title, sprites }) => ( */}
            {x?.map(id => (
              // <Card key={id} id={id} title={title} imageUrl={sprites.front_default} />
              <Card key={id} id={id} />
            ))}
          </SimpleGrid>

          <ModalBase isOpen={isOpen} onClose={handleOnClose} />
        </LayoutGroup>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  // const data = await fetchPokemon(CACHE_KEY);

  return {
    props: {
      fallback: {
        // [CACHE_KEY]: data,
      },
    },
  };
}
