import frame1 from "../images/Frame 01.svg";
import frame2 from "../images/Frame 02.svg";
import frame3 from "../images/Frame 03.svg";
import frame4 from "../images/Frame 04.svg";
import frame5 from "../images/Frame 05.svg";
import frame6 from "../images/Frame 06.svg";
import frame7 from "../images/Frame 07.svg";
import frame8 from "../images/Frame 08.svg";
import frame9 from "../images/Frame 09.svg";
import frame10 from "../images/Frame 10.svg";
import frame11 from "../images/Frame 11.svg";
import frame12 from "../images/Frame 12.svg";
import frame13 from "../images/Frame 13.svg";
import frame14 from "../images/Frame 14.svg";
import frame15 from "../images/Frame 15.svg";
import frame16 from "../images/Frame 16.svg";
import frame17 from "../images/Frame 17.svg";
import frame18 from "../images/Frame 18.svg";
import frame19 from "../images/Frame 19.svg";
import frame20 from "../images/Frame 20.svg";
import frame21 from "../images/Frame 21.svg";
import frame22 from "../images/Frame 22.svg";
import frame23 from "../images/Frame 23.svg";
import frame24 from "../images/Frame 24.svg";
import frame25 from "../images/Frame 25.svg";
import frame26 from "../images/Frame 26.svg";
import frame27 from "../images/Frame 27.svg";
import frame28 from "../images/Frame 28.svg";
import frame29 from "../images/Frame 29.svg";
import frame30 from "../images/Frame 30.svg";
import frame31 from "../images/Frame 31.svg";
import frame32 from "../images/Frame 32.svg";
import frame33 from "../images/Frame 33.svg";
import frame34 from "../images/Frame 34.svg";

export const newSvg = (value) => {
  switch (value) {
    case "Overcast":
      return frame5;
    case "Heavy rain":
      return frame18;
    case "Moderate rain":
      return frame15;
    case "Patchy rain possible":
      return frame11;
    default:
      return frame3;
  }
};
