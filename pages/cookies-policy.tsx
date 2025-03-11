import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Política de Cookies">
      <CookiesPolicyContainer>
        <RichText>
          <>
            <p><strong>Introducción</strong></p>
            <p>
              En [Nombre del Sitio] valoramos la privacidad y la experiencia de nuestros usuarios, por lo que utilizamos cookies y tecnologías similares para mejorar el funcionamiento y la personalización de nuestro sitio web. Esta Política de Cookies tiene como objetivo informarle detalladamente qué son las cookies, cómo las usamos, y cómo puede gestionar su uso, asegurando el cumplimiento de la normativa vigente y evitando cualquier problema legal.
            </p>
            
            <p><strong>1. ¿Qué son las Cookies?</strong></p>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, smartphone o tablet) cuando visita un sitio web. Estos archivos permiten al sitio web recordar sus acciones y preferencias (como datos de inicio de sesión, idioma y otras configuraciones) durante un período de tiempo, facilitando una experiencia de navegación más rápida y personalizada.
            </p>
            
            <p><strong>2. Tipos de Cookies que Utilizamos</strong></p>
            <p>
              Nuestro sitio web utiliza diferentes tipos de cookies, entre las que se incluyen:
            </p>
            <ul>
              <li>
                <strong>Cookies Esenciales:</strong> Son necesarias para el funcionamiento básico del sitio, permitiéndole navegar y utilizar sus funciones esenciales. Sin estas cookies, el sitio no podría funcionar correctamente.
              </li>
              <li>
                <strong>Cookies de Rendimiento:</strong> Recogen información anónima sobre cómo los visitantes utilizan nuestro sitio, lo que nos ayuda a identificar áreas de mejora y a optimizar el rendimiento.
              </li>
              <li>
                <strong>Cookies de Funcionalidad:</strong> Permiten recordar sus preferencias y elecciones, como el idioma o la región, para ofrecerle una experiencia personalizada en cada visita.
              </li>
              <li>
                <strong>Cookies de Publicidad:</strong> Se utilizan para mostrarle anuncios relevantes basados en sus intereses, y para limitar el número de veces que ve un anuncio, ayudándonos a medir la eficacia de nuestras campañas publicitarias.
              </li>
            </ul>
            
            <p><strong>3. Uso de las Cookies en Nuestro Sitio</strong></p>
            <p>
              Utilizamos cookies para diversos fines que incluyen, pero no se limitan a:
            </p>
            <ul>
              <li>
                <strong>Mejorar la Experiencia del Usuario:</strong> Las cookies permiten recordar sus preferencias y facilitar la navegación, personalizando el contenido que se le muestra.
              </li>
              <li>
                <strong>Análisis y Optimización:</strong> Recopilamos datos de uso de manera anónima para analizar el tráfico, identificar tendencias y optimizar el funcionamiento del sitio.
              </li>
              <li>
                <strong>Publicidad Personalizada:</strong> Mostramos anuncios basados en sus intereses y comportamientos de navegación, asegurando que el contenido publicitario sea relevante para usted.
              </li>
              <li>
                <strong>Gestión de Sesiones:</strong> Facilitan la autenticación y la continuidad de su sesión en el sitio, permitiendo un acceso fluido a las funciones protegidas.
              </li>
            </ul>
            
            <p><strong>4. Gestión y Control de las Cookies</strong></p>
            <p>
              Usted tiene la posibilidad de gestionar, bloquear o eliminar las cookies a través de la configuración de su navegador. La mayoría de los navegadores modernos ofrecen opciones para:
            </p>
            <ul>
              <li>Aceptar o rechazar todas las cookies.</li>
              <li>Eliminar cookies almacenadas.</li>
              <li>Configurar alertas para notificarle cuando se envíen cookies.</li>
            </ul>
            <p>
              Tenga en cuenta que, si decide desactivar las cookies, algunas funcionalidades de nuestro sitio pueden verse afectadas y la experiencia de usuario puede no ser la óptima.
            </p>
            
            <p><strong>5. Cambios en Nuestra Política de Cookies</strong></p>
            <p>
              Nos reservamos el derecho de actualizar o modificar esta Política de Cookies en cualquier momento para adaptarla a cambios en la legislación o en nuestras prácticas. Las actualizaciones serán publicadas en esta página y, en caso de cambios significativos, se le notificará mediante un aviso destacado en nuestro sitio.
            </p>
            
            <p><strong>6. Contacto y Consultas</strong></p>
            <p>
              Si tiene alguna pregunta, comentario o inquietud acerca de nuestra Política de Cookies o sobre la gestión de las mismas, no dude en contactarnos a través de los siguientes medios:
            </p>
            <ul>
              <li><strong>Correo electrónico:</strong> cookies@[tusitio].com</li>
              <li><strong>Dirección postal:</strong> Calle Ejemplo 456, Ciudad, País</li>
              <li><strong>Teléfono:</strong> +34 987 654 321</li>
            </ul>
            
            <p>
              Esta Política de Cookies es efectiva a partir de la fecha de su publicación y se aplicará a todas las cookies utilizadas en nuestro sitio web. Agradecemos su confianza y estamos comprometidos a proteger su privacidad y ofrecerle una experiencia de navegación segura y personalizada.
            </p>
          </>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
