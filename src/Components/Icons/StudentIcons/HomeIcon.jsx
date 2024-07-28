import React from 'react'

const HomeIcon = ({ Width = "32", Height = "32",isActive= "#fff" }) => {
       return (
              <svg width={Width} height={Height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M25.6147 13.5998C25.6147 13.2816 25.4883 12.9764 25.2633 12.7513C25.0382 12.5263 24.733 12.3998 24.4147 12.3998C24.0965 12.3998 23.7913 12.5263 23.5662 12.7513C23.3412 12.9764 23.2147 13.2816 23.2147 13.5998H25.6147ZM8.81475 13.5998C8.81475 13.2816 8.68832 12.9764 8.46327 12.7513C8.23823 12.5263 7.93301 12.3998 7.61475 12.3998C7.29649 12.3998 6.99126 12.5263 6.76622 12.7513C6.54117 12.9764 6.41475 13.2816 6.41475 13.5998H8.81475ZM25.9663 16.8483C26.1927 17.0669 26.4958 17.1878 26.8104 17.1851C27.1251 17.1824 27.426 17.0562 27.6485 16.8337C27.871 16.6112 27.9972 16.3102 28 15.9956C28.0027 15.6809 27.8817 15.3778 27.6631 15.1515L25.9663 16.8483ZM16.0147 5.19976L16.8631 4.35135C16.6381 4.12638 16.3329 4 16.0147 4C15.6965 4 15.3914 4.12638 15.1663 4.35135L16.0147 5.19976ZM4.36635 15.1515C4.25173 15.2622 4.16032 15.3946 4.09742 15.541C4.03453 15.6874 4.00143 15.8449 4.00005 16.0042C3.99866 16.1635 4.02902 16.3215 4.08936 16.469C4.1497 16.6165 4.2388 16.7505 4.35147 16.8632C4.46414 16.9758 4.59813 17.0649 4.7456 17.1253C4.89308 17.1856 5.05109 17.216 5.21043 17.2146C5.36976 17.2132 5.52723 17.1801 5.67363 17.1172C5.82004 17.0543 5.95245 16.9629 6.06315 16.8483L4.36635 15.1515ZM10.0147 28H22.0147V25.6H10.0147V28ZM25.6147 24.4V13.5998H23.2147V24.4H25.6147ZM8.81475 24.4V13.5998H6.41475V24.4H8.81475ZM27.6631 15.1515L16.8631 4.35135L15.1663 6.04817L25.9663 16.8483L27.6631 15.1515ZM15.1663 4.35135L4.36635 15.1515L6.06315 16.8483L16.8631 6.04817L15.1663 4.35135ZM22.0147 28C22.9695 28 23.8852 27.6207 24.5603 26.9456C25.2355 26.2704 25.6147 25.3548 25.6147 24.4H23.2147C23.2147 24.7182 23.0883 25.0235 22.8633 25.2485C22.6382 25.4735 22.333 25.6 22.0147 25.6V28ZM10.0147 25.6C9.69649 25.6 9.39126 25.4735 9.16622 25.2485C8.94117 25.0235 8.81475 24.7182 8.81475 24.4H6.41475C6.41475 25.3548 6.79403 26.2704 7.46916 26.9456C8.14429 27.6207 9.05997 28 10.0147 28V25.6Z" fill={isActive ? '#D01025' : '#fff'} />
              </svg>

       )
}

export default HomeIcon