export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats"> Start adding some items to your packing lsit 🚀</p>
    );
  const numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {itemPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
