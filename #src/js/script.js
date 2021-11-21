document.addEventListener('DOMContentLoaded', () => {

	
	const indicatorCont = document.querySelector('#ind'),
		  tabs = document.querySelectorAll('.ind__tab'),
		  tabsContent = document.querySelectorAll('.ind__body'),
		  tabsParent = document.querySelector('.ind__tabs');

    const burgerBtn = document.querySelector('.burger__btn'),
	      burgerMenu = document.querySelector('.mob__menu');

	function indicatorBlockTabs() {
		


		function hideTabContent() {
			tabsContent.forEach(i => {
				i.classList.add('hide');
				i.classList.remove('show', 'fade');
			});

			tabs.forEach(i => {
				i.classList.remove('ind-active')
			})
		}

		function showTabContent(index = 0) {
			tabsContent[index].classList.add('show', 'fade');
			tabsContent[index].classList.remove('hide');
			tabs[index].classList.add('ind-active');
		}


		hideTabContent();
		showTabContent();

		tabsParent.addEventListener('click', (e) => {
			let target = e.target;

			if(target && target.classList.contains('ind__tab')) {
				tabs.forEach((item, index) => {
					if(target == item) {
						hideTabContent();
						showTabContent(index);
					}
				});
			}
		});
	}

	function burgerMenuAnim() {
		

		burgerBtn.addEventListener('click', () => {
			burgerBtn.classList.toggle('btn-open');
			burgerMenu.classList.toggle('menu-open');
		})
	}


	const popBtn = document.querySelector('.header__btn');
	const popClose = document.querySelector('.close');
	const popContent = document.querySelector('.feed');
	const popContentIn = document.querySelector('.feed__in');

	popBtn.addEventListener('click', (e) => {
		e.preventDefault();
		popContent.classList.add('feed-open');
	});

	popClose.addEventListener('click', () => {
		popContent.classList.remove('feed-open');
	})

	popContentIn.addEventListener('click', (e) => {
		let target = e.target;

		if(target && target.classList.contains('feed__in')) {
			popContent.classList.remove('feed-open');
		}
	})




	if(tabs) {
		indicatorBlockTabs();
	}

	if(burgerBtn) {
		burgerMenuAnim();
	}



});





