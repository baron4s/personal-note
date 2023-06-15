import { useState } from 'react'

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue)
  const handleValueChange = (value) => {
    setValue(value)
  }
  return [value, handleValueChange]
}

export default useInput
