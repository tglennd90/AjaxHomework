// Globals //
// ============================================= //

    // Arrays //
    // ============================================= //

        const topics = ["Space", "Moon", "America", "American Flag", "Tennessee Vols", "Tennessee Titans", "Nashville Predators"];

    // Objects //
    // ============================================= //

    // Variables //
    // ============================================= //

        const contentArea = document.getElementById("contentArea");
        const buttonArea = document.getElementById("buttonArea");
        const gifArea = document.getElementById("gifArea");
        const userForm = document.getElementById("userForm");

// Functions //
// ============================================= //

    // Create Buttons Loop //
    // ============================================= //

        function buttons() {

            for (var i = 0; i < topics.length; i++) {
                
                var button = document.createElement('button')
                var buttonText = document.createTextNode(topics[i]);

                button.appendChild(buttonText)

                buttonArea.appendChild(button)
                
            }

        }

// Logic //
// ============================================= //

        buttons();