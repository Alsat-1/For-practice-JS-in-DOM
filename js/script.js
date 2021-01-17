'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		chagedList = document.querySelector('.promo__interactive-list'),
		form = document.querySelector('form.add'),
		input = form.querySelector('.adding__input'),
		checkbox = form.querySelector('[type="checkbox"]')

	const deleteAdv = (arr) => {
		arr.forEach(element => element.remove())
	}

	const makeChanges = () => {
		genre.textContent = 'ДРАМА'

		poster.style.backgroundImage = 'url("img/bg.jpg")'
	}

	const sortArr = (arr) => {
		arr.sort()
	}

	function createMovieList(films, parent) {
		parent.innerHTML = ''
		sortArr(films)

		films.forEach((elem, number) => {
			parent.innerHTML +=
				`<li class="promo__interactive-item">${number + 1} ${elem}
				<div class="delete"></div>
			</li>`
		})

		document.querySelectorAll('.delete').forEach((elem, number) => {
			elem.addEventListener('click', () => {
				elem.parentElement.remove()
				movieDB.movies.splice(number, 1)

				createMovieList(films, parent)
			})
		})
	}

	form.addEventListener('submit', e => {
		e.preventDefault()

		let newMovie = input.value
		const favorite = checkbox.checked

		if (favorite) console.log('make favorite')

		if (newMovie) {
			if (newMovie.length > 21) {
				newMovie = newMovie.slice(0, 21).concat('...')
			}

			movieDB.movies.push(newMovie)
			sortArr(movieDB.movies)

			createMovieList(movieDB.movies, chagedList)
		}

		form.reset() // метод очистки формы
	})

	deleteAdv(adv)
	makeChanges()
	createMovieList(movieDB.movies, chagedList)

})