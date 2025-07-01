export default function Footer() {
  return (
    <footer className="text-center py-4 text-sm text-gray-500 border-t border-red-300">
      © {new Date().getFullYear()}{" "}
      <span className="font-medium text-gray-700">FoodZone</span> — Freshness
      Delivered 🍽️
    </footer>
  );
}
