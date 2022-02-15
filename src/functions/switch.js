import Overcast from "../images/cloud/35.png";
import HeavyRain from "../images/rain/39.png";
import Moderaterain from "../images/cloud/7.png";
import Patchyrainpossible from "../images/sun/8.png";
import Sun from "../images/sun/26.png";

export const newImage = (value) => {
  switch (value) {
    case "Overcast":
      return Overcast;
    case "Heavy rain":
      return HeavyRain;
    case "Moderate rain":
      return Moderaterain;
    case "Patchy rain possible":
      return Patchyrainpossible;
    default:
      return Sun;
  }
};
