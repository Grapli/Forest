const hamburger = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')
const msgStatus = document.querySelector('.msg-status')
const menuItems = document.querySelectorAll('.nav-desktop__link')
const burgerItems = document.querySelectorAll('.nav-mobile__link')
const scrollSpySections = document.querySelectorAll('.section')

const HandleNavMobile = () => {
	navMobile.classList.toggle('nav-mobile--active')
}
burgerItems.forEach(item =>
	item.addEventListener('click', () => {
		navMobile.classList.remove('nav-mobile--active')
	})
)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

//SCROLL SPY
const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []
		scrollSpySections.forEach(section => {
			// console.log(window.scrollY);
			// wartość scrolla
			// console.log(section.offsetTop)
			// odległość danej sekcji od górnej krawędzi przeglądarki
			// console.log(section.offsetHeight)
			// wysokość każdej z sekcji

			if (window.scrollY <= section.offsetTop + section.offsetHeight - 72) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				menuItems.forEach(item => item.classList.remove('active-scroll'))

				activeSection.classList.add('active-scroll')
			}
		})
	}
}

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success')
	msgStatus.textContent = 'Wiadomośc wysłana'

	setTimeout(() => {
		msgStatus.classList.remove('success')
	}, 3000)
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error')
	msgStatus.textContent = 'Wystąpił błąd'

	setTimeout(() => {
		msgStatus.classList.remove('error')
	}, 3000)
}

handleCurrentYear()
hamburger.addEventListener('click', HandleNavMobile)
window.addEventListener('scroll', handleScrollSpy)
