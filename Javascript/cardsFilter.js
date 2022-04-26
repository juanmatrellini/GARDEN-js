const productFilter = document.getElementById("productFilter");
const filter = document.getElementById("filter");

/*TARJETAS PRODUCTOS*/

const pintarGin = () => {
    let filtroGin = arrayProducts.filter (elem => elem.tipo == "gin");

    filtroGin.forEach((producto) => {

        cards.innerHTML += `
        <div class="col-12 mb-2 col-sm-6 col-md-4 col-lg-3">
                    <div class="card">                      
                      <div class="card-body">
                      <img class="card-img-top" src="${producto.file}" alt="" />
                        <h5>${producto.title}</h5>
                        <div class="pruebaprecio">
                        <h6>$</h6>
                        <p>${producto.precio}</p>  
                        </div>
                        <button data-id= ${producto.id} class="btn btn-dark">Agregar al carrito</button>
                      </div>
                    </div>
                  </div>`;
        })
    }

const pintarMini = () => {
    let filtroMini = arrayProducts.filter (elem => elem.tipo == "minibox");

    filtroMini.forEach((producto) => {
        cards.innerHTML += `
        <div class="col-12 mb-2 col-sm-6 col-md-4 col-lg-3">
                    <div class="card">                      
                      <div class="card-body">
                      <img class="card-img-top" src="${producto.file}" alt="" />
                        <h5>${producto.title}</h5>
                        <div class="pruebaprecio">
                        <h6>$</h6>
                        <p>${producto.precio}</p>  
                        </div>
                        <button data-id= ${producto.id} class="btn btn-dark">Agregar al carrito</button>
                      </div>
                    </div>
                  </div>`;
        })
    }

const pintarAccesorio = () => {
    let filtroAccesorio = arrayProducts.filter (elem => elem.tipo == "accesorio");

    filtroAccesorio.forEach((producto) => {
        cards.innerHTML += `
        <div class="col-12 mb-2 col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                      <div class="card-body">
                      <img class="card-img-top" src="${producto.file}" alt="" />
                        <h5>${producto.title}</h5>
                        <div class="pruebaprecio">
                        <h6>$</h6>
                        <p>${producto.precio}</p>  
                        </div>
                        <button data-id= ${producto.id} class="btn btn-dark">Agregar al carrito</button>
                      </div>
                    </div>
                  </div>`;
        })
    }

const pintarBox = () => {
    let filtroBox = arrayProducts.filter (elem => elem.tipo == "box");

    filtroBox.forEach((producto) => {
        cards.innerHTML += `
        <div class="col-12 mb-2 col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                      <div class="card-body">
                      <img class="card-img-top" src="${producto.file}" alt="" />
                        <h5>${producto.title}</h5>
                        <div class="pruebaprecio">
                        <h6>$</h6>
                        <p>${producto.precio}</p>  
                        </div>
                        <button data-id= ${producto.id} class="btn btn-dark">Agregar al carrito</button>
                      </div>
                    </div>
                  </div>`;
        })
    }

const pintarTonica = () => {
    let filtroTonica = arrayProducts.filter (elem => elem.tipo == "tonica");

    filtroTonica.forEach((producto) => {
        cards.innerHTML += `
        <div class="col-12 mb-2 col-sm-6 col-md-3">
                    <div class="card">
                      <div class="card-body">
                      <img class="card-img-top" src="${producto.file}" alt="" />
                        <h5>${producto.title}</h5>
                        <div class="pruebaprecio">
                        <h6>$</h6>
                        <p>${producto.precio}</p>  
                        </div>
                        <button data-id= ${producto.id} class="btn btn-dark">Agregar al carrito</button>
                      </div>
                    </div>
                  </div>`;
        })
    }

    const pintarCards = () => {
        pintarBox();
        pintarAccesorio();
        pintarGin();
        pintarMini();
        pintarTonica();
      };

      


/*SELECCION DE FILTRO */

productFilter.addEventListener("change" , (e) => {
        if (filter.value == "ALL") {
            cards.innerHTML = '';
            pintarCards()
        } else if (filter.value == "GINS" ) {
            cards.innerHTML = '';
            pintarGin()
        } else if (filter.value == "MINIBOX") {
            cards.innerHTML = '';
            pintarMini()
        } else if (filter.value == "BOXMADERA") {
            cards.innerHTML = '';
            pintarBox()
        } else if (filter.value == "ACCESORIOS") {
            cards.innerHTML = '';
            pintarAccesorio()
        } else if (filter.value == "TONICAS") {
            cards.innerHTML = '';
            pintarTonica()
        }
    })
    