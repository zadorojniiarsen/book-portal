import { FC } from "react";

export const VIEWED_SVG: FC = () => (
  <svg
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

export const UNVIEWED_SVG: FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_4_174"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="40"
      height="40"
    >
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_4_174)"></g>
    <path
      d="M4.87609 18.957L4.87616 18.9569C8.63046 14.4202 14.2362 10.1572 20.0001 10.1572C25.7627 10.1572 31.3671 14.4171 35.1239 18.9568C35.6265 19.5645 35.6241 20.4438 35.124 21.0486C34.1869 22.181 32.2225 24.366 29.6049 26.2714L29.6049 26.2714C26.3039 28.6744 23.1325 29.844 19.9947 29.8427C16.8569 29.8415 13.689 28.6692 10.3952 26.2714L10.3952 26.2714C7.77764 24.366 5.81322 22.181 4.87616 21.0486L4.87609 21.0485C4.37464 20.4428 4.37464 19.5627 4.87609 18.957ZM27.3971 20.0027C27.3971 15.9234 24.0794 12.6057 20.0001 12.6057C15.9207 12.6057 12.603 15.9234 12.603 20.0027C12.603 24.0821 15.9207 27.3998 20.0001 27.3998C24.0794 27.3998 27.3971 24.0821 27.3971 20.0027Z"
      stroke="white"
    />
  </svg>
);

export const SORT_ARROWS_SVG: FC = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_224_7"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="25"
    >
      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_224_7)">
      <path
        d="M22.7077 15.7925C22.5202 15.605 22.2659 15.4997 22.0007 15.4997C21.7356 15.4997 21.4813 15.605 21.2938 15.7925L18.0009 19.0853V3.49996C18.0009 3.23475 17.8955 2.98041 17.708 2.79288C17.5205 2.60535 17.2661 2.5 17.0009 2.5C16.7357 2.5 16.4814 2.60535 16.2939 2.79288C16.1063 2.98041 16.001 3.23475 16.001 3.49996V19.0853L12.7081 15.7925C12.5195 15.6103 12.2669 15.5095 12.0047 15.5118C11.7425 15.5141 11.4917 15.6193 11.3063 15.8047C11.1209 15.9901 11.0158 16.2409 11.0135 16.503C11.0112 16.7652 11.112 17.0178 11.2942 17.2064L16.294 22.2062C16.3868 22.2993 16.4972 22.3732 16.6187 22.4236C16.7402 22.4741 16.8704 22.5 17.0019 22.5C17.1335 22.5 17.2637 22.4741 17.3852 22.4236C17.5067 22.3732 17.617 22.2993 17.7099 22.2062L22.7097 17.2064C22.8969 17.0186 23.0019 16.7642 23.0015 16.499C23.0011 16.2339 22.8954 15.9797 22.7077 15.7925Z"
        fill="white"
      />
      <path
        d="M12.7081 7.79281L7.70829 2.79301C7.61516 2.69969 7.50433 2.62592 7.38231 2.57602C7.13769 2.4749 6.86296 2.4749 6.61834 2.57602C6.49631 2.62592 6.38548 2.69969 6.29235 2.79301L1.29254 7.79281C1.10504 7.98058 0.999813 8.23514 1 8.50049C1.00019 8.76584 1.10578 9.02026 1.29354 9.20776C1.48131 9.39526 1.73587 9.50049 2.00122 9.5003C2.26658 9.50011 2.52099 9.39452 2.70849 9.20676L6.00136 5.91389V21.4993C6.00136 21.7645 6.10671 22.0188 6.29424 22.2064C6.48177 22.3939 6.73611 22.4992 7.00132 22.4992C7.26653 22.4992 7.52087 22.3939 7.7084 22.2064C7.89593 22.0188 8.00128 21.7645 8.00128 21.4993V5.91389L11.2942 9.20676C11.4827 9.38891 11.7353 9.4897 11.9975 9.48742C12.2597 9.48514 12.5105 9.37998 12.6959 9.19458C12.8813 9.00917 12.9865 8.75837 12.9888 8.49619C12.991 8.234 12.8902 7.98141 12.7081 7.79281Z"
        fill="white"
      />
    </g>
  </svg>
);

export const BACK_ARROW_SVG: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 11H4.41403L9.70703 5.70699C9.80254 5.61474 9.87872 5.5044 9.93113 5.38239C9.98354 5.26039 10.0111 5.12917 10.0123 4.99639C10.0134 4.86361 9.98813 4.73193 9.93785 4.60904C9.88757 4.48614 9.81332 4.37449 9.71943 4.28059C9.62553 4.1867 9.51388 4.11245 9.39099 4.06217C9.26809 4.01189 9.13641 3.98659 9.00363 3.98774C8.87085 3.98889 8.73963 4.01648 8.61763 4.06889C8.49562 4.1213 8.38528 4.19748 8.29303 4.29299L1.29303 11.293C1.10556 11.4805 1.00024 11.7348 1.00024 12C1.00024 12.2652 1.10556 12.5195 1.29303 12.707L8.29303 19.707C8.48163 19.8891 8.73424 19.9899 8.99643 19.9877C9.25863 19.9854 9.50944 19.8802 9.69485 19.6948C9.88026 19.5094 9.98543 19.2586 9.98771 18.9964C9.98998 18.7342 9.88919 18.4816 9.70703 18.293L4.41403 13H22C22.2652 13 22.5196 12.8946 22.7071 12.7071C22.8947 12.5196 23 12.2652 23 12C23 11.7348 22.8947 11.4804 22.7071 11.2929C22.5196 11.1053 22.2652 11 22 11Z"
      fill="white"
    />
  </svg>
);

