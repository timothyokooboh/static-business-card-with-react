import twitter from "../images/Twitter Icon.png";
import facebook from "../images/Facebook Icon.png";
import instagram from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={twitter} alt="twitter icon" className="icon" />
      <img src={facebook} alt="facebook icon" className="icon" />
      <img src={instagram} alt="instagram icon" className="icon" />
      <img src={github} alt="github icon" className="icon" />
    </div>
  );
};

export default Footer;
