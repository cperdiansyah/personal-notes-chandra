import type { ReactNode, ButtonHTMLAttributes } from 'react'
import './index.css'
type TypeButton = {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: TypeButton) => {
  return (
    <button
      {...props}
      className={`note-button ${props.className} ${props?.variant}`}
    >
      {props.children}
    </button>
  )
}

export default Button
