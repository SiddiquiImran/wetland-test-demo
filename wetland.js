const path = require('path');

module.exports = {
  entityPath: path.resolve(process.cwd(), 'app', 'entity'),
  // Template to configure your MySQL (or any other) client. Don't forget to install your client.
   stores    : {
     defaultStore: {
       client    : 'pg',
       connection: {
         host    : 'localhost',
         user    : 'postgres',
         database: 'inventroy'
       }
     }
   }
};
