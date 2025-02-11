import { useState } from "react";

/* eslint-disable react/prop-types */
const Folder = ({
  explorerData,
  handleInsertNode,
  handleUpdateNode,
  handleDeleteNode,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(explorerData.name);

  function handleNewFolder(e, isFolder) {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ isFolder, visible: true });
  }

  function handleEdit(e) {
    e.stopPropagation();
    setIsEdit(true);
  }

  function addFolder(e) {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  }

  function handleBlur(e) {
    let val = e.target.value.trim();
    handleUpdateNode(explorerData.id, val);
    setIsEdit(false);
  }

  function handleDelete() {
    handleDeleteNode(explorerData.id);
  }

  function onEditName(e) {
    if (e.keyCode === 13 && e.target.value) {
      let val = newName.trim();
      handleUpdateNode(explorerData.id, val);
      setIsEdit(false);
    }
  }

  if (explorerData.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)} className="folder">
          {isEdit ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={onEditName}
              autoFocus
            />
          ) : (
            <span>📒{explorerData.name}</span>
          )}
          <div>
            <button
              className="btn-clickable"
              onClick={(e) => handleNewFolder(e, true)}
            >
              📒+
            </button>
            <button
              className="btn-clickable"
              onClick={(e) => handleNewFolder(e, false)}
            >
              {" "}
              📄+
            </button>
            <button className="btn-clickable" onClick={handleEdit}>
              🖊️
            </button>
            <button className="btn-clickable" onClick={handleDelete}>
              ❌
            </button>
          </div>
        </div>

        <div
          style={{ paddingLeft: "20px", display: expand ? "block" : "none" }}
        >
          <div className="inputContainer">
            {showInput.visible && (
              <div>
                <span>{showInput.isFolder ? "📒" : "📄"}</span>
                <input
                  type="text"
                  className="inputContainer__input"
                  onKeyDown={addFolder}
                  autoFocus
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                />
              </div>
            )}
          </div>
          {explorerData?.items.map((exp) => {
            return (
              <Folder
                key={exp.id}
                explorerData={exp}
                handleInsertNode={handleInsertNode}
                handleUpdateNode={handleUpdateNode}
                handleDeleteNode={handleDeleteNode}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isEdit ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={onEditName}
            autoFocus
          />
        ) : (
          <span className="file">📄{explorerData.name}</span>
        )}

        <div>
          <button className="btn-clickable" onClick={handleEdit}>
            🖊️
          </button>
          <button className="btn-clickable" onClick={handleDelete}>
            ❌
          </button>
        </div>
      </div>
    );
  }
};

export default Folder;
