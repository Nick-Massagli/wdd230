const requestURL = 'https://raw.githubusercontent.com/Nick-Massagli/wdd230/main/scoots/data/price.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const types = jsonObject['type'];
    const tables = document.querySelector('.table');

    types.forEach(type => {
        let table = document.createElement('tr');
        let th = document.createElement('th');
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        th.textContent = `${type.name}`;
        td.textContent = `${type.maxpersons}`;
        td2.textContent = `${type.reshday}`;
        td3.textContent = `${type.resfday}`;
        td4.textContent = `${type.walkhday}`;
        td5.textContent = `${type.walkfday}`;
        table.append(th);
        table.append(td);
        table.append(td2);
        table.append(td3);
        table.append(td4);
        table.append(td5);
        tables.append(table);
    });
  });