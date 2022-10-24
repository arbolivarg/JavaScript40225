const inputNombre = document.getElementById('nombre')
const inputApellido = document.querySelector('#apellido')
const botonIngresar = document.getElementById('botonIngresar')
const divDatos = document.querySelector('.divDatos')
const divSaludo = document.querySelector('#divSaludo') 

botonIngresar.onclick = () =>{
  const usuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value
  }
localStorage.setItem('usuarioStorage',JSON.stringify(usuario))
divDatos.remove()
saludar(usuario)
}

function saludar(user){
  const saludarTitulo = document.createElement('h2')
  saludarTitulo.innerText = `Bienvenido ${user.nombre} ${user.apellido}, escoge los productos que quieres comprar y luego dale click al botón 'Terminar Compra'`
  divSaludo.append(saludarTitulo)
}


let planes = []

const selectTag = document.getElementById('lista')

const internet ={
  id: 1,  
  nombre:'Internet',
  precio:100
}
planes.push(internet)

const tv ={
  id: 2,  
  nombre:'TV',
  precio:50
}
planes.push(tv)

const telefonia ={
  id: 3,  
  nombre:'Telefonía',
  precio:50
}
planes.push(telefonia)

//console.log(planes) // Validar el arreglo de objetos donde se almacenan los datos necesarios (hasta ahora) de cada plan.


planes.forEach((plan) => {
    const option = document.createElement('option')
    option.innerText = `${plan.nombre}: $${plan.precio}`
    option.setAttribute('id',`${plan.id}`)
    selectTag.append(option)
})

//Entrega Eventos

let cart =[]

const boton = document.createElement ('button')
boton.innerText = 'COMPRAR'
document.body.append (boton)

const boton2 = document.createElement ('button')
boton2.innerText = 'TERMINAR COMPRA'
document.body.append (boton2)


boton.onclick = ()=>{
    const planSeleccionado = planes[selectTag.selectedIndex]
    cart.push(planSeleccionado)

}

boton2.onclick = ()=>{
    console.log(cart)
    let totalCompra = 0
    cart.forEach((prod)=>{
        totalCompra = totalCompra + prod.precio
    })
    //Incluyendo librerías
    Swal.fire(
      'El precio total de los servicios comprados es: '+totalCompra, '¡Gracias por preferirnos!', 'success'
    )
    //alert('El precio total de los servicios es '+totalCompra)
}

//fetch

const tabla = document.querySelector('#lista-Productos tbody')

function cargarProductos(){
  fetch('listaProductos.json')
      .then(respuesta=>respuesta.json()) //formato de la información en el json
      .then(listado=> {
        listado.forEach(lista=>{
          const contenido = document.createElement('tr');
          contenido.innerHTML += `
                <td>${lista.id}</td>
                <td>${lista.name}</td>
                <td>${lista.description}</td>
          `;
          tabla.appendChild(contenido)

        })
      }) //se muestra la info del json
}

cargarProductos();