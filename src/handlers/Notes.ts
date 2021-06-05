import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { sendUnaryData, ServerUnaryCall } from "grpc";
import { INotesServer, NotesService } from '../proto/notes_grpc_pb';
import { NoteList, Note } from "../proto/notes_pb";

class NotesHandler implements INotesServer {
  list(_: ServerUnaryCall<Empty>, callback: sendUnaryData<NoteList>): void {
    
    const notes = new NoteList();
    const note1 = new Note();
    note1.setId('123');
    note1.setTitle('titulo');
    note1.setContent('Conteúdo');
    notes.setNotesList([note1]);

    callback(null, notes)
  }
 
}

export default {
  service: NotesService,
  handler: new NotesHandler(),
};