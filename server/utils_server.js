import { MongoDB } from './mongoDB'

// my databases
const products = MongoDB.myCollection('products');

export const Utils = {
    "getParamsAll": _getParamsAll,
    "getAllProducts": _getAllProducts,
    "getSingleProduct": _getSingleProduct,
    "products": products,
}


function _getParamsAll(path) {
    return decodeURI(path).split('/');
}

function _getAllProducts(){
    return products.findOne({}); 
}

function _getSingleProduct(id){
    let items = [];
    let arrayResult =  products.findOne({});

    items[0] = arrayResult.items.find((product)=>{
            return product.id === id;
    });

    // on construire la réponse de sorte à récupérer les informations du côté de l'application
    
    items = items[0]? items[0] : [];
    return  {
                "items": [
                    items
                ]
            };
}


