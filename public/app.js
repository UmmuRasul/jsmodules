import getSession, * as sessionRepo from './sessionRepo.js';

function render() {

    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionRepo.sessionTemplate(data.listItems);
};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });