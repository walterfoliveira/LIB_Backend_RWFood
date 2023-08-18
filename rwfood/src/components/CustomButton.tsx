import { Console } from 'console';
import React from 'react';

interface IconButtonProps {
  icon?: React.ReactNode;
  title: string;
  classcss: string;
  onClick: () => void;
  children: string | JSX.Element | JSX.Element[]
}

//https://react-icons.github.io/react-icons/icons?name=hi
//https://tailwindcss.com/docs/customizing-colors
//https://tailwindcss.com/docs/background-color

const CustomButton: React.FC<IconButtonProps> = ({ icon, title, classcss, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classcss}
    >

      {icon !== null &&
        <>
          {icon}
          <span className="ml-2">{title}</span>
        </>
      }
      {icon === null &&
        <span>{title}</span>
      }


    </button>
  );
};

export default CustomButton