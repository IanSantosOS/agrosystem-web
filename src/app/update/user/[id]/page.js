"use client";

import api_axios from "@/utils/axiosClient";
import Link from "next/link";

export default function Update({ params }) {
    const { id } = params;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const obj = {};
        if (namePublic.value) obj.name = namePublic.value;
        if (username.value) obj.username = username.value;
        if (email.value) obj.email = email.value;

        await api_axios.put(`/api/v1/update/user/${id}`, obj)
        .then(({ data }) => {
            if (data.data) {
                window.location.replace('/home');
            } else {
                document.querySelector("#erro").innerText = "* Dados incorretos!";
            }
        });
    }

    return (
        <>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Novo Nome:</label>
            <input
                type="text"
                id="namePublic"
                name="namePublic"
                placeholder="Fulano"
            />
            <br/>
            <label htmlFor="username">Novo Nome de Usuário:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="fulano123"
            />
            <br/>
            <label htmlFor="email">Novo E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="fulano.jacinto@gmail.com"
            />
            <br/>
            <button type="submit" className="underline">Enviar</button>
        </form>
        <Link href="/home" className="underline">Voltar</Link>
        </>
    )
}