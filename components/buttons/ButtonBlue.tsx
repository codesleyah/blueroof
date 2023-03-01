

interface ButtonProps{
    text: string,
    onClick: () => void
}

export default function ButtonBlue({text, onClick}: ButtonProps){
    return(
        <button onClick={onClick} className="bg-blue-900 text-white rounded p-2 text-xs font-semibold">
            {text}
        </button>
    )
}