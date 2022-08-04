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
  faUserCircle,
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

      <div className="menu__list menu__login">
        <div>
          <p>Sign in to like videos, comment,and subscribe.</p>
        </div>
        <div className="menu__login__box">
          <FontAwesomeIcon icon={faUserCircle} />
          <span>SIGN IN</span>
        </div>
      </div>

      <div className="menu__list menu__explore">
        <div className="menu__explore__title">EXPLORE</div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faMusic} />
          </div>
          <span>Music</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faTrophy} />
          </div>
          <span>Sports</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faDice} />
          </div>
          <span>Gaming</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faClapperboard} />
          </div>
          <span>Movies & Shows</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faFileLines} />
          </div>
          <span>News</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faPodcast} />
          </div>
          <span>Live</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faShirt} />
          </div>
          <span>Fashion & Beauty</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <span>Learning</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <span>Spotlight</span>
        </div>
        <div className="menu__item">
          <div className="explore__icon">
            <FontAwesomeIcon icon={faVrCardboard} />
          </div>
          <span>360°Video</span>
        </div>
      </div>
      <div className="menu__list">
        <div className="menu__item">
          <FontAwesomeIcon icon={faCirclePlus} />
          <span>Browse channels</span>
        </div>
      </div>
      <div className="menu__list menu__moreFrom">
        <div className="menu__moreFrom__title">MORE FROM YOUTUBE</div>
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
      <div className="menu__list menu__copyRight">
        <p>
          About Press Copyright
          <br />
          Contact us Creators
          <br />
          Advertise Developers
        </p>
        <p>
          Terms Privacy Policy & Safety
          <br />
          How YouTube works
          <br />
          Test new features
        </p>
        <div className="menu__list menu__copyRight__list">
          <span>&copy;2022 Dordos</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
