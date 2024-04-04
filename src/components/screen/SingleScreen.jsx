import Image from "next/image";
import copy from "@/../public/copy.png";

const SingleScreen = ({ screen }) => {
  return (
    <figure className="group relative w-full aspect-[1/2] rounded-2xl shadow">
      <Image
        src={screen?.image}
        alt={screen?.id}
        fill
        objectPosition="center"
        placeholder="blur"
        blurDataURL={screen?.image}
      />
      <div className="hidden group-hover:flex justify-around gap-5 items-end absolute z-50 bottom-0 right-0 w-full h-1/3 pb-5 bg-gradient-to-t from-gray-800 text-sm rounded-2xl">
        <button className="bg-white py-1 px-3 rounded">
          <Image src={copy} alt="copy" className="inline mr-1" />
          <span>20</span>
        </button>
        <button className="bg-white py-1 px-5 rounded">Copy Code</button>
      </div>
    </figure>
  );
};
export default SingleScreen;
