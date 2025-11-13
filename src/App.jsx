import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import { Banner1, Banner2, Banner3, Banner4 } from "./utils/banner";
import PricingSection from "./components/PricingSection/PricingSection";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex flex-col">

      <Navbar />

      <Banner data={Banner1} />
      <Banner data={Banner2} Isrotate />
      <Banner data={Banner3} />
      <PricingSection />
      <Banner data={Banner4} Isrotate1 />

      <Footer />
    </div>
  );
}

export default App;
