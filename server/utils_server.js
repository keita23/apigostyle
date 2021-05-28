import { MongoDB } from './mongoDB'

// my databases
//const products = MongoDB.myCollection('products'); //in mongodb
const products = require("./data/products.json");

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
    //return products.findOne({}); //in mongodb
    return products;
}

function _getSingleProduct(id){
    let items = [];
    //let arrayResult =  products.findOne({}); //in mongodb
    let arrayResult = products;

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


