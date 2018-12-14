/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxCnpjValidator } from './ngx-cnpj.directive'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxCnpjValidator],
    exports: [NgxCnpjValidator]
})
export class NgxCnpjValidatorModule { }