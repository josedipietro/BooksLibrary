import Book from "../../models/book";
import useBooks from "../../services/store";

const BookCover = ({ book }: { book: Book }) => {
  const { reserveBook } = useBooks((state) => ({
    reserveBook: state.reserveBook,
  }));

  const handleOnClick = () => {
    reserveBook(book);
  };

  return (
    <div className="flex-grow basis-1">
      <article className=" bg-white min-w-[15rem] max-w-[15rem] h-100 p-2 text-center flex flex-col items-center border-r-4 border-b-4 border-black border m-2 rounded-md">
        <img
          className="w-full h-80 object-fill"
          src={book.cover}
          alt={book.title}
        />
        <p className="text-lg font-bold">{book.title}</p>
        <button
          onClick={handleOnClick}
          className="bg-[#7b3ace] hover:bg-[#6937b7] text-white font-bold py-2 px-4 rounded"
        >
          Agregar a la lista
        </button>
      </article>
    </div>
  );
};

export default BookCover;
