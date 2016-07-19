
  $( document ).ready(function() {

    var numberToGuess = 84;

    var counter = 0;

    var numbers = [10, 5, 3, 7];

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

    shuffle(numbers);
    console.log(numbers);

    $('#number').text(numberToGuess);

    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');

      imageCrystal.attr('data-num', numbers[i]);

      imageCrystal.attr('src', 'assets/blue.png');

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    }

    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));

      $('#yourNumber').text(counter);

      if (counter == numberToGuess){
        alert('You won!!!!');
      }else if( counter > numberToGuess){
        alert('KEEP DIGGING! ');
      }
    });

  });
