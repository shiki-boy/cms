import './Navbar.scss'

const Navbar = () => (
  <>
    <nav className='navbar-header'>
      <li><a className='active' href='#home'>Home</a></li>
      <li><a href='#news'>News</a></li>
      <li><a href='#contact'>Contact</a></li>
    </nav>

    <div id='toolbar'></div>
  </>
)

export default Navbar