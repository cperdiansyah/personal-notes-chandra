import Button from '@/components/Atoms/Button'
import PropTypes from 'prop-types'

type TypeFloatingButton = {
  onClick: () => void
}

const FloatingButton = ({ onClick }: TypeFloatingButton) => {
  return (
    <Button
      className="fixed bottom-10 right-10 rounded-full bg-blue-500 text-lg"
      onClick={onClick}
    >
      +
    </Button>
  )
}

FloatingButton.propTypes = {
  onClick: PropTypes.func,
}

export default FloatingButton
