const useTraverseTree = () => {
  function insertNode(tree, id, item, isFolder) {
    if (tree.id === id && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        isFolder,
        name: item,
        items: [],
      });
      return tree;
    }
    let latestNode;
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, id, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  function deleteNode(tree, id) {
    if (!tree) return null;
    let updatedTree = tree.items
      .filter((ob) => ob.id !== id)
      .map((ob) => deleteNode(ob, id));
    return { ...tree, items: updatedTree };
  }

  function editNode(tree, id, newName) {
    if (tree.id === id) {
      tree.name = newName;
      return tree;
    }
    let updatedTree = tree.items.map((ob) => {
      return editNode(ob, id, newName);
    });
    return { ...tree, items: updatedTree };
  }

  return { insertNode, editNode, deleteNode };
};

export default useTraverseTree;
