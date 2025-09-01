
const ErrorPage = () => {

    document.title = "TEMPSTORE"

    return (
        <h1> 
            {
                error.message
            }
        </h1>
    )
}

export default ErrorPage;