import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto 
      md:grid-cols-2 md:px-20">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary">servicios</span>
          </h1>
          <p className="mb-3 text-xl text-gray-250">
            Ofrezco servicios de desarrollo web frontend especializado en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las ultimas tecnologias, como HTML, CSS y JavaScript,
            diseño de interfaces de usuario intuitivas y responsivas que
            reflejan la identidad de la marca de mis clientes y mejoran su
            presencia en linea.</p>
            <button className="px-3 py-2 rounded-lg bg-secondary hover:text-secondary/65">Contacta conmigo</button>
        </div>

        {/* Slider */}
        <div>
            <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
