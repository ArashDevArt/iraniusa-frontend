import React from "react";

interface PopularConcertProps {
  background:string,
  content: string;
  price: string;
  concert: string;
  date: string;
  city: string;
  classes: string;
}

const PopularConcert: React.FC<PopularConcertProps> = (props) => {
  return (
    <>
      <div
        className={`${props.classes} group hover:cursor-pointer border-[1px] pl-5 border-white-shade-4 rounded-3xl flex justify-between gap-x-4 lg:gap-x-8 lg:w-1/3   w-full`}
      >
        <div className="flex flex-col items-start gap-y-2 py-5">
          <h1 className="text-black font-semibold font-opensans text-lg ">
            {props.content}
          </h1>
          <h1 className="text-white-shade-9 flex items-center gap-x-3 pl-1 font-opensans mt-3">
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.51454C0 3.59532 3.12401 0.399902 7 0.399902C10.876 0.399902 14 3.59532 14 7.51454C14 9.40662 13.4608 11.4382 12.5076 13.1934C11.5555 14.9464 10.1645 16.4697 8.42441 17.283C7.52045 17.7055 6.47955 17.7055 5.57559 17.283C3.8355 16.4697 2.44449 14.9464 1.49244 13.1934C0.539223 11.4382 0 9.40662 0 7.51454ZM7 1.5999C3.80675 1.5999 1.2 4.23789 1.2 7.51454C1.2 9.1922 1.68211 11.0282 2.54696 12.6207C3.41299 14.2153 4.63682 15.5196 6.08372 16.1959C6.66564 16.4679 7.33436 16.4679 7.91628 16.1959C9.36318 15.5196 10.587 14.2153 11.453 12.6207C12.3179 11.0282 12.8 9.1922 12.8 7.51454C12.8 4.23789 10.1933 1.5999 7 1.5999ZM7 5.5999C6.00589 5.5999 5.2 6.40579 5.2 7.3999C5.2 8.39401 6.00589 9.1999 7 9.1999C7.99411 9.1999 8.8 8.39401 8.8 7.3999C8.8 6.40579 7.99411 5.5999 7 5.5999ZM4 7.3999C4 5.74305 5.34315 4.3999 7 4.3999C8.65685 4.3999 10 5.74305 10 7.3999C10 9.05676 8.65685 10.3999 7 10.3999C5.34315 10.3999 4 9.05676 4 7.3999Z"
                fill="#A6A6A6"
              />
            </svg>

            {props.city}
          </h1>
          <h1 className="text-white-shade-9 flex items-center gap-x-3 pl-1 font-opensans">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3588 0.399903H13.042C13.7608 0.39988 14.3602 0.39986 14.836 0.463833C15.3382 0.531357 15.7917 0.679893 16.156 1.04427C16.5204 1.40865 16.6689 1.86209 16.7365 2.36432C16.8004 2.84015 16.8004 3.43952 16.8004 4.15831V16.3999H17.0004C17.3318 16.3999 17.6004 16.6685 17.6004 16.9999C17.6004 17.3313 17.3318 17.5999 17.0004 17.5999H1.00039C0.66902 17.5999 0.400391 17.3313 0.400391 16.9999C0.400391 16.6685 0.66902 16.3999 1.00039 16.3999H1.20039L1.20039 6.5583C1.20037 5.83952 1.20035 5.24015 1.26432 4.76432C1.33184 4.26209 1.48038 3.80864 1.84476 3.44427C2.20913 3.07989 2.66257 2.93136 3.16481 2.86383C3.64063 2.79986 4.24001 2.79988 4.95879 2.7999L7.62278 2.7999C7.66394 2.10056 7.79287 1.49616 8.24476 1.04427C8.60913 0.679893 9.06257 0.531357 9.56481 0.463833C10.0406 0.39986 10.64 0.39988 11.3588 0.399903ZM8.20586 3.9999C8.20483 3.9999 8.2038 3.9999 8.20277 3.9999C8.20198 3.9999 8.20118 3.9999 8.20039 3.9999H5.00039C4.22918 3.9999 3.71113 4.00118 3.3247 4.05313C2.95554 4.10277 2.79754 4.18854 2.69328 4.2928C2.58903 4.39705 2.50325 4.55505 2.45362 4.92422C2.40166 5.31065 2.40039 5.82869 2.40039 6.5999V16.3999H6.00039V14.5999C6.00039 14.2685 6.26902 13.9999 6.60039 13.9999C6.93176 13.9999 7.20039 14.2685 7.20039 14.5999V16.3999H10.8004V6.5999C10.8004 5.82869 10.7991 5.31065 10.7472 4.92422C10.6975 4.55505 10.6118 4.39705 10.5075 4.2928C10.4032 4.18854 10.2452 4.10277 9.87608 4.05313C9.49056 4.0013 8.97405 3.99991 8.20586 3.9999ZM12.0004 16.3999L12.0004 6.55831C12.0004 5.83952 12.0004 5.24015 11.9365 4.76432C11.8689 4.26209 11.7204 3.80864 11.356 3.44427C10.9916 3.07989 10.5382 2.93136 10.036 2.86383C9.69569 2.81808 9.29222 2.80506 8.82707 2.80136C8.86721 2.24165 8.95527 2.03081 9.09328 1.8928C9.19754 1.78854 9.35553 1.70277 9.7247 1.65313C10.1111 1.60118 10.6292 1.5999 11.4004 1.5999H13.0004C13.7716 1.5999 14.2896 1.60118 14.6761 1.65313C15.0452 1.70277 15.2032 1.78854 15.3075 1.8928C15.4118 1.99705 15.4975 2.15505 15.5472 2.52422C15.5991 2.91065 15.6004 3.42869 15.6004 4.1999V16.3999H12.0004ZM3.60039 5.7999C3.60039 5.46853 3.86902 5.1999 4.20039 5.1999H9.00039C9.33176 5.1999 9.60039 5.46853 9.60039 5.7999C9.60039 6.13127 9.33176 6.3999 9.00039 6.3999H4.20039C3.86902 6.3999 3.60039 6.13127 3.60039 5.7999ZM3.60039 8.1999C3.60039 7.86853 3.86902 7.5999 4.20039 7.5999H9.00039C9.33176 7.5999 9.60039 7.86853 9.60039 8.1999C9.60039 8.53127 9.33176 8.7999 9.00039 8.7999H4.20039C3.86902 8.7999 3.60039 8.53127 3.60039 8.1999ZM3.60039 10.5999C3.60039 10.2685 3.86902 9.9999 4.20039 9.9999H9.00039C9.33176 9.9999 9.60039 10.2685 9.60039 10.5999C9.60039 10.9313 9.33176 11.1999 9.00039 11.1999H4.20039C3.86902 11.1999 3.60039 10.9313 3.60039 10.5999Z"
                fill="#B3B3B3"
              />
            </svg>

            {props.concert}
          </h1>
          <h1 className="text-white-shade-9 flex items-center gap-x-3 font-opensans">
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
                d="M8.00039 3.80005C8.33176 3.80005 8.60039 4.06868 8.60039 4.40005V5.01022C9.12999 5.00004 9.71345 5.00004 10.3552 5.00005H13.6455C14.2872 5.00004 14.8708 5.00004 15.4004 5.01022V4.40005C15.4004 4.06868 15.669 3.80005 16.0004 3.80005C16.3318 3.80005 16.6004 4.06868 16.6004 4.40005V5.06172C16.8083 5.07757 17.0053 5.0975 17.1916 5.12256C18.1295 5.24866 18.8887 5.51435 19.4874 6.11304C20.0861 6.71173 20.3518 7.47089 20.4779 8.40883C20.6004 9.3202 20.6004 10.4847 20.6004 11.9549V13.6452C20.6004 15.1154 20.6004 16.2799 20.4779 17.1913C20.3518 18.1292 20.0861 18.8884 19.4874 19.4871C18.8887 20.0857 18.1295 20.3514 17.1916 20.4775C16.2802 20.6001 15.1157 20.6001 13.6456 20.6H10.3553C8.88507 20.6001 7.72054 20.6001 6.80917 20.4775C5.87124 20.3514 5.11208 20.0857 4.51339 19.4871C3.91469 18.8884 3.649 18.1292 3.5229 17.1913C3.40037 16.2799 3.40038 15.1154 3.40039 13.6452V11.9549C3.40038 10.4847 3.40037 9.3202 3.5229 8.40883C3.649 7.47089 3.91469 6.71173 4.51339 6.11304C5.11208 5.51435 5.87124 5.24866 6.80917 5.12256C6.99551 5.0975 7.19244 5.07757 7.40039 5.06172V4.40005C7.40039 4.06868 7.66902 3.80005 8.00039 3.80005ZM6.96907 6.31186C6.1642 6.42007 5.70048 6.623 5.36191 6.96157C5.02335 7.30014 4.82041 7.76386 4.7122 8.56873C4.69387 8.70504 4.67855 8.84854 4.66574 9.00005H19.335C19.3222 8.84854 19.3069 8.70504 19.2886 8.56873C19.1804 7.76386 18.9774 7.30014 18.6389 6.96157C18.3003 6.623 17.8366 6.42007 17.0317 6.31186C16.2096 6.20132 15.1258 6.20005 13.6004 6.20005H10.4004C8.87493 6.20005 7.7912 6.20132 6.96907 6.31186ZM4.60039 12C4.60039 11.3168 4.60065 10.7222 4.61086 10.2H19.3899C19.4001 10.7222 19.4004 11.3168 19.4004 12V13.6C19.4004 15.1255 19.3991 16.2092 19.2886 17.0314C19.1804 17.8362 18.9774 18.3 18.6389 18.6385C18.3003 18.9771 17.8366 19.18 17.0317 19.2882C16.2096 19.3988 15.1258 19.4001 13.6004 19.4001H10.4004C8.87493 19.4001 7.7912 19.3988 6.96907 19.2882C6.1642 19.18 5.70048 18.9771 5.36191 18.6385C5.02335 18.3 4.82041 17.8362 4.7122 17.0314C4.60167 16.2092 4.60039 15.1255 4.60039 13.6V12Z"
                fill="#A6A6A6"
              />
            </svg>

            {props.date}
          </h1>
          <h1 className="text-white-shade-9 flex items-center gap-x-3 font-opensans">
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
                d="M12.0004 4.5999C7.91348 4.5999 4.60039 7.913 4.60039 11.9999C4.60039 16.0868 7.91348 19.3999 12.0004 19.3999C16.0873 19.3999 19.4004 16.0868 19.4004 11.9999C19.4004 7.913 16.0873 4.5999 12.0004 4.5999ZM3.40039 11.9999C3.40039 7.25025 7.25074 3.3999 12.0004 3.3999C16.75 3.3999 20.6004 7.25025 20.6004 11.9999C20.6004 16.7496 16.75 20.5999 12.0004 20.5999C7.25074 20.5999 3.40039 16.7496 3.40039 11.9999ZM12.0004 6.5999C12.3318 6.5999 12.6004 6.86853 12.6004 7.1999V7.45329C13.9047 7.68684 15.0004 8.66679 15.0004 9.9999C15.0004 10.3313 14.7318 10.5999 14.4004 10.5999C14.069 10.5999 13.8004 10.3313 13.8004 9.9999C13.8004 9.45714 13.3491 8.88262 12.6004 8.67789V11.4533C13.9047 11.6868 15.0004 12.6668 15.0004 13.9999C15.0004 15.333 13.9047 16.313 12.6004 16.5465V16.7999C12.6004 17.1313 12.3318 17.3999 12.0004 17.3999C11.669 17.3999 11.4004 17.1313 11.4004 16.7999V16.5465C10.096 16.313 9.00039 15.333 9.00039 13.9999C9.00039 13.6685 9.26902 13.3999 9.60039 13.3999C9.93176 13.3999 10.2004 13.6685 10.2004 13.9999C10.2004 14.5427 10.6517 15.1172 11.4004 15.3219V12.5465C10.096 12.313 9.00039 11.333 9.00039 9.9999C9.00039 8.66679 10.096 7.68684 11.4004 7.45329V7.1999C11.4004 6.86853 11.669 6.5999 12.0004 6.5999ZM11.4004 8.67789C10.6517 8.88262 10.2004 9.45714 10.2004 9.9999C10.2004 10.5427 10.6517 11.1172 11.4004 11.3219V8.67789ZM12.6004 12.6779V15.3219C13.3491 15.1172 13.8004 14.5427 13.8004 13.9999C13.8004 13.4571 13.3491 12.8826 12.6004 12.6779Z"
                fill="#B3B3B3"
              />
            </svg>
            <span className="text-black text-base font-semibold">
              {props.price}
            </span>
            starting
          </h1>

          <button
            type="button"
            className="bg-[#0112231A] group-hover:bg-black group-hover:text-white transition-all duration-300 text-black rounded-2xl  py-3 font-semibold w-56 mt-4 "
          >
            Book now
          </button>
        </div>
       <div  style={{ backgroundImage:  `url(${props.background})` }} className="w-32 h-[280px] bg-cover bg-center rounded-tr-3xl rounded-br-3xl">
        
       </div>
      </div>
    </>
  );
};

export default PopularConcert;
