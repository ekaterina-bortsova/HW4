// Задание 1 

document.addEventListener('DOMContentLoaded', function() {
  const featuresContent = document.querySelectorAll('.features-content')

  featuresContent.forEach(content => {
    const contentShow = content.querySelector('.content-show')
    const contentHide = content.querySelector('.content-hide')

    content.addEventListener('mouseover', function() {
      contentHide.style.display = 'block'
      content.style.width = '450px' 
      content.style.height = '250px'
    })

    content.addEventListener('mouseout', function() {
      contentHide.style.display = 'none'
      content.style.width = '350px'
      content.style.height = '105px'
    })
  })
})

// Задание 2
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('#tabs ul li a');
  const tabContents = document.querySelectorAll('.tabs-content article');

  tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      tabs.forEach(function(t) {
        t.parentElement.classList.remove('ui-tabs-active');
      });

      tab.parentElement.classList.add('ui-tabs-active');

      tabContents.forEach(function(content) {
        content.style.display = 'none';
      });

      tabContents[index].style.display = 'block';
    });
  });
});

// Задание 3

document.addEventListener('DOMContentLoaded', function () {
  const daysElement = document.querySelector('.days .value');
  const hoursElement = document.querySelector('.hours .value');
  const minutesElement = document.querySelector('.minutes .value');
  const secondsElement = document.querySelector('.seconds .value');

  function updateCounter() {
      const currentTime = new Date().getTime();
      const deadline = new Date('December 31, 2023 23:59:59').getTime();
      const remaining = deadline - currentTime;

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      daysElement.textContent = formatTime(days);
      hoursElement.textContent = formatTime(hours);
      minutesElement.textContent = formatTime(minutes);
      secondsElement.textContent = formatTime(seconds);

      if (remaining <= 0) {
        clearInterval(interval);
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
      } else {
          requestAnimationFrame(updateCounter);
      }
  }

  function formatTime(time) {
      return time < 10 ? '0' + time : time;
  }

  updateCounter(); 
});

// Задание 4
const coursesMass = [
  {
    cardImg: {
      src: 'assets/images/courses-01.jpg',
      alt: 'Course #1',
    },
    header: 'Digital Marketing',
    descr:
      'You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-01.png',
      alt: 'Author #1',
    },
  },
  {
    cardImg: {
      src: 'ssets/images/courses-02.jpg',
      alt: 'Course #2',
    },
    header: 'Business World',
    descr:
      'Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.',
    authorImg: {
      src: 'assets/images/author-02.png',
      alt: 'Author #2',
    },
  },
  {
    cardImg: {
      src: 'ssets/images/courses-03.jpg',
      alt: 'Course #3',
    },
    header: 'Media Technology',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec.',
    authorImg: {
      src: 'assets/images/author-03.png',
      alt: 'Author #3',
    },
  },
  {
    cardImg: {
      src: 'ssets/images/courses-04.jpg',
      alt: 'Course #4',
    },
    header: 'Communications',
    descr:
      'Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-04.png',
      alt: 'Author #4',
    },
  },
  {
    cardImg: {
      src: 'ssets/images/courses-05.jpg',
      alt: 'Course #5',
    },
    header: 'Business Ethics',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.',
    authorImg: {
      src: 'assets/images/author-05.png',
      alt: 'Author #5',
    },
  },
]

 const coursesContainer = document.getElementById('coursesContainer');
 
 coursesMass.forEach(course => {
   const courseElement = document.createElement('div');
   courseElement.classList.add('carousel__item');
   courseElement.innerHTML = `
     <img src="${course.cardImg.src}" alt="${course.cardImg.alt}">
     <div class="carousel__content">
       <h4>${course.header}</h4>
       <p>${course.descr}</p>
       <div class="item__last-row">
         <img src="${course.authorImg.src}" alt="${course.authorImg.alt}">
         <div class="text-button-pay">
           <a href="#">Pay <i class="fa fa-angle-double-right"></i></a>
         </div>
       </div>
     </div>
   `;
   coursesContainer.appendChild(courseElement);
 });