import { onUnmounted, getCurrentInstance } from 'vue';

function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function tryOnUnmounted(fn, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onUnmounted(fn, target);
}

export { tryOnUnmounted };
