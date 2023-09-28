export default function CardInfoFeatures(props: {
  title: string;
  text: string;
  fade: string;
}) {
  const { title, text, fade } = props;

  return (
    <div
      data-aos={fade}
      data-aos-easing="linear"
      data-aos-duration="500"
      className={` bg-lime-200 m-4 md:w-2/5 p-10 rounded-xl`}
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg md:text-xl">{text}</p>
    </div>
  );
}
