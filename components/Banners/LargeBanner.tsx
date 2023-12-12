import React from "react";
import { Verified } from "../Icons/Solid";
import Link from "next/link";
import { WhatsApp } from "../Icons/Socials";

const LargeBanner = () => {
  return (
    <Link
      href={"/"}
      className="flex p-10 gap-x-3 w-full h-[500px] text-white bg-cover bg-center rounded-3xl hover:cursor-pointer"
      style={{ backgroundImage: `url('/images/banner/sample.jpg')` }}
    >
      <div className="flex flex-col justify-between w-1/4 h-full">
        <div>
          <span className="txert-white font-outfit text-xl font-medium">
            Blog Level
          </span>
          <span className="flex gap-x-2 items-center text-green font-opensans font-medium text-xl">
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="3.5" r="3.5" fill="#58BD7D" />
            </svg>
            Active
          </span>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-3 font-opensans font-medium text-lg">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.94358 0.25H13.0564C14.8942 0.249984 16.3498 0.249972 17.489 0.403135C18.6614 0.560763 19.6104 0.89288 20.3588 1.64124C21.1071 2.38961 21.4392 3.33856 21.5969 4.51098C21.75 5.65019 21.75 7.10583 21.75 8.94359V9.05641C21.75 10.8942 21.75 12.3498 21.5969 13.489C21.4392 14.6614 21.1071 15.6104 20.3588 16.3588C19.6104 17.1071 18.6614 17.4392 17.489 17.5969C16.3498 17.75 14.8942 17.75 13.0564 17.75H8.94359C7.10583 17.75 5.65019 17.75 4.51098 17.5969C3.33856 17.4392 2.38961 17.1071 1.64124 16.3588C0.89288 15.6104 0.560763 14.6614 0.403135 13.489C0.249972 12.3498 0.249984 10.8942 0.25 9.05642V8.94358C0.249984 7.10582 0.249972 5.65019 0.403135 4.51098C0.560763 3.33856 0.89288 2.38961 1.64124 1.64124C2.38961 0.89288 3.33856 0.560763 4.51098 0.403135C5.65019 0.249972 7.10582 0.249984 8.94358 0.25ZM4.71085 1.88976C3.70476 2.02502 3.12511 2.27869 2.7019 2.7019C2.27869 3.12511 2.02502 3.70476 1.88976 4.71085C1.75159 5.73851 1.75 7.09318 1.75 9C1.75 10.9068 1.75159 12.2615 1.88976 13.2892C2.02502 14.2952 2.27869 14.8749 2.7019 15.2981C3.12511 15.7213 3.70476 15.975 4.71085 16.1102C5.73851 16.2484 7.09318 16.25 9 16.25H13C14.9068 16.25 16.2615 16.2484 17.2892 16.1102C18.2952 15.975 18.8749 15.7213 19.2981 15.2981C19.7213 14.8749 19.975 14.2952 20.1102 13.2892C20.2484 12.2615 20.25 10.9068 20.25 9C20.25 7.09318 20.2484 5.73851 20.1102 4.71085C19.975 3.70476 19.7213 3.12511 19.2981 2.7019C18.8749 2.27869 18.2952 2.02502 17.2892 1.88976C16.2615 1.75159 14.9068 1.75 13 1.75H9C7.09318 1.75 5.73851 1.75159 4.71085 1.88976ZM4.42383 4.51986C4.68901 4.20165 5.16193 4.15866 5.48014 4.42383L7.63903 6.22291C8.57199 7.00038 9.21973 7.53842 9.76658 7.89013C10.2959 8.23059 10.6549 8.34488 11 8.34488C11.3451 8.34488 11.7041 8.23059 12.2334 7.89013C12.7803 7.53842 13.428 7.00038 14.361 6.22291L16.5199 4.42383C16.8381 4.15866 17.311 4.20165 17.5762 4.51986C17.8413 4.83807 17.7983 5.31099 17.4801 5.57617L15.2836 7.40658C14.3973 8.14523 13.6789 8.74392 13.0448 9.15172C12.3843 9.57653 11.7411 9.84488 11 9.84488C10.2589 9.84488 9.61567 9.57653 8.95518 9.15172C8.32112 8.74392 7.60272 8.14524 6.71636 7.40658L4.51986 5.57617C4.20165 5.31099 4.15866 4.83807 4.42383 4.51986Z"
                fill="white"
              />
            </svg>
            georgia.young@gmail.com
          </div>
          <div className="flex items-center gap-x-3 font-opensans font-medium text-lg">
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.25 9.14329C0.25 4.24427 4.15501 0.25 9 0.25C13.845 0.25 17.75 4.24427 17.75 9.14329C17.75 11.5084 17.076 14.0479 15.8844 16.2419C14.6944 18.4331 12.9556 20.3372 10.7805 21.3539C9.65057 21.882 8.34943 21.882 7.21949 21.3539C5.04437 20.3372 3.30562 18.4331 2.11556 16.2419C0.924029 14.0479 0.25 11.5084 0.25 9.14329ZM9 1.75C5.00843 1.75 1.75 5.04748 1.75 9.14329C1.75 11.2404 2.35263 13.5354 3.4337 15.526C4.51624 17.5192 6.04602 19.1496 7.85465 19.995C8.58205 20.335 9.41795 20.335 10.1454 19.995C11.954 19.1496 13.4838 17.5192 14.5663 15.526C15.6474 13.5354 16.25 11.2404 16.25 9.14329C16.25 5.04748 12.9916 1.75 9 1.75ZM9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75ZM5.25 9C5.25 6.92893 6.92893 5.25 9 5.25C11.0711 5.25 12.75 6.92893 12.75 9C12.75 11.0711 11.0711 12.75 9 12.75C6.92893 12.75 5.25 11.0711 5.25 9Z"
                fill="white"
              />
            </svg>
            3517 W. Gray St. Utica
          </div>
          <div className="flex items-center gap-x-3 font-opensans font-medium text-lg">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.00745 1.40692C3.68752 -0.273149 6.52266 -0.145431 7.69248 1.95069L8.34149 3.11362C9.10541 4.48244 8.77987 6.20952 7.66157 7.34149C7.64668 7.3619 7.56774 7.47683 7.55791 7.67765C7.54536 7.93397 7.63639 8.52675 8.55482 9.44517C9.47295 10.3633 10.0656 10.4546 10.3221 10.4421C10.5231 10.4323 10.6381 10.3533 10.6585 10.3384C11.7905 9.22012 13.5176 8.89459 14.8864 9.6585L16.0493 10.3075C18.1454 11.4773 18.2731 14.3125 16.5931 15.9925C15.6944 16.8912 14.4995 17.6897 13.0953 17.7429C11.0144 17.8218 7.55913 17.2844 4.13735 13.8626C0.715564 10.4409 0.178177 6.98563 0.257065 4.90469C0.310297 3.5005 1.10879 2.30558 2.00745 1.40692ZM6.38265 2.68169C5.78363 1.60834 4.17394 1.36175 3.06811 2.46758C2.29276 3.24293 1.7887 4.09874 1.75599 4.96152C1.6902 6.69686 2.11864 9.72262 5.19801 12.802C8.27737 15.8814 11.3031 16.3098 13.0385 16.244C13.9013 16.2113 14.7571 15.7072 15.5324 14.9319C16.6382 13.826 16.3916 12.2164 15.3183 11.6173L14.1554 10.9683C13.432 10.5646 12.4158 10.7023 11.7025 11.4156C11.6325 11.4856 11.1864 11.9018 10.395 11.9403C9.58474 11.9797 8.604 11.6157 7.49416 10.5058C6.38395 9.39563 6.02003 8.41462 6.0597 7.60429C6.09846 6.81278 6.51468 6.36717 6.58432 6.29752C7.29764 5.5842 7.43539 4.56803 7.03166 3.84462L6.38265 2.68169Z"
                fill="white"
              />
            </svg>
            (208) 555-0112
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-2/4 h-full gap-y-5">
        <div className="flex">
          <div
            className="w-16 h-16 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url('/images/avatars/1.png')` }}
          ></div>
          <div
            className="w-16 h-16 -ml-6 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url('/images/avatars/2.png')` }}
          ></div>
        </div>
        <div className="flex flex-col gap-y-2 justify-center">
          <h3 className="flex items-center text-white font-opensans font-medium text-2xl text-center">
            Supplemental income
            <Verified />
          </h3>
        </div>
        <svg
          width="298"
          height="12"
          viewBox="0 0 298 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="171" y1="5.5" x2="298" y2="5.49999" stroke="#595959" />
          <line
            x1="-4.3688e-08"
            y1="5.5"
            x2="127"
            y2="5.49999"
            stroke="#595959"
          />
          <path
            d="M149 0L150.587 3.81565L154.706 4.1459L151.568 6.83435L152.527 10.8541L149 8.7L145.473 10.8541L146.432 6.83435L143.294 4.1459L147.413 3.81565L149 0Z"
            fill="white"
          />
        </svg>
        <div className="flex flex-col gap-y-3 text-center items-center text-white-shade-8">
          <h4 className="text-3xl font-vazir">کمک های دولتی دریافت کنید</h4>
          <p className="text-lg font-opensans">
            Medium constructions represent
            <br />
            innovativeconstruction services
          </p>
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col justify-between">
       
      </div>
    </Link>
  );
};

export default LargeBanner;
