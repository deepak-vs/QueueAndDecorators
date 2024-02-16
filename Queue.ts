class Queue<T> {
    private elements: T[] = [];

    constructor(private size: number) {}

    //Method to to check empty queue
    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    //Method to check whether queue is full or not based on the size provided by the user
    isFull(): boolean {
        return this.elements.length === this.size;
    }

    //Method to add item to the queue
    enqueue(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The Queue is overflow!');
        }
        this.elements.push(element);

    }

    //Method to remove item from the queue
    dequeue(): T | void {
        if (this.elements.length == 0) {
            throw new Error('The queue is empty!');
        } else {
       return this.elements.shift();
        } 
    }

    //Method to get the size of the queue
    getSize():number{
        return this.elements.length;
    }
}
