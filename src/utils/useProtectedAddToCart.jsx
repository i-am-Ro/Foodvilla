import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../component/firebase"; // adjust the path if needed
import { toast } from "react-toastify";
import { addItem } from "./cartSlice"; // adjust to your actual cart slice path

export default function useProtectedAddToCart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    const user = auth.currentUser;

    if (!user) {
      toast.warning("Please login to add items to cart", {
        position: "top-center",
      });
      navigate("/login");
      return;
    }

    dispatch(addItem(item));
  };

  return handleAddToCart;
}
