/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALIDATORS } from '@angular/forms';
import { Directive, forwardRef } from '@angular/core';
import { CnpjValidator } from './ngx-cnpj.validator';
export class NgxCnpjValidator {
}
NgxCnpjValidator.decorators = [
    { type: Directive, args: [{
                selector: '[ngx-cnpj][ngModel]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef(() => CnpjValidator),
                        multi: true
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNucGouZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFkZHJlc3MtYXV0b2NvbXBsZXRlLyIsInNvdXJjZXMiOlsibmd4LWNucGouZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBYXJELE1BQU0sT0FBTyxnQkFBZ0I7OztZQVg1QixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQzt3QkFDNUMsS0FBSyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0o7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDbnBqVmFsaWRhdG9yIH0gZnJvbSAnLi9uZ3gtY25wai52YWxpZGF0b3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tuZ3gtY25wal1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ25walZhbGlkYXRvciksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neENucGpWYWxpZGF0b3IgeyB9Il19