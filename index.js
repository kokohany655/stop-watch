const start = document.getElementById('start')
const end = document.getElementById('end')
const reset = document.getElementById('reset')
let second = document.querySelector('.second')
let minutes = document.querySelector('.minute')


function StopWatch(){
    let interval ,running;

    this.start= function(){
        if(running){
            prompt('do not click two time here again okay :(')
            throw new Error('sorry you can not start two time');
        }
        running = true
        interval = setInterval(()=>{
            second.textContent++
            if(second.textContent== 60){
                minutes.textContent++
                second.textContent= 00
            }
        }, 1000)
    },
    this.end = function(){
        if(!running){
            throw new Error('you can not stop two time');
        }
        running =false
        clearInterval(interval)
    }
        
    this.reset= function(){
        clearInterval(interval)
        second.textContent= '00'
        minutes.textContent='00'

    }
}
const newStopWatch = new StopWatch();
start.addEventListener('click', newStopWatch.start)
end.addEventListener('click' , newStopWatch.end)
reset.addEventListener('click' , newStopWatch.reset)


