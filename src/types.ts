//   ___ _                   _
//  | __| |___ _ __  ___ _ _| |_
//  | _|| / -_) '  \/ -_) ' \  _|
//  |___|_\___|_|_|_\___|_||_\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains auxiliary types related to HTML Elements and their properties.
 * @module
 */

import { JSX, Ref } from 'preact';

/**
 * This type is a shorthand for an extension of `JSX.HTMLAttributes<T>`, `Partial<ARIAMixin>`, and ` Partial<GlobalEventHandlers>`.
 */
export type iExtendedElement<T extends EventTarget = HTMLElement> = JSX.HTMLAttributes<T> &
  Partial<ARIAMixin> &
  Partial<GlobalEventHandlers> & {
    nostyle?: boolean;
    fref?: Ref<T>;
  };

/**
 *  This type is a shorthand that helps in forwarding props and references to a component's part.
 */
export type iFwd<T extends EventTarget = HTMLElement> = iExtendedElement<T> & {
  ref?: Ref<T>;
};

/**
 * This type is a shorthand of `Record<string | number | symbol, never>` that `deno-lint(ban-types) recommends as the correct way to express the type of an empty object.`.
 */
export type EmptyObject = Record<string | number | symbol, never>;
