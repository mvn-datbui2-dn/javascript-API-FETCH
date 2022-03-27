//fetch
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json =>{
    console.log(json.data);
    const markup = json.data.map(el =>{
        return `
        <li class="card-container">
            <div class="image-container">
                <img class="round" src ="${el.avatar}">
            </div>
            <div class="name-container">
                <span class="firstName">${el.first_name}</span>
                <span class="lastName">${el.last_name}</span>
            </div>
            <p class="email">${el.email}</p>
        </li>
        `
    })
    document.querySelector('.list-container').innerHTML = markup;
})
// ajax
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);
    xhr.onload = function(){
        var result = "";
        var datas = JSON.parse(xhr.responseText).data;
        for (var i = 0; i < datas.length; i++) {
            result +=`
                <tr>
                    <td>${datas[i].first_name}</td>
                    <td>${datas[i].last_name}</td>
                    <td>${datas[i].email}</td>
                    <td><img src="${datas[i].avatar}" width="30px" class="rounded-circle"></td>  
                </tr>
            `;
        }
    document.querySelector('table').innerHTML = result;
};
xhr.send();
