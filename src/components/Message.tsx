function Message() { //component
    //var msg = "Hello!";
    //var msg2 = "World!";
    var showMsg2 = false; 
    var msg = <h1>Hello</h1>
    var msg2 = <h5>Hi!</h5>

    //ternary rendering
    return (
        <> 
            <h1>Message Component</h1>
            <div>
                {showMsg2 ? msg2 : buildMsg()} 
            </div>
        </> 
    );
    //empty tags are called Fragment
}

function buildMsg() { //helper function
    return(
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default Message;