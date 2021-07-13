let watchState = 'reset';
const elapsedTime = {hh:0, mm:0, ss:0, ms:0};

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
  };

  return { add };
})();

laps.add();

const renderButtons = (() => {
  const $buttons = document.querySelector('.buttons');

  const buttonsText = {
    reset: ['Start', 'Lap', 'Reset'],
    run: ['Stop', 'Lap', 'Reset'],
    pause: ['Start', 'Lap', 'Reset'],
  };

  return state => {
    $buttons.innerHTML = buttonsText[state].reduce(
      (acc, text) => acc + `<button class="button">${text}</button>`, ''
    );
  };
})();

document.addEventListener(
  'DOMContentLoaded',
  () => { renderButtons(watchState); }
);
