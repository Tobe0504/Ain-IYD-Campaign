import Layout from "../../Components/Layout/Layout";
import LandingPageHeroSection from "../LandingPageHeroSection/LandingPageHeroSection";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <LandingPageHeroSection />
      </div>
    </Layout>
  );
};

export default LandingPage;
