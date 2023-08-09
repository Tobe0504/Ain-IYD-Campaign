import Button from "../../Components/Button/Button";
import classes from "./LandingPageHeroSection.module.css";
import landingPageHeroSectionImage from "../../Assets/Images/landingPageHeroSectionImage.svg";

const LandingPageHeroSection = () => {
  return (
    <div className={classes.container}>
      <div>
        {" "}
        <h1>
          Build Skills
          <span>to save the world </span>
          <span>with AIESEC</span>
        </h1>
        <p>
          Join AIESEC in raising awareness about building a sustainable world as
          young people in Nigeria.
        </p>
        <div className={classes.buttonContainer}>
          <Button
            type="primary"
            onClick={() => {
              window.open("https://forms.gle/fu9SeyBEbMpfRWjeA");
            }}
          >
            Save The World
          </Button>
        </div>
      </div>

      <img src={landingPageHeroSectionImage} alt="Save the world" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="657"
        height="199"
        viewBox="0 0 427 319"
        fill="none"
        className={classes.arrowScribble}
      >
        <path
          d="M408 0L391.681 30.5561L426.303 29.4111L408 0ZM0 319C20.3573 319 85.2731 310.936 149.53 292.129C181.684 282.718 213.825 270.575 240.213 255.316C266.537 240.093 287.526 221.546 296.773 199.145L291.227 196.855C282.724 217.454 263.088 235.157 237.209 250.122C211.394 265.05 179.754 277.032 147.845 286.371C83.9769 305.064 19.6427 313 0 313V319ZM296.773 199.145C314.813 155.443 308.974 114.658 290.346 92.8038C280.978 81.8141 268.33 75.6201 254.068 76.6008C239.877 77.5766 224.612 85.6157 209.777 101.985L214.223 106.015C228.388 90.3843 242.311 83.4234 254.479 82.5867C266.576 81.7549 277.46 86.9359 285.779 96.6961C302.526 116.342 308.687 154.557 291.227 196.855L296.773 199.145ZM209.777 101.985C194.711 118.61 191.423 135.079 196.968 149.734C202.404 164.103 216.066 175.97 233.251 184.323C267.59 201.015 318.167 204.715 353.484 184.607L350.516 179.393C317.333 198.285 268.91 194.985 235.874 178.927C219.372 170.905 207.252 159.959 202.579 147.61C198.015 135.546 200.289 121.39 214.223 106.015L209.777 101.985ZM353.484 184.607C379.425 169.838 393.914 140.968 401.973 110.909C410.056 80.7626 411.838 48.8011 411.892 26.9895L405.892 26.9745C405.839 48.5522 404.068 79.927 396.178 109.356C388.264 138.873 374.362 165.816 350.516 179.393L353.484 184.607Z"
          fill="#131112"
        />
      </svg>
    </div>
  );
};

export default LandingPageHeroSection;
