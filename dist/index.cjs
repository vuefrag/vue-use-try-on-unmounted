'use strict';

const vue = require('vue');

function getLifeCycleTarget(target) {
  return target || vue.getCurrentInstance();
}
function tryOnUnmounted(fn, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    vue.onUnmounted(fn, target);
}

exports.tryOnUnmounted = tryOnUnmounted;
