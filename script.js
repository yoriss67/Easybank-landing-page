// const にする


const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');


// btnHamburger.addEventListener('click', function() {
//  btnHamburger.classList.toggle('open');
// //  overlay.classList.toggle('open');

//  if(header.classList.contains('open')) { //close
//     // overlay.classList.remove('fade-in')

//     // overlay.classList.add('fade-out')
//         overlay.classList.remove('fade-in');
//         overlay.classList.add('fade-out');
//  } else  { //open
//         overlay.classList.remove('fade-out');
//         overlay.classList.add('fade-in');
  
//  }
   
// });


// 同じとこのクラス名と追加のクラス
btnHamburger.addEventListener('click', function() {

   
    if(btnHamburger.classList.contains('open')) { //close
        body.classList.remove('noscroll');
        btnHamburger.classList.remove('open');　//🥰

        // .has-fadeはmultipkeだから
        // elementにして、overlayにもheader__menuにも効かせる
        // 👩‍🎓element parameter because it's looping through every element that has the has fade class
        fadeElems.forEach(function(element){
       element.classList.remove('fade-in');
       element.classList.add('fade-out');
    });

    } else { //open
        body.classList.add('noscroll');
        btnHamburger.classList.add('open');//🥰

        fadeElems.forEach(function(element){
       element.classList.remove('fade-out');
       element.classList.add('fade-in');


    });

    }
      
   });





   

// お手本
// const btnHamburger = document.querySelector('#btnHamburger');
// const body = document.querySelector('body');
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const fadeElems = document.querySelectorAll('.has-fade');

// btnHamburger.addEventListener('click', function(){
//   console.log('click hamburger');

//   if(header.classList.contains('open')){ // Close Hamburger Menu
//     body.classList.remove('noscroll');
//     header.classList.remove('open');    
//     fadeElems.forEach(function(element){
//       element.classList.remove('fade-in');
//       element.classList.add('fade-out');
//     });
    
//   }
//   else { // Open Hamburger Menu
//     body.classList.add('noscroll');
//     header.classList.add('open');
//     fadeElems.forEach(function(element){
//       element.classList.remove('fade-out');
//       element.classList.add('fade-in');
//     });

//   }  
// });