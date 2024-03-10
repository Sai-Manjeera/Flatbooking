const properties = [
    {
        type: '2BHK',
        image: 'https://th.bing.com/th/id/OIP.rvhgdpkSmBjCCUllBVGnaAHaFj?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        features: 'Spacious rooms, Modern amenities',
        floorPlan: 'Link to floor plan',
        price: '$1000/month',
        contact: 'John Doe - 123-456-7890',
        scheduleVisit: 'Link to schedule visit'
    },
    {
        type: '3BHK',
        image: 'https://th.bing.com/th/id/OIP.PyJwoYwTSuJYRAsiVfUCngHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        features: 'Spacious rooms, Modern amenities',
        floorPlan: 'Link to floor plan',
        price: '$1500/month',
        contact: 'Jane Smith - 987-654-3210',
        scheduleVisit: 'Link to schedule visit'
    },
    {
        type: 'Duplex',
        image: 'https://th.bing.com/th/id/OIP.oWMjh_8IL_ptfkcsXn36hgHaFj?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
        features: 'Two-story layout, Private terrace',
        floorPlan: 'Link to floor plan',
        price: '$2000/month',
        contact: 'Bob Johnson - 555-123-4567',
        scheduleVisit: 'Link to schedule visit'
    }
];

function generatePropertyCards() {
    const propertyListings = document.getElementById('property-listings');

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container');

        // Add a class based on the property type
        if (property.type === '2BHK') {
            detailsContainer.classList.add('two-bhk-details');
        } else if (property.type === '3BHK') {
            detailsContainer.classList.add('three-bhk-details'); 
        } else if (property.type === 'Duplex') {
            detailsContainer.classList.add('duplex-details'); 
        }

        detailsContainer.innerHTML = `
            <div class="property-details">
                <img src="${property.image}" alt="${property.type} Image" class="property-image" />
            </div>
            <div class="additional-details">
                <p>${property.type}</p>
                <p>${property.features}</p>
                <p>Floor Plan: <a href="${property.floorPlan}" target="_blank">View</a></p>
                <p>Price: ${property.price}</p>
                <p>Contact: ${property.contact}</p>
                <div class="schedule-visit" onclick="window.open('${property.scheduleVisit}', '_blank')">Schedule a Visit</div>
            </div>
        `;

        propertyCard.appendChild(detailsContainer);

        propertyListings.appendChild(propertyCard);
    });
}
function goToFlatInterface() {
    window.location.href = 'Flat.html'; 
}

window.onload = function () {
    generatePropertyCards();
};