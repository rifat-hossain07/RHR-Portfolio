import Title from "./Shared/Title";
import { FcHome, FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Button from "./Shared/Button";
const Contact = () => {
  return (
    <div>
      <Title title="Contact me" />
      <div className="hero  ">
        <div className="hero-content pt-0 flex flex-col lg:flex-row  lg:gap-40 text-center lg:text-left">
          <div>
            <div>
              <p className="  pt-0 pb-2 text-2xl font-bold underline ">
                Socials :
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:my-20">
              <a
                href="https://www.facebook.com/risam.ahmed.3"
                className="btn btn-outline text-xl text-white bg-[#1877F2] border border-[#1877F2] hover:bg-white hover:text-[#1877F2] hover:border-[#1877F2]"
              >
                Message me on <SiFacebook />
              </a>
              <a
                href="https://www.instagram.com/risam.ahmed.3/"
                className="btn btn-outline text-white text-xl bg-gradient-to-br from-indigo-600 via-pink-600 to-yellow-300 border border-red-600 hover:text-black"
              >
                Follow me on <AiFillInstagram />
              </a>
              <a
                href="https://linkedin.com/in/rifat-rabbi"
                className="btn btn-outline text-xl bg-[#0A66C2] text-white border border-[#0A66C2] hover:bg-white hover:text-[#0A66C2] hover:border-[#0A66C2]"
              >
                Check Out my
                <FaLinkedin />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rifatrabby78@gmail.com">
                <Button text="Send me Your Query! 📧" />
              </a>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-bold underline">Address :</h1>
            </div>
            <div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <FcHome className="text-3xl"></FcHome>
                </span>
                <div>
                  <p className="text-xl">Dhaka, Bangladesh.</p>
                  <p className="">Satarkul, Badda, Dhaka-2941</p>
                </div>
              </div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <FcPhone className="text-3xl"></FcPhone>
                </span>
                <div>
                  <p className="text-xl">+880 178 554 8761</p>
                  <p className="">Mon to Fri 11am to 6pm</p>
                </div>
              </div>
              <div className="py-6 flex gap-3">
                <span className="pt-2">
                  <MdEmail className="text-3xl text-red-500"></MdEmail>
                </span>
                <div>
                  <p className="text-xl ">rifatrabby78@gmail.com</p>
                  <p className="">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
