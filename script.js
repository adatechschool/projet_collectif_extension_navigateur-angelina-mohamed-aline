const plat = ['biryani19.jpg', 'biryani21.jpg', 'biryani49.jpg', 'biryani70.jpg', 'burger2.jpg', 'burger35.jpg', 'burger62.jpg', 'burger78.jpg', 'butter-chicken12.jpg', 'butter-chicken16.jpg', 'dosa3.jpg', 'dosa10.jpg', 'dosa19.jpg', 'dosa34.jpg', 'pasta3.jpg', 'pasta7.jpg', 'pasta13.jpg', 'pasta14.jpg', 'pasta21.jpg', 'pasta26.jpg', 'pasta34.jpg', 'pizza4.jpg', 'pizza5.jpg', 'pizza7.jpg', 'pizza20.jpg', 'pizza22.jpg', 'pizza94.jpg', 'rice3.jpg', 'rice16.jpg', 'rice22.jpg', 'rice25.jpg', 'rice26.jpg', 'rice27.jpg', 'rice28.jpg', 'rice29.jpg', 'rice30.jpg', 'rice31.jpg', 'rice34.jpg'];
/*fonction pour relier la notification à l'heure et à la date de l'ordinateur*/
function AfficheNotification (hour, minute) {
    let now = new Date();
    let NotificationTime = new Date();
    notificationTime.setHours(hour);
    notificationTime.setMinutes(minute);
    notificationTime.setSeconds(0);

    if (notificationTime < now){
        notificationTime.setdate(notificationTime.getDate() +1);
    }
    let delay = notificationTime - now;
    if (Notification.permission !== "granted") {
        Notification.requestPermission();

    }
 setTimeout(function(){
    new Notification("Notification", { body: "It's time to eat !"
});
 }, delay);
}
AfficheNotification(12,30);