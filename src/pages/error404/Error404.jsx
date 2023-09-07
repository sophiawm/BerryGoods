import { useRouteError } from "react-router-dom"

const Error404 = () =>{
    const error = useRouteError()
    return (
        <div>
            <h3>{error.status} Ops!</h3>
            <p>{error.data}</p>
        </div>
    )
}

export default Error404