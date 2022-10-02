import { useState, useEffect } from 'react'

const UPDATE_CYCLE = 1000
const KEY_LOCALE = 'KEY_LOCALE'

type Locale = 'en-US' | 'ja-JP'

const getLocaleFromString = (text: string): Locale => {
  switch (text) {
    case 'en-US':
      return 'en-US'
    case 'ja-JP':
      return 'ja-JP'
    default:
      return 'en-US'
  }
}

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState('en-US')

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])

  return (
    <div>
      <p>
        <br />
        <span id='current-time-label'>Current Time</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value='en-US'>en-US</option>
          <option value='ja-JP'>ja-JP</option>
        </select>
      </p>
    </div>
  )
}

export default Clock
