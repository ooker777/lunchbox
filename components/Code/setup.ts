import { cn } from '../../deps.ts';
import { applyDefaults } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';

export type iCode = iExtendedElement & {
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iCode = {
  fwd: {},
};

export default (props: Partial<iCode>) => {
  const p = applyDefaults<iCode>(defaults, props);

  const classes = {
    code: cn('comp-code clr-txt-personality', p.class),
    wrapper: cn('comp-code_wrapper clr-bg-panel', p.fwd.wrapper?.class),
  };

  return { c: classes, ...p };
};