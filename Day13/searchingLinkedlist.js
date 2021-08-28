
// Iterative javascript program 
// to search an element
// in linked list

//Node class
class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

// Linked list class

let head; // Head of list

// Inserts a new node at the front of the list
function push(new_data) {

    // Allocate new node and putting data
    const new_Node = new Node(new_data)
    // Make next of new node as head
    new_Node.next = head;
    // Move the head to point to new Node
    head = new_Node;
}

// Checks whether the value 
// x is present in linked list
function search(head, x) {
    let current = head
    while (current != null) {
        if (current.data == x) {
            return true;//data found
        }
        current = current.next;
    }
    return false;//data not found
}

// Start with the empty list
/*
Use push() to construct below
list 14->21->11->30->10
*/
push(10);
push(30);
push(11);
push(21);
push(14);
if (search(head, 1))
    console.log("element found");
else
    console.log("element not found");

