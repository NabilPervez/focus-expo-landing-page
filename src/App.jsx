
import Hero from './components/Hero';
import CardNav from './components/CardNav';
import About from './components/About';
import Pillars from './components/Pillars';
import WhyAttend from './components/WhyAttend';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Location from './components/Location';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FadeInWhenVisible from './components/FadeInWhenVisible';
import SmoothScroll from './components/SmoothScroll';

const imgVector = "/assets/Focus_Logo_Wmark_Black.png";

function App() {
  const navItems = [
    {
      label: "Event Info",
      bgColor: "#1c3d42",
      textColor: "#f2e7d1",
      links: [
        { label: "About", href: "#about" },
        { label: "Speakers", href: "#speakers" },
        { label: "Agenda", href: "#agenda" }
      ]
    },
    {
      label: "Logistics",
      bgColor: "#3ea0ab",
      textColor: "#fff",
      links: [
        { label: "Location", href: "#location" },
        { label: "FAQ", href: "#faq" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#f2e7d1",
      textColor: "#1c3d42",
      links: [
        { label: "Register", href: "https://luma.com/64o45o5x" },
        { label: "Contact", href: "mailto:info@focusexpo.com" } // Updated to simpler contact for now
      ]
    }
  ];

  return (
    <div className="bg-[#f2f2f1] min-h-screen">
      <SmoothScroll />
      <CardNav
        logo={imgVector}
        items={navItems}
        baseColor="#ffffff"
        menuColor="#1c3d42"
        buttonBgColor="#1c3d42"
        buttonTextColor="#ffffff"
      />
      <FadeInWhenVisible><Hero /></FadeInWhenVisible>
      <FadeInWhenVisible><About /></FadeInWhenVisible>
      <FadeInWhenVisible><Pillars /></FadeInWhenVisible>
      <FadeInWhenVisible><WhyAttend /></FadeInWhenVisible>
      <FadeInWhenVisible><Speakers /></FadeInWhenVisible>
      <FadeInWhenVisible><Agenda /></FadeInWhenVisible>
      <FadeInWhenVisible><Location /></FadeInWhenVisible>
      <FadeInWhenVisible><FAQ /></FadeInWhenVisible>
      <FadeInWhenVisible><CTA /></FadeInWhenVisible>
      <FadeInWhenVisible><Footer /></FadeInWhenVisible>
    </div>
  );
}

export default App;
