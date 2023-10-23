import { Dispatch, SetStateAction, KeyboardEvent, useState } from "react";
import { HeadPhones } from "../../assets/HeadPhones";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import "./index.css";
export function ChatInput({
  setInputs,
}: {
  setInputs: Dispatch<SetStateAction<string[]>>;
}) {
  const [input, setInput] = useState("");
  
  function handleInput(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setInputs((prev) => [...prev, input]);
      setInput("");
    }
  }
  return (
    <article className="ChatInput">
      <div className="ChatInput__ct">
        <div className="ct__input">
          <ChannelIcons>
            <HeadPhones />
            <></>
          </ChannelIcons>
          <input
            type="text"
            onChange={(e) => setInput(e.currentTarget.value)}
            value={input}
            placeholder="Canale"
            onKeyDown={handleInput}
          />
        </div>
        <ChannelIcons>
          <HeadPhones />
          <HeadPhones />
          <HeadPhones />
          <HeadPhones />
        </ChannelIcons>
      </div>
    </article>
  );
}
