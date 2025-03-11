import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

/*
  Hemos ajustado los textos para reflejar la oferta completa de servicios informáticos:
  - Agentes IA
  - Ecommerce
  - Barbería con reservas
  - Aplicaciones Fitness
  - Integraciones con servicios externos
  - Asesoría
  - SEO
  - Seguridad
  - Mantenimiento y soporte continuo
*/

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Agentes IA para tu negocio',
    description:
      'Integra soluciones de Inteligencia Artificial a medida para automatizar procesos, predecir tendencias y optimizar la toma de decisiones.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Ecommerce escalable',
    description:
      'Desarrollamos tiendas en línea robustas, seguras y fáciles de gestionar para que puedas vender tus productos o servicios en todo el mundo.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Barbería con sistema de reservas',
    description:
      'Diseñamos aplicaciones de reservas en línea para barberías, salones y spas. Simplifica la gestión de citas y brinda una mejor experiencia a tus clientes.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Aplicaciones Fitness',
    description:
      'Crea experiencias móviles y web para entrenamientos, planes nutricionales y seguimiento de progreso, impulsando el compromiso de tus usuarios.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Integraciones con servicios externos',
    description:
      'Conecta tu negocio con plataformas de pago, CRMs, ERPs y otras herramientas para sincronizar información y agilizar tu flujo de trabajo.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Asesoría y consultoría en TI',
    description:
      'Nuestro equipo de expertos te guía en estrategias digitales, adopción de nuevas tecnologías y optimización de procesos para maximizar tus resultados.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'SEO y marketing digital',
    description:
      'Mejora tu posicionamiento en buscadores y genera más tráfico. Implementamos estrategias de contenido y publicidad para llegar a tu audiencia ideal.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Seguridad y protección de datos',
    description:
      'Implementamos protocolos de ciberseguridad, encriptación de datos y auditorías de vulnerabilidades para salvaguardar tu negocio en todo momento.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Mantenimiento y soporte continuo',
    description:
      'Ofrecemos servicios de actualización, monitoreo y asistencia técnica para que tu plataforma funcione de forma estable y sin interrupciones.',
  },
];

export default function FeaturesPage() {
  return (
    <Page
      title="Características"
      description="Descubre cómo nuestras soluciones informáticas abarcan desde Agentes IA hasta la creación de plataformas de Ecommerce, asesoría, SEO y mucho más."
    >
      <Wrapper>
        <SectionTitle>Conoce nuestras soluciones en este breve video</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
