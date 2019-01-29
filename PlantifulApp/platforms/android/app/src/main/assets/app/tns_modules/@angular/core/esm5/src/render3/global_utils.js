/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { global } from '../util';
import { assertDefined } from './assert';
import { getComponent, getDirectives, getHostElement, getInjector, getPlayers, getRootComponents, getViewComponent, markDirty } from './global_utils_api';
/**
 * This file introduces series of globally accessible debug tools
 * to allow for the Angular debugging story to function.
 *
 * To see this in action run the following command:
 *
 *   bazel run --define=compile=aot
 *   //packages/core/test/bundling/todo:devserver
 *
 *  Then load `localhost:5432` and start using the console tools.
 */
/**
 * This value reflects the property on the window where the dev
 * tools are patched (window.ng).
 * */
export var GLOBAL_PUBLISH_EXPANDO_KEY = 'ng';
/*
 * Publishes a collection of default debug tools onto `window._ng_`.
 *
 * These functions are available globally when Angular is in development
 * mode and are automatically stripped away from prod mode is on.
 */
var _published = false;
export function publishDefaultGlobalUtils() {
    if (!_published) {
        _published = true;
        publishGlobalUtil('getComponent', getComponent);
        publishGlobalUtil('getViewComponent', getViewComponent);
        publishGlobalUtil('getHostElement', getHostElement);
        publishGlobalUtil('getInjector', getInjector);
        publishGlobalUtil('getRootComponents', getRootComponents);
        publishGlobalUtil('getDirectives', getDirectives);
        publishGlobalUtil('getPlayers', getPlayers);
        publishGlobalUtil('markDirty', markDirty);
    }
}
/**
 * Publishes the given function to `window.ngDevMode` so that it can be
 * used from the browser console when an application is not in production.
 */
