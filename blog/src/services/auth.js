import API from 'api'

export default {
    data() {
        return {
            authenticated: false
        }
    },
    methods: {
        login(context, creds, redirect) {
            context.$http.post(API.url + '/login', creds, { emulateJSON: true }).then(
                data => {
                    console.log('logged in', data);
                    localStorage.setItem('token', data.body.token);

                    this.authenticated = true;

                    // Redirect to a specified route
                    if (redirect) {
                        context.$router.push({ path: redirect });
                    }
                    console.log('in auth mixin, authenticated?', this.authenticated);
                }, response => {
                    console.log('errors', response);
                    context.errors = response;
                });
        },

        // To log out
        logout(context) {
            localStorage.removeItem('token');
            this.authenticated = false;
            context.$router.push({ path: '/login' });
        },

        getAuthHeader() {
            return 'JWT ' + localStorage.getItem('token')
        },
        checkAuthOrRedirect(context) {
            this.checkAuth();
            if (this.authenticated == false) {
                context.$router.push({ path: '/login' });
            }
            return true;
        },
        isAuthenticated() {
            this.checkAuth();
            return this.authenticated;
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
}

// export default {

//     // authentication status
//     _authenticated: false,

//     // Send a request to the login URL and save the returned JWT
//     login(context, creds, redirect) {
//         context.$http.post(API.url + '/login', creds, { emulateJSON: true }).then(
//             data => {
//                 console.log('logged in', data);
//                 localStorage.setItem('token', data.body.token);

//                 this._authenticated = true;

//                 // Redirect to a specified route
//                 if (redirect) {
//                     context.$router.push({ path: redirect });
//                 }
//             }, response => {
//                 console.log('errors', response);
//                 context.errors = response;
//             });
//     },

//     // To log out
//     logout(context) {
//         localStorage.removeItem('token');
//         this._authenticated = false;
//         context.$router.push({ path: '/login' });
//     },

//     getAuthHeader() {
//         return 'JWT ' + localStorage.getItem('token')
//     },
//     checkAuthOrRedirect(context){
//         this.checkAuth();
//         if(this._authenticated == false){
//             context.$router.push({ path: '/login' });
//         }
//         return true;
//     },
//     isAuthenticated(){
//         this.checkAuth();
//         return this._authenticated;
//     },
//     checkAuth() {
//         var jwt = localStorage.getItem('token')
//         if (jwt) {
//             this._authenticated = true
//         } else {
//             this._authenticated = false
//         }
//     }
// }