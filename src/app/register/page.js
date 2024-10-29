"use client";

import api_axios from "@/utils/axiosClient";
import Link from "next/link";

export default function Register() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        await api_axios.post('/api/v1/register', {
            name: namePublic.value,
            username: username.value,
            password: password.value,
            passwordVerify: password.value,
            email: email.value
        })
        .then(({ data }) => {
            if (data.data) {
                window.location.replace('/login');
            } else {
                document.querySelector("#erro").innerText = "* Dados inválidos!";
            }
        });
    }

    return (
        <>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
                type="text"
                id="namePublic"
                name="namePublic"
                placeholder="Fulano"
                required
            />
            <br/>
            <label htmlFor="username">Nome de Usuário:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="fulano123"
                required
            />
            <br/>
            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="fulano.jacinto@gmail.com"
                required
            />
            <br/>
            <label htmlFor="password">Senha:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="************"
                required
            />
            <br/>
            <label htmlFor="passwordVerify">Confirmar Senha:</label>
            <input
                type="password"
                id="passwordVerify"
                name="passwordVerify"
                placeholder="************"
                required
            />
            <br/>
            <button type="submit" className="underline">Enviar</button>
        </form>
        <Link href="/" className="underline">Voltar</Link>
        </>
    )
}