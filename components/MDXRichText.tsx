import createDOMPurify from 'dompurify';
import { marked } from 'marked';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';

export type RichTextProps = {
  content: string;
};

export default function RichText({ content }: RichTextProps) {
  const [sanitizedContent, setSanitizedContent] = useState('');

  useEffect(() => {
    // Este código se ejecuta solo en el cliente, ya que useEffect no se ejecuta en el servidor.
    if (typeof window !== 'undefined') {
      const DOMPurify = createDOMPurify(window);
      const htmlContent = marked.parse(content);
      const sanitized = DOMPurify.sanitize(htmlContent);
      setSanitizedContent(sanitized);
    }
  }, [content]);

  return (
    <Container dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  section:not(:last-child) {
    margin-bottom: 3.8rem;
  }

  a {
    word-break: break-word;
  }

  ${media('<=desktop')} {
    .remark-highlight {
      width: 100%;
      overflow-x: auto;
    }
  }

  & > section,
  .footnotes {
    /* Opcional: content-visibility: auto; */
  }

  h1, h2 {
    margin-top: 15px;
    font-size: 3.0rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 2.0rem;
    margin-bottom: 10px;
  }

  ol,
  ul {
    font-size: 1.8rem;
    line-height: 2.7rem;
    margin: 0;
    padding-left: 2.4rem;
    li {
      & > * {
        vertical-align: top;
      }
    }
    &:not(:last-child) {
      margin-bottom: 2.7rem;
    }
  }
`;
