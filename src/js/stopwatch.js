//state
let elapsedTime = { hh: 0, mm: 0, ss: 0, ms: 0 };
let watchState = 'reset';

const laps = (() => {
  const $laps = document.querySelector('.laps');

  const formatDigits = num => (num < 10 ? '0' + num : '' + num);

  const add = () => {
    const $lap = document.createElement('li');
    const {
      hh,
      mm,
      ss,
      ms
    } = elapsedTime;

    $lap.textContent = `${formatDigits(hh)}:${formatDigits(mm)}:${formatDigits(ss)}:${ms}`;
    $laps.appendChild($lap);
  };

  const remove = () => {
    $laps.innerHTML = '';
  };

  return {
    add,
    remove,
  };
})();

const timer = (() => {
  let timerId = null;
  let {
    hh,
    mm,
    ss,
    ms
  } = elapsedTime;
  return {
    start() {
      timerId = setInterval(() => {
        ms += 1;
        if (ms >= 100) {
          ss += 1;
          ms = 0;
        }
        if (ss >= 60) {
          mm += 1;
          ss = 0;
        }
        if (mm >= 60) {
          hh += 1;
          mm = 0;
        }
        elapsedTime = { hh, mm, ss, ms };
      }, 10);
    },
    stop() {
      clearInterval(timerId);
    },
    reset() {
      elapsedTime = {
        hh: 0,
        mm: 0,
        ss: 0,
        ms: 0
      };
    },
  };
})();

const renderButtons = (() => {
  const $buttons = document.querySelector('.buttons');

  const buttonsText = {
    reset: ['Start', 'Lap', 'Reset'],
    run: ['Stop', 'Lap', 'Reset'],
    pause: ['Start', 'Lap', 'Reset'],
  };

  return state => {
    $buttons.innerHTML = buttonsText[state].reduce(
      (acc, text) => acc + `<button class='button'>${text}</button>`,
      ''
    );
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  renderButtons(watchState);
});
