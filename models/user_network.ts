import { Schema, model, Document, Model, models, ObjectId } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUserNetwork extends Document {
    uid: ObjectId;
    chiduid: [ObjectId];

}
const schema = new Schema<IUserNetwork>({
    uid: { type: Schema.Types.ObjectId, ref: 'User' },
    chiduid: [{ type: Schema.Types.ObjectId, ref: 'User' }],

});

export const UserNetwork: Model<IUserNetwork> = models.UserNetwork || model("UserNetwork", schema);