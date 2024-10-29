"use client";

import api_axios from '@/utils/axiosClient';
import { useEffect, useState } from 'react';

export default function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);

    const handleListOfPosts = () => {
        api_axios.get('/api/v1/users').then((res) => {
            setListOfPosts(res.data);
        });
    }

    const handleUpdateUser = (id) => {
        window.location.assign(`/update/user/${id}`);
    };

    const handleDeleteUser = (id) => {
        api_axios.delete(`/api/v1/delete/user/${id}`)
        .then(() => handleListOfPosts());
    }

    useEffect(() => {
        handleListOfPosts()
    }, []);

    return (
        <>
        <h1 className="font-bold text-3xl mb-3">Home Page</h1>
        <a href="/" className="underline">Logout</a>
        <table>
            <thead>
                <tr>
                    <th className="px-2">ID</th>
                    <th className="px-2">Nome</th>
                    <th className="px-2">Usuário</th>
                    <th className="px-2">Email</th>
                    <th className="px-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {listOfPosts.map((value, key) => {
                    return (
                        <tr key={key}>
                            <td className="px-2">{value.id}</td>
                            <td className="px-2">{value.name}</td>
                            <td className="px-2">{value.username}</td>
                            <td className="px-2">{value.email}</td>
                            <td className="px-2">
                                <button onClick={() => handleUpdateUser(value.id)} className="me-2 underline">Atualizar</button>
                                <button onClick={() => handleDeleteUser(value.id)} className="underline">Remover</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}
