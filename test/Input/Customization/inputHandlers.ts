import { InputComponent } from '../../../src/Components/InfiniteAutocomplete';

export class inputHandlers extends InputComponent {
    
    constructor() {
        super();
    }

    render() {
        return `<input />`;
    }

    onInputChange(inputElement:HTMLInputElement, value:string) {
        
    }
}
