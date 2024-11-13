"use client";

import api_axios from '@/utils/axiosClient';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Products() {
    const [listOfPosts, setListOfPosts] = useState([]);

    const handleListOfPosts = () => {
        api_axios.get('/v1/products/').then((res) => {
            setListOfPosts(res.data);
        });
    }

    const handleUpdateProduct = (id) => {
        window.location.assign(`/update/product/${id}`);
    };

    const handleDeleteProduct = (id) => {
        api_axios.delete(`/v1/products/${id}`)
        .then(() => handleListOfPosts());
    }

    useEffect(() => {
        handleListOfPosts()
    }, []);

    return (
        <>
        <h1 className="font-bold text-3xl mb-3">Produtos</h1>
        <Link href="/" className="underline">Logout</Link>
        <div className='max-w-fit'>
            <div className='mt-3 flex justify-between'>
                <div className='gap-3 flex'>
                    <Link href="/home" className="underline">Usuários</Link>
                    <Link href="/communities" className="underline">Comunidades</Link>
                </div>
                <Link href="/create/product" className="underline">Criar Produto</Link>
            </div>
            <table className='mt-3'>
                <thead>
                    <tr>
                        <th className="px-2">ID</th>
                        <th className="px-2">Nome</th>
                        <th className="px-2">Preço</th>
                        <th className="px-2">Quantidade</th>
                        <th className="px-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfPosts.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td className="px-2">{value.id}</td>
                                <td className="px-2">{value.name}</td>
                                <td className="px-2">{value.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td className="px-2">{value.qnt}</td>
                                <td className="px-2">
                                    <button onClick={() => handleUpdateProduct(value.id)} className="me-2 underline">Atualizar</button>
                                    <button onClick={() => handleDeleteProduct(value.id)} className="underline">Remover</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}
