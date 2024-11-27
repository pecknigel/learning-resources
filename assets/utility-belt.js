// Prepare for Failure
var removeListeners = [];

function disableBeltOnError(caller, err) {
  utilityBelt.remove();
  console.error(
    'Belt cannot function at "' +
    caller +
    '" and has been shut down'
  );
  console.error(err);
  // Clean up now unwanted listeners
  // Stop blocking garbage collection
  while (removeListeners.length) {
    try {
      removeListeners.pop()();
    } catch (err) {
      console.warn('Failed to remove a listener');
      console.warn(err);
    }
  }
  // I dont want to talk to you ever again!
  removeListeners = null;
  disableBeltOnError = null;
  try {
    delete window.removeListeners;
    delete window.disableBeltOnError;
  } catch (e) {
  }
  // (call me)
}

/*
* Perhaps this code could be consudered very trying!
* It's done to ensure that any failure is caught
* and results in a complete shutdown of the utility
* belt. So it's never displayed in a broken state.
* Particularly since some features that are used
* have pnly been in browsers a few years.
*
* It's coded defensively with vintage features for
* handling that and othetwise uses modern JS fairly
* freely. No modern browser? No utility belt!
*
* This is a form of graceful degredation.
*
* This was written using Working Copy (iOS Git client)
* which is why it's formatted to 50 characters width.
*
* ~
* Nigel Peck prescriptionfree.academy Nov. 2024
*/
try {
  const registerListener = (el, ev, fn) => {
    try {
      el.addEventListener(ev, fn);
      removeListeners.push(
        el.removeEventListener.bind(null, ev, fn)
      );
    } catch (err) {
      disableBeltOnError('registerListener', err);
    }
  };
  const registerListenerMatrix = (lnrMat) => {
    try {
      for (const args of lnrMat) {
        registerListener(...args);
      }
    } catch (err) {
      disableBeltOnError('registerListenerMatrix', err);
    }
  };
  const maintainBeltState = () => {
    try {
      if (scrollY >= 200) {
        utilityBelt.classList.remove('collapsed');
      } else {
        utilityBelt.classList.add('collapsed');
      }
    } catch (err) {
      disableBeltOnError('maintainBeltState', err);
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
      disableBeltOnError('showMenuToc', err);
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
      disableBeltOnError('showMenuNav', err);
    }
  };
  const goHome = () => {
    try {
      location.href = '/';
    } catch (err) {
      disableBeltOnError('goHome', err);
    }
  };
  const toggleDynamicToc = () => {
    try {
      utilityBelt.classList.toggle('show-toc');
      if (utilityBelt.classList.contains('show-toc')) {
        showMenuToc();
      }
    } catch (err) {
      disableBeltOnError('toggleDynamicToc', err);
    }
  };
  const hideToc = () => {
    try {
      utilityBelt.classList.remove('show-toc')
    } catch (err) {
      disableBeltOnError('hideToc', err);
    }
  };
  const scrollTop = () => {
    try {
      document.documentElement
        .scrollTo({top: 0, behavior: 'smooth'});
      location.hash = '';
    } catch (err) {
      disableBeltOnError('scrollTop', err);
    }
  };
  const populateToc = () => {
    try {
      const menu = document.createElement('menu');
      menu.id = 'menuToc';
      menu.classList.add('shown');
      const tocItems = document
        .querySelectorAll('section h1, section h2');
      for (const entry of tocItems) {
        const li = document.createElement('li');
        if (entry.tagName === 'H1') {
          li.classList.add('primary');
        }
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
    } catch (err) {
      disableBeltOnError('populateToc', err);
    }
  };
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
  utilityBelt.classList.add('shown');
} catch (err) {
  disableBeltOnError(err);
}
// References to any of that now only exist as
// event listeners or within listener removers
