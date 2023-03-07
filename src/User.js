import { useLocation, useParams } from "react-router-dom"



function User() {

    let { id } = useParams();

    let queryparams = useLocation();
    let queryParams = new URLSearchParams(queryparams.search);

    let category = queryParams.get('category');
    let posts = queryParams.get('posts');


    return (
        <>
            <h1>User id:{id}</h1>
            <h1>Category:{category}</h1>
            <h1>Posts:{posts}</h1>

        </>
    )


}



export default User