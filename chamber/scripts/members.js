const requestURL = 'https://raw.githubusercontent.com/Nick-Massagli/wdd230/main/chamber/data/members.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const members = jsonObject['type'];
    const cards = document.querySelector('.table');

    members.forEach(member => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p')

        h2.textContent = `${member.name}`;
        p.textContent = `Address: ${member.address}`;
        p2.textContent = `Phone Number(s): ${member.phone}`;
        p3.textContent = `URL: ${member.url}`;
        p4.textContent = `Membership Level: ${member.membership}`;
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(p3);
        card.append(p4);
        cards.append(card);
    });
  });