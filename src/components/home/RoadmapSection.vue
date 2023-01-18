<script setup></script>

<template>
  <section id="roadmap" class="section">
    <div class="container">
      <div class="roadmap">
        <div class="roadmap__title title">Roadmap</div>

        <div class="roadmap-table roadmap__table">
          <div class="roadmap-table__row">
            <div class="roadmap-table__title">Q1 2022</div>
            <div class="roadmap-table__content">
              <div class="roadmap-table__text">
                <p>Launching Website along with Whitepaper</p>
                <p>Start Development on IOS, Android and Web Application</p>
              </div>
            </div>
          </div>

          <div class="roadmap-table__row roadmap-table__row--active">
            <div class="roadmap-table__title">Q2 2022</div>
            <div class="roadmap-table__content">
              <div class="roadmap-table__text">
                <p>Launch $EVRN Token</p>
                <p>Certik audit</p>
              </div>

              <div class="roadmap-table__text">
                <p>Staking functionality</p>
                <p>Press Releases / Marketing</p>
              </div>
            </div>
          </div>

          <div class="roadmap-table__row">
            <div class="roadmap-table__title">Q3 2022</div>
            <div class="roadmap-table__content">
              <div class="roadmap-table__text">
                <p>Everun app rollout / App Store & Play Store</p>
                <p>ERC20 Bridge</p>
              </div>

              <div class="roadmap-table__text">
                <p>Centralized exchange listing</p>
                <p>Fiat gateway to increase adoption of $EVRN</p>
              </div>
            </div>
          </div>

          <div class="roadmap-table__row">
            <div class="roadmap-table__title">
              Q4 2022 <br />
              Q1 2023
            </div>
            <div class="roadmap-table__content">
              <div class="roadmap-table__text">
                <p>Additional play mechanics</p>
                <p>
                  Open API for developers to invent and impement developers’ own
                  play mechanics
                </p>
                <p>Everun London Office</p>
              </div>

              <div class="roadmap-table__text">
                <p>Creation of fitness meta-universe and meta game mechanics</p>
                <p>Allocation of land for sale and habitat by players</p>
                <p>DeFi Ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.roadmap {
  &__title {
    text-align: center;
  }

  &__table {
    margin-top: 60px;
    @include media-md {
      margin-top: 40px;
    }
  }
}

.roadmap-table {
  $this: &;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: $border-gray;
    border-radius: 2px;
  }

  &:before {
    top: -2px;
  }

  &:after {
    bottom: -2px;
  }

  &__row {
    position: relative;
    display: flex;

    :where(&:not(:first-child)) {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: -2px;
        width: 100%;
        height: 4px;
        background-color: $border-gray;
        border-radius: 2px;
      }
    }

    &--active {
      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: $green;
        border-radius: 2px;
        z-index: 1;
      }

      &:before {
        top: -2px;
      }

      &:after {
        bottom: -2px;
      }

      #{$this}__title {
        border-color: $green;
      }

      #{$this}__content {
        position: relative;

        &:after {
          content: "";
          position: absolute;
          top: -60px;
          right: 40px;
          width: 176px;
          height: 142px;
          background-image: url("@images/roadmap-step.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          z-index: 2;
          @include media-md {
            top: initial;
            bottom: 10px;
            right: 30px;
            width: 129px;
            height: 104px;
          }
          @include media-sm {
            top: 90px;
            bottom: initial;
            right: calc(100% - 15px);
          }
        }
      }
    }
  }

  &__title {
    flex: 0 0 150px;
    padding: 40px 40px 40px 0;
    font-size: 24px;
    font-weight: $bold;
    line-height: 29px;
    border-right: 4px solid $border-gray;
    @include media-sm {
      flex-basis: 110px;
      padding: 20px 20px 20px 0;
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__content {
    flex: 1 1 auto;
    display: flex;
    gap: 60px;
    padding: 40px;
    @include media-md {
      flex-direction: column;
      gap: 20px;
    }
    @include media-sm {
      padding: 20px;
    }
  }

  &__text {
    flex: 1;
    font-size: 16px;
    font-weight: $medium;
    line-height: 22px;
    color: $gray3;

    p + p {
      margin-top: 20px;
    }
  }
}
</style>
