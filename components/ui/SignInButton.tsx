"use client"
import { FC, useState } from 'react';
import { Button } from '@/ui/Button';
import { signIn } from 'next-auth/react';
import { toast } from '@/ui/Toast';

interface SignInButtonProps{}


const SignInButton: FC<SignInButtonProps> = () => {
    const [isLoader , setIsLoder] = useState<boolean>(false)
    const signInWithGoogle = async ()=>{
        setIsLoder(true)
        try{
            // await signIn()
            await signIn('google')
        }catch(error){
            toast({
                title:'Error Signing in',
                message:'Please Try again later',
                type:'error'
            })
        }
    }

   return <Button onClick={signInWithGoogle} isLoading={isLoader}>SignIn</Button>;
};

export default SignInButton;