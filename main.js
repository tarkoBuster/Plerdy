$(document).ready(function(){
    // Initialize slick slider with settings
    $('.center').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 4,
        variableWidth: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // Event handlers for previous and next slide
    $('#prevSlide').click(() => $('.center').slick('slickPrev'));
    $('#nextSlide').click(() => $('.center').slick('slickNext'));

    // Initialize intl-tel-input with settings
    const input = document.querySelector("#phone-number");
    window.intlTelInput(input, {
        initialCountry: "ua",
        separateDialCode: true,
        onlyCountries: ["ua", "us", "gb"],
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    // Toggle button state based on checkbox
    const agreeCheckbox = document.getElementById('check-agree-btn');
    const toggleButtons = () => {
        const isEnabled = agreeCheckbox.checked;
        document.querySelectorAll('#support-btn, #contact-sales-btn').forEach(btn => btn.disabled = !isEnabled);
    };
    agreeCheckbox.addEventListener('change', toggleButtons);
    toggleButtons(); // Initial state check

    // Modal functionality
    const modal = document.querySelector('.modal');
    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => modal.style.display = 'flex');
    });
    document.querySelector('.close').addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', event => {
        if (event.target === modal) modal.style.display = 'none';
    });
});
