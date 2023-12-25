import { createContext, useState } from "react";
import { useContext } from "react";



const WishlistContext = createContext()

export const WishlistProvider =({children})=>{

    const [wishlist, setWishlist] = useState([])

    function AddToWishlist(item) {
        const itemIndex = wishlist.findIndex(x=> x.id === item.id)

        if (itemIndex !== -1) {
            // Remove from wishlist
            let WishlistCopy = [...wishlist]
            WishlistCopy = WishlistCopy.filter(x=> x.id !== item.id)
            setWishlist([...WishlistCopy])
            return
        }
        // Add to wishlist
        setWishlist([...wishlist, item])
    }

    function isInWishlist(item) {
        const Found = wishlist.find(x=> x.id === item.id)
        
        Found ? true : false
    }

    const data={
        wishlist,
        AddToWishlist,
        isInWishlist,
    }

    return(
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )

}

export const useWishlist =()=> useContext(WishlistContext)
