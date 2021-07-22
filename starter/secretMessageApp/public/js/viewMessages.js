const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for(let key in data){
            const message= data[key];
            console.log(message);
            if(myPass == message.passcode){
                renderMessage (message);
            }
        }
    });
}

const findMessages = (myPass) => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        for(let key in data){
            const message= data[key];
            console.log(message);
            if(myPass == message.passcode){
                renderMessage (message);
            }
        }
    });
} 

const renderMessage = 


document.querySelector.addEventListener("click", getMessages);

const passcode = document.querySelector("#viewMsg").nodeValue;
findMessages(passcode);

