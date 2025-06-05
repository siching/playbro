import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import WhatsappButton from "./components/WhatsappButton";
import InfoSection from "./components/About";
import Footer from "./components/Footer";
import TwoColumnSection from "./components/Instructions";
import FAQAccordion from "./components/Faq";

function App() {
  return (
    <div className="flex flex-col min-h-screen shadow-xl">
      <Navbar />
      {/* Add padding-top to offset fixed navbar height (h-16 = mt-16) */}
      <div className="mt-16">
        <Banner />
        <TwoColumnSection />
        <InfoSection />
        <FAQAccordion />
        {/* Footer should be at the bottom of the page */}
        <Footer />
      </div>
      <WhatsappButton />
    </div>
  );
}

export default App;
