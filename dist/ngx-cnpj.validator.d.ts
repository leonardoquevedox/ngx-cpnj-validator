import { FormControl, Validator } from '@angular/forms';
export declare class CnpjValidator implements Validator {
    validate(control: FormControl): {
        cnpj: {
            error: string;
        };
    };
}
