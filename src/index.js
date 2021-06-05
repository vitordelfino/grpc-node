const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { resolve } = require('path')


const path = resolve(process.cwd(), 'proto', 'notes.proto')
const notesPackageDefinitions = protoLoader.loadSync(path);
const notesProtoDescriptor = grpc.loadPackageDefinition(notesPackageDefinitions);
const notes = [
  { id: '1', title: 'Note 1', content: 'Content 1' },
  { id: '2', title: 'Note 2', content: 'Content 2' }
]

const server = new grpc.Server();

server.addService(notesProtoDescriptor.NoteService.service, {
  list: (_, callback) => {
    callback(null, notes)
  }
})

server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (!error) {
    console.log('Server running at port', port)

    server.start();
  }
  else console.log('error', error);
});
