// alert("Hola");

const ventas_facturacion =[
    {
        numeroDeFactura:0005,
        cliente:{
            id:1,
            nombre:'Marcos Joule',
            documento: 1235667
        },
        pedido: [ 1, 2, 3
        ],
        formaDePago: "Tarjeta Debito",
        Valor: 560000
    }
]

const pedidos

const gastos = [
    {
        concepto: "Nomina",
        valor: 5000000,
    }
]

const compras = [
    {
        insumo: "Pollo",
        proveedor: "MacPollo",
        valor: 40000,
        cantidad: 20,
        unidad: "kg"
    }
]

/*const clientes = [
    {

    }
]*/

const mesas = [
    {
        numero: 23,
        ubicacion: "Piso 2",      
    }
]

const categorias = [
        {
            id: "1",
            nombre: "Entradas"
        },
        {
            id: "2",
            nombre: "Plato Fuerte"
        },
        {
            id: "3",
            nombre: "Postres"
        }
]

const reporte_de_inventario = [
    {
        materiasPrimas: {
            id: "1",
            nombre: "Carne de res"
        },
        productos: {
            id: "21",
            nombre: "Agua Mineral"
        },
        utileria: {
            id: "3",
            nombre: "Cucharas"
        },
        mueblesEnseres: {
            id: "4",
            nombre: "Mesas de Madera"
        },
    }
]

const usuarios= [
    {
        id: "1",
        nombre: "Pedro Paramo",
        rol: "1"
    },
    {
        id: "2",
        nombre: "Platon Martinez",
        rol: "2"
    },
    {
        id: "3",
        nombre: "Mesero",
        rol: "3"
    }
]

const rol = [
    {
        id: "1",
        nombre: "Administrador"
    },
    {
        id: "2",
        nombre: "Plato Chef"
    },
    {
        id: "3",
        nombre: "Mesero"
    }
]

const permisos = [
    {
        agregarProductos: {
            id: "1",
            nombre: "Atun"
        },
        crearVentas: {
            id: "2",
            nombre: "Precios"
        },
        ModificarPrecios: {
            id: "3",
            nombre: "Aumentar IPC"
        },
        Facturar: {
            id: "4",
            nombre: "Crear Factura"
        },
    }
]

const productos = [
    {
        id:1,
        nombre:'Ensalada',
        precio:12000,
        categoria: "1"
    },

    {
        id:2,
        nombre:'Pollo asado',
        precio:10000,
        categoria: "2"
    },

    {
        id:3,
        nombre:'Flan',
        precio:5000,
        categoria: "3"
    }
]