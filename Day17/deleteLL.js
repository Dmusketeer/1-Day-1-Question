
// javascript program to delete a linked list
var head; // head of the list

/* Linked List node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

/* Function deletes the entire linked list */
function deleteList() {
    head = null;
}

/* Inserts a new Node at front of the list. */
function push(new_data) {
    /*
     * 1 & 2: Allocate the Node & Put in the data
     */
    var new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to povar to new Node */
    head = new_node;
}

/*
 * Use push() to construct below list 1->12->1->4->1
 */

push(1);
push(4);
push(1);
push(12);
push(1);

console.log("Deleting the list<br/>");
deleteList();

console.log("Linked list deleted");