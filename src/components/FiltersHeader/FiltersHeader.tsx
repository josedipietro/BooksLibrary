import PagesSlider from "../PagesSlider/PagesSlider";
import GenreFilter from "../GenreFilter/GenreFilter";

const FiltersHeader = () => {
  return (
    <>
      <header className="w-full">
        <h1>Bienvenido a la libreria de Jotape_Dev!</h1>
        <h3>6 libros disponibles</h3>
        <h4>2 en la lista de lectura</h4>
        <section className="w-full flex">
          <PagesSlider></PagesSlider>
          <GenreFilter genres={["Fantasia", "Terror"]}></GenreFilter>
        </section>
      </header>
    </>
  );
};

export default FiltersHeader;
