"use client"
import React from 'react'

import { useState } from "react";
import { useForm } from 'react-hook-form';

interface URL {
    longUrl: string
}

export default function Shortner() {
    const [shortUrl, setShortUrl] = useState('');
    const [longUrl, setLongUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm<URL>();

    const onSubmit = async (data: URL) => {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`/api/short?full_url=${data.longUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to create short URL');
            }

            const result = await response.json();
            const shortCode = result.short_code;
            setLongUrl(data.longUrl);
            const newShortUrl = `http://localhost:3000/${shortCode}`;
            setShortUrl(newShortUrl);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full drop-shadow-md shadow-black'>
            <div className="flex w-full items-center justify-center">
                <input
                    type="text"
                    {...register('longUrl', { required: 'Long URL is required!' })}
                    className="border border-e-0 border-gray-300 rounded-s-md h-14 w-2/3 py-2 px-4"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#3C6E71] text-white h-14 w-32 rounded-e-md hover:bg-[#2e5557]"
                >
                    {isLoading ? 'Loading...' : 'Shorten URL'}
                </button>
            </div>
            <div className='flex w-full items-center justify-center my-2'>
                {errors.longUrl && <span className="text-red-500 block">{errors.longUrl.message?.toString()}</span>}
                {error && <span className="text-red-500 block">{error}</span>}
                {shortUrl && <div className='w-1/2 flex p-4 bg-decor border border-gray-300 rounded-md my-2'>
                    <div className='flex text-lg w-full'>
                        <div className='flex mr-auto'>
                            <p>{longUrl}</p>
                        </div>
                        <div className='flex gap-4'>
                            <a href={shortUrl} target="_blank" className='text-blue-800 hover:underline'>
                                {shortUrl}
                            </a>
                            <p className='text-blue-800 hover:text-blue-900 hover:cursor-pointer'>
                                Copy
                            </p>
                        </div>
                    </div>
                </div>}


            </div>


        </form>
    )
}