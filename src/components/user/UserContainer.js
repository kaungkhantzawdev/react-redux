import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/user/UserActions";
const UserContainer = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return ( 
        <>
            <h1> User </h1>
            { console.log( 'users',users.users )}
            { users && users.users.map((user) => (
                <h4>{ user.name }</h4>
            ))}
        </>
     );
}
 
export default UserContainer;