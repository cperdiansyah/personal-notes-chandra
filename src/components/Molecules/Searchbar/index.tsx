import useNotes from '@/hooks/useNotes'
import type React from 'react'
import type { InputHTMLAttributes } from 'react'

type TypeSearchbar = {} & InputHTMLAttributes<HTMLInputElement>
const Searchbar = (props: TypeSearchbar) => {
  return (
    <div className="container py-4">
      <input
        {...props}
        className={`${props.className} w-full rounded-sm px-4 py-2 border border-gray-300 text-gray-700`}
        placeholder="Cari Notes ...."
      />
    </div>
  )
}

export default Searchbar
