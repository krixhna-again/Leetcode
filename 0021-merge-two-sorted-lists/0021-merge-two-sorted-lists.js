var mergeTwoLists = function(list1, list2) {
    // Dummy node to make merging easier
    let dummy = new ListNode(0);
    let current = dummy;

    // Compare nodes from both lists
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    // Attach whichever list is remaining
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the actual head
    return dummy.next;
};