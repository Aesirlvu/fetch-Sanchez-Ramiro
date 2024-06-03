const container = document.getElementById("container")
const url = "https://api.adviceslip.com/advice";
const procesarAPI = async (url) => {
  try {
    const respuesta = await fetch(url);

    // if (!respuesta.ok){
    //     throw new Error(`HTTP ERROR - STATUS: ${respuesta.status}`)
    // }

    const info = await respuesta.json();
    return info.slip.advice
  } catch (error) {
    console.log("Error.");
  }
};
procesarAPI(url)
    .then(advice =>{
        container.innerText = advice;
    })

