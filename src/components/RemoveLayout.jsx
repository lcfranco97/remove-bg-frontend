'use client'

import { useState } from "react";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";


export default function RemoveLayout() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [imageResult, setImageResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!selectedFile) return;

        setLoading(true);
        setImageResult(null);

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch("https://remove-bg-backend-production.up.railway.app/remove-bg", {
                method: "POST",
                body: formData,
            });

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setImageResult(url);
        } catch (error) {
            console.error("Erro ao remover fundo:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!imageResult) return;
        const link = document.createElement("a");
        link.href = imageResult;
        link.download = "imagem-sem-fundo.png";
        link.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file)); // gera preview da imagem original
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.2 }}
            viewport={{ once: true }}
            className="relative  flex flex-col items-center gap-6 p-10 min-h-screen shadow bg-gray-100">


            <h1 className="text-3xl font-bold text-gray-800">Removedor de Fundo</h1>
            <p className="text-md text-gray-700">Obtenha um fundo transparente para qualquer imagem</p>


            <div className=""></div>
            {/* Input de arquivo customizado */}
            <div className="relative">
                <input
                    type="file"
                    accept="image/*"
                    id="upload"
                    className="hidden"
                    onChange={handleFileChange}
                />
                <label
                    htmlFor="upload"
                    className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-3xl shadow hover:bg-blue-700 transition"
                >
                    Escolher imagem
                </label>
                {selectedFile && (
                    <p className="mt-2 text-sm text-gray-600 text-center">{selectedFile.name}</p>
                )}
            </div>

            {/* Preview da imagem original */}
            {preview && !loading && (
                <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2 text-center">Pré-visualização da imagem original:</p>
                   <motion.div whileHover={{
                    scale: 1.02,
                    transition: {
                        duration: .2
                    }
                   }}>
                     <Image
                        src={preview}
                        alt="Preview"
                        width={650}
                        height={850}
                        className="rounded border shadow"
                        unoptimized
                    />
                   </motion.div>
                </div>
            )}

           {selectedFile && !imageResult && (
                <button
                onClick={handleUpload}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-3 rounded-3xl shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
                Remover fundo
            </button>
           )}

            {/* Loading com Spinner */}
            {loading && (
                <div className="flex flex-col items-center mt-4">
                    <ClipLoader size={35} color="#3B82F6" />
                    <p className="text-gray-600 text-sm mt-2">Removendo fundo da imagem...</p>
                </div>
            )}

            {/* Resultado final */}
            {imageResult && !loading && (
                <div className="flex flex-col items-center gap-4 mt-6">
                    <h2 className="text-xl font-semibold text-gray-700">Resultado:</h2>
                    <motion.div whileHover={{
                        scale: 1.02,
                        transition: {
                            duration: .2
                        }
                    }}>
                        <Image
                        src={imageResult}
                        alt="Imagem sem fundo"
                        width={650}
                        height={850}
                        className="rounded border shadow"
                        unoptimized
                    />
                    </motion.div>
                    <button
                        onClick={handleDownload}
                        className="bg-blue-600 text-white px-5 py-3 rounded-3xl shadow hover:bg-blue-700 transition cursor-pointer"
                    >
                        Baixar imagem
                    </button>
                </div>
            )}
        </motion.div>
    );
}