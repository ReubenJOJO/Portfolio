function showDescription(descId) {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });
    document.getElementById(descId).style.display = 'block';
    document.querySelector('.description-container').style.display = 'block';
}

function hideDescription() {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function(description) {
        description.style.display = 'none';
    });
    document.querySelector('.description-container').style.display = 'none';
}
