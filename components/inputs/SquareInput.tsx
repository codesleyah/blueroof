

interface InputProps {
    placeholder : string;
}
export default function SquareInput({placeholder}: InputProps){
    return(
        <input placeholder={placeholder}  className=" border-gray-200 border-2 rounded-xl px-2 py-1 w-full"/>
    )
}