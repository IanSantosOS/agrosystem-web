"use client";

import { useState } from "react";

export default function Login() {
    const handleSubmit = async (e) => {
    }

    return (
        <>
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