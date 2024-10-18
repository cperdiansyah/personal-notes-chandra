import { Link } from 'react-router-dom'

const AppBar = () => {
  return (
    <div className="notes__appbar text-center text-2xl py-5 border-b border-gray-300">
      <nav className="flex justify-between container underline underline-offset-4">
        <Link to="/">Chandra Notes</Link>
        <Link to="/archive">Archive</Link>
      </nav>
    </div>
  )
}

export default AppBar
