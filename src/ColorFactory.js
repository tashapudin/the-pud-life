export const defaultColors = [
    {
        primary: '#FAE3FF',
        secondary: 'rgba(144, 19, 254, 0.07)',
        tertiary: '#C686D4',
    },
    {
        primary: '#D4EBBD',
        secondary: 'rgba(65, 117, 5, 0.07)',
        tertiary: '#64BE08',
    },
    {
        primary: '#FFE1B0',
        secondary: 'rgba(172, 107, 0, 0.07)',
        tertiary: '#F8BD5B',
    },
    {
        primary: '#E4DDFE',
        secondary: 'rgba(87, 0, 163, 0.07)',
        tertiary: '#AF9CF5',
    },
    {
        primary: '#FFF9AB',
        secondary: 'rgba(162, 150, 254, 0.07)',
        tertiary: '#FFEE00',
    }
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
