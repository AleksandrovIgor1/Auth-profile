import { useAppSelector } from '../store/hooks'
import { Navigate } from 'react-router-dom'

const ProfileRedirect = () => {
    const accessToken = useAppSelector(
        state => state.auth.accessToken
    )
    return (
        <Navigate
            to={
                accessToken
                    ? "/profile"
                    : "/login"
            }
            replace
        />
    )
}

export default ProfileRedirect