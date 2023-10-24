import { Dispatch, SetStateAction, KeyboardEvent, useState } from "react";
import { ChannelIcons } from "../ChannelIcons/ChannelIcons";
import "./index.css";
import { Plus } from "../../assets/Plus";
import { Gift } from "../../assets/Gift";
import { GifButton } from "../../assets/GifButton";
import { FileButton } from "../../assets/FileButton";
import { SadFace } from "../../assets/SadFace";
export function ChatInput({
  setInputs,
}: {
  setInputs: Dispatch<SetStateAction<string[]>>;
}) {
  const [input, setInput] = useState("");

  function handleInput(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (input === "") return;
      setInputs((prev) => [...prev, input]);
      setInput("");
    }
  }
  return (
    <article className="ChatInput">
      <div className="ChatInput__ct">
        <div className="ct__input">
          <ChannelIcons>
            <Plus />
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
          <Gift />
          <GifButton />
          <FileButton />
          <SadFace />
        </ChannelIcons>
      </div>
    </article>
  );
}
