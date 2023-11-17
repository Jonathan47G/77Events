import {getMonth} from './index'

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            // Given (Données initials)
            const date = new Date('2022-01-01');

            // When (Execution de la méthode qu'on teste)
            const mois = getMonth(date);

            // Then (Vérification si résultat OK)
            expect(mois).toBe('janvier');
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // to implement
            const date = new Date('2022-07-08');
            expect(getMonth(date)).toBe('juillet');
        });
    });
})

