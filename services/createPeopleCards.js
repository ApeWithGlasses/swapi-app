export const createPeopleCards = (element, response) => {
    let card = '';

    response.map(person => {
            card += `<div class="card">
            <h4>${person.name}</h4>
            <img src="https://www.pngmart.com/files/12/Star-Wars-Kylo-Ren-PNG-Pic.png">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/634e5fa5-3672-4a97-961b-fd8789a1f486/deb6v5n-6036c409-9042-4ff7-90d2-435d3ee63b84.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYzNGU1ZmE1LTM2NzItNGE5Ny05NjFiLWZkODc4OWExZjQ4NlwvZGViNnY1bi02MDM2YzQwOS05MDQyLTRmZjctOTBkMi00MzVkM2VlNjNiODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DvhI50I1Ri3PRm74LKoF-2N1-Qb1EsL7jj_JBNwPHUc">
        </div>`;
    });

    element.innerHTML = card;
}