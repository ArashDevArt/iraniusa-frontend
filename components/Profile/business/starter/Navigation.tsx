import React from "react";

const Navigation = () => {
  return (
    <ul className="sticky top-5 left-0 flex-col items-start gap-y-5 font-opensans w-[30%]  h-[300px] min-h-40 hidden lg:flex mt-9 pr-6">
      <li className="text-black font-bold flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.61685 14.1711C8.30627 13.9409 7.86787 14.006 7.63765 14.3166C7.40744 14.6272 7.47259 15.0656 7.78317 15.2958C8.69076 15.9686 9.8007 16.3668 11 16.3668C12.1993 16.3668 13.3093 15.9686 14.2168 15.2958C14.5274 15.0656 14.5926 14.6272 14.3624 14.3166C14.1322 14.006 13.6938 13.9409 13.3832 14.1711C12.7034 14.675 11.8829 14.9668 11 14.9668C10.1172 14.9668 9.29663 14.675 8.61685 14.1711Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 0.966797C10.3391 0.966797 9.73864 1.1561 9.08719 1.47289C8.45747 1.77912 7.73 2.23061 6.82134 2.79457L4.89254 3.99164C4.03275 4.52523 3.34429 4.95251 2.81365 5.35888C2.26415 5.77971 1.84209 6.2083 1.53723 6.76525C1.23301 7.32105 1.096 7.91242 1.03032 8.61145C0.966661 9.2889 0.966668 10.1173 0.966675 11.1562V12.6613C0.966662 14.4383 0.966652 15.8409 1.1092 16.9376C1.25542 18.0626 1.56267 18.9709 2.25688 19.6889C2.95429 20.4103 3.84177 20.7326 4.94044 20.8854C6.00526 21.0335 7.3652 21.0335 9.07907 21.0335H12.9209C14.6348 21.0335 15.9948 21.0335 17.0596 20.8854C18.1582 20.7326 19.0457 20.4103 19.7431 19.6889C20.4374 18.9709 20.7446 18.0626 20.8908 16.9376C21.0334 15.8409 21.0334 14.4383 21.0333 12.6613V11.1562C21.0333 10.1173 21.0334 9.28889 20.9697 8.61145C20.904 7.91242 20.767 7.32105 20.4628 6.76525C20.1579 6.2083 19.7359 5.77971 19.1864 5.35888C18.6557 4.95251 17.9673 4.52524 17.1075 3.99165L15.1787 2.79456C14.27 2.23061 13.5425 1.77912 12.9128 1.47289C12.2614 1.1561 11.6609 0.966797 11 0.966797ZM7.52757 4.00397C8.47561 3.41559 9.14221 3.0029 9.69945 2.73191C10.2424 2.4679 10.6268 2.3668 11 2.3668C11.3732 2.3668 11.7577 2.4679 12.3006 2.73191C12.8578 3.00289 13.5244 3.41559 14.4725 4.00397L16.3391 5.16248C17.2359 5.71904 17.8655 6.11072 18.3352 6.47038C18.7921 6.82033 19.055 7.10912 19.2347 7.43746C19.4151 7.76696 19.5204 8.1522 19.5758 8.74243C19.6326 9.34681 19.6333 10.1096 19.6333 11.1905V12.6101C19.6333 14.4497 19.632 15.7612 19.5025 16.7572C19.3754 17.7354 19.1359 18.3029 18.7366 18.7159C18.3405 19.1255 17.8013 19.3688 16.8667 19.4988C15.9095 19.6319 14.647 19.6335 12.8667 19.6335H9.13334C7.35298 19.6335 6.09052 19.6319 5.13328 19.4988C4.19868 19.3688 3.65947 19.1255 3.26341 18.7159C2.86415 18.3029 2.62466 17.7354 2.49752 16.7572C2.36807 15.7612 2.36668 14.4497 2.36668 12.6101V11.1905C2.36668 10.1096 2.36739 9.34681 2.42418 8.74243C2.47964 8.1522 2.58493 7.76696 2.76529 7.43746C2.94502 7.10912 3.20791 6.82033 3.66487 6.47038C4.1345 6.11072 4.76412 5.71905 5.6609 5.16248L7.52757 4.00397Z"
            fill="black"
          />
        </svg>
        Home
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.50001 8.20013C7.50001 6.26713 9.06701 4.70013 11 4.70013C12.933 4.70013 14.5 6.26713 14.5 8.20013C14.5 10.1331 12.933 11.7001 11 11.7001C9.06701 11.7001 7.50001 10.1331 7.50001 8.20013ZM11 6.10013C9.84021 6.10013 8.90001 7.04033 8.90001 8.20013C8.90001 9.35993 9.84021 10.3001 11 10.3001C12.1598 10.3001 13.1 9.35993 13.1 8.20013C13.1 7.04033 12.1598 6.10013 11 6.10013Z"
            fill="#A6A6A6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.966675 11.0001C0.966675 5.45887 5.45875 0.966797 11 0.966797C16.5413 0.966797 21.0333 5.45887 21.0333 11.0001C21.0333 16.5414 16.5413 21.0335 11 21.0335C5.45875 21.0335 0.966675 16.5414 0.966675 11.0001ZM11 2.3668C6.23195 2.3668 2.36667 6.23207 2.36667 11.0001C2.36667 13.376 3.32639 15.5277 4.8793 17.0888C5.04767 16.1805 5.37849 15.3242 6.04249 14.6356C7.0357 13.6055 8.62389 13.1001 11 13.1001C13.376 13.1001 14.9642 13.6055 15.9574 14.6356C16.6215 15.3242 16.9523 16.1806 17.1206 17.0888C18.6736 15.5278 19.6333 13.376 19.6333 11.0001C19.6333 6.23207 15.7681 2.3668 11 2.3668ZM15.8474 18.1452C15.7524 17.014 15.5067 16.1851 14.9496 15.6073C14.3435 14.9787 13.2203 14.5001 11 14.5001C8.7796 14.5001 7.65645 14.9787 7.05028 15.6073C6.49319 16.1851 6.24758 17.014 6.15248 18.1451C7.53439 19.0845 9.20309 19.6335 11 19.6335C12.7969 19.6335 14.4656 19.0845 15.8474 18.1452Z"
            fill="#A6A6A6"
          />
        </svg>
        About me
      </li>

      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7333 6.53516C19.7633 6.54646 20.8627 6.63648 21.5799 7.35364C22.4 8.17374 22.4 9.49367 22.4 12.1335V17.7335C22.4 20.3734 22.4 21.6933 21.5799 22.5134C20.7598 23.3335 19.4398 23.3335 16.8 23.3335H11.2C8.56011 23.3335 7.24018 23.3335 6.42008 22.5134C5.59998 21.6933 5.59998 20.3734 5.59998 17.7335V12.1335C5.59998 9.49367 5.59998 8.17374 6.42008 7.35364C7.13723 6.63648 8.23662 6.54646 10.2666 6.53516"
            stroke="#A6A6A6"
            stroke-width="1.5"
          />
          <path
            d="M9.33337 16.334H16.8"
            stroke="#A6A6A6"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M9.33337 19.5996H14.4667"
            stroke="#A6A6A6"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M10.2667 6.06602C10.2667 5.29282 10.8935 4.66602 11.6667 4.66602H16.3334C17.1066 4.66602 17.7334 5.29282 17.7334 6.06602V6.99935C17.7334 7.77255 17.1066 8.39935 16.3334 8.39935H11.6667C10.8935 8.39935 10.2667 7.77255 10.2667 6.99935V6.06602Z"
            stroke="#A6A6A6"
            stroke-width="1.5"
          />
        </svg>
        Contact me
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.1334 11.1408C18.7468 11.1408 18.4334 11.4542 18.4334 11.8408C18.4334 12.2274 18.7468 12.5408 19.1334 12.5408C19.52 12.5408 19.8334 12.2274 19.8334 11.8408C19.8334 11.4542 19.52 11.1408 19.1334 11.1408ZM17.0334 11.8408C17.0334 10.681 17.9736 9.74079 19.1334 9.74079C20.2931 9.74079 21.2334 10.681 21.2334 11.8408C21.2334 13.0006 20.2931 13.9408 19.1334 13.9408C17.9736 13.9408 17.0334 13.0006 17.0334 11.8408Z"
            fill="#A6A6A6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.3683 4.66602H15.4684C16.8375 4.666 17.9359 4.66598 18.7986 4.78156C19.6919 4.90125 20.4367 5.15626 21.0275 5.74495C21.5459 6.26154 21.8067 6.89657 21.9442 7.6458C22.2306 7.80356 22.4939 7.9983 22.7349 8.23928C23.4333 8.93775 23.7433 9.82344 23.8904 10.9177C24.0334 11.981 24.0334 13.3396 24.0333 15.0548V15.1601C24.0334 16.8753 24.0334 18.2339 23.8904 19.2972C23.7433 20.3915 23.4333 21.2772 22.7349 21.9756C22.0364 22.6741 21.1507 22.9841 20.0564 23.1312C18.9932 23.2741 17.6346 23.2741 15.9193 23.2741H12.0807C10.3655 23.2741 9.00686 23.2741 7.9436 23.1312C6.84934 22.9841 5.96365 22.6741 5.26518 21.9756C4.56671 21.2772 4.25673 20.3915 4.10961 19.2972C3.96666 18.2339 3.96667 16.8754 3.96668 15.1601V15.0548C3.96667 13.3396 3.96666 11.981 4.10961 10.9177C4.25673 9.82344 4.56671 8.93775 5.26518 8.23928C5.4542 8.05026 5.65694 7.88968 5.87381 7.75309C6.00584 6.95703 6.26626 6.28602 6.80923 5.74495C7.39998 5.15626 8.14481 4.90125 9.03815 4.78156C9.90082 4.66598 10.9992 4.666 12.3683 4.66602ZM18.6127 6.16916C19.3516 6.26817 19.7522 6.45055 20.0393 6.73663C20.1482 6.84519 20.2421 6.97 20.3222 7.12344C20.235 7.10901 20.1464 7.09581 20.0564 7.08371C18.9932 6.94076 17.6346 6.94077 15.9193 6.94079H12.0807C10.3655 6.94077 9.00686 6.94076 7.9436 7.08371C7.79114 7.10421 7.64273 7.12787 7.49832 7.1553C7.58181 6.98713 7.68106 6.8526 7.79744 6.73663C8.08453 6.45055 8.48506 6.26817 9.22405 6.16916C9.98293 6.06749 10.9872 6.06602 12.4198 6.06602H15.4169C16.8495 6.06602 17.8538 6.06749 18.6127 6.16916ZM5.49713 19.1107C5.62337 20.0497 5.86013 20.5907 6.25513 20.9857C6.65012 21.3807 7.19113 21.6174 8.13014 21.7437C9.0893 21.8726 10.3537 21.8741 12.1334 21.8741H15.8667C17.6464 21.8741 18.9107 21.8726 19.8699 21.7437C20.5831 21.6478 21.0668 21.4881 21.4312 21.2438L18.9231 18.9866C18.1954 18.3317 17.1118 18.2664 16.3108 18.8293L16.0325 19.0249C15.012 19.7421 13.6237 19.6219 12.7418 18.7399L8.73803 14.7362C8.19949 14.1976 7.33563 14.1689 6.76245 14.6704L5.36725 15.8912C5.37014 17.268 5.38796 18.2987 5.49713 19.1107ZM6.25513 9.22923C6.65012 8.83424 7.19113 8.59748 8.13014 8.47123C9.0893 8.34228 10.3537 8.34079 12.1334 8.34079H15.8667C17.6464 8.34079 18.9107 8.34228 19.8699 8.47123C20.8089 8.59748 21.3499 8.83424 21.7449 9.22923C22.1399 9.62423 22.3767 10.1652 22.5029 11.1042C22.6319 12.0634 22.6334 13.3278 22.6334 15.1075C22.6334 16.8872 22.6319 18.1515 22.5029 19.1107C22.4487 19.5139 22.3741 19.8437 22.2754 20.1201L19.8597 17.9459C18.6469 16.8544 16.8408 16.7457 15.5058 17.6839L15.2275 17.8795C14.7637 18.2055 14.1326 18.1508 13.7317 17.75L9.72798 13.7462C8.66826 12.6865 6.96841 12.6299 5.84055 13.6168L5.36814 14.0301C5.3732 12.7988 5.39586 11.8574 5.49713 11.1042C5.62337 10.1652 5.86013 9.62423 6.25513 9.22923ZM17.0334 11.8408C17.0334 10.681 17.9736 9.74079 19.1334 9.74079C20.2931 9.74079 21.2334 10.681 21.2334 11.8408C21.2334 13.0006 20.2931 13.9408 19.1334 13.9408C17.9736 13.9408 17.0334 13.0006 17.0334 11.8408ZM19.1334 11.1408C18.7468 11.1408 18.4334 11.4542 18.4334 11.8408C18.4334 12.2274 18.7468 12.5408 19.1334 12.5408C19.52 12.5408 19.8334 12.2274 19.8334 11.8408C19.8334 11.4542 19.52 11.1408 19.1334 11.1408Z"
            fill="#A6A6A6"
          />
        </svg>
        Gallery
      </li>
    </ul>
  );
};

export default Navigation;
