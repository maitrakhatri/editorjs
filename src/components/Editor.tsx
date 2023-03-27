import { useState } from "react";
import { editorInstance } from "./editorjs";

export default function Editor() {
  const editor = editorInstance();
  const [data, setData] = useState();

  const fetchAndSetData = () => {
    const totalBlocks = editor.blocks.getBlocksCount();
    for (let i = 0; i < totalBlocks; i++) {
      const id = editor.blocks.getBlockByIndex(i)?.id!;
      editor.blocks.update(id, {
        text: "This is updated data",
      });
    }
  };

  return (
    <div className="editor">
      <div>
        <button className="cdx-button" onClick={() => fetchAndSetData()}>
          Fetch and Set Data
        </button>
      </div>
      <div id="editorjs"></div>
    </div>
  );
}
