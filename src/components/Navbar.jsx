import logo from "../assets/Ar1.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
/* import { FaSquareXTwitter} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6"; */

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/rodriguezalexp/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
            <a href="https://github.com/rodriguezalexp" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
            {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter/>
            </a> */}
            {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a> */}
        </div>
    </nav>
  );
};

export default Navbar
