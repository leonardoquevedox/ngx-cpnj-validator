import { CommonModule } from '@angular/common';
import { NG_VALIDATORS } from '@angular/forms';
import { Directive, forwardRef, NgModule } from '@angular/core';
import { isValid } from '@fnando/cnpj';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CnpjValidator = /** @class */ (function () {
    function CnpjValidator() {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    CnpjValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var cnpj = control.value;
        if (cnpj && !isValid(cnpj)) {
            return { cnpj: { error: 'Whoops! This cnpj number is not valid )' } };
        }
        return null;
    };
    return CnpjValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxCnpjValidatorModule = /** @class */ (function () {
    function NgxCnpjValidatorModule() {
    }
    NgxCnpjValidatorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [NgxCnpjValidator],
                    exports: [NgxCnpjValidator]
                },] }
    ];
    return NgxCnpjValidatorModule;
}());

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