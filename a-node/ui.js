// Let's get hold of those elements
var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

var i = 0;

// Let's listen for attribute changes on the
// outer element
new MutationObserver(function() {
    console.log('mutate');
}).observe(outer, {
    attributes: true
});

// Here's a click listener…
function onClick() {
    i++;

    if(i === 1) {
        inner.innerHTML = 'end';
    }

    console.log('click');

    setTimeout(function() {
        // alert('锚点');
        console.log('timeout');
    }, 0);

    Promise.resolve().then(function() {
        console.log('promise');
    });


    outer.setAttribute('data-random', Math.random());
}

// …which we'll attach to both elements
inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);
inner.click();