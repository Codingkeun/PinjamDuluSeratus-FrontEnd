const amountInputValidation = function (elementIdName, event) {
    let input = $(elementIdName).val();

    if (isNaN(input) || input < 10000) {
        event.preventDefault();
        $(elementIdName + ' + div.amountInvalidInputMessage').removeAttr('hidden');
        return false;
    }
    $(elementIdName + ' + div.amountInvalidInputMessage').attr('hidden', '');
    return true;
}

const numberInputValidation = function (elementIdName, event) {
    let input = $(elementIdName).val();

    if (isNaN(input)) {
        event.preventDefault();
        $(elementIdName + ' + div.numberInvalidInputMessage').removeAttr('hidden');
        return false;
    }
    $(elementIdName + ' + div.numberInvalidInputMessage').attr('hidden', '');
    return true;
}