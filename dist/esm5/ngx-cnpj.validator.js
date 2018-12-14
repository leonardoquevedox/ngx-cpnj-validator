/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as CNPJ from '@fnando/cnpj';
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
export { CnpjValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNucGoudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFkZHJlc3MtYXV0b2NvbXBsZXRlLyIsInNvdXJjZXMiOlsibmd4LWNucGoudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssSUFBSSxNQUFNLGNBQWMsQ0FBQTtBQUVwQztJQUFBO0lBUUEsQ0FBQzs7Ozs7SUFQRyxnQ0FBUTs7OztJQUFSLFVBQVMsT0FBb0I7O1lBQ3JCLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSztRQUN4QixJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSx5Q0FBeUMsRUFBRSxFQUFFLENBQUE7U0FDeEU7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0ICogYXMgQ05QSiBmcm9tICdAZm5hbmRvL2NucGonXG5cbmV4cG9ydCBjbGFzcyBDbnBqVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICB2YWxpZGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCkge1xuICAgICAgICBsZXQgY25waiA9IGNvbnRyb2wudmFsdWVcbiAgICAgICAgaWYgKGNucGogJiYgIUNOUEouaXNWYWxpZChjbnBqKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgY25wajogeyBlcnJvcjogJ1dob29wcyEgVGhpcyBjbnBqIG51bWJlciBpcyBub3QgdmFsaWQgKScgfSB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59Il19