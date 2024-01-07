document.getElementById('terminal').style.display = 'none';
document.getElementById('terminal2').style.display = 'block';

var outputDivMak = document.getElementById('output2');
var cmdInputMak = document.getElementById('cmd2');
simulateTerminalResponse('WELCOME TO THE TERMINAL...\nNAME: IBRAIN \nVERSION: 4.0 \nDOC: 29, OCTOBER, 2023 \nDEVELOPER: INCOGNITO. \nIIIII BBBBB RRRRR AAAAA IIIII NNNNN \nIIIII BBBBB RRRRR AAAAA IIIII NNNNN \nIIIII BBBBB RRRRR AAAAA IIIII NNNNN \nIIIII BBBBB RRRRR AAAAA IIIII NNNNN \nIIIII BBBBB RRRRR AAAAA IIIII NNNNN \nIIIII BBBBB RRRRR AAAAA IIIII NNNNN \nIIIII BBBBB RRRRR AAAAA IIIII NNNNN')
setTimeout(() => simulateTerminalResponse('Please wait, Makson'), 11500);
setTimeout(() => simulateTerminalResponse('I\'m cloning with you.'), 13000);
setTimeout(() => simulateTerminalResponse('Finish cloning.'), 15000);
setTimeout(() => simulateTerminalResponse('On the way...2s!'), 16000);
setTimeout(() => simulateTerminalResponse('Connecting server...2s!'), 17000);
setTimeout(() => simulateTerminalResponse('Connected Successfully to makson.js...!'), 19000);

cmdInputMak.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        const command = cmdInputMak.innerText.trim().toLowerCase();
        const maksonName = 'MAKSON';
        outputDivMak.innerHTML += '<br><br>' + '<span style="color: #00BCF9;">MAK</span><span style="color: #EE0292;">SON </span><span style="color: red;"> <span style="color: white;">|</span>$ </span>' + `<span class="command" style="color: white;">${command}</span>`;
        cmdInput.setAttribute('contenteditable', 'true');
        handleCommand(command);
        cmdInputMak.innerHTML = '';
        isFirstCommand = false;
    }
});

function simulateTerminalResponse(response) {
    outputDivMak.innerHTML += '<br>' + '<span style="color: #00BCF9;">IBR</span><span style="color: #EE0292;">AIN <span style="color: #fff">|</span><span style="color: red;">$ </span>';
    const responseElement = document.createElement('div');
    responseElement.style.color = '#0f0';
    responseElement.style.display = 'inline';
    outputDivMak.appendChild(responseElement);

    let index = 0;
    const intervalId = setInterval(() => {
        if (response[index] === '\n') {
            responseElement.appendChild(document.createElement('br'));
        } else {
            responseElement.innerHTML += response[index] + '';
        }

        index++;

        if (index === response.length) {
            clearInterval(intervalId);
            cmdInputMak.focus();
            cmdInputMak.setAttribute('contenteditable', 'true');
        }
    },
        30);
}

