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

        await api_axios.patch(`/v1/products/${id}`, obj)
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
        <div className="box register">
        <h1>Atualizar Produto</h1>
        <p id="erro" className="text-red-600"></p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input
                type="text"
                id="namePublic"
                name="namePublic"
                placeholder="Produto"
                title="Coloque o nome do seu produto."
            />
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="price">Preço:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        inputMode="decimal"
                        placeholder="159,99"
                        step="0.01"
                        title="Coloque o preço do seu Produto."
                    />
                </div>
                <div>
                    <label htmlFor="qnt">Quantidade:</label>
                    <input
                        type="number"
                        id="qnt"
                        name="qnt"
                        inputMode="numeric"
                        title="Digite a quantidade. Apenas números inteiros."
                        onInput={justAllowInteger}
                        placeholder="450"
                    />
                </div>
            </div>

            <button type="submit">Enviar</button>
        </form>
        <Link href="/products" className="underline text-center max-w-full w-full block mt-3">Voltar</Link>
        </div>
    )
}