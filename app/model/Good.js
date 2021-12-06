Ext.define('Gds.model.Good', {

    extend: 'Ext.data.Model',

    fields: [
        'id', 'name', 'description', 'price', 'quantity'
    ],
    idProperty: 'threadid',
});