import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import MDXRichText from 'components/MDXRichText';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';
import { getAllPostsSlugs, getSinglePost } from 'utils/postsFetcher';
import { getReadTime } from 'utils/readTime';
import Header from 'views/SingleArticlePage/Header';
import MetadataHead from 'views/SingleArticlePage/MetadataHead';
import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
import ShareWidget from 'views/SingleArticlePage/ShareWidget';
import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';

export default function SingleArticlePage(props) {

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    calculateReadTime();
    lazyLoadPrismTheme();

    function calculateReadTime() {
      const currentContent = contentRef.current;
      if (currentContent) {
        setReadTime(getReadTime(currentContent.textContent || ''));
      }
    }

    function lazyLoadPrismTheme() {
      const prismThemeLinkEl = document.querySelector('link[data-id="prism-theme"]');
      if (!prismThemeLinkEl) {
        const headEl = document.querySelector('head');
        if (headEl) {
          const newEl = document.createElement('link');
          newEl.setAttribute('data-id', 'prism-theme');
          newEl.setAttribute('rel', 'stylesheet');
          newEl.setAttribute('href', '/prism-theme.css');
          newEl.setAttribute('media', 'print');
          newEl.setAttribute('onload', "this.media='all'; this.onload=null;");
          headEl.appendChild(newEl);
        }
      }
    }
  }, []);

  function formatearFecha(fecha) {
    return fecha.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  // Se extraen el slug y el post cargado desde el JSON/Markdown
  const { slug, post } = props;
  const content = post.content;
  const { title, description, date, tags, imageUrl } = post.meta;
  const meta = { title, description, date, tags, imageUrl, author: '' };
  const formattedDate = formatearFecha(new Date(date));
  const absoluteImageUrl = imageUrl.replace(/\/+/, '/');

  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="/prism-theme.css" />
        </noscript>
      </Head>
      <OpenGraphHead slug={slug} {...meta} />
      <StructuredDataHead slug={slug} {...meta} />
      <MetadataHead {...meta} />
      <CustomContainer id="content" ref={contentRef}>
        <ShareWidget title={title} slug={slug} />
        <Header
          title={title}
          formattedDate={formattedDate}
          imageUrl={absoluteImageUrl}
          readTime={readTime}
        />
        <MDXRichText content={content} />
      </CustomContainer>
    </>
  );
}

export async function getStaticPaths() {
  // Se obtienen los slugs de los posts leyendo la carpeta 'posts'
  const slugs = getAllPostsSlugs();
  const paths = slugs.map((slug: string) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const { slug } = params as { slug: string };
  // Se busca el post que corresponda al slug solicitado
  const post = await getSinglePost(slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { slug, post } };
}

const CustomContainer = styled(Container)`
  position: relative;
  max-width: 90rem;
  margin: 10rem auto;

  ${media('<=tablet')} {
    margin: 5rem auto;
  }
`;
