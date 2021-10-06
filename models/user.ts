import { Schema, model, Document, Model, models } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser extends Document {
    email: string;
    password: string;
    referralId?: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<IUser>({
    email: { type: String, required:true },
    password: { type: String, },
    referralId: String
});


export const User: Model<IUser> = models.User || model("User", schema);