import { Outlet } from "react-router-dom"
import Banner from "../Banner/Index.jsx"

function PaginaPadrao() {
    return (
        <>
            <main>
                <Banner/>

                <Outlet/>
            </main>
        </>
    )
}

export default PaginaPadrao