import BookCover from "../../../../components/BookCover/BookCover";
import FiltersHeader from "../../../../components/FiltersHeader/FiltersHeader";
import Book from "../../../../models/book";
import useBooks, { State } from "../../../../services/store";

export const AvailableBooks = () => {
  const books: Book[] = useBooks((state: State) => state.books);

  return (
    <div className="flex flex-col">
      <section>
        <FiltersHeader></FiltersHeader>
      </section>
      <section className="mt-3 flex flex-wrap items-center bg-white border border-black border-r-4 border-b-4 rounded-md">
        {books
          .filter((book) => !book.reserved)
          .map((book, index) => (
            <BookCover key={index} book={book}></BookCover>
          ))}
      </section>
    </div>
  );
};
