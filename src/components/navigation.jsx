

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          <img src='/img/logo.jpeg' alt="" />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#fintech' className='page-scroll'>
                Fintech
              </a>
            </li>
            <li>
              <a href='#regtech' className='page-scroll'>
                Regtech
              </a>
            </li>
            <li>
              <a href='#vecx' className='page-scroll'>
                VECX
              </a>
            </li>
            <li>
              <a href='#pgos' className='page-scroll'>
                PGOS
              </a>
            </li>
            <li>
              <a href='#pgrm' className='page-scroll'>
                PGRM
              </a>
            </li>
            <li>
              <a href='#pgsm' className='page-scroll'>
                PGSM
              </a>
            </li>
            <li>
              <a href='#aboutus' className='page-scroll'>
                About Us
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
