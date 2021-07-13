//state
let elapsedTime = {hh:0, mm:0, ss:0, ms:0};
let watchState = 'reset';

//DOM
const $watch = document.querySelector('.watch');

const formatElapsedTime = (() => {
    const format = n => (n < 10 ? '0' + n : n + '');
    return ({hh, mm, ss, ms}) => `${format(hh)}:${format(mm)}:${format(ss)}.${format(ms)}`;
})();

const renderElaspsedTime = (()=> {
    $watch.textContent = formatElapsedTime(elapsedTime);
})

const timer = (()=> {
    let timerId = null;
    let {hh, mm, ss, ms} = elapsedTime;
    return{
        start(){
            timerId = setInterval(() => {
                ms += 1;
                if(ms >= 100){
                    ss += 1;
                    ms = 0;
                }
                if(ss >= 60){
                    mm += 1;
                    ss = 0;
                }
                if(mm >= 60){
                    hh += 1;
                    mm = 0;
                }
                elapsedTime = {hh, mm, ss, ms};
            }, 10);
        },
        stop(){
            clearInterval(timerId);
        },
        reset(){
            elapsedTime = {hh:0, mm:0, ss:0, ms:0};
        }
    }    
})();

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