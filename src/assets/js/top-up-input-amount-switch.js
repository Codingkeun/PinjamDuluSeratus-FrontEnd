import $ from 'jquery';

const topUpAmountCardOnClick = () => {
    activeAmountInputByRadioElement();
    inactiveAmountWrittenInputElement();
    $('.amountInvalidInputMessage').html('');
}

const inputTopUpAmountElementOnClick = () => {
    inactiveAmountInputByRadioElement();
    activeAmountWrittenInputElement();
    amountInvalidInputMessage();
}

const amountInvalidInputMessage = () => {
    $('.amountInvalidInputMessage').html(`
        <p class="text-danger font-weight-medium mb-0 par-0-8em">
            Inputan harus berupa angka dengan minimal nominal adalah Rp 10,000
        </p>
    `);
}

const activeAmountInputByRadioElement = () => {
    $('.amountInputByRadioElement label').css('opacity', '1');
    $('.amountInputByRadioElement input').removeAttr('disabled');
}

const inactiveAmountInputByRadioElement = () => {
    $('.amountInputByRadioElement label').css('opacity', '.5');
    $('.amountInputByRadioElement input').attr('disabled', '');
    $('.amountInputByRadioElement input').prop('checked', false);
}

const activeAmountWrittenInputElement = () => {
    $('#topUpWrittenAmount').removeAttr('disabled');
}

const inactiveAmountWrittenInputElement = () => {
    $('#topUpWrittenAmount').attr('disabled', '');
    document.querySelector('#topUpWrittenAmount').value = '';
}

export { topUpAmountCardOnClick, inputTopUpAmountElementOnClick };