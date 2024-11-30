// Prepare for Failure
var removeListeners = [];
function destroyBelt(caller, err) {
  try {
    console.error(
      'Belt cannot function at "' + caller + '"' +
      ' and is being shut down'
    );
    console.error(err);
  } catch (e) {}
  try {
    document.getElementById('utilityBelt').remove();
  } catch (e) {}
  try {
    var footers = document
      .getElementsByTagName('footer');
    for (let i = 0; i < footers.length; i++) {
      footers[i].className = footers[i]
        .className.replace('utility-belt-active','');
    }
  } catch (e) {}
  // Clean up event listeners
  // Stop blocking garbage collection
  try {
    while (removeListeners.length) {
      try {
        removeListeners.pop()();
      } catch (err) {
        try {
          console.warn(
            'Failed to remove a listener'
          );
          console.warn(err);
        } catch (e) {}
      }
    }
  } catch (e) {}
  // I don't want to talk to you ever again!
  removeListeners = null;
  destroyBelt = null;
  try {
    delete window.removeListeners;
  } catch (e) {}
  try {
    delete window.destroyBelt;
  } catch (e) {}
  // (call me)
}
/*
* Perhaps this code could be considered very trying!
* It's done to ensure that any failure is caught
* and results in a complete shutdown of the utility
* belt. So it's never displayed in a broken state.
* Particularly since some features that are used
* have only been in browsers a few years.
*
* It's coded defensively with vintage features for
* handling that and otherwise uses modern JS fairly
* freely. No modern browser? No utility belt!
*
* This is a form of graceful degregedation.
*
* This was written using Working Copy (iOS Git
* client) so it's formatted to around 54 characters.
*
* ~
* Nigel Peck prescriptionfree.academy Nov. 2024
*/
try {
  const utilityBelt = document.getElementById('utilityBelt');
  const btnHome = document.getElementById('btnHome');
  const btnDynamicToc = document.getElementById('btnDynamicToc');
  const btnTop = document.getElementById('btnTop');
  let menuToc;
  const menuNav = document.getElementById('menuNav');
  const switchToSiteMenu = document.getElementById('switchToSiteMenu');
  const switchToPageMenu = document.getElementById('switchToPageMenu');
  const dynamicToc = document.getElementById('dynamicToc');
  const registerListener = (el, ev, fn) => {
    try {
      el.addEventListener(ev, fn);
      removeListeners.push(
        el.removeEventListener.bind(null, ev, fn)
      );
    } catch (err) {
      destroyBelt('registerListener', err);
    }
  };
  const registerListenerMatrix = (lnrMat) => {
    try {
      for (const args of lnrMat) {
        registerListener(...args);
      }
    } catch (err) {
      destroyBelt('registerListenerMatrix', err);
    }
  };
  const maintainBeltState = () => {
    try {
      if (window.scrollY >= 200) {
        utilityBelt.classList.remove('collapsed');
      } else {
        utilityBelt.classList.add('collapsed');
      }
    } catch (err) {
      destroyBelt('maintainBeltState', err);
    }
  };
  const showMenuToc = (e) => {
    try {
      if (e) e.preventDefault();
      menuToc.classList.add('shown');
      menuNav.classList.remove('shown');
      switchToPageMenu.querySelector('a')
        .classList.add('selected');
      switchToSiteMenu.querySelector('a')
        .classList.remove('selected');
    } catch (err) {
      destroyBelt('showMenuToc', err);
    }
  };
  const showMenuNav = (e) => {
    try {
      if (e) e.preventDefault();
      menuToc.classList.remove('shown');
      menuNav.classList.add('shown');
      switchToPageMenu.querySelector('a')
        .classList.remove('selected');
      switchToSiteMenu.querySelector('a')
        .classList.add('selected');
    } catch (err) {
      destroyBelt('showMenuNav', err);
    }
  };
  const goHome = () => {
    try {
      location.href = '/';
    } catch (err) {
      destroyBelt('goHome', err);
    }
  };
  const toggleDynamicToc = () => {
    try {
      utilityBelt.classList.toggle('show-toc');
      if (utilityBelt.classList
        .contains('show-toc')) showMenuToc();
    } catch (err) {
      destroyBelt('toggleDynamicToc', err);
    }
  };
  const hideToc = () => {
    try {
      utilityBelt.classList.remove('show-toc');
    } catch (err) {
      destroyBelt('hideToc', err);
    }
  };
  const scrollTop = () => {
    try {
      document.documentElement
        .scrollTo({ top: 0, behavior: 'smooth' });
      location.hash = '';
    } catch (err) {
      destroyBelt('scrollTop', err);
    }
  };
  const populateToc = () => {
    try {
      const menu = document.createElement('menu');
      menu.id = 'menuToc';
      menu.classList.add('shown');
      const tocItems = document
        .querySelectorAll('section h2');
      for(const entry of tocItems) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.innerText = entry.innerText;
        link.href = '#' + entry.innerText
          .toLowerCase()
          .replaceAll(/\s+/g, '-')
          .replaceAll(/[^a-z-]/g, '');
        registerListener(
          link, 'click', hideToc
        );
        li.append(link);
        menu.append(li);
      }
      dynamicToc.prepend(menu);
      menuToc = menu;
    } catch (err) {
      destroyBelt('populateToc', err);
    }
  };
  const activateUtilityBelt = () => {
    try {
      populateToc();
      registerListenerMatrix([
        [btnHome, 'click', goHome],
        [btnDynamicToc, 'click', toggleDynamicToc],
        [btnTop, 'click', scrollTop],
        [switchToSiteMenu, 'click', showMenuNav],
        [switchToPageMenu, 'click', showMenuToc],
        [window, 'scroll', maintainBeltState],
      ]);
      maintainBeltState();
      // Finally show the belt, so that if there was
      // a failure nothing broken is visible.
      document.querySelector('footer')
        .classList.add('utility-belt-active');
      utilityBelt.classList.add('shown');
    } catch (err) {
      destroyBelt('activateUtilityBelt', err);
    }
  };
  activateUtilityBelt();
} catch (err) {
  destroyBelt('main', err);
}
/*
* References to anything declared there now only
* exist as event listeners or within event
* listener removers. Nice and clean.
*/
