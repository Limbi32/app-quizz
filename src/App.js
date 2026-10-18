import Espace from './components/espace';
import Etape from './components/etape';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 px-4 sm:px-8 lg:px-20 xl:px-40">
      <Header />
      <Hero />
      <Espace />
      <Etape />
      <Footer />
    </div>
  );
}

export default App;