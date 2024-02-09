import React from 'react'

const Slidertag = () => {
  return (
   <>
   {/* <div className="Slide">
    <figure>
      <img src='/images/infornix1img.jpeg' alt='slide1'/>
      <img src='/images/HEROATRIALX2021.png' alt='slide1'/>
      <img src='/images/mypassport.jpg' alt='slide1'/>

    </figure>

   </div> */}
<div className="container-md">

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/infornix1img.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/HEROATRIALX2021.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/mypassport.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
   </>
  )
}

export default Slidertag;