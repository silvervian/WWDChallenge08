import ProgressBar from 'progressbar.js';
import menuMobile from './MenuMobile';

menuMobile();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

let bar1 = new ProgressBar.Circle(circle1, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f34739', width: 1 },
  to: { color: '#f34739', width: 4 },
  // Set default step function for all animate calls
  step(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 80);
    if (value === 50) {
      bar1.stop();
      circle.setText('50');
    } else {
      circle.setText(value);
    }
  }
});
bar1.text.style.fontFamily = '"Quicksand", Helvetica, sans-serif';
bar1.text.style.fontWeight = '700';
bar1.text.style.color = '#f34739';
bar1.text.style.fontSize = '7.2rem';

bar1.animate(1.0);

let bar2 = new ProgressBar.Circle(circle2, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#009989', width: 1 },
  to: { color: '#009989', width: 4 },
  // Set default step function for all animate calls
  step(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 50);
    if (value === 35) {
      bar2.stop();
      circle.setText('35');
    } else {
      circle.setText(value);
    }
  }
});
bar2.text.style.fontFamily = '"Quicksand", Helvetica, sans-serif';
bar2.text.style.color = '#009989';
bar2.text.style.fontWeight = '700';
bar2.text.style.fontSize = '7.2rem';

bar2.animate(1.0);

let bar3 = new ProgressBar.Circle(circle3, {
  color: '#152b3c',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#152b3c', width: 1 },
  to: { color: '#152b3c', width: 4 },
  // Set default step function for all animate calls
  step(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    if (value === 80) {
      bar3.stop();
      circle.setText('80');
    } else {
      circle.setText(value);
    }
  }
});
bar3.text.style.fontFamily = '"Quicksand", Helvetica, sans-serif';
bar3.text.style.color = '#152b3c';
bar3.text.style.fontWeight = '700';
bar3.text.style.fontSize = '7.2rem';

bar3.animate(1.0);
