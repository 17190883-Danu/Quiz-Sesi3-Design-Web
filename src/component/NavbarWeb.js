import ContactWeb from "./ContactWeb";

function NavbarWeb() {
    return (
        <div className="Navbar">
          <nav>
            <ul>
                <li><a href="">Beranda</a></li>
                <li><a href="/ContactWeb">Kontak Saya</a></li>
                <li><a href="tentang-saya.html">Tentang Saya</a></li>
            </ul>
        </nav>
        <div className="Button">
            <form>
            <input class="search" type="text" placeholder="Cari..." required/>	
            <input class="button" type="button" value="Cari"/>
            </form>		
            <button>Login</button>
        </div>
        </div>
    )
}

export default NavbarWeb;