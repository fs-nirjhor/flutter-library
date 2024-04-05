import SingleArticle from "@/components/article/SingleArticle";
import { articles } from "@/lib/data";

const Article = () => {
  return (
    <section className="w-full px-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl mb-3 font-semibold">Articles</h2>
        <span className="text-xs text-gray-400">See all</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {articles.map((article) => (
          <SingleArticle key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};
export default Article;
