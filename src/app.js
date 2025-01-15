/*Desplegar el menú hamburguesa*/
document.getElementById("burgerMenu").addEventListener("click", function () {
    let navMenu = document.getElementById("navMenu");
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

/*Desplegar el menú del footer*/
document.getElementById("footerMenu").addEventListener("click", function () {
  let navFooter = document.getElementById("navFooter");
  let footerMenu = document.getElementById("footerMenu");
  navFooter.style.display = navFooter.style.display === "flex" ? "none" : "flex";
  footerMenu.textContent = navFooter.style.display === "flex" ? "Menos de la miniguía" : "Más de la miniguía";
});

/*Fondo estrellado*/
if (typeof particlesJS !== 'function') {
  console.log('Error al cargar particles.js');
} else {
  
  document.addEventListener("DOMContentLoaded", function () {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "star"
        },
        opacity: {
          value: 0.7,
          random: false,
          anim: {
            enable: true,
            speed: 1.25,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 0.2
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          }
        }
      }
    });
  });
}


/*AOS - Animaciones al hacer scroll*/
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

/*Leaflet - Ubicaciones en un mapa*/

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

/*Configuración del mapa con sus respectivas coordenadas*/

if (document.getElementById("map")) {


const map = L.map('map').setView([4.698565495824532, -74.02305236050358], 13); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/*Adición del marker personalizada*/

const locationIcon = L.icon({
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Marker_location.png?20190508151833',
  iconSize: [32, 32], 
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

/*Adición de los marcadores de todos los lugares listados en categoria.html*/
const marker1 = L.marker([4.602148068807307, -74.07199819059095], { icon: locationIcon }).addTo(map); 
marker1.bindPopup('Museo del Oro de Bogotá').openPopup();

const marker2 = L.marker([4.612444753576913, -74.0690817636053], { icon: locationIcon }).addTo(map); 
marker2.bindPopup('Planetario de Bogotá').openPopup();

const marker3 = L.marker([4.615843964259977, -74.06862866360522], { icon: locationIcon }).addTo(map); 
marker3.bindPopup('Museo Nacional de Colombia').openPopup();

const marker4 = L.marker([3.751969535965366, -74.41589459960917], { icon: locationIcon }).addTo(map); 
marker4.bindPopup('Páramo de Sumapaz').openPopup();

const marker5 = L.marker([4.669380264168608, -74.09744236881814], { icon: locationIcon }).addTo(map); 
marker5.bindPopup('Jardín Botánico de Bogotá').openPopup();

const marker6 = L.marker([4.6580360237822775, -74.09423069429081], { icon: locationIcon }).addTo(map); 
marker6.bindPopup('Parque Metropolitano Simón Bolívar').openPopup();

const marker7 = L.marker([4.613369088766133, -74.06704560593384], { icon: locationIcon }).addTo(map); 
marker7.bindPopup('Taller Manual del Cuero').openPopup();

const marker8 = L.marker([4.6251159245907205, -74.0679219636052], { icon: locationIcon }).addTo(map); 
marker8.bindPopup('Manifiesta').openPopup();

const marker9 = L.marker([4.59970894675651, -74.07818934826248], { icon: locationIcon }).addTo(map); 
marker9.bindPopup('Pasaje Rivas').openPopup();

const marker10 = L.marker([4.616010578696433, -74.084418393259], { icon: locationIcon }).addTo(map); 
marker10.bindPopup('Plaza de Mercado Paloquemao').openPopup();

const marker11 = L.marker([4.642698468032385, -74.06040857894803], { icon: locationIcon }).addTo(map); 
marker11.bindPopup('Restaurante Mini Mal').openPopup();

const marker12 = L.marker([4.653588138269378, -74.05521426088558], { icon: locationIcon }).addTo(map); 
marker12.bindPopup('Libertario Café').openPopup();
}