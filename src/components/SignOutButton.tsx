'use client';

import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { signOut } from 'aws-amplify/auth';

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/sign-in');
  };
  return (
    <Button onClick={handleSignOut} variant="ghost">
      Sign Out
    </Button>
  );
};

export default SignOutButton;
