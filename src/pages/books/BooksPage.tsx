import { useEffect, useState } from "react";
import { AvailableBooks } from "./components/AvailableBooks/AvailableBooks";
import { ReservedBooks } from "./components/ReservedBooks/ReservedBooks";
import useBooks from "../../services/zustand";

function BooksPage() {
  const fetchBooks = useBooks((state) => state.fetchBooks);

  const [loading, setLoading] = useState(true);

  const initPage = async () => {
    setLoading(true);
    await fetchBooks();
    setLoading(false);
  };

  useEffect(() => {
    void initPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full flex p-8">
      {loading ? (
        <p>cargando</p>
      ) : (
        <>
          <AvailableBooks></AvailableBooks>
          <ReservedBooks></ReservedBooks>
        </>
      )}
    </main>
  );
}

export default BooksPage;
