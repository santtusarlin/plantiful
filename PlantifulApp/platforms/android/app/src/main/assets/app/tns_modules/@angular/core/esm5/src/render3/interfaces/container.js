/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HOST, NEXT, PARENT, QUERIES } from './view';
/**
 * Below are constants for LContainer indices to help us look up LContainer members
 * without having to remember the specific indices.
 * Uglify will inline these when minifying so there shouldn't be a cost.
 */
export var ACTIVE_INDEX = 0;
export var VIEWS = 1;
// PARENT, NEXT, QUERIES, and HOST are indices 2, 3, 4, and 5.
// As we already have these constants in LViewData, we don't need to re-create them.
export var NATIVE = 6;
export var RENDER_PARENT = 7;
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
export var unusedValueExportToPlacateAjd = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9pbnRlcmZhY2VzL2NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxPQUFPLEVBQUMsSUFBSSxFQUFhLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRzlEOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDdkIsOERBQThEO0FBQzlELG9GQUFvRjtBQUNwRixNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFvRi9CLGlGQUFpRjtBQUNqRiwwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLElBQU0sNkJBQTZCLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0xRdWVyaWVzfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB7UkNvbW1lbnQsIFJFbGVtZW50fSBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7U3R5bGluZ0NvbnRleHR9IGZyb20gJy4vc3R5bGluZyc7XG5pbXBvcnQge0hPU1QsIExWaWV3RGF0YSwgTkVYVCwgUEFSRU5ULCBRVUVSSUVTfSBmcm9tICcuL3ZpZXcnO1xuXG5cbi8qKlxuICogQmVsb3cgYXJlIGNvbnN0YW50cyBmb3IgTENvbnRhaW5lciBpbmRpY2VzIHRvIGhlbHAgdXMgbG9vayB1cCBMQ29udGFpbmVyIG1lbWJlcnNcbiAqIHdpdGhvdXQgaGF2aW5nIHRvIHJlbWVtYmVyIHRoZSBzcGVjaWZpYyBpbmRpY2VzLlxuICogVWdsaWZ5IHdpbGwgaW5saW5lIHRoZXNlIHdoZW4gbWluaWZ5aW5nIHNvIHRoZXJlIHNob3VsZG4ndCBiZSBhIGNvc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBBQ1RJVkVfSU5ERVggPSAwO1xuZXhwb3J0IGNvbnN0IFZJRVdTID0gMTtcbi8vIFBBUkVOVCwgTkVYVCwgUVVFUklFUywgYW5kIEhPU1QgYXJlIGluZGljZXMgMiwgMywgNCwgYW5kIDUuXG4vLyBBcyB3ZSBhbHJlYWR5IGhhdmUgdGhlc2UgY29uc3RhbnRzIGluIExWaWV3RGF0YSwgd2UgZG9uJ3QgbmVlZCB0byByZS1jcmVhdGUgdGhlbS5cbmV4cG9ydCBjb25zdCBOQVRJVkUgPSA2O1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9QQVJFTlQgPSA3O1xuXG4vKipcbiAqIFRoZSBzdGF0ZSBhc3NvY2lhdGVkIHdpdGggYSBjb250YWluZXIuXG4gKlxuICogVGhpcyBpcyBhbiBhcnJheSBzbyB0aGF0IGl0cyBzdHJ1Y3R1cmUgaXMgY2xvc2VyIHRvIExWaWV3RGF0YS4gVGhpcyBoZWxwc1xuICogd2hlbiB0cmF2ZXJzaW5nIHRoZSB2aWV3IHRyZWUgKHdoaWNoIGlzIGEgbWl4IG9mIGNvbnRhaW5lcnMgYW5kIGNvbXBvbmVudFxuICogdmlld3MpLCBzbyB3ZSBjYW4ganVtcCB0byB2aWV3T3JDb250YWluZXJbTkVYVF0gaW4gdGhlIHNhbWUgd2F5IHJlZ2FyZGxlc3NcbiAqIG9mIHR5cGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTENvbnRhaW5lciBleHRlbmRzIEFycmF5PGFueT4ge1xuICAvKipcbiAgICogVGhlIG5leHQgYWN0aXZlIGluZGV4IGluIHRoZSB2aWV3cyBhcnJheSB0byByZWFkIG9yIHdyaXRlIHRvLiBUaGlzIGhlbHBzIHVzXG4gICAqIGtlZXAgdHJhY2sgb2Ygd2hlcmUgd2UgYXJlIGluIHRoZSB2aWV3cyBhcnJheS5cbiAgICogSW4gdGhlIGNhc2UgdGhlIExDb250YWluZXIgaXMgY3JlYXRlZCBmb3IgYSBWaWV3Q29udGFpbmVyUmVmLFxuICAgKiBpdCBpcyBzZXQgdG8gbnVsbCB0byBpZGVudGlmeSB0aGlzIHNjZW5hcmlvLCBhcyBpbmRpY2VzIGFyZSBcImFic29sdXRlXCIgaW4gdGhhdCBjYXNlLFxuICAgKiBpLmUuIHByb3ZpZGVkIGRpcmVjdGx5IGJ5IHRoZSB1c2VyIG9mIHRoZSBWaWV3Q29udGFpbmVyUmVmIEFQSS5cbiAgICovXG4gIFtBQ1RJVkVfSU5ERVhdOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiB0aGUgY29udGFpbmVyJ3MgY3VycmVudGx5IGFjdGl2ZSBjaGlsZCB2aWV3cy4gVmlld3Mgd2lsbCBiZSBpbnNlcnRlZFxuICAgKiBoZXJlIGFzIHRoZXkgYXJlIGFkZGVkIGFuZCBzcGxpY2VkIGZyb20gaGVyZSB3aGVuIHRoZXkgYXJlIHJlbW92ZWQuIFdlIG5lZWRcbiAgICogdG8ga2VlcCBhIHJlY29yZCBvZiBjdXJyZW50IHZpZXdzIHNvIHdlIGtub3cgd2hpY2ggdmlld3MgYXJlIGFscmVhZHkgaW4gdGhlIERPTVxuICAgKiAoYW5kIGRvbid0IG5lZWQgdG8gYmUgcmUtYWRkZWQpIGFuZCBzbyB3ZSBjYW4gcmVtb3ZlIHZpZXdzIGZyb20gdGhlIERPTSB3aGVuIHRoZXlcbiAgICogYXJlIG5vIGxvbmdlciByZXF1aXJlZC5cbiAgICovXG4gIFtWSUVXU106IExWaWV3RGF0YVtdO1xuXG4gIC8qKlxuICAgKiBBY2Nlc3MgdG8gdGhlIHBhcmVudCB2aWV3IGlzIG5lY2Vzc2FyeSBzbyB3ZSBjYW4gcHJvcGFnYXRlIGJhY2tcbiAgICogdXAgZnJvbSBpbnNpZGUgYSBjb250YWluZXIgdG8gcGFyZW50W05FWFRdLlxuICAgKi9cbiAgW1BBUkVOVF06IExWaWV3RGF0YXxudWxsO1xuXG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB1cyB0byBqdW1wIGZyb20gYSBjb250YWluZXIgdG8gYSBzaWJsaW5nIGNvbnRhaW5lciBvciBjb21wb25lbnRcbiAgICogdmlldyB3aXRoIHRoZSBzYW1lIHBhcmVudCwgc28gd2UgY2FuIHJlbW92ZSBsaXN0ZW5lcnMgZWZmaWNpZW50bHkuXG4gICAqL1xuICBbTkVYVF06IExWaWV3RGF0YXxMQ29udGFpbmVyfG51bGw7XG5cbiAgLyoqXG4gICAqIFF1ZXJpZXMgYWN0aXZlIGZvciB0aGlzIGNvbnRhaW5lciAtIGFsbCB0aGUgdmlld3MgaW5zZXJ0ZWQgdG8gLyByZW1vdmVkIGZyb21cbiAgICogdGhpcyBjb250YWluZXIgYXJlIHJlcG9ydGVkIHRvIHF1ZXJpZXMgcmVmZXJlbmNlZCBoZXJlLlxuICAgKi9cbiAgW1FVRVJJRVNdOiBMUXVlcmllc3xudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgaG9zdCBlbGVtZW50IG9mIHRoaXMgTENvbnRhaW5lci5cbiAgICpcbiAgICogVGhlIGhvc3QgY291bGQgYmUgYW4gTFZpZXdEYXRhIGlmIHRoaXMgY29udGFpbmVyIGlzIG9uIGEgY29tcG9uZW50IG5vZGUuXG4gICAqIEluIHRoYXQgY2FzZSwgdGhlIGNvbXBvbmVudCBMVmlld0RhdGEgaXMgaXRzIEhPU1QuXG4gICAqXG4gICAqIEl0IGNvdWxkIGFsc28gYmUgYSBzdHlsaW5nIGNvbnRleHQgaWYgdGhpcyBpcyBhIG5vZGUgd2l0aCBhIHN0eWxlL2NsYXNzXG4gICAqIGJpbmRpbmcuXG4gICAqL1xuICBbSE9TVF06IFJFbGVtZW50fFJDb21tZW50fFN0eWxpbmdDb250ZXh0fExWaWV3RGF0YTtcblxuICAvKiogVGhlIGNvbW1lbnQgZWxlbWVudCB0aGF0IHNlcnZlcyBhcyBhbiBhbmNob3IgZm9yIHRoaXMgTENvbnRhaW5lci4gKi9cbiAgW05BVElWRV06IFJDb21tZW50O1xuXG4gIC8qKlxuICAgKiBQYXJlbnQgRWxlbWVudCB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGxvY2F0aW9uIHdoZXJlIGFsbCBvZiB0aGUgdmlld3Mgd2lsbCBiZVxuICAgKiBpbnNlcnRlZCBpbnRvIHRvLlxuICAgKlxuICAgKiBJZiBgcmVuZGVyUGFyZW50YCBpcyBgbnVsbGAgaXQgaXMgaGVhZGxlc3MuIFRoaXMgbWVhbnMgdGhhdCBpdCBpcyBjb250YWluZWRcbiAgICogaW4gYW5vdGhlciB2aWV3IHdoaWNoIGluIHR1cm4gaXMgY29udGFpbmVkIGluIGFub3RoZXIgY29udGFpbmVyIGFuZFxuICAgKiB0aGVyZWZvcmUgaXQgZG9lcyBub3QgeWV0IGhhdmUgaXRzIG93biBwYXJlbnQuXG4gICAqXG4gICAqIElmIGByZW5kZXJQYXJlbnRgIGlzIG5vdCBgbnVsbGAgdGhlbiBpdCBtYXkgYmU6XG4gICAqIC0gc2FtZSBhcyBgdENvbnRhaW5lck5vZGUucGFyZW50YCBpbiB3aGljaCBjYXNlIGl0IGlzIGp1c3QgYSBub3JtYWwgY29udGFpbmVyLlxuICAgKiAtIGRpZmZlcmVudCBmcm9tIGB0Q29udGFpbmVyTm9kZS5wYXJlbnRgIGluIHdoaWNoIGNhc2UgaXQgaGFzIGJlZW4gcmUtcHJvamVjdGVkLlxuICAgKiAgIEluIG90aGVyIHdvcmRzIGB0Q29udGFpbmVyTm9kZS5wYXJlbnRgIGlzIGxvZ2ljYWwgcGFyZW50IHdoZXJlIGFzXG4gICAqICAgYHRDb250YWluZXJOb2RlLnByb2plY3RlZFBhcmVudGAgaXMgcmVuZGVyIHBhcmVudC5cbiAgICpcbiAgICogV2hlbiB2aWV3cyBhcmUgaW5zZXJ0ZWQgaW50byBgTENvbnRhaW5lcmAgdGhlbiBgcmVuZGVyUGFyZW50YCBpczpcbiAgICogLSBgbnVsbGAsIHdlIGFyZSBpbiBhIHZpZXcsIGtlZXAgZ29pbmcgdXAgYSBoaWVyYXJjaHkgdW50aWwgYWN0dWFsXG4gICAqICAgYHJlbmRlclBhcmVudGAgaXMgZm91bmQuXG4gICAqIC0gbm90IGBudWxsYCwgdGhlbiB1c2UgdGhlIGBwcm9qZWN0ZWRQYXJlbnQubmF0aXZlYCBhcyB0aGUgYFJFbGVtZW50YCB0byBpbnNlcnRcbiAgICogdmlld3MgaW50by5cbiAgICovXG4gIFtSRU5ERVJfUEFSRU5UXTogUkVsZW1lbnR8bnVsbDtcbn1cblxuLy8gTm90ZTogVGhpcyBoYWNrIGlzIG5lY2Vzc2FyeSBzbyB3ZSBkb24ndCBlcnJvbmVvdXNseSBnZXQgYSBjaXJjdWxhciBkZXBlbmRlbmN5XG4vLyBmYWlsdXJlIGJhc2VkIG9uIHR5cGVzLlxuZXhwb3J0IGNvbnN0IHVudXNlZFZhbHVlRXhwb3J0VG9QbGFjYXRlQWpkID0gMTtcbiJdfQ==