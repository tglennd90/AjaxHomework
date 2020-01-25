// Globals //
// ============================================= //

    // Arrays //
    // ============================================= //

        var topics = ["Baseball", "Basketball", "Hockey", "Soccer", "Football", "Ultimate Frisbee", "Dodgeball"];

    // Objects //
    // ============================================= //

    // Variables //
    // ============================================= //

        //var queryURL; 
            // method: "GET"
        //var title;

    // ID Grabbers //
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

    // GIPHY Call //
    // ============================================= //

// Logic //
// ============================================= //

        buttons();