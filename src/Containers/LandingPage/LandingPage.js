import Layout from "../../Components/Layout/Layout";
import LandingPageGreenSkills from "../LandingPageGreenSkills/LandingPageGreenSkills";
import LandingPageHeroSection from "../LandingPageHeroSection/LandingPageHeroSection";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <LandingPageHeroSection />
        <LandingPageGreenSkills />
      </div>
    </Layout>
  );
};

export default LandingPage;
