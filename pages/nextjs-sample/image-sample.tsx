import { NextPage } from 'next'
import Image from 'next/image'
import BibleImage from '../../public/images/bird.jpeg'

const ImageSample: NextPage<void> = () => {
  return (
    <div>
      <h1>Comparison of image</h1>
      <p>Displayed with img tag</p>
      <img src='/images/bird.jpeg' alt='image tag' />

      <p>Displayed with Image Component</p>
      <Image src={BibleImage} alt='image component' />
      <p>When displayed in Image, the drawing area is allocated in advance.</p>
    </div>
  )
}

export default ImageSample
