import React from 'react'

interface WarningProps {
  width:string
}

const Warning:React.FC<WarningProps> = (props) => {
  return (
    <svg width={props.width} height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.5 34.9479C29.4579 34.9479 28.5938 34.0837 28.5938 33.0416V19.6979C28.5938 18.6558 29.4579 17.7916 30.5 17.7916C31.5421 17.7916 32.4062 18.6558 32.4062 19.6979V33.0416C32.4062 34.0837 31.5421 34.9479 30.5 34.9479Z" fill="#FF3838"/>
<path d="M30.5007 43.8437C29.8144 43.8437 29.1789 43.5896 28.696 43.1067C28.4673 42.8525 28.2894 42.5729 28.1369 42.2679C28.0098 41.9629 27.959 41.6325 27.959 41.3021C27.959 40.6412 28.2385 39.9803 28.696 39.4974C29.6364 38.557 31.3649 38.557 32.3053 39.4974C32.7628 39.9803 33.0423 40.6412 33.0423 41.3021C33.0423 41.6325 32.966 41.9629 32.8389 42.2679C32.7119 42.5729 32.534 42.8525 32.3053 43.1067C31.8224 43.5896 31.1869 43.8437 30.5007 43.8437Z" fill="#FF3838"/>
<path d="M30.5003 57.8228C28.7974 57.8228 27.069 57.3907 25.544 56.5011L10.4465 47.7832C7.39652 46.004 5.49023 42.7253 5.49023 39.1923V21.8074C5.49023 18.2745 7.39652 14.9957 10.4465 13.2166L25.544 4.49868C28.594 2.71951 32.3812 2.71951 35.4566 4.49868L50.5541 13.2166C53.6041 14.9957 55.5104 18.2745 55.5104 21.8074V39.1923C55.5104 42.7253 53.6041 46.004 50.5541 47.7832L35.4566 56.5011C33.9316 57.3907 32.2032 57.8228 30.5003 57.8228ZM30.5003 6.98946C29.4582 6.98946 28.3907 7.26907 27.4503 7.80282L12.3528 16.5207C10.4719 17.6136 9.30273 19.6216 9.30273 21.8074V39.1923C9.30273 41.3528 10.4719 43.3861 12.3528 44.479L27.4503 53.1969C29.3311 54.2899 31.6695 54.2899 33.5249 53.1969L48.6224 44.479C50.5032 43.3861 51.6724 41.3782 51.6724 39.1923V21.8074C51.6724 19.647 50.5032 17.6136 48.6224 16.5207L33.5249 7.80282C32.6099 7.26907 31.5424 6.98946 30.5003 6.98946Z" fill="#FF3838"/>
</svg>

  )
}

export default Warning