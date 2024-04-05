import Image from "next/image";
import searchIcon from "@/../public/search.png";
import theme from "@/../public/theme.png";
import MobileMenu from "@/components/sidebar/MobileMenu";

const Navbar = () => {
  return (
    <>
      <section className="sticky top-0 z-50 flex justify-between items-center w-full py-3 px-2 bg-white">
        <div className="flex items-center gap-3">
          <MobileMenu />
          <form>
            <label className="bg-gray-200 rounded-full px-2 py-1 flex flex-nowrap gap-2">
              <Image src={searchIcon} alt="search" className="p-1" />
              <input
                type="text"
                name="search"
                placeholder="Search.."
                className=" bg-gray-200 outline-none"
              />
            </label>
          </form>
        </div>
        <div className="flex gap-1 justify-between items-center">
          <Image
            src={theme}
            alt="theme"
            className="hover:bg-gray-200 rounded-lg"
          />
          <button className="hover:bg-gray-200 rounded-lg px-1">Login</button>
          <button className="bg-black text-white hover:bg-gray-500 rounded-lg px-1">
            Get Pro
          </button>
        </div>
      </section>
    </>
  );
};
export default Navbar;
