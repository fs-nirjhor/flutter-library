import Image from "next/image";

const SingleArticle = ({ article }) => {
  return (
    <figure className="flex flex-col gap-2  rounded p-2 hover:shadow-lg">
      <div className="relative w-full aspect-video mb-2">
        <Image
          src={article?.image}
          alt={article?.title}
          fill
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL={article?.image}
        />
      </div>
      <p className="flex items-center gap-5 text-gray-400">
        <span>{article?.date}</span>
        <span>{article?.category}</span>
      </p>
      <h4 className="font-bold">{article?.title}</h4>
    </figure>
  );
};
export default SingleArticle;
