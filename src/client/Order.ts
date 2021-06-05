
import { credentials } from 'grpc';
import { OrdersClient } from '../proto/orders_grpc_pb';
export default new OrdersClient('localhost:50051', credentials.createInsecure())