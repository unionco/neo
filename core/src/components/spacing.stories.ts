import { storiesOf } from '@storybook/html';
import { number } from '@storybook/addon-knobs';

storiesOf('Spacing', module)
  .add('Margin', (): string => {
    return `
      <style>
        :root {
          --neo-spacing-base: ${number('--neo-spacing-base', 16, { min: 12, max: 24, step: 1 })}px;
        }
        .wrapper {
          border: 1px solid #eee;
          background: var(--neo-color-primary);
        }
        .spacer {
          background: white;
          display: block;
          min-height: 25px;
          position: relative;
        }
        .spacer span {
          margin-left: 16px;
        }
      </style>
      <div>
        <h2>Margin</h2>
        <pre><code>.m-[size]
.my-[size]
.mx-[size]
.m[t|r|b|l]-[size]</code></pre>
        <div class="wrapper"><div class="spacer ml-0"><span>0 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-1"><span>1 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-2"><span>2 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-3"><span>3 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-4"><span>4 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-5"><span>5 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-6"><span>6 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-8"><span>8 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-10"><span>10 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-12"><span>12 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-16"><span>16 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-20"><span>20 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-24"><span>24 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-32"><span>32 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-40"><span>40 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-48"><span>48 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-56"><span>56 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer ml-64"><span>64 * 1rem</span></div></div>
      </div>
    `;
  })
  .add('Padding', (): string => {
    return `
      <style>
        :root {
          --neo-spacing-base: ${number('--neo-spacing-base', 16, { min: 12, max: 24, step: 1 })}px;
        }
        .wrapper {
          border: 1px solid #eee;
          background: var(--neo-color-primary);
        }
        .spacer {
          display: flex;
          min-height: 25px;
          position: relative;
        }
        .spacer span {
          height: 32px;
          width: 100%;
          padding-left: 16px;
          background: white;
        }
      </style>
      <div>
        <h2>Padding</h2>
        <pre><code>.p-[size]
.py-[size]
.px-[size]
.p[t|r|b|l]-[size]</code></pre>
        <div class="wrapper"><div class="spacer pl-0"><span>0 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-1"><span>1 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-2"><span>2 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-3"><span>3 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-4"><span>4 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-5"><span>5 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-6"><span>6 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-8"><span>8 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-10"><span>10 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-12"><span>12 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-16"><span>16 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-20"><span>20 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-24"><span>24 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-32"><span>32 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-40"><span>40 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-48"><span>48 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-56"><span>56 * 1rem</span></div></div>
        <div class="wrapper"><div class="spacer pl-64"><span>64 * 1rem</span></div></div>
      </div>
    `;
  });
