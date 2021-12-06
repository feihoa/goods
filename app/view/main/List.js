Ext.define('Gds.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    controller: 'main',

    requires: [
        'Gds.store.Goods'
    ],
   
    title: 'Список товаров',
    tbar: [{
        
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            emptyText: 'Введите фильтр...',
            name: 'id',
            fieldLabel: 'ID',
            listeners: {
                specialkey: 'idFilter'
            },

        },{
            xtype: 'textfield',
            emptyText: 'Введите фильтр...',
            name: 'description',
            fieldLabel: 'Описание',
            listeners: {
                specialkey: 'descriptionFilter'
            },


        }]
    }],

    store: {
        type: 'goods'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id', editor: 'textfield' },
        { text: 'Имя', dataIndex: 'name', flex: 1, editor: 'textfield' },
        { text: 'Описание', dataIndex: 'description', flex: 1, editor: 'textfield' },
        { text: 'Цена', dataIndex: 'price', flex: 1, editor: 'textfield' },
        { text: 'Кол-во', dataIndex: 'quantity', flex: 1, editor: 'textfield' }
    ],

    listeners: {
        // select: 'onItemSelected'
    },
    setModel : 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 1
    },
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: this.store,
        dock: 'bottom',
        displayInfo: true,
        beforePageText: 'Страница',
        afterPageText: 'из {0}',
        displayMsg: 'Пользователи {0} - {1} из {2}'
    }],

});
