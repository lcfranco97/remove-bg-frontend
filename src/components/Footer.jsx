'use client'

import Link from "next/link";
import { RiScissorsCutFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.2 }}
            viewport={{ once: true }}
            className="py-16 px-2 flex items-center justify-around gap-2">


            <div className="">
                <Link href={'/'} className="flex gap-4 items-center mb-2">
                    <RiScissorsCutFill className="text-2xl text-gray-700 hover:text-gray-800 transition duration-300" />
                    <h1 className="text-gray-700 text-3xl">no<span className="text-gray-400 text-3xl">bg</span></h1>
                </Link>
                <p className="text-gray-600 text-sm">© 2025 NoBG. Todos os direitos reservados.</p>
            </div>

            <div className="">
                <span className="text-xl text-gray-800 font-semibold">Contato</span>

                <div className="flex gap-4 mt-4 mb-4 cursor-pointer">

                    <motion.div whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}> 
                        <a href="https://github.com/lcfranco97" aria-label="Link para o Github do desenvolvedor Lucas Franco"><IoLogoGithub size={28} className="cursor-pointer" /></a>
                        
                    </motion.div>
                    
                    <motion.div whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <a href="https://www.linkedin.com/in/lucas-franco-39579b208/" aria-label="Link para o Linkedin do desenvolvedor Lucas Franco"><FaLinkedin size={28} className="cursor-pointer" /></a>
                    </motion.div>

                    <motion.div whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <a href="https://www.instagram.com/lcfrancoo/" aria-label="Link para o Instagram do desenvolvedor Lucas Franco"><FaInstagram size={28} className="cursor-pointer" /></a>
                    </motion.div>

                </div>

                <p className="text-gray-600 text-sm">desenvolvido por Lucas Franco</p>

            </div>

        </motion.footer>
    );
}