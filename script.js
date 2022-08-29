alert('Bienvenido al selector de planes de su proveedor de comunicaciones')

let compra = 0
let planSeleccionado = parseInt(
  prompt(
    'Digita el plan que desea comprar: 1. Internet | 2. TV | 3. Telefonía Fija'
  )
)
let seguirComprando = true
let decision

while (seguirComprando === true) {
  if (planSeleccionado === 1) {
    compra = compra + 100
  } else if (planSeleccionado === 2) {
    compra = compra + 50
  } else if (planSeleccionado === 3) {
    compra = compra + 50
  } 

  else{
    planSeleccionado = parseInt(prompt('Digita un plan válido: 1. Internet | 2. TV | 3. Telefonía Fija'))
    continue
  }

  decision = parseInt(prompt('Desea agregar algún otro servicio a su plan? 1.Si - 2.No'))
  if (decision === 1) {
    planSeleccionado = parseInt(
      prompt(
        'Digita el plan que desea comprar: 1. Internet | 2. TV | 3. Telefonía Fija'
      )
    )
  } else if (decision === 2) {
    seguirComprando = false
  }
}

alert('El valor total sin descuento es: '+compra)

function PrecioDescuento(valorPlan){
let descuento = 0
if(valorPlan===50){
    descuento = 5
} else if(valorPlan===100){
    descuento = 10
} else if(valorPlan===150){
    descuento = 20
} else if (valorPlan===200){
    descuento = 25
} else {
    descuento = 0
}
let valorDescuento = valorPlan *(descuento/100)
valorPlan = valorPlan - valorDescuento
return valorPlan
}

let valorConDescuento = PrecioDescuento(compra)
alert('El total a pagar con descuento por plan contratado es: '+valorConDescuento)