import { useSelector } from "react-redux";

export const Library = () => {
  const deleteBookHandler = (id) => {
    //dispatch the delete book action from here
  };

  const books = useSelector((state) => state.books.books);

  const booksTable = books.map((book, index) => (
    <tr key={index}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.rating}</td>
      <td>
        <button className="delete" onClick={() => deleteBookHandler(book.id)}>
          x
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="library">
      <h2>Books</h2>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th></th>
          </tr>
          {booksTable}
        </tbody>
      </table>
    </div>
  );
};
