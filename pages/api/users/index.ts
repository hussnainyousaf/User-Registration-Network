// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import next from 'next';
import { connectToDatabase } from '../../../db_helper/mongo_helper';
import { IUser, User } from '../../../models/user';
import { UserNetwork } from '../../../models/user_network';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            await connectToDatabase()
            const body: IUser = (req.body)
            //For testing 
            // const body: Partial<IUser> = {
            //     email: "alesha@gmail.com",
            //     password: "1234",
            //     referralId: "hussanain@gmail.com",
            // }
            //User already exists 
            let user = await User.findOne({ email: body.email });
            if (user != null) return res.status(409).json("User already exists");
            //Check referral link
            let referrer = await User.findOne({ email: body.referralId });
            const createdUser = await new User(body).save();

            if (referrer == null) console.log("Referral invalid");
            else
                createOrUpdateNetwork(referrer, createdUser);
            res.status(200).json(createdUser);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else if (req.method === "GET") {

   await connectToDatabase()
           
        
            let user = await User.find({  });
            res.send(user)
        

        // let { id } = req.;
    } else {
        console.log("Method not allowed");
        res.status(500).json("Method not allowed");

    }
}

async function createOrUpdateNetwork(referrer: (IUser & {
    _id: any;
}), user: (IUser & {
    _id: any;
})) {
    let network = await UserNetwork.findOne({ uid: referrer.id });
    if (network == null) {
        console.log("Createing new networl")
        let uN = new UserNetwork(
            {
                uid: referrer,
                chiduid: [user]
            }
        );
        await uN.save();
    }

    //create a network;
    else {
        console.log("Updating  the networl")
        network.chiduid.push(user.id);
        await network.save();
        //push the new user id in chidUid 
        //

    }

}
