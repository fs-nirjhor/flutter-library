import Image from "next/image";
import kits from "@/../public/kits.png";
import downloads from "@/../public/downloads.png";

const SingleTemplate = ({ template }) => {
  return (
    <figure className="flex flex-col  rounded p-2 hover:shadow-lg">
      <div className="relative w-full aspect-video mb-2">
        <Image
          src={template?.image}
          alt={template?.title}
          fill
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL={template?.image}
        />
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <h4 className="font-bold">{template?.title}</h4>
        <div className="flex gap-2 text-sm">
          <figure>
            <Image src={kits} alt="kits" className="inline mr-1" />
            <span>{template?.kits}</span>
          </figure>
          <figure>
            <Image src={downloads} alt="downloads" className="inline mr-1" />
            <span>{template?.downloads}</span>
          </figure>
        </div>
      </div>
    </figure>
  );
};
export default SingleTemplate;
