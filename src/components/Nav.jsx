import { useNavigate } from "react-router"


export default function Nav() {
let navigate = useNavigate()

    return (
        <ul>
            <li onClick={() => navigate("/")}>Catalog</li>
            <li onClick={() => navigate("/cart")}>Cart</li>
        </ul>
    )
}