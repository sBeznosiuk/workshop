console.log('task5')

class Component {
    constructor(tag) {
        this.element = {
            tag: tag,
            style: {display: 'block'}
        }
    }


    hide() {
        this.element.style.display = 'none';
    }

    show() {
        this.element.style.display = 'block';
    }
}


console.dir(Component)
    
class Box extends Component {
    constructor(options) {
        super(options.tag)
        this.size = {width: options.size, height: options.size}
        this.color = options.color
    }

    getProps() {
        console.log(`Tag: ${this.element.tag}; Width: ${this.size.width}; Height: ${this.size.height}; Background: ${this.color}; Display: ${this.element.style.display};`)
    }

}

const box1 = new Box ({
    tag: '<div></div>',
    size: 50,
    color: 'red'

})

box1.show()
box1.getProps()

const box2 = new Box({
    tag: '<ul></ul>',
    size: 100,
    color: 'blue'
});

box2.hide()
box2.getProps();