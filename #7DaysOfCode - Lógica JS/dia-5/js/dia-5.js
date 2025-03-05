
let listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
  };
  
  function agregarAlimento() {
    let respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (si/no)");
    
    if (respuesta.toLowerCase() === "si") {
      let alimento = prompt("¿Qué alimento deseas agregar?");
      let categoria = prompt("¿En qué categoría se encaja este alimento? (frutas/lácteos/congelados/dulces)");
      
      switch (categoria.toLowerCase()) {
        case "frutas":
          listaCompras.frutas.push(alimento);
          break;
        case "lacteos":
          listaCompras.lacteos.push(alimento);
          break;
        case "congelados":
          listaCompras.congelados.push(alimento);
          break;
        case "dulces":
          listaCompras.dulces.push(alimento);
          break;
        default:
          alert("Categoría no válida.");
      }
      
      agregarAlimento();
    } else {
      mostrarListaCompras();
    }
  }
  
  function mostrarListaCompras() {
    let lista = "Lista de compras:\n";
    
    if (listaCompras.frutas.length > 0) {
      lista += "Frutas: " + listaCompras.frutas.join(", ") + "\n";
    }
    
    if (listaCompras.lacteos.length > 0) {
      lista += "Lácteos: " + listaCompras.lacteos.join(", ") + "\n";
    }
    
    if (listaCompras.congelados.length > 0) {
      lista += "Congelados: " + listaCompras.congelados.join(", ") + "\n";
    }
    
    if (listaCompras.dulces.length > 0) {
      lista += "Dulces: " + listaCompras.dulces.join(", ") + "\n";
    }
    
    alert(lista);
  }
  
  document.getElementById("boton-agregar").addEventListener("click", agregarAlimento);
  