import { ColorFactory } from "./ColorFactory";

it('test to get the next color', () => {
    const thing = new ColorFactory([
        {
            primary: '#F8D6FF',
            secondary: 'rgba(144, 19, 254, 0.07)'
        },
        {
            primary: '#CAEDA6',
            secondary: 'rgba(65, 117, 5, 0.07)'
        }
    ]);
    const colors = thing.nextColor();
    expect(colors.primary).toEqual('#F8D6FF');
    expect(colors.secondary).toEqual('rgba(144, 19, 254, 0.07)');

    const colors2 = thing.nextColor();
    expect(colors2.primary).toEqual('#CAEDA6');
    expect(colors2.secondary).toEqual('rgba(65, 117, 5, 0.07)');

    const colors3 = thing.nextColor(); 
    expect(colors3.primary).toEqual('#F8D6FF');
    expect(colors3.secondary).toEqual('rgba(144, 19, 254, 0.07)');

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