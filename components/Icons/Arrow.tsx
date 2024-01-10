import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill={props.fill || "currentcolor"}
      fillRule="evenodd"
      d="M8.146 3.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8H2.5a.5.5 0 0 1 0-1h8.793L8.146 3.854a.5.5 0 0 1 0-.708"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgArrow);
export default Memo;
