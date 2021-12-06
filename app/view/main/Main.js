Ext.define('Gds.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Gds.view.main.MainController',
        'Gds.view.main.MainModel',
        'Gds.view.main.Tabs',
        'Gds.view.main.List'
    ],
    
    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    items: [{
        xtype: 'tabs',
        flex: 1,
    },
        ]
    }

);
