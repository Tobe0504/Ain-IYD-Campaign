import classes from "./LandingPageGreenSkills.module.css";
import Button from "../../Components/Button/Button";
import greenSkillsSticker1 from "../../Assets/Images/greenSkillsSticker1.svg";
import greenSkillsSticker2 from "../../Assets/Images/greenSkillsSticker2.svg";
import greenSkillsSticker3 from "../../Assets/Images/greenSkillsSticker3.svg";
import greenSkillsSticker4 from "../../Assets/Images/greenSkillsSticker4.svg";
import greenSkillsSticker5 from "../../Assets/Images/greenSkillsSticker5.svg";
import greenSkillsStickersquiggly from "../../Assets/Images/greenSkillsSquiglly.svg";
import greenSkillsMobile from "../../Assets/Images/groupGreenSkillMobile.svg";

const LandingPageGreenSkills = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageSection}>
        <img src={greenSkillsSticker1} alt="Green skills sticker" />
        <img src={greenSkillsSticker2} alt="Green skills sticker" />
        <img src={greenSkillsSticker3} alt="Green skills sticker" />
        <img src={greenSkillsSticker4} alt="Green skills sticker" />
        <img src={greenSkillsSticker5} alt="Green skills sticker" />
        <img src={greenSkillsStickersquiggly} alt="Green skills sticker" />
      </div>
      <div className={classes.imageSectionMobile}>
        <img src={greenSkillsMobile} alt="Green skills" />
      </div>
      <div className={classes.textSection}>
        <h4>
          Green skills for young <br />
          people
        </h4>
        <p>
          International Youth Day is an annual awareness event created by the
          United Nations. This event exists to draw attention to issues
          surrounding young people worldwide. Over the years,  the themes have
          reflected relatable issues for young people, including mental health, 
          safe spaces, poverty eradication, peace, inclusive education and many
          more.
        </p>
        <p>
          AIESEC is one of the organisations participating in the International
          Youth Day event for 2023.
        </p>
        <div className={classes.buttonSection}>
          <Button type="primary">Register Now</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageGreenSkills;
