import FeaturesSection from "./FeaturesSection";
import Header from "./Header";

export default function PageHome() {
  return (
    <div className=" flex flex-col justify-around items-center">
      <div className="bg-lime-200 w-full md:h-auto m-10 md:p-10">
        <Header />
      </div>
      <FeaturesSection />
    </div>
  );
}
