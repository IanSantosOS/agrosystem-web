"use client";

import api_axios from "@/utils/axiosClient";
import Link from "next/link";

export default function UpdateCommunity({ params }) {
    const { id } = params;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const obj = {};
        if (title.value) obj.title = title.value;
        if (description.value) obj.description = description.value;

        await api_axios.patch(`/v1/communities/${id}`, obj)
        .then(({ data }) => {
            if (data.data) {
                window.location.replace('/communities');
            } else {
                document.querySelector("#erro").innerText = "* Dados incorretos!";
            }
        });
    }

    return (
        <div className="box">
        <h1>Atualizar Comunidade</h1>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Novo Título:</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Título"
                title="Escreva um novo título para a sua comunidade."
            />
            <label htmlFor="description">Nova Descrição:</label>
            <input
                type="text"
                id="description"
                name="description"
                placeholder="fulano123"
                title="Escreva uma nova descrição para a sua comunidade."
            />
            <button type="submit">Enviar</button>
        </form>
        <Link href="/communities" className="underline text-center max-w-full w-full block mt-3">Voltar</Link>
        </div>
    )
}