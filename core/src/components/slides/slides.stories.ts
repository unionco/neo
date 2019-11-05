import { storiesOf } from '@storybook/html';

storiesOf('Carousel', module)
  .add('Default', (): string => {
    return `
      <h2>Tag: neo-slides & neo-slide</h2>
      <h4>TODO::All events need to proxy through our component</h4>
      <p>Carousel that leverage the <a href="https://swiperjs.com" target="_blank">Swiper</a> slider library</p>
      <div>
        <neo-slides>
          <neo-slide>slide one</neo-slide>
          <neo-slide>slide two</neo-slide>
          <neo-slide>slide three</neo-slide>
        </neo-slides>
      </div>
    `
  })
  .add('Pager', (): string => {
    return `
      <h2>Tag: neo-slides & neo-slide</h2>
      <p>Carousel that leverage the <a href="https://swiperjs.com" target="_blank">Swiper</a> slider library</p>
      <div>
        <neo-slides pager>
          <neo-slide>slide one</neo-slide>
          <neo-slide>slide two</neo-slide>
          <neo-slide>slide three</neo-slide>
        </neo-slides>
      </div>
    `
  })
  .add('Scroll Bar', (): string => {
    return `
      <h2>Tag: neo-slides & neo-slide</h2>
      <p>Carousel that leverage the <a href="https://swiperjs.com" target="_blank">Swiper</a> slider library</p>
      <div>
        <neo-slides scrollbar>
          <neo-slide>slide one</neo-slide>
          <neo-slide>slide two</neo-slide>
          <neo-slide>slide three</neo-slide>
        </neo-slides>
      </div>
    `
  })
  .add('Navigation', (): string => {
    return `
      <h2>Tag: neo-slides & neo-slide</h2>
      <p>Carousel that leverage the <a href="https://swiperjs.com" target="_blank">Swiper</a> slider library</p>
      <div>
        <neo-slides pager buttons>
          <neo-slide>slide one</neo-slide>
          <neo-slide>slide two</neo-slide>
          <neo-slide>slide three</neo-slide>
        </neo-slides>
      </div>
    `
  })
  .add('Custom', (): string => {
    return `
      <h2>Tag: neo-slides & neo-slide</h2>
      <p>Carousel that leverage the <a href="https://swiperjs.com" target="_blank">Swiper</a> slider library</p>
      <pre>
config
{
  "centeredSlides": true,
  "slidesPerView": "auto",
  "initialSlide": 1,
  "spaceBetween": 20,
  "loop": true
}

css
neo-slide {
  max-width: 70%;
}
      </pre>
      <style>
        neo-slide {
          max-width: 70%;
        }
      </style>
      <div>
        <neo-slides pager buttons opts='{"centeredSlides": true, "slidesPerView": "auto", "initialSlide": 1, "spaceBetween": 20, "loop": true}'>
          <neo-slide>slide one</neo-slide>
          <neo-slide>slide two</neo-slide>
          <neo-slide>slide three</neo-slide>
          <neo-slide>slide four</neo-slide>
          <neo-slide>slide five</neo-slide>
          <neo-slide>slide six</neo-slide>
        </neo-slides>
      </div>
    `
  });
