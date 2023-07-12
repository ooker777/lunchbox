import { ComponentChild } from 'preact';
import setup, { iFooter } from './setup.ts';
import Layout from '../Layout/index.tsx';
import Panel from '../Panel/index.tsx';
import Link from '../Link/index.tsx';

/**
 * @todo [ ] Lazy load the `made-with-fresh` images.
 * @todo [?] Replace an src image with an inline SVG.
 */
export default function (props: Partial<iFooter>) {
  const { c, fref, fwd, children, layout_type, madeWithFresh, ...p } = setup(props);

  if (madeWithFresh) {
    (children as [ComponentChild]).push(
      <Link fref={fwd.badge_link?.ref} class={c.badge_link} href="https://fresh.deno.dev">
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
          class={c.badge_light}
          ref={fwd.badge_light?.ref}
        />
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge-dark.svg"
          alt="Made with Fresh"
          class={c.badge_dark}
          ref={fwd.badge_dark?.ref}
        />
      </Link>
    );
  }

  return (
    <Panel fref={fwd.panel?.ref} class={c.panel}>
      <footer ref={fref} {...p} class={c.footer}>
        {layout_type ? (
          <Layout fref={fwd.layout?.ref} type={layout_type} class={c.layout}>
            {children}
          </Layout>
        ) : (
          <>{children}</>
        )}
      </footer>
    </Panel>
  );
}