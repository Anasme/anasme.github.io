particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": [
        "#0B1026",  // Navy très sombre
        "#152450",  // Bleu nuit
        "#233D7A",  // Bleu profond
        "#2F53A4",  // Bleu indigo
        "#5B86E5",  // Bleu clair (cohérent bg thème)
        "#7A5BD0",  // Indigo violacé
        "#9B59B6",  // Violet moyen
        "#C04DB2",  // Violet rosé
        "#E0569A",  // Rose soutenu
        "#FF6B9D"   // Rose vif
      ]
    },
    "shape": {
      "type": ["circle", "triangle", "polygon", "star"],
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.6,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 3.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1.2,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 160,
      "color": "#ffffff",
      "opacity": 0.35,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 400,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["grab", "bubble"]
      },
      "onclick": {
        "enable": true,
        "mode": ["push", "repulse"]
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 180,
        "line_linked": {
          "opacity": 0.35
        }
      },
      "bubble": {
        "distance": 200,
        "size": 6,
        "duration": 2,
        "opacity": 0.8,
        "speed": 2
      },
      "repulse": {
        "distance": 120,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Stats & compteur optionnels (désactivés par défaut pour garder l'UI propre)
var count_particles, stats, update;
if (window.Stats && document.querySelector('.js-count-particles')) {
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS && window.pJSDom[0].pJS.particles) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

