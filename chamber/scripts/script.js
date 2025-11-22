const businesses = document.querySelector('#business-cards');
const gridButton = document.querySelector('#grid-button');
const listButton = document.querySelector('#list-button');

let businessData = [];
let currentView = 'grid';  // 'grid' or 'list'


async function loadBusinessData() {
    try {
        const response = await fetch('data/members.json', { cache: "no-store" });
        if (!resp.ok) throw new Error('Error getting members.json');
        businessData = await resp.json();
        renderBusinessCards(businessData);
    } catch (err) {
        businessContainer.innerHTML = `<p class="error"> Couldn't find business list. ${err.message}</p>`;
        console.error(err);
    }
}

const renderBusinessCards = (businessData) => {
    // build code
    businessData.forEach((business) => {
        let card = document.createElement('section');
        let fullName = document.createElement()
    })
}