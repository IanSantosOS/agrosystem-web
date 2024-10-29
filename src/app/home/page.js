"use client";

import api_axios from '@/utils/axiosClient';
import { trackDynamicDataAccessed } from 'next/dist/server/app-render/dynamic-rendering';
import { useEffect, useState } from 'react';

export default function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        api_axios.get('/api/v1/users').then((res) => {
            setListOfPosts(res.data);
        });
    }, []);

    return (
        <>
        <h1>Home Page</h1>
        <a href="/">Logout</a>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Usuário</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {listOfPosts.map((value, key) => {
                    return (
                        <tr key={key}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.username}</td>
                            <td>{value.email}</td>
                            <td>
                                <button>Atualizar</button>
                                <button>Remover</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}
