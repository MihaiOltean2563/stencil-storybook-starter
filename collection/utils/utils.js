export function format(first, middle, last) {
    return ((first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : ''));
}
export function lowercase(s) {
    return s.trim().toLowerCase();
}
export function capitalize(s) {
    if (typeof s !== 'string')
        return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}
