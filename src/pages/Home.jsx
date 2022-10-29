import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <section className="py-0" id="home">
                    <div className="bg-holder d-none d-sm-block" style={{ backgroundImage: 'url(assets/img/illustrations/hero-bg.png)', backgroundPosition: 'right top', backgroundSize: 'contain' }}>
                    </div>
                    {/*/.bg-holder*/}
                    <div className="bg-holder d-sm-none" style={{ backgroundImage: 'url(assets/img/illustrations/hero-bg.png)', backgroundPosition: 'right top', backgroundSize: 'contain' }}>
                    </div>
                    {/*/.bg-holder*/}
                    <div className="container">
                        <div className="row align-items-center min-vh-75 min-vh-md-100">
                            <div className="col-md-7 col-lg-6 py-6 text-sm-start text-center">
                                <h1 className="mt-6 mb-sm-4 display-2 fw-semi-bold lh-sm fs-4 fs-lg-6 fs-xxl-8">Trouvez votre travail plus rapide <br className="d-block d-lg-none d-xl-block" /></h1>
                                <p className="mb-4 fs-1">Trouvez votre meilleur emploi  plus rapidement avec Insodev</p>
                                <div className="pt-3">
                                    <form>
                                        <div className="input-group w-xl-75 w-xxl-50 d-flex flex-end-center">
                                            <input className="form-control rounded-pill shadow-lg border-0" id="formGroupExampleInput" type="text" placeholder="Seacrh by skill, company and job" /><img className="input-box-icon me-2" src="assets/img/illustrations/search.png" width={30} alt />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="bg-holder" style={{ backgroundImage: 'url(assets/img/illustrations/bg.png)', backgroundPosition: 'left top', backgroundSize: 'initial', marginTop: '-180px' }}>
                    </div>
                    {/*/.bg-holder*/}
                    <div className="container">
                        <div className="row flex-center">
                            <div className="col-md-5 order-md-0 text-center text-md-start"><img className="img-fluid mb-4" src="assets/img/illustrations/passion.png" width={450} alt /></div>
                            <div className="col-md-5 text-center text-md-start">
                                <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm">Trouvez votre passion <br />et réussir</h6>
                                <p className="my-4 pe-xl-8">  trouver un emploi qui correspond à vos intérêts et à vos talents. Un salaire élevé n'est pas la priorité absolue. Plus important encore, vous pouvez travailler selon le désir de votre cœur.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section className="py-0">
                    <div className="container">
                        {/* ============================================*/}
                        {/* <section> begin ============================*/}
                        <section className="py-8">
                            <div className="container">
                                <div className="row flex-center">
                                    <div className="col-md-5 order-md-1 text-center text-md-end"><img className="img-fluid mb-4" src="assets/img/illustrations/jobs.png" width={450} alt /></div>
                                    <div className="col-md-5 text-center text-md-start">
                                        <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm">beaucoup d'emplois,<br />  trouvailles celui qui te convient</h6>
                                   
                                    </div>
                                </div>
                            </div>
                            {/* end of .container*/}
                        </section>
                        {/* <section> close ============================*/}
                        {/* ============================================*/}
                    </div>
                    {/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                <section className="py-5">
                    <div className="bg-holder d-none d-sm-block" style={{ backgroundImage: 'url(assets/img/illustrations/category-bg.png)', backgroundPosition: 'right top', backgroundSize: '200px 320px' }}>
                    </div>
                    {/*/.bg-holder*/}
                    <div className="container">
                       
                        
                    </div>
                </section>
                {/* ============================================*/}
                {/* <section> begin ============================*/}
                <section className="py-8">
                    <div className="container">
                        
                    </div>
                    {/* end of .container*/}
                </section>
                {/* <section> close ============================*/}
                {/* ============================================*/}
                <section className="py-0"><img className="w-100" src="assets/img/illustrations/come-on-join.png" alt />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 text-center">
                                <h6 className="fw-bold fs-3 fs-lg-5 lh-sm">Allez, rejoignez-nous !</h6>
                                <p>Créez un compte et parrainez votre ami </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8">
                    <div className="container-lg">
                        <div className="row flex-center">
                            
                            <div className="col-lg-4 position-relative mt-n5 mt-md-n4"><a className="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true" /><span className="visually-hidden">Previous</span></a><a className="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true" /><span className="visually-hidden">Next</span></a></div>
                        </div>
                        <div className="row flex-center">
                            <div className="col-xl-10 px-0">
                                <div className="carousel slide pt-6" id="carouselExampleDark" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval={10000}>
                                            <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-1.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-2.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-3.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval={2000}>
                                            <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-1.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-2.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-3.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-1.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-2.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-8 mb-md-0">
                                                    <div className="card card-span h-100 shadow-lg">
                                                        <div className="card-span-img"><img src="assets/img/gallery/user-3.png" alt /></div>
                                                        <div className="card-body d-flex flex-column flex-center py-6">
                                                            <div className="my-4">
                                                                <ul className="list-unstyled list-inline">
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                    </li>
                                                                    <li className="list-inline-item me-0">
                                                                        <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
                                                                        </svg>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-0 bg-primary-gradient">
                    <div className="bg-holder" style={{ backgroundImage: 'url(assets/img/illustrations/footer-bg.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    </div>
                    {/*/.bg-holder*/}
                    <div className="container">
                        <div className="row flex-center py-8">
                            <div className="col-lg-6 mb-4 text-center">
                                <h1 className="text-white">Get started now</h1>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                                <form className="row row-cols-lg-auto g-0 align-items-center">
                                    <div className="col-9 col-lg-8">
                                        <label className="visually-hidden" htmlFor="colFormLabel">Username</label>
                                        <div className="input-group">
                                            <input className="rounded-end-0 form-control" id="colFormLabel" type="email" placeholder="email address" />
                                        </div>
                                    </div>
                                    <div className="col-3 col-lg-4">
                                        <button className="btn btn-primary rounded-start-0" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row justify-content-lg-between">
                            <div className="col-6 col-sm-4 col-lg-auto mb-3">
                                <h5 className="mb-5 text-white">CATEGORIES </h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">IOS Developers</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Front-End Developers</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">UX Designers</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">UI Designers</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Content Writer</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Program &amp; Tech</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-auto mb-3">
                                <h5 className="mb-5 text-white">COMMUNITY </h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Events</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Blog</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Forum</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Podcast</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Affiliates</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Invite a Friend</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-auto mb-3">
                                <h5 className="mb-5 text-white">ABOUT </h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">About Us</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Partnerships</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Finance Experts</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Project Management</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Product Manager</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">The Team</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-4 col-lg-auto mb-3">
                                <h5 className="mb-5 text-white">CONTACT </h5>
                                <ul className="list-unstyled mb-md-4 mb-lg-0">
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Contact Us</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Press Center</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">Careers</a></li>
                                    <li className="mb-3"><a className="text-light text-decoration-none" href="#!">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row flex-center">
                            <div className="col-auto my-4">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item me-3"><a href="#!">
                                        <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="#1F3A63" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg></a></li>
                                    <li className="list-inline-item me-3"><a className="text-decoration-none" href="#!">
                                        <svg className="bi bi-facebook" xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="#1F3A63" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg></a></li>
                                    <li className="list-inline-item me-3"><a href="#!">
                                        <svg className="bi bi-instagram" xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="#1F3A63" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"> </path>
                                        </svg></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto mb-2">
                                <p className="mb-0 fs--1 text-white my-2 text-center">© This template is made with&nbsp;
                                    <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#1F3A63" viewBox="0 0 16 16">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg>&nbsp;by&nbsp;<a className="text-white" href="https://themewagon.com/" target="_blank">ThemeWagon </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ===============================================*/}
                {/*    End of Main Content*/}
                {/* ===============================================*/}
            </div>

        </>
    )
}

export default Home