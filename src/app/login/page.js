"use client";

import api_axios from "@/utils/axiosClient";
import Link from "next/link";

export default function Login() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        await api_axios.post('/api/v1/login', {
            username: username.value,
            password: password.value
        })
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
            <label htmlFor="username">Nome de Usuário:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Usuário"
            />
            <br/>
            <label htmlFor="password">Senha:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="************"
            />
            <br/>
            <button type="submit" className="underline">Enviar</button>
        </form>
        <Link href="/register" className="underline">Cadastrar</Link>
        </>
    )
}