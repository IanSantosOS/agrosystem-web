"use client";

import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
    }

    return (
        <>
        <p className="text-red-600">* Dados incorretos!</p>
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
                id="password"
                name="password"
                type="password"
                placeholder="************"
            />
            <br/>
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}