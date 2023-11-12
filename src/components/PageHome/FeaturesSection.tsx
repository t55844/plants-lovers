import CardInfoFeatures from "./CardInfoFeatures";

export default function FeaturesSection() {
  return (
    <div className=" flex flex-col items-center mt-40">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Descubra nossos recursos
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
          title="1. Identificação de Planta"
          text="
          Identifique facilmente plantas desconhecidas com nossa ferramenta de identificação de plantas. Tire uma foto e nós faremos o resto!"
        />
        <CardInfoFeatures
          fade="fade-left"
          title="2. Faça sua própria conta"
          text="Crie sua própria conta e personalize seu perfil, com informações e coisas que você gosta"
        />
        <CardInfoFeatures
          fade="fade-right"
          title="3. Salve seus favoritos"
          text="
          Você pode armazenar as plantas mais maravilhosas ou plantas que você viu no passado em nosso banco de dados"
        />
      </div>
    </div>
  );
}
