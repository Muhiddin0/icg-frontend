export function convertLength(
    length: number,
    direction: "mmToIn" | "inToMm"
): number {
    return direction === "mmToIn" ? length / 25.4 : length * 25.4;
}
export function convertWeight(
    weight: number,
    direction: "lbToKg" | "kgToLb"
): number {
    return direction === "lbToKg" ? weight * 0.453592 : weight / 0.453592;
}
