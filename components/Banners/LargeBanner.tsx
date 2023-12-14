import React from "react";
import { Verified } from "../Icons/Solid";
import Link from "next/link";
import { WhatsApp } from "../Icons/Socials";

const LargeBanner = () => {
  return (
    <Link
      href={"/"}
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-x-3 gap-y-6 w-full h-auto text-white bg-cover bg-center rounded-3xl hover:cursor-pointer px-6 py-7"
      style={{ backgroundImage: `url('/images/banner/sample.jpg')` }}
    >
      <div className="flex-col justify-between hidden h-[370px]  lg:flex">
        <div className="hidden lg:block">
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

     <div className="w-full relative">
     <div className=" flex flex-col items-center w-full  h-full gap-y-5">
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
          <h3 className="flex items-center text-white font-opensans text-lg font-medium lg:text-2xl text-center">
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
          <h4 className="text-xl lg:text-3xl font-vazirmatn">کمک های دولتی دریافت کنید</h4>
          <p className="lg:text-lg font-opensans">
            Medium constructions represent
            <br />
            innovativeconstruction services
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0 flex flex-col items-center gap-6 lg:hidden">
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4009 8.03292C16.1317 3.44126 11.9596 -0.0974845 7.15419 0.694182C3.84502 1.24043 1.19294 3.92417 0.678362 7.23333C0.377528 9.14917 0.773379 10.9621 1.6363 12.4583L0.931701 15.0788C0.773367 15.6725 1.3196 16.2108 1.90544 16.0446L4.48628 15.3321C5.65794 16.0208 7.02752 16.4167 8.49211 16.4167C12.9571 16.4167 16.6621 12.4821 16.4009 8.03292ZM12.3634 11.445C12.2921 11.5875 12.205 11.7221 12.0942 11.8488C11.8963 12.0625 11.6825 12.2208 11.445 12.3158C11.2075 12.4188 10.9463 12.4663 10.6692 12.4663C10.2654 12.4663 9.83002 12.3713 9.37877 12.1733C8.9196 11.9754 8.46838 11.7142 8.01713 11.3896C7.55796 11.0571 7.13045 10.685 6.71878 10.2813C6.30712 9.86959 5.94293 9.43416 5.61043 8.98291C5.28585 8.53166 5.02461 8.08042 4.83461 7.62917C4.64461 7.17792 4.54962 6.74251 4.54962 6.33085C4.54962 6.06168 4.59712 5.80043 4.69212 5.56293C4.78712 5.31751 4.93755 5.09585 5.1513 4.89793C5.40463 4.6446 5.6817 4.52585 5.97461 4.52585C6.08545 4.52585 6.19626 4.54959 6.29918 4.59709C6.40209 4.64459 6.49711 4.71584 6.56836 4.81876L7.48668 6.11708C7.55793 6.22 7.61335 6.30708 7.64502 6.39417C7.6846 6.48125 7.70044 6.56042 7.70044 6.63958C7.70044 6.73458 7.66879 6.8296 7.61337 6.9246C7.55795 7.0196 7.48668 7.11458 7.39168 7.20958L7.09084 7.52625C7.04334 7.57375 7.02754 7.62126 7.02754 7.68459C7.02754 7.71626 7.03543 7.74792 7.04334 7.77958C7.05918 7.81125 7.06713 7.83501 7.07504 7.85876C7.14629 7.99334 7.27294 8.15958 7.4471 8.36541C7.62919 8.57124 7.81922 8.785 8.02505 8.99083C8.2388 9.20458 8.44463 9.39458 8.65838 9.57666C8.86421 9.75083 9.03835 9.86959 9.17293 9.94084C9.19668 9.94876 9.22045 9.96458 9.2442 9.97249C9.27587 9.98833 9.30754 9.98834 9.34712 9.98834C9.41837 9.98834 9.46589 9.96459 9.51339 9.91709L9.81418 9.61626C9.91709 9.51334 10.0121 9.44209 10.0992 9.39459C10.1942 9.33918 10.2813 9.3075 10.3842 9.3075C10.4634 9.3075 10.5425 9.32333 10.6296 9.36292C10.7167 9.4025 10.8117 9.45001 10.9067 9.52126L12.2209 10.4554C12.3238 10.5267 12.395 10.6138 12.4425 10.7088C12.4821 10.8117 12.5059 10.9067 12.5059 11.0175C12.4584 11.1521 12.4267 11.3025 12.3634 11.445Z" fill="white"/>
</svg>
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8171 0.183319H5.18296C2.30129 0.183319 0.583374 1.90124 0.583374 4.7829V11.4092C0.583374 14.2987 2.30129 16.0167 5.18296 16.0167H11.8092C14.6909 16.0167 16.4088 14.2987 16.4088 11.4171V4.7829C16.4167 1.90124 14.6988 0.183319 11.8171 0.183319ZM8.50004 11.1717C6.80587 11.1717 5.42837 9.79415 5.42837 8.09999C5.42837 6.40582 6.80587 5.02832 8.50004 5.02832C10.1942 5.02832 11.5717 6.40582 11.5717 8.09999C11.5717 9.79415 10.1942 11.1717 8.50004 11.1717ZM13.1867 4.04665C13.1471 4.14165 13.0917 4.22874 13.0205 4.3079C12.9413 4.37915 12.8542 4.43457 12.7592 4.47415C12.6642 4.51374 12.5613 4.53749 12.4584 4.53749C12.2446 4.53749 12.0467 4.45832 11.8963 4.3079C11.825 4.22874 11.7696 4.14165 11.73 4.04665C11.6905 3.95165 11.6667 3.84874 11.6667 3.74582C11.6667 3.6429 11.6905 3.53999 11.73 3.44499C11.7696 3.34207 11.825 3.2629 11.8963 3.18374C12.0784 3.00165 12.3555 2.91457 12.6088 2.96999C12.6642 2.9779 12.7117 2.99374 12.7592 3.01749C12.8067 3.03332 12.8542 3.05707 12.9017 3.08874C12.9413 3.11249 12.9809 3.15207 13.0205 3.18374C13.0917 3.2629 13.1471 3.34207 13.1867 3.44499C13.2263 3.53999 13.25 3.6429 13.25 3.74582C13.25 3.84874 13.2263 3.95165 13.1867 4.04665Z" fill="white"/>
</svg>
<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1.72942C16.3743 1.99707 15.6998 2.17295 15.001 2.25707C15.7161 1.85178 16.2686 1.20942 16.5287 0.437071C15.8542 0.819424 15.1066 1.08707 14.3184 1.24001C13.6764 0.582365 12.7744 0.200012 11.7505 0.200012C9.84082 0.200012 8.28059 1.66825 8.28059 3.4806C8.28059 3.7406 8.3131 3.99295 8.36998 4.23001C5.47706 4.09237 2.90105 2.78472 1.18642 0.80413C0.885755 1.28589 0.715105 1.85178 0.715105 2.44825C0.715105 3.58766 1.32457 4.59707 2.26721 5.1706C1.69025 5.1706 1.15392 5.01766 0.682601 4.78825V4.81119C0.682601 6.40178 1.88528 7.73237 3.47801 8.0306C2.96665 8.16229 2.42981 8.18061 1.90966 8.08413C2.13037 8.73603 2.56263 9.30644 3.14566 9.71519C3.7287 10.1239 4.4332 10.3505 5.16013 10.363C3.9279 11.2809 2.40048 11.7771 0.828872 11.77C0.552581 11.77 0.276291 11.7547 0 11.7241C1.54398 12.6571 3.3805 13.2 5.34704 13.2C11.7505 13.2 15.2691 8.19884 15.2691 3.86295C15.2691 3.71766 15.2691 3.58001 15.261 3.43472C15.9436 2.97589 16.5287 2.39472 17 1.72942Z" fill="white"/>
</svg>

      </div>
     </div>
     <div className="flex items-end gap-4 py-7 lg:hidden">
      <div className="flex flex-col gap-2 px-5 rounded-2xl py-3 bg-white/25 backdrop-blur-lg">
        <h1 className="text-[16px]">monthly page visit</h1>
        <span className="text-2xl font-semibold">234K</span>
        <span className="flex items-center gap-1"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3798 5.00797C13.254 4.96759 13.1166 4.97738 12.9998 5.03365C12.8719 5.09526 12.7874 5.20279 12.7571 5.31979L12.3448 6.90914C12.2006 7.46496 11.9907 8.00106 11.7203 8.50721C11.3006 9.293 10.6655 9.89735 10.0763 10.4051L8.82936 11.4796C8.6361 11.6461 8.5344 11.8957 8.55643 12.1505L9.26031 20.2908C9.29587 20.7021 9.63943 21.0167 10.0502 21.0167H14.079C16.7971 21.0167 19.0873 19.1254 19.5265 16.5855L20.138 13.0497C20.2221 12.5631 19.8479 12.1197 19.3568 12.1197H14.8665C14.0197 12.1197 13.3765 11.3599 13.5132 10.5254L14.0875 7.02015C14.1662 6.54 14.1437 6.04868 14.0215 5.57775C13.9595 5.33876 13.771 5.13365 13.5054 5.04833L13.3798 5.00797L13.5786 4.38912L13.3798 5.00797ZM12.4355 3.86253C12.8537 3.66099 13.3356 3.62835 13.7774 3.77027L13.903 3.81063L13.7042 4.42948L13.903 3.81063C14.5764 4.02696 15.1018 4.56492 15.2799 5.25133C15.4475 5.89748 15.4783 6.57157 15.3704 7.23034L14.7961 10.7356C14.7887 10.7805 14.8233 10.8197 14.8665 10.8197H19.3568C20.6562 10.8197 21.6402 11.9917 21.4189 13.2713L20.8075 16.8071C20.2547 20.0036 17.3951 22.3167 14.079 22.3167H10.0502C8.96366 22.3167 8.05871 21.4849 7.96514 20.4028L7.26126 12.2625C7.20328 11.5919 7.47084 10.9341 7.98073 10.4948L9.22764 9.42028C9.79549 8.93095 10.2735 8.45666 10.5737 7.89469C10.796 7.47842 10.9683 7.03828 11.0865 6.58272L11.4987 4.99338C11.6281 4.49478 11.9744 4.0847 12.4355 3.86253ZM5.17196 10.8203C5.51973 10.8053 5.81758 11.0669 5.84757 11.4137L6.68962 21.152C6.74371 21.7775 6.25098 22.3167 5.6218 22.3167C5.02916 22.3167 4.54999 21.8359 4.54999 21.2444V11.4697C4.54999 11.1216 4.8242 10.8353 5.17196 10.8203Z" fill="white"/>
</svg>3.4k
</span>
      </div>
      <div className="flex flex-col gap-3">
      <span className="bg-white text-black flex items-center justify-center rounded-full w-[75px]  py-2 font-medium ">
      Cafés
      </span>
      <span className="bg-white text-black rounded-full  py-2 font-medium px-5">
      Restaurants
      </span>
      </div>
     </div>
      <div className=" flex flex-col justify-between w-full lg:w-1/4 h-full  lg:hidden">
        <div className="hidden lg:block">
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
      <div className="flex-col items-end justify-between h-[370px] hidden lg:flex">
      <div className="flex  items-center gap-6 ">
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4009 8.03292C16.1317 3.44126 11.9596 -0.0974845 7.15419 0.694182C3.84502 1.24043 1.19294 3.92417 0.678362 7.23333C0.377528 9.14917 0.773379 10.9621 1.6363 12.4583L0.931701 15.0788C0.773367 15.6725 1.3196 16.2108 1.90544 16.0446L4.48628 15.3321C5.65794 16.0208 7.02752 16.4167 8.49211 16.4167C12.9571 16.4167 16.6621 12.4821 16.4009 8.03292ZM12.3634 11.445C12.2921 11.5875 12.205 11.7221 12.0942 11.8488C11.8963 12.0625 11.6825 12.2208 11.445 12.3158C11.2075 12.4188 10.9463 12.4663 10.6692 12.4663C10.2654 12.4663 9.83002 12.3713 9.37877 12.1733C8.9196 11.9754 8.46838 11.7142 8.01713 11.3896C7.55796 11.0571 7.13045 10.685 6.71878 10.2813C6.30712 9.86959 5.94293 9.43416 5.61043 8.98291C5.28585 8.53166 5.02461 8.08042 4.83461 7.62917C4.64461 7.17792 4.54962 6.74251 4.54962 6.33085C4.54962 6.06168 4.59712 5.80043 4.69212 5.56293C4.78712 5.31751 4.93755 5.09585 5.1513 4.89793C5.40463 4.6446 5.6817 4.52585 5.97461 4.52585C6.08545 4.52585 6.19626 4.54959 6.29918 4.59709C6.40209 4.64459 6.49711 4.71584 6.56836 4.81876L7.48668 6.11708C7.55793 6.22 7.61335 6.30708 7.64502 6.39417C7.6846 6.48125 7.70044 6.56042 7.70044 6.63958C7.70044 6.73458 7.66879 6.8296 7.61337 6.9246C7.55795 7.0196 7.48668 7.11458 7.39168 7.20958L7.09084 7.52625C7.04334 7.57375 7.02754 7.62126 7.02754 7.68459C7.02754 7.71626 7.03543 7.74792 7.04334 7.77958C7.05918 7.81125 7.06713 7.83501 7.07504 7.85876C7.14629 7.99334 7.27294 8.15958 7.4471 8.36541C7.62919 8.57124 7.81922 8.785 8.02505 8.99083C8.2388 9.20458 8.44463 9.39458 8.65838 9.57666C8.86421 9.75083 9.03835 9.86959 9.17293 9.94084C9.19668 9.94876 9.22045 9.96458 9.2442 9.97249C9.27587 9.98833 9.30754 9.98834 9.34712 9.98834C9.41837 9.98834 9.46589 9.96459 9.51339 9.91709L9.81418 9.61626C9.91709 9.51334 10.0121 9.44209 10.0992 9.39459C10.1942 9.33918 10.2813 9.3075 10.3842 9.3075C10.4634 9.3075 10.5425 9.32333 10.6296 9.36292C10.7167 9.4025 10.8117 9.45001 10.9067 9.52126L12.2209 10.4554C12.3238 10.5267 12.395 10.6138 12.4425 10.7088C12.4821 10.8117 12.5059 10.9067 12.5059 11.0175C12.4584 11.1521 12.4267 11.3025 12.3634 11.445Z" fill="white"/>
</svg>
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8171 0.183319H5.18296C2.30129 0.183319 0.583374 1.90124 0.583374 4.7829V11.4092C0.583374 14.2987 2.30129 16.0167 5.18296 16.0167H11.8092C14.6909 16.0167 16.4088 14.2987 16.4088 11.4171V4.7829C16.4167 1.90124 14.6988 0.183319 11.8171 0.183319ZM8.50004 11.1717C6.80587 11.1717 5.42837 9.79415 5.42837 8.09999C5.42837 6.40582 6.80587 5.02832 8.50004 5.02832C10.1942 5.02832 11.5717 6.40582 11.5717 8.09999C11.5717 9.79415 10.1942 11.1717 8.50004 11.1717ZM13.1867 4.04665C13.1471 4.14165 13.0917 4.22874 13.0205 4.3079C12.9413 4.37915 12.8542 4.43457 12.7592 4.47415C12.6642 4.51374 12.5613 4.53749 12.4584 4.53749C12.2446 4.53749 12.0467 4.45832 11.8963 4.3079C11.825 4.22874 11.7696 4.14165 11.73 4.04665C11.6905 3.95165 11.6667 3.84874 11.6667 3.74582C11.6667 3.6429 11.6905 3.53999 11.73 3.44499C11.7696 3.34207 11.825 3.2629 11.8963 3.18374C12.0784 3.00165 12.3555 2.91457 12.6088 2.96999C12.6642 2.9779 12.7117 2.99374 12.7592 3.01749C12.8067 3.03332 12.8542 3.05707 12.9017 3.08874C12.9413 3.11249 12.9809 3.15207 13.0205 3.18374C13.0917 3.2629 13.1471 3.34207 13.1867 3.44499C13.2263 3.53999 13.25 3.6429 13.25 3.74582C13.25 3.84874 13.2263 3.95165 13.1867 4.04665Z" fill="white"/>
</svg>
<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1.72942C16.3743 1.99707 15.6998 2.17295 15.001 2.25707C15.7161 1.85178 16.2686 1.20942 16.5287 0.437071C15.8542 0.819424 15.1066 1.08707 14.3184 1.24001C13.6764 0.582365 12.7744 0.200012 11.7505 0.200012C9.84082 0.200012 8.28059 1.66825 8.28059 3.4806C8.28059 3.7406 8.3131 3.99295 8.36998 4.23001C5.47706 4.09237 2.90105 2.78472 1.18642 0.80413C0.885755 1.28589 0.715105 1.85178 0.715105 2.44825C0.715105 3.58766 1.32457 4.59707 2.26721 5.1706C1.69025 5.1706 1.15392 5.01766 0.682601 4.78825V4.81119C0.682601 6.40178 1.88528 7.73237 3.47801 8.0306C2.96665 8.16229 2.42981 8.18061 1.90966 8.08413C2.13037 8.73603 2.56263 9.30644 3.14566 9.71519C3.7287 10.1239 4.4332 10.3505 5.16013 10.363C3.9279 11.2809 2.40048 11.7771 0.828872 11.77C0.552581 11.77 0.276291 11.7547 0 11.7241C1.54398 12.6571 3.3805 13.2 5.34704 13.2C11.7505 13.2 15.2691 8.19884 15.2691 3.86295C15.2691 3.71766 15.2691 3.58001 15.261 3.43472C15.9436 2.97589 16.5287 2.39472 17 1.72942Z" fill="white"/>
</svg>

      </div>
      <div className="lg:w-[180px] flex flex-col gap-2 px-5 rounded-2xl py-3 lg:py-4 bg-white/20 backdrop-blur-lg lg:items-center lg:gap-3">
        <h1 className="text-[16px] ">monthly page visit</h1>
        <span className="text-2xl font-semibold lg:text-5xl">234K</span>
        <span className="flex items-center gap-1"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3798 5.00797C13.254 4.96759 13.1166 4.97738 12.9998 5.03365C12.8719 5.09526 12.7874 5.20279 12.7571 5.31979L12.3448 6.90914C12.2006 7.46496 11.9907 8.00106 11.7203 8.50721C11.3006 9.293 10.6655 9.89735 10.0763 10.4051L8.82936 11.4796C8.6361 11.6461 8.5344 11.8957 8.55643 12.1505L9.26031 20.2908C9.29587 20.7021 9.63943 21.0167 10.0502 21.0167H14.079C16.7971 21.0167 19.0873 19.1254 19.5265 16.5855L20.138 13.0497C20.2221 12.5631 19.8479 12.1197 19.3568 12.1197H14.8665C14.0197 12.1197 13.3765 11.3599 13.5132 10.5254L14.0875 7.02015C14.1662 6.54 14.1437 6.04868 14.0215 5.57775C13.9595 5.33876 13.771 5.13365 13.5054 5.04833L13.3798 5.00797L13.5786 4.38912L13.3798 5.00797ZM12.4355 3.86253C12.8537 3.66099 13.3356 3.62835 13.7774 3.77027L13.903 3.81063L13.7042 4.42948L13.903 3.81063C14.5764 4.02696 15.1018 4.56492 15.2799 5.25133C15.4475 5.89748 15.4783 6.57157 15.3704 7.23034L14.7961 10.7356C14.7887 10.7805 14.8233 10.8197 14.8665 10.8197H19.3568C20.6562 10.8197 21.6402 11.9917 21.4189 13.2713L20.8075 16.8071C20.2547 20.0036 17.3951 22.3167 14.079 22.3167H10.0502C8.96366 22.3167 8.05871 21.4849 7.96514 20.4028L7.26126 12.2625C7.20328 11.5919 7.47084 10.9341 7.98073 10.4948L9.22764 9.42028C9.79549 8.93095 10.2735 8.45666 10.5737 7.89469C10.796 7.47842 10.9683 7.03828 11.0865 6.58272L11.4987 4.99338C11.6281 4.49478 11.9744 4.0847 12.4355 3.86253ZM5.17196 10.8203C5.51973 10.8053 5.81758 11.0669 5.84757 11.4137L6.68962 21.152C6.74371 21.7775 6.25098 22.3167 5.6218 22.3167C5.02916 22.3167 4.54999 21.8359 4.54999 21.2444V11.4697C4.54999 11.1216 4.8242 10.8353 5.17196 10.8203Z" fill="white"/>
</svg>3.4k
</span>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
      <span className="bg-white text-black flex items-center justify-center rounded-full w-[75px]  py-2 font-medium ">
      Cafés
      </span>
      <span className="bg-white text-black rounded-full  py-2 font-medium px-5 lg:px-7 ">
      Restaurants
      </span>
      </div>
     </div>
    </Link>
  );
};

export default LargeBanner;
