import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function CapitalLetter(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const valor=control.value.toUpperCase()[0]===control.value[0]

        return valor ? null : {errorMayus:control.value}
    }
}


