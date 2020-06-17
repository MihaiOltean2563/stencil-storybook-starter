export declare class Icon {
    el: HTMLElement;
    iconEl: HTMLElement;
    /**
     * Can be one of the following classes declared in _icons.scss
     */
    type: string;
    /**
     * Determines whether the icon is wrapped in a circle
     */
    circle: boolean;
    /**
     * This component accepts a brand string or defaults to 'default' theme
     */
    theme: string;
    /**
     * This component accepts a variable string for a color class we already declared
     */
    color: string;
    /**
     * Value passed in Ems or breapoints (xxs, xs, sm, md, xl, xxl, xxxl) and if empty, defaults to 'lg (48px)'
     */
    size: string;
    sizeChanged(newValue: string, oldValue: string): void;
    isBreakpointString(bp: string): boolean;
    componentDidLoad(): void;
    /**
     *
     * the hostData is a built-in StencilJS fn that allows us to add css attributes based on tsx conditions.
     * Here it's used for adding the data-theme attribute for themed css variables
     */
    hostData(): {
        'data-theme': string;
    };
    render(): any[];
}
