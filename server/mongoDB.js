export const MongoDB = {
    "collection": _mongodb
}

function _mongodb(db){
    switch (db) {
        case "products":
            return new Mongo.Collection('products');

        default:
            break;
    }
}