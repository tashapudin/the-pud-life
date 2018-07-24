export const defaultColors = [
    {
        primary: '#F8D6FF',
        secondary: 'rgba(144, 19, 254, 0.07)'
    },
    {
        primary: '#CAEDA6',
        secondary: 'rgba(65, 117, 5, 0.07)'
    }//,
    // {
    //     primary: '#F8D6FF',
    //     secondary: 'rgba(144, 19, 254, 0.07)'
    // },
    // {
    //     primary: '#F8D6FF',
    //     secondary: 'rgba(144, 19, 254, 0.07)'
    // },
    // {
    //     primary: '#F8D6FF',
    //     secondary: 'rgba(144, 19, 254, 0.07)'
    // }
];

export class ColorFactory {
    constructor(colors = []) {
        this.colors = colors;
        this.lastIndex = -1;
    }
    nextColor() {
        this.lastIndex = (this.lastIndex + 1) % this.colors.length ;
        return this.colors[this.lastIndex];
        
    }
}
