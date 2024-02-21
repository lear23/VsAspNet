// const toggleMenu = () => {
//     document.getElementById('menu').classList.toogle('hide');
//     document.getElementById('account-buttons').classList.toogle('hide');
// }

// const checkScreenSize = () => {
//     if (window.innerWidth >= 1200){
//         document.getElementById('menu').classList.remove('hide');
//         document.getElementById('account-buttons').classList.remove('hide');
//     }
//     else{
//         if (!document.getElementById('menu').classList.contains('hide')) { 
//              document.getElementById('menu').classList.add('hide');
//         }
//         if (!document.getElementById('account-buttons').classList.contains('hide')) { 
//             document.getElementById('account-buttons').classList.add('hide');
//        } 
        
//     }
// };

// window.addEventListener('resize', checkScreenSize);
// checkScreenSize();

document.addEventListener("DOMContentLoaded", function() {
    var avatar = document.getElementById("avatar");
    var avatarControls = document.getElementById("avatarControls");
    var profile = document.querySelector(".profile");
  
    avatar.addEventListener("click", function() {
      avatarControls.classList.toggle("show");
    });
  
    document.addEventListener("click", function(event) {
      if (!avatarControls.contains(event.target) && event.target !== avatar) {
        avatarControls.classList.remove("show");
      }
    });
  });
  



