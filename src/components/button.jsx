import { useState } from "react"

export default function Button({ children, onClick, disabled = false, fallback }) {
  const [loading, setIsLoading] = useState(false)

  async function handleClick() {
    setIsLoading(true)
    await onClick()
    setIsLoading(false)
  }
  return (
    <button
      onClick={handleClick}
      className="w-full"
      disabled={disabled}
    >
      {loading
        ? fallback || 'Loading'
        : children
      }
    </button>
  )
}