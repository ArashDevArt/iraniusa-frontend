import Link from "next/link";
import React from "react";

interface UpcomingEventProps {
  buttonn: string;
  classes: string;
  background: string;
  date: string;
  artist: string;
  location: string;
  hour: string;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = (props) => {
  return (
    <section className="w-full group hover:cursor-pointer">
      <div className="flex gap-x-6 lg:items-center ">
        <div className="hidden lg:flex flex-col items-center w-60 text-white-shade-9 duration-300 transition-all group-hover:text-black">
          <h1 className="font-normal text-lg">Date</h1>
          <h1 className="font-medium text-3xl ">
            {props.date}
          </h1>
        </div>
        <div
          className="w-[320px] h-[220px] rounded-2xl lg:rounded-2xl lg:h-40 lg:w-60 lg:ml-5 bg-cover"
          style={{ backgroundImage: `url(${props.background})` }}
        ></div>

        <div className="flex  gap-y-3 lg:flex-row lg:justify-between lg:items-center w-full">
          <div className="flex flex-col items-start gap-y-3">
            <span className="flex items-center justify-center text-black font-opensans font-medium py-2 w-28 border-[1px] border-white-shade-4 transition-all duration-300 group-hover:border-black rounded-full">
              Concerts
            </span>
            <h1 className="text-black font-outfit font-semibold text-xl">
              {props.artist}
            </h1>
            <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-4 lg:pt-3">
              <h1 className="text-white-shade-9 flex items-center font-opensans gap-x-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 10.5147C5 6.59544 8.12401 3.40002 12 3.40002C15.876 3.40002 19 6.59544 19 10.5147C19 12.4067 18.4608 14.4384 17.5076 16.1935C16.5555 17.9465 15.1645 19.4698 13.4244 20.2831C12.5205 20.7057 11.4795 20.7057 10.5756 20.2831C8.8355 19.4698 7.44449 17.9465 6.49244 16.1935C5.53922 14.4384 5 12.4067 5 10.5147ZM12 4.60002C8.80675 4.60002 6.2 7.23801 6.2 10.5147C6.2 12.1923 6.68211 14.0284 7.54696 15.6208C8.41299 17.2154 9.63682 18.5197 11.0837 19.196C11.6656 19.468 12.3344 19.468 12.9163 19.196C14.3632 18.5197 15.587 17.2154 16.453 15.6208C17.3179 14.0284 17.8 12.1923 17.8 10.5147C17.8 7.23801 15.1933 4.60002 12 4.60002ZM12 8.60002C11.0059 8.60002 10.2 9.40591 10.2 10.4C10.2 11.3941 11.0059 12.2 12 12.2C12.9941 12.2 13.8 11.3941 13.8 10.4C13.8 9.40591 12.9941 8.60002 12 8.60002ZM9 10.4C9 8.74317 10.3431 7.40002 12 7.40002C13.6569 7.40002 15 8.74317 15 10.4C15 12.0569 13.6569 13.4 12 13.4C10.3431 13.4 9 12.0569 9 10.4Z"
                    fill="#A6A6A6"
                  />
                </svg>
                {props.location}
              </h1>
              <h1 className="text-white-shade-9 flex items-center font-opensans gap-x-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9992 4.42786C7.81727 4.42786 4.42713 7.818 4.42713 12C4.42713 16.1819 7.81727 19.572 11.9992 19.572C16.1812 19.572 19.5713 16.1819 19.5713 12C19.5713 7.818 16.1812 4.42786 11.9992 4.42786ZM3.19922 12C3.19922 7.13985 7.13911 3.19995 11.9992 3.19995C16.8593 3.19995 20.7992 7.13985 20.7992 12C20.7992 16.8601 16.8593 20.8 11.9992 20.8C7.13911 20.8 3.19922 16.8601 3.19922 12ZM11.9992 8.11158C12.3383 8.11158 12.6132 8.38646 12.6132 8.72553V11.7456L14.4799 13.6123C14.7196 13.8521 14.7196 14.2408 14.4799 14.4806C14.2401 14.7204 13.8514 14.7204 13.6116 14.4806L11.5651 12.4341C11.4499 12.3189 11.3853 12.1628 11.3853 12V8.72553C11.3853 8.38646 11.6601 8.11158 11.9992 8.11158Z"
                    fill="#B3B3B3"
                  />
                </svg>
                {props.hour}
              </h1>
              <h1 className="text-white-shade-9 flex items-center font-opensans gap-x-2 lg:hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0004 13.6C16.4422 13.6 16.8004 13.2419 16.8004 12.8C16.8004 12.3582 16.4422 12 16.0004 12C15.5586 12 15.2004 12.3582 15.2004 12.8C15.2004 13.2419 15.5586 13.6 16.0004 13.6Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M16.0004 16.8C16.4422 16.8 16.8004 16.4419 16.8004 16C16.8004 15.5582 16.4422 15.2 16.0004 15.2C15.5586 15.2 15.2004 15.5582 15.2004 16C15.2004 16.4419 15.5586 16.8 16.0004 16.8Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M12.8004 12.8C12.8004 13.2419 12.4422 13.6 12.0004 13.6C11.5586 13.6 11.2004 13.2419 11.2004 12.8C11.2004 12.3582 11.5586 12 12.0004 12C12.4422 12 12.8004 12.3582 12.8004 12.8Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M12.8004 16C12.8004 16.4419 12.4422 16.8 12.0004 16.8C11.5586 16.8 11.2004 16.4419 11.2004 16C11.2004 15.5582 11.5586 15.2 12.0004 15.2C12.4422 15.2 12.8004 15.5582 12.8004 16Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M8.00039 13.6C8.44222 13.6 8.80039 13.2419 8.80039 12.8C8.80039 12.3582 8.44222 12 8.00039 12C7.55856 12 7.20039 12.3582 7.20039 12.8C7.20039 13.2419 7.55856 13.6 8.00039 13.6Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M8.00039 16.8C8.44222 16.8 8.80039 16.4419 8.80039 16C8.80039 15.5582 8.44222 15.2 8.00039 15.2C7.55856 15.2 7.20039 15.5582 7.20039 16C7.20039 16.4419 7.55856 16.8 8.00039 16.8Z"
                    fill="#A6A6A6"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00039 3.80005C8.33176 3.80005 8.60039 4.06868 8.60039 4.40005V5.01022C9.12999 5.00004 9.71345 5.00004 10.3552 5.00005H13.6455C14.2872 5.00004 14.8708 5.00004 15.4004 5.01022V4.40005C15.4004 4.06868 15.669 3.80005 16.0004 3.80005C16.3318 3.80005 16.6004 4.06868 16.6004 4.40005V5.06172C16.8083 5.07757 17.0053 5.0975 17.1916 5.12256C18.1295 5.24866 18.8887 5.51435 19.4874 6.11304C20.0861 6.71173 20.3518 7.47089 20.4779 8.40883C20.6004 9.32019 20.6004 10.4847 20.6004 11.9549V13.6452C20.6004 15.1154 20.6004 16.2799 20.4779 17.1913C20.3518 18.1292 20.0861 18.8884 19.4874 19.4871C18.8887 20.0857 18.1295 20.3514 17.1916 20.4775C16.2802 20.6001 15.1157 20.6001 13.6456 20.6H10.3553C8.88507 20.6001 7.72054 20.6001 6.80917 20.4775C5.87124 20.3514 5.11208 20.0857 4.51339 19.4871C3.91469 18.8884 3.649 18.1292 3.5229 17.1913C3.40037 16.2799 3.40038 15.1154 3.40039 13.6452V11.9549C3.40038 10.4847 3.40037 9.3202 3.5229 8.40883C3.649 7.47089 3.91469 6.71173 4.51339 6.11304C5.11208 5.51435 5.87124 5.24866 6.80917 5.12256C6.99551 5.0975 7.19244 5.07757 7.40039 5.06172V4.40005C7.40039 4.06868 7.66902 3.80005 8.00039 3.80005ZM6.96907 6.31186C6.1642 6.42007 5.70048 6.623 5.36191 6.96157C5.02335 7.30014 4.82041 7.76386 4.7122 8.56873C4.69387 8.70504 4.67855 8.84854 4.66574 9.00005H19.335C19.3222 8.84854 19.3069 8.70504 19.2886 8.56873C19.1804 7.76386 18.9774 7.30014 18.6389 6.96157C18.3003 6.623 17.8366 6.42007 17.0317 6.31186C16.2096 6.20132 15.1258 6.20005 13.6004 6.20005H10.4004C8.87493 6.20005 7.7912 6.20132 6.96907 6.31186ZM4.60039 12C4.60039 11.3168 4.60065 10.7222 4.61086 10.2H19.3899C19.4001 10.7222 19.4004 11.3168 19.4004 12V13.6C19.4004 15.1255 19.3991 16.2092 19.2886 17.0314C19.1804 17.8362 18.9774 18.3 18.6389 18.6385C18.3003 18.9771 17.8366 19.18 17.0317 19.2882C16.2096 19.3988 15.1258 19.4 13.6004 19.4H10.4004C8.87493 19.4 7.7912 19.3988 6.96907 19.2882C6.1642 19.18 5.70048 18.9771 5.36191 18.6385C5.02335 18.3 4.82041 17.8362 4.7122 17.0314C4.60167 16.2092 4.60039 15.1255 4.60039 13.6V12Z"
                    fill="#A6A6A6"
                  />
                </svg>
                {props.date}
              </h1>
            </div>
          </div>
          <Link
            href="/"
            className={`${props.classes} group-hover:bg-black group-hover:text-white duration-300 transition-all w-36 h-12 text-center text-lg text-[#F10000] font-semibold hidden lg:flex items-center justify-center`}
          >
            {props.buttonn}
          </Link>
        </div>
      </div>

      <h1
        className={`${props.classes} text-center text-lg text-[#F10000] font-semibold mt-10 lg:hidden`}
      >
        {props.buttonn}
      </h1>
      <hr className="w-full bg-white-shade-4 h-[1.5px] mt-7 " />
    </section>
  );
};

export default UpcomingEvent;
