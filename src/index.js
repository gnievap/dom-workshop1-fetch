/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//console.log('Happy hacking :) -^-^-^-')

const url = "https://platzi-avo.vercel.app/api/avo";

// Web API
// Conectarnos al server
window
    .fetch(url)
    // Procesar la respuesta y convertirla en JSON
    .then(respuesta => respuesta.json())
    //JSON -> Data -> Renderizar info browser
    .then( (responseJson) => {
        const todosLosItems = [];
        responseJson.data.forEach((item) => {
            //console.log(item.name);   
            // crear imagen
            const image = document.createElement('img');
            document.body.appendChild(image);
            // crear título
            const title = document.createElement("h2");
            document.body.appendChild(title);
            // crear precio
            const price = document.createElement("div");
            document.body.appendChild(price);

            const container = document.createElement('div');
            container.append(image, title, price);
            todosLosItems.push(container);
            // container.appendChild(image);
            // container.appendChild(title);
            // container.appendChild(price);
        });

        document.body.append(...todosLosItems);
        //console.log(data);
    })

