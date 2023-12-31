/** This component is created as we will be using button a couple of times.
 *  and it's better to create re-usable components.
 */
// To create a button for different use case we will be using ButtonProps.

import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string; // ?: this means it's optional to have an icon or not.
  variant: string;
}

const Button = ({type, title, icon, variant}:ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`} type={type}>

      {icon && <Image src={icon} alt={title} width={21} height={21}/>}
      <label className="bold-16 whitespace-nowrap">{title}</label>
      
    </button>
  )
}

export default Button