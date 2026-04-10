import { useEffect, useState } from 'react'

export interface UseTypingEffectOptions {
  msPerChar?: number
}

export interface UseTypingEffectResult {
  displayedText: string
  isComplete: boolean
}

export function useTypingEffect(
  text: string,
  options?: UseTypingEffectOptions,
): UseTypingEffectResult {
  const msPerChar = options?.msPerChar ?? 15
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setIsComplete(false)

    if (text.length === 0) {
      setIsComplete(true)
      return
    }

    setDisplayedText(text[0]!)

    if (text.length === 1) {
      setIsComplete(true)
      return
    }

    let index = 1
    const timerId = window.setInterval(() => {
      index += 1
      setDisplayedText(text.slice(0, index))
      if (index >= text.length) {
        setIsComplete(true)
        window.clearInterval(timerId)
      }
    }, msPerChar)

    return () => {
      window.clearInterval(timerId)
    }
  }, [text, msPerChar])

  return { displayedText, isComplete }
}
