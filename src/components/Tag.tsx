export function Tag ({technologie} : {technologie : string}) {
    return <b className={`text-gray-400 border-neutral-500 text-sm border-1 py-1 px-3 mr-3 rounded-2xl`}>{technologie}</b>
}