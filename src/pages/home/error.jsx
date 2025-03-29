import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
        <div>
            <h1>404 error</h1>
            <Link className="bg-[#efac38] "to="/">Go Back To Home </Link>
        </div>
    )
}