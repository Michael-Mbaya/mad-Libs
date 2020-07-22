// $(document).ready(function() {
//     $("#blanks form").submit(function() {
//         $(".person1").append("blah blah");
//         $(".person2").append("blah blah");
//         $(".animal").append("blah blah");
//         $(".exclamation").append("blah blah");
//         $(".verb").append("blah blah");
//         $(".noun").append("blah blah");

//         $("#story").show();

//         event.preventDefault();
//     });
// });

        //updated code above to the one below
        //append() the inputs in the span classes of the story

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
        //below the values of vars above(form-inputs) appended below
      $(".person1").text(person1Input);
      $(".person2").text(person2Input);
      $(".animal").text(animalInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".noun").text(nounInput);
        //also above .text() instead of append
        //so as to replace existing text not adding to it
      $("#story").show();
        
      event.preventDefault();   //prevent whole page refresh on submit
            });
});