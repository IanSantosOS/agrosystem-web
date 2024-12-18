"use client";

import { useEffect, useRef, useState } from 'react';
import api_axios from "@utils/axiosClient";
import { destroyAuthToken } from "@utils/handleAuthToken";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socket = useRef(null); // Use um ref para armazenar a instância do WebSocket

    useEffect(() => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        }

        api_axios.post('/api/v1/', {}, headers).catch(({ response }) => {
            if (response.data.error) {
                window.location.assign('/');
                console.log('alô')
            }
        });

        // Conecte ao WebSocket
        socket.current = new WebSocket('ws://localhost:3300/');

        socket.current.onopen = () => {
            console.log('Conexão WebSocket estabelecida.');
            api_axios.get("/api/v1/communities/1/msg", headers)
            .then(({ data }) => {
                setMessages(data.map(msg => msg.content));
            });
        };

        socket.current.onmessage = async (event) => {
            if (event.data instanceof Blob) {
                const text = await event.data.text();
                setMessages((prevMessages) => [...prevMessages, text]);
            } else {
                setMessages((prevMessages) => [...prevMessages, event.data]);
            }
        };

        socket.current.onclose = () => {
            console.log('Conexão WebSocket encerrada.');
        };

        return () => {
            // Feche a conexão ao desmontar o componente
            if (socket.current) {
                socket.current.close();
            }
        };
    }, []);

    function deslogar() {
        destroyAuthToken();
        window.location.replace('/');
    }

    const sendMessage = (e) => {
        e.preventDefault();
        if (socket.current && socket.current.readyState === WebSocket.OPEN && input.trim() !== '') {
            socket.current.send(input); // Use a instância correta do WebSocket
            setInput('');
        }
    };

    return (
        <div>
            <h1>Comunidade do Agrosystem</h1>
            <form onSubmit={sendMessage}>
                <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
                    {messages.map((msg, index) => (
                        <div key={index}>{msg}</div>
                    ))}
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escreva sua mensagem..."
                />
                <button>Enviar</button>
            </form>
            <button onClick={deslogar}>Deslogar</button>
        </div>
    );
};