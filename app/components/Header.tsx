'use client';

import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="font-sans w-full bg-white py-4 px-8 border-b border-gray-200 shadow-sm">
            {/* Container untuk desktop layout */}
            <div className="flex justify-between items-center">
                {/* Logo dan Title */}
                <div className="flex items-center">
                    <img
                        className="w-12 h-12 mr-4"
                        src="LogoYapis.png"
                        alt="logo yapis"
                    />
                    <h1 className="text-xl font-semibold text-gray-800">
                        SMKS HIKMAH YAPIS <br className="md:hidden" />JAYAPURA
                    </h1>
                </div>

                {/* Navigasi Desktop - disembunyikan di mobile */}
                <nav className="hidden md:flex items-center space-x-2">
                    {/* Tautan Navigasi */}
                    <a
                        href="#"
                        className="relative group p-2 mx-2 text-gray-600 font-medium transition-colors hover:text-blue-600"
                    >
                        Beranda
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </a>
                    <a
                        href="#"
                        className="relative group p-2 mx-2 text-gray-600 font-medium transition-colors hover:text-blue-600"
                    >
                        Program keahlian
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </a>
                    <a
                        href="#"
                        className="relative group p-2 mx-2 text-gray-600 font-medium transition-colors hover:text-blue-600"
                    >
                        Kontak
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </a>

                    {/* Dropdown "Profil" */}
                    <Menu as="div" className="relative group">
                        <MenuButton className="relative inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:text-blue-600">
                            Profil
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                        </MenuButton>
                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Sejarah Sekolah
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Visi & Misi
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Tenaga Pendidik
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>

                    {/* Dropdown "Informasi" */}
                    <Menu as="div" className="relative group">
                        <MenuButton className="relative inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:text-blue-600">
                            Informasi
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                        </MenuButton>
                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        PPDB 2025/2026
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Acara Sekolah
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Kontak
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </nav>

                {/* Tombol Hamburger - hanya tampil di mobile */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        aria-label="Toggle menu"
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Menu Mobile - muncul di bawah header */}
            <nav className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col space-y-2 border-t border-gray-200 pt-4">
                    {/* Tautan Navigasi Mobile */}
                    <a
                        href="#"
                        className="relative group p-2 text-gray-600 font-medium transition-colors hover:text-blue-600"
                    >
                        Beranda
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </a>
                    <a
                        href="#"
                        className="relative group p-2 text-gray-600 font-medium transition-colors hover:text-blue-600"
                    >
                        Program keahlian
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </a>
                    <a
                        href="#"
                        className="relative group p-2 text-gray-600 font-medium transition-colors hover:text-blue-600"
                    >
                        Kontak
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </a>

                    {/* Dropdown Mobile - Profil */}
                    <Menu as="div" className="relative">
                        <MenuButton className="w-full text-left p-2 text-gray-600 font-medium transition-colors hover:text-blue-600 flex items-center justify-between">
                            Profil
                            <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                        </MenuButton>
                        <MenuItems
                            transition
                            className="mt-2 w-full rounded-md bg-gray-50 shadow-sm outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Sejarah Sekolah
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Visi & Misi
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Tenaga Pendidik
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>

                    {/* Dropdown Mobile - Informasi */}
                    <Menu as="div" className="relative">
                        <MenuButton className="w-full text-left p-2 text-gray-600 font-medium transition-colors hover:text-blue-600 flex items-center justify-between">
                            Informasi
                            <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                        </MenuButton>
                        <MenuItems
                            transition
                            className="mt-2 w-full rounded-md bg-gray-50 shadow-sm outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <div className="py-1">
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        PPDB 2025/2026
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Acara Sekolah
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                                        Kontak
                                    </a>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </nav>
        </header>
    );
}