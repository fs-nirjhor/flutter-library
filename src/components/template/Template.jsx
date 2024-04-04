import { templates } from "@/lib/data";
import SingleTemplate from "@/components/template/SingleTemplate";

const Template = () => {
  return (
    <section className="w-full px-5">
      <h2 className="text-xl mb-3 font-semibold">Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {templates.map((template) => (
          <SingleTemplate key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
};
export default Template;
