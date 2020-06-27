import { useEffect, useCallback } from 'react'; // adapted from details-menu web component https://github.com/github/details-menu-element

function useKeyboardNav(details, open, setOpen) {
  var handleKeyDown = useCallback(function (event) {
    var closeDetails = function closeDetails() {
      setOpen(false);
      var summary = details.current.querySelector('summary');
      if (summary) summary.focus();
    };

    var openDetails = function openDetails() {
      setOpen(true);
    };

    var focusItem = function focusItem(next) {
      var options = Array.from(details.current.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])'));
      var selected = document.activeElement;
      var index = options.indexOf(selected);
      var found = next ? options[index + 1] : options[index - 1];
      var def = next ? options[0] : options[options.length - 1];
      return found || def;
    };

    var isMenuItem = function isMenuItem(el) {
      var role = el.getAttribute('role');
      return role === 'menuitem' || role === 'menuitemcheckbox' || role === 'menuitemradio';
    };

    if (!(event instanceof KeyboardEvent)) return;
    var isSummaryFocused = event.target instanceof Element && event.target.tagName === 'SUMMARY';

    switch (event.key) {
      case 'Escape':
        if (open) {
          closeDetails(details);
          event.preventDefault();
          event.stopPropagation();
        }

        break;

      case 'ArrowDown':
        {
          if (isSummaryFocused && !open) {
            openDetails(details);
          }

          var target = focusItem(true);
          if (target) target.focus();
          event.preventDefault();
        }
        break;

      case 'ArrowUp':
        {
          if (isSummaryFocused && !open) {
            openDetails();
          }

          var _target = focusItem(false);

          if (_target) _target.focus();
          event.preventDefault();
        }
        break;

      case ' ':
      case 'Enter':
        {
          var selected = document.activeElement;

          if (selected && isMenuItem(selected) && selected.closest('details') === details) {
            event.preventDefault();
            event.stopPropagation();
            selected.click();
          }
        }
        break;
    }
  }, [details, open, setOpen]);
  useEffect(function () {
    var current = details.current;
    if (!current) return;
    current.addEventListener('keydown', handleKeyDown);
    return function () {
      current.removeEventListener('keydown', handleKeyDown);
    };
  }, [details, handleKeyDown]);
}

export default useKeyboardNav;