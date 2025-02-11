import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, editNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const updatedTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(updatedTree);
  };

  const handleUpdateNode = (folderId, newName) => {
    const updatedTree = editNode(explorerData, folderId, newName);
    setExplorerData(updatedTree);
  };

  const handleDeleteNode = (folderId) => {
    const updatedTree = deleteNode(explorerData, folderId);
    setExplorerData(updatedTree);
  };

  return (
    <div className="app">
      <Folder
        explorerData={explorerData}
        handleInsertNode={handleInsertNode}
        handleUpdateNode={handleUpdateNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
}

export default App;
