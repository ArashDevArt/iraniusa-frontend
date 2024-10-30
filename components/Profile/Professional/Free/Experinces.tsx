"use client"
import React, { useState } from 'react'
import Sectiontitle from '../../general/Sectiontitle'
import { ExperincesCard } from '../../general';

interface ExperincesProps {
  exprince: string,
}


const Experinces: React.FC<ExperincesProps> = (props) => {
  const [Experinces, setExperinces] = useState([
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
  ]);
  return (
    <div className=' w-full border-white-shade-4 border-b pb-8 lg:py-10'>
      <div className=' flex flex-col gap-y-6 mt-8 items-center'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95661 1.04102H10.0433C10.792 1.04099 11.4164 1.04097 11.912 1.10761C12.4352 1.17795 12.9075 1.33268 13.2871 1.71224C13.6667 2.0918 13.8214 2.56414 13.8917 3.08731C13.941 3.45365 13.9538 3.89029 13.9572 4.3955C14.4976 4.41284 14.9794 4.44444 15.4075 4.50201C16.3846 4.63336 17.1754 4.91013 17.799 5.53377C18.4226 6.15742 18.6994 6.94822 18.8308 7.92525C18.9584 8.87461 18.9584 10.0876 18.9584 11.6191V11.7132C18.9584 13.2446 18.9584 14.4577 18.8308 15.407C18.6994 16.3841 18.4226 17.1749 17.799 17.7985C17.1754 18.4222 16.3846 18.6989 15.4075 18.8303C14.4582 18.9579 13.2451 18.9579 11.7136 18.9579H8.28625C6.75476 18.9579 5.54172 18.9579 4.59236 18.8303C3.61533 18.6989 2.82453 18.4222 2.20089 17.7985C1.57724 17.1749 1.30048 16.3841 1.16912 15.407C1.04148 14.4577 1.04149 13.2446 1.0415 11.7132V11.6191C1.04149 10.0876 1.04148 8.8746 1.16912 7.92525C1.30048 6.94822 1.57724 6.15742 2.20089 5.53377C2.82453 4.91013 3.61533 4.63336 4.59236 4.50201C5.02051 4.44444 5.50229 4.41284 6.04273 4.3955C6.04607 3.89029 6.05891 3.45365 6.10816 3.08731C6.1785 2.56414 6.33322 2.0918 6.71279 1.71224C7.09235 1.33268 7.56469 1.17795 8.08786 1.10761C8.58352 1.04097 9.20787 1.04099 9.95661 1.04102ZM7.29308 4.37587C7.60819 4.37439 7.93903 4.37439 8.28624 4.37439H11.7137C12.0609 4.37439 12.3917 4.37439 12.7068 4.37587C12.7033 3.9006 12.6916 3.54209 12.6529 3.25387C12.6012 2.86932 12.5118 2.70473 12.4032 2.59613C12.2946 2.48754 12.13 2.39818 11.7455 2.34648C11.3429 2.29236 10.8033 2.29103 9.99995 2.29103C9.19659 2.29103 8.65695 2.29236 8.25442 2.34648C7.86986 2.39818 7.70528 2.48754 7.59668 2.59613C7.48808 2.70473 7.39873 2.86932 7.34703 3.25387C7.30828 3.54209 7.29659 3.9006 7.29308 4.37587ZM4.75892 5.74087C3.92051 5.8536 3.43746 6.06499 3.08478 6.41767C2.7321 6.77035 2.52071 7.25339 2.40799 8.09181C2.29285 8.94821 2.29152 10.0771 2.29152 11.6661C2.29152 13.2552 2.29285 14.3841 2.40799 15.2405C2.52071 16.0789 2.7321 16.5619 3.08478 16.9146C3.43746 17.2673 3.92051 17.4787 4.75892 17.5914C5.61532 17.7066 6.74422 17.7079 8.33326 17.7079H11.6666C13.2557 17.7079 14.3846 17.7066 15.241 17.5914C16.0794 17.4787 16.5624 17.2673 16.9151 16.9146C17.2678 16.5619 17.4792 16.0789 17.5919 15.2405C17.707 14.3841 17.7084 13.2552 17.7084 11.6661C17.7084 10.0771 17.707 8.94821 17.5919 8.09181C17.4792 7.25339 17.2678 6.77035 16.9151 6.41767C16.5624 6.06499 16.0794 5.8536 15.241 5.74087C14.3846 5.62573 13.2557 5.62441 11.6666 5.62441H8.33326C6.74422 5.62441 5.61532 5.62573 4.75892 5.74087Z" fill="black" />
          <path d="M14.1667 7.49943C14.1667 7.95967 13.7936 8.33277 13.3333 8.33277C12.8731 8.33277 12.5 7.95967 12.5 7.49943C12.5 7.03919 12.8731 6.66609 13.3333 6.66609C13.7936 6.66609 14.1667 7.03919 14.1667 7.49943Z" fill="black" />
          <path d="M7.49992 7.49943C7.49992 7.95967 7.12682 8.33277 6.66657 8.33277C6.20633 8.33277 5.83323 7.95967 5.83323 7.49943C5.83323 7.03919 6.20633 6.66609 6.66657 6.66609C7.12682 6.66609 7.49992 7.03919 7.49992 7.49943Z" fill="black" />
        </svg>

        <Sectiontitle title={'Experiences and projects'} classes={'mt-5'} />
        <p className="text-center text-white-shade-9  font-opensans">{props.exprince}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-3 gap-5 w-full">
        {Experinces.map((item, id) => {
            return (
              <ExperincesCard 
                key={id}
                title={item.title}
                date={item.date}
                data={item.data}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Experinces