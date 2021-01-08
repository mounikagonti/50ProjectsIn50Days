const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let number = 1


next.addEventListener('click', () => {
    number++

    if(number > circles.length) {
        number = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    number--
    if(number < 1) {
        number = 1
    }
    update()
})

const update = () => {
    circles.forEach((circle, index) => {
       if(index  < number) {
        circle.classList.add('active')
       } else{
        circle.classList.remove('active')
       }
    })
const activeClasses = document.querySelectorAll('.active')
progress.style.width = (activeClasses.length -1) / (circles.length-1) * 100 + "%"
if(number === 1) {
prev.disabled = true
} else if (number === circles.length){
next.disabled = true

} else{
prev.disabled = false
next.disabled = false

}
}

console.log(circles)