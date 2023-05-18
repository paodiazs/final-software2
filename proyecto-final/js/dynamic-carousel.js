// title and text of the document
let title = document.getElementById("content-title");
let text = document.getElementById("content-text");
let contact_phone = document.getElementById("contact-phone");
let contact_mail = document.getElementById("contact-mail");
let schedule = document.getElementById("schedule");
let map_link = document.getElementById("map-link");

// variable used for button cooldown
let buttonCooldown = false;

// function that cooldowns carousel buttons
function cooldown() {
    buttonCooldown = true;
    console.log('start timer flag');
    setTimeout(function() {
        buttonCooldown = false;
    }, 600);
    console.log('end timer flag');
}

// carousel buttons
const previous_button = document.getElementById("previous-button");
const next_button = document.getElementById("next-button");
const slide_buttons  = document.getElementsByClassName('slide-buttons');

// content ID used to diferentiate the text content based on the carousel and data variable which stores the strings to use on each post (it must be initialized on its respective html file)
let contentID = 0;
let data;

// function used when previous button is pressed
previous_button.addEventListener("click", function() {
    if (!buttonCooldown) {
        contentID = (contentID == 0 ? data.length-1 : contentID-1);
        updateData()
        cooldown();
    }
});

// function used when next button is pressed
next_button.addEventListener("click", function() {
    if (!buttonCooldown) {
        contentID = (parseInt(contentID) + 1) % data.length;
        updateData()
        cooldown();
    }
});

// updates the text content on the page based on current slide
function updateData() {
    title.textContent = data[contentID][0];
    text.textContent = data[contentID][1];

    if(data[contentID][2] != "") {
        contact_phone.innerHTML = '<img src="./assets/icons/whatsapp.svg" alt="WhatsApp" class="contact-icons"><strong> ' + data[contentID][2] + '</strong>';
    } else {
        contact_phone.textContent = "";
    }

    if(data[contentID][3] != "") {
        contact_mail.innerHTML = '<img src="./assets/icons/mail.svg" alt="Correo" class="contact-icons"><strong> ' + data[contentID][3] + '</strong>';
    } else {
        contact_mail.textContent = "";
    }
        
    schedule.textContent = data[contentID][4];
    // map_link.setAttribute("href", data[contentID][5]);
}

// listeners for all carousel buttons
for (let i = 0; i < slide_buttons.length; i++) {
    slide_buttons[i].addEventListener('click', function() {
        if (!buttonCooldown) {
            const SlideID = this.getAttribute('data-slide-to');
            contentID = SlideID;
            console.log('contentID radio:', contentID);
            updateData();
            cooldown();
        }
    });
}