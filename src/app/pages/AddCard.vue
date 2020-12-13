<template>
  <div class="site-wrapper">
    <div class="a-main a-main--page">
      <div class="a-main__head bg-linear">
        <div class="a-curve">
          <svg
            class="a-curve-svg fill-white"
            viewBox="0 0 366 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M374 0C212.8 76.8 57.5 32 0 0V47.5H374V0Z" />
          </svg>
        </div>
        <div class="container">
          <div class="a-head">
            <div class="a-head__logo-wrap d-flex justify-content-between">
              <div class="a-head__back align-self-center">
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
              </div>
              <div class="a-head__page d-flex align-self-center">
                <span class="a-head__num align-self-center">01</span>
                <span class="a-head__count align-self-center">/ 03</span>
              </div>
            </div>
            <div class="a-head__content text-center">
              <div class="a-head__icn">
                <svg
                  class="a-star"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="#FFAE19" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 23.3193L13.5402 25.664C12.8066 26.0497 11.9492 25.4267 12.0893 24.6098L12.941 19.6438L9.33297 16.1268C8.73945 15.5483 9.06696 14.5403 9.88718 14.4211L14.8734 13.6966L17.1032 9.17833C17.4701 8.43508 18.5299 8.43508 18.8967 9.17833L21.1266 13.6966L26.1128 14.4211C26.933 14.5403 27.2605 15.5483 26.667 16.1268L23.059 19.6438L23.9107 24.6098C24.0508 25.4267 23.1934 26.0497 22.4598 25.664L18 23.3193Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 class="page-title">Sleep Apnea</h2>
              <p class="page-par">3 Sleep Apnea Events in the past 7 Days</p>
              <div class="a-head__icn">
                <svg
                  width="36"
                  height="31"
                  viewBox="0 0 36 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.7396 0C28.204 0 35.0895 6.88548 35.0895 15.3482C35.0895 23.8126 28.204 30.6981 19.7396 30.6981H2.1973C1.27725 30.6981 0.488632 30.1286 0.136385 29.2944C-0.170299 28.462 0.0487607 27.4964 0.707692 26.883L5.92481 22.0146C4.91714 19.9537 4.38964 17.6737 4.38964 15.3482C4.38964 6.88548 11.2751 0 19.7396 0Z"
                    fill="#7BB8DC"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.0893 15.3487C35.0893 23.8132 28.2038 30.6986 19.7393 30.6986V0.00050354C28.2038 0.00050354 35.0893 6.88423 35.0893 15.3487Z"
                    fill="#A4CBEC"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.3182 19.735C26.3182 20.9618 25.3526 21.9274 24.1258 21.9274H15.3547C14.4767 21.9274 13.6881 21.4016 13.3376 20.5674C12.9871 19.735 13.1606 18.8132 13.8195 18.1999L18.8193 13.1562H15.3547C14.1262 13.1562 13.1606 12.1906 13.1606 10.9639C13.1606 9.73539 14.1262 8.77153 15.3547 8.77153H24.1258C25.0021 8.77153 25.7924 9.29727 26.1429 10.1315C26.4952 10.9639 26.3182 11.8839 25.661 12.499L20.6594 17.5427H24.1258C25.3526 17.5427 26.3182 18.5065 26.3182 19.735Z"
                    fill="#FEFEFE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.3181 19.735C26.3181 20.9618 25.3525 21.9274 24.1258 21.9274H19.7393V8.77153H24.1258C25.002 8.77153 25.7924 9.29727 26.1429 10.1315C26.4951 10.9639 26.3181 11.8839 25.6609 12.499L20.6594 17.5427H24.1258C25.3525 17.5427 26.3181 18.5065 26.3181 19.735Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="a-main__body">
        <div class="container">
          <div class="a-main__wrap">
            <div class="a-data">
              <div class="a-data__list d-flex justify-content-between">
                <div class="a-data__title align-self-center">
                  Pharmacist will call you
                </div>
                <div class="a-data__info align-self-center">
                  <svg
                    class="a-tick"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4.83158L5.16842 9L12.4526 1"
                      stroke="#10C1BC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="a-data__list d-flex justify-content-between">
                <div class="a-data__title align-self-center">
                  Schedule a time to meet
                </div>
                <div class="a-data__info align-self-center">
                  <svg
                    class="a-tick"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4.83158L5.16842 9L12.4526 1"
                      stroke="#10C1BC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="a-data__btn btn btn-green">
                <a href="tel:1234" class="btn-link"> Call Now </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="a-main__footer">
        <div class="container">
          <div class="a-main__footer-wrap text-center">
            <div class="a-main__footer-logo">
              <img src="images/amcal-logo.png" />
            </div>
            <p class="sub-par">Your pharmacy is Lowe’s Amcal, Werribee</p>
            <div class="a-main__footer-option">
              <router-link :to="{ path: 'account' }">
                Change Pharmacy
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>