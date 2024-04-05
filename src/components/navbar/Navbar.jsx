import Image from "next/image";
import searchIcon from "@/../public/search.png";
import theme from "@/../public/theme.png";
import MobileMenu from "@/components/sidebar/MobileMenu";

const Navbar = () => {
  return (
    <>
      <section className="sticky top-0 z-50 flex justify-between items-center w-full p-3 bg-white">
        <div className="flex items-center gap-3">
          <MobileMenu />
          <form>
            <label className="bg-gray-200 rounded-full px-2 py-1">
              <Image src={searchIcon} alt="search" className="inline mr-2" />
              <input
                type="text"
                name="search"
                placeholder="Search.."
                className=" bg-gray-200"
              />
            </label>
          </form>
        </div>
        <div className="flex gap-3 justify-between items-center">
          <Image
            src={theme}
            alt="theme"
            className="hover:bg-gray-200 rounded-lg"
          />
          <button className="hover:bg-gray-200 rounded-lg px-2">Log in</button>
          <button className="bg-black text-white hover:bg-gray-500 rounded-lg px-2">
            Get Pro
          </button>
        </div>
      </section>
    </>
  );
};
export default Navbar;
