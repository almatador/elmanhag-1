// // import React, { useEffect, useRef, useState } from 'react';
// // import Loading from '../../../../Components/Loading';
// // import { useAuth } from '../../../../Context/Auth';
// // import TitleHeader from '../../../../Components/TitleHeader';
// // import { ButtonAdd } from '../../../../Components/Button';
// // import { IoIosArrowDown } from 'react-icons/io';
// // import SettingFilter from '../../../../Components/Icons/AdminIcons/SettingFilter';
// // import EditIcon from '../../../../Components/Icons/AdminIcons/EditIcon';
// // import DeleteIcon from '../../../../Components/Icons/AdminIcons/DeleteIcon';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import DropDownMenu from '../../../../Components/DropDownMenu';
// // import TableStudent from '../../../../Components/TableStudent';
// // import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
// // import { Wroning } from '../../../../Components/Icons/All_Icons';

// // const BundlesPage = () => {
//     // const auth = useAuth();
//     // const [isLoading, setIsLoading] = useState(true);
//     // const [bundles, setBundles] = useState(null);
//     // const [selectedOptionCategory, setSelectedOptionCategory] = useState('Filter By Category');
//     // const [selectedOptionStatus, setSelectedOptionStatus] = useState('Filter By Status');
//     // const [selectedOptionSemester, setSelectedOptionSemester] = useState('Filter By Semester');
//     // const [openCategory, setOpenCategory] = useState(false);
//     // const [openStatus, setOpenStatus] = useState(false);
//     // const [openSemester, setOpenSemester] = useState(false);
//     // const [bundlesChanged, setBundlesChanged] = useState(false); // Change tracker

//     // const dropdownCategoryRef = useRef(null);
//     // const dropdownStatusRef = useRef(null);
//     // const dropdownSemesterRef = useRef(null);

//     // const [isDeleting, setIsDeleting] = useState(false);
//     // const [openDialog, setOpenDialog] = useState(null);

// //     const handleOptionCategory = (e) => {
// //         setSelectedOptionCategory(e.target.innerText);
// //         setOpenCategory(false);
// //     };

// //     const handleOptionStatus = (e) => {
// //         setSelectedOptionStatus(e.target.innerText);
// //         setOpenStatus(false);
// //     };

// //     const handleOptionSemester = (e) => {
// //         setSelectedOptionSemester(e.target.innerText);
// //         setOpenSemester(false);
// //     };

// //     const handleOpenCategory = () => {
// //         setOpenCategory(!openCategory);
// //         setOpenStatus(false);
// //         setOpenSemester(false);
// //     };

// //     const handleOpenStatus = () => {
// //         setOpenCategory(false);
// //         setOpenStatus(!openStatus);
// //         setOpenSemester(false);
// //     };

// //     const handleOpenSemester = () => {
// //         setOpenCategory(false);
// //         setOpenStatus(false);
// //         setOpenSemester(!openSemester);
// //     };

// //     const handleClickOutside = (event) => {
// //         if (
// //             (dropdownCategoryRef.current && !dropdownCategoryRef.current.contains(event.target)) &&
// //             (dropdownStatusRef.current && !dropdownStatusRef.current.contains(event.target)) &&
// //             (dropdownSemesterRef.current && !dropdownSemesterRef.current.contains(event.target))
// //         ) {
// //             setOpenCategory(false);
// //             setOpenStatus(false);
// //             setOpenSemester(false);
// //         }
// //     };

// //     useEffect(() => {
// //         document.addEventListener('mousedown', handleClickOutside);
// //         return () => {
// //             document.removeEventListener('mousedown', handleClickOutside);
// //         };
// //     }, []);

// //     const fetchBundles = async () => {
// //         setIsLoading(true);
// //         try {
// //             const response = await axios.get('https://bdev.elmanhag.shop/admin/bundle', {
// //                 headers: {
// //                     Authorization: `Bearer ${auth.user.token}`,
// //                 },
// //             });
// //             if (response.status === 200) {
// //                 setBundles(response.data);
// //             }
// //         } catch (error) {
// //             console.error('Error fetching bundles data:', error);
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchBundles(); // Fetch bundles initially and whenever bundlesChanged changes
// //     }, [bundlesChanged]);

