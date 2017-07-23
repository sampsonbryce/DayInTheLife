import API from 'api';

export default {
    createPost(context, title, content) {
        return context.$http.post(API.url + '/post', { title: title }, { emulateJSON: true });
    },
    updatePost(context, post) {
        return context.$http.put(API.url + '/post/' + post._id, post, { emulateJSON: true });
    },
    getPost(context, id, type) {
        if(type == 'private'){
            return context.$http.get(API.url + '/post/private/' + id);
        }else{
            return context.$http.get(API.url + '/post/' + id);
        }
    },
    getPosts(context, type) {
        if (type == 'private'){
            return context.$http.get(API.url + '/post/private/list');
        }else{
            return context.$http.get(API.url + '/post/list');
        }
    },
    deletePost(context, id) {
        return context.$http.delete(API.url + '/post/' + id);
    }
}