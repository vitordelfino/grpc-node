
import { credentials } from 'grpc';
import { NotesClient } from '../proto/notes_grpc_pb';
export default new NotesClient('localhost:50051', credentials.createInsecure())