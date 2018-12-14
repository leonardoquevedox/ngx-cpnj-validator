import { FormControl, Validator } from '@angular/forms'
import * as CNPJ from '@fnando/cnpj'

export class CnpjValidator implements Validator {
    validate(control: FormControl) {
        let cnpj = control.value
        if (cnpj && !CNPJ.isValid(cnpj)) {
            return { cnpj: { error: 'Whoops! This cnpj number is not valid )' } }
        }
        return null
    }
}