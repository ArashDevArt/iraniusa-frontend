import React from "react";
import { Verified } from "../Icons/Solid";
import Link from "next/link";

interface MediumBanner {
  name: string;
}

const MediumBanner: React.FC<MediumBanner> = (props) => {
  return (
    <Link
      href={"/"}
      className="relative top-0 left-0 flex flex-col items-center justify-center gap-y-5 w-full h-auto py-9 bg-cover bg-center rounded-3xl hover:cursor-pointer"
      style={{ backgroundImage: `url('/images/banner/3.png')` }}
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 z-5">
        <svg width="96" height="52" viewBox="0 0 96 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H96L85.2518 34.4466C81.9936 44.8886 72.3252 52 61.3866 52H34.6134C23.6748 52 14.0064 44.8887 10.7482 34.4466L0 0Z" fill="white" />
        </svg>


      </div>
      <div
          className="w-16 h-16 absolute left-1/2 -top-4 -translate-x-1/2 z-5 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/avatars/1.png')` }}
        ></div>
      <div className="absolute top-4 right-5 flex flex-col gap-y-4">
        <Link href={""}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.4591 6C21.6891 6.35 20.8591 6.58 19.9991 6.69C20.8791 6.16 21.5591 5.32 21.8791 4.31C21.0491 4.81 20.1291 5.16 19.1591 5.36C18.3691 4.5 17.2591 4 15.9991 4C13.6491 4 11.7291 5.92 11.7291 8.29C11.7291 8.63 11.7691 8.96 11.8391 9.27C8.27906 9.09 5.10906 7.38 2.99906 4.79C2.62906 5.42 2.41906 6.16 2.41906 6.94C2.41906 8.43 3.16906 9.75 4.32906 10.5C3.61906 10.5 2.95906 10.3 2.37906 10V10.03C2.37906 12.11 3.85906 13.85 5.81906 14.24C5.18979 14.4122 4.52916 14.4362 3.88906 14.31C4.16067 15.1625 4.6926 15.9084 5.41008 16.4429C6.12756 16.9775 6.99451 17.2737 7.88906 17.29C6.37269 18.4904 4.49306 19.1393 2.55906 19.13C2.21906 19.13 1.87906 19.11 1.53906 19.07C3.43906 20.29 5.69906 21 8.11906 21C15.9991 21 20.3291 14.46 20.3291 8.79C20.3291 8.6 20.3291 8.42 20.3191 8.23C21.1591 7.63 21.8791 6.87 22.4591 6Z"
              fill="white"
            />
          </svg>
        </Link>

        <Link href={""}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
              fill="white"
            />
          </svg>
        </Link>

        <Link href={""}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.98 11.41C21.64 5.60995 16.37 1.13996 10.3 2.13996C6.12004 2.82996 2.77005 6.21994 2.12005 10.3999C1.74005 12.8199 2.24007 15.1099 3.33007 16.9999L2.44006 20.3099C2.24006 21.0599 2.93004 21.7399 3.67004 21.5299L6.93005 20.63C8.41005 21.5 10.14 21.9999 11.99 21.9999C17.63 21.9999 22.31 17.03 21.98 11.41ZM16.8801 15.7199C16.7901 15.8999 16.68 16.07 16.54 16.23C16.29 16.5 16.02 16.7 15.72 16.82C15.42 16.95 15.09 17.01 14.74 17.01C14.23 17.01 13.68 16.89 13.11 16.64C12.53 16.39 11.9601 16.0599 11.3901 15.6499C10.8101 15.2299 10.2701 14.7599 9.75005 14.2499C9.23005 13.7299 8.77003 13.1799 8.35003 12.6099C7.94003 12.0399 7.61005 11.4699 7.37005 10.8999C7.13005 10.3299 7.01006 9.77996 7.01006 9.25996C7.01006 8.91996 7.07006 8.58996 7.19006 8.28996C7.31006 7.97996 7.50007 7.69996 7.77007 7.44996C8.09007 7.12996 8.44005 6.97996 8.81005 6.97996C8.95005 6.97996 9.09002 7.00995 9.22002 7.06995C9.35002 7.12995 9.47005 7.21995 9.56005 7.34995L10.72 8.98994C10.81 9.11994 10.88 9.22994 10.92 9.33994C10.97 9.44994 10.99 9.54994 10.99 9.64994C10.99 9.76994 10.9501 9.88996 10.8801 10.01C10.8101 10.13 10.72 10.2499 10.6 10.3699L10.22 10.7699C10.16 10.8299 10.1401 10.8899 10.1401 10.9699C10.1401 11.0099 10.15 11.0499 10.16 11.0899C10.18 11.1299 10.1901 11.16 10.2001 11.1899C10.2901 11.36 10.45 11.5699 10.67 11.8299C10.9 12.0899 11.1401 12.3599 11.4001 12.6199C11.6701 12.8899 11.9301 13.1299 12.2001 13.3599C12.4601 13.5799 12.68 13.73 12.85 13.82C12.88 13.83 12.9101 13.8499 12.9401 13.8599C12.9801 13.8799 13.0201 13.88 13.0701 13.88C13.1601 13.88 13.2201 13.85 13.2801 13.79L13.66 13.41C13.79 13.28 13.9101 13.19 14.0201 13.13C14.1401 13.06 14.2501 13.0199 14.3801 13.0199C14.4801 13.0199 14.5801 13.0399 14.6901 13.0899C14.8001 13.1399 14.92 13.2 15.04 13.29L16.7001 14.4699C16.8301 14.5599 16.92 14.67 16.98 14.79C17.03 14.92 17.0601 15.0399 17.0601 15.1799C17.0001 15.3499 16.9601 15.5399 16.8801 15.7199Z"
              fill="white"
            />
          </svg>
        </Link>

        <Link href={""}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1420_27016)">
              <path
                d="M12.0094 24.0187C18.6419 24.0187 24.0187 18.6419 24.0187 12.0094C24.0187 5.37677 18.6419 0 12.0094 0C5.37677 0 0 5.37677 0 12.0094C0 18.6419 5.37677 24.0187 12.0094 24.0187Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.42474 11.8783C8.92279 10.3444 11.2611 9.35296 12.4395 8.8666C15.7692 7.48235 16.4614 7.23917 16.9103 7.22046C17.0038 7.22046 17.2283 7.23917 17.378 7.3514C17.4902 7.44493 17.5276 7.57588 17.5463 7.66941C17.565 7.76294 17.5837 7.96871 17.565 8.13706C17.378 10.0264 16.611 14.6468 16.1995 16.7606C16.0311 17.6585 15.6944 17.9578 15.3764 17.9952C14.6843 18.0513 14.1418 17.5276 13.4684 17.0973C12.4208 16.4052 11.8222 15.9749 10.7934 15.3015C9.61492 14.5159 10.3819 14.0856 11.0553 13.3935C11.2236 13.2064 14.3102 10.4192 14.3663 10.1573C14.3663 10.1199 14.385 10.0077 14.3102 9.95156C14.2353 9.89544 14.1418 9.91415 14.067 9.93285C13.9547 9.95156 12.2712 11.0739 8.99761 13.2813C8.51125 13.618 8.08101 13.7676 7.68818 13.7676C7.25794 13.7676 6.43487 13.5244 5.81757 13.3187C5.06932 13.0755 4.47072 12.9445 4.52684 12.533C4.56425 12.3272 4.86355 12.1028 5.42474 11.8783Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1420_27016">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>

      <div className="flex flex-col gap-y-2 justify-center mt-10">
        <h3 className=" flex items-center text-white font-opensans font-medium lg:text-2xl text-center">
          {props.name}
          <Verified />
        </h3>
      </div>
      <svg className="-mt-2"
        width="240"
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
      <div className="flex flex-col gap-y-3 text-center items-center text-white-shade-8 -mt-3">
        <h4 className="text-xl lg:text-2xl">کمک های دولتی دریافت کنید</h4>
        <p >
          Medium constructions represent innovativeconstruction services
        </p>
        <div className="flex flex-col gap-y-3 items-center text-white font-opensans mt-2 lg:flex-row gap-x-5">
          <div className="flex items-center gap-x-3">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.90573 4.91193C8.19378 3.62387 10.3674 3.72179 11.2642 5.32882L11.7618 6.2204C12.3475 7.26983 12.0979 8.59392 11.2406 9.46177C11.2291 9.47741 11.1686 9.56552 11.1611 9.71948C11.1515 9.91599 11.2213 10.3705 11.9254 11.0746C12.6293 11.7785 13.0837 11.8484 13.2803 11.8389C13.4344 11.8314 13.5225 11.7708 13.5382 11.7594C14.4061 10.902 15.7301 10.6525 16.7796 11.2381L17.6711 11.7357C19.2782 12.6326 19.3761 14.8062 18.088 16.0942C17.3991 16.7832 16.483 17.3954 15.4064 17.4362C13.811 17.4967 11.162 17.0847 8.53865 14.4613C5.91528 11.8379 5.50329 9.18893 5.56377 7.59355C5.60458 6.517 6.21676 5.6009 6.90573 4.91193ZM10.26 5.88925C9.8008 5.06635 8.5667 4.87729 7.7189 5.7251C7.12447 6.31953 6.73802 6.97566 6.71294 7.63712C6.6625 8.96755 6.99097 11.2873 9.35182 13.6481C11.7127 16.009 14.0324 16.3375 15.3628 16.287C16.0243 16.2619 16.6804 15.8755 17.2749 15.2811C18.1227 14.4333 17.9336 13.1992 17.1107 12.7399L16.2191 12.2423C15.6645 11.9328 14.8855 12.0384 14.3386 12.5853L14.3385 12.5854C14.2847 12.6391 13.9429 12.958 13.3361 12.9875C12.715 13.0177 11.9631 12.7386 11.1122 11.8878C10.261 11.0366 9.98204 10.2845 10.0125 9.66324C10.0422 9.05641 10.3613 8.71479 10.4147 8.66138L10.4147 8.66136C10.9616 8.11448 11.0671 7.33544 10.7576 6.78083L10.26 5.88925Z"
                fill="white"
              />
            </svg>
            <span>(208) 555-0112</span>
          </div>
          <div className="flex items-center gap-x-3">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.79163 10.0765C4.79163 6.32058 7.78547 3.2583 11.5 3.2583C15.2144 3.2583 18.2083 6.32058 18.2083 10.0765C18.2083 11.8897 17.6915 13.8367 16.778 15.5187C15.8657 17.1987 14.5326 18.6585 12.865 19.4379C11.9987 19.8429 11.0012 19.8429 10.1349 19.4379C8.46731 18.6585 7.13427 17.1987 6.22189 15.5187C5.30838 13.8367 4.79163 11.8897 4.79163 10.0765ZM11.5 4.4083C8.43976 4.4083 5.94163 6.93637 5.94163 10.0765C5.94163 11.6842 6.40364 13.4438 7.23247 14.9699C8.06241 16.4981 9.23524 17.748 10.6219 18.3961C11.1795 18.6568 11.8204 18.6568 12.3781 18.3961C13.7647 17.748 14.9375 16.4981 15.7675 14.9699C16.5963 13.4438 17.0583 11.6842 17.0583 10.0765C17.0583 6.93637 14.5602 4.4083 11.5 4.4083ZM11.5 8.24163C10.5473 8.24163 9.77496 9.01394 9.77496 9.96663C9.77496 10.9193 10.5473 11.6916 11.5 11.6916C12.4527 11.6916 13.225 10.9193 13.225 9.96663C13.225 9.01394 12.4527 8.24163 11.5 8.24163ZM8.62496 9.96663C8.62496 8.37882 9.91214 7.09163 11.5 7.09163C13.0878 7.09163 14.375 8.37882 14.375 9.96663C14.375 11.5545 13.0878 12.8416 11.5 12.8416C9.91214 12.8416 8.62496 11.5545 8.62496 9.96663Z"
                fill="white"
              />
            </svg>
            <span>California, Los angles</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MediumBanner;
