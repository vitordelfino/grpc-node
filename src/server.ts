
import { Server, ServerCredentials } from 'grpc';
// import { OrdersService } from './proto/orders_grpc_pb';
import noteHandler from './handlers/Notes';
import orderServer from './handlers/Order';


const server = new Server();
server.addService(noteHandler.service, noteHandler.handler);
server.addService(orderServer.service, orderServer.handler);
server.bindAsync('localhost:50051', ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on ${port}`);
  server.start();
})