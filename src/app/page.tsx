import {Hero, AboutMe, Portfolio, Contacts} from './components';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe/>
      <Portfolio/>
      <Contacts />
      {/* <HeroSection />
      <AboutMe/>
      <Portfolio/>
      <Contacts /> */}
    </>
  );
}