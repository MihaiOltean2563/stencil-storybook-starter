function format(first, middle, last) {
    return ((first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : ''));
}
function lowercase(s) {
    return s.trim().toLowerCase();
}
function capitalize(s) {
    if (typeof s !== 'string')
        return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export { capitalize as c, format as f, lowercase as l };
