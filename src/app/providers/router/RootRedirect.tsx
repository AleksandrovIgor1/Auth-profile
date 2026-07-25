import { ROUTES } from '@/shared/config/routes'
import { useAppSelector } from '../store/hooks'
import { Navigate } from 'react-router-dom'

const RootRedirect = () => {
    const { accessToken, authChecked } = useAppSelector(
        state => state.auth
    )

    if (!authChecked) {
        return <div>Loading...</div>
    }

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

export default RootRedirect