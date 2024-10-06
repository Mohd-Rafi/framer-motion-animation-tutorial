import './App.scss';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import RandomCurve from './Components/RandomCurve/RandomCurve';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <RandomCurve />
      </section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
