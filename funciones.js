let productos=[[0,"Coca",5],
				[1,"Gansito",10],
				[2,"Doritos",12],
				[3,"Vive100",15],
				[4,"Chicle",1]];

let carrito = [];


window.addEventListener("load",cargar);

function cargar(){
	for(i=0; i<productos.length; i++){
		document.querySelector('section').innerHTML+="<div id='"+productos[i][0]+"'>"+
											"<h1>"+productos[i][1]+"</h1>"+
											"<h2>$"+productos[i][2]+"</h2>"+
											"<button onclick='agregar("+productos[i][0]+")'>+</button>"+
											"</div>"
	}
}

function agregar(id){
	carrito.push(id);
	document.querySSelector('s').innerHTML = carrito.length;
}

function mostrarCarrito(){
	let listaProductos = "";
	for(i = 0; i < carrito.length; i++){
		for(y = 0; y < productos.length; y++){
			if(productos[y][0] == carrito[i]){
				listaProductos += "-" + productos[y][1] + "  $" + productos[y][2] + "\n";

			}
		}
	}
	alert("Carrito de compras: \n" + listaProductos);
}