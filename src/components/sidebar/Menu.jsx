import Image from "next/image";

const Menu = ({ menu }) => {
  return (
    <div className="flex items-center gap-2 px-2 py-2 hover:text-black hover:bg-gray-200">
      <figure className="relative w-5 h-5">
        <Image src={menu?.image} alt={menu?.title} fill />
      </figure>
      <span>{menu?.title}</span>
    </div>
  );
};

export default Menu;
