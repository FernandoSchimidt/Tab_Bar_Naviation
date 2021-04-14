const tabs = document.querySelectorAll(".tab");
const name = document.querySelectorAll(".name");

tabs.forEach((clickedTab) => {
    clickedTab.addEventListener('click', () => {
        //remove a classe de todas as tabs
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        });

        //add a classe active para a tab clicada
        clickedTab.classList.add('active');
        const clickedTabBGColor = getComputedStyle(clickedTab).getPropertyValue(
            'color'
        )
        document.body.style.background = clickedTabBGColor
        document.getElementById('name').style.color = clickedTabBGColor
    });
});