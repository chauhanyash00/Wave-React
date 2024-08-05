import React from 'react'

function NavBar() {
  return (
    <div>
      <div>
        <header className="header">
    <nav className="nav-tab navbar navbar-expand-lg fixed">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img
            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/branding/wave-logo.svg"
            className="logo" alt="wave-logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-font-bold">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>  
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section className="container tw-text-gray-600 tw-body-font tw-pt-20">
      <div className="tw-container tw-mx-auto tw-flex tw-px-5 tw-py-2 md:tw-flex-row tw-flex-col tw-items-center">
        <div
          className="lg:tw-flex-grow md:tw-w-1/2 lg:tw-pr-24 tw-mx-0 md:tw-pr-16 tw-flex tw-flex-col md:tw-items-start md:tw-text-left tw-mb-16 md:tw-mb-0 tw-items-center tw-text-center">
          <h1 className="tw-title-font xl:tw-text-6xl md:tw-text-4xl tw-mb-4 tw-font-bold tw-text-gray-900">
            We provide easy
            <br className="tw-hidden lg:tw-inline-block" /><span className="bg-text tw-text-5xl md:tw-text-6xl">solutions</span>
            for startups <br className="tw-hidden lg:tw-inline-block" />
            at affordable rates.
          </h1>
          <p className="tw-mb-8 sm:tw-text-1xl tw-text-1xl tw-leading-relaxed">
            Our methods are straight, comfortable, and
            <br className="tw-hidden lg:tw-inline-block" />
            established to ensure evolution and acceleration.
          </p>
          <div className="tw-flex tw-justify-center">
            <button
              className="tw-inline-flex tw-bg-blue-600 tw-text-white hover:tw-bg-blue-950 tw-transition tw-duration-200 tw-border-0 tw-py-2 tw-px-6 tw-mx-3 focus:tw-outline-none tw-rounded-3xl tw-text-lg">
              Free Consulation
            </button>
            <button
              className="tw-inline-flex tw-bg-transparent tw-text-blue-600 tw-border-2 tw-border-blue-600 hover:tw-text-white hover:tw-bg-blue-600 tw-transition-all tw-duration-200 tw-py-2 tw-px-6 tw-rounded-3xl tw-text-lg">
              Buy Credits
            </button>
          </div>
        </div>
        <div className="lg:tw-max-w-lg lg:tw-w-full md:tw-w-1/2 tw-w-full">
          <img className="tw-object-cover tw-object-center img-header" alt="hero"
            src="https://bootstrapbrain.com/demo/templates/wave/wave-lite/assets/img/hero/hero-home.jpg" />
        </div>
      </div>
    </section>
  </header>
    </div>

    </div>
  )
}

export default NavBar
