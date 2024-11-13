"use client";

import api_axios from "@/utils/axiosClient";
import Link from "next/link";

export default function UpdateUser({ params }) {
    const { id } = params;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const obj = {};
        if (namePublic.value) obj.name = namePublic.value;
        if (username.value) obj.username = username.value;
        if (email.value) obj.email = email.value;

        await api_axios.patch(`/v1/users/${id}`, obj)
        .then(({ data }) => {
            if (data.data) {
                window.location.replace('/home');
            } else {
                document.querySelector("#erro").innerText = "* Dados incorretos!";
            }
        });
    }

    return (
        <div className="box">
        <h1>Atualizar Usuário</h1>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="namePublic">Novo Nome:</label>
            <input
                type="text"
                id="namePublic"
                name="namePublic"
                placeholder="Fulano"
                title="Escreva um novo nome."
            />
            <label htmlFor="username">Novo Nome de Usuário:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="fulano123"
                title="Escreva um novo nome de usuário, lembre-se de que ele deve ser único."
            />
            <label htmlFor="email">Novo E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="fulano@gmail.com"
                title="Escreva um novo e-mail."
            />
            <button type="submit">Enviar</button>
        </form>
        <Link href="/home" className="underline text-center max-w-full w-full block mt-3">Voltar</Link>
        </div>
    )
}