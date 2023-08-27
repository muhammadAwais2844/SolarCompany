
import './App.css';
import Card_icon_desc from './comnponents/Card_icon_desc';
import Connesso from './comnponents/Connesso';
import Faqs from './comnponents/Faqs';
import Footer from './comnponents/Footer';
import Header from './comnponents/Header';
import Hero from './comnponents/Hero';
import Quote from './comnponents/Quote';
import Sire from './comnponents/Sire';
import Team from './comnponents/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Team />
      <Quote />
      <Card_icon_desc />
      <Connesso />
      <Sire />
      <Faqs />
      <Footer />

    </div>
  );
}

export default App;
