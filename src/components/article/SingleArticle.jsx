import Image from "next/image";

const SingleArticle = ({ article }) => {
  return (
    <article className="flex flex-col gap-1 rounded p-2 hover:shadow-lg">
      <figure className="relative w-full aspect-video mb-2">
        <Image
          src={article?.image}
          alt={article?.title}
          fill
          placeholder="blur"
          blurDataURL={article?.image}
        />
      </figure>
      <p className="flex items-center gap-5 text-gray-400 text-sm">
        <span>{article?.date}</span>
        <span>{article?.category}</span>
      </p>
      <h4 className="font-bold">{article?.title}</h4>
    </article>
  );
};
export default SingleArticle;
