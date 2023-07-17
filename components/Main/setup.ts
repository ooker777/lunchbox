import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';
import { iLayout } from '../Layout/setup.ts';

export type iMain = iComponent & {
  layout_type: LAYOUT_TYPES | null;
  fwd: Partial<{
    layout: iLayout;
  }>;
};

const defaults: iMain = {
  layout_type: null,
  fwd: {},
};

export default (props: Partial<iMain>) => {
  const p = applyDefaults<iMain>(defaults, props);

  const { layout } = p.fwd;

  const classes = partializeClasses({
    main: opt(cn('comp-main clr-bg-page'), p.class, p.nostyle),
    layout: cn(layout?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
