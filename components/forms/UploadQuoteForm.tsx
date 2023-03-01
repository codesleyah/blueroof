
import SquareInput from "../inputs/SquareInput"
import TextArea from "../inputs/TextArea"
import ImageDropzone from "../imageDropZone/ImageDropZone"
import ButtonBlue from "../buttons/ButtonBlue"
import Image from "next/image"

export default function UploadQuoteForm(){
    const images = [1,2,3,4,5]
    return(
        <form className="w-full shadow rounded bg-white flex flex-col p-4 gap-2 md:grid md:grid-cols-2">
            <div  className="flex flex-col md:col-span-2 ">
                <TextArea  placeholder="Quote"/> 
            </div>
            <div className="flex flex-col md:col-span-2">
                <ImageDropzone onChange={()=> {}} />
            </div>
            <div className="flex flex-col md:col-span-2">
                <div className="grid grid-cols-4 gap-2">
                    {images.map((image, i) => (
                        <Image src="/images/quote.png" height={100} width={100} alt="car" key={i}/>
                    ))
                    }
                </div>
            </div>
            <ButtonBlue text="Upload Car" onClick={()=>{}} />
        </form>
    )
}