import { getToken } from './storage'

export const isLoggedIn = () => {
    const token = getToken()
    if (token) {
        return true
    } else {
        return false
    }
}
