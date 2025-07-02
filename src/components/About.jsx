'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import bg2 from '../app/assets/sembg2.png';


export default function About() {

    return (
        <motion.section  initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay:  0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-4 sm:px-8 md:px-10 lg:px-26 py-8">

            <div className="">

                <h1 className="mb-6 text-2xl text-gray-800 font-semibold">Bem-vindo ao NoBG — a solução rápida, gratuita e intuitiva para remover fundos de imagens com apenas um clique!</h1>

                <p className="mb-6 text-lg text-gray-700">Seja para projetos criativos, e-commerce, redes sociais ou uso pessoal, o NoBG elimina o plano de fundo de suas fotos em segundos, mantendo apenas o que importa. Compatível com os formatos JPG, JPEG e PNG, nossa ferramenta utiliza tecnologia avançada para entregar resultados profissionais sem complicação.</p>

                <h2 className="mb-6 text-xl text-gray-800 font-semibold">Por que escolher o NoBG?</h2>

                <p className="mb-6 text-gray-700">✅ <span className="font-bold">Totalmente gratuito</span> – Remova fundos sem custos ou limitações.</p>

                <p className="mb-6 text-gray-700">✅ <span className="font-bold">Fácil de usar</span> –  Basta fazer upload da imagem e baixar o resultado em poucos segundos.</p>

                <p className="mb-6 text-gray-700">✅ <span className="font-bold">Precisão automática </span> – Tecnologia inteligente para cortes limpos e detalhados.</p>

                <p className="mb-6 text-gray-700">✅ <span className="font-bold">Sem cadastro</span> – Processamento direto, sem necessidade de login.</p>

                <span className="font-medium text-gray-800 text-lg">NoBG: Simples. Rápido. Eficiente.</span>


            </div>



            <div className="lg:ml-20">
                <Image src={bg2}
                    alt="Imagem ilustrativa"
                    width={450}
                    height={450}
                    className="h-full rounded-lg"
                />    
            </div>




        </motion.section>
    );
}