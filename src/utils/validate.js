export const checkValidData = (email, password) => {
    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // Password validation regex (min 8 chars, 1 letter, 1 number, 1 special char)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(!emailRegex.test(email))
        return "Invalid email format";

    if(!passwordRegex.test(password))
        return "Password must be at least 8 characters long and include at least one letter, one number, and one special character";
    
    // All validations passed
    return null;
}