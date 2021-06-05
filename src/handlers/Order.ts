import { Order, OrderItem, OrderItemList } from '../proto/orders_pb'
import { IOrdersServer, OrdersService } from '../proto/orders_grpc_pb'
import { sendUnaryData, ServerUnaryCall } from "grpc";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import NP from '../NP';
class OrderHandler implements IOrdersServer {
  list (_: ServerUnaryCall<Empty>, callback: sendUnaryData<Order>): void {
    const item1 = new OrderItem();
    item1.setAmount(Number(4.5))
    item1.setDocument('42780908890');
    const item2 = new OrderItem();
    item2.setAmount(Number(7.9))
    item2.setDocument('13321407850');
    const items = new OrderItemList();
    items.setItemsList([item1, item2]);

    const order = new Order();
    order.setId('order-id-1');
    order.setTotal(1);
    order.setItems(items);
    order.setTotal(items.getItemsList().reduce((total, current) => NP.plus(total, current.getAmount()), 0))
    callback(null, order);
    
    
  }  
}

export default {
  service: OrdersService,
  handler: new OrderHandler()
};