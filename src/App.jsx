
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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

function App() {
  return (
    <div className="bg-[#f2f2f1] min-h-screen">
      <Navbar />
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
