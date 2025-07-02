import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import Image from "@/assets/image/logo.png";

function Footer() {
  return (
    <>
      {/* develop */}
      <div className="bg-gray-800 p-3 rounded-lg mt-3">
        <p className=" flex text-sm gap-1">
          Developed by Shofiyatunnisa •
          <IoLogoGithub />
          <IoLogoLinkedin />
          <FaFacebook />
          <RiInstagramFill />
        </p>
        <div className=" flex text-gray-500 text-xs gap-0.4">
          <p>Powered by </p>
          <img className="h-3.5 w-auto mt-1" src={Image} alt="logo"></img>
          <p>Dumbways Indonesia</p>
          <p> • </p>
          <p>#CodingBootcamp</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
