import API from 'api'

export default {

    // authentication status
    _authenticated: false,

    // Send a request to the login URL and save the returned JWT
    login(context, creds, redirect) {
        context.$http.post(API.url + '/login', creds, { emulateJSON: true }).then(
            data => {
                console.log('logged in', data);
                localStorage.setItem('token', data.body.token);

                this._authenticated = true;

                // Redirect to a specified route
                if (redirect) {
                    context.$router.push({ path: redirect });
                }
            }, response => {
                console.log('errors', response);
                context.errors = response;
            });
    },

    // To log out
    logout(context) {
        console.log('logging out');
        localStorage.removeItem('token');
        this._authenticated = false;
        context.$router.push({ path: '/login' });
    },

    getAuthHeader() {
        return 'JWT ' + localStorage.getItem('token')
    },
    checkAuthOrRedirect(context){
        this.checkAuth();
        if(this._authenticated == false){
            context.$router.push({ path: '/login' });
        }
        return true;
    },
    isAuthenticated(){
        this.checkAuth();
        return this._authenticated;
    },
    checkAuth() {
        var jwt = localStorage.getItem('token')
        if (jwt) {
            this._authenticated = true
        } else {
            this._authenticated = false
        }
    }
}