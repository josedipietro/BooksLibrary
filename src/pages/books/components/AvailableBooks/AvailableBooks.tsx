import BookCover from "../../../../components/BookCover/BookCover";
import FiltersHeader from "../../../../components/FiltersHeader/FiltersHeader";
import Book from "../../../../models/book";
import useBooks, { State } from "../../../../services/zustand";

export const AvailableBooks = () => {
  const books: Book[] = useBooks((state: State) => state.books);

  return (
    <div className="w-2/3 flex flex-col">
      <section>
        <FiltersHeader></FiltersHeader>
      </section>
      <section className="flex flex-wrap items-center">
        {books.map((book) => (
          <BookCover key={book.title} book={book}></BookCover>
        ))}
      </section>
    </div>
  );
};
