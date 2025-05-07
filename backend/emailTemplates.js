export const WelcomeMail = (username, email) => {
    return `
    <div style="max-width: 600px; margin: 0 auto; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
            <div style="background-color: #215732; color: white; padding: 30px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Welcome to Auth</h1>
                <p style="margin-top: 10px; opacity: 0.8;">Secure AuthFlow</p>
            </div>

            <div style="padding: 30px; color: #333;">
                <h2 style="color: #215732; margin-bottom: 20px;">Hey ${username} 👋</h2>

                <p style="margin-bottom: 20px;">Congratulations! Your account is now active.</p>

                <div style="background-color: #f0f0f0; border-left: 4px solid #215732; padding: 15px; margin-bottom: 20px;">
                    <p style="margin: 0;"><strong>Your Account Details:</strong></p>
                    <p style="margin: 0; color: #666;">Email: ${email}</p>
                </div>
            </div>
        </div>
    </div>
    `;
};

export const AccountVerificationMail = (username, email, otp) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
</head>
<body>
<div style="max-width: 600px; margin: 0 auto; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="background-color: #215732; color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Verify Your Account</h1>
            <p style="margin-top: 10px; opacity: 0.8;">Secure Access Verification</p>
        </div>
        
        <div style="padding: 30px; color: #333;">
            <h2 style="color: #215732; margin-bottom: 20px;">Hello ${username} 🔐</h2>
            
            <p style="margin-bottom: 20px;">You are trying to verify your account. Use the One-Time Password (OTP) below to complete the verification process.</p>
            
            <div style="background-color: #f0f0f0; border-left: 4px solid #215732; padding: 15px; margin-bottom: 20px;">
                <p style="margin: 0;"><strong>Your Verification OTP:</strong></p>
                <p style="margin: 0; color: #666; font-family: monospace; font-size: 24px; letter-spacing: 4px;">${otp}</p>
                <p style="margin-top: 10px; font-size: 12px; color: #888;">This OTP is valid for 15 minutes</p>
            </div>
            
            <div style="background-color: #ffedea; border-left: 4px solid #ff6b6b; padding: 15px; margin-bottom: 20px;">
                <p style="margin: 0; color: #d9534f; font-size: 14px;">
                    🚨 Never share this OTP with anyone
                </p>
            </div>
                        
            <div style="border-top: 1px solid #e0e0e0; padding-top: 15px; font-size: 12px; color: #888;">
                <p style="margin: 0;">Verification Email: ${email}</p>
            </div>
        </div>
        
    </div>
</div>
</body>
</html>`;
};

export const AccountVerifiedMail = (username, email) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Verified</title>
</head>
<body>
<div style="max-width: 600px; margin: 0 auto; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="background-color: #215732; color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Account Verified Successfully</h1>
            <p style="margin-top: 10px; opacity: 0.8;">Welcome to Full Access</p>
        </div>
        
        <div style="padding: 30px; color: #333;">
            <h2 style="color: #215732; margin-bottom: 20px;">Congratulations, ${username}! 🎉</h2>
            
            <p style="margin-bottom: 20px;">Your account has been successfully verified. You now have full access to all features of our platform.</p>
            
            <div style="background-color: #e6f4ea; border-left: 4px solid #34a853; padding: 15px; margin-bottom: 20px;">
                <p style="margin: 0; color: #34a853; font-size: 16px;">
                    ✅ Verification Status: Confirmed
                </p>
                <p style="margin-top: 10px; color: #666; font-size: 14px;">
                    Verified Email: ${email}
                </p>
            </div>
         
        </div>
        
        
    </div>
</div>
</body>
</html>`;
};

export const PasswordResetMail = (username, email, resetToken) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
</head>
<body>
<div style="max-width: 600px; margin: 0 auto; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="background-color: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="background-color: #215732; color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Reset Your Password</h1>
            <p style="margin-top: 10px; opacity: 0.8;">Secure Account Access</p>
        </div>
        
        <div style="padding: 30px; color: #333;">
            <h2 style="color: #215732; margin-bottom: 20px;">Hello ${username} 🔐</h2>
            
            <p style="margin-bottom: 20px;">You have requested to reset your password. Use the reset token below to create a new password.</p>
            
            <div style="background-color: #f0f0f0; border-left: 4px solid #215732; padding: 15px; margin-bottom: 20px;">
                <p style="margin: 0;"><strong>Your Password Reset Token:</strong></p>
                <p style="margin: 0; color: #666; font-family: monospace; font-size: 24px; letter-spacing: 4px;">${resetToken}</p>
                <p style="margin-top: 10px; font-size: 12px; color: #888;">This token is valid for 15 minutes</p>
            </div>
            
            <div style="background-color: #ffedea; border-left: 4px solid #ff6b6b; padding: 15px; margin-bottom: 20px;">
                <p style="margin: 0; color: #d9534f; font-size: 14px;">
                    🚨 Never share this reset token with anyone
                </p>
            </div>
            
            
            <div style="border-top: 1px solid #e0e0e0; padding-top: 15px; font-size: 12px; color: #888;">
                <p style="margin: 0;">Account Email: ${email}</p>
            </div>
        </div>
        
    </div>
</div>
</body>
</html>`;
};