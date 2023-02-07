import { applyDefaults, cn } from '../../deps.ts';
import { iNavigation } from '../types/props.ts';

const defaults: iNavigation = {
  children: null,
  fixed: false,
};

export default (props: Partial<iNavigation>) => {
  const p = applyDefaults<iNavigation>(defaults, props);

  const classes = {
    wrapper: cn('h-10 relative', p.fixed ? 'z-10' : ''),
    nav: cn('py-2 w-full', p.fixed ? 'fixed' : ''),
    title: cn('flex justify-between'),
  };

  return { c: classes, ...p };
};
