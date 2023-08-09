import classes from "./LandingPageAinDetails.module.css";
import AiNDetails1 from "../../Assets/Images/AiNDetails1.svg";
import Button from "../../Components/Button/Button";
import arrowPointer from "../../Assets/Images/arrowPointer.svg";
import greenTech from "../../Assets/Images/greenTechnology.svg";
import environmentalcare from "../../Assets/Images/environmentalCare.svg";
import walkingMan from "../../Assets/Images/walkingMan.svg";

const LandingPageAinDetails = () => {
  return (
    <div className={classes.container}>
      <div className={classes.iydDetails}>
        <div>
          <h4>
            <span>IYD 2023:</span> "Green Skills For Youth: Towards A
            Sustainable World"
          </h4>
          <p>
            Knowing the world is embarking on a transition to a more sustainable
            and green ecosystem in alliance with the Sustainable Development
            Goals (SDGs), this year’s theme reflects how youths come into play
            with them.
          </p>

          <p>
            Green skills, according to the UN, are the “knowledge, abilities,
            values and attitudes needed to live in, develop and support a
            sustainable and resource-efficient society”.
          </p>

          <p>
            Because youths like us will endure climate events for longer than
            the older generation, it’s our responsibility to build a life and
            world that will be convenient for us in the coming years.
          </p>
        </div>
        <div>
          <img src={AiNDetails1} alt="AiN Details" />
        </div>
      </div>

      <div className={classes.iydDetails}>
        <div>
          <iframe
            width="100%"
            height="515"
            src="https://www.youtube.com/embed/pmJsopcsS-Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p>
            We have curated an event specially designed for young people to
            learn how they can save the world with green skills. Register now to
            be a part of this life-changing and heroic event.
          </p>

          <img
            src={arrowPointer}
            alt="Arrow Pointer"
            className={classes.arrowPointer}
          />
          <div className={classes.buttonSection}>
            <Button
              type="primary"
              onClick={() => {
                window.open("https://forms.gle/fu9SeyBEbMpfRWjeA");
              }}
            >
              Register Now
            </Button>
          </div>
        </div>
        <div>
          <h4>
            Join AIESEC in Nigeria in creating youths with sustainable skills
          </h4>
          <p>
            AIESEC in Nigeria, a youth organisation aiming to contribute to
            achieving the Sustainable Development Goals (SDGs), is joining the
            IYD campaign and event for the first time this year.
          </p>

          <p>
            Become a hero and join AIESEC in Nigeria in her maiden edition of
            International Youth’s Day on the 19th of August, 2023
          </p>

          <img
            src={greenTech}
            alt="Green technology"
            className={classes.greentech}
          />
          <img
            src={environmentalcare}
            alt="Environmental care"
            className={classes.environCare}
          />
        </div>
      </div>
      <div className={`${classes.iydDetails} ${classes.whatIsAIESEC}`}>
        <div>
          <img src={walkingMan} alt="Walking man" />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="95"
            viewBox="0 0 150 95"
            fill="none"
            className={classes.crown}
          >
            <g filter="url(#filter0_d_1015_168)">
              <path
                d="M136.367 72.1948C64.0061 106.13 7.11553 72.1948 7.11553 72.1948C7.11553 72.1948 -2.30068 36.9504 11.6069 26.6587C24.0828 17.4265 29.6946 20.0316 38.056 25.0355C46.6943 30.2051 49.0349 48.7399 49.0349 48.7399C49.0349 48.7399 49.4386 23.6127 58.5168 11.811C68.4976 -1.1642 76.5106 -1.37611 86.463 11.811C96.4438 25.0355 96.4438 48.7399 96.4438 48.7399C96.4438 48.7399 96.4921 30.5475 104.428 25.0355C112.672 19.3102 122.998 18.8185 130.878 25.0355C146.213 37.1359 136.367 72.1948 136.367 72.1948Z"
                fill="#F3F4F7"
                stroke="#131112"
                strokeWidth="2.99424"
              />
              <path
                d="M77.5566 59.2207C78.8041 68.9519 64.332 68.7025 65.5796 59.2207"
                stroke="#131112"
                strokeWidth="2.4952"
              />
              <path
                d="M18.1708 49.9567C16.9233 40.2254 31.3954 40.4749 30.1478 49.9567"
                stroke="#131112"
                strokeWidth="2.4952"
              />
              <path
                d="M112.489 49.9567C111.242 40.2254 125.714 40.4749 124.466 49.9567"
                stroke="#131112"
                strokeWidth="2.4952"
              />
            </g>
            <g filter="url(#filter1_d_1015_168)">
              <path
                d="M142.899 73.9504C70.794 107.767 14.1045 73.9504 14.1045 73.9504C14.1045 73.9504 4.72159 38.8287 18.58 28.5729C31.0118 19.3728 36.6037 21.9688 44.9356 26.9553C53.5433 32.1069 55.8757 50.5772 55.8757 50.5772C55.8757 50.5772 56.2779 25.5375 65.324 13.7768C75.2695 0.846813 83.2542 0.635646 93.1715 13.7768C103.117 26.9553 103.117 50.5772 103.117 50.5772C103.117 50.5772 103.165 32.4481 111.073 26.9553C119.288 21.25 129.577 20.76 137.429 26.9553C152.711 39.0135 142.899 73.9504 142.899 73.9504Z"
                fill="#97C8E5"
                stroke="#131112"
                strokeWidth="2.82895"
              />
              <path
                d="M84.2965 61.0215C85.5396 70.7189 71.1187 70.4703 72.3619 61.0215"
                stroke="#131112"
                strokeWidth="2.35746"
              />
              <path
                d="M25.1208 51.7896C23.8776 42.0923 38.2986 42.3408 37.0554 51.7896"
                stroke="#131112"
                strokeWidth="2.35746"
              />
              <path
                d="M119.106 51.7896C117.863 42.0923 132.284 42.3408 131.04 51.7896"
                stroke="#131112"
                strokeWidth="2.35746"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1015_168"
                x="0.506646"
                y="0.502808"
                width="142.466"
                height="92.2634"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.99616" />
                <feGaussianBlur stdDeviation="0.998081" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0745098 0 0 0 0 0.0666667 0 0 0 0 0.0705882 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1015_168"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1015_168"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_1015_168"
                x="7.69948"
                y="2.58545"
                width="141.601"
                height="91.5809"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.88597" />
                <feGaussianBlur stdDeviation="0.942983" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0745098 0 0 0 0 0.0666667 0 0 0 0 0.0705882 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1015_168"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1015_168"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="86"
            viewBox="0 0 83 86"
            fill="none"
            className={classes.scribble}
          >
            <g filter="url(#filter0_d_1015_152)">
              <path
                d="M7 77.2205C18.2 29.2205 27.6667 17.8872 31 18.2205L38 52.2207C38 52.2207 43.1398 0.211015 61 4.22045C76.9219 7.79475 75 52.2207 75 52.2207"
                stroke="#665687"
                strokeidth="6"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1015_152"
                x="0.0783691"
                y="0.994141"
                width="81.9944"
                height="84.9081"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.4 0 0 0 0 0.337255 0 0 0 0 0.529412 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1015_152"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1015_152"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <h4>What is AIESEC?</h4>
          <p>
            AIESEC is a leadership and youth organisation created by young
            people who understood what it means to be a leader. Created to
            achieve peace and the fulfillment of humankind’s potential, AIESEC
            helps young people create a better future for themselves, their
            communities, and the world at large. The International Youth Day
            event perfectly reflects what we do at AIESEC, and you can be a part
            of it.
          </p>
          <div className={classes.buttonSection}>
            <Button
              type="primary"
              onClick={() => {
                window.open("https://forms.gle/fu9SeyBEbMpfRWjeA");
              }}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageAinDetails;
