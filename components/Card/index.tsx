import setup, { iCard } from './setup.ts';
import Panel from '../Panel/index.tsx';

export default function (props: Partial<iCard>) {
  const { c, fref, fwd, children, ...p } = setup(props);

  return (
    <Panel fref={fwd?.panel?.fref!}>
      <div ref={fref} class={c.card} {...p}>
        {children}
      </div>
    </Panel>
  );
}
