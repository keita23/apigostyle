import { Meteor } from 'meteor/meteor';

const products = require('./data/products.json');

Meteor.startup(() => {
  // code to run on server at startup
});

WebApp.connectHandlers.use('/api/gostyle/v_0/products', (req, res, next) => {

  switch(req.method){
      case 'GET':
        const products = require('./data/products.json');

        res.writeHead(200);
        res.write(JSON.stringify(products));
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