import { useState } from "react";
import "./chat.scss";

export default function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>Username</span>
          <p>latest message</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="" alt="" />
              usesrname
            </div>
            <div className="close" onClick={() => setChat(!chat)}>
              X
            </div>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat harum rerum id ut exercitationem animi cum quibusdam
                autem facilis aliquid?
              </p>
              <span>2 hr ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat harum rerum id ut exercitationem animi cum quibusdam
                autem facilis aliquid?
              </p>
              <span>2 hr ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat harum rerum id ut exercitationem animi cum quibusdam
                autem facilis aliquid?
              </p>
              <span>2 hr ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat harum rerum id ut exercitationem animi cum quibusdam
                autem facilis aliquid?
              </p>
              <span>2 hr ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat harum rerum id ut exercitationem animi cum quibusdam
                autem facilis aliquid?
              </p>
              <span>2 hr ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
