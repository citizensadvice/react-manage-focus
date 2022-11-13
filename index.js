// Captures the current focus
let currentFocus;

document.addEventListener('focus', (e) => {
  currentFocus = e.target;
}, { capture: true, passive: true })

function findRemovedNearestNeightbour(mutations, target) {
  for (const mutation of mutations) {
    for (const node of mutation.removedNodes) {
      if (node.contains(target)) {
        const root = mutation.nextSibling || mutation.previousSibling || mutation.target;
        if (!root.isConnected) {
          return findRemovedNearestNeightbour(mutations, root);
        }
        return root;
      }
    }
  }
  return null;
}

const observer = new MutationObserver((mutations) => {
  if (!currentFocus) {
    return;
  }
  const removedAt = findRemovedNearestNeightbour(mutations, currentFocus);
  if (!removedAt) {
    return;
  }
  const groupName = currentFocus.dataset.focusGroup;
  if (groupName) {
    if (document.activeElement !== document.body) {
      return;
    }
    const focusGroup = document.querySelectorAll(`[data-focus-group~=${CSS.escape(groupName)}]`);
    for (const element of focusGroup) {
      if (!element.isConnected) {
        continue;
      }
      if (element.compareDocumentPosition(removedAt) & Node.DOCUMENT_POSITION_PRECEDING) {
        last = element;
      }
    }
    last?.focus();
  }
});

observer.observe(document.body, { subtree: true, childList: true })
