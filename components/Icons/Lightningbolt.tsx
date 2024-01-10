import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgLightningbolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#d40000"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="#d40000"
      fillRule="evenodd"
      d="M8.697.04a.5.5 0 0 1 .296.542L8.09 6h4.41a.5.5 0 0 1 .4.8l-6 8a.5.5 0 0 1-.893-.382L6.91 9H2.5a.5.5 0 0 1-.4-.8l6-8a.5.5 0 0 1 .597-.16M3.5 8h4a.5.5 0 0 1 .493.582L7.33 12.56 11.5 7h-4a.5.5 0 0 1-.493-.582L7.67 2.44z"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgLightningbolt);
export default Memo;
