import Layout from "../../Components/Layout/Layout";
import LandingPageAinDetails from "../LandingPageAinDetails/LandingPageAinDetails";
import LandingPageGreenSkills from "../LandingPageGreenSkills/LandingPageGreenSkills";
import LandingPageHeroSection from "../LandingPageHeroSection/LandingPageHeroSection";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <LandingPageHeroSection />
        <LandingPageGreenSkills />
        <LandingPageAinDetails />
      </div>
    </Layout>
  );
};

export default LandingPage;
