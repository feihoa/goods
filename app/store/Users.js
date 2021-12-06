Ext.define('Gds.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'Gds.model.User',
    data: [{
        name: 'admin',
        pass: 'padmin'
    }]
});