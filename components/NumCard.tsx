"use client"

import clsx from "clsx";

type props = {
    title: string;
    value: number | string;
}

export function NumCard({
    title, value
}: props) {
    return <>
        <div className="flex flex-col justify-center items-center text-center
            border-2 border-black rounded-lg
            py-1 px-3 h-full
            font-bold">
            <p className="text-xl select-none">{title}</p>
            <p className={clsx("text-2xl select-none", `${Number(value) < 0 ? 'text-red-500' : ''}`)}>{value}</p>
        </div>
    </>
}