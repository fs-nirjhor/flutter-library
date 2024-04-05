import SingleScreen from "@/components/screen/SingleScreen";
import Filters from "@/components/screen/Filters";
import { screens } from "@/lib/data";

const Screen = () => {
  return (
    <section className="w-full px-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl mb-3 font-semibold">Screens</h2>
        <span className="text-xs text-gray-400">See all</span>
      </div>
      <Filters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 w-full">
        {screens.map((screen) => (
          <SingleScreen key={screen.id} screen={screen} />
        ))}
      </div>
    </section>
  );
};
export default Screen;
