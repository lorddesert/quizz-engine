import { useEffect, useState } from "react";

// Components
import SkeletonCreditedImage from "./skeleton-credited-image";

export default function CreditedImage() {
  const [photo, setPhoto] = useState(null)
  const imageWidth = 450
  const imageHeight = 150

  useEffect(() => {
    if (photo) return

      fetch(`https://picsum.photos/${imageWidth}/${imageHeight}`)
      .then(res => {
        setPhoto(res.url)
      })
  }, [])
  return (
    <>
      {photo 
      ? <div className="question-photo-container">
        <img className="photo" src={photo} alt="Random image" />
      </div>
      : <SkeletonCreditedImage />}
    </>
  )
}