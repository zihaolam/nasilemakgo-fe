import { NextPage } from "next";
import { useState } from "react";

const Dashboard: NextPage = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="flex flex-no-wrap">
                <div id="Main" className={`${show ? '-translate-x-full' : 'translate-x-0'} bg-gray-50 pb-48 transform  xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64  flex-col h-screen`}>
                    <button className="hidden xl:flex justify-start text-gray-800 hover:text-black focus:outline-none focus:text-black px-6 pt-6 items-center space-x-3 w-full">
                        <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z" fill="currentColor" />
                        </svg>
                        <p className="text-2xl leading-6 text-gray-800">NasiLemak GO</p>
                    </button>
                    <div className="xl:mt-6 flex flex-col justify-start items-center  px-4 w-full space-y-3 pb-5 ">
                        <button className="focus:outline-none flex jusitfy-start hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full ">
                            <svg className="fill-stroke " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-base leading-4 ">Dashboard</p>
                        </button>
                        {/* <button className="focus:outline-none flex jusitfy-start hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4 items-center space-x-6 w-full ">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0001 5H5.00006C3.89549 5 3.00006 5.89543 3.00006 7V17C3.00006 18.1046 3.89549 19 5.00006 19H19.0001C20.1046 19 21.0001 18.1046 21.0001 17V7C21.0001 5.89543 20.1046 5 19.0001 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.00006 7L12.0001 13L21.0001 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4 ">Email</p>
                    </button>
                    <button className="focus:outline-none flex jusitfy-start hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4  items-center w-full  space-x-6">
                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4 ">User Menu</p>
                    </button>
                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded  py-3 pl-4   w-full ">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Notifications</p>
                    </button>
                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4   w-full ">
                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Chat</p>
                    </button>
                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded py-3 pl-4   w-full ">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.0002 5H6.00018C4.89561 5 4.00018 5.89543 4.00018 7V19C4.00018 20.1046 4.89561 21 6.00018 21H18.0002C19.1048 21 20.0002 20.1046 20.0002 19V7C20.0002 5.89543 19.1048 5 18.0002 5Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.0002 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.00018 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.00018 11H20.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.0002 16H14.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Calander</p>
                    </button>
                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded  py-3 pl-4   w-full ">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 19C10.2091 19 12 17.2091 12 15C12 12.7909 10.2091 11 8 11C5.79086 11 4 12.7909 4 15C4 17.2091 5.79086 19 8 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.85 12.15L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 5L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 8L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Security</p>
                    </button>
                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded  py-3 pl-4   w-full ">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00012 21H12.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.0001 21V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.0001 4L19.0001 8L10.0001 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Goals</p>
                    </button>
                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded  py-3 pl-4   w-full ">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Passwords</p>
                    </button>
                    <button className="focus:outline-none flex justify-start items-center space-x-6 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 hover:bg-indigo-50 text-gray-600 rounded  py-3 pl-4   w-full ">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0001 8C15.1047 8 16.0001 7.10457 16.0001 6C16.0001 4.89543 15.1047 4 14.0001 4C12.8956 4 12.0001 4.89543 12.0001 6C12.0001 7.10457 12.8956 8 14.0001 8Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.00012 6H12.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.0001 6H20.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.00012 14C9.10469 14 10.0001 13.1046 10.0001 12C10.0001 10.8954 9.10469 10 8.00012 10C6.89555 10 6.00012 10.8954 6.00012 12C6.00012 13.1046 6.89555 14 8.00012 14Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.00012 12H6.00012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.0001 12H20.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.0001 20C18.1047 20 19.0001 19.1046 19.0001 18C19.0001 16.8954 18.1047 16 17.0001 16C15.8956 16 15.0001 16.8954 15.0001 18C15.0001 19.1046 15.8956 20 17.0001 20Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.00012 18H15.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.0001 18H20.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4  ">Settings</p>
                    </button> */}
                    </div>
                </div>
                {/* Remove class [ h-64 ] when adding a card block */}
                <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    <div className="w-full h-full rounded border-gray-300">
                        <div className="w-full flex items-center justify-center">
                            <div className="py-4 sm:py-6 md:py-8 bg-white shadow rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 xl:px-10 gap-y-8 gap-x-12 2xl:gap-x-28">
                                    <div className="w-full">
                                        <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">Sales</p>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">89.5%</p>
                                        <div className="flex flex-col md:w-64">
                                            <div className="w-full flex justify-end">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 3.33334V12.6667" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p className="text-xs leading-none text-green-600">4.3%</p>
                                                </div>
                                            </div>
                                            <div className="mt-2.5">
                                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                                    <div className="w-1/2 h-1 bg-blue-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">revenue</p>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">RM 20</p>
                                        <div className="flex flex-col">
                                            <div className="h-4" />
                                            <div className="md:w-64 mt-2.5">
                                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                                    <div className="w-40 h-1 bg-lime-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">customers</p>
                                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">5</p>
                                        <div className="flex flex-col md:w-64">
                                            <div className="w-full flex justify-end">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 3.33334V12.6667" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <p className="text-xs leading-none text-green-600">9.1%</p>
                                                </div>
                                            </div>
                                            <div className="mt-2.5">
                                                <div className="w-full h-1 bg-gray-200 rounded-full">
                                                    <div className="w-44 h-1 bg-yellow-500 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full justify-center flex py-10">
                            <div className="border rounded-lg border pb-6 border-gray-200">
                                <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                                    <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">Nasi Lemak Sales</p>
                                    <div className="flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                                        <p className="text-xs md:text-sm leading-none text-gray-600">Filter by: Latest</p>
                                    </div>
                                </div>
                                <div className="px-6 pt-6 overflow-x-auto">
                                    <table className="w-full whitespace-nowrap">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="bg-gray-100 rounded-sm p-2.5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                                                                <path
                                                                    d="M13.5613 8.42567C12.5393 8.42567 10.9573 7.26367 9.29134 7.30567C7.09334 7.33367 5.07734 8.57967 3.94334 10.5537C1.66134 14.5157 3.35534 20.3677 5.58134 23.5877C6.67334 25.1557 7.96134 26.9197 9.66934 26.8637C11.3073 26.7937 11.9233 25.7997 13.9113 25.7997C15.8853 25.7997 16.4453 26.8637 18.1813 26.8217C19.9453 26.7937 21.0653 25.2257 22.1433 23.6437C23.3893 21.8237 23.9073 20.0597 23.9353 19.9617C23.8933 19.9477 20.5053 18.6457 20.4633 14.7257C20.4353 11.4497 23.1373 9.88167 23.2633 9.81167C21.7233 7.55767 19.3573 7.30567 18.5313 7.24967C16.3753 7.08167 14.5693 8.42567 13.5613 8.42567ZM17.2013 5.12167C18.1113 4.02967 18.7133 2.50367 18.5453 0.991669C17.2433 1.04767 15.6753 1.85967 14.7373 2.95167C13.8973 3.91767 13.1693 5.47167 13.3653 6.95567C14.8073 7.06767 16.2913 6.21367 17.2013 5.12167Z"
                                                                    fill="#6B7280"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="pl-3">
                                                            <div className="flex items-center text-sm leading-none">
                                                                <p className="font-semibold text-gray-800">Nasi Lemak</p>
                                                                <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
                                                            </div>
                                                            <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">Sambal, Ayam, Timun</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="pl-16">
                                                    <div>
                                                        <p className="text-sm font-semibold leading-none text-right text-gray-800">RM 5</p>
                                                        <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                                            <p className="text-xs leading-3 text-green-700">Success</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pt-6">
                                                    <div className="flex items-center">
                                                        <div className="bg-gray-100 rounded-sm p-2.5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 28 28" fill="none">
                                                                <path
                                                                    d="M13.5613 8.42567C12.5393 8.42567 10.9573 7.26367 9.29134 7.30567C7.09334 7.33367 5.07734 8.57967 3.94334 10.5537C1.66134 14.5157 3.35534 20.3677 5.58134 23.5877C6.67334 25.1557 7.96134 26.9197 9.66934 26.8637C11.3073 26.7937 11.9233 25.7997 13.9113 25.7997C15.8853 25.7997 16.4453 26.8637 18.1813 26.8217C19.9453 26.7937 21.0653 25.2257 22.1433 23.6437C23.3893 21.8237 23.9073 20.0597 23.9353 19.9617C23.8933 19.9477 20.5053 18.6457 20.4633 14.7257C20.4353 11.4497 23.1373 9.88167 23.2633 9.81167C21.7233 7.55767 19.3573 7.30567 18.5313 7.24967C16.3753 7.08167 14.5693 8.42567 13.5613 8.42567ZM17.2013 5.12167C18.1113 4.02967 18.7133 2.50367 18.5453 0.991669C17.2433 1.04767 15.6753 1.85967 14.7373 2.95167C13.8973 3.91767 13.1693 5.47167 13.3653 6.95567C14.8073 7.06767 16.2913 6.21367 17.2013 5.12167Z"
                                                                    fill="#6B7280"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className="pl-3">
                                                            <div className="flex items-center text-sm leading-none">
                                                                <p className="font-semibold text-gray-800">Nasi Lemak</p>
                                                                <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
                                                            </div>
                                                            <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">Sambal, Ayam, Timun</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="pl-16 pt-6">
                                                    <div>
                                                        <p className="text-sm font-semibold leading-none text-right text-gray-800">RM 5</p>
                                                        <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                                            <p className="text-xs leading-3 text-green-700">Success</p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard