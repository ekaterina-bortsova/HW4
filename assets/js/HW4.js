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

/* Задание 2
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('#tabs ul li a');
  const tabContents = document.querySelectorAll('.tabs-content article');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();

      // Удаляем класс ui-tabs-active у всех табов
      tabs.forEach(t => t.parentElement.classList.remove('ui-tabs-active'));
      // Добавляем класс ui-tabs-active только к выбранному табу
      tab.parentElement.classList.add('ui-tabs-active');

      // Скрываем все блоки с контентом
      tabContents.forEach(content => content.style.display = 'none');
      // Показываем только выбранный блок с контентом
      tabContents[index].style.display = 'block';
    });
  });
});
*/
// Задание 2
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('#tabs ul li a');
  const tabContents = document.querySelectorAll('.tabs-content article');

  tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      // Удаляем класс 'ui-tabs-active' у всех вкладок
      tabs.forEach(function(t) {
        t.parentElement.classList.remove('ui-tabs-active');
      });

      // Добавляем класс 'ui-tabs-active' к выбранной вкладке
      tab.parentElement.classList.add('ui-tabs-active');

      // Скрываем все блоки с контентом
      tabContents.forEach(function(content) {
        content.style.display = 'none';
      });

      // Отображаем выбранный блок с контентом
      tabContents[index].style.display = 'block';
    });
  });
});



/* Задание 3
document.addEventListener('DOMContentLoaded', function() {
  // Устанавливаем дату дедлайна (31 декабря 2023 года)
  const deadline = new Date('December 31, 2023 23:59:59').getTime();

  const daysElement = document.querySelector('.days .value');
  const hoursElement = document.querySelector('.hours .value');
  const minutesElement = document.querySelector('.minutes .value');
  const secondsElement = document.querySelector('.seconds .value');

  // Обновляем отображение обратного отсчета каждую секунду
  const interval = setInterval(function() {
    const current = new Date().getTime();
    const remaining = deadline - current;

    // Рассчитываем значения для дней, часов, минут и секунд
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    // Обновляем отображение значений
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);

    // Проверяем, достигнут ли дедлайн
    if (remaining < 0) {
      clearInterval(interval);
      daysElement.textContent = '00';
      hoursElement.textContent = '00';
      minutesElement.textContent = '00';
      secondsElement.textContent = '00';
    }
  }, 1000);
});

// Функция для форматирования времени (добавление нуля перед значениями меньше 10)
function formatTime(time) {
  return time `10 ? 0${time} : time`
}
*/

// Задание 3
const deadline = '2023-12-31'

//const data = document.querySelector('.Days')

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24)

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector('.counter'),
      days = timer.querySelector('.days'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000)


    updateClock()

    function updateClock() {
      const t = getTimeRemaining(endtime)

      days.innerHTML = getZero(t.days)
      hours.innerHTML = getZero(t.hours)
      minutes.innerHTML = getZero(t.minutes)
      seconds.innerHTML = getZero(t.seconds)


      if (t.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }

  setClock('.timer', deadline )


// Задание 