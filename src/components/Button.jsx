import React from "react";

const Button = ({ variant = "default", children, className = "", ...props }) => {
  const baseStyles =
    "mt-4 w-fit mx-auto font-semibold py-2 px-4 rounded-2xl transition-colors";

  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border-2 border-black text-black hover:bg-accent hover:text-white",
    ghost: "text-primary hover:text-accent/80",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
