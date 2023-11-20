const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('.search-form');
    var search = document.querySelector('input');
    var button = document.querySelector('button');

    button.addEventListener('click', function (e) {
        e.preventDefault();
        input.classList.toggle('active');

        // Delay hiding the input by adding a class after a short timeout
        setTimeout(function () {
            if (!input.classList.contains('active')) {
                input.classList.add('hidden');
            }
        }, 500); // Adjust the timeout duration as needed
    });

    search.addEventListener('focus', function () {
        input.classList.add('focus');

        // Remove the 'hidden' class when focusing to make sure the input is visible
        input.classList.remove('hidden');
    });

    search.addEventListener('blur', function () {
        input.classList.remove('focus');
    });
});
