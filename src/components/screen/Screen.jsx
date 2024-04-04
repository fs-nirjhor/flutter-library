import SingleScreen from "@/components/screen/SingleScreen";
import Category from "@/components/screen/Category";
import { screens } from "@/lib/data";

const Screen = () => {
  return (
    <section className="w-full px-5">
      <h2 className="text-xl mb-3 font-semibold">Screens</h2>
      <Category />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
        {screens.map((screen) => (
          <SingleScreen key={screen.id} screen={screen} />
        ))}
      </div>
    </section>
  );
};
export default Screen;
