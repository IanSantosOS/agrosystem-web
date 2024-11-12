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
        <div className="box">
        <h1>Área de login</h1>
        <br></br>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
          <strong><label htmlFor="username" id="style_campo">Nome de Usuário:</label></strong>  
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Usuário"
            />
            <strong><label htmlFor="password" id="style_campo">Senha:</label></strong>   
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