// //     const handleOpenDialog = (bundleId) => {
// //         setOpenDialog(bundleId);
// //     };

// //     const handleCloseDialog = () => {
// //         setOpenDialog(null);
// //     };

// //     const handleDelete = async (bundleId) => {
// //         setIsDeleting(true);
// //         const success = await deleteBundle(bundleId, auth.user.token);
// //         setIsDeleting(false);
// //         handleCloseDialog();

//     //     if (success) {
//     //         auth.toastSuccess('Bundle deleted successfully!');
//     //         setBundles((prevBundles) => ({
//     //             ...prevBundles,
//     //             bundles: prevBundles.bundles.filter((bundle) => bundle.id !== bundleId),
//     //         }));
//     //     } else {
//     //         auth.toastError('Failed to delete bundle.');
//     //     }
//     // };

// //     const deleteBundle = async (bundleId, authToken) => {
// //         try {
// //             const response = await axios.delete(`https://bdev.elmanhag.shop/admin/bundle/delete/${bundleId}`, {
// //                 headers: {
// //                     Authorization: `Bearer ${authToken}`,
// //                 },
// //             });

// //             if (response.status === 200) {
// //                 console.log('Bundle deleted successfully');
// //                 return true;
// //             } else {
// //                 console.error('Failed to delete bundle:', response.status, response.statusText);
// //                 return false;
// //             }
// //         } catch (error) {
// //             console.error('Error deleting bundle:', error);
// //             return false;
// //         }
// //     };

// //     if (isLoading) {
// //         return (
// //             <div className="w-1/4 h-full flex items-start mt-[10%] justify-center m-auto">
// //                 <Loading />
// //             </div>
// //         );
// //     }

// //     if (!bundles) {
// //         return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No bundle data available</div>;
// //     }

// //     localStorage.setItem("bundles", JSON.stringify(bundles));

