"use client"
import { FC, useState } from 'react';
import { Button } from '@/ui/Button';
import { signOut } from 'next-auth/react';
import { toast } from '@/ui/Toast';

interface SignOutButtonProps{}


const SignOutButton: FC<SignOutButtonProps> = () => {
    const [isLoader , setIsLoder] = useState<boolean>(false)
    const signOutWithGoogle = async ()=>{
        setIsLoder(true)
        try{
            await signOut()
        }catch(error){
            toast({
                title:'Error Signing out',
                message:'Please Try again later',
                type:'error'
            })
        }
    }

   return <Button onClick={signOutWithGoogle} isLoading={isLoader}>SignOut</Button>;
};

export default SignOutButton;