//табы
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
	item.addEventListener('click', function () {
		let tabs = item;
		tabHeaders.forEach(function(item){
			item.classList.remove('active');
		});
		tabs.classList.add('active');

      contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
      });

      const contentBox = document.querySelector('#' + this.dataset.tab);
      contentBox.classList.remove('hidden');
   })
});

//прокрутка
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
