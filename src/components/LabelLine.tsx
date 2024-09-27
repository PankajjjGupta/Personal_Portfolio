export function LabelLine ({labelText, isDarkMode} : {labelText : string, isDarkMode?   : boolean}) {
    return <div className="mt-10 mb-3 flex items-center gap-5">
    <div className={`${isDarkMode ? "bg-neutral-600" : "bg-neutral-200"} h-[1px] w-[20px]`}></div> 
        <div className={`${isDarkMode ? "text-neutral-600" : "text-neutral-300 "} text-lg mdLtext-xl`}>
        {labelText}
        </div>
    <div className={`${isDarkMode ? "bg-neutral-600" : "bg-neutral-200"} flex-1 h-[1px]`}></div>
    </div> 
}