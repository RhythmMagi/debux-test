/*  ************************************************************************
 * Created by Wontae Han, Alejandro Romero, Shafayat Alam and Jeff Schrock.
 * Copyright © 2018 De-Bux. All rights reserved.
 **************************************************************************/

import { traverse16 } from './traverse';

var runDebux = false;
if(!runDebux) {
  const reactGlobalHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  if(reactGlobalHook) {
    const reactInstances = reactGlobalHook._renderers;
    const instance = reactInstances[Object.keys(reactInstances)[0]];
    let virtualDOM;
    (function setHook() {
      // React fiber (16+)
      if(instance && instance.version) {
        reactGlobalHook.onCommitFiberRoot = (function (onCommitFiberRoot) {
          return function (...args) {
            virtualDOM = args[1];
            traverse16(virtualDOM);
            return onCommitFiberRoot(...args);
          };
        })(reactGlobalHook.onCommitFiberRoot);

      // React 15 or below
      } else if(instance && instance.Reconciler) {
        console.log('React version(16+) is required');
      } else {
        console.log('React not found');
      }
    })();

    window.addEventListener('debuxtest', () => {
      traverse16(virtualDOM);
    });
  } else {
    console.log('React devtool is not installed.')
  }
  runDebux = true;
}
