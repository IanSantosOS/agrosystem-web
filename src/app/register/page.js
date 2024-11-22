"use client";

import api_axios from "@/utils/axiosClient";
import Link from "next/link";

export default function Register() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        await api_axios.post('/api/v1/users/', {
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
        <div className="box register">
        <h1>Cadastro</h1>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="namePublic"
                        name="namePublic"
                        placeholder="Fulano"
                        title="Digite seu Nome"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username">Nome de Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="fulano123"
                        title="Digite seu Nome de usuário"
                        required
                    />
                </div>
            </div>

            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="fulano.jacinto@gmail.com"
                title="Digite seu E-mail"
                required
            />

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="************"
                        title="Digite a senha que você vai utilizar"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="passwordVerify">Confirmar Senha:</label>
                    <input
                        type="password"
                        id="passwordVerify"
                        name="passwordVerify"
                        placeholder="************"
                        title="Digite a confirmação da senha"
                        required
                    />
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
        <Link href="/" className="underline text-center max-w-full w-full block mt-3">Log In</Link>
        </div>
    )
}