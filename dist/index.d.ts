import { ComponentInternalInstance } from 'vue';

type Fn = () => void;
/**
 * Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 * @param target
 */
declare function tryOnUnmounted(fn: Fn, target?: ComponentInternalInstance | null): void;

export { tryOnUnmounted };
