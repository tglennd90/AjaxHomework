// Globals //
// ============================================= //

    // Arrays //
    // ============================================= //

        var topics = ["Baseball", "Basketball", "Hockey", "Soccer", "Football", "Ultimate Frisbee", "Dodgeball"];

    // Objects //
    // ============================================= //

    // Variables //
    // ============================================= //

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

                button.setAttribute("class", "btn")

                button.appendChild(buttonText)

                buttonArea.appendChild(button)
                
            }

        }

    // Capture User Input and Transform into new button //
    // ============================================= //

        $(".userSubmit").on("click", function userButton() {

            var userValue = $(".userAdd").val().trim()
            
            var button = document.createElement('button')
            var buttonText = document.createTextNode(userValue);

            button.setAttribute("class", "btn")

            button.appendChild(buttonText)

            buttonArea.appendChild(button)
        });

    // GIPHY Call //
    // ============================================= //

        var APIKey = "vkcrV6fIMdEpaJsBPiUwvn3J4DG4zj3w";

        var q;

        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + APIKey + "&limit=10");
        
        xhr.done(function(response) { 

            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i])
                
                var img = document.createElement("img");
                
                img.src = response.data[i].images.original_still.url
                $("img").attr("class", "test")
                img.style = "width: 125px"
                img.style = "height: 125px"

                gifArea.prepend(img)

            }
            
            
        });

    // Pause/Unpause GIFs //
    // ============================================= //

        $(".test").on("click", function() {

            var still = response.data[i].images.original_still.url
            var move = response.data[i].images.original.url

            if (img.src === still) {
                img.src === move
            } else {
                img.src === still
            }

        });
  
// Logic //
// ============================================= //

        buttons();
        