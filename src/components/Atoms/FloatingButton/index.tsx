import Button from '@/components/Atoms/Button'

type TypeFloatingButton = {
  onClick: () => void
}

const FloatingButton = ({ onClick }: TypeFloatingButton) => {
  return (
    <Button
      className="fixed bottom-10 right-10 rounded-full bg-blue-500"
      onClick={onClick}
    >
      +
    </Button>
  )
}

export default FloatingButton