// //     return (
// //         <>
// //             <div className="w-full">
// //                 <div className="w-full flex flex-wrap items-center justify-between gap-4">
// //                     <div className="sm:w-full xl:w-1/5">
// //                         <DropDownMenu
// //                             ref={dropdownCategoryRef}
// //                             iconMenu={<SettingFilter />}
// //                             handleOpen={handleOpenCategory}
// //                             handleOpenOption={handleOptionCategory}
// //                             stateoption={selectedOptionCategory}
// //                             openMenu={openCategory}
// //                             options={bundles.category || []}
// //                         />
// //                     </div>
// //                     <div className="sm:w-full xl:w-1/5">
// //                         <DropDownMenu
// //                             ref={dropdownStatusRef}
// //                             iconMenu={<SettingFilter />}
// //                             handleOpen={handleOpenStatus}
// //                             handleOpenOption={handleOptionStatus}
// //                             stateoption={selectedOptionStatus}
// //                             openMenu={openStatus}
// //                             options={bundles.status || []}
// //                         />
// //                     </div>
// //                     <div className="sm:w-full xl:w-1/5">
// //                         <DropDownMenu
// //                             ref={dropdownSemesterRef}
// //                             iconMenu={<SettingFilter />}
// //                             handleOpen={handleOpenSemester}
// //                             handleOpenOption={handleOptionSemester}
// //                             stateoption={selectedOptionSemester}
// //                             openMenu={openSemester}
// //                             options={[{ id: 1, name: 'Free' }, { id: 2, name: 'Paid' }]}
// //                         />
// //                     </div>
// //                     <div className="sm:w-full xl:w-1/12 mx-auto">
// //                         <Link to="add">
// //                             <ButtonAdd Text={"Add"} BgColor={"white"} Color={"thirdColor"} Size={"xl"} />
// //                         </Link>
// //                     </div>
// //                 </div>
// //                 <div className="w-full mt-4 overflow-x-auto">
// //                     <table className="w-full sm:min-w-0">
// //                         <thead>
// //                             <tr className="border-b-2">
// //                                 <th className="min-w-[80px] text-center font-medium text-sm pb-3">#</th>
// //                                 <th className="min-w-[150px] text-center font-medium text-sm pb-3">Name</th>
// //                                 <th className="min-w-[150px] text-center font-medium text-sm pb-3">Category</th>
// //                                 <th className="min-w-[120px] text-center font-medium text-sm pb-3">Free / Paid</th>
// //                                 <th className="min-w-[120px] text-center font-medium text-sm pb-3">Status</th>
// //                                 <th className="min-w-[100px] text-center font-medium text-sm pb-3">Action</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {bundles.map((bundle, index) => (
// //                                 <tr className="border-b-2" key={bundle.id}>
// //                                     <td className="text-center text-sm py-2">{index + 1}</td>
// //                                     <td className="text-center text-sm py-2">{bundle.name || "N/A"}</td>
// //                                     <td className="text-center text-sm py-2">{bundle.category?.name || "N/A"}</td>
// //                                     <td className="text-center text-sm py-2">{bundle.type === 'free' ? 'Free' : 'Paid'}</td>
// //                                     <td className="text-center text-sm py-2">{bundle.status === "1" ? "Active" : "Pending"}</td>
// //                                     <td className="text-center text-sm py-2">
// //                                         <div className="flex items-center justify-center gap-x-3">
// //                                             <Link to={`edit/${bundle.id}`} type="button">
// //                                                 <EditIcon />
// //                                             </Link>
// //                                             <button type="button" onClick={() => handleOpenDialog(bundle.id)}>
// //                                                 <DeleteIcon />
// //                                             </button>
// //                                         </div>
// //                                         <Dialog as="div" className="relative z-10" open={openDialog === bundle.id} onClose={handleCloseDialog}>
// //                                             <DialogBackdrop className="fixed inset-0 bg-black/30" />
// //                                             <div className="fixed inset-0 flex items-center justify-center p-4">
// //                                                 <DialogPanel className="mx-auto max-w-sm bg-white rounded-lg p-4 space-y-4 shadow-lg">
// //                                                     <Warning className="text-red-500 w-8 h-8 mx-auto" />
// //                                                     <h3 className="text-center text-lg font-semibold text-gray-800">
// //                                                         Are you sure you want to delete this bundle?
// //                                                     </h3>
// //                                                     <div className="flex justify-center gap-x-4">
// //                                                         <button
// //                                                             type="button"
// //                                                             className="px-4 py-2 bg-red-500 text-white rounded-md"
// //                                                             onClick={() => handleDelete(bundle.id)}
// //                                                             disabled={isDeleting}
// //                                                         >
// //                                                             {isDeleting ? 'Deleting...' : 'Yes, delete'}
// //                                                         </button>
// //                                                         <button
// //                                                             type="button"
// //                                                             className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
// //                                                             onClick={handleCloseDialog}
// //                                                         >
// //                                                             Cancel
// //                                                         </button>
// //                                                     </div>
// //                                                 </DialogPanel>
// //                                             </div>
// //                                         </Dialog>
// //                                     </td>
// //                                 </tr>
// //                             ))}
// //                         </tbody>
// //                     </table>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default BundlesPage;



// import React, { useEffect, useRef, useState } from 'react';
// import Loading from '../../../../Components/Loading';
// import { useAuth } from '../../../../Context/Auth';
// import { ButtonAdd } from '../../../../Components/Button';
// import SettingFilter from '../../../../Components/Icons/AdminIcons/SettingFilter';
// import EditIcon from '../../../../Components/Icons/AdminIcons/EditIcon';
// import DeleteIcon from '../../../../Components/Icons/AdminIcons/DeleteIcon';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import DropDownMenu from '../../../../Components/DropDownMenu';
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
// import { Wroning } from '../../../../Components/Icons/All_Icons';

// const BundlesPage = () => {
//     const auth = useAuth();
//     const [isLoading, setIsLoading] = useState(true);
//     const [bundles, setBundles] = useState(null);
//     const [selectedOptionCategory, setSelectedOptionCategory] = useState('Filter By Category');
//     const [selectedOptionStatus, setSelectedOptionStatus] = useState('Filter By Status');
//     const [selectedOptionSemester, setSelectedOptionSemester] = useState('Filter By Semester');
//     const [openCategory, setOpenCategory] = useState(false);
//     const [openStatus, setOpenStatus] = useState(false);
//     const [openSemester, setOpenSemester] = useState(false);
//     const [bundlesChanged, setBundlesChanged] = useState(false); // Change tracker

