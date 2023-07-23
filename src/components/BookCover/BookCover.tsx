import Book from "../../models/book";
import useBooks from "../../services/zustand";

const BookCover = ({ book }: { book: Book }) => {
  const reserveBook = useBooks((state) => state.reserveBook);

  const handleOnClick = () => {
    reserveBook(book);
  };

  return (
    <>
      <article className="w-60 h-100 p-2 text-center flex flex-col items-center">
        <img
          className="w-full h-80 object-fill"
          src={book.cover}
          alt={book.title}
        />
        <p>{book.title}</p>
        <button
          onClick={handleOnClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar a la lista
        </button>
      </article>
    </>
  );
};

export default BookCover;
