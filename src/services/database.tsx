import Book from "../models/book";

class Database {
  private _books: Book[] = [];

  get books(): Book[] {
    return this._books;
  }

  get genres(): string[] {
    const genres: string[] = [];
    this._books.forEach((book) => {
      console.log(book.genre);
      if (!genres.includes(book.genre)) {
        genres.push(book.genre);
      }
    });

    return genres;
  }

  get maxPagesBook(): Book {
    return this._books.reduce((prevBook, currentBook) => {
      if (prevBook.pages > currentBook.pages) return prevBook;
      else return currentBook;
    });
  }

  get minPagesBook(): Book {
    return this._books.reduce((prevBook, currentBook) => {
      if (prevBook.pages < currentBook.pages) return prevBook;
      else return currentBook;
    });
  }

  async initialize() {
    const data = await import("../../books.json");
    this._books = data.library.map(
      ({ book }) =>
        new Book(
          book.title,
          book.pages,
          book.genre,
          book.cover,
          book.synopsis,
          book.year,
          book.ISBN,
          book.author
        )
    );
  }
}

// exportando una sola instancia de la DB
const database = new Database();
export default database;