export const LOADING_SVG: FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <path
      d="M28.7319 11.147C29.3052 11.6289 30.0336 11.8938 30.7807 11.8938C31.7289 11.8938 32.6212 11.478 33.2306 10.7529C34.3624 9.40416 34.1857 7.3857 32.8369 6.25304C32.2628 5.77119 31.5345 5.50586 30.7865 5.50586C29.8388 5.50586 28.9464 5.92169 28.3378 6.64672C27.2056 7.99591 27.3827 10.014 28.7319 11.147Z"
      fill="white"
    />
    <path
      d="M36.2702 14.8026C36.0722 14.8026 35.872 14.8202 35.6764 14.8546C33.8372 15.179 32.6036 16.9403 32.928 18.7804C33.2134 20.4023 34.6139 21.5793 36.2575 21.5793C36.4552 21.5793 36.6561 21.5616 36.8525 21.5276C38.6918 21.2028 39.9249 19.4419 39.6006 17.6026C39.3143 15.9803 37.9134 14.8026 36.2702 14.8026Z"
      fill="white"
    />
    <path
      d="M36.1525 25.8819C35.6079 25.567 34.9903 25.4013 34.367 25.4013C33.0883 25.4013 31.8974 26.0882 31.2589 27.1938C30.7812 28.0218 30.6532 28.9863 30.9013 29.9106C31.1494 30.835 31.7428 31.608 32.57 32.0857C33.115 32.4011 33.7326 32.5672 34.3567 32.5672C35.6346 32.5672 36.8254 31.8807 37.4635 30.7755C38.4502 29.0646 37.8621 26.8694 36.1525 25.8819Z"
      fill="white"
    />
    <path
      d="M25.9653 32.2518C25.5265 32.2518 25.0918 32.3289 24.6735 32.4806C23.7262 32.8255 22.9704 33.519 22.5439 34.4331C22.1178 35.3471 22.0731 36.3724 22.4176 37.3201C22.9589 38.8071 24.3852 39.8064 25.9665 39.8064C26.4053 39.8064 26.84 39.7293 27.257 39.5772C28.2035 39.2323 28.9589 38.5393 29.3858 37.6235C29.8123 36.709 29.8574 35.6838 29.5138 34.7378C28.9733 33.2512 27.5466 32.2518 25.9653 32.2518Z"
      fill="white"
    />
    <path
      d="M16.3637 32.2973C15.9232 32.1374 15.4664 32.0562 15.0063 32.0562C13.3438 32.0562 11.8445 33.1068 11.2757 34.6705C10.9124 35.6674 10.9595 36.7456 11.4078 37.7064C11.8556 38.6676 12.6507 39.3964 13.6477 39.7593C14.0873 39.9196 14.5445 40 15.0059 40C16.6692 40 18.1681 38.9494 18.7364 37.3869C19.099 36.3921 19.0514 35.3139 18.6028 34.3523C18.1537 33.3894 17.359 32.6598 16.3637 32.2973Z"
      fill="white"
    />
    <path
      d="M10.2177 26.9018C9.47542 25.617 8.09219 24.8194 6.60685 24.8194C5.88059 24.8194 5.16252 25.0129 4.52894 25.3775C3.56523 25.934 2.87628 26.8329 2.58881 27.9061C2.30052 28.9805 2.44815 30.1029 3.00464 31.0662C3.7469 32.3515 5.13054 33.1495 6.61588 33.1495C7.34173 33.1495 8.0598 32.9559 8.69297 32.5909C10.6811 31.4431 11.3651 28.8907 10.2177 26.9018Z"
      fill="white"
    />
    <path
      d="M4.71401 22.5512C6.82924 22.5512 8.6324 21.0359 9.00066 18.9481C9.20243 17.8011 8.94612 16.6447 8.27809 15.692C7.61087 14.7382 6.6119 14.1017 5.46447 13.8991C5.21022 13.8548 4.95309 13.8323 4.70171 13.8323C2.58647 13.8323 0.783315 15.3471 0.415056 17.4349C0.213293 18.5811 0.469598 19.7375 1.13763 20.6914C1.80526 21.6449 2.80464 22.2817 3.95125 22.4839C4.20427 22.5286 4.46099 22.5512 4.71401 22.5512Z"
      fill="white"
    />
    <path
      d="M10.1904 13.2537C11.2563 13.2537 12.2946 12.8751 13.1144 12.1882C14.0444 11.4078 14.6149 10.31 14.7211 9.097C14.8273 7.88396 14.4558 6.70372 13.675 5.77364C12.808 4.74022 11.5355 4.14764 10.1847 4.14764C9.11723 4.14764 8.07889 4.52575 7.26035 5.21264C6.32904 5.99427 5.75738 7.09208 5.65158 8.30348C5.54537 9.51406 5.91732 10.6947 6.69935 11.6268C7.56751 12.6607 8.8396 13.2537 10.1904 13.2537Z"
      fill="white"
    />
    <path
      d="M20.4859 9.90445C23.221 9.90445 25.4381 7.68726 25.4381 4.95222C25.4381 2.21719 23.221 0 20.4859 0C17.7509 0 15.5337 2.21719 15.5337 4.95222C15.5337 7.68726 17.7509 9.90445 20.4859 9.90445Z"
      fill="white"
    />
  </svg>
);
