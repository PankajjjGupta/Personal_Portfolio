export function Logo ({logoName, color = "text-gray-300"}: {logoName: string, color?: string}) {
    return <div className={`${color} font-semibold text-md`}>
        {'</> ' + logoName}
    </div>
}