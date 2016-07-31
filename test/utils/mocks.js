/// <reference path="../../lib/StateHoldr.d.ts" />
/// <reference path="../../typings/ItemsHoldr.d.ts" />
var mocks = {
    /**
     * @param [settings]   Settings for the StateHoldr.
     * @returns An StateHoldr instance.
     */
    mockStateHoldr: function (settings) {
        return new StateHoldr.StateHoldr(settings || {
            ItemsHolder: new ItemsHoldr.ItemsHoldr()
        });
    },
    /**
     * @param [settings]   Settings for the ItemsHoldr.
     * @returns An ItemsHoldr instance.
     */
    mockItemsHoldr: function (settings) {
        return new ItemsHoldr.ItemsHoldr(settings);
    },
    /**
     * @returns An example collection object.
     */
    mockCollection: function () {
        return {
            car: {
                color: "red"
            } };
    },
    /**
     * @returns A changed collection of mockCollection.
     */
    mockChangedCollection: function () {
        return {
            car: {
                color: "blue"
            } };
    }
};
