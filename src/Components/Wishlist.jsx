import { useContext } from "react";
import { AppContext } from "../appContext";
import Wishcard from "./Wishcard";

function Wishlist() {
  const { wishlist, setWishlist, showComponent } = useContext(AppContext);

  const removeFromWishlist = (itemToRemove) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <div>
      {showComponent && (
        <>
          <Wishcard
            wishlist={wishlist}
            removeFromWishlist={removeFromWishlist}
          />
        </>
      )}
    </div>
  );
}

export default Wishlist;
