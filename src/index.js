/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//console.log('Happy hacking :) -^-^-^-')

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-En', {
        style: 'currency',
        currency: "USD",
    }).format(price)

    return newPrice;
}


// Web API
// Conectarnos al server
window
    .fetch(`${baseUrl}/api/avo`)
    // Procesar la respuesta y convertirla en JSON
    .then(respuesta => respuesta.json())
    //JSON -> Data -> Renderizar info browser
    .then( (responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
            //console.log(item.name);   
            // crear imagen
            const imagen = document.createElement("img");
            imagen.src = `${baseUrl}${item.image}`;
            //document.body.appendChild(image);

            // crear título
            const title = document.createElement("h2");
            title.textContent = item.name;
            //title.style = 'font-size: 2rem' Así se puede usar también
            //title.style.fontSize = "3rem"; Manipulando la propiedad fontSize
            // title.className = "muy-grande"; Así se pueden usar clases css
            // text-xl es una clase del framework tailwind
            title.className = "text-2xl text-red-600"; 
            //document.body.appendChild(title);

            // crear precio
            const price = document.createElement("div");
            price.className = "text-gray-600";
            price.textContent = formatPrice(item.price);
            //document.body.appendChild(price);

            // const container = document.createElement('div');
            // container.append(imagen, title, price); todosLosItems.push(container);
            // container.appendChild(image);
            // container.appendChild(title);
            // container.appendChild(price);
         // Creamos un contenedor el título y el precio
         
         const priceAndTitle = document.createElement("div")
         priceAndTitle.className = "text-center md:text-left";
         priceAndTitle.appendChild(title);
         priceAndTitle.appendChild(price);

         // Metemos todo dentro de una tarjeta contenedora
         const card = document.createElement("div");
         card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
         card.append(imagen, priceAndTitle);

        // Metemos todo dentro del contenedor principal
        const contenedor = document.createElement("div");
        contenedor.appendChild(card);
         
        todosLosItems.push(contenedor);
        
        });

       appNode.append(...todosLosItems);
        //console.log(data);
    })

