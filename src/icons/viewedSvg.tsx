import { FC } from "react";

type SVG_PROPS = {
  testid: string;
};

export const VIEWED_SVG: FC<SVG_PROPS> = ({ testid }) => (
  <svg
    data-testid={testid}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_4_76"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_4_76)"></g>
    <path
      d="M20.0002 24.9292C22.721 24.9292 24.9266 22.7235 24.9266 20.0027C24.9266 17.2819 22.721 15.0763 20.0002 15.0763C17.2794 15.0763 15.0737 17.2819 15.0737 20.0027C15.0737 22.7235 17.2794 24.9292 20.0002 24.9292Z"
      fill="white"
    />
    <path
      d="M35.5092 18.6381C31.7223 14.0621 25.9901 9.65718 20.0001 9.65718C14.0089 9.65718 8.27527 14.0651 4.49095 18.6381C3.83635 19.4288 3.83635 20.5767 4.49095 21.3674C5.44237 22.5171 7.43697 24.7365 10.101 26.6756C16.8101 31.5597 23.1752 31.5705 29.8992 26.6756C32.5631 24.7365 34.5577 22.5171 35.5092 21.3674C36.1619 20.5782 36.1653 19.4314 35.5092 18.6381ZM20.0001 13.1057C23.8033 13.1057 26.8971 16.1995 26.8971 20.0027C26.8971 23.806 23.8033 26.8998 20.0001 26.8998C16.1968 26.8998 13.103 23.806 13.103 20.0027C13.103 16.1995 16.1968 13.1057 20.0001 13.1057Z"
      fill="white"
    />
  </svg>
);