function handleCommand(command) {
    if (command === 'connect makson') {
        simulateTerminalResponse('Connecting to makson.js...');

        countdown(5, () => {
            setTimeout(() => {
                loadScript('makson2.js')
                .then(() => {
                    simulateTerminalResponse('Successfully connected!');
                    maksonConnected = true;
                    // Call a function from makson.js after connecting
                    if (typeof maksonConnectFunction === 'function') {
                        maksonConnectFunction();
                    }
                })
                .catch(() => {
                    simulateTerminalResponse('Failed to load makson.js. File not found.');
                });
            }, 2000);
        });
    } else if (command === 'help' || command === 'help me') {
        const helpResponse = 'Available commands:\n - help\n - ip\n - connect makson';
        simulateTerminalResponse(helpResponse);
    } else if (command === '') {
        const unknownResponse = 'Empty message().';
        simulateTerminalResponse(unknownResponse);
    } else if (command === 'ok' || command === 'thank you' || command === 'thank' || command === 'thnx' || command === 'thanks' || command === 'then cmd') {
        const gratitudeResponses = [
            'You\'re welcome!',
            'No problem!',
            'Glad I could help!',
            'Anytime!',
            'You got it!',
            'Sure thing!'
        ];

        const randomResponse = gratitudeResponses[Math.floor(Math.random() * gratitudeResponses.length)];
        simulateTerminalResponse(randomResponse);
    } else if (
        command === 'what are you doing' ||
        command === 'what\'s are you doing' ||
        command === 'what\'s are you doing now' ||
        command === 'what are you doing now'
    ) {
        const doingResponses = [
            'I\'m assisting you Makson, right now.',
            'Just helping out with your queries, Makson.',
            'Answering your commands and questions.',
            'Engaged in chat mode.',
            'Providing information and assistance.',
            'Responding to your inputs.',
            'Executing your commands.',
            'Being your virtual assistant.',
            'Responding to your inquiries.',
            'Assisting with various tasks.'
        ];
        const trimmedCommand = command.replace(/[?]/g, '').trim();
        const randomResponse = doingResponses[Math.floor(Math.random() * doingResponses.length)];
        simulateTerminalResponse(randomResponse);
    } else if (command === 'fa smiley' || command === 'img' || command === 'crush png' || command === 'crush pic 1' || command === 'crush pic1' || command === 'crush img 1' || command === 'crush img1' || command === 'crush pic' || command === 'crush img') {
        const imgResponse = 'IBRAIN | $ ' + '<br>' + '<div onclick="alertUser();"><img id="img" src="KrismaChakma.png" alt="Favourite smiley sanjanatannya."></div>\n<span id="caption">Caption: Favourite smiley sanjanatannya.</span><br>';
        outputDivMak.insertAdjacentHTML('beforeend', '<br>' + imgResponse);
        cmdInput.focus();
    } else if (command === 'fa img ashayuni' || command === 'fa image of asha yuni' || command === 'ashayuni.png1' || command === 'ashayuni pic1' || command === 'asha yuni pic' || command === 'ashayuni image') {
        const imgResponse = 'IBRAIN | $ ' + '<br>' + '<div onclick="alertUser();"><img id="img" src="faimgashayuni1.png" alt="Fa img of Asha Yuni."></div>\n<span id="caption">Caption: Fa img of Asha Yuni.</span><br>';
        outputDivMak.insertAdjacentHTML('beforeend', '<br>' + imgResponse);
        cmdInput.focus();
    }else if (command === 'fa img ashayuni2' || command === 'fa image of asha yuni2' || command === 'ashayuni.png2' || command === 'ashayuni pic2' || command === 'asha yuni pic2' || command === 'ashayuni image2') {
        const imgResponse = 'IBRAIN | $ ' + '<br>' + '<div onclick="alertUser();"><img id="img" src="faimgashayuni2.png" alt="Fa img of Asha Yuni."></div>\n<span id="caption">Caption: Fa img of Asha Yuni.</span><br>';
        outputDivMak.insertAdjacentHTML('beforeend', '<br>' + imgResponse);
        cmdInput.focus();
    } else if (command === 'ip' || command === 'my ip' || command === 'what is my ip' || command === 'ip address') {
        getUserIP().then(ip => {
            const ipResponse = `Your IP Address: ${ip}`;
            simulateTerminalResponse(ipResponse);
        });
    } else if (command === 'gps tool') {
        const gpstoolResponse = 'INCOGNITO | $ Gps Emulator: <a href="https://modyolo.com/gps-emulator" target="_blank">DOWNLOAD</a>';
        outputDivMak.insertAdjacentHTML('beforeend', '<br>' + gpstoolResponse);

    } else if (command === 'biugo' || command === 'biugo app' || command === 'biugo premium' || command === 'biugo') {
        const biugohelpResponse = 'Please type "biugo apk" to get your link.';
        simulateTerminalResponse(biugohelpResponse);
    } else if (command === 'biugo apk') {
        const biugoapklinkResponse = '<br><span class="blue">IBR</span><span class="pink">AIN</span> <span style="color: white;">|</span><span style="color: red;">$ <span style="color: white;">Link below: <a href="https://modded-1.com/apps/video-players/biugo/download/0">DOWNLOAD NOW</a></span>';
        outputDivMak.insertAdjacentHTML('beforeend', 'IBRAIN | $' + biugoapklinkResponse);
        cmdInputMak.focus();
    } else {
        simulateTerminalResponse('Command not recognized, Makson! Type help for your commands!');
    }
}

document.addEventListener('contextmenu', function (event) {
    alert('IBRAIN: Image download is disabled on this website.');
    event.preventDefault();
});