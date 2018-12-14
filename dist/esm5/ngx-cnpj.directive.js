/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALIDATORS } from '@angular/forms';
import { Directive, forwardRef } from '@angular/core';
import { CnpjValidator } from './ngx-cnpj.validator';
var NgxCnpjValidator = /** @class */ (function () {
    function NgxCnpjValidator() {
    }
    NgxCnpjValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[ngx-cnpj][ngModel]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(function () { return CnpjValidator; }),
                            multi: true
                        }
                    ]
                },] }
    ];
    return NgxCnpjValidator;
}());
export { NgxCnpjValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNucGouZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFkZHJlc3MtYXV0b2NvbXBsZXRlLyIsInNvdXJjZXMiOlsibmd4LWNucGouZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJEO0lBQUE7SUFXZ0MsQ0FBQzs7Z0JBWGhDLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLENBQUM7NEJBQzVDLEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO2lCQUNKOztJQUUrQix1QkFBQztDQUFBLEFBWGpDLElBV2lDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDbnBqVmFsaWRhdG9yIH0gZnJvbSAnLi9uZ3gtY25wai52YWxpZGF0b3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3gtY25wal1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ25walZhbGlkYXRvciksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neENucGpWYWxpZGF0b3IgeyB9Il19