/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Gds.Application', {
    extend: 'Ext.app.Application',

    name: 'Gds',
    requires: [
        'Gds.view.main.Main',
        'Gds.view.login.Login'
    ],
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        'Users'
        // TODO: add global / shared stores here
    ],

    launch: function () {

        var loggedIn;

        loggedIn = localStorage.getItem("LoggedIn");

        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
