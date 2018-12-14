import { NG_VALIDATORS } from '@angular/forms'
import { Directive, forwardRef } from '@angular/core'
import { CnpjValidator } from './ngx-cnpj.validator';

@Directive({
    selector: '[ngx-cnpj][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CnpjValidator),
            multi: true
        }
    ]
})

export class NgxCnpjValidator { }