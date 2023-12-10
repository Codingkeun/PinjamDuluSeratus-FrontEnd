$(document).ready(function () {
    $("#loanTextDuration").change(function () {
        let input = '';
        const val = $(this).val();
        if (val == "days") {
            for (let j = 1; j <= 30; j++) {
                input += `<option value="test">${j}</option>`;
            }
            $('#loanNumberDuration').html(input);
        } else if (val == "weeks") {
            for (let j = 1; j <= 5; j++) {
                input += `<option value="test">${j}</option>`;
            }
            $('#loanNumberDuration').html(input);
        } else if (val == "months") {
            for (let j = 1; j <= 12; j++) {
                input += `<option value="test">${j}</option>`;
            }
            $('#loanNumberDuration').html(input);
        } else if (val == "") {
            $("#loanNumberDuration").html("<option value=''>Pilih rentang:</option>");
        }
    });

    $('.installmentPaymentRange').hide();

    $('input[name="paymentMethod"]').change(function() {
        const paymentMethodElementValue = $(this).val();
        if (paymentMethodElementValue == 'installmentPayment') {
            $('.installmentPaymentRange').show();
        } else {
            $('.installmentPaymentRange').hide();
        }
    });

    const slideValueContainer = $('.custom-range-value');
    const slideValue = $('.custom-range-value span');
    const inputSlider = $('.custom-range-field input');
    $(inputSlider).change(() => {
        let value = $(inputSlider).val();
        console.log(value);
        $(slideValue).text(value);
        $(slideValueContainer).css({
            'margin-left': (value / 12 * 100) + '%',
        })
        $(slideValueContainer).addClass('show');
        $(slideValue).addClass('show');
    });
    $(inputSlider).blur(() => {
        $(slideValueContainer).removeClass('show');
        $(slideValue).removeClass('show');
    });
});