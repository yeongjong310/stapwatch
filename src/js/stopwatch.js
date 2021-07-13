let watchState = 'reset';


const renderButton = (() => {
  const $buttons = document.querySelector('.buttons');
  
  const buttonsText = {
    'reset': ['Start', 'Lap', 'Reset'],
    'run': ['Stop', 'Lap', 'Reset'],
    'pause': ['Start', 'Lap', 'Reset'],
  }

  return state => {
    $buttons.innerHTML = buttonsText[watchState].reduce((acc, text) => acc + `<button class="button">${text}</button>`, '');
  }
})();

document.addEventListener('DOMContentLoaded',
  () => {
    renderButton(watchState);
  }
);