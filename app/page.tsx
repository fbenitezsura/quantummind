import Layout from './components/templates/Layout';
import Heading from './components/atoms/Heading';
import Button from './components/atoms/Button';

export default function Home() {
  return (
    <Layout>
      <section className="bg-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={1}>Welcome to Quantum Mind</Heading>
          <p className="mt-4 text-lg">Innovative Software Solutions for Your Business</p>
          <Button onClick={() => console.log('Get Started Clicked')}>Get Started</Button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={2}>About Us</Heading>
          <p className="mt-4 text-lg">We provide cutting-edge software solutions that help businesses grow and thrive in the digital age.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={2}>Our Projects</Heading>
          <p className="mt-4 text-lg">Explore some of the successful projects we've completed.</p>
          {/* Add project components here */}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading level={2}>Contact Us</Heading>
          <p className="mt-4 text-lg">Have questions? Get in touch with us!</p>
          <Button onClick={() => console.log('Contact Us Clicked')}>Contact Us</Button>
        </div>
      </section>
    </Layout>
  );
}
