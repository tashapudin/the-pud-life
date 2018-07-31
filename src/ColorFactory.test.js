import { ColorFactory } from "./ColorFactory";

it('test to get the next color', () => {
    const thing = new ColorFactory([
        {
            primary: '#FAE3FF',
            secondary: 'rgba(144, 19, 254, 0.07)',
            tertiary: '#C686D4',
        },
        {
            primary: '#D4EBBD',
            secondary: 'rgba(65, 117, 5, 0.07)',
            tertiary: '#64BE08',
        }
    ]);
    const colors = thing.nextColor();
    expect(colors.primary).toEqual('#FAE3FF');
    expect(colors.secondary).toEqual('rgba(144, 19, 254, 0.07)');
    expect(colors.tertiary).toEqual('#C686D4');

    const colors2 = thing.nextColor();
    expect(colors2.primary).toEqual('#D4EBBD');
    expect(colors2.secondary).toEqual('rgba(65, 117, 5, 0.07)');
    expect(colors2.tertiary).toEqual('#64BE08');

    const colors3 = thing.nextColor(); 
    expect(colors3.primary).toEqual('#FAE3FF');
    expect(colors3.secondary).toEqual('rgba(144, 19, 254, 0.07)');
    expect(colors3.tertiary).toEqual('#C686D4');
});


it('test empty color', () => {
    const thing = new ColorFactory([]);
    const colors = thing.nextColor();
    expect(colors).toEqual(undefined);


});

it('test undefined color', () => {
    const thing = new ColorFactory();
    const colors = thing.nextColor();
    expect(colors).toEqual(undefined);


});