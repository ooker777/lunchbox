import { css, ResinCssEmitter, ResinCssGlobalStyle } from '../../deps.ts';
import { globalStyles, themeStyles } from '../../src/styles.ts';

export default function () {
  return (
    <>
      <link rel='stylesheet' href='/fonts/fonts.css' />
      <ResinCssGlobalStyle
        css={css`
        ${globalStyles.cssReset}
        ${globalStyles.sizes}
        ${globalStyles.fonts}
        ${themeStyles.newspaper}
      `}
      />
      <ResinCssEmitter />
      <style>
        {'@container(width>35em){.lbx-card_panel{display:grid;grid-template-columns:30% 70%}.lbx-card_image{aspect-ratio:1 / 1;border-radius:var(--s-quarter)0 0 var(--s-quarter)}.lbx-card_section{padding-left:var(--s-single)}}.lbx-input_box{padding - bottom:calc(var( -  - s - single) + var( -  - s - three - eights))}.lbx-fieldset,.lbx-input_box .lbx-input,.lbx-input_box .lbx-textarea,.lbx-input_box .lbx-select{width:calc(100% + var( -  - s - half))}.h{&-min{height:min-content}&-inherit{height:inherit}}.w-prose{max-width:90ch}.aspect-square{aspect-ratio:1 / 1}.y-flip{transform:scaleY(-1)}.x-flip{transform:scaleX(-1)}.flip{transform:scale(-1)}.comp-gradient{min-height:var(--s-triple)}.comp-gradient_cloud{background:linear-gradient(var(--clr-bg-panel)50%,transparent 0)0 0,radial-gradient(circle closest-side,var(--clr-bg-panel)53%,transparent 0)0 0,radial-gradient(circle closest-side,var(--clr-bg-panel)50%,transparent 0)2.5em 0var(--clr-bg-page);background-size:5em 5em;background-position-y:-2.5em;background-repeat:repeat-x}.comp-gradient_zigzag{background:linear-gradient(135deg,var(--clr-bg-panel)25%,transparent 25%)-1em 0,linear-gradient(225deg,var(--clr-bg-panel)25%,transparent 25%)-1em 0,linear-gradient(315deg,var(--clr-bg-panel)25%,transparent 25%),linear-gradient(45deg,var(--clr-bg-panel)25%,transparent 25%);background-size:2em 2em;background-color:var(--clr-bg-page)}.comp-gradient_wave{background:radial-gradient(37.5% 12.5% at 62.5% 100%,transparent 32%,var(--clr-bg-panel)34% 99%,transparent 101%)0 -1.5em,radial-gradient(37.5% 12.5% at 62.5% 0,transparent 32%,var(--clr-bg-panel)34% 99%,transparent 101%)0 1.5em,radial-gradient(37.5% 12.5% at 62.5% 100%,transparent 32%,var(--clr-bg-page)34% 99%,transparent 101%)1em 1.5em,radial-gradient(37.5% 12.5% at 62.5% 0,transparent 32%,var(--clr-bg-page)34% 99%,transparent 101%)1em 4.5em,radial-gradient(37.5% 12.5% at 62.5% 100%,transparent 32%,var(--clr-bg-panel)34% 99%,transparent 101%)2em 4.5em,radial-gradient(37.5% 12.5% at 62.5% 0,transparent 32%,var(--clr-bg-panel)34% 99%,transparent 101%)2em 7.5em,radial-gradient(37.5% 12.5% at 62.5% 100%,transparent 32%,var(--clr-bg-page)34% 99%,transparent 101%)3em 7.5em,radial-gradient(37.5% 12.5% at 62.5% 0,transparent 32%,var(--clr-bg-page)34% 99%,transparent 101%)3em -1.5em,linear-gradient(var(--clr-bg-panel)0 12.5%,var(--clr-bg-page)0 37.5%,var(--clr-bg-panel)0 62.5%,var(--clr-bg-page)0 87.5%,var(--clr-bg-panel)0 100%);background-size:4em 12em}'}
      </style>
    </>
  );
}
