import Image from "next/image";
import kits from "@/../public/images/icons/kits.png";
import downloads from "@/../public/images/icons/downloads.png";

const SingleTemplate = ({ template }) => {
  return (
    <article className="flex flex-col rounded p-2 hover:shadow-lg">
      <figure className="relative w-full aspect-video mb-2">
        <Image
          src={template?.image}
          alt={template?.title}
          fill
          placeholder="blur"
          blurDataURL={template?.image}
        />
      </figure>
      <div className="flex flex-nowrap justify-between items-center">
        <h4 className="font-bold">{template?.title}</h4>
        <div className="flex text-nowrap gap-2 text-sm">
          <span>
            <Image src={kits} alt="kits" className="inline mr-1" />
            <span>{template?.kits}</span>
          </span>
          <span>
            <Image src={downloads} alt="downloads" className="inline mr-1" />
            <span>{template?.downloads}</span>
          </span>
        </div>
      </div>
    </article>
  );
};
export default SingleTemplate;
