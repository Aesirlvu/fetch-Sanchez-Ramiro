# FETCH.

Este trabajo se realizó con el método nativo de JS FETCH(), donde el objetivo del trabajo era consumir una API y realizar traer (GET) la información de dicha API, convertir la respuesta a un JSON para su utilizar esos datos y mostrarlos en un HTML.
La API utilizada provee una lista con 100 elementos que contienen tanto id, nombre del autor, url de la imagen, etc.

## DESCRIPCION DEL CODIGO

1- Define dos contenedores HTML (container y container_2) obteniendo los elementos por su ID.

2- Define una URL que apunta a una API de imágenes.

3- Define una función asincrónica `procesarAPI` que toma una URL como argumento. Esta función intenta obtener datos de la URL proporcionada utilizando la función `fetch`. Luego, intenta convertir la respuesta en JSON y la devuelve. Si ocurre algún error durante este proceso, se registra en la consola.

4- Define una función `generarHTML` que toma tres argumentos: un índice de inicio, un índice de finalización y un conjunto de datos. Esta función genera una cadena HTML que contiene un div para cada elemento en el rango especificado de los datos. Cada div contiene una imagen y dos párrafos con el ID y el autor de la imagen.

5- Llama a la función `procesarAPI` con la URL definida anteriormente. Cuando la promesa devuelta por `procesarAPI` se resuelve, pasa los datos devueltos a la función `generarHTML` dos veces, con diferentes rangos de índices. Luego, asigna las cadenas HTML generadas al `innerHTML` de los dos contenedores.
