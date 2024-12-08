import React from "react";

interface Props {
  password: string;
}

const Password: React.FC<Props> = ({ password }) => {
  const getStrength = () => {
    if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return "Strong";
    } else if (password.length > 5) {
      return "Medium";
    }
    return "Weak";
  };

  const strength = getStrength();

  return (
    <div>
      <p>Password Strength: {strength}</p>
    </div>
  );
};

export default Password;
