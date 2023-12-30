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