import { RiScissorsCutFill } from "react-icons/ri";
import Link from "next/link";

export default function Header() {

    return (
        <header className="flex items-center justify-between md:px-16 p-4 shadow-sm">
            <div className="">
                <Link href={'/'} className="flex gap-4 items-center">
                    <RiScissorsCutFill className="text-2xl text-gray-700 hover:text-gray-800 transition duration-300" />
                    <h1 className="text-gray-700 text-3xl">no<span className="text-gray-400 text-3xl">bg</span></h1>
                </Link>
            </div>

            <ul className="hidden md:flex gap-4">
                <li><a href="" className="text-gray-600 font-semibold cursor-pointer hover:bg-gray-200 rounded-3xl transition duration-300 px-4 py-3">Como funciona?</a></li>
                <li><a href="" className="text-gray-600 font-semibold cursor-pointer bg-gray-200 rounded-3xl transition duration-300 px-4 py-3">Experimente Grátis</a></li>
            </ul>

            
        </header>
    );
}