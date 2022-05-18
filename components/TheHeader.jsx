import NextLink from 'next/link';
import { Text, HStack, UnorderedList, List } from '@chakra-ui/react';

const items = [
  {
    href: '/',
    title: 'Home',
  },
];

export const TheHeader = () => (
  <HStack w="full" px={12}>
    <Text fontSize="md">Sup?!</Text>
    <UnorderedList>
      {items.map(item => (
        <List key={item.href}>
          <NextLink href={`${item.href}`}>
            <a>{item.title}</a>
          </NextLink>
        </List>
      ))}
    </UnorderedList>
  </HStack>
);
