const productos = [
    {id:'1', nombre: 'Tabla toy machine', precio: 60, descripcion:'Tabla medida 8.25 construida con 7 capas de arce.', img:'../img/tmjoydivision.jpg', idCat: '1'},
    {id:'2', nombre: 'Tabla toy machine', precio: 60,descripcion:'Tabla medida 8.25 construida con 7 capas de arce.', img:'../img/tmmonster.jpg', idCat: '1'},
    {id:'3', nombre: 'Tabla toy machine', precio: 60,descripcion:'Tabla medida 8.25 construida con 7 capas de arce.', img:'../img/tmleoromero.jpg', idCat: '1'},
    {id:'4', nombre: 'Tabla toy machine', precio: 60,descripcion:'Tabla medida 8.25 construida con 7 capas de arce.', img:'../img/tmluiggi.jpg', idCat: '1'},
    {id:'5', nombre: 'Trucks Thunder Light II ',descripcion:'Trucks Thunder hollow kingping', precio: 55, img:'../img/thunderlights.jpg', idCat: '2'},
    {id:'6', nombre: 'Trucks Venture V-Hollows ', precio: 45, descripcion:'Trucks Venture doble hollow low', img:'../img/truckventure.jpg', idCat: '2'},
    {id:'7', nombre: 'Trucks Ace 44', precio: 35,descripcion:'Trucks ace 44 aluminio', img:'../img/trucksace44.jpg', idCat: '2'},
    {id:'8', nombre: 'Trucks Independent Slayer ',descripcion:'Trucks Slayer edition high', precio: 50, img:'../img/truckindyslayer.jpg', idCat: '2'},
    {id:'9', nombre: 'Ruedas Spitfire ',descripcion:'Ruedas Spitfire 53mm', precio: 55, img:'../img/Spitfireclassic.jpg', idCat: '3'},
    {id:'10', nombre: 'Ruedas Oj orange ',descripcion:'Ruedas Oj 54mm', precio: 30, img:'../img/Ojwheels.jpg', idCat: '3'},
    {id:'11', nombre: 'Ruedas Bones ',descripcion:'Ruedas Bones ogs 54mm', precio: 43, img:'../img/Bonesogs.jpg', idCat: '3'},
    {id:'12', nombre: 'Ruedas Spitfire ',descripcion:'Ruedas Spitfire Fromulafour', precio: 55, img:'../img/Spitfireformulafour.jpg', idCat: '3'},
    {id:'13', nombre: 'Rulemanes Reds ',descripcion:'Rulemanes Reds bones', precio: 40, img:'../img/Reds.jpg', idCat: '4'},
    {id:'14', nombre: 'Rulemanes SkateDeluxe ',descripcion:'Rulemanes SkateDeluxe', precio: 35, img:'../img/Skatedeluxeceramics.jpg', idCat: '4'},
    {id:'15', nombre: 'Rulemanes Bronson ',descripcion:'Rulemanes Bronson RAW', precio: 55, img:'../img/Bronson.jpg', idCat: '4'},
    {id:'16', nombre: 'Rulemanes Bones ',descripcion:'Rulemanes BONES Ceramics', precio: 55, img:'../img/Bones.jpg', idCat: '4'},
    
]
export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout (()=> {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}