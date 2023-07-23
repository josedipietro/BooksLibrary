import { Slider } from "@mui/material";
import database from "../../services/database";
import useBooks from "../../services/zustand";

function PagesSlider() {
  const { books, setBooks, setPagesFilter, genreFilter } = useBooks(
    (state) => ({
      setBooks: state.setBooks,
      books: state.allBooks,
      setPagesFilter: state.setPagesFilter,
      genreFilter: state.genreFilter,
    })
  );

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
    let filteredBooks = books.filter((book) => book.pages <= (value as number));

    if (genreFilter !== "" && genreFilter !== undefined)
      filteredBooks = filteredBooks.filter(
        (book) => book.genre === genreFilter
      );

    setBooks(filteredBooks);
  };

  return (
    <>
      <div className="w-1/3 p-2">
        <p>Filtrar por Páginas</p>
        <Slider
          min={minPagesBook.pages}
          max={maxPagesBook.pages}
          defaultValue={maxPagesBook.pages}
          marks={marks}
          valueLabelDisplay="auto"
          onChange={onChange}
        ></Slider>
      </div>
    </>
  );
}

export default PagesSlider;
