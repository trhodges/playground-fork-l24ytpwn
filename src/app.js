import { LightningElement, api } from 'lwc';

export default class PdcInput extends LightningElement {

    @api text = '';
    type = 'text';
    label = 'test';
    placeholder = 'test placeholder';
    @api note = 'test notes';

    handleChange(event) {
        this.text = event.target.value;
    }
}