export function publishGlobalUtil(name, fn) {
    var w = global;
    ngDevMode && assertDefined(fn, 'function not defined');
    if (w) {
        var container = w[GLOBAL_PUBLISH_EXPANDO_KEY];
        if (!container) {
            container = w[GLOBAL_PUBLISH_EXPANDO_KEY] = {};
        }
        container[name] = fn;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3V0aWxzLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9nbG9iYWxfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUUvQixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBSXhKOzs7Ozs7Ozs7O0dBVUc7QUFFSDs7O0tBR0s7QUFDTCxNQUFNLENBQUMsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUM7QUFFL0M7Ozs7O0dBS0c7QUFDSCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDdkIsTUFBTSxVQUFVLHlCQUF5QjtJQUN2QyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEQsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNwRCxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMxRCxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbEQsaUJBQWlCLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMzQztBQUNILENBQUM7QUFNRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBWSxFQUFFLEVBQVk7SUFDMUQsSUFBTSxDQUFDLEdBQUcsTUFBdUMsQ0FBQztJQUNsRCxTQUFTLElBQUksYUFBYSxDQUFDLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3ZELElBQUksQ0FBQyxFQUFFO1FBQ0wsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFNBQVMsR0FBRyxDQUFDLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDaEQ7UUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7Z2xvYmFsfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IHthc3NlcnREZWZpbmVkfSBmcm9tICcuL2Fzc2VydCc7XG5pbXBvcnQge2dldENvbXBvbmVudCwgZ2V0RGlyZWN0aXZlcywgZ2V0SG9zdEVsZW1lbnQsIGdldEluamVjdG9yLCBnZXRQbGF5ZXJzLCBnZXRSb290Q29tcG9uZW50cywgZ2V0Vmlld0NvbXBvbmVudCwgbWFya0RpcnR5fSBmcm9tICcuL2dsb2JhbF91dGlsc19hcGknO1xuXG5cblxuLyoqXG4gKiBUaGlzIGZpbGUgaW50cm9kdWNlcyBzZXJpZXMgb2YgZ2xvYmFsbHkgYWNjZXNzaWJsZSBkZWJ1ZyB0b29sc1xuICogdG8gYWxsb3cgZm9yIHRoZSBBbmd1bGFyIGRlYnVnZ2luZyBzdG9yeSB0byBmdW5jdGlvbi5cbiAqXG4gKiBUbyBzZWUgdGhpcyBpbiBhY3Rpb24gcnVuIHRoZSBmb2xsb3dpbmcgY29tbWFuZDpcbiAqXG4gKiAgIGJhemVsIHJ1biAtLWRlZmluZT1jb21waWxlPWFvdFxuICogICAvL3BhY2thZ2VzL2NvcmUvdGVzdC9idW5kbGluZy90b2RvOmRldnNlcnZlclxuICpcbiAqICBUaGVuIGxvYWQgYGxvY2FsaG9zdDo1NDMyYCBhbmQgc3RhcnQgdXNpbmcgdGhlIGNvbnNvbGUgdG9vbHMuXG4gKi9cblxuLyoqXG4gKiBUaGlzIHZhbHVlIHJlZmxlY3RzIHRoZSBwcm9wZXJ0eSBvbiB0aGUgd2luZG93IHdoZXJlIHRoZSBkZXZcbiAqIHRvb2xzIGFyZSBwYXRjaGVkICh3aW5kb3cubmcpLlxuICogKi9cbmV4cG9ydCBjb25zdCBHTE9CQUxfUFVCTElTSF9FWFBBTkRPX0tFWSA9ICduZyc7XG5cbi8qXG4gKiBQdWJsaXNoZXMgYSBjb2xsZWN0aW9uIG9mIGRlZmF1bHQgZGVidWcgdG9vbHMgb250byBgd2luZG93Ll9uZ19gLlxuICpcbiAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUgYXZhaWxhYmxlIGdsb2JhbGx5IHdoZW4gQW5ndWxhciBpcyBpbiBkZXZlbG9wbWVudFxuICogbW9kZSBhbmQgYXJlIGF1dG9tYXRpY2FsbHkgc3RyaXBwZWQgYXdheSBmcm9tIHByb2QgbW9kZSBpcyBvbi5cbiAqL1xubGV0IF9wdWJsaXNoZWQgPSBmYWxzZTtcbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoRGVmYXVsdEdsb2JhbFV0aWxzKCkge1xuICBpZiAoIV9wdWJsaXNoZWQpIHtcbiAgICBfcHVibGlzaGVkID0gdHJ1ZTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnZ2V0Q29tcG9uZW50JywgZ2V0Q29tcG9uZW50KTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnZ2V0Vmlld0NvbXBvbmVudCcsIGdldFZpZXdDb21wb25lbnQpO1xuICAgIHB1Ymxpc2hHbG9iYWxVdGlsKCdnZXRIb3N0RWxlbWVudCcsIGdldEhvc3RFbGVtZW50KTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnZ2V0SW5qZWN0b3InLCBnZXRJbmplY3Rvcik7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldFJvb3RDb21wb25lbnRzJywgZ2V0Um9vdENvbXBvbmVudHMpO1xuICAgIHB1Ymxpc2hHbG9iYWxVdGlsKCdnZXREaXJlY3RpdmVzJywgZ2V0RGlyZWN0aXZlcyk7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldFBsYXllcnMnLCBnZXRQbGF5ZXJzKTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnbWFya0RpcnR5JywgbWFya0RpcnR5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIEdsb2JhbERldk1vZGVDb250YWluZXIgPSB7XG4gIFtHTE9CQUxfUFVCTElTSF9FWFBBTkRPX0tFWV06IHtbZm5OYW1lOiBzdHJpbmddOiBGdW5jdGlvbn07XG59O1xuXG4vKipcbiAqIFB1Ymxpc2hlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYHdpbmRvdy5uZ0Rldk1vZGVgIHNvIHRoYXQgaXQgY2FuIGJlXG4gKiB1c2VkIGZyb20gdGhlIGJyb3dzZXIgY29uc29sZSB3aGVuIGFuIGFwcGxpY2F0aW9uIGlzIG5vdCBpbiBwcm9kdWN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVibGlzaEdsb2JhbFV0aWwobmFtZTogc3RyaW5nLCBmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgY29uc3QgdyA9IGdsb2JhbCBhcyBhbnkgYXMgR2xvYmFsRGV2TW9kZUNvbnRhaW5lcjtcbiAgbmdEZXZNb2RlICYmIGFzc2VydERlZmluZWQoZm4sICdmdW5jdGlvbiBub3QgZGVmaW5lZCcpO1xuICBpZiAodykge1xuICAgIGxldCBjb250YWluZXIgPSB3W0dMT0JBTF9QVUJMSVNIX0VYUEFORE9fS0VZXTtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgY29udGFpbmVyID0gd1tHTE9CQUxfUFVCTElTSF9FWFBBTkRPX0tFWV0gPSB7fTtcbiAgICB9XG4gICAgY29udGFpbmVyW25hbWVdID0gZm47XG4gIH1cbn1cbiJdfQ==