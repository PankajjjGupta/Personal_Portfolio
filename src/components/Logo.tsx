import { useNavigate } from "react-router-dom"

export function Logo ({logoName, color = "text-gray-300"}: {logoName: string, color?: string}) {
    const navigate = useNavigate();
    return <div className={`${color} font-semibold text-md cursor-pointer`} onClick={() => {
        navigate("/")
    }}>
        {'</> ' + logoName}
    </div>
}