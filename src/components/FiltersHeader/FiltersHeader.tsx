import PagesSlider from "../PagesSlider/PagesSlider";
import GenreFilter from "../GenreFilter/GenreFilter";
import database from "../../services/database";

const FiltersHeader = () => {
  return (
    <>
      <header className="w-full">
        <h1>Bienvenido a la libreria de Jotape_Dev!</h1>
        <h3>6 libros disponibles</h3>
        <h4>2 en la lista de lectura</h4>
        <section className="w-full flex justify-around">
          <PagesSlider></PagesSlider>
          <GenreFilter genres={database.genres}></GenreFilter>
        </section>
      </header>
    </>
  );
};

export default FiltersHeader;
