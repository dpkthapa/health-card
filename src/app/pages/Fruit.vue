<template>
  <div class="site-wrapper">
    <div class="a-main a-main--page">
      <div class="a-main__head a-main__head--lg bg-linear-orange">
        <div class="a-curve">
          <svg
            class="a-curve-svg fill-white"
            viewBox="0 0 375 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M167.5 8.50001C159.5 15.7 148.833 15.8333 144.5 15H-1V40.5H375V15H227C217 15 209.167 10.6667 206.5 8.50001C189.7 -4.69999 173.5 3.00001 167.5 8.50001Z"
            />
          </svg>
        </div>
        <div class="container">
          <div class="a-head">
            <div class="a-head__logo-wrap d-flex justify-content-between">
             <router-link :to="{ path: '/app' }">
                <svg
                  class="back"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L1 8L8 15"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
             </router-link>
              <div class="a-head__page d-flex align-self-center">
                <span class="a-head__num align-self-center">05</span>
                <span class="total-count align-self-center">/ 03</span>
              </div>
            </div>
            <div class="a-head__content a-head__content--mid text-center">
              <div class="a-head__featured-img">
                <img src="images/orange.png" />
              </div>
              <h2 class="page-title page-title--b">
                How often do you have oranges?
              </h2>
            </div>
            <div class="a-head__foot">
              <div class="a-head__bottom text-center">
                <p class="a-head__ques">How much in a week?</p>
                <div class="a-head__ans">3-4</div>
              </div>
              <div class="a-head__option d-flex justify-content-between">
                <div class="a-head__option-link">Never</div>
                <div class="a-head__option-link">Often</div>
              </div>
            </div>
            <div class="a-head__figure">
              <svg
                class="a-circle"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="#E92C81" />
                <path
                  d="M13.5 11.5V25.5"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 11.5V25.5"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.5 11.5V25.5"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="a-main__body text-center pt__60">
        <div class="container">
          <div class="a-main__wrap">
            <p class="sub-par mb__22">
              Swipe left / right and choose your days
            </p>
            <div class="btn btn-green mb__40">
              <a href="tel:1234" class="btn-link"> Call Now </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>