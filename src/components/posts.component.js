import { Component } from '../core/component';
import { apiService } from '../services/api.service';
import { TransformService } from '../services/taransform.service';

export class PostsComponent extends Component {
    constructor(id) {
        super(id);
    }

    async onShow() {
        console.log('onShow');
        const fbData = await apiService.fetchPost();
        const posts = TransformService.fbObjectToArray(fbData);
        console.log('posts', posts);
    }
}
