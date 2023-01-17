
 function AfficheNotification (hour, minute) {
    let now = new Date();
    let notificationTime = new Date();
    notificationTime.setHours(hour);
    notificationTime.setMinutes(minute);
    notificationTime.setSeconds(0);
    

     if (notificationTime < now){
         notificationTime.setdate(notificationTime.getDate() +1);
      }
     let delay = notificationTime - now;
     if (Notification.permission !=="granted") {
         Notification.requestPermission();

    }
     setTimeout(function(){
     new Notification("Notification", { body: "C'EST L'HEURE DE MANGER!", icon : 'images-icon128.png'
   
 });
 }, delay);

}
 
AfficheNotification(10,15);
