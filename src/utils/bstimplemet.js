class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Komponen BST
class BST {
  constructor() {
    this.root = null;
    this.titleIndex = {};
  }

  // Fungsi untuk memasukkan node baru ke dalam BST berdasarkan judul
  insertNode(node, newData) {
    if (!node) {
      return new BSTNode(newData);
    }

    if (newData.title < node.data.title) {
      node.left = this.insertNode(node.left, newData);
    } else if (newData.title > node.data.title) {
      node.right = this.insertNode(node.right, newData);
    }

    return node;
  }

  // Fungsi untuk menambahkan data baru ke dalam BST dan indeks judul
  addData = ({ title, body }) => {
    const newData = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date(),
    };

    this.root = this.insertNode(this.root, newData);
    this.titleIndex[title] = newData;
  };

  // Fungsi untuk mencari data berdasarkan judul
  searchDataByTitle = (title) => {
    return this.titleIndex[title] || null;
  };
}

export default BST;
