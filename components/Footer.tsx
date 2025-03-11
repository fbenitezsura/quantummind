import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Compañía',
    items: [
      { title: 'Política de Privacidad', href: '/privacy-policy' },
      { title: 'Política de Cookies', href: '/cookies-policy' },
    ],
  },
  {
    title: 'Producto',
    items: [
      { title: 'Funciones', href: '/features' },
      { title: 'Algo', href: '/something' },
      { title: 'Algo más', href: '/something-else' },
      { title: 'Y algo adicional', href: '/and-something-else' },
    ],
  },
  {
    title: 'Conocimiento',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Contacto', href: '/contact' },
      { title: 'Preguntas Frecuentes', href: '/faq' },
      { title: 'Centro de Ayuda', href: '/help-center' },
    ],
  },
  {
    title: 'Otros',
    items: [
      { title: 'Funciones2', href: '/features2' },
      { title: 'Algo2', href: '/something2' },
      { title: 'Algo más2', href: '/something-else2' },
      { title: 'Y algo adicional2', href: '/and-something-else2' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.facebook.com/ehlpiphex" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/in/felipe-andres-benitez-sura-b40261aa/" passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>
            &copy; Derechos de autor 2025 - Felipe Benite Sura
          </Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;
