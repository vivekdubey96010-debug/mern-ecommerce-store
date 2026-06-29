import {
  createContext,
  useState,
  useEffect,
} from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const wishlistKey = user
    ? `wishlist_${user.id}`
    : "wishlist_guest";

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem(wishlistKey);

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      wishlistKey,
      JSON.stringify(wishlist)
    );
  }, [wishlist, wishlistKey]);

  const addToWishlist = (product) => {
    const exists = wishlist.find(
      (item) => item._id === product._id
    );

    if (!exists) {
      setWishlist([
        ...wishlist,
        product,
      ]);
    }
  };

  const removeFromWishlist = (_id) => {
    setWishlist(
      wishlist.filter(
        (item) => item._id !== _id
      )
    );
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;