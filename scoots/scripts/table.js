const requestURL = 'https://raw.githubusercontent.com/Nick-Massagli/wdd230/main/scoots/data/price.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const types = jsonObject['type'];
    const cards = document.querySelector('.table');

    types.forEach(type => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');

        h2.textContent = `${type.name}`;
        p.textContent = `Max Persons: ${type.maxpersons}`;
        p2.textContent = `Reservation Half Day Price: ${type.reshday}`;
        p3.textContent = `Reservation Full Day Price: ${type.resfday}`;
        p4.textContent = `Walk-In Half Day Price: ${type.walkhday}`;
        p5.textContent = `Walk-In Full Day Price: ${type.walkfday}`;
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(p3);
        card.append(p4);
        cards.append(card);
    });
  });