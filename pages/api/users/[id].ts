import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from '../../../db_helper/mongo_helper';
import { IUser, User } from '../../../models/user';
import { UserNetwork } from '../../../models/user_network';

export default async function userHandler(req: NextApiRequest,
    res: NextApiResponse) {

    let { id } = req.query;
    switch (req.method) {
        case 'GET':
            // Get data from your database
            
            let user=await User.findById(id);
            let network=await UserNetwork.findOne({uid:user?._id}).populate("chiduid uid")
            if(network==null) return res.status(404).json(network);
            res.status(200).json(network)
         
            break
        case 'PUT':
            // Update or create data in your database
            res.status(200).json("update user")
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}