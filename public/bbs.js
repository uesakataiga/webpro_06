"use strict";

let number=0;
const bbs = document.querySelector('#bbs');
document.querySelector('#post').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;

    const params = {  // URL Encode
        method: "POST",
        body:  'name='+name+'&message='+message,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    console.log( params );
    const url = "/post";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        console.log( response );
        document.querySelector('#message').value = "";
    });
});

document.querySelector('#searchcheck').addEventListener('click', () => {
    const params = {  // URL Encode
        method: "POST",
        body:  'start='+0,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const url = "/read";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        bbs.innerText = "";
        var order = 1;
        number += response.messages.length;
        for( let mes of response.messages ) {
            console.log( mes );  // 表示する投稿
            let cover = document.createElement('div');
            cover.className = 'cover';
            let name_area = document.createElement('span');
            name_area.className = 'name';
            name_area.innerText = mes.name;
            let mes_area = document.createElement('span');
            mes_area.className = 'mes';
            mes_area.innerText = mes.message;
            let number_area = document.createElement('span');
            number_area.className = 'number';
            number_area.innerText = order+"";
            for( let sc of response.name0) {
                if( mes.name == sc.name0) {
                    cover.appendChild( number_area );
                    cover.appendChild( name_area );
                    cover.appendChild( mes_area );

                    bbs.appendChild( cover );
                }
            }

            order++;
        }
    })
});


document.querySelector('#check').addEventListener('click', () => {
    const params = {  // URL Encode
        method: "POST",
        body:  'start='+0,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const url = "/read";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        bbs.innerText = "";
        var order = 1;
        number += response.messages.length;
        for( let mes of response.messages ) {
            console.log( mes );  // 表示する投稿
            let cover = document.createElement('div');
            cover.className = 'cover';
            let name_area = document.createElement('span');
            name_area.className = 'name';
            name_area.innerText = mes.name;
            let mes_area = document.createElement('span');
            mes_area.className = 'mes';
            mes_area.innerText = mes.message;
            let number_area = document.createElement('span');
            number_area.className = 'number';
            number_area.innerText = order+"";
            cover.appendChild( number_area );
            cover.appendChild( name_area );
            cover.appendChild( mes_area );

            bbs.appendChild( cover );

            order++;
        }
    })
});


document.querySelector('#goodcheck').addEventListener('click', () => {
    const params = {  // URL Encode
        method: "POST",
        body:  'start='+0,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const url = "/read";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        bbs.innerText = "";
        var order = 1;
        number += response.messages.length;
        for( let mes of response.messages ) {
            console.log( mes );  // 表示する投稿
            let cover = document.createElement('div');
            cover.className = 'cover';
            let name_area = document.createElement('span');
            name_area.className = 'name';
            name_area.innerText = mes.name;
            let mes_area = document.createElement('span');
            mes_area.className = 'mes';
            mes_area.innerText = mes.message;
            let number_area = document.createElement('span');
            number_area.className = 'number';
            number_area.innerText = order+"";
            let good_area = document.createElement('span');
            good_area.className = 'good';
            let go = 0;
            for(let gc of response.gn) {
                if(order == gc.gn) go++;
            }
            good_area.innerText = "👍️："+go;

            cover.appendChild( number_area );
            cover.appendChild( name_area );
            cover.appendChild( mes_area );
            cover.appendChild( good_area );

            bbs.appendChild( cover );

            order++;
        }
    })
});


document.querySelector('#search').addEventListener('click', () => {
    const sn = document.querySelector('#sn').value;
    const params = {  // URL Encode
        method: "POST",
        body:  'sn='+sn,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    console.log( params );
    console.log(req.body.sn);
    const url = "/search_post";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        console.log( response );
        document.querySelector('#sn').value = "";
    });
});


document.querySelector('#goodmark').addEventListener('click', () => {
    const gn = document.querySelector('#good').value;
    const params = {  // URL Encode
        method: "POST",
        body:  'gn='+gn,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    console.log( params );
    const url = "/good_post";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        console.log( response );
        document.querySelector('#good').value = "";
    });
});


const darkModeButton = document.querySelector('#toggle-dark-mode');
        const body = document.body;

        // ダークモードの切り替え
        darkModeButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });