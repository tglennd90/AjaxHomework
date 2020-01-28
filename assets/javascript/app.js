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
        const gifArea = $("#gifArea");
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
                button.setAttribute("data-searchName", topics[i])
                button.addEventListener("click", renderPage)

                button.appendChild(buttonText)

                buttonArea.appendChild(button)
                
            }

        }

    // Capture User Input and Transform into new button //
    // ============================================= //

        $(".userSubmit").on("click", function userButton() {

            var userValue = $(".userAdd").val()
                    
            var button = document.createElement('button')
            var buttonText = document.createTextNode(userValue);

            button.setAttribute("class", "btn")
            button.setAttribute("data-searchName", userValue)
            button.addEventListener("click", renderPage)

            button.appendChild(buttonText)

            buttonArea.appendChild(button)
        });

    // GIPHY Call //
    // ============================================= //

        function renderPage() {
            var APIKey = "vkcrV6fIMdEpaJsBPiUwvn3J4DG4zj3w";

            var userValue =  $(this).attr("data-searchName")
             
    
            var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userValue + "&api_key=" + APIKey + "&limit=10");
            
            xhr.done(function(response) { 

                reset()
    
                for (var i = 0; i < response.data.length; i++) {
                    console.log(response.data[i])
                    
                    var img = $("<img>");
                    console.log(response.data[i].images.original.url)
                    
                    img.attr("src", response.data[i].images.original_still.url)
                    img.attr("class", "imgx")
                    img.attr("data-still", response.data[i].images.original_still.url)
                    img.attr("data-animate", response.data[i].images.original.url)
                    img.attr("data-state", "still")
                    img.attr("style", "width: 125px")
                    img.attr("style", "height: 125px")
    
                    gifArea.prepend(img)
    
                }
                
                $(".imgx").on("click", function() {

                    var state = $(this).attr("data-state")
                    var still = $(this).attr("data-still")
                    var animate = $(this).attr("data-animate")
                    console.log(state)
                
                    if (state === "still") {
                        $(this).attr("data-state", "animate")
                        $(this).attr("src", animate)
                    } else {
                        $(this).attr("data-state", "still")
                        $(this).attr("src", still)
                    }
                
                });
             
                
            });
        }

    // Reset gifArea //
    // ============================================= //

        function reset() {
            gifArea.html(" ");
        }
  
// Logic //
// ============================================= //

    buttons()

        