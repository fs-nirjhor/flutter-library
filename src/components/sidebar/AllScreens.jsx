const AllScreens = ({ screen }) => {
  return (
    <div className="flex items-center justify-between px-2 py-1 hover:text-black hover:bg-gray-200">
      <span>{screen?.title}</span>
      <span>{screen?.page}</span>
    </div>
  );
};
export default AllScreens;
