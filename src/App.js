import React from "react";
import BookCard from "./BookCard";

function App() {

    const books = [
        { id: 1, title: "Сынган Кылыч", author: "Төлөгөн Касымбеков", price: "$5" },
        { id: 2, title: "Биринчи Мугалим", author: "Чыңгыз Айтматов", price: "$8" },
        { id: 3, title: "Богатый Папа, Бедный Папа", author: "Роберт Кийосаки", price: "$10" },
        { id: 4, title: "1984", author: "Джордж Оруэлл", price: "$12" },
        { id: 5, title: "Алтын Ордо", author: "Чыңгыз Айтматов", price: "$15" },
    ];






  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📚 Менин Китепканам</h1>
      
      {/* Пропсторду өткөрүп жатабыз */}
      {books.map((book) => (
        <BookCard key={book.id} title={book.title} author={book.author} price={book.price} />
      ))}
    </div>
  );
}

export default App;