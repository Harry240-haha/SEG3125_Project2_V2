// JavaScript for language switch
function switchToEnglish() {
    $('.english-content').show();
    $('.french-content').hide();
}

function switchToFrench() {
    $('.english-content').hide();
    $('.french-content').show();
}

// JavaScript for floating language switch button
$(document).ready(function () {
    const switchButton = $('<button>', {
        class: 'btn btn-primary btn-lg switch-button',
        text: 'EN/FR'
    });

    switchButton.on('click', function () {
        const englishContent = $('.english-content');
        if (englishContent.is(':visible')) {
            switchToFrench();
        } else {
            switchToEnglish();
        }
    });

    // Add button to the body element
    $('body').append(switchButton);
});