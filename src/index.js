/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//console.log('Happy hacking :) -^-^-^-')

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

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
            //document.body.appendChild(title);

            // crear precio
            const price = document.createElement("div");
            price.textContent = item.price;
            //document.body.appendChild(price);

            const container = document.createElement('div');
            container.append(imagen, title, price);
            todosLosItems.push(container);
            // container.appendChild(image);
            // container.appendChild(title);
            // container.appendChild(price);
        });

       appNode.append(...todosLosItems);
        //console.log(data);
    })

