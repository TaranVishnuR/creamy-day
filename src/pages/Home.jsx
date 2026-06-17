import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import WhySection from "../components/Why/WhySection";
import ProductsSection from "../components/Products/ProductsSection";
import FranchiseSection from "../components/Franchise/FranchiseSection";
import ContactSection from "../components/Contact/ContactSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhySection />
      <ProductsSection />
      <FranchiseSection />
      <ContactSection />
    </>
  );
};

export default Home;
