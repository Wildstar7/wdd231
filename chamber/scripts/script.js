// const businesses = document.querySelector('#business-cards');
// const gridButton = document.querySelector('#grid-button');
// const listButton = document.querySelector('#list-button');

// let businessData = [];
// let currentView = 'grid';  // 'grid' or 'list'


// async function loadBusinessData() {
//     try {
//         const response = await fetch('data/members.json', { cache: "no-store" });
//         if (!response.ok) throw new Error('Error getting members.json');
//         businessData = await resp.json();
//         renderBusinessCards(businessData);
//     } catch (err) {
//         businessContainer.innerHTML = `<p class="error"> Couldn't find business list. ${err.message}</p>`;
//         console.error(err);
//     }
// }

// const renderBusinessCards = (businessData) => {
//     // build code
//     businessData.forEach((business) => {
//         let card = document.createElement('section');
//         let fullName = document.createElement()
//     })
// }


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.header-nav');

    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked');
        mainNav.classList.toggle('show');
    });
});


const businesses = document.querySelector('#business-cards');
let businessData = [];
let currentView = 'grid';  // 'grid' or 'list'

async function loadBusinessData() {
    try {
        const response = await fetch('data/members.json', { cache: "no-store" });
        if (!response.ok) throw new Error('Error getting members.json');
        const data = await response.json();
        businessData = data.members; // Adjust to access members array
        renderBusinessCards(businessData);
    } catch (err) {
        businesses.innerHTML = `<p class="error">Couldn't find business list. ${err.message}</p>`;
        console.error(err);
    }
}

const renderBusinessCards = (businessData) => {
    businesses.innerHTML = ''; // Clear previous cards
    businessData.forEach((business) => {
        let card = document.createElement('section');

        // Create content elements
        let title = document.createElement('h2');
        title.textContent = business.name;

        let address = document.createElement('p');
        address.textContent = business.address;

        let phone = document.createElement('p');
        phone.textContent = `Phone: ${business.phone}`;

        let website = document.createElement('a');
        website.href = business.website;
        website.textContent = 'Visit Website';
        website.target = '_blank'; // Open link in new tab

        let description = document.createElement('p');
        description.textContent = business.description;

        // Image handling
        let img = document.createElement('img');
        img.src = `images/${business.image}`; // Assumes images are in the images folder
        img.alt = `${business.name} logo`;

        // Append elements to card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(description);
        
        // Add card to the container
        businesses.appendChild(card);
    });
}

// Call the load function when script loads
loadBusinessData();
