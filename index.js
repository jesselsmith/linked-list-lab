function getName(node){
    return node.name
}

function headNode(list, collection){
    return collection[list]
}

function next(node, collection){
    return collection[node.next]
}

function nodeAt(index, linkedlist, collection){
    let node = headNode(linkedlist, collection)

    for(let i = 0; i < index; i++){
        node = next(node, collection)
    }

    return node
}

function addressAt(index, linkedlist, collection){
    if(index === 0){
        return linkedlist;
    }
    
    let node = headNode(linkedlist, collection)

    for(let i = 0; i < index - 1; i++){
        node = next(node, collection)
    }

    return node.next
}

function indexAt(node, collection, linkedList){
    let counter = 0
    let currNode = headNode(linkedList, collection)
    while(node !== currNode && !!currNode){
        currNode = next(currNode, collection)
        counter++;
    }
    if(!!currNode){
        return counter;
    }else{
        return -1;
    }
}

function insertNodeAt(index, address, linkedList, collection){
    if(index === 0){
        collection[address].next = linkedList
    }else{
        let prevNode = nodeAt(index - 1, linkedList, collection)
        collection[address].next = prevNode.next
        prevNode.next = address
    }
}

function deleteNodeAt(index, linkedList, collection){
    if(index === 0){
        collection[linkedList].next = null
    }else{
        let prevNode = nodeAt(index - 1, linkedList, collection)
        prevNode.next = next(prevNode, collection).next
    }
}