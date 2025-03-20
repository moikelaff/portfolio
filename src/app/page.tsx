import {Hero, AboutMe, Portfolio, Contacts} from './components';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe/>
      <Portfolio/>
      {/* <HeroSection />
      <AboutMe/>
      <Portfolio/>
      <Contacts /> */}
    </>
  );
}