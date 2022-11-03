const search = document.querySelector('.header-search');
const searchBtn = document.querySelector('.header-search__submit');
const searchField = document.querySelector('.header-search__field');
const adressBtn = document.querySelector('.open-adress__btn');
const openAdress = document.querySelector('.open-adress');

searchBtn.addEventListener('click', function(){
  searchField.classList.toggle('open');
  search.classList.toggle('visible');
})

adressBtn.addEventListener('click', function(){
  openAdress.classList.remove('visible');
})

ymaps.ready(init);
  function init(){
    let myMap = new ymaps.Map("map", {
      center: [55.759501, 37.608868],
      zoom: 13.2,
      controls: []
    });


  let myPlacemark = new ymaps.Placemark([55.770233, 37.636787], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/svg/placemark.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -7]
  });

  myMap.geoObjects.add(myPlacemark); 

  myPlacemark.events.add('mousemove', function(){
    openAdress.classList.add('visible');
  })
  }

    //Маска и валидация для инпутов

    new JustValidate('.about-form', {
      rules: {
        email: {
          required: true,
          email: true,
        }
      },
      messages: {
        email: 'Недопустимый формат'
      }});
  
    new JustValidate('.contact-form', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 10
        },
        email: {
          required: true,
          email: true,
        },
        comment: {
          required: true,
          minLength: 2,
          maxLength: 200
        }
      },
      messages: {
        name:'Недопустимый формат',
        email: 'Недопустимый формат',
        comment: 'Недопустимый формат'
      },
      submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);
    
        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              alert('Отправлено');
            }
          }
        }
    
        xhr.open('POST', './resources/mail.php', true);
        xhr.send(formData);
    
        thisForm.reset();
      }
    })