//     const dropdownCategoryRef = useRef(null);
//     const dropdownStatusRef = useRef(null);
//     const dropdownSemesterRef = useRef(null);

//     const [isDeleting, setIsDeleting] = useState(false);
//     const [openDialog, setOpenDialog] = useState(null);

//   const handleOptionStatus = (e) => {
//     setSelectedOptionStatus(e.target.innerText);
//     setOpenStatus(false);
//   };

//   const handleOptionCategory = (e) => {
//     setSelectedOptionCategory(e.target.innerText);
//     setOpenCategory(false);
//   };

//   const handleOptionSemester = (e) => {
//     setSelectedOptionSemester(e.target.innerText);
//     setOpenSemester(false);
//   };

//   const handleOpenStatus = () => {
//     setOpenStatus(!openStatus);
//     setOpenCategory(false);
//     setOpenSemester(false);
//   };

//   const handleOpenCategory = () => {
//     setOpenStatus(false);
//     setOpenCategory(!openCategory);
//     setOpenSemester(false);
//   };

//   const handleOpenSemester = () => {
//     setOpenStatus(false);
//     setOpenCategory(false);
//     setOpenSemester(!openSemester);
//   };

//   const handleClickOutside = (event) => {
//     if (
//       (dropdownStatusRef.current && !dropdownStatusRef.current.contains(event.target)) &&
//       (dropdownCategoryRef.current && !dropdownCategoryRef.current.contains(event.target)) &&
//       (dropdownSemesterRef.current && !dropdownSemesterRef.current.contains(event.target))
//     ) {
//       setOpenStatus(false);
//       setOpenCategory(false);
//       setOpenSemester(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const fetchBundles = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get('https://bdev.elmanhag.shop/admin/bundle', {
//         headers: {
//           Authorization: `Bearer ${auth.user.token}`,
//         },
//       });
//       if (response.status === 200) {
//         setBundles(response.data.bundles);
//         console.log(response.data.bundles)
//       }
//     } catch (error) {
//       console.error('Error fetching Bundles data:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBundles(); 
//   }, [bundlesChanged]);

//   const handleOpenDialog = (bundleId) => {
//     setOpenDialog(bundleId);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(null);
//   };

//   const handleDelete = async (bundleId) => {
//     setIsDeleting(true);
//     const success = await deleteBundle(bundleId, auth.user.token);
//     setIsDeleting(false);
//     handleCloseDialog();

//     if (success) {
//       auth.toastSuccess('Bundle deleted successfully!');
//       setBundles((prevBundles) => ({
//           ...prevBundles,
//           bundles: prevBundles.bundles.filter((bundle) => bundle.id !== bundleId),
//       }));
//   } else {
//       auth.toastError('Failed to delete bundle.');
//   }
// };

//   const deleteBundle = async (bundleId, authToken) => {
//     try {
//       const response = await axios.delete(`https://bdev.elmanhag.shop/admin/bundle/delete/${bundleId}`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       if (response.status === 200) {
//         console.log('Bundle deleted successfully');
//         return true;
//       } else {
//         console.error('Failed to delete Bundle:', response.status, response.statusText);
//         return false;
//       }
//     } catch (error) {
//       console.error('Error deleting Bundle:', error);
//       return false;
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="w-1/4 flex items-start mt-[10%] justify-center h-full m-auto">
//         <Loading />
//       </div>
//     );
//   }

//   if (!bundles) {
//     return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No Bundlles data available</div>;
//   }

//   localStorage.setItem("Bundles", JSON.stringify(bundles));

//   return (
//     <>
//       <div className="w-full">
//         <div className="w-full flex flex-wrap items-center justify-start gap-4">
//           <div className="sm:w-full xl:w-1/5">
//             <DropDownMenu
//               ref={dropdownSemesterRef}
//               iconMenu={<SettingFilter />}
//               handleOpen={handleOpenSemester}
//               handleOpenOption={handleOptionSemester}
//               stateoption={selectedOptionSemester}
//               openMenu={openSemester}
//               options={bundles.semester || []}
//             />
//           </div>
//           <div className="sm:w-full xl:w-1/5">
//             <DropDownMenu
//               ref={dropdownCategoryRef}
//               iconMenu={<SettingFilter />}
//               handleOpen={handleOpenCategory}
//               handleOpenOption={handleOptionCategory}
//               stateoption={selectedOptionCategory}
//               openMenu={openCategory}
//               options={bundles.category || []}
//             />
//           </div>
//           <div className="sm:w-full xl:w-1/5">
//             <DropDownMenu
//               ref={dropdownStatusRef}
//               iconMenu={<SettingFilter />}
//               handleOpen={handleOpenStatus}
//               handleOpenOption={handleOptionStatus}
//               stateoption={selectedOptionStatus}
//               openMenu={openStatus}
//               options={bundles.category || []}
//             />
//           </div>

