import { Component } from '../core/component';
import { Form } from '../core/form';
import { Validators } from '../core/validators';
import { apiService } from '../services/api.service';

export class CreateComponent extends Component {
    constructor(id) {
        super(id);
        // this.form = null;
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this));
        this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(5)],
        });
    }
}

async function submitHandler(e) {
    e.preventDefault();

    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value(),
        };
        const data = await apiService.createPost(formData);
        console.log('data', data);
        alert('Запись создана в базе даных');
        this.form.clear();
    } else {
        console.warn('Fomrm is valid');
    }
}
