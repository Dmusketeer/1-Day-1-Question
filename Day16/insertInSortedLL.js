
var head; //head of the ll

// ll node
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}


//function to insert a new_node in a list.
function sortedInsert(new_node) {
    var current;

    /* Special case for head node */
    if (head == null || head.data >= new_node.data) {
        new_node.next = head;
        head = new_node;
    } else {

        /* Locate the node before povar of insertion. */
        current = head;

        while (current.next != null && current.next.data < new_node.data)
            current = current.next;

        new_node.next = current.next;
        current.next = new_node;
    }
}

/* Utility functions */

/* Function to create a node */
function newNode(data) {
    x = new Node(data);
    return x;
}

/* Function to prvar linked list */
function printList() {
    temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
}
var new_node;
new_node = newNode(5);
sortedInsert(new_node);
new_node = newNode(10);
sortedInsert(new_node);
new_node = newNode(7);
sortedInsert(new_node);
new_node = newNode(3);
sortedInsert(new_node);
new_node = newNode(1);
sortedInsert(new_node);
new_node = newNode(9);
sortedInsert(new_node);
console.log("Created Linked List :");
printList();


// Time Complexity: O(n)