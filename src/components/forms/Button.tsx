import React from 'react';

type ButtonProps = React.ComponentProps<'button'>;

const Button = ({className, children, ...props}: ButtonProps) => {
    return(
        <button 
            className={`bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md transition-colors ${className} `}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;