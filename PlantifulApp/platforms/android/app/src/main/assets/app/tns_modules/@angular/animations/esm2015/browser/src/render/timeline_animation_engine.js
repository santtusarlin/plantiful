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
import { AUTO_STYLE } from '@angular/animations';
import { buildAnimationAst } from '../dsl/animation_ast_builder';
import { buildAnimationTimelines } from '../dsl/animation_timeline_builder';
import { ElementInstructionMap } from '../dsl/element_instruction_map';
import { ENTER_CLASSNAME, LEAVE_CLASSNAME } from '../util';
import { getOrSetAsInMap, listenOnPlayer, makeAnimationEvent, normalizeKeyframes, optimizeGroupPlayer } from './shared';
/** @type {?} */
const EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
export class TimelineAnimationEngine {
    /**
     * @param {?} bodyNode
     * @param {?} _driver
     * @param {?} _normalizer
     */
    constructor(bodyNode, _driver, _normalizer) {
        this.bodyNode = bodyNode;
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._animations = {};
        this._playersById = {};
        this.players = [];
    }
    /**
     * @param {?} id
     * @param {?} metadata
     * @return {?}
     */
    register(id, metadata) {
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const ast = buildAnimationAst(this._driver, metadata, errors);
        if (errors.length) {
            throw new Error(`Unable to build the animation due to the following errors: ${errors.join("\n")}`);
        }
        else {
            this._animations[id] = ast;
        }
    }
    /**
     * @param {?} i
     * @param {?} preStyles
     * @param {?=} postStyles
     * @return {?}
     */
    _buildPlayer(i, preStyles, postStyles) {
        /** @type {?} */
        const element = i.element;
        /** @type {?} */
        const keyframes = normalizeKeyframes(this._driver, this._normalizer, element, i.keyframes, preStyles, postStyles);
        return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    create(id, element, options = {}) {
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const ast = this._animations[id];
        /** @type {?} */
        let instructions;
        /** @type {?} */
        const autoStylesMap = new Map();
        if (ast) {
            instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, {}, {}, options, EMPTY_INSTRUCTION_MAP, errors);
            instructions.forEach(inst => {
                /** @type {?} */
                const styles = getOrSetAsInMap(autoStylesMap, inst.element, {});
                inst.postStyleProps.forEach(prop => styles[prop] = null);
            });
        }
        else {
            errors.push('The requested animation doesn\'t exist or has already been destroyed');
            instructions = [];
        }
        if (errors.length) {
            throw new Error(`Unable to create the animation due to the following errors: ${errors.join("\n")}`);
        }
        autoStylesMap.forEach((styles, element) => {
            Object.keys(styles).forEach(prop => { styles[prop] = this._driver.computeStyle(element, prop, AUTO_STYLE); });
        });
        /** @type {?} */
        const players = instructions.map(i => {
            /** @type {?} */
            const styles = autoStylesMap.get(i.element);
            return this._buildPlayer(i, {}, styles);
        });
        /** @type {?} */
        const player = optimizeGroupPlayer(players);
        this._playersById[id] = player;
        player.onDestroy(() => this.destroy(id));
        this.players.push(player);
        return player;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    destroy(id) {
        /** @type {?} */
        const player = this._getPlayer(id);
        player.destroy();
        delete this._playersById[id];
        /** @type {?} */
        const index = this.players.indexOf(player);
        if (index >= 0) {
            this.players.splice(index, 1);
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    _getPlayer(id) {
        /** @type {?} */
        const player = this._playersById[id];
        if (!player) {
            throw new Error(`Unable to find the timeline player referenced by ${id}`);
        }
        return player;
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    listen(id, element, eventName, callback) {
        // triggerName, fromState, toState are all ignored for timeline animations
        /** @type {?} */
        const baseEvent = makeAnimationEvent(element, '', '', '');
        listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
        return () => { };
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} command
     * @param {?} args
     * @return {?}
     */
    command(id, element, command, args) {
        if (command == 'register') {
            this.register(id, (/** @type {?} */ (args[0])));
            return;
        }
        if (command == 'create') {
            /** @type {?} */
            const options = (/** @type {?} */ ((args[0] || {})));
            this.create(id, element, options);
            return;
        }
        /** @type {?} */
        const player = this._getPlayer(id);
        switch (command) {
            case 'play':
                player.play();
                break;
            case 'pause':
                player.pause();
                break;
            case 'reset':
                player.reset();
                break;
            case 'restart':
                player.restart();
                break;
            case 'finish':
                player.finish();
                break;
            case 'init':
                player.init();
                break;
            case 'setPosition':
                player.setPosition(parseFloat((/** @type {?} */ (args[0]))));
                break;
            case 'destroy':
                this.destroy(id);
                break;
        }
    }
}
if (false) {
    /** @type {?} */
    TimelineAnimationEngine.prototype._animations;
    /** @type {?} */
    TimelineAnimationEngine.prototype._playersById;
    /** @type {?} */
    TimelineAnimationEngine.prototype.players;
    /** @type {?} */
    TimelineAnimationEngine.prototype.bodyNode;
    /** @type {?} */
    TimelineAnimationEngine.prototype._driver;
    /** @type {?} */
    TimelineAnimationEngine.prototype._normalizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmVfYW5pbWF0aW9uX2VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuaW1hdGlvbnMvYnJvd3Nlci9zcmMvcmVuZGVyL3RpbWVsaW5lX2FuaW1hdGlvbl9lbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsVUFBVSxFQUEwRixNQUFNLHFCQUFxQixDQUFDO0FBR3hJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRTFFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBQyxlQUFlLEVBQUUsZUFBZSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBR3pELE9BQU8sRUFBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sVUFBVSxDQUFDOztNQUVoSCxxQkFBcUIsR0FBRyxJQUFJLHFCQUFxQixFQUFFO0FBRXpELE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUtsQyxZQUNXLFFBQWEsRUFBVSxPQUF3QixFQUM5QyxXQUFxQztRQUR0QyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDOUMsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO1FBTnpDLGdCQUFXLEdBQStDLEVBQUUsQ0FBQztRQUM3RCxpQkFBWSxHQUFvQyxFQUFFLENBQUM7UUFDcEQsWUFBTyxHQUFzQixFQUFFLENBQUM7SUFJYSxDQUFDOzs7Ozs7SUFFckQsUUFBUSxDQUFDLEVBQVUsRUFBRSxRQUErQzs7Y0FDNUQsTUFBTSxHQUFVLEVBQUU7O2NBQ2xCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFB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bUJBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pCLE1BQU07U0FDVDtJQUNILENBQUM7Q0FDRjs7O0lBeElDLDhDQUFxRTs7SUFDckUsK0NBQTJEOztJQUMzRCwwQ0FBdUM7O0lBR25DLDJDQUFvQjs7SUFBRSwwQ0FBZ0M7O0lBQ3RELDhDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QVVUT19TVFlMRSwgQW5pbWF0aW9uTWV0YWRhdGEsIEFuaW1hdGlvbk1ldGFkYXRhVHlwZSwgQW5pbWF0aW9uT3B0aW9ucywgQW5pbWF0aW9uUGxheWVyLCDJtVN0eWxlRGF0YX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7QXN0fSBmcm9tICcuLi9kc2wvYW5pbWF0aW9uX2FzdCc7XG5pbXBvcnQge2J1aWxkQW5pbWF0aW9uQXN0fSBmcm9tICcuLi9kc2wvYW5pbWF0aW9uX2FzdF9idWlsZGVyJztcbmltcG9ydCB7YnVpbGRBbmltYXRpb25UaW1lbGluZXN9IGZyb20gJy4uL2RzbC9hbmltYXRpb25fdGltZWxpbmVfYnVpbGRlcic7XG5pbXBvcnQge0FuaW1hdGlvblRpbWVsaW5lSW5zdHJ1Y3Rpb259IGZyb20gJy4uL2RzbC9hbmltYXRpb25fdGltZWxpbmVfaW5zdHJ1Y3Rpb24nO1xuaW1wb3J0IHtFbGVtZW50SW5zdHJ1Y3Rpb25NYXB9IGZyb20gJy4uL2RzbC9lbGVtZW50X2luc3RydWN0aW9uX21hcCc7XG5pbXBvcnQge0FuaW1hdGlvblN0eWxlTm9ybWFsaXplcn0gZnJvbSAnLi4vZHNsL3N0eWxlX25vcm1hbGl6YXRpb24vYW5pbWF0aW9uX3N0eWxlX25vcm1hbGl6ZXInO1xuaW1wb3J0IHtFTlRFUl9DTEFTU05BTUUsIExFQVZFX0NMQVNTTkFNRX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7QW5pbWF0aW9uRHJpdmVyfSBmcm9tICcuL2FuaW1hdGlvbl9kcml2ZXInO1xuaW1wb3J0IHtnZXRPclNldEFzSW5NYXAsIGxpc3Rlbk9uUGxheWVyLCBtYWtlQW5pbWF0aW9uRXZlbnQsIG5vcm1hbGl6ZUtleWZyYW1lcywgb3B0aW1pemVHcm91cFBsYXllcn0gZnJvbSAnLi9zaGFyZWQnO1xuXG5jb25zdCBFTVBUWV9JTlNUUlVDVElPTl9NQVAgPSBuZXcgRWxlbWVudEluc3RydWN0aW9uTWFwKCk7XG5cbmV4cG9ydCBjbGFzcyBUaW1lbGluZUFuaW1hdGlvbkVuZ2luZSB7XG4gIHByaXZhdGUgX2FuaW1hdGlvbnM6IHtbaWQ6IHN0cmluZ106IEFzdDxBbmltYXRpb25NZXRhZGF0YVR5cGU+fSA9IHt9O1xuICBwcml2YXRlIF9wbGF5ZXJzQnlJZDoge1tpZDogc3RyaW5nXTogQW5pbWF0aW9uUGxheWVyfSA9IHt9O1xuICBwdWJsaWMgcGxheWVyczogQW5pbWF0aW9uUGxheWVyW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBib2R5Tm9kZTogYW55LCBwcml2YXRlIF9kcml2ZXI6IEFuaW1hdGlvbkRyaXZlcixcbiAgICAgIHByaXZhdGUgX25vcm1hbGl6ZXI6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplcikge31cblxuICByZWdpc3RlcihpZDogc3RyaW5nLCBtZXRhZGF0YTogQW5pbWF0aW9uTWV0YWRhdGF8QW5pbWF0aW9uTWV0YWRhdGFbXSkge1xuICAgIGNvbnN0IGVycm9yczogYW55W10gPSBbXTtcbiAgICBjb25zdCBhc3QgPSBidWlsZEFuaW1hdGlvbkFzdCh0aGlzLl9kcml2ZXIsIG1ldGFkYXRhLCBlcnJvcnMpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFVuYWJsZSB0byBidWlsZCB0aGUgYW5pbWF0aW9uIGR1ZSB0byB0aGUgZm9sbG93aW5nIGVycm9yczogJHtlcnJvcnMuam9pbihcIlxcblwiKX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYW5pbWF0aW9uc1tpZF0gPSBhc3Q7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRQbGF5ZXIoXG4gICAgICBpOiBBbmltYXRpb25UaW1lbGluZUluc3RydWN0aW9uLCBwcmVTdHlsZXM6IMm1U3R5bGVEYXRhLFxuICAgICAgcG9zdFN0eWxlcz86IMm1U3R5bGVEYXRhKTogQW5pbWF0aW9uUGxheWVyIHtcbiAgICBjb25zdCBlbGVtZW50ID0gaS5lbGVtZW50O1xuICAgIGNvbnN0IGtleWZyYW1lcyA9IG5vcm1hbGl6ZUtleWZyYW1lcyhcbiAgICAgICAgdGhpcy5fZHJpdmVyLCB0aGlzLl9ub3JtYWxpemVyLCBlbGVtZW50LCBpLmtleWZyYW1lcywgcHJlU3R5bGVzLCBwb3N0U3R5bGVzKTtcbiAgICByZXR1cm4gdGhpcy5fZHJpdmVyLmFuaW1hdGUoZWxlbWVudCwga2V5ZnJhbWVzLCBpLmR1cmF0aW9uLCBpLmRlbGF5LCBpLmVhc2luZywgW10sIHRydWUpO1xuICB9XG5cbiAgY3JlYXRlKGlkOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucyA9IHt9KTogQW5pbWF0aW9uUGxheWVyIHtcbiAgICBjb25zdCBlcnJvcnM6IGFueVtdID0gW107XG4gICAgY29uc3QgYXN0ID0gdGhpcy5fYW5pbWF0aW9uc1tpZF07XG4gICAgbGV0IGluc3RydWN0aW9uczogQW5pbWF0aW9uVGltZWxpbmVJbnN0cnVjdGlvbltdO1xuXG4gICAgY29uc3QgYXV0b1N0eWxlc01hcCA9IG5ldyBNYXA8YW55LCDJtVN0eWxlRGF0YT4oKTtcblxuICAgIGlmIChhc3QpIHtcbiAgICAgIGluc3RydWN0aW9ucyA9IGJ1aWxkQW5pbWF0aW9uVGltZWxpbmVzKFxuICAgICAgICAgIHRoaXMuX2RyaXZlciwgZWxlbWVudCwgYXN0LCBFTlRFUl9DTEFTU05BTUUsIExFQVZFX0NMQVNTTkFNRSwge30sIHt9LCBvcHRpb25zLFxuICAgICAgICAgIEVNUFRZX0lOU1RSVUNUSU9OX01BUCwgZXJyb3JzKTtcbiAgICAgIGluc3RydWN0aW9ucy5mb3JFYWNoKGluc3QgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRPclNldEFzSW5NYXAoYXV0b1N0eWxlc01hcCwgaW5zdC5lbGVtZW50LCB7fSk7XG4gICAgICAgIGluc3QucG9zdFN0eWxlUHJvcHMuZm9yRWFjaChwcm9wID0+IHN0eWxlc1twcm9wXSA9IG51bGwpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9ycy5wdXNoKCdUaGUgcmVxdWVzdGVkIGFuaW1hdGlvbiBkb2VzblxcJ3QgZXhpc3Qgb3IgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWQnKTtcbiAgICAgIGluc3RydWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFVuYWJsZSB0byBjcmVhdGUgdGhlIGFuaW1hdGlvbiBkdWUgdG8gdGhlIGZvbGxvd2luZyBlcnJvcnM6ICR7ZXJyb3JzLmpvaW4oXCJcXG5cIil9YCk7XG4gICAgfVxuXG4gICAgYXV0b1N0eWxlc01hcC5mb3JFYWNoKChzdHlsZXMsIGVsZW1lbnQpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChcbiAgICAgICAgICBwcm9wID0+IHsgc3R5bGVzW3Byb3BdID0gdGhpcy5fZHJpdmVyLmNvbXB1dGVTdHlsZShlbGVtZW50LCBwcm9wLCBBVVRPX1NUWUxFKTsgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwbGF5ZXJzID0gaW5zdHJ1Y3Rpb25zLm1hcChpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IGF1dG9TdHlsZXNNYXAuZ2V0KGkuZWxlbWVudCk7XG4gICAgICByZXR1cm4gdGhpcy5fYnVpbGRQbGF5ZXIoaSwge30sIHN0eWxlcyk7XG4gICAgfSk7XG4gICAgY29uc3QgcGxheWVyID0gb3B0aW1pemVHcm91cFBsYXllcihwbGF5ZXJzKTtcbiAgICB0aGlzLl9wbGF5ZXJzQnlJZFtpZF0gPSBwbGF5ZXI7XG4gICAgcGxheWVyLm9uRGVzdHJveSgoKSA9PiB0aGlzLmRlc3Ryb3koaWQpKTtcblxuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XG4gICAgcmV0dXJuIHBsYXllcjtcbiAgfVxuXG4gIGRlc3Ryb3koaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuX2dldFBsYXllcihpZCk7XG4gICAgcGxheWVyLmRlc3Ryb3koKTtcbiAgICBkZWxldGUgdGhpcy5fcGxheWVyc0J5SWRbaWRdO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wbGF5ZXJzLmluZGV4T2YocGxheWVyKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGxheWVyKGlkOiBzdHJpbmcpOiBBbmltYXRpb25QbGF5ZXIge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuX3BsYXllcnNCeUlkW2lkXTtcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCB0aGUgdGltZWxpbmUgcGxheWVyIHJlZmVyZW5jZWQgYnkgJHtpZH1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllcjtcbiAgfVxuXG4gIGxpc3RlbihpZDogc3RyaW5nLCBlbGVtZW50OiBzdHJpbmcsIGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IGFueSk6XG4gICAgICAoKSA9PiB2b2lkIHtcbiAgICAvLyB0cmlnZ2VyTmFtZSwgZnJvbVN0YXRlLCB0b1N0YXRlIGFyZSBhbGwgaWdub3JlZCBmb3IgdGltZWxpbmUgYW5pbWF0aW9uc1xuICAgIGNvbnN0IGJhc2VFdmVudCA9IG1ha2VBbmltYXRpb25FdmVudChlbGVtZW50LCAnJywgJycsICcnKTtcbiAgICBsaXN0ZW5PblBsYXllcih0aGlzLl9nZXRQbGF5ZXIoaWQpLCBldmVudE5hbWUsIGJhc2VFdmVudCwgY2FsbGJhY2spO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfVxuXG4gIGNvbW1hbmQoaWQ6IHN0cmluZywgZWxlbWVudDogYW55LCBjb21tYW5kOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKGNvbW1hbmQgPT0gJ3JlZ2lzdGVyJykge1xuICAgICAgdGhpcy5yZWdpc3RlcihpZCwgYXJnc1swXSBhcyBBbmltYXRpb25NZXRhZGF0YSB8IEFuaW1hdGlvbk1ldGFkYXRhW10pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb21tYW5kID09ICdjcmVhdGUnKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gKGFyZ3NbMF0gfHwge30pIGFzIEFuaW1hdGlvbk9wdGlvbnM7XG4gICAgICB0aGlzLmNyZWF0ZShpZCwgZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5fZ2V0UGxheWVyKGlkKTtcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgIGNhc2UgJ3BsYXknOlxuICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICBwbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXN0YXJ0JzpcbiAgICAgICAgcGxheWVyLnJlc3RhcnQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmaW5pc2gnOlxuICAgICAgICBwbGF5ZXIuZmluaXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgIHBsYXllci5pbml0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2V0UG9zaXRpb24nOlxuICAgICAgICBwbGF5ZXIuc2V0UG9zaXRpb24ocGFyc2VGbG9hdChhcmdzWzBdIGFzIHN0cmluZykpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc3Ryb3knOlxuICAgICAgICB0aGlzLmRlc3Ryb3koaWQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiJdfQ==