// Globals //
// ============================================= //

    // Arrays //
    // ============================================= //

        var topics = ["Ace Ventura", "Fletcher Reede", "Bruce Nolan", "Lloyd Christmas", "Grinch", "Stanley Ipkiss"];

    // Objects //
    // ============================================= //

    // Variables //
    // ============================================= //

    // ID Grabbers //
    // ============================================= //
        
        const contentArea = $("#contentArea");
        const buttonArea = $("#buttonArea");
        const gifArea = $("#gifArea");
        const userForm = $("#userForm");

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

                button.append(buttonText)

                buttonArea.append(button)
                
                
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

            button.append(buttonText)

            buttonArea.append(button)

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
                    
                    img.attr("src", response.data[i].images.original_still.url)
                    img.attr("class", "imgx")
                    img.attr("data-still", response.data[i].images.original_still.url)
                    img.attr("data-animate", response.data[i].images.original.url)
                    img.attr("data-state", "still")
                    img.attr("style", "width: 125px")
                    img.attr("style", "height: 125px")

                    var gifData = $("<div class=gif>");
                    var rating = response.data[i].rating;
                    var ratingP = $("<p>").text("Rating: " + rating);
                    var title = response.data[i].title;
                    var titleP = $("<p>").text("Title: " + title);
                    
                    gifData.append(titleP);
                    gifData.append(ratingP);
                    gifData.append(img);

                    gifArea.prepend(gifData)
    
                }
                
                $(".imgx").on("click", function() {

                    var state = $(this).attr("data-state")
                    var still = $(this).attr("data-still")
                    var animate = $(this).attr("data-animate")
                
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

        