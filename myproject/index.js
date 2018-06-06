var fred = ["fred", "flinstone", "fred@gmail.com", 50];

console.log('length = ', fred.length);

// for (var i=0 ; i < fred.length; i++) {
for (var i in fred) {
    if (i == 0)
        console.log('First name: ', fred[i])
    else if (i == 1)
        console.log('Last name: ', fred[i])
    else if (i == 2)
        console.log('Email: ', fred[i])
    else // if (i == 3)
        console.log('Age: ', fred[i])

    //   console.log(i);
    //   console.log(fred[i]);
}

//create the img
var imgEle = document.createElement('img');

//decorpate the element
imgEle.setAttribute('src', '/myproject/myimage.jpg');

//find the place to insert
var hereEle = document.body.querySelector('#here');

//attach image
hereEle.appendChild(imgEle);


function insertPicture() {
    var imgEle = document.createElement('img');
    imgEle.setAttribute('src', '/myproject/myimage.jpg');
    var hereEle = document.body.querySelector('#here');
    return (hereEle)
}
