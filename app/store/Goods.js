Ext.define('Gds.store.Goods', {
    extend: 'Ext.data.Store',
    storeId:'storeGds',
    autoLoad: true,
    model: 'Gds.model.Good',
    alias: 'store.goods',
    storeId: 'goods',
    remoteSort: true,
    pageSize: 2,
    
    data: [
        { id: 1, name: 'Notebook Lenovo', description: "Ноутбук ThinkPad T4", 
        price: 100, quantity: 2 },
        { id: 2, name: 'Keyboard OKLICK', description: "Клавиатура OKLICK", 
        price: 50, quantity: 8 },
        { id: 3, name: 'Network adapter', description: "Сетевой адаптер wi-fi", 
        price: 7, quantity: 0 },
    ],
 
    // proxy: {
    //     type: 'ajax',
    //     url: 'goods.json',
    //     reader: {
    //        type: 'json',
    //        rootProperty: 'records',
    //        totalProperty:  'recordCount',
    //        successProperty: 'success'
    //     }
    // }
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty:  3,
            successProperty: 'success'
        }
    }
});
