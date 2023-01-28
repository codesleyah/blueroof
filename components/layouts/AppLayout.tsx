import { type } from "os"
import Navbar from "../navbar/Navbar"

type LayoutProps = {
    children : any
}

const AppLayout = ({children} : LayoutProps) => {
    return(         
        <div className="px-4 md:px-64 py-12 items-center justify-center gap-8 flex flex-col">
            <Navbar />
            {children}
        </div>
    )
}

export default AppLayout