import "./Footer.css";

export default function Footer() {
  return (
    <p className="footer">
      © {new Date().getFullYear()} FoodZone — Freshness Delivered 🍽️
    </p>
  );
}
