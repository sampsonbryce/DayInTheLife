import router from '../router';
import API from '../api'

export default {

    // authentication status
    authenticated: false,
    //Vue.http.headers.common['Authorization'] = auth.getAuthHeader();

    // Send a request to the login URL and save the returned JWT
    login(context, creds, redirect) {
        context.$http.post(API.url + '/login', creds, { emulateJSON: true }).then(
            data => {
                console.log('logged in', data);
                localStorage.setItem('token', data.body.token);

                this.authenticated = true;

                // Redirect to a specified route
                if (redirect) {
                    router.push({ path: redirect });
                }
            }, response => {
                console.log('errors', response);
                context.errors = response;
            });
    },

    // To log out
    logout() {
        localStorage.removeItem('token');
        this.authenticated = false;
        router.push({ path: '/login' });
    },

    getAuthHeader() {
        return 'JWT ' + localStorage.getItem('token')
    },

    checkAuth() {
        var jwt = localStorage.getItem('token')
        if (jwt) {
            this.authenticated = true
        } else {
            this.authenticated = false
        }
    }
}