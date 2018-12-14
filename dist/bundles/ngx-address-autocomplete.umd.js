(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/forms'), require('@angular/core'), require('@fnando/cnpj')) :
    typeof define === 'function' && define.amd ? define('ngx-address-autocomplete', ['exports', '@angular/common', '@angular/forms', '@angular/core', '@fnando/cnpj'], factory) :
    (factory((global['ngx-address-autocomplete'] = {}),global.ng.common,global.ng.forms,global.ng.core,global.CNPJ));
}(this, (function (exports,common,forms,core,CNPJ) { 'use strict';

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
                if (cnpj && !CNPJ.isValid(cnpj)) {
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
            { type: core.Directive, args: [{
                        selector: '[ngx-cnpj][ngModel]',
                        providers: [
                            {
                                provide: forms.NG_VALIDATORS,
                                useExisting: core.forwardRef(function () { return CnpjValidator; }),
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NgxCnpjValidatorModule = NgxCnpjValidatorModule;
    exports.ɵa = NgxCnpjValidator;
    exports.ɵb = CnpjValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-address-autocomplete.umd.js.map