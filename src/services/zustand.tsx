import { create } from "zustand";
import Book from "../models/book";
import database from "./database";
import { persist } from "zustand/middleware";

window.addEventListener("storage", (event) => {
  if (event.key === useBooks.persist.getOptions().name) {
    void useBooks.persist.rehydrate();
  }
});

const useBooks = create(
  persist<State>(
    (set) => ({
      allBooks: [] as Book[],
      books: [] as Book[],
      reservedBooks: [] as Book[],
      setPagesFilter: (pages: number) => {
        set(() => ({ pagesFilter: pages }));
      },
      setGenreFilter: (genre: string) => {
        set(() => ({ genreFilter: genre }));
      },
      fetchBooks: async () => {
        await database.initialize();

        set(() => ({ allBooks: database.books, books: database.books }));
      },
      setBooks: (books: Book[]) => set(() => ({ books })),
      reserveBook: (book: Book) => {
        set((state) => {
          state.reservedBooks.push(book);
          return {
            books: state.books.filter((el) => el.title !== book.title),
            reservedBooks: state.reservedBooks,
          };
        });
      },
      unReserveBook: (book: Book) =>
        set((state) => {
          console.log(book);
          state.books.push(book);
          console.log(state.books);
          const newReservedBooks = state.reservedBooks.filter(
            (el) => el.title !== book.title
          );
          console.log(newReservedBooks);
          const newBooks = [...state.books];
          return {
            books: newBooks,
            reservedBooks: newReservedBooks,
          };
        }),
    }),
    {
      name: "books-library",
    }
  )
);

export interface State {
  allBooks: Book[];
  books: Book[];
  reservedBooks: Book[];
  pagesFilter?: number;
  genreFilter?: string;
  setPagesFilter: (pages: number) => void;
  setGenreFilter: (genre: string) => void;
  reserveBook: (book: Book) => void;
  unReserveBook: (book: Book) => void;
  fetchBooks: () => Promise<void>;
  setBooks: (books: Book[]) => void;
}

export default useBooks;
