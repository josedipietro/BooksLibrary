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
  persist<State, [], [], PersistedState>(
    (set, get) => ({
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

        const reservedBooks = get().reservedBooks;
        const books = database.books.map((book) => {
          if (reservedBooks.includes(book.ISBN))
            return {
              ...book,
              reserved: true,
            };

          return { ...book, reserved: false };
        });

        set(() => ({
          allBooks: books,
          books,
          pagesFilter: database.maxPagesBook.pages,
        }));
      },
      setBooks: (books: Book[]) => set(() => ({ books })),
      reserveBook: (book: Book) => {
        set(() => {
          const books = get().books;
          const indexBook = books.indexOf(book);
          books[indexBook].reserved = true;
          return {
            books: [...books],
          };
        });
      },
      unReserveBook: (book: Book) =>
        set(() => {
          const books = get().books;
          const indexBook = books.indexOf(book);
          books[indexBook].reserved = false;
          return {
            books: [...books],
          };
        }),
    }),
    {
      name: "books-library",
      partialize: (state) => {
        return {
          reservedBooks: state.books
            .filter((book) => book.reserved)
            .map((book) => book.ISBN),
        };
      },
    }
  )
);

type PersistedState = { reservedBooks: string[] };

export interface State {
  allBooks: Book[];
  books: Book[];
  pagesFilter?: number;
  genreFilter?: string;
  reservedBooks: string[];
  setPagesFilter: (pages: number) => void;
  setGenreFilter: (genre: string) => void;
  reserveBook: (book: Book) => void;
  unReserveBook: (book: Book) => void;
  fetchBooks: () => Promise<void>;
  setBooks: (books: Book[]) => void;
}

export default useBooks;
