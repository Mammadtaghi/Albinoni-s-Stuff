import { useState } from 'react'

function usePagination(incomeData, incomeCurrentPage = 1, incomeDataPerPage = 2) {

  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(incomeCurrentPage)
  const [dataPerPage, setDataPerPage] = useState(incomeDataPerPage)

  useEffect(() => {
    setData(incomeData)
  }, [incomeData])

  const lastPageIndex = Math.ceil(data.length / dataPerPage)

  let pageNumbers = []
  for (let i = 1; i <= lastPageIndex; i++) {
    pageNumbers.push(i)
  }

  const lastElementIndex = currentPage * dataPerPage
  const firstElementIndex = lastElementIndex - dataPerPage

  const PageDatas = data.slice(firstElementIndex, lastElementIndex)

  return [PageDatas, currentPage, setCurrentPage, setDataPerPage, pageNumbers, lastPageIndex]
}

export default usePagination