import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClockRotateLeft,
  faMusic,
  faTrophy,
  faDice,
  faClapperboard,
  faFileLines,
  faPodcast,
  faShirt,
  faLightbulb,
  faVrCardboard,
  faCirclePlus,
  faCirclePlay,
  faDisplay,
  faGear,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCompass,
  faFlag,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPlaystation,
  faGooglePlay,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="sideBar__container">
      <div className="menu__list">
        <div className="menu__item">
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faCompass} />
          <span>Explore</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faPlaystation} />
          <span>Shorts</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faGooglePlay} />
          <span>Subscriptions</span>
        </div>
      </div>
      <div className="menu__list">
        <div className="menu__item">
          <FontAwesomeIcon icon={faYoutube} />
          <span>Library</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faClockRotateLeft} />
          <span>History</span>
        </div>
      </div>

      <div className="menu__list">
        <span>Sign in to like videos,</span>
        <span>comment,and subscribe.</span>
      </div>

      <div className="menu__list">
        <span>EXPLORE</span>
        <div className="menu__item">
          <FontAwesomeIcon icon={faMusic} />
          <span>Music</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faTrophy} />
          <span>Sports</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faDice} />
          <span>Gaming</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faClapperboard} />
          <span>Movies & Shows</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faFileLines} />
          <span>News</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faPodcast} />
          <span>Live</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faShirt} />
          <span>Fashion & Beauty</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faLightbulb} />
          <span>Learning</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faYoutube} />
          <span>Spotlight</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faVrCardboard} />
          <span>360°Video</span>
        </div>
      </div>
      <div className="menu__list">
        <div className="menu__item">
          <FontAwesomeIcon icon={faCirclePlus} />
          <span>Browse channels</span>
        </div>
      </div>
      <div className="menu__list">
        <span>MORE FROM YOUTUBE</span>
        <div className="menu__item">
          <FontAwesomeIcon icon={faYoutube} />
          <span>YouTube Premium</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faCirclePlay} />
          <span>YouTube Music</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faDisplay} />
          <span>YouTube TV</span>
        </div>
      </div>
      <div className="menu__list">
        <div className="menu__item">
          <FontAwesomeIcon icon={faGear} />
          <span>Settings</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faFlag} />
          <span>Report history</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faCircleQuestion} />
          <span>Help</span>
        </div>
        <div className="menu__item">
          <FontAwesomeIcon icon={faExclamationCircle} />
          <span>Send feedback</span>
        </div>
      </div>
      <div className="menu__list">
        <span>About press Copyright</span>
        <span>contact us Creators</span>
        <span>advertise Developers</span>
        <span>terms Privacy Policy & Safety</span>
        <span>How YouTube works</span>
        <span>Test new Features</span>
      </div>
      <div className="menu__list">
        <span>&copy;2022 Dordos</span>
      </div>
    </div>
  );
};

export default Sidebar;
