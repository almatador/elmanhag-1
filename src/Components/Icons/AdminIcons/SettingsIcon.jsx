import React from 'react'

const SettingsIcon = ({ Width = "24", Height = "24", isActive = false }) => {
return (<svg width={Width} height={Height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_732_41)">
                     <path d="M13.7765 21.0938H10.9466C10.773 21.0938 10.6054 21.0295 10.4763 20.9134C10.3471 20.7972 10.2656 20.6374 10.2473 20.4647L10.0377 18.4917C9.74523 18.3922 9.45948 18.2738 9.18227 18.1373L7.64055 19.3842C7.50561 19.4929 7.3353 19.5479 7.16229 19.5388C6.98928 19.5296 6.82574 19.4569 6.70305 19.3345L4.70195 17.3334C4.57962 17.2107 4.5069 17.0472 4.49773 16.8742C4.48856 16.7012 4.54359 16.5309 4.65227 16.3959L5.89961 14.8523C5.76292 14.5752 5.64439 14.2894 5.54477 13.9969L3.56852 13.7859C3.39588 13.7677 3.23611 13.6861 3.11997 13.5571C3.00383 13.4281 2.93953 13.2606 2.93945 13.087V10.2567C2.93953 10.0831 3.00383 9.91568 3.11997 9.78664C3.23611 9.65761 3.39588 9.5761 3.56852 9.55781L5.54148 9.34828C5.64111 9.05574 5.75964 8.76998 5.89633 8.49281L4.64898 6.94922C4.54031 6.81429 4.48527 6.64398 4.49444 6.47096C4.50361 6.29795 4.57634 6.13441 4.69867 6.01172L6.69977 4.01063C6.82246 3.88829 6.98599 3.81557 7.15901 3.8064C7.33202 3.79723 7.50233 3.85226 7.63727 3.96094L9.18086 5.20781C9.45807 5.07136 9.74382 4.95299 10.0363 4.85344L10.2459 2.88047C10.2639 2.70726 10.3455 2.54688 10.475 2.43041C10.6044 2.31394 10.7725 2.24965 10.9466 2.25H13.7765C13.9502 2.24996 14.1177 2.31421 14.2469 2.43036C14.376 2.54651 14.4576 2.70634 14.4759 2.87906L14.6849 4.85203C14.9776 4.95158 15.2635 5.06995 15.5409 5.20641L17.084 3.95953C17.2189 3.85085 17.3892 3.79582 17.5622 3.80499C17.7353 3.81416 17.8988 3.88689 18.0215 4.00922L20.0226 6.01031C20.1449 6.133 20.2176 6.29654 20.2268 6.46956C20.236 6.64257 20.1809 6.81288 20.0723 6.94781L18.8249 8.49141C18.9614 8.76866 19.0799 9.05441 19.1798 9.34688L21.1527 9.55641C21.3253 9.5748 21.4849 9.65636 21.601 9.78538C21.717 9.9144 21.7813 10.0818 21.7813 10.2553V13.0856C21.7817 13.2591 21.7178 13.4266 21.6022 13.5559C21.4865 13.6851 21.3271 13.7671 21.1546 13.7859L19.1816 13.9955C19.0818 14.2879 18.9633 14.5737 18.8268 14.8509L20.0741 16.3945C20.1828 16.5295 20.2379 16.6998 20.2287 16.8728C20.2195 17.0458 20.1468 17.2093 20.0245 17.332L18.0234 19.3345C17.9007 19.4569 17.7371 19.5296 17.5641 19.5388C17.3911 19.5479 17.2208 19.4929 17.0859 19.3842L15.5427 18.1373C15.2654 18.2738 14.9795 18.3922 14.6868 18.4917L14.4777 20.4647C14.4594 20.6377 14.3776 20.7978 14.248 20.914C14.1185 21.0302 13.9505 21.0943 13.7765 21.0938ZM11.578 19.6875H13.1432L13.3349 17.88C13.35 17.7385 13.4076 17.6049 13.5001 17.4969C13.5927 17.3888 13.7159 17.3114 13.8534 17.2748C14.3486 17.1428 14.8241 16.9453 15.2671 16.6875C15.3905 16.6156 15.5328 16.583 15.6751 16.594C15.8175 16.6049 15.9531 16.659 16.064 16.7489L17.4777 17.8913L18.5845 16.7845L17.4402 15.375C17.3503 15.2641 17.2963 15.1285 17.2853 14.9861C17.2743 14.8438 17.307 14.7015 17.3788 14.5781C17.636 14.1354 17.8329 13.6602 17.9643 13.1653C18.0009 13.0278 18.0784 12.9045 18.1865 12.812C18.2947 12.7194 18.4284 12.6618 18.5699 12.6469L20.377 12.4547V10.8895L18.5699 10.6973C18.4284 10.6824 18.2947 10.6248 18.1865 10.5323C18.0784 10.4397 18.0009 10.3165 17.9643 10.1789C17.833 9.68383 17.6361 9.20853 17.3788 8.76563C17.307 8.64227 17.2743 8.49996 17.2853 8.35762C17.2963 8.21527 17.3503 8.07964 17.4402 7.96875L18.5826 6.555L17.4759 5.44828L16.0621 6.59063C15.9512 6.68055 15.8156 6.73459 15.6732 6.74556C15.5309 6.75653 15.3886 6.72391 15.2652 6.65203C14.8224 6.39501 14.3473 6.19812 13.8524 6.06656C13.7149 6.02999 13.5918 5.95257 13.4992 5.84452C13.4066 5.73647 13.349 5.60289 13.334 5.46141L13.1441 3.65625H11.578L11.3863 5.46375C11.3713 5.60529 11.3136 5.73892 11.2209 5.84697C11.1283 5.95503 11.005 6.03242 10.8674 6.06891C10.3729 6.20106 9.89828 6.39858 9.45602 6.65625C9.33266 6.72813 9.19035 6.76075 9.048 6.74978C8.90566 6.73881 8.77003 6.68477 8.65914 6.59485L7.2468 5.45063L6.14055 6.55735L7.28336 7.9711C7.37321 8.08203 7.42717 8.21769 7.43805 8.36003C7.44894 8.50238 7.41624 8.64466 7.3443 8.76797C7.08748 9.21092 6.8906 9.68601 6.75883 10.1808C6.72225 10.3183 6.64483 10.4414 6.53678 10.534C6.42874 10.6266 6.29515 10.6842 6.15367 10.6992L4.34617 10.8914V12.4561L6.15367 12.6483C6.29515 12.6633 6.42874 12.7209 6.53678 12.8135C6.64483 12.9061 6.72225 13.0292 6.75883 13.1667C6.89057 13.661 7.08728 14.1356 7.34383 14.5781C7.41577 14.7014 7.44847 14.8437 7.43759 14.9861C7.4267 15.1284 7.37274 15.2641 7.28289 15.375L6.14055 16.7864L7.24727 17.8931L8.66148 16.7508C8.77237 16.6609 8.908 16.6068 9.05035 16.5958C9.19269 16.5849 9.33501 16.6175 9.45836 16.6894C9.90101 16.9465 10.376 17.1434 10.8707 17.2748C11.0083 17.3113 11.1315 17.3887 11.2242 17.4968C11.3169 17.6048 11.3745 17.7385 11.3896 17.88L11.578 19.6875Z" fill={isActive ? "#D01025" : "#B5B5B5"} />
                     <path d="M12.3621 15.9556C11.5151 15.9555 10.6872 15.7043 9.98301 15.2337C9.27882 14.763 8.72999 14.0942 8.40593 13.3116C8.08187 12.5291 7.99713 11.6681 8.16242 10.8374C8.32772 10.0067 8.73562 9.24365 9.33456 8.64478C9.9335 8.0459 10.6966 7.63808 11.5273 7.47288C12.358 7.30768 13.219 7.39251 14.0015 7.71666C14.784 8.0408 15.4528 8.5897 15.9234 9.29395C16.3939 9.99819 16.6451 10.8261 16.6451 11.6731C16.6438 12.8086 16.1922 13.8972 15.3892 14.7001C14.5863 15.503 13.4976 15.9545 12.3621 15.9556ZM12.3621 8.79688C11.7933 8.79697 11.2372 8.96574 10.7643 9.28184C10.2913 9.59794 9.92276 10.0472 9.70514 10.5728C9.48751 11.0983 9.43062 11.6766 9.54165 12.2345C9.65269 12.7924 9.92666 13.3049 10.3289 13.7071C10.7312 14.1093 11.2437 14.3832 11.8016 14.4941C12.3595 14.6051 12.9378 14.5481 13.4634 14.3304C13.9889 14.1127 14.4381 13.744 14.7541 13.271C15.0702 12.798 15.2388 12.242 15.2388 11.6731C15.238 10.9105 14.9346 10.1793 14.3953 9.6401C13.856 9.10088 13.1248 8.79762 12.3621 8.79688Z" fill={isActive ? "#D01025" : "#B5B5B5"} />
              </g>
              <defs>
                     <clipPath id="clip0_732_41">
                     <rect width={Width} height={Height} fill="white" />
                     </clipPath>
              </defs>
       </svg>
       )
}

export default SettingsIcon