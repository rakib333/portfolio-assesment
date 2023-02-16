// filter the projects
document.getElementById('filter-btn').addEventListener('click', filterNames);
function filterNames() {
    // get the value of input
    const getInput = document.getElementById('filter-input').value;
    
    const searchItems = document.querySelectorAll('#filter-title');
    const cards = document.querySelectorAll('.card');
    searchItems.forEach((element, index) => {
        if (element.innerText.includes(getInput.toUpperCase())) {
            cards[index].classList.remove('hide');
        }
        else {
            cards[index].classList.add('hide');
        }
    })
}