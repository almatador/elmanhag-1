import React from 'react'

const DutiesIcon = ({ Width = "32", Height = "32", isActive = "#fff" }) => {
       return (
              <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clipPath="url(#clip0_100_11582)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M29.3333 26.6667C29.6283 26.6667 29.8667 26.4277 29.8667 26.1333V6.93333C29.8667 6.63893 29.6283 6.4 29.3333 6.4C29.0384 6.4 28.8 6.63893 28.8 6.93333V26.1333C28.8 26.4277 29.0384 26.6667 29.3333 26.6667ZM30.9333 29.3333V28.8H29.3333C29.0384 28.8 28.8 28.5611 28.8 28.2667C28.8 27.9723 29.0384 27.7333 29.3333 27.7333H30.9333V5.33333H29.3333C29.0384 5.33333 28.8 5.0944 28.8 4.8C28.8 4.5056 29.0384 4.26667 29.3333 4.26667H30.6037L29.3333 1.72587L27.7333 4.92587V29.3333C27.7333 30.2155 28.4512 30.9333 29.3333 30.9333C30.2155 30.9333 30.9333 30.2155 30.9333 29.3333ZM32.0107 4.8C32.0107 4.83627 32.0069 4.872 32 4.90667V29.3333C32 30.8037 30.8037 32 29.3333 32C27.8629 32 26.6667 30.8037 26.6667 29.3333V4.8C26.6667 4.71733 26.6859 4.6352 26.7227 4.5616L28.856 0.294933C29.0373 -0.0666667 29.6293 -0.0666667 29.8107 0.294933L31.9008 4.47573C31.9696 4.56587 32.0107 4.67787 32.0107 4.8ZM16.5333 16H11.2C10.9051 16 10.6667 16.2389 10.6667 16.5333C10.6667 16.8277 10.9051 17.0667 11.2 17.0667H16.5333C16.8283 17.0667 17.0667 16.8277 17.0667 16.5333C17.0667 16.2389 16.8283 16 16.5333 16ZM11.2 14.9333H14.4C14.6949 14.9333 14.9333 14.6944 14.9333 14.4C14.9333 14.1056 14.6949 13.8667 14.4 13.8667H11.2C10.9051 13.8667 10.6667 14.1056 10.6667 14.4C10.6667 14.6944 10.9051 14.9333 11.2 14.9333ZM8.53333 19.2H19.2V11.7333H8.53333V19.2ZM7.46667 19.7333V11.2C7.46667 10.9056 7.70507 10.6667 8 10.6667H19.7333C20.0283 10.6667 20.2667 10.9056 20.2667 11.2V19.7333C20.2667 20.0277 20.0283 20.2667 19.7333 20.2667H8C7.70507 20.2667 7.46667 20.0277 7.46667 19.7333ZM1.06667 4.8464V29.3333C1.06667 30.1856 1.8144 30.9333 2.66667 30.9333H22.9333C23.7856 30.9333 24.5333 30.1856 24.5333 29.3333V5.33333H2.66667C2.22773 5.33333 1.6016 5.20693 1.06667 4.8464ZM25.0667 1.06667H2.13333C1.54507 1.06667 1.06667 1.54507 1.06667 2.13333V2.66667C1.06667 4.17227 2.40213 4.26347 2.66987 4.26667H25.0667C25.3616 4.26667 25.6 4.5056 25.6 4.8V29.3333C25.6 30.7787 24.3787 32 22.9333 32H2.66667C1.22133 32 0 30.7787 0 29.3333V2.13333C0 0.9568 0.9568 0 2.13333 0H25.0667C25.3616 0 25.6 0.238933 25.6 0.533333C25.6 0.827733 25.3616 1.06667 25.0667 1.06667ZM2.66667 29.8667C2.9616 29.8667 3.2 29.6277 3.2 29.3333V6.93333C3.2 6.63893 2.9616 6.4 2.66667 6.4C2.37173 6.4 2.13333 6.63893 2.13333 6.93333V29.3333C2.13333 29.6277 2.37173 29.8667 2.66667 29.8667ZM24 2.13333C24.2949 2.13333 24.5333 2.37227 24.5333 2.66667C24.5333 2.96107 24.2949 3.2 24 3.2H2.66667C2.37173 3.2 2.13333 2.96107 2.13333 2.66667C2.13333 2.37227 2.37173 2.13333 2.66667 2.13333H24Z" fill={isActive ? '#D01025' : '#fff'} />
                            <path d="M14.7515 12.1707C14.5272 13.1942 14.6266 14.2243 14.8683 15.2381C14.8771 15.2748 15.0172 16.1114 15.1897 16.0561C15.6109 15.921 16.011 15.1366 16.1647 14.7743C16.393 14.2363 16.4605 13.5863 16.4605 13.0032C16.4605 12.9143 16.4073 12.6122 16.5189 12.565C16.8811 12.4121 17.3818 12.3678 17.7751 12.3678C18.0271 12.3678 17.9723 12.4684 17.9723 12.7294C17.9723 13.51 18.1938 14.34 18.301 15.114C18.4171 15.9529 18.5639 16.7107 18.5639 17.5606C18.5639 17.6702 18.5639 17.7797 18.5639 17.8893C18.5639 17.9365 18.3427 17.7262 18.2608 17.6884C17.9255 17.5337 17.5909 17.5606 17.2274 17.5606C16.5404 17.5606 15.8606 17.5193 15.1751 17.4803C13.8449 17.4045 12.5122 17.4291 11.1801 17.4291C10.8522 17.4291 9.94148 17.2563 9.88738 17.7432C9.87019 17.8979 9.37611 18.3549 9.73035 18.2471C10.3819 18.0488 11.1849 18.1711 11.8593 18.1522C12.4124 18.1367 12.9444 17.955 13.5026 17.955C14.1976 17.955 14.9041 17.973 15.595 17.8893C15.8861 17.854 16.1194 17.7578 16.4386 17.7578C16.8362 17.7578 17.1767 17.6934 17.5633 17.6409C17.8382 17.6037 18.1695 17.8215 18.1695 18.1193C18.1695 18.178 18.1867 18.1918 18.1476 18.1266C17.9665 17.8249 17.6362 17.6113 17.3771 17.3853C16.9536 17.016 16.608 16.5666 16.1793 16.2058C15.2497 15.4235 14.0846 15.1019 12.9767 14.6684" stroke={isActive ? '#D01025' : '#fff'} strokeWidth="3" strokeLinecap="round" />
                            <path d="M12.9767 15.3258C12.5911 15.3258 12.2477 15.0276 11.9616 14.7963C11.3037 14.2644 10.6693 13.6862 10.0626 13.0982C9.95262 12.9916 9.80801 12.9385 9.70113 12.8316C9.64135 12.7718 9.69017 13.387 9.69017 13.4926C9.69017 14.1475 9.69017 14.8023 9.69017 15.4572" stroke={isActive ? '#D01025' : '#fff'} strokeWidth="3" strokeLinecap="round" />
                            <path d="M13.6229 14.6799C13.6409 14.4777 13.5849 14.2519 13.5495 14.0543C13.5298 13.9447 13.511 13.8184 13.4615 13.7161C13.4399 13.6716 13.3915 13.659 13.3557 13.629C13.213 13.5091 13.1398 13.3278 13.0046 13.2068C12.9544 13.1619 12.8728 13.1426 12.8117 13.1189C12.5827 13.0298 12.3708 12.967 12.1216 12.9655C11.5433 12.9619 10.965 12.9481 10.3895 12.888C10.2441 12.8728 10.0986 12.8328 9.95362 12.8218C9.87919 12.8162 9.80524 12.8218 9.73085 12.8129C9.67241 12.806 9.61648 12.7929 9.55974 12.7774C9.52126 12.7669 9.50328 12.7337 9.50001 12.8057C9.4958 12.8981 9.50167 12.9909 9.49758 13.0833C9.48646 13.3352 9.4385 13.5726 9.39185 13.8195C9.26669 14.4818 9.32968 15.1379 9.33696 15.8067C9.33977 16.0648 9.33282 16.3196 9.39508 16.5686" stroke={isActive ? '#D01025' : '#fff'} strokeWidth="3" strokeLinecap="round" />
                     </g>
                     <defs>
                            <clipPath id="clip0_100_11582">
                                   <rect width={Width} height={Height} fill={isActive ? '#D01025' : '#fff'} />
                            </clipPath>
                     </defs>
              </svg>

       )
}

export default DutiesIcon