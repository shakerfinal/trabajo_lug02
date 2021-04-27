"use strict";
var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
const selectElement = document.querySelector('.ciudad');
var contenido = document.createElement('p');
var contenido2 = document.createElement('h4');
var contenido3 = document.createElement('h4');
var posts = null;
var posts2 = [];
var map;
const kelvin =273.15

selectElement.addEventListener('change', (event)=>{
  if (event.target.value == 'bo') {

boton.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/bogota')
  .then(info => info.json())
  .then(data => {

  posts = data;
  mostrarDatos(posts)
  })
  function mostrarDatos(posts) {
  posts.map((post, i) => {
    contenido.innerHTML = `
    <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
    <p>REGION: ${post.subregion}</p>
    <p>PAIS: ${post.name}</p>
    <p>CAPITAL: ${post.capital}</p>
    <p>AREA: ${post.area} kilometros cuadrados.</p>
    <p>POBLACION: ${post.population} Habitantes.</p>
    `
    contenedor.appendChild(contenido);
  })
}
  function clima() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
    .then(clima => clima.json())
    .then(data =>{

      let tempermax = data.main.temp_max
      let tempermin= data.main.temp_min
      let humedad= data.main.humidity
      let presion= data.main.pressure
      contenido2.innerHTML=
      `
    <hr>
    <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
    <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
    <p>Humedad: ${humedad} </p>
    <p>Presion del Aire: ${presion} </p>
    `
    contenedor.appendChild(contenido2);
    })
  }
  function Hora() {
    fetch('http://api.timezonedb.com/?zone=America/bogota&format=json&key=SRYWVMVUVQ9O')
    .then(Hora => Hora.json())
    .then(data =>{

      let actual = data.timestamp
      var lectura = new Date(actual*1000).toString()
      contenido3.innerHTML=
      `
    <hr>
    <p>Fecha: ${lectura} </p>
    `
    contenedor.appendChild(contenido3);
    })
  }
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 4.609, lng: -74.081},
    zoom: 8,
  });
  var marker = new google.maps.Marker({
    position: {lat: 4.609, lng: -74.081},
    map: map,
    tittle: 'Bogota'
  });
  clima();
  Hora();
});
}
  else if (event.target.value == 'bra') {

    boton.addEventListener('click', function initMap() {
      fetch('https://restcountries.eu/rest/v2/capital/brasilia')
      .then(data => data.json())
      .then(data => {
      posts = data;
      mostrarDatos(posts)
      })
      map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: -15.780, lng: -47.929},
        zoom: 6,
      });
      var marker = new google.maps.Marker({
        position: {lat: -15.780, lng: -47.929},
        map: map,
        tittle: 'Brasilia'
      });
      clima();
      Hora();
    });
    function mostrarDatos(posts) {
      posts.map((post, i) => {
        contenido.innerHTML = `
        <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
        <p>REGION: ${post.subregion} --</p>
        <p>PAIS: ${post.name}  </p>
        <p>CAPITAL: ${post.capital}  </p>
        <p>AREA: ${post.area} kilometros cuadrados. </p>
        <p>POBLACION: ${post.population} Habitantes  </p>
        `
        contenedor.appendChild(contenido);
      })
    }
    function clima() {
      fetch('http://api.openweathermap.org/data/2.5/weather?q=brasilia&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
      .then(clima => clima.json())
      .then(data =>{

        let tempermax = data.main.temp_max
        let tempermin= data.main.temp_min
        let humedad= data.main.humidity
        let presion= data.main.pressure
        contenido2.innerHTML=
        `
      <hr>
      <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
      <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
      <p>Humedad: ${humedad} </p>
      <p>Presion del Aire: ${presion} </p>
      `
      contenedor.appendChild(contenido2);
      })
    }
    function Hora() {
      fetch('http://api.timezonedb.com/?zone=America/Sao_Paulo&format=json&key=SRYWVMVUVQ9O')
      .then(Hora => Hora.json())
      .then(data =>{

        let actual = data.timestamp
        var lectura = new Date(actual*1000).toString()
        contenido3.innerHTML=
        `
      <hr>
      <p>Fecha: ${lectura} </p>
      `
      contenedor.appendChild(contenido3);
      })
    }
  }
    else if (event.target.value == 'car') {

      boton.addEventListener('click', function initMap() {
        fetch('https://restcountries.eu/rest/v2/capital/caracas')
        .then(info => info.json())
        .then(data => {
        posts = data;
        mostrarDatos(posts)
        })
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: 10.491, lng: -66.902},
          zoom: 6,
        });
        var marker = new google.maps.Marker({
          position: {lat: 10.491, lng: -66.902},
          map: map,
          tittle: 'Caracas'
        });
        clima();
        Hora();
      });
      function mostrarDatos(posts) {
        posts.map((post, i) => {
          contenido.innerHTML = `
          <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
          <p>REGION: ${post.subregion}</p>
          <p>PAIS: ${post.name}</p>
          <p>CAPITAL: ${post.capital}</p>
          <p>AREA: ${post.area} kilometros cuadrados.</p>
          <p>POBLACION: ${post.population} Habitantes</p>
          `
          contenedor.appendChild(contenido);
        })
      }
      function clima() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=caracas&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
        .then(clima => clima.json())
        .then(data =>{

          let tempermax = data.main.temp_max
          let tempermin= data.main.temp_min
          let humedad= data.main.humidity
          let presion= data.main.pressure
          contenido2.innerHTML=
          `
        <hr>
        <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
        <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
        <p>Humedad: ${humedad} </p>
        <p>Presion del Aire: ${presion} </p>
        `
        contenedor.appendChild(contenido2);
        })
      }
      function Hora() {
        fetch('http://api.timezonedb.com/?zone=America/Caracas&format=json&key=SRYWVMVUVQ9O')
        .then(Hora => Hora.json())
        .then(data =>{

          let actual = data.timestamp
          var lectura = new Date(actual*1000).toString()
          contenido3.innerHTML=
          `
        <hr>
        <p>Fecha: ${lectura} </p>
        `
        contenedor.appendChild(contenido3);
        })
      }
    }
      else if (event.target.value == 'ba') {

        boton.addEventListener('click', function initMap() {
          fetch('https://restcountries.eu/rest/v2/capital/buenos')
          .then(data => data.json())
          .then(data => {
          posts = data;
          mostrarDatos(posts)
          })
          map = new google.maps.Map(document.getElementById('map'),{
            center: {lat: -34.6083, lng: -58.3712},
            zoom: 6,
          });
          var marker = new google.maps.Marker({
            position: {lat: -34.6083, lng: -58.6083},
            map: map,
            tittle: 'Buenos Aires'
          });
          clima();
          Hora();
        });
        function mostrarDatos(posts) {
          posts.map((post, i) => {
            contenido.innerHTML = `
            <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
            <p>REGION: ${post.subregion}</p>
            <p>PAIS: ${post.name}</p>
            <p>CAPITAL: ${post.capital}</p>
            <p>AREA: ${post.area} kilometros cuadrados.</p>
            <p>POBLACION: ${post.population} habitantes.</p>
            `
            contenedor.appendChild(contenido);
          })
        }
        function clima() {
          fetch('http://api.openweathermap.org/data/2.5/weather?q=buenos&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
          .then(clima => clima.json())
          .then(data =>{

            let tempermax = data.main.temp_max
            let tempermin= data.main.temp_min
            let humedad= data.main.humidity
            let presion= data.main.pressure
            contenido2.innerHTML=
            `
          <hr>
          <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
          <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
          <p>Humedad: ${humedad} </p>
          <p>Presion del Aire: ${presion} </p>
          `
          contenedor.appendChild(contenido2);
          })
        }
        function Hora() {
          fetch('http://api.timezonedb.com/?zone=America/Argentina/Buenos_Aires&format=json&key=SRYWVMVUVQ9O')
          .then(Hora => Hora.json())
          .then(data =>{

            let actual = data.timestamp
            var lectura = new Date(actual*1000).toString()
            contenido3.innerHTML=
            `
          <hr>
          <p>Fecha: ${lectura} </p>
          `
          contenedor.appendChild(contenido3);
          })
        }
      }
        else if (event.target.value == 'suc') {

          boton.addEventListener('click', function initMap() {
            fetch('https://restcountries.eu/rest/v2/capital/sucre')
            .then(data => data.json())
            .then(data => {
            posts = data;
            mostrarDatos(posts)
            })
            map = new google.maps.Map(document.getElementById('map'),{
              center: {lat: -19.0429, lng: -65.2554},
              zoom: 6,
            });
            var marker = new google.maps.Marker({
              position: {lat: -19.0429, lng: -65.2554},
              map: map,
              tittle: 'Sucre'
            });
            clima();
            Hora();
          });
          function mostrarDatos(posts) {
            posts.map((post, i) => {
              contenido.innerHTML = `
              <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
              <p>REGION: ${post.subregion}</p>
              <p>PAIS: ${post.name}</p>
              <p>CAPITAL: ${post.capital}</p>
              <p>AREA: ${post.area} kilometros cuadrados.</p>
              <p>POBLACION: ${post.population} habitantes.</p>
              `
              contenedor.appendChild(contenido);
            })
          }
          function clima() {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=sucre&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
            .then(clima => clima.json())
            .then(data =>{

              let tempermax = data.main.temp_max
              let tempermin= data.main.temp_min
              let humedad= data.main.humidity
              let presion= data.main.pressure
              contenido2.innerHTML=
              `
            <hr>
            <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
            <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
            <p>Humedad: ${humedad} </p>
            <p>Presion del Aire: ${presion} </p>
            `
            contenedor.appendChild(contenido2);
            })
          }
          function Hora() {
            fetch('http://api.timezonedb.com/?zone=America/La_Paz&format=json&key=SRYWVMVUVQ9O')
            .then(Hora => Hora.json())
            .then(data =>{

              let actual = data.timestamp
              var lectura = new Date(actual*1000).toString()
              contenido3.innerHTML=
              `
            <hr>
            <p>Fecha: ${lectura} </p>
            `
            contenedor.appendChild(contenido3);
            })
          }

        }
          else if (event.target.value == 'san') {

            boton.addEventListener('click', function initMap() {
              fetch('https://restcountries.eu/rest/v2/capital/santiago')
              .then(data => data.json())
              .then(data => {
              posts = data;
              mostrarDatos(posts)
              })
              map = new google.maps.Map(document.getElementById('map'),{
                center: {lat: -33.4513, lng: -70.6653},
                zoom: 6,
              });
              var marker = new google.maps.Marker({
                position: {lat: -33.4513, lng: -70.6653},
                map: map,
                tittle: 'Santiago'
              });
              clima();
              Hora();
            });
            function mostrarDatos(posts) {
              posts.map((post, i) => {
                contenido.innerHTML = `
                <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
                <p>REGION: ${post.subregion}</p>
                <p>PAIS: ${post.name}</p>
                <p>CAPITAL: ${post.capital}</p>
                <p>AREA: ${post.area} kilometros cuadrados.</p>
                <p>POBLACION: ${post.population} habitantes.</p>
                `
                contenedor.appendChild(contenido);
              })
            }
            function clima() {
              fetch('http://api.openweathermap.org/data/2.5/weather?q=santiago&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
              .then(clima => clima.json())
              .then(data =>{

                let tempermax = data.main.temp_max
                let tempermin= data.main.temp_min
                let humedad= data.main.humidity
                let presion= data.main.pressure
                contenido2.innerHTML=
                `
              <hr>
              <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
              <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
              <p>Humedad: ${humedad} </p>
              <p>Presion del Aire: ${presion} </p>
              `
              contenedor.appendChild(contenido2);
              })
            }
            function Hora() {
              fetch('http://api.timezonedb.com/?zone=America/Santiago&format=json&key=SRYWVMVUVQ9O')
              .then(Hora => Hora.json())
              .then(data =>{

                let actual = data.timestamp
                var lectura = new Date(actual*1000).toString()
                contenido3.innerHTML=
                `
              <hr>
              <p>Fecha: ${lectura} </p>
              `
              contenedor.appendChild(contenido3);
              })
            }
          }
            else if (event.target.value == 'qui') {

              boton.addEventListener('click', function initMap() {
                fetch('https://restcountries.eu/rest/v2/capital/quito')
                .then(data => data.json())
                .then(data => {
                posts = data;
                mostrarDatos(posts)
                })
                map = new google.maps.Map(document.getElementById('map'),{
                  center: {lat: -0.225219, lng: -78.5248},
                  zoom: 6,
                });
                var marker = new google.maps.Marker({
                  position: {lat: -0.225219, lng: -78.5248},
                  map: map,
                  tittle: 'Quito'
                });
                clima();
                Hora();
              });
              function mostrarDatos(posts) {
                posts.map((post, i) => {
                  contenido.innerHTML = `
                  <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
                  <p>REGION: ${post.subregion}</p>
                  <p>PAIS: ${post.name}</p>
                  <p>CAPITAL: ${post.capital}</p>
                  <p>AREA: ${post.area} kilometros cuadrados.</p>
                  <p>POBLACION: ${post.population} habitantes.</p>
                  `
                  contenedor.appendChild(contenido);
                })
              }  function clima() {
                fetch('http://api.openweathermap.org/data/2.5/weather?q=quito&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
                .then(clima => clima.json())
                .then(data =>{

                  let tempermax = data.main.temp_max
                  let tempermin= data.main.temp_min
                  let humedad= data.main.humidity
                  let presion= data.main.pressure
                  contenido2.innerHTML=
                  `
                <hr>
                <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
                <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
                <p>Humedad: ${humedad} </p>
                <p>Presion del Aire: ${presion} </p>
                `
                contenedor.appendChild(contenido2);
                })
              }
              function Hora() {
                fetch('http://api.timezonedb.com/?zone=America/Guayaquil&format=json&key=SRYWVMVUVQ9O')
                .then(Hora => Hora.json())
                .then(data =>{

                  let actual = data.timestamp
                  var lectura = new Date(actual*1000).toString()
                  contenido3.innerHTML=
                  `
                <hr>
                <p>Fecha: ${lectura} </p>
                `
                contenedor.appendChild(contenido3);
                })
              }
            }
              else if (event.target.value == 'mon') {

                boton.addEventListener('click', function initMap() {
                  fetch('https://restcountries.eu/rest/v2/capital/montevideo')
                  .then(data => data.json())
                  .then(data => {
                  posts = data;
                  mostrarDatos(posts)
                  })
                  map = new google.maps.Map(document.getElementById('map'),{
                    center: {lat: -34.8833, lng: -56.1667},
                    zoom: 6,
                  });
                  var marker = new google.maps.Marker({
                    position: {lat: -34.8833, lng: -56.1667},
                    map: map,
                    tittle: 'Montevideo'
                  });
                  clima();
                  Hora();
                });
                function mostrarDatos(posts) {
                  posts.map((post, i) => {
                    contenido.innerHTML = `
                    <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
                    <p>REGION: ${post.subregion}</p>
                    <p>PAIS: ${post.name}</p>
                    <p>CAPITAL: ${post.capital}</p>
                    <p>AREA: ${post.area} kilometros cuadrados.</p>
                    <p>POBLACION: ${post.population} habitantes.</p>
                    `
                    contenedor.appendChild(contenido);
                  })
                }  function clima() {
                  fetch('http://api.openweathermap.org/data/2.5/weather?q=montevideo&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
                  .then(clima => clima.json())
                  .then(data =>{

                    let tempermax = data.main.temp_max
                    let tempermin= data.main.temp_min
                    let humedad= data.main.humidity
                    let presion= data.main.pressure
                    contenido2.innerHTML=
                    `
                  <hr>
                  <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
                  <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
                  <p>Humedad: ${humedad} </p>
                  <p>Presion del Aire: ${presion} </p>
                  `
                  contenedor.appendChild(contenido2);
                  })
                }
                function Hora() {
                  fetch('http://api.timezonedb.com/?zone=America/Montevideo&format=json&key=SRYWVMVUVQ9O')
                  .then(Hora => Hora.json())
                  .then(data =>{

                    let actual = data.timestamp
                    var lectura = new Date(actual*1000).toString()
                    contenido3.innerHTML=
                    `
                  <hr>
                  <p>Fecha: ${lectura} </p>
                  `
                  contenedor.appendChild(contenido3);
                  })
                }
              }
                else if (event.target.value == 'lim') {

                  boton.addEventListener('click', function initMap() {
                    fetch('https://restcountries.eu/rest/v2/capital/lima')
                    .then(data => data.json())
                    .then(data => {
                    posts = data;
                    mostrarDatos(posts)
                    })
                    map = new google.maps.Map(document.getElementById('map'),{
                      center: {lat: -12.0453, lng: -77.0311},
                      zoom: 6,
                    });
                    var marker = new google.maps.Marker({
                      position: {lat: -12.0453, lng: -77.0311},
                      map: map,
                      tittle: 'Lima'
                    });
                    clima();
                    Hora();
                  });
                  function mostrarDatos(posts) {
                    posts.map((post, i) => {
                      contenido.innerHTML = `
                      <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
                      <p>REGION: ${post.subregion}</p>
                      <p>PAIS: ${post.name}</p>
                      <p>CAPITAL: ${post.capital}</p>
                      <p>AREA: ${post.area} kilometros cuadrados.</p>
                      <p>POBLACION: ${post.population} habitantes.</p>
                      `
                      contenedor.appendChild(contenido);
                    })
                  }  function clima() {
                    fetch('http://api.openweathermap.org/data/2.5/weather?q=lima&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
                    .then(clima => clima.json())
                    .then(data =>{

                      let tempermax = data.main.temp_max
                      let tempermin= data.main.temp_min
                      let humedad= data.main.humidity
                      let presion= data.main.pressure
                      contenido2.innerHTML=
                      `
                    <hr>
                    <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
                    <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
                    <p>Humedad: ${humedad} </p>
                    <p>Presion del Aire: ${presion} </p>
                    `
                    contenedor.appendChild(contenido2);
                    })
                  }
                  function Hora() {
                    fetch('http://api.timezonedb.com/?zone=America/Lima&format=json&key=SRYWVMVUVQ9O')
                    .then(Hora => Hora.json())
                    .then(data =>{

                      let actual = data.timestamp
                      var lectura = new Date(actual*1000).toString()
                      contenido3.innerHTML=
                      `
                    <hr>
                    <p>Fecha: ${lectura} </p>
                    `
                    contenedor.appendChild(contenido3);
                    })
                  }
                }
                  else if (event.target.value == 'asu') {

                    boton.addEventListener('click', function initMap() {
                      fetch('https://restcountries.eu/rest/v2/capital/asuncion')
                      .then(data => data.json())
                      .then(data => {
                      posts = data;
                      mostrarDatos(posts)
                      })
                      map = new google.maps.Map(document.getElementById('map'),{
                        center: {lat: -25.2819, lng: -57.635},
                        zoom: 6,
                      });
                      var marker = new google.maps.Marker({
                        position: {lat: -25.2819, lng: -57.635},
                        map: map,
                        tittle: 'Asuncion'
                      });
                      clima();
                      Hora();
                    });
                    function mostrarDatos(posts) {
                      posts.map((post, i) => {
                        contenido.innerHTML = `
                        <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
                        <p>REGION: ${post.subregion}</p>
                        <p>PAIS: ${post.name}</p>
                        <p>CAPITAL: ${post.capital}</p>
                        <p>AREA: ${post.area} kilometros cuadrados.</p>
                        <p>POBLACION: ${post.population} habitantes.</p>
                        `
                        contenedor.appendChild(contenido);
                      })
                    }
                    function clima() {
                      fetch('http://api.openweathermap.org/data/2.5/weather?q=asuncion&appid=5ec1fbd4bfeab6cdb52c0ae147a5eb11')
                      .then(clima => clima.json())
                      .then(data =>{

                        let tempermax = data.main.temp_max
                        let tempermin= data.main.temp_min
                        let humedad= data.main.humidity
                        let presion= data.main.pressure
                        contenido2.innerHTML=
                        `
                      <hr>
                      <p>Temperatura Minima: ${tempermax-kelvin} °C </p>
                      <p>Temperatura Maxima: ${tempermin-kelvin} °C </p>
                      <p>Humedad: ${humedad} </p>
                      <p>Presion del Aire: ${presion} </p>
                      `
                      contenedor.appendChild(contenido2);
                      })
                    }
                    function Hora() {
                      fetch('http://api.timezonedb.com/?zone=America/asuncion&format=json&key=SRYWVMVUVQ9O')
                      .then(Hora => Hora.json())
                      .then(data =>{

                        let actual = data.timestamp
                        var lectura = new Date(actual*1000).toString()
                        contenido3.innerHTML=
                        `
                      <hr>
                      <p>Fecha: ${lectura} </p>
                      `
                      contenedor.appendChild(contenido3);
                      })
                    }
                  }
})


