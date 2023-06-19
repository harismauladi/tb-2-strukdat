import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BSTNode from "../components/BSTNode";
import "../styles/style.css";

function BSTDemo() {
  const [tree, setTree] = useState(null);

  // Fungsi untuk memasukkan nilai ke dalam BST
  const insertNode = (node, value) => {
    if (!node) {
      return { value, left: null, right: null };
    }

    if (value < node.value) {
      return { ...node, left: insertNode(node.left, value) };
    } else if (value > node.value) {
      return { ...node, right: insertNode(node.right, value) };
    }

    return node;
  };

  // Fungsi untuk menambahkan nilai ke dalam BST
  const handleInsert = () => {
    const value = parseInt(prompt("Masukkan nilai:"), 10);
    if (!isNaN(value)) {
      setTree((prevTree) => insertNode(prevTree, value));
    }
  };

  const handleReset = () => {
    setTree(null);
  };
  return (
    <>
      <Navbar type="bst" />
      <div className="note-app__body">
        <div className="node-action">
          <button onClick={handleInsert} className="addNode">
            Tambahkan Node
          </button>
          <button onClick={handleReset} className="addNode">
            Reset Node
          </button>
        </div>
        <div className="app">
          <div className="bst">{tree && <BSTNode {...tree} />}</div>
        </div>
      </div>
    </>
  );
}

export default BSTDemo;
