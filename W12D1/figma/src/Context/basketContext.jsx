import { createContext, useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";



const basketContext = createContext()

export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useLocalStorage('basket')

    function AddItem(item) {
        const BasketCopy = [...basket]
        const itemIndex = BasketCopy.findIndex(x => x.id === item.id)
        if (itemIndex === -1) {
            BasketCopy.push(item)
            BasketCopy[BasketCopy.length - 1].count = 1
            setBasket(BasketCopy)
            console.log(BasketCopy);
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

    function ChangeCount(item, newCount) {
        let BasketCopy = [...basket]
        const itemIndex = BasketCopy.findIndex(x => x.id === item.id)
        if (newCount <= 0) {
            BasketCopy = BasketCopy.filter(x => x.id !== item.id)
            setBasket(BasketCopy)
            return
        }
        BasketCopy[itemIndex].count = newCount
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
                BasketCopy = BasketCopy.filter(x => x.id !== item.id)
                setBasket(BasketCopy)
                return;

            default:
                return;
        }
    }

    function CalculateSubTotal() {
        const BasketCopy = [...basket]
        const SubTotal = BasketCopy.reduce((acc,cur)=> acc + (cur.count* +cur.price),0)
        return SubTotal
    }

    const data = {
        basket,
        setBasket,
        AddItem,
        DeleteItem,
        Readjust,
        ChangeCount,
        CalculateSubTotal
    }

    return (
        <basketContext.Provider value={data}>
            {children}
        </basketContext.Provider>
    )

}

export const useBasket = () => useContext(basketContext)