import PagesSlider from "../PagesSlider/PagesSlider";
import GenreFilter from "../GenreFilter/GenreFilter";
import database from "../../services/database";

const FiltersHeader = () => {
  return (
    <>
      <header className="bg-white w-full p-4 border border-black border-r-4 border-b-4 rounded-md">
        <h1 className="text-4xl font-extrabold">
          Bienvenido a la libreria de Jotape_Dev!
        </h1>
        <h3 className="text-2xl">6 libros disponibles</h3>
        <h3 className="text-2xl">2 en la lista de lectura</h3>
        <section className="w-full flex justify-around border border-black border-r-4 border-b-4 rounded-md">
          <PagesSlider></PagesSlider>
          <GenreFilter genres={database.genres}></GenreFilter>
        </section>
      </header>
    </>
  );
};

export default FiltersHeader;
