async function updateQuote() {
    const response = await fetch('/api/quotes/random');
    const json = await response.json();
    $('#text').text(`"${json.quote}"`);
    $('#author').text(`— ${json.author}`);
    $('#tweet-quote').attr('href', `https://twitter.com/intent/tweet?text=${json.quote}%20—%20${json.author}`);
}

$('#new-quote').on('click', updateQuote);
$(window).on('load', updateQuote);