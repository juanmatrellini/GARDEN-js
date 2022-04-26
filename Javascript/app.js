/* DOM PARA LOGICA APP */

const cards = document.getElementById("cards");
const items = document.getElementById("items");
const cartContainer = document.getElementById('cartContainer');
const priceTotal = document.getElementsByClassName('priceTotal');
const cartCount = document.getElementById('cartCount');
const checkOut = document.getElementById('checkOut');
const cartIcon = document.getElementById('cartIcon');


/*INICIO*/

let userGuest = JSON.parse(localStorage.getItem("userGuest"));
const fragment = document.createDocumentFragment();
let carrito = {};
let costoTotal;
let arrayProducts;

const renderProductos = () => {
  fetchData();

  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));

    loadCart();
  }
};
cards.addEventListener("click", (e) => {
  addCarrito(e);
});

items.addEventListener("click", (e) => {
  btnAccion(e);
});

cartIcon.addEventListener('click', (e) => {
    cartContainer.classList.toggle('cartActive');
})



const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    arrayProducts = data;
    pintarCards();
  } catch (error) {
    console.log(error);
  }
};



/* MANEJO CART */

const addCarrito = (e) => {
  if (e.target.classList.contains("btn-dark")) {
    setCarrito(e.target.parentElement),
      Toastify({
        text: "Ha agregado un producto al carrito",
        duration: 1500,
        style: {
          background: "#87b090",
          border: "2px solid #1b272b",
          radius: "10px"
        },
        gravity: "top",
        position: "center",
      }).showToast();
  }
  e.stopPropagation();
};

const setCarrito = (objeto) => {
  const producto = {
    title: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector("p").textContent,
    id: objeto.querySelector(".btn-dark").getAttribute('data-id'),
    file: objeto.querySelector(".card-img-top").getAttribute('src'),
    cantidad: 1,
  };

  if (carrito.hasOwnProperty(producto.title)) {
    producto.cantidad = carrito[producto.title].cantidad + 1;
  }

  carrito[producto.title] = { ...producto };

  loadCart ()
}


const deleteProduct = (e) => {
    if (e.target.classList.contains ('deleteCart')) {
        delete carrito[e.target.dataset.id];
        
        loadCart();
      }
}

cartContainer.addEventListener ('click', deleteProduct);


const loadCheck = () => {
    checkOut.innerHTML = '';
    const divCheck = document.createElement('div');
    divCheck.classList.add('check');
    divCheck.innerHTML = `
        <h2>Su orden de compra es de $ ${costoTotal}</h2>
        <h3 class="factura">Pronto recibirá la factura en su correo para que pueda completar el pago.</h3>
        <h4>MUCHAS GRACIAS <h1>${userGuest}</h1></h4>
        <h3 class="logoCheck">GARDEN</h3>
    `;

    checkOut.appendChild(divCheck);
}

function inicio () {
    window.location.href = "../ingresoWeb.html";
}

function checkFinal  () {
    checkOut.classList.add('checkActive');
    cartContainer.classList.remove('cartActive');
    cartContainer.classList.add('noCart');
    carrito = {};
    localStorage.setItem("carrito", JSON.stringify(carrito));
    setTimeout(inicio, 5000);
}

const loadCart = () => {
  
    cartContainer.innerHTML = '';
   
   for (const product in carrito) {
        const divCart = document.createElement('div');
        divCart.classList.add('cartList');
        divCart.innerHTML = `
                <img class="cartImg" src="${carrito[product].file}" alt="" />
                <h3>${carrito[product].title}</h3>
                <p>Cant: ${carrito[product].cantidad}</p>
                <h4>$ ${carrito[product].precio}</h4>
                <span class="deleteCart" data-id="${carrito[product].title}">X</span>
        `;
        cartContainer.appendChild(divCart);
    }



    const nPrecio = Object.values(carrito).reduce(
        (acc, { cantidad, precio }) => acc + cantidad * precio, 0);
    
    const nCantidad = Object.values(carrito).reduce(
        (acc, { cantidad }) => acc + cantidad, 0);


    cartCount.textContent = nCantidad;
    const divPrecio = document.createElement('div');
    divPrecio.classList.add('cartCard');
    divPrecio.innerHTML = `
    <h2 class="priceTotal">Total: $ <strong>${nPrecio}</strong></h2> 
    <button id="btnCart" class="btnCart">VACIAR</button>
    <button id="buyCart" class="buyCart">COMPRAR </button>
    `;

    cartContainer.appendChild(divPrecio);
    const buyCart = document.getElementById('buyCart');
    buyCart.addEventListener('click', checkFinal );
    const btnCart = document.getElementById("btnCart");
    
    let lengthCarrito = 0;

    for (const product in carrito) {
        lengthCarrito++
    }
    if (lengthCarrito > 0) {
        btnCart.addEventListener('click', emptyCart)        
    } else if (lengthCarrito == 0) {
        divPrecio.innerHTML = `
        <p class="emptyProduct"> El carrito está vacío. <br>Comience a comprar! </p>
        `;

    cartContainer.appendChild(divPrecio);
    }


    localStorage.setItem("carrito", JSON.stringify(carrito));

    costoTotal = nPrecio;

    loadCheck()
    
}

const emptyCart = () => {

    Swal.fire({
      title: "Quiere vaciar el carrito?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, quiero vaciarlo",
      cancelButtonText: "No, no quiero",
      iconColor: "#87b090",
      cancelButtonColor: "#87b090",
      confirmButtonColor: "#87b090",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "VACIADO!",
          icon: "success",
          text: "El carrito se ha vaciado",
          iconColor: "#87b090",
          confirmButtonColor: "#87b090",
        });
        carrito = {};
        loadCart();
      }
    });
}

renderProductos();











