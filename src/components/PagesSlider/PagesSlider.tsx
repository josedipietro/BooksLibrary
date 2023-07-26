import { Slider } from "@mui/material";
import database from "../../services/database";
import useBooks from "../../services/zustand";
import { useEffect, useState } from "react";

function PagesSlider() {
  const { books, setBooks, setPagesFilter, genreFilter, pageFilter } = useBooks(
    (state) => ({
      setBooks: state.setBooks,
      books: state.allBooks,
      setPagesFilter: state.setPagesFilter,
      genreFilter: state.genreFilter,
      pageFilter: state.pagesFilter,
    })
  );

  const maxPagesBook = database.maxPagesBook;
  const minPagesBook = database.minPagesBook;

  const [pages, setPages] = useState(maxPagesBook.pages);

  useEffect(() => {
    setPages(pageFilter ?? maxPagesBook.pages);
  }, [pageFilter]);

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
        <p className="text-lg">Filtrar por Páginas</p>
        <Slider
          className="Slider"
          min={minPagesBook.pages}
          max={maxPagesBook.pages}
          defaultValue={maxPagesBook.pages}
          marks={marks}
          value={pages}
          valueLabelDisplay="auto"
          onChange={onChange}
          color="primary"
        ></Slider>
      </div>
    </>
  );
}

export default PagesSlider;
