import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';
import { iLayout } from '../Layout/setup.ts';
import { iPanel } from '../Panel/setup.ts';

export type iHeader = iComponent & {
  layout_type: LAYOUT_TYPES | null;
  banner: boolean;
  fwd: Partial<{
    layout: iLayout;
    panel: iPanel;
  }>;
};

const defaults: iHeader = {
  layout_type: null,
  banner: false,
  fwd: {},
};

export default (props: Partial<iHeader>) => {
  const p = applyDefaults<iHeader>(defaults, props);

  const { layout, panel } = p.fwd;

  const classes = partializeClasses({
    header: opt(cn('comp-header'), p.class, p.nostyle),
    layout: cn(layout?.class),
    panel: opt(cn(p.banner ? 'comp-header_banner' : null), panel?.class, panel?.nostyle),
  });

  delete p.class;
  return { c: classes, ...p };
};
