"use client";

import api_axios from "@/utils/axiosClient";
import Link from "next/link";

export default function Register() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        await api_axios.post('/api/v1/communities/', {
            title: title.value,
            description: description.value
        })
        .then(({ data }) => {
            if (data.data) {
                window.location.replace('/communities');
            } else {
                document.querySelector("#erro").innerText = "* Dados inválidos!";
            }
        });
    }

    return (
        <div className="box register">
        <h1>Criar Comunidade</h1>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Título:</label>
            <input
                type="text"
                id="title"
                name="title"
                title="Dê um título para a sua comunidade"
                placeholder="Título"
                required
            />
            <label htmlFor="description">Descrição:</label>
            <input
                type="text"
                id="description"
                name="description"
                title="Dê uma descrição para a sua comunidade"
                placeholder="Descrição"
                required
            />

            <button type="submit">Enviar</button>
        </form>
        <Link href="/communities" className="underline text-center max-w-full w-full block mt-3">Voltar</Link>
        </div>
    )
}