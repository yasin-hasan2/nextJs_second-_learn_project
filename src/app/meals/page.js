import Meals from "@/components/Meals";

export const metadata = {
  title: "Meals",
  description: "Meals Page",
};

const MealsPage = () => {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold text-red-400">Choose your meals</h1>
      <p className=" text-[#FFFFFF]">
        Choose meals of your choice by searching.....
      </p>
      <div>
        <Meals></Meals>
      </div>
    </div>
  );
};

export default MealsPage;
