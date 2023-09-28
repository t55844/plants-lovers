import CardInfoFeatures from "./CardInfoFeatures";

export default function FeaturesSection() {
  return (
    <div className=" flex flex-col items-center mt-40">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Discover Our Features
      </h2>
      <div
        style={{ backgroundImage: `url('/plant-bg.png')` }}
        className={`
          bg-contains
          p-10
            flex flex-col md:flex-row flex-wrap md:justify-around
            `}
      >
        <CardInfoFeatures
          fade="fade-right"
          title="1. Plant Identification"
          text="
         Easily identify unknown plants with our AI-powered plant identification
         tool. Snap a photo, and we'll do the rest!"
        />
        <CardInfoFeatures
          fade="fade-left"
          title="2. Make your own acount"
          text="Create your own account and customize your profile, with information
        and things you like"
        />
        <CardInfoFeatures
          fade="fade-right"
          title="3. Save your favorite ones"
          text="
        You can store the most wonderful plants or plants you've seen in the
        past in our database"
        />
      </div>
    </div>
  );
}
