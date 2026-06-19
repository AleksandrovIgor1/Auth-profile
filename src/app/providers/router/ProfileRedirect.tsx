import { ROUTES } from '@/shared/config/routes'
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
                    ? ROUTES.PROFILE
                    : ROUTES.LOGIN
            }
            replace
        />
    )
}

export default ProfileRedirect