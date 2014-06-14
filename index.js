
/**
 * Check if the DOM element `child` is within the given `parent` DOM element.
 *
 * @param {DOMElement} child - the element to check if it with within `parent`
 * @param {DOMElement} parent  - the parent node that `child` could be inside of
 * @return {Boolean} True if `child` is within `parent`. False otherwise.
 * @public
 */

module.exports = function within (child, parent) {
  var node = child;
  while (node = node.parentNode) {
    if (node == parent) return true;
  }
  return false;
};
