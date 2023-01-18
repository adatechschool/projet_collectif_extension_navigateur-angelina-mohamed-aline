
// const button = document.querySelector('button');
// const toast = document.querySelector('#notification');
// button.addEventListener("click", () => {
//   toast.classList.add("show");
//   setTimeout(() => {
//     toast.classList.remove("show");
//   }, 2000);
// });


 function AfficheNotification (hour, minute) {
    let now = new Date();
    let notificationTime = new Date();
    notificationTime.setHours(hour);
    notificationTime.setMinutes(minute);
    notificationTime.setSeconds(0);
    

     if (notificationTime < now){
        // notificationTime.setdate(notificationTime.getDate() +1);
      }
     let delay = notificationTime - now;
     if (Notification.permission !=="granted") {
         Notification.requestPermission();

    }
     setTimeout(function(){
     new Notification("Notification", { body: "C'EST L'HEURE DE MANGER!", icon : 'images-icon128.png', href:"https://www.ubereats.com/"
 });
 }, delay);

}
 AfficheNotification(17,07);
