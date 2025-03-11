import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Agentes de Inteligencia Artificial',
    description:
      'Automatiza procesos, impulsa la productividad y obtén insights en tiempo real para tomar decisiones estratégicas con mayor precisión.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Ecommerce escalable',
    description:
      'Desarrollamos tiendas en línea seguras y eficientes para que tu negocio venda productos o servicios a nivel global sin complicaciones.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Sistema de reservas para barberías',
    description:
      'Integra un sistema de reservas fácil de usar y personalizable, mejorando la gestión de citas y la experiencia de tus clientes.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Aplicaciones Fitness',
    description:
      'Diseñamos y desarrollamos aplicaciones para rutinas de ejercicio y seguimiento de progreso, fomentando la motivación de tus usuarios.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Integraciones con servicios externos',
    description:
      'Conecta tu plataforma con CRMs, pasarelas de pago y otras herramientas esenciales para optimizar tus operaciones diarias.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Asesoría y consultoría en TI',
    description:
      'Nuestro equipo de expertos te acompaña en la implementación de estrategias digitales que impulsen la competitividad de tu negocio.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'SEO y marketing digital',
    description:
      'Mejora tu posicionamiento en buscadores y fortalece la presencia de tu marca con estrategias de contenido y publicidad altamente efectivas.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Seguridad y protección de datos',
    description:
      'Implementamos protocolos de ciberseguridad y auditorías de vulnerabilidades para mantener la integridad y confidencialidad de tu información.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Mantenimiento y soporte continuo',
    description:
      'Garantizamos el correcto funcionamiento de tu plataforma con actualizaciones periódicas, monitoreo constante y asistencia técnica especializada.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
