/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as CNPJ from '@fnando/cnpj';
export class CnpjValidator {
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        /** @type {?} */
        let cnpj = control.value;
        if (cnpj && !CNPJ.isValid(cnpj)) {
            return { cnpj: { error: 'Whoops! This cnpj number is not valid )' } };
        }
        return null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNucGoudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWFkZHJlc3MtYXV0b2NvbXBsZXRlLyIsInNvdXJjZXMiOlsibmd4LWNucGoudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssSUFBSSxNQUFNLGNBQWMsQ0FBQTtBQUVwQyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDdEIsUUFBUSxDQUFDLE9BQW9COztZQUNyQixJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFDeEIsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUseUNBQXlDLEVBQUUsRUFBRSxDQUFBO1NBQ3hFO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgKiBhcyBDTlBKIGZyb20gJ0BmbmFuZG8vY25waidcblxuZXhwb3J0IGNsYXNzIENucGpWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XG4gICAgICAgIGxldCBjbnBqID0gY29udHJvbC52YWx1ZVxuICAgICAgICBpZiAoY25waiAmJiAhQ05QSi5pc1ZhbGlkKGNucGopKSB7XG4gICAgICAgICAgICByZXR1cm4geyBjbnBqOiB7IGVycm9yOiAnV2hvb3BzISBUaGlzIGNucGogbnVtYmVyIGlzIG5vdCB2YWxpZCApJyB9IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iXX0=