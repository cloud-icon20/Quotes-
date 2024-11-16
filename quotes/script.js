function generate(){
    var quotes = {
        "-Deepak chopra": '"sex is always about emotions. Good sex is about real emotions."',
        "-C.S Lewis": '"I was not born to be free--- I was born to adore and obey"',
        "-Albert Einsten": '"Everybody is a genius, if you judge a fish by its ability to climb a tree. it will lives its whole life thinking it is stupid"',
        "-unknown": '"you may be dissapointed if you fail, but you are doomed if you dont try"',
        "-kudrah adunfe": '"shit happens, fate differs but fuck that shit"'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author]
    document.getElementById('quote').innerHTML = quote
    document.getElementById('author').innerHTML = author
}

