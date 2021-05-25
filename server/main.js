import { Meteor } from 'meteor/meteor';
import { Utils } from './utils_server';

Meteor.startup(() => {
  // code to run on server at startup
});

WebApp.connectHandlers.use('/api/gostyle/v_0/products', (req, res, next) => {

  switch(req.method){
      case 'GET':
        let productsList = Utils.getAllProducts();

        res.writeHead(200);
        res.write(JSON.stringify(productsList));
        break;
      case 'POST':
          res.writeHead(200);
          res.write("No data");
          break;
      default:
          break;
  }

  res.end();
});

WebApp.connectHandlers.use('/api/gostyle/v_0/singleProduct/', (req, res, next) => {
  const id = parseInt(Utils.getParamsAll(req.url)[1], 10);
  switch(req.method){
      case 'GET':
        let sigleProduct = Utils.getSingleProduct(id);

        res.writeHead(200);
        res.write(JSON.stringify(sigleProduct));
        break;
      case 'POST':
          res.writeHead(200);
          res.write("No data");
          break;
      default:
          break;
  }

  res.end();
});