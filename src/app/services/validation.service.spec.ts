import {TestBed, inject, ComponentFixture} from '@angular/core/testing';

import {ValidationService} from './validation.service';
import {LayoutModule} from '../layout/layout.module';

describe('ValidationService', () => {

    const service = new ValidationService();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ValidationService]
        });

    });

    it('Debe de regresar True si le envío un campo vacío, null o undefined', () => {

        let resEmpty = ValidationService.errorInField('');
        let resNull = ValidationService.errorInField(null);
        let resUndefined = ValidationService.errorInField(undefined);

        expect(resEmpty).toBeTruthy();
        expect(resNull).toBeTruthy();
        expect(resUndefined).toBeTruthy();

    });

    it('Debe de regresar False si le envío una cadena "Hola" o un numero 55', () => {

        let res = ValidationService.errorInField('Hola');
        let resNum = ValidationService.errorInField(55);

        expect(res).toBeFalsy();
        expect(resNum).toBeFalsy();

    });

    it('Debe de regresar True si le envío un objeto con propiedades undefined', () => {

        let res = ValidationService.errorInObject({nombre: undefined, apellido: 'Gutierrez'});

        expect(res).toBeTruthy();

    });

    it('Debe de regresar False si le envio un objeto con propiedades completas', ()=> {

        let res = ValidationService.errorInObject({nombre: 'Carlos', apellido: 'Gutierrez'});

        expect(res).toBeFalsy();

    });

});
