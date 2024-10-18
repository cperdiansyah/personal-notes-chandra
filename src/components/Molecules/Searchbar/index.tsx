import { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash/debounce'
import { useSearchParams } from 'react-router-dom'

interface ISearchbarProps {
  className?: string
  placeholder?: string
  value?: string
}

const Searchbar = (props: ISearchbarProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  /* Debounced search function */
  const debouncedOnChange = useCallback(
    debounce((value: string) => {
      searchParams.delete('search')
      const newSearchParams = new URLSearchParams(searchParams.toString())
      if (value && value.length > 0) {
        newSearchParams.set('search', value)
      } else {
        newSearchParams.delete('search')
      }
      setSearchParams(newSearchParams)
    }, 300),
    [searchParams, setSearchParams],
  )

  useEffect(() => {
    debouncedOnChange(searchTerm)
    // Cleanup function to cancel the debounce on unmount
    return () => {
      debouncedOnChange.cancel()
    }
  }, [searchTerm, debouncedOnChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="container py-4">
      <input
        {...props}
        className={`${props.className} w-full rounded-sm px-4 py-2 border border-gray-300 text-gray-700`}
        placeholder="Cari Notes ...."
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Searchbar
