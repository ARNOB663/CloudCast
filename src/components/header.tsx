import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95">
         <div>
         <Link to={"/"} >
         <img src="/logo.png" alt="CLOUD CAST Logo" className="h-14" />
         </Link>
         </div>
         <div>
            {/*search bar*/}
            {/*theme toggle*/}
         </div>

      </header>
    </div>
  )
}

export default Header
