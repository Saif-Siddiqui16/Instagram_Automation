"use server"

import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { createUser, findUser } from "./queries"

export const onCurrentUser=async()=>{
const user=await currentUser()
if(!user) return redirect('./sign-in')
    return user
}


export const onBoardUser=async()=>{
    const user=await onCurrentUser()
    try {
        const found=await findUser(user.id)
        if(found){
if(found.integrations.length>0){
    
}

            return {
                status: 200,
                data: {
                    firstname: found.firstname,
                    lastname: found.lastname,
                },
            }
        }
        const created=await createUser(
            user.id,
            user.firstName!,
            user.lastName!,
            user.emailAddresses[0].emailAddress
        )
        return {
            status: 201,
            data: created
        }

    } catch (error) {
        console.log('error in onboarding the user-->', error);
        return { status: 500 }
    }
}

export const onUserInfo = async () => {
    const user = await onCurrentUser();
    try {
        const profile = await findUser(user.id);
        if (profile)
            return {
                status: 200,
                data: profile
            }

        return { status: 404 };
    } catch (error) {
        console.log(error)
        return { status: 500 }
    }
}