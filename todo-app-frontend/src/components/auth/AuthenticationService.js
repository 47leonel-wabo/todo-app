class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticateUsername", username)
        sessionStorage.setItem("authenticatePassword", password)
    }

    logoutFreeData() {
        sessionStorage.removeItem('authenticateUsername')
        sessionStorage.removeItem('authenticatePassword')
    }

    isUserLogged() {
        let user = sessionStorage.getItem('authenticateUsername')
        if (user === null) return false
        return true
    }

    getLoginUsername() {
        return sessionStorage.getItem('authenticateUsername')
    }
}

export default new AuthenticationService()
