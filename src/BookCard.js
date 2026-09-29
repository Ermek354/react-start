import React from "react";

function BookCard({ title, author, price }) {
  // Баскычты басканда иштей турган функция (onClick)
  function handleRead() {
    alert(`"${title}" китеби боюнча маалымат тандалды! Баасы: ${price}`);
  }

  return (
    <div style={{ border: "1px solid gray", padding: "15px", margin: "10px", borderRadius: "8px" }}>
      {/* Шарттуу рендеринг: 10 доллардан кымбат болсо Премиум чыгат */}
      {price === "$12" || price === "$15" ? (
        <span style={{ color: "purple", fontWeight: "bold" }}>💎 Премиум Китеп</span>
      ) : (
        <span style={{ color: "green", fontWeight: "bold" }}>🟢 Жөнөкөй Китеп</span>
      )}

      <h3>{title}</h3>
      <p>Автору: {author}</p>
      <p>Баасы: {price}</p>

      {/* onClick окуясы бар баскыч */}
      <button onClick={handleRead} style={{ padding: "8px 15px", cursor: "pointer" }}>
        📖 Китепти окуу
      </button>
    </div>
  );
}

export default BookCard;