import { Auth } from "aws-amplify";

async function signUp(){
    try{
        const { user } = await Auth.signUp({
            username : String,
            password : String,
            autoSignIn:{
                enabled: true,
            }
        });
        console.log(user)
    } catch(err){
        console.log('Error signing up: ')
    }
    
}

