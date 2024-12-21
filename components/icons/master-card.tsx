import * as React from "react"
import { SVGProps } from "react"
const MasterCardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
        fill="none"
    viewBox="0 0 44 30"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="currentColor" fillOpacity={0.5} />
    <circle cx={29} cy={15} r={15} fill="currentColor" fillOpacity={0.5} />
  </svg>
)
export default MasterCardIcon
