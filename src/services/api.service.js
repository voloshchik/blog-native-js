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
            const response = await fetch(request);

            return await request.json();
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const apiService = new ApiService(
    'https://blog-native-js.firebaseio.com'
);
