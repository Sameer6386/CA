import { ButtonHTMLAttributes, ReactNode } from 'react'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function CustomButton({ children, variant = 'primary', className, ...props }: CustomButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-md font-semibold transition-colors duration-200'
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-800 text-gray-200 hover:bg-gray-700'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

