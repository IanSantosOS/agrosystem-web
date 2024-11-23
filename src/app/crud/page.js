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
            if (data.token) {
                window.location.replace('/crud/users');
            } else {
                document.querySelector("#erro").innerText = "* Dados incorretos!";
            }
        });
    }

    return (
        <div className="box">
        <h1>Área de login</h1>
        <br></br>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nome de Usuário:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Usuário"
            />
            <label htmlFor="password">Senha:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="************"
            />
            <button type="submit">Enviar</button>
            <Link href="/register" className="underline text-center max-w-full w-full block mt-3">Cadastrar</Link>
        </form>
        </div>
    )
}