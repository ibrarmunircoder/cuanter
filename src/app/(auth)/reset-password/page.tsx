import React from 'react';
import { PasswordResetSteps } from './components/PasswordResetSteps';

const ResetPassword = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-10 lg:p-24">
      <div className="w-full max-w-md shadow-xl rounded-lg p-5">
        <h1 className="text-2xl font-semibold text-center">Reset Password</h1>
        <PasswordResetSteps />
      </div>
    </main>
  );
};

export default ResetPassword;
