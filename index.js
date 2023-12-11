
var quotes = [
    '“Insanity is doing the same thing, over and over again, but expecting different results.”',
    '“It is better to be hated for what you are than to be loved for what you are not.”',
    '“Be yourself; everyone else is already taken.”',
    '“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”',
    '“So many books, so little time.”',
    '“Be who you are and say what you feel, because those who mind \'t matter, and those who matter don\'t mind.”',
    '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”',
    '“Be the change that you wish to see in the world.”',
    '“In three words I can sum up everything I\'ve learned about life: it goes on.”',
    '“Don\'t walk in front of me… I may not follow\nDon\'t walk behind me… I may not lead\nWalk beside me… just be my friend”',
    '“If you tell the truth, you don\'t have to remember anything.”'
      
    ]
var authors = [
    '― Narcotics Anonymous',
    '― Andre Gide, Autumn Leaves',
    '― Oscar Wilde',
    '― Marilyn Monroe',
    '― Frank Zappa',
    '― Bernard M. Baruch',
    '― Dr. Seuss',
    '― Mahatma Gandhi',
    '― Robert Frost',
    '― Albert Camus',
    '― Mark Twain'
]

    // console.log(quotes.length);

function ChangeQuote(){

    var randomQoute = Math.floor(Math.random() * 11);
    if ( 0 >= randomQoute < 11 ) {
            var view = document.getElementById("day-quote").innerHTML = quotes[randomQoute] ;  
            var view = document.getElementById("day-quote-author").innerHTML = authors[randomQoute] ;  
    }


}


