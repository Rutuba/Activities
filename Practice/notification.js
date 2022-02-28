Notification.requestPermission(function () {
    if (Notification.permission === 'granted') {
        // user approved.
        // use of new Notification(...) syntax will now be successful
    } else if (Notification.permission === 'denied') { // user denied.
    } else { // Notification.permission === 'default'
        // user didn’t make a decision.
        // You can’t send notifications until they grant permission.
    }
});