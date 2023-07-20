import { AvailableBooks } from "./components/AvailableBooks/AvailableBooks";
import { ReservedBooks } from "./components/ReservedBooks/ReservedBooks";

function BooksPage() {
  return (
    <>
      <main className="w-full flex p-8">
        <AvailableBooks></AvailableBooks>
        <ReservedBooks></ReservedBooks>
      </main>
    </>
  );
}

export default BooksPage;
