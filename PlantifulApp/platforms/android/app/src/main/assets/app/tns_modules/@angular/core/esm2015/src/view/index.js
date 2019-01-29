/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { anchorDef, elementDef } from './element';
export { clearOverrides, createNgModuleFactory, overrideComponentView, overrideProvider } from './entrypoint';
export { ngContentDef } from './ng_content';
export { moduleDef, moduleProvideDef } from './ng_module';
export { directiveDef, pipeDef, providerDef } from './provider';
export { pureArrayDef, pureObjectDef, purePipeDef } from './pure_expression';
export { queryDef } from './query';
export { ViewRef_, createComponentFactory, getComponentViewDefinitionFactory, nodeValue } from './refs';
export { initServicesIfNeeded } from './services';
export { textDef } from './text';
export { EMPTY_ARRAY, EMPTY_MAP, createRendererType2, elementEventFullName, inlineInterpolate, interpolate, rootRenderNodes, tokenKey, unwrapValue } from './util';
export { viewDef } from './view';
export { attachEmbeddedView, detachEmbeddedView, moveEmbeddedView } from './view_attach';
export { shiftInitState, shouldCallLifecycleInitHook, asTextData, asElementData, asProviderData, asPureExpressionData, asQueryList, NodeData, DebugContext, Services } from './types';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb3JlL3NyYy92aWV3L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1RyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzlELE9BQU8sRUFBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxpQ0FBaUMsRUFBRSxTQUFTLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdEcsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ2pLLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZGLDRLQUFjLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHthbmNob3JEZWYsIGVsZW1lbnREZWZ9IGZyb20gJy4vZWxlbWVudCc7XG5leHBvcnQge2NsZWFyT3ZlcnJpZGVzLCBjcmVhdGVOZ01vZHVsZUZhY3RvcnksIG92ZXJyaWRlQ29tcG9uZW50Vmlldywgb3ZlcnJpZGVQcm92aWRlcn0gZnJvbSAnLi9lbnRyeXBvaW50JztcbmV4cG9ydCB7bmdDb250ZW50RGVmfSBmcm9tICcuL25nX2NvbnRlbnQnO1xuZXhwb3J0IHttb2R1bGVEZWYsIG1vZHVsZVByb3ZpZGVEZWZ9IGZyb20gJy4vbmdfbW9kdWxlJztcbmV4cG9ydCB7ZGlyZWN0aXZlRGVmLCBwaXBlRGVmLCBwcm92aWRlckRlZn0gZnJvbSAnLi9wcm92aWRlcic7XG5leHBvcnQge3B1cmVBcnJheURlZiwgcHVyZU9iamVjdERlZiwgcHVyZVBpcGVEZWZ9IGZyb20gJy4vcHVyZV9leHByZXNzaW9uJztcbmV4cG9ydCB7cXVlcnlEZWZ9IGZyb20gJy4vcXVlcnknO1xuZXhwb3J0IHtWaWV3UmVmXywgY3JlYXRlQ29tcG9uZW50RmFjdG9yeSwgZ2V0Q29tcG9uZW50Vmlld0RlZmluaXRpb25GYWN0b3J5LCBub2RlVmFsdWV9IGZyb20gJy4vcmVmcyc7XG5leHBvcnQge2luaXRTZXJ2aWNlc0lmTmVlZGVkfSBmcm9tICcuL3NlcnZpY2VzJztcbmV4cG9ydCB7dGV4dERlZn0gZnJvbSAnLi90ZXh0JztcbmV4cG9ydCB7RU1QVFlfQVJSQVksIEVNUFRZX01BUCwgY3JlYXRlUmVuZGVyZXJUeXBlMiwgZWxlbWVudEV2ZW50RnVsbE5hbWUsIGlubGluZUludGVycG9sYXRlLCBpbnRlcnBvbGF0ZSwgcm9vdFJlbmRlck5vZGVzLCB0b2tlbktleSwgdW53cmFwVmFsdWV9IGZyb20gJy4vdXRpbCc7XG5leHBvcnQge3ZpZXdEZWZ9IGZyb20gJy4vdmlldyc7XG5leHBvcnQge2F0dGFjaEVtYmVkZGVkVmlldywgZGV0YWNoRW1iZWRkZWRWaWV3LCBtb3ZlRW1iZWRkZWRWaWV3fSBmcm9tICcuL3ZpZXdfYXR0YWNoJztcblxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG4iXX0=