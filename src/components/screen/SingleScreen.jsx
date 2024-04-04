import Image from "next/image";

const SingleScreen = ({ screen }) => {
  return (
    <figure className="flex flex-col gap-2 rounded-2xl shadow">
      <div className="relative w-full aspect-[1/2]">
        <Image
          src={screen?.image}
          alt={screen?.id}
          fill
          objectPosition="center"
          placeholder="blur"
          blurDataURL={screen?.image}
        />
      </div>
    </figure>
  );
};
export default SingleScreen;
