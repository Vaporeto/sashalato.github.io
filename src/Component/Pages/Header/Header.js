import './Header.css';
function Header() {
    return (

       <>

         {/* <!-- #Header --> */}
         <header id="header" className="flexbox">

        {/* <!-- Header Inner --> */}
        <div className="header-wrapper flexbox">
        <h1 className="header-title">SASHA</h1>
        <h1 className="header-title">DEMO</h1>
        <div className="header-overlay"></div>
        <img className="header-image" src="https://media.giphy.com/media/Q22kcRdASuBvW/giphy.gif" alt="" />
        </div>

        {/* <!-- Header Blur --> */}
        <img className="header-image-blur" src="https://media.giphy.com/media/Q22kcRdASuBvW/giphy.gif" alt=""/>

        </header>

       </>

    );
}

export default Header;