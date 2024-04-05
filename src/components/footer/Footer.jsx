import Image from "next/image";
import logo from "@/../public/logo.png";
import x from "@/../public/x.png";
import facebook from "@/../public/facebook.png";
import linkedin from "@/../public/linkedin.png";
import instagram from "@/../public/instagram.png";

const Footer = () => {
  return (
    <>
      <section className="flex flex-wrap justify-between gap-5 w-full px-5">
        <div>
          <Image src={logo} alt="flutter-library" />
          <p className="text-gray-400 text-sm my-2">
            Beautifully designed, expertly crafed Flutter components and
            templates to jumpstart <br /> your projects and speed up your
            development process.
          </p>
          <div className="flex gap-5">
            <Image src={x} alt="x" />
            <Image src={linkedin} alt="linkedin" />
            <Image src={instagram} alt="instagram" />
            <Image src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="flex gap-5 text-nowrap">
          <div>
            <h4 className="font-bold">Explore</h4>
            <p>Blog</p>
            <p>Templates</p>
            <p>Screens</p>
          </div>
          <div>
            <h4 className="font-bold">Support</h4>
            <p>Pricing</p>
            <p>Become a sponsor</p>
            <p>Hire top Flutter Devs</p>
          </div>
        </div>
      </section>
      <footer className="flex flex-wrap justify-between gap2 w-full text-gray-400 px-5 py-2 text-sm">
        <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <p className="flex gap-1">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
          <span>|</span>
          <span>Cookie Policy</span>
        </p>
      </footer>
    </>
  );
};
export default Footer;
