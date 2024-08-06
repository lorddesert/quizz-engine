import { useEffect, useState } from "react";

// Components
import SkeletonCreditedImage from "./skeleton-credited-image";

export default function CreditedImage({ id }) {
  const [photo, setPhoto] = useState(null)
  const imageWidth = 450
  const imageHeight = 150

  useEffect(() => {
    fetch(`https://picsum.photos/${imageWidth}/${imageHeight}`)
      .then(res => {
        setPhoto(res.url)
      })
  }, [id])
  return (
    <>
      {photo
        ? <div className="question-photo-container">
          <img src={photo} alt="Random image" />
        </div>
        : <SkeletonCreditedImage />}
    </>
  )
}