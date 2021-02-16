// DOM Elements
const time = document.querySelector('.time'),
  datee = document.querySelector('.datee'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

// Options
// const showAmPm = true;

// Show Date
function showDate() {
   let today = new Date(),
    day = today.getDay(),
    month = today.getMonth(),
    date = today.getDate();

   // Day
   let dayOut = '';
   if(day == 0) {
      dayOut = 'Sunday';
   } else if (day == 1) {
      dayOut = 'Monday';
   } else if (day == 2) {
      dayOut = 'Tuesday';
   } else if (day == 3) {
      dayOut = 'Wednesday';
   } else if (day == 4) {
      dayOut = 'Thursday';
   } else if (day == 5) {
      dayOut = 'Friday';
   } else if (day == 6) {
      dayOut = 'Saturday';
   }

   // Month
   let monthOut = '';
   if(month == 0) {
      monthOut = 'January';
   } else if (month == 1) {
      monthOut = 'February';
   } else if (month == 2) {
      monthOut = 'March';
   } else if (month == 3) {
      monthOut = 'April';
   } else if (month == 4) {
      monthOut = 'May';
   } else if (month == 5) {
      monthOut = 'June';
   } else if (month == 6) {
      monthOut = 'July';
   } else if (month == 7) {
      monthOut = 'August';
   } else if (month == 8) {
      monthOut = 'September';
   } else if (month == 9) {
      monthOut = 'October';
   } else if (month == 10) {
      monthOut = 'November';
   } else if (month == 11) {
      monthOut = 'December';
   }

  // Output Date
  datee.innerHTML = `${dayOut}<span>,</span> ${date} ${monthOut}`;

  setTimeout(showDate, 1000);
}
// Show Time
function showTime() {
   // var today = new Date(1995, 11, 17, 6, 24, 0);
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  // const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  // hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
   //  ${showAmPm ? amPm : ''}
  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

let random;
function getRandomInt(max) {
   return random = Math.floor(Math.random() * Math.floor(max));
}
getRandomInt(4);

if (random === 0) {
   // Set Background and Greeting
   function setBgGreet() { 
      // var today = new Date(1995, 11, 17, 6, 24, 0);
       let today = new Date(),
       hour = today.getHours(),
       min = today.getMinutes();
   
     if (hour < 1) {
       // Night
       document.body.style.backgroundImage = "url('./assets/images/my/01.jpg')";
       greeting.textContent = 'Good Night, ';
       document.body.style.color = 'white';
       function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 2) {
       // Night
       document.body.style.backgroundImage = "url('./assets/images/my/02.jpg')";
       greeting.textContent = 'Good Night, ';
       document.body.style.color = 'white';
       function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 3) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/my/03.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 4) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/my/04.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 5) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/my/05.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 6) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/my/06.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 7) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/my/07.jpg')";
      greeting.textContent = 'Good Morning, '; 
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 8) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/my/08.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 9) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/my/09.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 10) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/my/10.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 11) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/my/11.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/my/12.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 13) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/my/13.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', ];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 14) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/my/14.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 15) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/my/15.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 16) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/my/16.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 17) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/my/17.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/my/18.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 19) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/my/19.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 20) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/my/20.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 21) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/my/21.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 22) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/my/22.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 23) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/my/23.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 24) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/my/24.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/my/';
         const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     }
   }
   setBgGreet();
   
} else if (random === 1) {
   // Set Background and Greeting
   function setBgGreet() { 
      // var today = new Date(1995, 11, 17, 6, 24, 0);
       let today = new Date(),
       hour = today.getHours();
   
     if (hour < 1) {
       // Night
       document.body.style.backgroundImage = "url('./assets/images/1/01.jpg')";
       greeting.textContent = 'Good Night, ';
       document.body.style.color = 'white';
       function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 2) {
       // Night
       document.body.style.backgroundImage = "url('./assets/images/1/02.jpg')";
       greeting.textContent = 'Good Night, ';
       document.body.style.color = 'white';
       function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 3) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/1/03.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 4) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/1/04.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 5) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/1/05.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 6) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/1/06.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 7) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/1/07.jpg')";
      greeting.textContent = 'Good Morning, '; 
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 8) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/1/08.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 9) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/1/09.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 10) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/1/10.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 11) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/1/11.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/1/12.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 13) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/1/13.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', ];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 14) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/1/14.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 15) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/1/15.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 16) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/1/16.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 17) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/1/17.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/1/18.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 19) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/1/19.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 20) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/1/20.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 21) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/1/21.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 22) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/1/22.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 23) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/1/23.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 24) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/1/24.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/1/';
         const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     }
   }
   setBgGreet();
   
} else if (random === 2) {
   // Set Background and Greeting
   function setBgGreet() { 
      // var today = new Date(1995, 11, 17, 6, 24, 0);
       let today = new Date(),
       hour = today.getHours();
   
     if (hour < 1) {
       // Night
       document.body.style.backgroundImage = "url('./assets/images/2/01.jpg')";
       greeting.textContent = 'Good Night, ';
       document.body.style.color = 'white';
       function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 2) {
       // Night
       document.body.style.backgroundImage = "url('./assets/images/2/02.jpg')";
       greeting.textContent = 'Good Night, ';
       document.body.style.color = 'white';
       function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 3) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/2/03.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 4) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/2/04.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 5) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/2/05.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 6) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/2/06.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 7) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/2/07.jpg')";
      greeting.textContent = 'Good Morning, '; 
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 8) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/2/08.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 9) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/2/09.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 10) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/2/10.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 11) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/2/11.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/2/12.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 13) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/2/13.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', ];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 14) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/2/14.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 15) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/2/15.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 16) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/2/16.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 17) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/2/17.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/2/18.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 19) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/2/19.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 20) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/2/20.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 21) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/2/21.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 22) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/2/22.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 23) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/2/23.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 24) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/2/24.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/2/';
         const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     }
   }
   setBgGreet();

} else {
   // Set Background and Greeting
   function setBgGreet() { 
      // var today = new Date(1995, 11, 17, 6, 24, 0);
       let today = new Date(),
       hour = today.getHours();
   
     if (hour < 1) {
       // Night
       document.body.style.backgroundImage = "url('./assets/images/3/01.jpg')";
       greeting.textContent = 'Good Night, ';
       document.body.style.color = 'white';
       function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 2) {
       // Night
       document.body.style.backgroundImage = "url('./assets/images/3/02.jpg')";
       greeting.textContent = 'Good Night, ';
       document.body.style.color = 'white';
       function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 3) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/3/03.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 4) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/3/04.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 5) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/3/05.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 6) {
      // Night
      document.body.style.backgroundImage = "url('./assets/images/3/06.jpg')";
      greeting.textContent = 'Good Night, ';
      document.body.style.color = 'white';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 7) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/3/07.jpg')";
      greeting.textContent = 'Good Morning, '; 
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 8) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/3/08.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 9) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/3/09.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 10) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/3/10.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 11) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/3/11.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('./assets/images/3/12.jpg')";
      greeting.textContent = 'Good Morning, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 13) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/3/13.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', ];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 14) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/3/14.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 15) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/3/15.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 16) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/3/16.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 17) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/3/17.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('./assets/images/3/18.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
   
     } else if (hour < 19) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/3/19.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 20) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/3/20.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 21) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/3/21.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['22.jpg', '23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 22) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/3/22.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['23.jpg', '24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 23) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/3/23.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['24.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     } else if (hour < 24) {
      // Evening
      document.body.style.backgroundImage = "url('./assets/images/3/24.jpg')";
      greeting.textContent = 'Good Evening, ';
      function SwitchImg() {
         const base = 'https://raw.githubusercontent.com/Wolf-Den1994/img_momentum/main/3/';
         const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg'];
         let i = 0;
      
         function viewBgImage(data) {
         const body = document.querySelector('body');
         const src = data;
         const img = document.createElement('img');
         img.src = src;
         img.onload = () => {      
            body.style.backgroundImage = `url(${src})`;
         }; 
         }
         function getImage() {
         const index = i % images.length;
         const imageSrc = base + images[index];
         viewBgImage(imageSrc);
         i++;
         } 
         const btn = document.querySelector('.btn');
         btn.addEventListener('click', getImage);
      }
      SwitchImg();
     }
   }
   setBgGreet();

}
// console.log(random);

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
   if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.code === 'Enter') {
         if (name.textContent == '') {
            name.textContent = localStorage.getItem('name');
          }
         localStorage.setItem('name', e.target.innerText);
         name.blur();
      }
   } else if (name.textContent == '') {
      name.textContent = localStorage.getItem('name');
   } else {
    localStorage.setItem('name', e.target.innerText);
   }
}

name.addEventListener('click', () => {
   if(name.textContent == '[Enter Name]'){
      localStorage.setItem('name', '[Enter Name]');
   }
   name.innerText = '';
 });

// Get Focus
function getFocus() {

  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.code === 'Enter') {
      if (focus.textContent == '') {
         focus.textContent = localStorage.getItem('focus');
       } 
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else if (focus.textContent == '') {
   focus.textContent = localStorage.getItem('focus');
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

focus.addEventListener('click', () => {
   if(focus.textContent == '[Enter Focus]'){
      localStorage.setItem('focus', '[Enter Focus]');
   }  
   focus.innerText = '';
 });

// name.addEventListener('click', mouseSetName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
showDate();
getName();
getFocus();

