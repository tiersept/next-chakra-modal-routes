import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ModalBase } from '@/components/ModalBase';
import { x } from '..';
// Modal.setAppElement('#__next');

const ArticlePage = ({ articleId }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ModalBase isOpen onClose={() => router.push('/')} />;
};

export default ArticlePage;

export function getStaticProps({ params: { articleId } }) {
  return { props: { articleId } };
}

export function getStaticPaths() {
  return {
    paths: x.map(articleId => ({
      params: { articleId: articleId.toString() },
    })),
    fallback: false,
  };
}
