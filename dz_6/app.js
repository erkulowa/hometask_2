const blocks = document.querySelectorAll(".block");

blocks.forEach(function(block) {

    block.onclick = function() {

        blocks.forEach(function(block) {
            block.classList.remove("active");
        });

        block.classList.add("active");
    };

});