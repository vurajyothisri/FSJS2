

function Navbar() {
    return (
      
       <>
       <nav className="flex gap-x-3.5 p-8 m-auto">
           <img src={"./Assets/Logo.png"} alt="Logo" className="px-5"/>
           <div>
              <ul className="flex">
                <li className="mx-5">Home</li>
                <li className="mx-5 opacity-50">About</li>
                <li className="mx-5 opacity-50">Services</li>
                <li className="mx-5 opacity-50">Portfolio</li>
                <li className="mx-5 opacity-50 mr-[400px]">Pricing</li>
              </ul>
           </div>
           <button className=" bg-purple-600 px-6 py-2 text-white rounded-lg">Contact us</button>
       </nav>
       </>
    );
  }
  
  export default Navbar;
  