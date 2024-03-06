const baseURL = "https://nick-massagli.github.io/wdd230/";

const linksURL = "https://nick-massagli.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(weeks);
  }

  getLinks();

const displayLinks = (links) => {
    links.forEach((link) => {
        let list = document.createElement('ul');
        list.textContent = '${link.title}: ${link.url} |';
        list.append(list);
    });
}