import { Slider } from "@mui/material";
import database from "../../services/database";
import useBooks from "../../services/store";

function PagesSlider() {
  const { setPagesFilter } = useBooks((state) => ({
    setBooks: state.setBooks,
    books: state.allBooks,
    setPagesFilter: state.setPagesFilter,
    genreFilter: state.genreFilter,
  }));

  const maxPagesBook = database.maxPagesBook;
  const minPagesBook = database.minPagesBook;

  const marks = [
    {
      value: minPagesBook.pages,
      label: `${minPagesBook.pages}`,
    },
    {
      value: maxPagesBook.pages,
      label: `${maxPagesBook.pages}`,
    },
  ];

  const onChange = (_: Event, value: number | number[]): void => {
    setPagesFilter(value as number);
  };

  return (
    <>
      <div className="w-1/3 p-2">
        <p className="text-lg">Filtrar por Páginas</p>
        <Slider
          className="Slider"
          min={minPagesBook.pages}
          max={maxPagesBook.pages}
          defaultValue={maxPagesBook.pages}
          marks={marks}
          valueLabelDisplay="auto"
          onChange={onChange}
          color="primary"
        ></Slider>
      </div>
    </>
  );
}

export default PagesSlider;
