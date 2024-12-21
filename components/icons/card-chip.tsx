import * as React from "react"
import { SVGProps } from "react"
const CardChipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 100 100"
    width="1em"
        height="1em"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4 40h22v20H4zM31.5 65.6C35 67.2 38 72.1 38 76c0 3.9-3 8.8-6.5 10.4-3.8 1.8-12.1 2.1-16.2.5C8.4 84.3 4 77.4 4 69v-5h12.1c8.9 0 13 .4 15.4 1.6ZM96 68.9C96 80.7 88.7 88 76.9 88c-6.6 0-11.3-2.3-13.3-6.5-2-4.1-2-6.8-.1-10.9C66.2 65 69 64.1 83.3 64H96v4.9ZM74 40h22v20H74z"
    />
    <path
      fill="currentColor"
      d="M85.3 13.4c3.9 1.6 8.2 6.1 9.6 9.9.6 1.6 1.1 5.1 1.1 7.8V36H84c-10.7 0-12.2-.2-14-2-3.5-3.5-2.1-8.1 3-9.8 3.2-1.2 3.9-2.9 1.5-3.8C70.4 18.8 64 24.7 64 30c0 2.8 2.6 7.6 4.5 8.3 2.2.9 2.3 22.7 0 22.7-2.5 0-8.3 5.9-9.6 9.7-1.5 4.6-.7 10.4 2.1 14.3l2.1 3H36.9l2.1-3c2.8-3.9 3.6-9.7 2.1-14.3-1.3-3.8-7.1-9.7-9.6-9.7-2.3 0-2.2-21.8 0-22.7 1.9-.7 4.5-5.5 4.5-8.2 0-3.4-2.3-7.2-5.1-8.7-1.6-.8-5.5-1.4-8.9-1.4-5.3 0-6 .2-6 2s.7 2 6 2c6.5 0 10 2.1 10 6 0 1.1-.9 2.9-2 4-1.8 1.8-3.3 2-14 2H4v-4.9c0-6.1 1.3-9.7 4.8-13.5 5.1-5.4 6-5.5 41-5.6 25.2 0 33 .3 35.5 1.4Z"
    />
  </svg>
)
export default CardChipIcon
