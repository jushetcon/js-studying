// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

let date1 = new Date(2012, 1, 20, 3, 12)
console.log(date1)

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате

function geetWeekDay(date) {
	let days = ['BC', 'ПН', 'ВТ', 'CP', 'ЧТ', 'ПТ', 'СБ']
	return days[date.getDay()]
}

console.log(geetWeekDay(date1))

// --------------

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {
	let day = date.getDay()
	if (day == 0) {
		day = 7
	}
	return day
}

// ------------

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

function getDateAgo(date, days) {
	date.setDate(date.getDate() - days)
	return date.getDate()
}

// -----------------

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0)
	return date.getDate()
}

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
	let now = new Date()
	let hour = now.getHours()
	let minutes = now.getMinutes()
	let seconds = now.getSeconds()
	let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds
	let totalSecondsInADay = 86400

	return totalSecondsInADay - totalSecondsToday
}
