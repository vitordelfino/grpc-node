
import client from './client/Notes';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

client.list(new Empty(), (error, list) => {
  if(error) console.log('error', error);
  console.log(list.getNotesList().forEach(note => console.log('note', note.toObject())))
})