class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticateUsername", username)
        sessionStorage.setItem("authenticatePassword", password)
    }

    logoutFreeData() {
        sessionStorage.removeItem('authenticateUsername')
        sessionStorage.removeItem('authenticatePassword')
    }
}

export default new AuthenticationService()
