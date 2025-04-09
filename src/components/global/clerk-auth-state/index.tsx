import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { User } from 'lucide-react';

const ClerkAuthState = () => {
  return (
    <>
     <SignedOut>
        <SignInButton>
<Button>
    Login
</Button>
        </SignInButton>
        </SignedOut> 
        <SignedIn>
            <UserButton>
                <UserButton.UserProfileLink 
                label='Dashboard'
                url={'/dashboard'}
                labelIcon={<User size={16}/>}
                />
            </UserButton>
        </SignedIn>
    </>
  );
}

export default ClerkAuthState;
