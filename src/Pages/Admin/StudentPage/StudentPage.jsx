import React, { useEffect, useRef, useState } from 'react';
import Loading from '../../../Components/Loading';
import { useAuth } from '../../../Context/Auth';
import CartStudent from '../../../Components/CartStudent';
import TitleHeader from '../../../Components/TitleHeader';
import SearchBar from '../../../Components/SearchBar';
import { ButtonAdd } from '../../../Components/Button';
import { IoIosArrowDown } from 'react-icons/io';
import SettingFilter from '../../../Components/Icons/AdminIcons/SettingFilter';
import EditIcon from '../../../Components/Icons/AdminIcons/EditIcon';
import DeleteIcon from '../../../Components/Icons/AdminIcons/DeleteIcon';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DropDownMenu from '../../../Components/DropDownMenu';
import TableData from '../../../Components/TableData';

const StudentPage = () => {
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [student, setStudent] = useState(null);
    const [search, setSearch] = useState('');
    const [selectedOptionCountry, setSelectedOptionCountry] = useState('Filter By Country');
    const [selectedOptionCity, setSelectedOptionCity] = useState('Filter By City');
    const [selectedOptionType, setSelectedOptionType] = useState('Filter By Free/Paid');
    const [openCountry, setOpenCountry] = useState(false);
    const [openCity, setOpenCity] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [studentsChanged, setStudentsChanged] = useState(false); // Change tracker

    const dropdownCountryRef = useRef(null);
    const dropdownCityRef = useRef(null);
    const dropdownTypeRef = useRef(null);

    const handleOptionCountry = (e) => {
        setSelectedOptionCountry(e.target.innerText);
        setOpenCountry(false);
    };

    const handleOptionCity = (e) => {
        setSelectedOptionCity(e.target.innerText);
        setOpenCity(false);
    };

    const handleOptionType = (e) => {
        setSelectedOptionType(e.target.innerText);
        setOpenType(false);
    };

    const handleOpenCountry = () => {
        setOpenCountry(!openCountry);
        setOpenCity(false);
        setOpenType(false);
    };

    const handleOpenCity = () => {
        setOpenCountry(false);
        setOpenCity(!openCity);
        setOpenType(false);
    };

    const handleOpenType = () => {
        setOpenCountry(false);
        setOpenCity(false);
        setOpenType(!openType);
    };

    const handleClickOutside = (event) => {
        if (
            (dropdownCountryRef.current && !dropdownCountryRef.current.contains(event.target)) &&
            (dropdownCityRef.current && !dropdownCityRef.current.contains(event.target)) &&
            (dropdownTypeRef.current && !dropdownTypeRef.current.contains(event.target))
        ) {
            setOpenCountry(false);
            setOpenCity(false);
            setOpenType(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const fetchStudents = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://bdev.elmanhag.shop/admin/student', {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                },
            });
            if (response.status === 200) {
                setStudent(response.data);
            }
        } catch (error) {
            console.error('Error fetching student data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents(); // Fetch students initially and whenever studentsChanged changes
    }, [studentsChanged]);

    const handleDelete = async (studentId) => {
        try {
            const response = await axios.delete(`https://bdev.elmanhag.shop/admin/student/delete/${studentId}`, {
                headers: {
                    Authorization: `Bearer ${auth.user.token}`,
                },
            });
            if (response.status === 200) {
                setStudentsChanged(prev => !prev); // Trigger fetchStudents
                auth.toastSuccess('Student deleted successfully!');
            } else {
                auth.toastError('Failed to delete student.');
            }
        } catch (error) {
            console.error('Error deleting student:', error);
            auth.toastError('Failed to delete student.');
        }
    };

    if (isLoading) {
        return (
            <div className="w-1/4 h-screen flex items-center justify-center m-auto">
                <Loading />
            </div>
        );
    }

    if (!student) {
        return <div className='text-mainColor text-2xl font-bold w-full h-full flex items-center justify-center'>No student data available</div>;
    }

    localStorage.setItem("students", JSON.stringify(student));

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <div className="w-full flex flex-wrap gap-y-4 items-center justify-between">
                <CartStudent name={"Total students"} count={student.total_students} />
                <CartStudent name={"Free students"} count={student.free_students} />
                <CartStudent name={"Paid students"} count={student.paid_students} />
                <CartStudent name={"Banned students"} count={student.banned_students} />
            </div>
            <div className="w-full">
                <div className="w-full flex flex-wrap items-center justify-between gap-4">
                    <div className="sm:w-full lg:w-1/5 mx-auto">
                        <SearchBar handleChange={handleChange} value={search} bg={"white"} />
                    </div>
                    <div className="sm:w-full lg:w-1/5">
                        <DropDownMenu
                            ref={dropdownCountryRef}
                            iconMenu={<SettingFilter />}
                            handleOpen={handleOpenCountry}
                            handleOpenOption={handleOptionCountry}
                            stateoption={selectedOptionCountry}
                            openMenu={openCountry}
                            options={student.countries || []}
                        />
                    </div>
                    <div className="sm:w-full lg:w-1/5">
                        <DropDownMenu
                            ref={dropdownCityRef}
                            iconMenu={<SettingFilter />}
                            handleOpen={handleOpenCity}
                            handleOpenOption={handleOptionCity}
                            stateoption={selectedOptionCity}
                            openMenu={openCity}
                            options={student.cities || []}
                        />
                    </div>
                    <div className="sm:w-full lg:w-1/5">
                        <DropDownMenu
                            ref={dropdownTypeRef}
                            iconMenu={<SettingFilter />}
                            handleOpen={handleOpenType}
                            handleOpenOption={handleOptionType}
                            stateoption={selectedOptionType}
                            openMenu={openType}
                            options={[{ id: 1, name: 'Free' }, { id: 2, name: 'Paid' }]}
                        />
                    </div>
                    <div className="sm:w-full lg:w-1/12 mx-auto">
                        <Link to="add">
                            <ButtonAdd Text={"Add"} BgColor={"mainColor"} Color={"secoundColor"} Size={"xl"} />
                        </Link>
                    </div>
                </div>
                <TableData
                    tableTitle={['#', 'Name Phone', 'Country City', 'Category', 'Free / Paid', 'Status', 'Action']}
                    data={student}
                    setStudent={setStudent}
                    editPath={'edit'}
                />
            </div>
        </>
    );
};

export default StudentPage;
