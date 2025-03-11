import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Descubre nuestras soluciones integrales de TI para empresas de todo el mundo. Somos expertos en desarrollo de software, gestión de infraestructura, ciberseguridad y más."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />

          {/* Primera sección: Presentación de servicios y valor diferencial */}
          <BasicSection
            imageUrl="/demo-illustration-1.svg"
            title="Servicios Informáticos Globales para Impulsar tu Negocio"
            overTitle="Soluciones a medida"
          >
            <p>
              En <strong>{EnvVars.SITE_NAME}</strong> ofrecemos una amplia gama de servicios informáticos diseñados para fomentar la
              competitividad de tu empresa a nivel global. Nos enfocamos en la{' '}
              <strong>innovación tecnológica y la optimización de procesos</strong> para que puedas concentrarte en lo que mejor sabes hacer:
              hacer crecer tu negocio.
            </p>
            <p>
              Nuestro equipo multidisciplinario está listo para asesorarte en cada paso.{' '}
              <Link href="/help-center">¿Tienes dudas? Visita nuestro Centro de Ayuda</Link> y descubre cómo podemos ayudarte a alcanzar tus
              objetivos de transformación digital.
            </p>
          </BasicSection>

          {/* Segunda sección: Más detalles de servicios y ventajas competitivas */}
          <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title="Desarrollo, Consultoría y Soporte de Clase Mundial"
            overTitle="Transformación digital"
            reversed
          >
            <p>
              Desde la creación de software personalizado y la migración a la nube, hasta la ciberseguridad y el soporte técnico integral,
              <strong> nuestros servicios se adaptan a cada necesidad</strong>. Conectamos la tecnología y la estrategia de negocio para
              asegurar un crecimiento sostenible.
            </p>
            <ul>
              <li>Asesoría y consultoría especializada en TI</li>
              <li>Desarrollo de software y aplicaciones a la medida</li>
              <li>Protección y mantenimiento continuo de sistemas</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>

        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
