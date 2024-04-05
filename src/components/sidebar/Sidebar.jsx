import Image from "next/image";
import logo from "@/../public/logo.png";
import { allScreens, menus } from "@/lib/data";
import Menu from "@/components/sidebar/Menu";
import AllScreens from "@/components/sidebar/AllScreens";

const Sidebar = () => {
  return (
    <section className="text-nowrap px-2 bg-white sticky top-0">
      <Image src={logo} alt="flutter-library" className="py-3" />
      <nav className="flex flex-col text-gray-500">
        {menus.map((menu) => (
          <Menu key={menu.id} menu={menu} />
        ))}
      </nav>
      <h4 className="font-bold mt-2">All Screens</h4>
      <nav className="flex flex-col text-gray-500">
        {allScreens.map((screen) => (
          <AllScreens key={screen.id} screen={screen} />
        ))}
      </nav>
    </section>
  );
};
export default Sidebar;
