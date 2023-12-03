"use client";

import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";
import Loading from "@/components/Icons/Animated/Loading";

const page = () => {
  const [showErr, setShowErr] = useState(false);

  const ErrBoxClasses = classNames(
    "transition-all duration-300 ease-in-out absolute bottom-10 w-80 h-52 rounded-3xl bg-white ",
    {
      "left-10": showErr,
      "-left-80": !showErr,
    }
  );
  return (
    <main className="relative">
      <div className={ErrBoxClasses}></div>
      <section
        className="w-full h-screen flex flex-col items-center pt-72 gap-y-5 bg-center bg-cover"
        style={{ backgroundImage: `url('/images/admin/admin-background.png')` }}
      >
        <h1 className="font-semibold text-5xl text-black">Admins login</h1>
        <p className="text-white-shade-10 max-w-sm text-center mb-8">
          Admins only. Log in for system management. Regular users, use standard
          login.
        </p>
        <div className="flex gap-x-3">
          <div className="transition-all focus-within:border-white-shade-18  focus-within:border-2 flex items-center gap-xfocus-within:border-black-2 w-60 h-16 rounded-3xl border-2 border-white-shade-4 px-4">
            <svg
              className="w-1/6 pr-2"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="focus-within:fill-primary"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 6.13953C7.87583 6.13953 6.15385 7.85751 6.15385 9.97674C6.15385 11.233 6.75925 12.3475 7.69231 13.0467V14.0698C7.69231 15.0587 8.4959 15.8605 9.48718 15.8605H10.5128C11.5041 15.8605 12.3077 15.0587 12.3077 14.0698V13.0467C13.2408 12.3475 13.8462 11.233 13.8462 9.97674C13.8462 7.85751 12.1242 6.13953 10 6.13953ZM7.69231 9.97674C7.69231 8.7052 8.7255 7.67442 10 7.67442C11.2745 7.67442 12.3077 8.7052 12.3077 9.97674C12.3077 10.828 11.8451 11.5723 11.1533 11.9715C10.9156 12.1087 10.7692 12.3619 10.7692 12.6358V14.0698C10.7692 14.2111 10.6544 14.3256 10.5128 14.3256H9.48718C9.34557 14.3256 9.23077 14.2111 9.23077 14.0698V12.6358C9.23077 12.3619 9.0844 12.1087 8.84671 11.9715C8.15493 11.5723 7.69231 10.828 7.69231 9.97674Z"
                fill="#B3B3B3"
              />
              <path
                className="group-focus:fill-primary"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C9.03844 0 8.12033 0.313713 6.63937 0.819746L5.89328 1.07456C4.37397 1.59341 3.20144 1.99384 2.36208 2.33403C1.93927 2.5054 1.57576 2.67138 1.28306 2.84097C1.00138 3.00418 0.718792 3.20774 0.526802 3.48065C0.33703 3.7504 0.238906 4.08202 0.177245 4.40125C0.11314 4.73313 0.074486 5.13125 0.0495373 5.58837C0 6.496 0 7.73941 0 9.35218V10.9912C0 17.2341 4.72618 20.2272 7.53675 21.4521L7.56455 21.4642C7.91305 21.6162 8.24063 21.759 8.61703 21.8551C9.01443 21.9566 9.43666 22 10 22C10.5633 22 10.9856 21.9566 11.383 21.8551C11.7594 21.759 12.0869 21.6162 12.4354 21.4642L12.4632 21.4521C15.2738 20.2272 20 17.2341 20 10.9912V9.35237C20 7.7395 20 6.49604 19.9505 5.58837C19.9255 5.13125 19.8869 4.73313 19.8228 4.40125C19.7611 4.08202 19.663 3.7504 19.4732 3.48065C19.2812 3.20774 18.9986 3.00418 18.7169 2.84097C18.4242 2.67138 18.0607 2.5054 17.6379 2.33403C16.7986 1.99384 15.626 1.59341 14.1067 1.07455L13.3606 0.819748C11.8797 0.313713 10.9616 0 10 0ZM7.00576 2.31695C8.66169 1.75144 9.32539 1.53488 10 1.53488C10.6746 1.53488 11.3383 1.75144 12.9942 2.31696L13.5817 2.51759C15.1331 3.0474 16.2645 3.43409 17.0589 3.75605C17.4554 3.91676 17.7427 4.05142 17.9443 4.16826C18.0439 4.22595 18.1125 4.27354 18.1583 4.3107C18.1971 4.34217 18.2119 4.36001 18.2141 4.36263C18.216 4.36582 18.2288 4.38707 18.2467 4.43739C18.2672 4.4948 18.29 4.57711 18.3121 4.69169C18.3569 4.92359 18.3908 5.24215 18.4143 5.67182C18.4613 6.53258 18.4615 7.73411 18.4615 9.37983V10.9912C18.4615 16.2866 14.4924 18.8928 11.8474 20.0456C11.4664 20.2116 11.2464 20.3056 11.0014 20.3682C10.7675 20.4279 10.4821 20.4651 10 20.4651C9.51795 20.4651 9.23249 20.4279 8.99857 20.3682C8.75363 20.3056 8.53361 20.2116 8.1526 20.0456C5.50759 18.8928 1.53846 16.2866 1.53846 10.9912V9.37983C1.53846 7.73411 1.53874 6.53258 1.58572 5.67182C1.60917 5.24215 1.64312 4.92359 1.68791 4.69169C1.71004 4.57711 1.73276 4.4948 1.75326 4.43739C1.77121 4.38711 1.78396 4.36585 1.78594 4.36264C1.78806 4.36004 1.80287 4.3422 1.84171 4.3107C1.88753 4.27354 1.95612 4.22595 2.05568 4.16826C2.25733 4.05142 2.54462 3.91675 2.94112 3.75605C3.73548 3.43409 4.86688 3.0474 6.41826 2.51759L7.00576 2.31695Z"
                fill="#B3B3B3"
              />
            </svg>
            <input
              type="text"
              className="group w-5/6 h-full bg-white/0 rounded-3xl border-none focus:outline-none text-black"
              placeholder="Passcode"
            />
          </div>
          <button
            onClick={() => {
              setShowErr(!showErr);
            }}
            type="submit"
            className="inline-flex items-center gap-x-2 px-10 rounded-3xl bg-black text-white hover:bg-white/0 hover:text-black border-2 hover:border-blue transition-all duration-300"
          >
            <Loading/>
            Login
          </button>
        </div>
        <span className="text-white-shade-10 mt-3">
          Back to
          <Link href={"/login"} className="text-black pl-2">
            standard login
          </Link>
        </span>
      </section>
    </main>
  );
};

export default page;
