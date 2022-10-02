import React, { useState, useRef } from 'react'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 1000

const ImageUploader = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  const fileRef = useRef<File | null>(null)
  const [message, setMessage] = useState<string | null>('')

  const onClickSelectText = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click()
    }
  }

  const onCapturedImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files !== null && files.length > 0) {
      fileRef.current = files[0]
      setMessage(`${fileRef.current.name} has been captured`)
    }
  }

  const onClickUploadButton = async () => {
    if (fileRef.current !== null) {
      await sleep(UPLOAD_DELAY)
      setMessage(`${fileRef.current.name} has been successfully uploaded`)
    }
  }

  return (
    <div>
      <p onClick={onClickSelectText}>Select your image file</p>
      <input ref={inputImageRef} type='file' accept='image/*' onInputCapture={onCapturedImage} style={{ visibility: 'hidden' }} />
      <br />
      <button onClick={onClickUploadButton}>Upload</button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}

export default ImageUploader
