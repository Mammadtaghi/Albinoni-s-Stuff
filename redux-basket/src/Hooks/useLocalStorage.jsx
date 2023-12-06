import { useEffect, useState } from "react"

function useLocalStorage(storageName) {

    const [data, setData] = useState(localStorage.getItem(`${storageName}`) ? JSON.parse(localStorage.getItem(`${storageName}`)) : [])

    useEffect(() => {
        localStorage.setItem(`${storageName}`, JSON.stringify(data))
    })

    return [data, setData]
}

export default useLocalStorage