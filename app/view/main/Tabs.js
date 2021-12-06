Ext.define('Gds.view.main.Tabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabs',
    ui: 'navigation',
    alias: 'app.tabs', 
    controller: 'main',
    viewModel: 'main',
    
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        items: [{
            
            xtype: 'button',
            text: 'Товары',
            margin: '10 10',

            handler: 'handleAdd'
        },
        {
            xtype: 'button',
            text: 'Выход',
            margin: '10 0',
            handler: 'onClickButton'
        },
    ],
    }, 
    items:[{
        title: 'Товары',
            items: [{
                xtype: 'mainlist',
                
                listeners: {
                itemclick: 'onlistClick'
            }
        }]
    }]
});

