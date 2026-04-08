import {differenceInDays} from 'date-fns';

export function calcularDiferenciaDias (
    fechaInicio: Date,
    fechaFin: Date
): number {
    return differenceInDays(fechaFin, fechaInicio);
}

const dias = calcularDiferenciaDias(
(new Date("2025-08-08")),
(new Date("2025-08-15"))
);
console.log(`La diferencia en días es: ${dias}`);