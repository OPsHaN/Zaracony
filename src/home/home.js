import React from "react";
import './home.css';
import { Link } from "react-router-dom";


const Home = () => {



  window.onscroll = () => {
    toggleTopButton();
  }


  function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      document.getElementById('scroll').classList.remove('d-none');
    } else {
      document.getElementById('scroll').classList.add('d-none');
    }
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom ">
          <div class="container">
            <button class="navbar-toggler" type="button" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </button>
            <div class="col-xs-3 collapse navbar-collapse "></div>
            <a class="col-xl-4 fs-1 col-xs-3 navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
              </svg>
            </button>
            <div class=" col-xl-8 col-xs-3 collapse navbar-collapse " id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item">
                  <a class="nav-link mx-4 fw-bold" aria-current="page" href="#">الرئيسية</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  mx-4" href="#">الباقات</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  mx-4" href="#">الأسئلة الشائعة</a>
                </li>
                <li class="nav-item">
                  <button class="nav-item  mx-2 btnlogin" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    تسجيل دخول
                  </button>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-2 icon" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <slideshow>
        <div class="desktop">
          <div class="position-relative">
            <img src="images/cover.png" class="img-fluid mx-auto d-block z-1" alt="Responsive image" />
            <div class="back-img-right">
            </div>
            <div class="back-img-left">
            </div>
          </div>
        </div>
        <div class="mobile d-xl-none d-lg-none d-md-none mx-auto d-flex ">
          <img src="images/cover.png" class="img-fluid rounded-3" alt="Responsive image" />
        </div>
        <div class="panel d-xl-none d-lg-none d-md-none mx-auto d-flex justify-content-center mt-1">
          <span class="px-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-usb-c-fill" viewBox="0 0 16 16">
            <path d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6H3Zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1Z" />
          </svg></span>
          <span class="px-1"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-circle " viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg></span>
          <span class="px-1"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-circle " viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg></span>
        </div>
      </slideshow>
      <icons >
        <div class="container ">
          <div class="desktop">
            <div class="row row-cols-auto d-flex align-items-center justify-content-center mt-3">
              <div class="col-xl-3 col-xs-3 d-flex justify-content-center  ">
                <img src="images/lebra 1.png" class="img-fluid" />
              </div>
              <div class="col-xl-3 col-xs-3 d-flex justify-content-center ">
                <img src="images/zainlogo.png" class="img-fluid" />
              </div>
              <div class="col-xl-3 col-xs-3 d-flex justify-content-center ">
                <img src="images/stc 1.png" class="img-fluid" />
              </div>
              <div class="col-xl-3 col-xs-3 d-flex justify-content-center ">
                <img src="images/mobily 1.png" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="row row-cols-auto d-xl-none d-lg-none d-md-none d-flex align-items-center justify-content-center mt-3">
            <div class="icons col-xs-3 d-flex justify-content-center">
              <figure>
                <img src="images/lebra color.jpg" class="img-fluid rounded-5" />
                <figcaption>ليبارا</figcaption>
              </figure>
            </div>
            <div class="icons col-xs-3 d-flex justify-content-center">
              <figure>
                <img src="images/mobily.png" class="img-fluid rounded-5" />
                <figcaption>موبايلي</figcaption>
              </figure>
            </div>
            <div class="icons col-xs-3 d-flex justify-content-center">
              <figure>
                <img src="images/stc.png" class="img-fluid rounded-5" />
                <figcaption>stc</figcaption>
              </figure>
            </div>
            <div class="icons col-xs-3 d-flex justify-content-center">
              <figure>
                <img src="images/zain.jpg" class="img-fluid rounded-5" />
                <figcaption>زين</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </icons>
      <body>
        <div class="container chooseee">
          <div class="desktop">
            <button class="compare rounded-circle position-fixed bottom-0 end-0 translate-middle d-none p-2" onClick={openForm} id="scroll">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </button>
            <div class="popup" id="myForm">
              <form class="form-container">
                <div class="row">
                  <div class="col order-first">
                    <div class="custom float-start">
                      <h4>المقارنة</h4>
                    </div>
                  </div>
                  <div class="col order-last">
                    <div class="float-end ">
                      <h6>حذف كل العناصر</h6>
                    </div>
                  </div>
                </div>
                <div class="backcompare">
                  <div class="row">
                    <div class="card float-right">
                      <div class="row">
                        <div class="col-sm-3 p-1">
                          <div class="d-block rounded-4 cpic">
                            <img src="images/20634.png" class="img-fluid mx-auto mt-4 d-block" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-block smalltext">
                            <span class="card-title">اسم باقة الشركة</span>
                          </div>
                          <div class="currency float-start">90 <span >ريال</span>
                          </div>
                        </div>
                        <div class="col-sm-3 text-end mt-3">
                          <div class="card-block">
                            <h4 class="card-title text-warning m-auto d-block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="card float-right">
                      <div class="row">
                        <div class="col-sm-3 p-1">
                          <div class="d-block rounded-4 cpic">
                            <img src="images/20634.png" class="img-fluid mx-auto mt-4 d-block" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-block smalltext">
                            <span class="card-title">اسم باقة الشركة</span>
                          </div>
                          <div class="currency float-start">90 <span >ريال</span>
                          </div>
                        </div>
                        <div class="col-sm-3 text-end mt-3">
                          <div class="card-block">
                            <h4 class="card-title text-warning m-auto d-block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="card float-right">
                      <div class="row">
                        <div class="col-sm-3 p-1">
                          <div class="d-block rounded-4 cpic">
                            <img src="images/20634.png" class="img-fluid mx-auto mt-4 d-block" />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="card-block smalltext">
                            <span class="card-title">اسم باقة الشركة</span>
                          </div>
                          <div class="currency float-start">90 <span >ريال</span>
                          </div>
                        </div>
                        <div class="col-sm-3 text-end mt-3">
                          <div class="card-block">
                            <h4 class="card-title text-warning m-auto d-block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn comapre" onClick={closeForm} >قارن الآن</button>
              </form>
            </div>
          </div>
          <div class="row mt-2 custom">
            <h1 class="my-element decorative-line">قم باختيار ما تريد القيام به</h1>
          </div>
          <div class="desktop">
            <div class="row mb-3">
              <div class="col-xl-6 col-lg-6 col-md-6 col-xs-3 ">
                <div class="position-relative">
                  <img src="images/mask.png" class="img-fluid " alt="Responsive image" />
                  <div class="text-center bg-text inner">
                    <h1 >باقات رقم جديد</h1>
                    <img src="images/bag.png" class="img-fluid col-xl-5 col-lg-4 col-md-4" alt="Responsive image" />
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-xs-3">
                <div class="position-relative">
                  <img src="images/mask.png" class="img-fluid" alt="Responsive image" />
                  <div class="text-center bg-text inner ">
                    <h1>الأرقام المميزة</h1>
                    <img src="images/cup.png" class="img-fluid col-xl-6 col-lg-4 col-md-4" alt="Responsive image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3 d-xl-none d-lg-none d-md-none d-flex align-items-center justify-content-center">
            <div class="col-xl-6 col-xs-6">
              <div class="card float-right border-0 bg-white">
                <div class="row row-cols-auto">
                  <div class="col-sm-3">
                    <div class="d-block rounded-4 mpic mt-2 ms-2">
                      <img src="images/bagmobile.png" class="img-fluid mx-auto d-block" />
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="card-block detail">
                      <h3 class="card-title mt-1">باقات رقم جديد</h3>
                      <span>هذا النص هو مثال لنص يمكن أن يستبدل في نفس</span>
                    </div>
                  </div>
                  <div class="col-sm-2 text-end mt-2">
                    <div class="card-block">
                      <h4 class="card-title text-primary mx-auto mt-3 d-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-xs-6 mt-3">
            <div class="card float-right border-0 bg-white">
                <div class="row row-cols-auto">
                  <div class="col-sm-3">
                    <div class="d-block rounded-4 mpic mt-2 ms-2">
                      <img src="images/cupmobile.png" class="img-fluid mx-auto d-block" />
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="card-block detail">
                      <h3 class="card-title mt-1">باقات رقم جديد</h3>
                      <span>هذا النص هو مثال لنص يمكن أن يستبدل في نفس</span>
                    </div>
                  </div>
                  <div class="col-sm-2 text-end mt-2">
                    <div class="card-block">
                      <h4 class="card-title text-primary mx-auto mt-3 d-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container baqat">
          <div class="row">
            <div class="col order-last">
              <div class="desktop">
                <div class="float-end mt-3">
                  <button class="filter "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" class="bi bi-funnel icon" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                  </svg> فلترة متقدمة</button>
                </div>
              </div>
              <div class="float-end d-xl-none d-lg-none d-md-none">
                <img src="images/filter.png" class="img-fluid filter" alt="Responsive image" />
              </div>
            </div>
            <div class="col order-first">
              <div class="custom float-start">
                <h1 class="my-element decorative-linee ">ابرز الباقات</h1>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col-xl-4 col-lg-6 col-md-12 col-xs-12 mb-5 d-flex align-items-center justify-content-center ">
              <div class="position-relative me-5 mb-3">
                <img src="images/blue.png" alt="Responsive image" />
                <div class="text-center bg-text innerll">
                  <h6>اسم باقة الشركة</h6>
                  <img src="images/mobilylogo.png" class="img-fluid" alt="Responsive image" />
                </div>
                <div class="position-absolute mx-1 translate-middle bord">
                  <div class="card text-bg-light p-3 rounded-5 mb-3">
                    <div class="card-top ">
                      <img src="images/chip.png" class="img-fluid float-end me-4" alt="Responsive image" />
                      <img src="images/sim.png" class="img-fluid float-end mx-2" alt="Responsive image" />
                      <img src="images/Signal.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >البيانات</span>
                        <p>20 جيجابايت</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Phone_Rotate.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >دقائق محلية</span>
                        <p>لا محدودة</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Group 639.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >الصلاحية</span>
                        <p>90 يوم</p>
                      </div>
                    </div>
                    <div class="card-bottom ">
                      <div class="currency float-start">90 <span >ريال</span>
                        <p>+ ضريبة القيمة المضافة</p>
                      </div>
                      <Link to="/details"><button class="nav-item  mx-2 btndetails float-end" >
                        تفاصيل الباقة
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-12 col-xs-12 mb-5 d-flex align-items-center justify-content-center ">
              <div class="position-relative me-5 mb-3">
                <img src="images/yellow.png" alt="Responsive image" />
                <div class="text-center bg-text innerll">
                  <h6>اسم باقة الشركة</h6>
                  <img src="images/zain_logo.png" class="img-fluid" alt="Responsive image" />
                </div>
                <div class="position-absolute mx-1 translate-middle bord">
                  <div class="card text-bg-light p-3 rounded-5 mb-3">
                    <div class="card-top ">
                      <img src="images/chip.png" class="img-fluid float-end me-4" alt="Responsive image" />
                      <img src="images/sim.png" class="img-fluid float-end mx-2" alt="Responsive image" />
                      <img src="images/Signal.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >البيانات</span>
                        <p>20 جيجابايت</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Phone_Rotate.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >دقائق محلية</span>
                        <p>لا محدودة</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Group 639.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >الصلاحية</span>
                        <p>90 يوم</p>
                      </div>
                    </div>
                    <div class="card-bottom ">
                      <div class="currency float-start">90 <span >ريال</span>
                        <p>+ ضريبة القيمة المضافة</p>
                      </div>
                      <Link to="/details"><button class="nav-item  mx-2 btndetails float-end" >
                        تفاصيل الباقة
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-12 col-xs-12 mb-5 d-flex align-items-center justify-content-center ">
              <div class="position-relative me-5 mb-3">
                <img src="images/purp.png" alt="Responsive image" />
                <div class="text-center bg-text innerll ">
                  <h6>اسم باقة الشركة</h6>
                  <img src="images/stclogo.png" class="img-fluid" alt="Responsive image" />
                </div>
                <div class="position-absolute mx-1 translate-middle bord">
                  <div class="card text-bg-light p-3 rounded-5 mb-3">
                    <div class="card-top ">
                      <img src="images/chip.png" class="img-fluid float-end me-4" alt="Responsive image" />
                      <img src="images/sim.png" class="img-fluid float-end mx-2" alt="Responsive image" />
                      <img src="images/Signal.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >البيانات</span>
                        <p>20 جيجابايت</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Phone_Rotate.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >دقائق محلية</span>
                        <p>لا محدودة</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Group 639.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >الصلاحية</span>
                        <p>90 يوم</p>
                      </div>
                    </div>
                    <div class="card-bottom ">
                      <div class="currency float-start">90 <span >ريال</span>
                        <p>+ ضريبة القيمة المضافة</p>
                      </div>
                      <Link to="/details"><button class="nav-item  mx-2 btndetails float-end" >
                        تفاصيل الباقة
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5 mb-5 pb-5">
            <div class="col-xl-4 col-lg-6 col-md-12 col-xs-12 mb-5 d-flex align-items-center justify-content-center ">
              <div class="position-relative me-5 mb-3">
                <img src="images/yellow.png" alt="Responsive image" />
                <div class="text-center bg-text innerll">
                  <h6>اسم باقة الشركة</h6>
                  <img src="images/zain_logo.png" class="img-fluid" alt="Responsive image" />
                </div>
                <div class="position-absolute mx-1 translate-middle bord">
                  <div class="card text-bg-light p-3 rounded-5 mb-3">
                    <div class="card-top ">
                      <img src="images/chip.png" class="img-fluid float-end me-4" alt="Responsive image" />
                      <img src="images/sim.png" class="img-fluid float-end mx-2" alt="Responsive image" />
                      <img src="images/Signal.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >البيانات</span>
                        <p>20 جيجابايت</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Phone_Rotate.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >دقائق محلية</span>
                        <p>لا محدودة</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Group 639.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >الصلاحية</span>
                        <p>90 يوم</p>
                      </div>
                    </div>
                    <div class="card-bottom ">
                      <div class="currency float-start">90 <span >ريال</span>
                        <p>+ ضريبة القيمة المضافة</p>
                      </div>
                      <Link to="/details"><button class="nav-item  mx-2 btndetails float-end" >
                        تفاصيل الباقة
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-12 col-xs-12 mb-5 d-flex align-items-center justify-content-center ">
              <div class="position-relative me-5 mb-3">
                <img src="images/purp.png" alt="Responsive image" />
                <div class="text-center bg-text innerll ">
                  <h6>اسم باقة الشركة</h6>
                  <img src="images/stclogo.png" class="img-fluid" alt="Responsive image" />
                </div>
                <div class="position-absolute mx-1 translate-middle bord">
                  <div class="card text-bg-light p-3 rounded-5 mb-3">
                    <div class="card-top ">
                      <img src="images/chip.png" class="img-fluid float-end me-4" alt="Responsive image" />
                      <img src="images/sim.png" class="img-fluid float-end mx-2" alt="Responsive image" />
                      <img src="images/Signal.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >البيانات</span>
                        <p>20 جيجابايت</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Phone_Rotate.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >دقائق محلية</span>
                        <p>لا محدودة</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Group 639.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >الصلاحية</span>
                        <p>90 يوم</p>
                      </div>
                    </div>
                    <div class="card-bottom ">
                      <div class="currency float-start">90 <span >ريال</span>
                        <p>+ ضريبة القيمة المضافة</p>
                      </div>
                      <Link to="/details"><button class="nav-item  mx-2 btndetails float-end" >
                        تفاصيل الباقة
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-12 col-xs-12 mb-5 d-flex align-items-center justify-content-center ">
              <div class="position-relative me-5 mb-3">
                <img src="images/blue.png" alt="Responsive image" />
                <div class="text-center bg-text innerll ">
                  <h6>اسم باقة الشركة</h6>
                  <img src="images/lebaralogo.png" class="img-fluid" alt="Responsive image" />
                </div>
                <div class="position-absolute mx-1 translate-middle bord">
                  <div class="card text-bg-light p-3 rounded-5 mb-3">
                    <div class="card-top ">
                      <img src="images/chip.png" class="img-fluid float-end me-4" alt="Responsive image" />
                      <img src="images/sim.png" class="img-fluid float-end mx-2" alt="Responsive image" />
                      <img src="images/Signal.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >البيانات</span>
                        <p>20 جيجابايت</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Phone_Rotate.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >دقائق محلية</span>
                        <p>لا محدودة</p>
                      </div>
                    </div>
                    <div class="card-body m-0 p-0">
                      <img src="images/Group 639.png" class="img-fluid float-start mx-2 mt-2" alt="Responsive image" />
                      <div class="detail float-start">
                        <span >الصلاحية</span>
                        <p>90 يوم</p>
                      </div>
                    </div>
                    <div class="card-bottom ">
                      <div class="currency float-start">90 <span >ريال</span>
                        <p>+ ضريبة القيمة المضافة</p>
                      </div>
                      <Link to="/details"><button class="nav-item  mx-2 btndetails float-end" >
                        تفاصيل الباقة
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="desktop ">
            <div class="row row-cols-auto d-flex align-items-center justify-content-center pt-5 pb-5">
              <Link to="/details"><button class="shahid">شاهد كافة الباقات</button></Link>
            </div>
          </div>
          <div class="row mb-3 d-xl-none d-lg-none d-md-none d-flex align-items-center justify-content-center">
            <div class="row row-cols-auto d-flex align-items-center justify-content-center pt-2 pb-2">
              <button class="shahid">شاهد كافة الباقات</button>
            </div>
          </div>
        </div>
        <div class="container sales">
          <div class="row custom">
            <h1 class="my-element decorative-lineee">الأكثر مبيعاً</h1>
          </div>
          <div class="container d-xl-none d-lg-none d-md-none d-block mx-auto">
            <div class="row row-cols-auto">
              <div class="col-sm-6 mx-auto ">
                <div class="mbord h-100 ">
                  <div class="card text-bg-light p-1 text-center rounded-4 mb-3 ">
                    <div class="card-body m-0 p-0">
                      <img src="images/iPhone_12.png" class="img-fluid " alt="Responsive image" />
                      <div class="detail ">
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>iPhone 12 mini</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>زين</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>5,405 <span>ر.س</span></p>
                            </div>
                          </div>
                          <div class="col order-last">
                            <div class="float-end ">
                              <img src="/images/cart.png" class="img-fluid" alt="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mx-auto ">
                <div class="mbord h-100">
                  <div class="card text-bg-light p-1 text-center rounded-4 mb-3 ">
                    <div class="card-body m-0 p-0">
                      <img src="images/iphone mini.png" class="img-fluid " alt="Responsive image" />
                      <div class="detail ">
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>iPhone 12 mini</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>زين</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>5,405 <span>ر.س</span></p>
                            </div>
                          </div>
                          <div class="col order-last">
                            <div class="float-end ">
                              <img src="/images/cart.png" class="img-fluid" alt="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-auto mb-3 mt-3">
              <div class="col-sm-6 mx-auto ">
                <div class="mbord h-100">
                  <div class="card text-bg-light p-1 text-center rounded-4 mb-3 ">
                    <div class="card-body m-0 p-0">
                      <img src="images/watch.png" class="img-fluid " alt="Responsive image" />
                      <div class="detail ">
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>Apple Watch Series 5</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>زين</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>5,405 <span>ر.س</span></p>
                            </div>
                          </div>
                          <div class="col order-last">
                            <div class="float-end ">
                              <img src="/images/cart.png" class="img-fluid" alt="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mx-auto ">
                <div class="mbord h-100">
                  <div class="card text-bg-light p-1 text-center rounded-4 mb-3 ">
                    <div class="card-body m-0 p-0">
                      <img src="images/iphone.png" class="img-fluid " alt="Responsive image" />
                      <div class="detail ">
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>Samsung Galaxy Note</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>زين</p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col order-first">
                            <div class="custom float-start">
                              <p>5,405 <span>ر.س</span></p>
                            </div>
                          </div>
                          <div class="col order-last">
                            <div class="float-end ">
                              <img src="/images/cart.png" class="img-fluid" alt="icon" />
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
          <div class="desktop">
            <div class="row row-cols-auto d-flex align-items-center justify-content-center mt-3 mb-5">
              <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner ">
                  <div class="carousel-item active pb-5 mb-5">
                    <div class="card-wrapper container-sm d-flex justify-content-around">
                      <div class="col-xl-3 col-lg-6 col-md-6 col-xs-6 card  border-0 " >
                        <img src="images/watch.png" class="card-img-top position-realtive" alt="..." />
                        <div class="card-body position-absolute translate-middle barstatus">
                          <div class="card px-3 rounded-5 mb-3 bgstyle">
                            <div class="card-top p-2">
                              <h5>Apple Watch Series 5</h5>
                            </div>
                            <div class="card-bottom pb-2">
                              <div class="cproduct float-start">
                                <p>يبدأ من</p>
                                5,405 <span >ريال</span>
                              </div>
                              <div class="logo float-end">
                                <img src="images/zain_logo.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 col-md-6 col-xs-6 card  border-0 " >
                        <img src="images/iphone.png" class="card-img-top" alt="..." />
                        <div class="card-body position-absolute translate-middle barstatus">
                          <div class="card px-3 rounded-5 mb-3 bgstyle">
                            <div class="card-top py-2">
                              <h5>Samsung Galaxy Note10</h5>
                            </div>
                            <div class="card-bottom pb-2">
                              <div class="cproduct float-start">
                                <p>يبدأ من</p>
                                5,405 <span >ريال</span>
                              </div>
                              <div class="logo float-end">
                                <img src="images/zain_logo.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 col-md-6 col-xs-6 card  border-0 " >
                        <img src="images/iphone mini.png" class="card-img-top" alt="..." />
                        <div class="card-body position-absolute translate-middle barstatus">
                          <div class="card px-3 rounded-5 mb-3 bgstyle">
                            <div class="card-top p-2">
                              <h5>iPhone 12 mini</h5>
                            </div>
                            <div class="card-bottom pb-2">
                              <div class="cproduct float-start">
                                <p>يبدأ من</p>
                                5,405 <span >ريال</span>
                              </div>
                              <div class="logo float-end">
                                <img src="images/zain_logo.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 col-md-6 col-xs-6 card  border-0 " >
                        <img src="images/iPhone_12.png" class="card-img-top" alt="..." />
                        <div class="card-body position-absolute translate-middle barstatus">
                          <div class="card px-3 rounded-5 mb-3 bgstyle">
                            <div class="card-top p-2">
                              <h5>iPhone 12 mini</h5>
                            </div>
                            <div class="card-bottom pb-2">
                              <div class="cproduct float-start">
                                <p>يبدأ من</p>
                                5,405 <span >ريال</span>
                              </div>
                              <div class="logo float-end">
                                <img src="images/zain_logo.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item pb-5 mb-5">
                    <div class="card-wrapper container-sm d-flex justify-content-around">
                      <div class="col-xl-3 col-lg-6 col-md-6 col-xs-6 card  border-0 " >
                        <img src="images/tablet.png" class="card-img-top position-realtive" alt="..." />
                        <div class="card-body position-absolute translate-middle barstatus">
                          <div class="card px-3 rounded-5 mb-3 bgstyle">
                            <div class="card-top p-2">
                              <h5>Apple Watch Series 5</h5>
                            </div>
                            <div class="card-bottom pb-2">
                              <div class="cproduct float-start">
                                <p>يبدأ من</p>
                                5,405 <span >ريال</span>
                              </div>
                              <div class="logo float-end">
                                <img src="images/zain_logo.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 col-md-6 col-xs-6 card  border-0 " >
                        <img src="images/labtop.png" class="card-img-top" alt="..." />
                        <div class="card-body position-absolute translate-middle barstatus">
                          <div class="card px-3 rounded-5 mb-3 bgstyle">
                            <div class="card-top p-2">
                              <h5>Apple Watch Series 5</h5>
                            </div>
                            <div class="card-bottom pb-2">
                              <div class="cproduct float-start">
                                <p>يبدأ من</p>
                                5,405 <span >ريال</span>
                              </div>
                              <div class="logo float-end">
                                <img src="images/zain_logo.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 col-md-6 col-xs-6 card  border-0 " >
                        <img src="images/iphone mini.png" class="card-img-top" alt="..." />
                        <div class="card-body position-absolute translate-middle barstatus">
                          <div class="card px-3 rounded-5 mb-3 bgstyle">
                            <div class="card-top p-2">
                              <h5>Apple Watch Series 5</h5>
                            </div>
                            <div class="card-bottom pb-2">
                              <div class="cproduct float-start">
                                <p>يبدأ من</p>
                                5,405 <span >ريال</span>
                              </div>
                              <div class="logo float-end">
                                <img src="images/zain_logo.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6 col-md-6 col-xs-6 card  border-0 " >
                        <img src="images/iPhone_12.png" class="card-img-top" alt="..." />
                        <div class="card-body position-absolute translate-middle barstatus">
                          <div class="card px-3 rounded-5 mb-3 bgstyle">
                            <div class="card-top p-2">
                              <h5>Apple Watch Series 5</h5>
                            </div>
                            <div class="card-bottom pb-2">
                              <div class="cproduct float-start">
                                <p>يبدأ من</p>
                                5,405 <span >ريال</span>
                              </div>
                              <div class="logo float-end">
                                <img src="images/zain_logo.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-auto d-flex align-items-center justify-content-center mt-3 ">
                  <button class="curouse" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    </svg></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="curouse" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" />
                    </svg></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-auto d-flex align-items-center justify-content-center pt-2 pb-2">
            <button class="shahid">شاهد كافة المنتجات</button>
          </div>
        </div>
        <div class="container fawad pb-5">
          <div class="row custom">
            <h1 class="my-element decorative-lineee">فوائد الـ eSIM</h1>
          </div>
          <div class="desktop">
             <div class="row row-cols-auto d-flex align-items-center justify-content-center mt-3">
              <div class="col-xl-3 col-xs-3 d-flex justify-content-center  ">
                <div class="card m-auto rounded-5 ">
                  <div class="card-body mt-5 borderwidth">
                    <img src="images/Flash.png" class="img-fluid mx-auto d-block pb-3" alt="icon" />
                    <h6>سهولة التفعيل</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-xs-3 d-flex justify-content-center ">
                <div class="card m-auto rounded-5">
                  <div class="card-body mt-5 borderwidth">
                    <img src="images/Phone_Shake.png" class="img-fluid mx-auto d-block pb-3" alt="icon" />
                    <h6>أكثر من خط على نفس الجهاز</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-xs-3 d-flex justify-content-center ">
                <div class="card m-auto rounded-5 ">
                  <div class="card-body mt-5 borderwidth">
                    <img src="images/Trophy.png" class="img-fluid mx-auto d-block pb-3" alt="icon" />
                    <h6>تمييز خط العمل عن الخط الشخصي</h6>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-xs-3 d-flex justify-content-center ">
                <div class="card m-auto rounded-5">
                  <div class="card-body mt-5 borderwidth">
                    <img src="images/Crown.png" class="img-fluid mx-auto d-block pb-3" alt="icon" />
                    <h6>تنويع الاستعمالات حسب الحاجة</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container d-xl-none d-lg-none d-md-none d-block mx-auto">
          <div class="col-xl-6 col-xs-6">
              <div class="card float-right border-0 bg-white">
                <div class="row row-cols-auto mt-3">
                  <div class="col-sm-3">
                  <div class="card m-auto rounded-4 ">
                  <div class="card-body">
                  <img src="images/Flash.png" class="my-3 mx-auto d-block" />
                  </div>
                </div>
                  </div>
                  <div class="col-sm-9 mt-4">
                  <div class="card-block custom">
                      <h1 class="card-title mt-3">سهولة التفعيل</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div class="col-xl-6 col-xs-6">
              <div class="card float-right border-0 bg-white">
                <div class="row row-cols-auto mt-3">
                  <div class="col-sm-3">
                  <div class="card m-auto rounded-4 ">
                  <div class="card-body">
                  <img src="images/Phone_Shake.png" class="my-3 mx-auto d-block" />
                  </div>
                </div>
                  </div>
                  <div class="col-sm-9 mt-4">
                    <div class="card-block custom">
                      <h1 class="card-title mt-3">أكثر من خط على نفس الجهاز</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-xs-6">
              <div class="card float-right border-0 bg-white">
                <div class="row row-cols-auto mt-3">
                  <div class="col-sm-3">
                  <div class="card m-auto rounded-4 ">
                  <div class="card-body">
                  <img src="images/Trophy.png" class="my-3 mx-auto d-block" />
                  </div>
                </div>
                  </div>
                  <div class="col-sm-9 mt-4">
                  <div class="card-block custom">
                      <h1 class="card-title mt-3">تمييز خط العمل عن الخط الشخصي</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-xs-6">
              <div class="card float-right border-0 bg-white">
                <div class="row row-cols-auto mt-3">
                  <div class="col-sm-3">
                  <div class="card m-auto rounded-4 ">
                  <div class="card-body">
                  <img src="images/Crown.png" class="my-3 mx-auto d-block" />
                  </div>
                </div>
                  </div>
                  <div class="col-sm-9 mt-4">
                  <div class="card-block custom">
                      <h1 class="card-title mt-3">تنويع الاستعمالات حسب الحاجة</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div class="desktop">
          <div class="container-fluid asalla mt-5">
            <div class="container pt-5">
              <div class="row">
                <div class="col order-first">
                  <div class="custom float-start mt-5">
                    <h1 class="my-element decorative-linee ">الأسئلة الشائعة</h1>
                  </div>
                </div>
                <div class="col order-last">
                  <div class="float-end ">
                    <img src="images/Speachbubble.png" class="img-fluid" alt="Responsive image" />
                  </div>
                </div>
              </div>
              <div class="row row-cols-auto d-flex align-items-center justify-content-center mt-3">
                <div class="col-xl-6 col-xs-6 how">
                  <h3>كيف يمكنني تفعيل شريحة eSIM؟</h3>
                  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
                </div>
                <div class="col-xl-6 col-xs-6 how">
                  <h3>لماذا لا أستطيع إجراء أو استقبال مكالمات؟</h3>
                  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
                </div>
              </div>
              <div class="row row-cols-auto d-flex align-items-center justify-content-center mt-3">
                <div class="col-xl-6 col-xs-6 how">
                  <h3>كيف يمكنني تفعيل شريحة eSIM؟</h3>
                  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
                </div>
                <div class="col-xl-6 col-xs-6 how">
                  <h3>كيف استطيع تحويل الرصيد من شريحة ليبارا؟</h3>
                  <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
                </div>
              </div>
              <div class="row row-cols-auto d-flex align-items-center justify-content-center pt-2 pb-5 mt-5 ">
                <button class="shahidelmazed">شاهد المزيد</button>
              </div>
            </div>
          </div>
          <img src="images/Cube.png" class="img-fluid top-50 start-50 translate-middle-y " alt="Responsive image" />
        </div>
        <div class="desktop">
          <div class="container mwadee pb-5">
            <div class="row custom">
              <h1 class="my-element decorative-lineee">مواضيع</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100 border-0">
                  <img src="images/Rectangle 193.png" class="card-img-top rounded-5" alt="..." />
                  <div class="card-body how">
                    <h4 class="card-title">التصنيف</h4>
                    <h3>عطر ومكعب وحيوان آلي أليف..</h3>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                    <span class="pe-2">تابع القراءة</span><img src="images/arrow-left.png" class="img-fluid" alt="تابع القراءة" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-0">
                  <img src="images/screen1.png" class="card-img-top rounded-5" alt="..." />
                  <div class="card-body how">
                    <h4 class="card-title">التصنيف</h4>
                    <h3>لتوزيعها على المدارس المهمشة..</h3>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                    <span class="pe-2">تابع القراءة</span><img src="images/arrow-left.png" class="img-fluid" alt="تابع القراءة" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-0">
                  <img src="images/screen2.png" class="card-img-top rounded-5" alt="..." />
                  <div class="card-body how">
                    <h4 class="card-title">التصنيف</h4>
                    <h3>شياومي تنضم لشقيقتها هواوي</h3>
                    <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                    <span class="pe-2">تابع القراءة</span><img src="images/arrow-left.png" class="img-fluid" alt="تابع القراءة" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-cols-auto d-flex align-items-center justify-content-center pt-2 pb-5 mt-5">
              <button class="shahidelmazed">شاهد المزيد من المقالات</button>
            </div>
          </div>
        </div>
      </body>
      <bootombar>
        <div class="row mb-3 d-xl-none d-lg-none d-md-none d-flex align-items-center justify-content-center">
          <nav class="mobile-nav">
            <a href="#" class="bloc-icon">
              <div class="nbord">
                <div class="card text-bg-light p-1 text-center rounded-4 mb-1">
                  <div class="card-body m-0 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                    </svg>
                    <div class="detail ">
                      <p >الرئيسية</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" class="bloc-icon">
              <div class="nbord">
                <div class="card text-bg-light p-1 text-center rounded-4 mb-1">
                  <div class="card-body m-0 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
                      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <div class="detail ">
                      <p>السلة</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" class="bloc-icon">
              <div class="nbord">
                <div class="card text-bg-light p-1 text-center rounded-4 mb-1">
                  <div class="card-body m-0 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right " viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <div class="detail ">
                      <p>المقارنة</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" class="bloc-icon">
              <div class="nbord">
                <div class="card text-bg-light p-1 text-center rounded-4 mb-1">
                  <div class="card-body m-0 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sim" viewBox="0 0 16 16">
                      <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44l1.915 1.914A1.5 1.5 0 0 1 14 3.414V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-13zM3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V3.414a.5.5 0 0 0-.146-.353l-1.915-1.915A.5.5 0 0 0 10.586 1H3.5z" />
                      <path d="M5.5 4a.5.5 0 0 0-.5.5V6h2.5V4h-2zm3 0v2H11V4.5a.5.5 0 0 0-.5-.5h-2zM11 7H5v2h6V7zm0 3H8.5v2h2a.5.5 0 0 0 .5-.5V10zm-3.5 2v-2H5v1.5a.5.5 0 0 0 .5.5h2zM4 4.5A1.5 1.5 0 0 1 5.5 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7z" />
                    </svg>
                    <div class="detail ">
                      <p>e-sim</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </nav>
        </div>
      </bootombar>
      <div class="desktop ">
        <footer>
          <div class="container-fluid foot mt-5">
            <div class="container pt-5 mt-5">
              <div class="row mb-5 pb-5">
                <div class="position-relative">
                  <img src="images/Group 1406.png" class="img-fluid position-absolute top-50 start-50 translate-middle" alt="Responsive image" />
                  <div class="text-center bg-text innerll ">
                    <h1>تمتع بالتكنلوجيا اينما كنت</h1>
                    <button class="shahidelmazed">إختر باقتك الآن</button>
                  </div>
                </div>
              </div>
              <div class="row row-cols-auto  pt-5">
                <div class="col-lg-6 col-md-6  mb-md-0">
                  <h5 class="text-white d-flex align-items-center justify-content-right mb-5 mx-auto fs-1 " >
                    LOGO
                  </h5>
                  <ul class="list-unstyled d-flex flex-row justify-content-right mb-5">
                    <li>
                      <a class="text-white p-2 rounded-circle bg-white bg-opacity-25" href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>                    </a>
                    </li>
                    <li>
                      <a class="text-white p-2 m-4 rounded-circle bg-white bg-opacity-25" href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a class="text-white p-2 rounded-circle bg-white bg-opacity-25" href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div class="howw mb-5">
                    <p class="text-right ">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                  </div>
                </div>
                <div class="col-lg-2 col-md-2 mb-4 mb-md-0">
                  <h5 class="text-uppercase mb-4">روابط مهمة</h5>
                  <ul class="list-unstyled ">
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none">الرئيسية</a>
                    </li>
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none ">الباقات</a>
                    </li>
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none">الأسئلة الشائعة</a>
                    </li>
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none">خريطة الموقع</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-2 mb-4 mb-md-0">
                  <h5 class=" mb-5"></h5>
                  <ul class="list-unstyled">
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none ">سياسة الخصوصية</a>
                    </li>
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none">شروط الاستخدام</a>
                    </li>
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none">الشريحة الإلكترونية</a>
                    </li>
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none">المدونة</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-2 mb-4 mb-md-0">
                  <h5 class=" mb-5"></h5>
                  <ul class="list-unstyled">
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none ">اتصل بنا</a>
                    </li>
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none">حقوق المستخدم</a>
                    </li>
                    <li class="mb-5">
                      <a href="#!" class="text-white-50 text-decoration-none">الشكاوي</a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr class="text-white-50"></hr>
              <div class="text-center p-3 text-white howw" >
                <p>جميع الحقوق محفوظة 2023
                  <a class="text-red mx-2" href="http://mostafaramadan.co/">mostafaramadan.co</a></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home;