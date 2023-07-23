import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import useBooks from "../../services/zustand";

const GenreFilter = (props: { genres: string[] }) => {
  const { books, setBooks, setGenreFilter, pagesFilter } = useBooks(
    (state) => ({
      setBooks: state.setBooks,
      books: state.allBooks,
      setGenreFilter: state.setGenreFilter,
      pagesFilter: state.pagesFilter,
    })
  );
  const [genre, setGenre] = useState("");

  useEffect(() => {
    setGenreFilter(genre);
    if (genre === "") {
      setBooks(books);
      return;
    }

    const filteredBooks = books.filter(
      (book) => book.genre === genre && book.pages < (pagesFilter ?? 0)
    );

    setBooks(filteredBooks);
  }, [genre]);

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    setGenre(e.target.value);
  };

  const { genres } = props;

  return (
    <>
      <div className="w-1/3 p-2">
        <p>Filtrar por Genero</p>

        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            placeholder="Seleccionar..."
            displayEmpty
            onChange={onChangeSelect}
          >
            <MenuItem key={""} value="">
              Seleccionar...
            </MenuItem>
            {genres.map((genre) => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default GenreFilter;
