import { Suspense } from "react";

// Components
import SkeletonCreditedImage from "./skeleton-credited-image";

export default function CreditedImage({ user, urls }) {
  return (
    <Suspense fallback={SkeletonCreditedImage}>
      <picture>
      {/* <img className="img" src={urls.regular} />
      <caption>
        <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${user.username}`}
        >
          {user.name}
        </a>
      </caption> */}
      </picture>
    </Suspense>
  )
}