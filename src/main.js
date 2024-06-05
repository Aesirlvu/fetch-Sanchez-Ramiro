const container = document.getElementById("contenedor")
const container_2 = document.getElementById("contenedor_2")
const url = "https://picsum.photos/v2/list?page=2&limit=100"

const procesarAPI = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
    return data
  } catch (error) {
    console.error("Error.", error);
  }
}
const generarHTML = (start, end, data) => {
  let html = '';
  for (let i = start; i < end; i++) {
    let elUrl = data[i].download_url;
    html += `
    <div class="mb-5">
      <img src="${elUrl}" alt="imagen" width="500" height="500">
      <p>id: ${data[i].id}</p>
      <p>autor: ${data[i].author}</p>
    </div>`;
  }
  return html;
}

procesarAPI(url)
  .then(data => {
    const html1 = generarHTML(0, 25, data);
    const html2 = generarHTML(25, 50, data);
    container.innerHTML = html1;
    container_2.innerHTML = html2;
  });