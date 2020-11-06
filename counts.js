// Grab the counts from a file
function getCounts(file) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/' + file);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            counts[file] = xhr.responseText.trim();
            showCounts();
        }
    };
}

function showCounts() {
    // Update the counts on the page
    document.getElementById("sms-docs-wiki-count").innerHTML = counts['sms-docs-wiki-count.txt'];
    document.getElementById("notebook-ddm-count").innerHTML = counts['notebook-ddm-count.txt'];
}

let counts = {};

// Grab the counts from local files
getCounts("sms-docs-wiki-count.txt");
getCounts("notebook-ddm-count.txt");

// Output the counts to the console
console.log(counts);