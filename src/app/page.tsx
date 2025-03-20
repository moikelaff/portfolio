import {Navbar, HeroSection, AboutMe, Portfolio, Contacts} from './components';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe/>
      <Portfolio/>
      <Contacts />
    </>
  );
}