class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/post.json', {
                method: 'post',
                body: JSON.stringify(post),
            });
            return useRequest(request);
        } catch (error) {
            console.log('error', error);
        }
    }

    async fetchPost() {
        try {
            const request = new Request(this.url + '/post.json');
            return useRequest(request);
        } catch (error) {
            console.log(error);
        }
    }
}

export const apiService = new ApiService(
    'https://blog-native-js.firebaseio.com'
);

async function useRequest(request) {
    const response = await fetch(request);
    return response.json();
}
