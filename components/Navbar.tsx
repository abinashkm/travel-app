import { NAV_LINKS } from "@/app/constants"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container
    relative z-30 py-5">

        <Link href='/'>
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link)=>(
                    <Link href={link.href} key={link.key}
                    className="regular-16 text-gray-50 flexCenter cursor-pointer
                    pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
        </ul>
        
        <div className="lg:flexCenter hidden">
            <Button 
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
        </div>

        <Image 
           src="menu.svg"
           alt="menu"
           width={32}
           height={32}
           className="inline-block cursor-pointer lg:hidden"
        />

    </nav>
  )
}

export default Navbar

// CODE EXPLANATION

/** Using semantic HTML is beneficial in terms of search engine optimization (SEO),
 *  accessibility, and maintainability of code.
 *  It also improves the overall user experience on the web page.
 *  Semantic HTML can also improve accessibility for people with disabilities.
 *  By using descriptive tags like <header>, <nav>, <main>, <article>, <section>,
 *  and <footer>, we can help assistive technologies like screen readers 
 *  to better understand the structure and content of the web page.
 */
// <Link> is used to point to home, which means if u click the logo than it will 
// re-direct you to home. A <Link> is an element that lets the user navigate to another page by clicking or tapping on it.
// Similarly <Image> </Image> is also an element in next.js/react.js

/** In navigation bar we have few key elements like home, travel guide etc. 
 *  we could directly write inside the <ul></ul> but it will become messy and hard to read.
 *  so we will create another folder named constants where we will declare them.
 *  And at last here we will map them.
 */

/**  href={} is used to pass an empty object as a prop to the anchor tag,
 *  this will not redirect you to any source or reference
 *  while href="" is used to pass an empty string as a prop to the anchor tag.
 *  and this will take u to the source when clicked.
 *  These two methods will result in different behaviors
 *  when the anchor tag is clicked. */