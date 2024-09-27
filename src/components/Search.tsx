import { ChangeEventHandler } from "react";

export function Search ({label, onChange, theme}: {label: string, onChange: ChangeEventHandler<HTMLInputElement>, theme : string | undefined}) {
    return <div className={`${theme === "dark" ? "text-white" : "text-black"} w-full mt-12`}>
        <h1 className="font-extrabold text-center text-7xl mb-8">{label}</h1>
        <input className={`${theme === "dark" ? "bg-slate-950" : "bg-white"} w-full px-3 py-2 rounded-lg  outline-none border`} onChange={onChange} placeholder="Search..." type="text" />
    </div>
}