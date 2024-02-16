
//Decorator for the Class.
function decoratorForClass(constructorfunction: Function): void {
    let message ="This is class decorator !"
    console.log(message)
}

// Decorator for the properties of the class.
function decoratorForProperty(target:any,propertyKey: string): void {
    let message =`This is property decorator for the ${propertyKey}` 
    console.log(message)

}

// Decorator for the method of the class.
function decoratorForMethod(target: any, key: string, descriptor: PropertyDescriptor): void {
   let message=`This is method decorator with ${target}, definition ${key} and the description of the method is ${descriptor}`
    console.log(message)
}

// Parametric Decorator example
function parametricDecorator(value: number): Function {
    return function (functionName: Function) {
        let message=`This is the decorator which accepts the value as arguments and returns a decorator with the value ${value}`
        console.log(message)
    }
}

// Accessor Decorator for Get method
function decoratorForGetter(target: any, key: string, descriptor: PropertyDescriptor): void {
    let message=`This is accessor decorator function for getter with a name ${key} and the description ${descriptor}`
    console.log(message)
    descriptor.enumerable = false
}






@decoratorForClass
class MyDecorators {
    private var1: string = "value1"


    @decoratorForProperty
    var2: string = "value2"

    constructor(value: string) {    
    }

    @decoratorForMethod
    myDemoMethod(): void {
        console.log("This is demo method of MyDecorators")
    }

    @parametricDecorator(10)
    myDemoMethod2(): void {
        console.log("This is Demo method 2")
    }

    @decoratorForGetter
    get getterMethod(): string {
        return this.var1
    }

    
}