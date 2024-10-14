const Projects = () => {
  return (
    <section className="mt-28">
      <h1 className="text-3xl text-secondary uppercase text-center font-black mb-9">
        my project
      </h1>
      <div className="grid grid-cols-4 lg:grid-cols-5 grid-rows-6 gap-4">
        {/* Gambar pertama */}
        <img
          src=""
          alt="1"
          className="bg-primary rounded-3xl w-full h-96 col-span-4 row-span-2 lg:col-span-3"
        />
        {/* Gambar kedua */}
        <img
          src=""
          alt="2"
          className="bg-primary rounded-3xl w-full h-96 col-span-2 row-span-2"
        />
        {/* Gambar ketiga */}
        <img
          src=""
          alt="3"
          className="bg-primary rounded-3xl w-full h-96 col-span-2 lg:col-span-1 row-span-2"
        />
        {/* Gambar keempat - turun ke bawah di sebelah gambar kelima saat lg */}
        <img
          src=""
          alt="4"
          className="bg-primary rounded-3xl w-full h-96 col-span-4 row-span-2 md:col-span-2 lg:row-span-2"
        />
        {/* Gambar kelima */}
        <img
          src=""
          alt="5"
          className="bg-primary rounded-3xl w-full h-96 col-span-4 row-span-2 md:col-span-2"
        />
      </div>
    </section>
  );
};

export default Projects;
