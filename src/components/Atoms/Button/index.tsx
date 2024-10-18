import type { ReactNode, ButtonHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  className: PropTypes.string,
}

export default Button
