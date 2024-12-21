import * as React from "react"
import { SVGProps } from "react"
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
        fill="none"
    viewBox="0 0 9 15"
    {...props}
  >
    <path stroke="#718EBF" strokeWidth={2} d="m1 1 6.5 6.5L1 14" />
  </svg>
)
export default ChevronRight
