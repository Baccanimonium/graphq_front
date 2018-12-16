export const debounce = (fn, time) => {
    let timeout;

    return function () { // eslint-disable-line func-names
        const functionCall = () => fn.apply(this, ...fn);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    };
};
