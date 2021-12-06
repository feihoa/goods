Ext.define('Gds.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    requires: [
        'Gds.store.Users'
    ],
    stores: {
        type: 'users'
    },
    onLoginClick: function(e) {
        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.
        var form = e.up('form').getValues()
        // Set the localStorage value to true
        if(form.username === 'admin' && form.password === 'padmin'){

        localStorage.setItem("LoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });
        }else{
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль', Ext.emptyFn);
        }
    }
});
