export function calculateTotalWeight(unitWeight: number, length: number) {
    const weightKg = length * unitWeight;
    const weightLb = weightKg * 2.20462;
    return { lb: weightLb.toFixed(2), kg: weightKg.toFixed(2) };
}
