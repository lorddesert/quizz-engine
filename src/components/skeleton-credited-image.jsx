export default function SkeletonCreditedImage() {
  return (
    <svg
      role="img"
      width="400"
      height="460"
      aria-labelledby="loading-aria"
      viewBox="0 0 400 460"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clip-path="url(#clip-path)"
        style='fill: url("#fill");'
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <circle cx="31" cy="31" r="15" />
          <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
          <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
          <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
        </clipPath>
        <linearGradient id="fill">
          <stop
            offset="0.599964"
            stop-color="#f3f3f3"
            stop-opacity="1"
          >
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop
            offset="1.59996"
            stop-color="#ecebeb"
            stop-opacity="1"
          >
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop
            offset="2.59996"
            stop-color="#f3f3f3"
            stop-opacity="1"
          >
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
}