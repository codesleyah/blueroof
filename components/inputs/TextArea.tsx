interface TextAreaProps {
    placeholder : string;
}

export default function TextArea({placeholder}:TextAreaProps){
    return(
        <textarea placeholder={placeholder} className=" border-gray-200 border-2 rounded-xl px-2 py-1 w-full"/>
    )
}