import { CommonModule } from '@angular/common';
import { NG_VALIDATORS } from '@angular/forms';
import { Directive, forwardRef, NgModule } from '@angular/core';
import { isValid } from '@fnando/cnpj';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CnpjValidator {
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        /** @type {?} */
        let cnpj = control.value;
        if (cnpj && !isValid(cnpj)) {
            return { cnpj: { error: 'Whoops! This cnpj number is not valid )' } };
        }
        return null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCnpjValidator {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCnpjValidatorModule {
}
NgxCnpjValidatorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgxCnpjValidator],
                exports: [NgxCnpjValidator]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxCnpjValidatorModule, NgxCnpjValidator as ɵa, CnpjValidator as ɵb };

//# sourceMappingURL=ngx-address-autocomplete.js.map