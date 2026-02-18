import React from 'react'

interface AppButtonProps {
  icon: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'default' | 'inverse'
}

const AppButton = ({ icon, onClick, className = '', variant = 'default' }: AppButtonProps) => {
  const colorClasses = variant === 'inverse' 
    ? 'bg-white dark:bg-black text-black dark:text-white'
    : 'bg-black dark:bg-white text-white dark:text-black';
    
  return (
    <button onClick={onClick} >
      <div className={`relative ${colorClasses} rounded-lg min-h-13 min-w-13 m-2 max-h-20 max-w-20 justify-items-center place-content-center ${className}`}>
        {icon}
      </div>
    </button>
  )
}

export default AppButton