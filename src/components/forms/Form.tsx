import React from "react";

type FormProps = React.ComponentProps<'form'> & {
  children: React.ReactNode;
};

function Form({children, className, ...props}:FormProps){
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        className={`bg-slate-300 p-8 rounded-lg shadow-lg ${className}`}
        {...props}
      >
        {children}
      </form>
    </div>
  )
}

export default Form;