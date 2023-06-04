const server = "https://admin/api";

function readRows (api) {
    fetch(api + 'readAll',{
        method: 'get'
    }).then(function (request){
        if(request.ok){
            request.json().then(function (response){
                let data = [];
                if(response.status) {
                    data = response.dataset, null;
                } else {
                    Toast(4);
                }
            });
        }
    });
}

/*
*   Función para obtener los resultados de una búsqueda en los mantenimientos de tablas (operación search).
*
*   Parámetros: api (ruta del servidor para obtener los datos) y form (identificador del formulario de búsqueda).
*
*   Retorno: ninguno.
*/

function searchRows (api, form) {
    fetch(api + 'search', {
        method:'post',
        body: new FormData(document.getElementById(form))
    }).then(function (request){
        if(request.ok){
            request.json().then(function (response){
                
            });
        }
    }); 
}