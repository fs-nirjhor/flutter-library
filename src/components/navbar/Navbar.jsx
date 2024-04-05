import Image from "next/image";
import searchIcon from "@/../public/images/icons/search.png";
import theme from "@/../public/images/icons/theme.png";
import MobileMenu from "@/components/sidebar/MobileMenu";

const Navbar = () => {
  return (
    <>
      <section className="sticky top-0 z-50 flex justify-between items-center gap-2 w-full py-3 px-2 bg-white text-nowrap text-sm">
        <div className="flex items-center gap-2">
          <MobileMenu />
          <form>
            <label className="bg-gray-200 rounded-full px-2 py-1 flex flex-nowrap gap-2">
              <Image src={searchIcon} alt="search" className="p-1" />
              <input
                type="text"
                name="search"
                placeholder="Search.."
                className=" bg-gray-200 outline-none w-full"
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
