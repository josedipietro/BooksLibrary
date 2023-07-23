import { create } from "zustand";
import Book from "../models/book";
import database from "./database";

const useBooks = create<State>((set) => ({
  allBooks: [],
  books: [],
  reservedBooks: [],
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
        reservedBooks: state.reservedBooks,
      };
    });
  },
  unReserveBook: (book: Book) =>
    set((state) => ({
      ...state,
      reservedBooks: state.reservedBooks.filter(
        (el) => el.title !== book.title
      ),
    })),
}));

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
