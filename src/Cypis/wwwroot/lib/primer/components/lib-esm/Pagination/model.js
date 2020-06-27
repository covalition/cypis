export function buildPaginationModel(pageCount, currentPage, showPages, marginPageCount, surroundingPageCount) {
  var pages = [];

  if (showPages) {
    var pageNums = [];

    var addPage = function addPage(n) {
      if (n >= 1 && n <= pageCount) {
        pageNums.push(n);
      }
    }; // Start by defining the window of pages to show around the current page.
    // If the window goes off either edge, shift it until it fits.


    var extentLeft = currentPage - surroundingPageCount;
    var extentRight = currentPage + surroundingPageCount;

    if (extentLeft < 1 && extentRight > pageCount) {
      // Our window is larger than the entire range,
      // so simply display every page.
      extentLeft = 1;
      extentRight = pageCount;
    } else if (extentLeft < 1) {
      while (extentLeft < 1) {
        extentLeft++;
        extentRight++;
      }
    } else if (extentRight > pageCount) {
      while (extentRight > pageCount) {
        extentLeft--;
        extentRight--;
      }
    } // Next, include the pages in the margins.
    // If a margin page is already covered in the window,
    // extend the window to the other direction.


    for (var i = 1; i <= marginPageCount; i++) {
      var leftPage = i;
      var rightPage = pageCount - (i - 1);

      if (leftPage >= extentLeft) {
        extentRight++;
      } else {
        addPage(leftPage);
      }

      if (rightPage <= extentRight) {
        extentLeft--;
      } else {
        addPage(rightPage);
      }
    }

    for (var _i = extentLeft; _i <= extentRight; _i++) {
      addPage(_i);
    }

    var sorted = pageNums.slice().sort(function (a, b) {
      return a - b;
    }).filter(function (item, idx, ary) {
      return !idx || item !== ary[idx - 1];
    });

    for (var idx = 0; idx < sorted.length; idx++) {
      var num = sorted[idx];
      var selected = num === currentPage;

      if (idx === 0) {
        if (num !== 1) {
          // If the first page isn't page one,
          // we need to add a break
          pages.push({
            type: 'BREAK',
            num: 1
          });
        }

        pages.push({
          type: 'NUM',
          num: num,
          selected: selected
        });
      } else {
        var last = sorted[idx - 1];
        var delta = num - last;

        if (delta === 1) {
          pages.push({
            type: 'NUM',
            num: num,
            selected: selected
          });
        } else {
          // We skipped some, so add a break
          pages.push({
            type: 'BREAK',
            num: num - 1
          });
          pages.push({
            type: 'NUM',
            num: num,
            selected: selected
          });
        }
      }
    }

    var lastPage = pages[pages.length - 1];

    if (lastPage.type === 'NUM' && lastPage.num !== pageCount) {
      // The last page we rendered wasn't the actual last page,
      // so we need an additional break
      pages.push({
        type: 'BREAK',
        num: pageCount
      });
    }
  }

  var prev = {
    type: 'PREV',
    num: currentPage - 1,
    disabled: currentPage === 1
  };
  var next = {
    type: 'NEXT',
    num: currentPage + 1,
    disabled: currentPage === pageCount
  };
  return [prev].concat(pages, [next]);
}
export function buildComponentData(page, hrefBuilder, onClick) {
  var props = {};
  var content = '';
  var key = '';

  switch (page.type) {
    case 'PREV':
      {
        key = 'page-prev';
        content = 'Previous';

        if (page.disabled) {
          Object.assign(props, {
            as: 'span',
            'aria-disabled': 'true'
          });
        } else {
          Object.assign(props, {
            rel: 'prev',
            href: hrefBuilder(page.num),
            'aria-label': 'Previous Page',
            onClick: onClick
          });
        }

        break;
      }

    case 'NEXT':
      {
        key = 'page-next';
        content = 'Next';

        if (page.disabled) {
          Object.assign(props, {
            as: 'span',
            'aria-disabled': 'true'
          });
        } else {
          Object.assign(props, {
            rel: 'next',
            href: hrefBuilder(page.num),
            'aria-label': 'Next Page',
            onClick: onClick
          });
        }

        break;
      }

    case 'NUM':
      {
        key = "page-".concat(page.num);
        content = page.num;

        if (page.selected) {
          Object.assign(props, {
            as: 'em',
            'aria-current': 'page'
          });
        } else {
          Object.assign(props, {
            href: hrefBuilder(page.num),
            'aria-label': "Page ".concat(page.num),
            onClick: onClick
          });
        }

        break;
      }

    case 'BREAK':
      {
        key = "page-".concat(page.num, "-break");
        content = '…';
        Object.assign(props, {
          as: 'span',
          'aria-disabled': true
        });
      }
  }

  return {
    props: props,
    key: key,
    content: content
  };
}