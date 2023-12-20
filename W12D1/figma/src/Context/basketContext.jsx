import { createContext, useContext, useState } from "react";



const basketContext = createContext()

export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState([])

    function AddItem(item) {
        const BasketCopy = [...basket]
        const itemIndex = BasketCopy.findIndex(x => x.id === item.id)
        if (itemIndex === -1) {
            item.count = 1
            BasketCopy.push(item)
            setBasket(BasketCopy)
            return
        }
        BasketCopy[itemIndex].count++
        setBasket(BasketCopy)
        return
    }

    function DeleteItem(item) {
        let BasketCopy = [...basket]
        BasketCopy = BasketCopy.filter(x => x.id !== item.id)
        setBasket(BasketCopy)
    }

    function Readjust(item, event, payload = 1) {
        let BasketCopy = [...basket]
        const itemIndex = BasketCopy.findIndex(x => x.id === item.id)
        switch (event) {
            case '+':
                BasketCopy[itemIndex].count += payload
                setBasket(BasketCopy)
                return;
            case '-':
                BasketCopy[itemIndex].count -= payload
                if (BasketCopy[itemIndex].count >= 1) {
                    setBasket(BasketCopy)
                    return;
                }
                BasketCopy = BasketCopy.filter(x=> x.id !== item.id)
                setBasket(BasketCopy)
                return;

            default:
                return;
        }
    }

    const data = {
        basket,
        setBasket,
        AddItem,
        DeleteItem,
        Readjust
    }

    return (
        <basketContext.Provider value={data}>
            {children}
        </basketContext.Provider>
    )

}

export const useBasket=()=>useContext(basketContext)