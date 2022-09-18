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
    alert('El precio total de los servicios es '+totalCompra)
}