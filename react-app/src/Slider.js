import React from 'react'

export default function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://gateway.pinata.cloud/ipfs/QmXvbYG7BdMsYkVkCrFWhEKGpZj69SiiZD8T7eZw7iuzgu?_gl=1*lvm2wl*rs_ga*NzUzODgzMjM0LjE2ODUxOTM5MTk.*rs_ga_5RMPXG14TE*MTY4NTI4NTk3My4yLjEuMTY4NTI4ODExOC42MC4wLjA." className="d-block w-100" alt="..." height="620px"/>
        <div className="carousel-caption d-none d-md-block ">
          <h5>WELCOME TO E_VOTING SYSTEM</h5>
          <p>Click on About to see the candidates and their description</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://gateway.pinata.cloud/ipfs/QmPuSQ65MVK4jGvZtkU7nZu2bTZc1csNSJgtDcJQbd4EnV?_gl=1*136ngzq*rs_ga*NzUzODgzMjM0LjE2ODUxOTM5MTk.*rs_ga_5RMPXG14TE*MTY4NTI4NTk3My4yLjEuMTY4NTI4OTAwMy42MC4wLjA." className="d-block w-100" alt="image not found" height="620px"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>WELCOME TO E_VOTING SYSTEM</h5>
          <p>sign in to Vote</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://gateway.pinata.cloud/ipfs/QmTe8tBZbGPUcqRrGr5524xa2FoQae9gc6RwBtPFPnGh4a?_gl=1*1oc4s3b*rs_ga*NzUzODgzMjM0LjE2ODUxOTM5MTk.*rs_ga_5RMPXG14TE*MTY4NTI4NTk3My4yLjEuMTY4NTI4ODgyMC42MC4wLjA." className="d-block w-100" alt="..."height="620px"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>WELCOME TO E_VOTING SYSTEM</h5>
          <p>click on E-voting for furthur information</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
   



  </div>


  
  )
}
