import Footer from "../../components/Footer/Footer";
// import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./index.css";
const LandingPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <main>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
