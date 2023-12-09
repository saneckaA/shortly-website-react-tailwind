import './App.css';
import StatsSection from './StatsSection';
import Form from './Form';
import MainSection from './MainSection';
import Navigation from './Navigation';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navigation />
      <MainSection />
      <Form />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
