import React from 'react'

type typ = {
  classes?:string,
}
const TicketIcon = (props : typ) => {
  return (
<svg className={props.classes} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6665 9.16732C11.6665 8.70708 12.0396 8.33398 12.4998 8.33398C12.9601 8.33398 13.3332 8.70708 13.3332 9.16732V10.834C13.3332 11.2942 12.9601 11.6673 12.4998 11.6673C12.0396 11.6673 11.6665 11.2942 11.6665 10.834V9.16732Z" stroke="black" stroke-width="1.25"/>
<path d="M11.6731 15.8364L11.0481 15.8346L11.0481 15.8346L11.6731 15.8364ZM11.6779 14.1673L12.3029 14.1691V14.1673H11.6779ZM2.62449 15.691L2.18309 16.1335L2.18309 16.1335L2.62449 15.691ZM2.62449 4.3103L2.18309 3.8678L2.18309 3.8678L2.62449 4.3103ZM2.46074 8.54537L2.15601 9.09104L2.15601 9.09104L2.46074 8.54537ZM1.67532 7.49188L1.05087 7.46562L1.05087 7.46562L1.67532 7.49188ZM2.46074 11.4559L2.15601 10.9103L2.15601 10.9103L2.46074 11.4559ZM1.67532 12.5094L2.29977 12.4832L1.67532 12.5094ZM17.5389 8.54537L17.8437 9.09104L17.8437 9.09104L17.5389 8.54537ZM18.3244 7.49188L18.9488 7.46562L18.9488 7.46562L18.3244 7.49188ZM17.3752 4.3103L17.8166 3.8678L17.8166 3.8678L17.3752 4.3103ZM17.5389 11.4559L17.2342 12.0016L17.2342 12.0016L17.5389 11.4559ZM18.3244 12.5094L18.9488 12.5357L18.9488 12.5357L18.3244 12.5094ZM17.3752 15.691L17.8166 16.1335L17.8166 16.1335L17.3752 15.691ZM18.2862 11.944L18.8316 11.6387L18.8316 11.6387L18.2862 11.944ZM18.2862 8.05734L18.8316 8.36263L18.8316 8.36262L18.2862 8.05734ZM1.71346 11.944L1.16809 11.6387L1.16809 11.6387L1.71346 11.944ZM1.71346 8.05734L2.25882 7.75205L2.25882 7.75205L1.71346 8.05734ZM11.6779 5.83398L12.3029 5.83398L12.3029 5.83217L11.6779 5.83398ZM11.6719 3.74944L11.0469 3.75126L11.0469 3.75126L11.6719 3.74944ZM13.773 3.34974L13.7891 2.72494L13.7891 2.72494L13.773 3.34974ZM14.1945 16.6374L14.2209 17.2619L14.2209 17.2619L14.1945 16.6374ZM11.5494 16.5457L11.1081 16.1031L11.1081 16.1031L11.5494 16.5457ZM12.2981 15.8382L12.3029 14.1691L11.0529 14.1655L11.0481 15.8346L12.2981 15.8382ZM12.5133 13.959C12.631 13.959 12.7237 14.0537 12.7237 14.1673H13.9737C13.9737 13.3604 13.3184 12.709 12.5133 12.709V13.959ZM12.5133 12.709C11.7082 12.709 11.0529 13.3604 11.0529 14.1673H12.3029C12.3029 14.0537 12.3957 13.959 12.5133 13.959V12.709ZM8.32902 3.95898H11.2542V2.70898H8.32902V3.95898ZM10.8397 16.0423H8.32902V17.2923H10.8397V16.0423ZM8.32902 16.0423C6.73613 16.0423 5.60418 16.041 4.74541 15.9258C3.90446 15.813 3.41971 15.6015 3.06588 15.2485L2.18309 16.1335C2.80801 16.7569 3.60026 17.0334 4.57926 17.1647C5.54043 17.2936 6.77138 17.2923 8.32902 17.2923V16.0423ZM8.32902 2.70898C6.77138 2.70898 5.54043 2.70766 4.57926 2.83657C3.60026 2.96786 2.80801 3.24444 2.18309 3.8678L3.06588 4.75279C3.41971 4.39984 3.90446 4.18826 4.74541 4.07548C5.60418 3.96031 6.73613 3.95898 8.32902 3.95898V2.70898ZM2.15601 9.09104C2.47743 9.27054 2.69156 9.61146 2.69156 10.0007H3.94156C3.94156 9.1393 3.46534 8.39052 2.76547 7.99969L2.15601 9.09104ZM2.29977 7.51813C2.36479 5.97143 2.57606 5.24139 3.06588 4.75279L2.18309 3.8678C1.32514 4.72363 1.1166 5.90219 1.05087 7.46562L2.29977 7.51813ZM2.69156 10.0007C2.69156 10.3898 2.47743 10.7308 2.15601 10.9103L2.76547 12.0016C3.46534 11.6108 3.94156 10.862 3.94156 10.0007H2.69156ZM1.05087 12.5357C1.1166 14.0991 1.32514 15.2777 2.18309 16.1335L3.06588 15.2485C2.57606 14.7599 2.36479 14.0299 2.29977 12.4832L1.05087 12.5357ZM17.3081 10.0007C17.3081 9.61146 17.5222 9.27054 17.8437 9.09104L17.2342 7.99969C16.5343 8.39052 16.0581 9.1393 16.0581 10.0007H17.3081ZM18.9488 7.46562C18.8831 5.90219 18.6745 4.72363 17.8166 3.8678L16.9338 4.75279C17.4236 5.24139 17.6349 5.97143 17.6999 7.51813L18.9488 7.46562ZM17.8437 10.9103C17.5222 10.7308 17.3081 10.3898 17.3081 10.0007H16.0581C16.0581 10.862 16.5343 11.6108 17.2342 12.0016L17.8437 10.9103ZM17.6999 12.4832C17.6349 14.0299 17.4236 14.7599 16.9338 15.2485L17.8166 16.1335C18.6745 15.2777 18.8831 14.0991 18.9488 12.5357L17.6999 12.4832ZM17.2342 12.0016C17.4708 12.1338 17.6254 12.2203 17.7299 12.2863C17.7814 12.3187 17.8042 12.336 17.8111 12.3417C17.8232 12.3517 17.7811 12.3211 17.7408 12.2493L18.8316 11.6387C18.7626 11.5154 18.6701 11.4301 18.6085 11.3791C18.5417 11.3238 18.4676 11.2737 18.3969 11.229C18.2571 11.1409 18.0668 11.0349 17.8437 10.9103L17.2342 12.0016ZM18.9488 12.5357C18.9548 12.3928 18.9616 12.2454 18.9561 12.1222C18.9506 11.9972 18.9313 11.8169 18.8316 11.6387L17.7408 12.2492C17.6987 12.1739 17.7049 12.1221 17.7073 12.1771C17.7084 12.201 17.7085 12.2358 17.7072 12.2893C17.7058 12.3426 17.7032 12.4046 17.6999 12.4832L18.9488 12.5357ZM17.8437 9.09104C18.0668 8.96641 18.2571 8.86043 18.3969 8.77226C18.4676 8.72765 18.5417 8.67751 18.6085 8.62219C18.6701 8.57116 18.7626 8.48594 18.8316 8.36263L17.7408 7.75205C17.7811 7.68018 17.8232 7.64958 17.8111 7.65958C17.8042 7.66529 17.7814 7.68258 17.7299 7.71503C17.6254 7.78096 17.4708 7.86755 17.2342 7.99969L17.8437 9.09104ZM17.6999 7.51813C17.7032 7.59672 17.7058 7.65866 17.7072 7.71196C17.7085 7.76547 17.7084 7.80035 17.7073 7.82421C17.7049 7.87921 17.6987 7.82737 17.7408 7.75206L18.8316 8.36262C18.9313 8.18444 18.9506 8.00405 18.9561 7.87914C18.9616 7.75594 18.9548 7.60853 18.9488 7.46562L17.6999 7.51813ZM2.15601 10.9103C1.93283 11.0349 1.74259 11.1409 1.60282 11.229C1.5321 11.2737 1.45793 11.3238 1.39114 11.3791C1.32955 11.4301 1.23712 11.5154 1.16809 11.6387L2.25882 12.2493C2.21859 12.3211 2.17649 12.3517 2.18857 12.3417C2.19546 12.336 2.21829 12.3187 2.26973 12.2863C2.37425 12.2203 2.52886 12.1337 2.76547 12.0016L2.15601 10.9103ZM2.29977 12.4832C2.29646 12.4046 2.29388 12.3426 2.2925 12.2893C2.29112 12.2358 2.29128 12.201 2.29233 12.1771C2.29475 12.1221 2.30098 12.1739 2.25882 12.2493L1.16809 11.6387C1.06834 11.8169 1.04903 11.9972 1.04353 12.1222C1.03811 12.2454 1.04486 12.3928 1.05087 12.5357L2.29977 12.4832ZM2.76547 7.99969C2.52885 7.86755 2.37425 7.78096 2.26972 7.71503C2.21829 7.68258 2.19546 7.66529 2.18857 7.65958C2.17649 7.64958 2.21859 7.68018 2.25882 7.75205L1.16809 8.36262C1.23712 8.48593 1.32955 8.57116 1.39114 8.62219C1.45793 8.67751 1.5321 8.72765 1.60282 8.77226C1.74259 8.86043 1.93283 8.96641 2.15601 9.09104L2.76547 7.99969ZM1.05087 7.46562C1.04486 7.60852 1.03811 7.75594 1.04353 7.87914C1.04903 8.00405 1.06834 8.18444 1.16809 8.36262L2.25882 7.75205C2.30098 7.82736 2.29475 7.87921 2.29233 7.82421C2.29128 7.80035 2.29112 7.76547 2.2925 7.71196C2.29388 7.65866 2.29646 7.59672 2.29977 7.51813L1.05087 7.46562ZM12.3029 5.83217L12.2969 3.74763L11.0469 3.75126L11.0529 5.8358L12.3029 5.83217ZM12.5133 6.04232C12.3957 6.04232 12.3029 5.94758 12.3029 5.83398H11.0529C11.0529 6.64086 11.7082 7.29232 12.5133 7.29232V6.04232ZM12.7237 5.83398C12.7237 5.94758 12.631 6.04232 12.5133 6.04232V7.29232C13.3184 7.29232 13.9737 6.64086 13.9737 5.83398H12.7237ZM12.7237 3.76414V5.83398H13.9737V3.76414H12.7237ZM13.7569 3.97453C15.5803 4.02156 16.398 4.21835 16.9338 4.75279L17.8166 3.8678C16.8895 2.94302 15.5781 2.77109 13.7891 2.72494L13.7569 3.97453ZM13.9737 3.76414C13.9737 3.88065 13.8777 3.97764 13.7569 3.97453L13.7891 2.72494C13.2023 2.70981 12.7237 3.18261 12.7237 3.76414H13.9737ZM11.2542 3.95898C11.1414 3.95898 11.0472 3.86754 11.0469 3.75126L12.2969 3.74763C12.2952 3.17206 11.8274 2.70898 11.2542 2.70898V3.95898ZM14.2209 17.2619C15.7831 17.1959 16.9606 16.9873 17.8166 16.1335L16.9338 15.2485C16.4445 15.7366 15.7134 15.9477 14.1681 16.013L14.2209 17.2619ZM12.7237 14.1673V15.8144H13.9737V14.1673H12.7237ZM11.0481 15.8346C11.0478 15.9349 11.0475 16.012 11.0457 16.0779C11.0438 16.144 11.0406 16.1834 11.0373 16.2074C11.0341 16.231 11.0328 16.223 11.0426 16.1995C11.0544 16.1711 11.0758 16.1354 11.1081 16.1031L11.9907 16.9883C12.187 16.7925 12.2507 16.5597 12.2757 16.3774C12.2983 16.213 12.2975 16.0165 12.2981 15.8382L11.0481 15.8346ZM10.8397 17.2923C11.018 17.2923 11.2145 17.2936 11.3789 17.2716C11.5614 17.2471 11.7944 17.1841 11.9907 16.9883L11.1081 16.1031C11.1404 16.0709 11.1762 16.0496 11.2047 16.0379C11.2282 16.0282 11.2362 16.0295 11.2126 16.0327C11.1885 16.0359 11.1492 16.0389 11.083 16.0406C11.0171 16.0423 10.94 16.0423 10.8397 16.0423V17.2923ZM14.1681 16.013C14.0675 16.0173 13.9906 16.0205 13.9249 16.0215C13.859 16.0225 13.8206 16.021 13.7978 16.0187C13.7756 16.0166 13.7854 16.0152 13.811 16.025C13.8418 16.0367 13.8778 16.0577 13.9096 16.0881L13.0445 16.9905C13.248 17.1856 13.4856 17.2441 13.6755 17.2627C13.8438 17.2793 14.043 17.2694 14.2209 17.2619L14.1681 16.013ZM12.7237 15.8144C12.7237 15.9968 12.7223 16.1984 12.7457 16.367C12.7718 16.5552 12.839 16.7935 13.0445 16.9905L13.9096 16.0881C13.9426 16.1198 13.9652 16.1559 13.9779 16.1857C13.9884 16.2103 13.9871 16.2191 13.9839 16.1954C13.9805 16.1711 13.9773 16.1311 13.9755 16.0634C13.9738 15.996 13.9737 15.9171 13.9737 15.8144H12.7237Z" fill="black"/>
</svg>
  )
}

export default TicketIcon