

const quotes = [
{
	quote: 'img/wallet1.jpg',
	author: 'feffdfdfdfdfdfdfdfdfdfdfdfdfdfd111',
    ordernum: 'Order #111111'
},
    
{
	quote: 'img/wallet2.jpg',
	author: 'feffdfdfdfdfdfdfdfdfdfdfdfdfdfd222',
    ordernum: 'Order #222222'
},
    
{
	quote: 'img/wallet3.jpg',
	author: 'feffdfdfdfdfdfdfdfdfdfdfdfdfdfd333',
    ordernum: 'Order #333333'
},	
	
]

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const ordernum = document.querySelector('.ordernum');

function bitcoinqr() {
	let random = Math.floor(Math.random() * quotes.length);
	
	quote.getElementsByTagName("IMG")[0].src = quotes[random].quote;
	author.innerHTML = quotes[random].author;
    ordernum.innerHTML = quotes[random].ordernum;
}