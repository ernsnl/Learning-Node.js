var checkbox_container = document.getElementById('checkbox-container');
var inputs = checkbox_container.querySelectorAll('label > input');

inputs.forEach(function(value) {
    value.addEventListener('click', function() {
        var parent_label = value.parentElement;
        if (parent_label.classList.contains('active'))
            parent_label.classList.remove('active');
        else {
            parent_label.classList.add('active')
        }
    });
});
