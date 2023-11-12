import image from "/summer-plants-flyer.png";
export default function Header() {
  return (
    <div className="container py-8 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Bem-vindo ao Plant Lovers!
      </h1>
      <div className="flex flex-col md:flex-row md:justify-around md:items-center md:w-3/4">
        <p className="text-lg md:w-1/2 md:text-2xl">
          Plant Lovers é um site comunitário que reúne pessoas apaixonado por
          plantas. Quer você seja um jardineiro experiente ou apenas começando
          com plantas de casa, este é o lugar para estar. Aprender com os outros
          e descobrir novas espécies de plantas que corresponda às suas
          preferências. Junte-se a nós e vamos explorar o mundo maravilhoso de
          plantas juntas!
        </p>
        <img src={image} alt="" />
      </div>
    </div>
  );
}
