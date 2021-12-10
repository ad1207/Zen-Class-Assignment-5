class Circle{
    setRadius(radius){
        this.radius=radius
    }
    getRadius(){
        return this.radius
    }
    setColor(color){
        this.color=color
    }
    getColor(){
        return this.color
    }
    toString(){
        return `Circle[radius:${this.radius},color:${this.color}]`
    }
    getArea(){
        return Math.PI*this.radius*this.radius
    }
    getCircumference(){
        return 2*Math.PI*this.radius
    }
}
let c = new Circle()
c.setColor('red')
c.setRadius(1.0)
console.log(c.toString())
console.log(c.getArea())
console.log(c.getCircumference())