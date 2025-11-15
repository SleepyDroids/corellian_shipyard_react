import { useNavigate } from "react-router"


export default function Nav({ setInput }) {
let navigate = useNavigate()

function handleCatalogReturn() {
    navigate("/")
    setInput("")
}

    return (
        <ul>
            <li onClick={handleCatalogReturn}>Catalog</li>
            <li onClick={() => navigate("/cart")}>Cart</li>
        </ul>
    )
}