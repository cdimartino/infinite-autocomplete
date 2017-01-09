
/**
 * Input component interface
 * @author Islam Attrash
 */
export interface IInputComponent {
    /**
     * Input component template string
     * @default `<input />`
     */
    render():string;
}

/**
 * Input component constructor interface
 * @author Islam Attrash
 */
export interface IInputCompoenentConstructor {
    new():IInputComponent;
}