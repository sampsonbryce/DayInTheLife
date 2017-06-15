import API from 'api';

export default {
    createPost(context, title, content) {
        return context.$http.post(API.url + '/post', { title: title }, { emulateJSON: true });
    },
    updatePost(context, id, title, content) {
        let data = {
            title,
            content,
        }
        return context.$http.put(API.url + '/post/' + id, data, { emulateJSON: true });
    },
    getPost(context, id) {
        return context.$http.get(API.url + '/post/' + id);
    },
    getPosts(context) {
        return context.$http.get(API.url + '/post/list');
    },
    deletePost(context, id) {
        return context.$http.delete(API.url + '/post/' + id);
    }
}