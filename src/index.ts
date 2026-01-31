import type { ComponentInternalInstance } from 'vue'
// Inlined from @vueuse/shared/utils
type Fn = () => void

// eslint-disable-next-line no-restricted-imports
import { onUnmounted } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance } from 'vue'

function getLifeCycleTarget(target?: ComponentInternalInstance | null) {
  return target || getCurrentInstance()
}


/**
 * Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 * @param target
 */
export function tryOnUnmounted(fn: Fn, target?: ComponentInternalInstance | null) {
  const instance = getLifeCycleTarget(target)
  if (instance)
    onUnmounted(fn, target)
}
