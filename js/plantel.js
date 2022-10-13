
let url = "https://patricialaura.github.io/CSyDTA_Plantel/jugadores.json"
let datos = [];
fetch(url)
    .then(response => response.json())
    .then(data => {  // data contiene el JSON
        console.log(data)
        datos = data.arreglo
        console.log(datos)   //  3 plantas


        let cad = `<div class="container">`

        for (producto of datos) {
            cad += `
        <div class="tarjeta">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="cuerpo">
                <h4>${producto.id} - ${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
            </div>
        </div>   
    `
        }


        cad += `</div>
         `

        console.log(cad)



        document.getElementById("tarjetas").innerHTML = cad;


    }
    );
