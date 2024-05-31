import React, { useState } from "react";
import { TreeTypes } from "./TreeTypes";
import "./index.css";

const Tree = ({ name, file }: TreeTypes) => {
  const [expand, setExpand] = useState(false);
  if (typeof file !== "object") return <span>{file}</span>;
  return (
    <div className="tree">
      {/* root
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;ant <br />
      &nbsp;&nbsp;&nbsp;&nbsp;bear <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant{" "}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;frog <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dolphin <br /> */}

      <span
        style={{ display: "flex", gap: 3 }}
        onClick={() => setExpand(!expand)}
      >
        <div style={{ paddingLeft: "6px", paddingRight: "6px", width: "20px" }}>
          {expand ? "-" : "+"}
        </div>
        {name}
      </span>
      <br />
      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {Object.entries(file).map(([key, value]) => (
          <>
            <Tree key={key} name={key} file={value} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Tree;
