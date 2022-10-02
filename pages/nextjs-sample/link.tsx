import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect, useState } from 'react'

function LinkSample() {
  const router = useRouter()
  const [postNumber, setPostNumber] = useState(1)

  const onChangePostNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostNumber(+e.target.value)
  }

  const onSubmit = () => {
    router.push('./ssg')
    router.push({
      pathname: './ssr',
      query: { keyword: 'hello' },
    })
  }

  const onClickReload = () => {
    router.reload()
  }

  const onClickBack = () => {
    router.back()
  }

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      console.log('routeChangeStart', url)
    })

    router.events.on('routeChangeComplete', (url) => {
      console.log('routeChangeComplete', url)
    })
  }, [])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
      <Link href='./ssr'>
        <a>Go TO SSR</a>
      </Link>
      <Link href='./ssg'>
        <a>Go TO SSG</a>
      </Link>
      <Link href='./isr'>
        <a>Go TO ISR</a>
      </Link>

      <Link href='./ssr?keyword=next'>
        <a>GO TO SSR with keyword &apos;next&apos;</a>
      </Link>
      <Link
        href={{
          pathname: './ssg',
          query: { keyword: 'hello' },
        }}
      >
        <a>GO TO SSG with keyword &apos;hello&apos;</a>
      </Link>
      <p>
        <input value={postNumber} onChange={onChangePostNumber} />
        <Link href={`./posts/${postNumber}`}>
          <button>Jump to SSG page</button>
        </Link>
      </p>
      <Link href='./ssg'>
        <button>Jump to SSG page</button>
      </Link>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onClickReload}>Reload</button>
      <button onClick={onClickBack}>Back</button>
    </div>
  )
}

export default LinkSample
