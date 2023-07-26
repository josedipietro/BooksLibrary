import BookTile from "../../../../components/BookTile/BookTile";
import useBooks from "../../../../services/zustand";

export const ReservedBooks = () => {
  const { reservedBooks } = useBooks((state) => ({
    reservedBooks: state.reservedBooks,
  }));

  return (
    <section className="px-2">
      <h3 className="p-4 font-extrabold bg-white text-3xl border border-black border-r-4 border-b-4 rounded-md">
        Lista de lectura
      </h3>
      <div className="mt-4 p-4 flex flex-wrap items-center justify-center bg-white border border-black border-r-4 border-b-4 rounded-md">
        {reservedBooks.map((book, index) => (
          <BookTile key={index} book={book}></BookTile>
        ))}
      </div>
    </section>
  );
};
