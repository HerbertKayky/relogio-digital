const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const clock = setInterval(function time() {
    let dateToday = new Date()
    let getHours = dateToday.getHours()
    let getMinutes = dateToday.getMinutes()
    let getSeconds = dateToday.getSeconds()

    if (getHours < 10) getHours = '0' + getHours

    if (getMinutes < 10) getMinutes = '0' + getMinutes

    if (getSeconds < 10) getSeconds = '0' + getSeconds

    hours.textContent = getHours
    minutes.textContent = getMinutes
    seconds.textContent = getSeconds
})


