"use client";

import api_axios from '@utils/axiosClient';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Communities() {
    const [listOfPosts, setListOfPosts] = useState([]);

    const handleListOfPosts = () => {
        api_axios.get('/api/v1/communities/').then((res) => {
            setListOfPosts(res.data);
        });
    }

    const handleUpdateCommunity = (id) => {
        window.location.assign(`/crud/update/community/${id}`);
    };

    const handleDeleteCommunity = (id) => {
        api_axios.delete(`/api/v1/communities/${id}`)
        .then(() => handleListOfPosts());
    }

    useEffect(() => {
        handleListOfPosts()
    }, []);

    return (
        <>
        <h1 className="font-bold text-3xl mb-3">Comunidades</h1>
        <Link href="/crud/" className="underline">Logout</Link>
        <div className='max-w-fit'>
            <div className='mt-3 flex justify-between'>
                <div className='gap-3 flex'>
                    <Link href="/crud/users" className="underline">Usuários</Link>
                    <Link href="/crud/products" className="underline">Produtos</Link>
                </div>
                <Link href="/crud/create/community" className="underline">Criar Comunidade</Link>
            </div>
            <table className='mt-3'>
                <thead>
                    <tr>
                        <th className="px-2">ID</th>
                        <th className="px-2">Título</th>
                        <th className="px-2">Descrição</th>
                        <th className="px-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfPosts.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td className="px-2">{value.id}</td>
                                <td className="px-2">{value.title}</td>
                                <td className="px-2">{value.description}</td>
                                <td className="px-2">
                                    <button onClick={() => handleUpdateCommunity(value.id)} className="me-2 underline">Atualizar</button>
                                    <button onClick={() => handleDeleteCommunity(value.id)} className="underline">Remover</button>
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
