// -----MENU HAMBUR-------
// const nav = document.querySelector("#nav");
// const open = document.querySelector("#open");
// const close = document.querySelector("#close");

// open.addEventListener("click", () => {
//     nav.classList.add("visible");
//     open.style.display = "none"; 
//     close.style.display = "block"; 
// });

// close.addEventListener("click", () => {
//     nav.classList.remove("visible");
//     open.style.display = "block";
//     close.style.display = "none";
// });
// window.addEventListener("resize", () => {
//     if (window.innerWidth >= 992) { 
//         open.style.display = "none"; 
//         nav.classList.remove("visible"); 
//         close.style.display = "none"; 
//     } else {
//         open.style.display = "block"; 
//     }
// });



// ----CORS AND KEYS-------

// const handleSubmit = (e => {
//     e.preventDefault()

//     console.log(e.target['email'].value)


//     const json = JSON.stringify({email: e.target['email'].value})
//     fetch('https://localhost:7071/api/Subscriber',{
//         method:'post',
//         headers:{
//             'content.type': 'application/json'
//         },
//         body:json
//     })
//     .then(res => {
//         console.log(res)
//     })
// })


