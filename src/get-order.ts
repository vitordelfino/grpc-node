
import client from './client/Order';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

client.list(new Empty(), (error, order) => {
  if(error) console.log('error', error);
  console.log('order', order.toObject())
  console.log('items', order.getItems()?.getItemsList().map(item => item.toObject()));
  return;
})