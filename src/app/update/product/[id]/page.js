"use client";

import api_axios from "@/utils/axiosClient";
import Link from "next/link";

export default function UpdateProduct({ params }) {
    const { id } = params;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const obj = {};
        if (namePublic.value) obj.name = namePublic.value;
        if (price.value) obj.price = parseFloat(price.value);
        if (qnt.value) obj.qnt = parseInt(qnt.value);

        await api_axios.put(`/api/v1/update/product/${id}`, obj)
        .then(({ data }) => {
            if (data.data) {
                window.location.replace('/products');
            } else {
                document.querySelector("#erro").innerText = "* Dados incorretos!";
            }
        });
    }

    const justAllowInteger = () => {
        qnt.value = qnt.value.replace(/[^0-9]/g, '');
    }
    
    return (
        <div className="box">
        <h1>Atualizar Produto</h1>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="namePublic">Novo Nome:</label>
            <input
                type="text"
                id="namePublic"
                name="namePublic"
                placeholder="Produto"
                title="Escreva o novo nome do seu produto."
            />
            <label htmlFor="price">Novo Preço:</label>
            <p className="text-gray-500 text-sm text-start">Utilize ponto ao invés da vírgula para os centavos.</p>
            <input
                type="number"
                id="price"
                name="price"
                inputMode="decimal"
                placeholder="150.00"
                title="Apenas números, pode ser decimais ou inteiros."
            />
            <label htmlFor="qnt">Nova Quantidade:</label>
            <input
                type="number"
                id="qnt"
                name="qnt"
                inputMode="numeric"
                title="Apenas números inteiros."
                onInput={justAllowInteger}
                placeholder="450"
            />
            <button type="submit">Enviar</button>
        </form>
        <Link href="/products" className="underline text-center max-w-full w-full block mt-3">Voltar</Link>
        </div>
    )
}