//           <div className="sm:w-full xl:w-1/12 xl:text-left">
//             <Link to="add">
//               <ButtonAdd Text={"Add"} BgColor={"white"} Color={"thirdColor"} Size={"xl"} />
//             </Link>
//           </div>
//         </div>
//         {/* <div className="w-full flex items-center justify-between mt-4 overflow-x-auto">
//           <table className="w-full sm:min-w-0">
//             <thead className="w-full">
//               <tr className="w-full border-b-2">
//                 <th className="min-w-[80px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">#</th>
//                 <th className="min-w-[150px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Title</th>
//                 <th className="min-w-[120px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Category</th>
//                 <th className="min-w-[120px] sm:w-2/12 lg:w-2/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Price</th>
//                 <th className="min-w-[100px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Students</th>
//                 <th className="min-w-[80px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Status</th>
//                 <th className="min-w-[80px] sm:w-1/12 lg:w-1/12 text-mainColor text-center font-medium text-sm sm:text-base lg:text-lg xl:text-xl pb-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="w-full">
//               {bundles.map((bundle, index) => (
//                 <tr className="w-full border-b-2 text-sm sm:text-base lg:text-lg xl:text-xl" key={bundle.id}>
//                   <td className="text-center p-2">{index + 1}</td>
//                   <td className="text-center p-2">{bundle.name}</td>
//                   <td className="text-center p-2">{bundle.semester}</td>
//                   <td className="text-center p-2">{bundle.category}</td>
//                   <td className="text-center p-2">{bundle.price}</td>
//                   <td className="text-center p-2">{bundle.includes}</td>
//                   <td className="text-center p-2">{bundle.syllabus}</td>
//                   <td className="text-center p-2">{bundle.students}</td>
//                   <td className="text-center p-2">{bundle.status}</td>
//                   <td className="text-center p-2">
//                     <div className="w-full flex items-center justify-between gap-2">
//                       <Link to={`edit/${bundles.id}`}>
//                         <EditIcon />
//                       </Link>
//                       <div className="cursor-pointer" onClick={() => handleOpenDialog(bundles.id)}>
//                         <DeleteIcon />
//                       </div>
//                       <Dialog
//                         as="div"
//                         className="relative z-10"
//                         open={openDialog === bundles.id}
//                         onClose={handleCloseDialog}
//                       >
//                         <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25" />
//                         <DialogPanel className="fixed inset-0 flex items-center justify-center p-4">
//                           <div className="bg-white rounded-lg max-w-sm w-full mx-auto p-6">
//                             <DialogTitle as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center">
//                               Delete bundles
//                             </DialogTitle>
//                             <div className="mt-2 flex flex-col items-center justify-center text-center">
//                               <Wroning className="w-16 h-16 text-red-600" />
//                               <p className="text-sm text-gray-500">Are you sure you want to delete this bundle?</p>
//                             </div>
//                             <div className="mt-4 flex justify-center gap-4">
//                               <button
//                                 type="button"
//                                 className="inline-flex justify-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
//                                 onClick={handleCloseDialog}
//                               >
//                                 Cancel
//                               </button>
//                               <button
//                                 type="button"
//                                 className="inline-flex justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
//                                 onClick={() => handleDelete(bundles.id)}
//                                 disabled={isDeleting}
//                               >
//                                 {isDeleting ? 'Deleting...' : 'Delete'}
//                               </button>
//                             </div>
//                           </div>
//                         </DialogPanel>
//                       </Dialog>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default BundlesPage;


import React from 'react'

const BundlesPage = () => {
  return (
    <div>BundlesPage</div>
  )
}

export default BundlesPage


