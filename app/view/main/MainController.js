Ext.define('Gds.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    stores: {
        type: 'goods'
    },
    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('LoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
    handleAdd: function(){
        var tabPanel = this.getView();

        var tab = tabPanel.add({
            title: 'Товары',
            closable:true,
            items: [{
                xtype: 'mainlist',
                listeners: {
                itemclick: 'onlistClick'
            }
        }],
        })
        tabPanel.setActiveTab(tab);
    },
    onlistClick: function(e,target){
        Ext.create('Ext.window.Window', {
            title: 'Карточка товара ' + target.data.name,
            height: 300,
            width: 400,
            bodyPadding: 10,
            layout: 'fit',
            items: {
                xtype: 'form',
                reference: 'form',
                items: [{
                    xtype: 'displayfield',
                    name: 'id',
                    value: target.data.id,
                    fieldLabel: 'ID',
                }, {
                    xtype: 'hidden',
                    name: 'id',
                    value: target.data.id,
                    fieldLabel: 'ID',
                },{
                    xtype: 'displayfield',
                    name: 'description',
                    fieldLabel: 'Наименование',
                    value: target.data.description
                },{
                    xtype: 'hidden',
                    name: 'description',
                    value: target.data.description
                },{
                    xtype: 'hidden',
                    name: 'name',
                    value: target.data.name
                },{
                    xtype: 'numberfield',
                    name: 'price',
                    fieldLabel: 'Цена',
                    minValue: 0,
                    allowDecimals: true,
                    allowBlank: false,
                    value: target.data.price
                }, {
                    xtype: 'numberfield',
                    name: 'quantity',
                    fieldLabel: 'Кол-во',
                    minValue: 0,
                    allowBlank: false,
                    allowDecimals: false,
                    regex: /^[0-9]+$/,
                    decimalPrecision: 1,
                    value: target.data.quantity
                }],
                buttons: [{
                    text: 'Сохранить',
                    disabled: true,
                    formBind: true,
                    handler: function(){
                        var form = this.up('form');
                        store = e.up('mainlist').store;
                        i = form.getValues();
                        req = store.findRecord('id', i.id);

                        if(req.data.price != i.price || req.data.quantity != i.quantity){

                            Ext.Msg.confirm('Данные изменены', 'Сохранить изменения?',
                            function (choice) {
                                if (choice === 'yes') {

                                    store.clearFilter(true)
                                    
                                    store.remove(store.findRecord('id', i.id));
                                    store.add(i);

                                    // console.log(e.up('mainlist').store)
            
                                    this.up('window').close();
                                }else{
                                    this.up('window').close();
                                }}, this
                            );
                        }else{
                            this.up('window').close();
                        }
                    }

                },{
                    text: 'Отмена',
                    formBind: false,
                    handler: function(){
                        this.up('window').close();
                    }
                
                    
                }]
            }
        }).show();
    },
    idFilter: function (field, e) {
                if (field.getValue() != 'null') {
                    if (e.getKey() === e.ENTER || e.TAB) {
                        var form = field.up('form')
                        store = field.up('mainlist').store
                        store.filter('id', form.getValues().id)
                    }
                }
    },
    descriptionFilter: function (field, e) {
        if (field.getValue() != 'null') {
            if (e.getKey() === e.ENTER || e.TAB) {
                var form = field.up('form')
                store = field.up('mainlist').store
                store.filter('description', form.getValues().description)
            }
        }
    },

});
