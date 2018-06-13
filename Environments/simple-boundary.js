class SimpleBoundary {

    /**
     * @constructor
     */
    constructor() {
        this.ground = Matter.Bodies.rectangle(width / 2, height - 15, width, 50, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.roof = Matter.Bodies.rectangle(width / 2, 10, width, 20, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.left_wall = Matter.Bodies.rectangle(10, height / 2, 20, height, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.right_wall = Matter.Bodies.rectangle(width - 10, height / 2, 20, height, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.block = Matter.Bodies.rectangle(width/3, height-55 , 6, 40, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });

        this.block2 = Matter.Bodies.rectangle(2*width/3, height-70 , 20, 60, {
            isStatic: true,
            friction: 1,
            collisionFilter: {
                category: 0x0001
            }
        });
    }

    /**
     * Adds the current boundary to MatterJS World
     */
    add_to_world() {
        Matter.World.add(world, [this.ground, this.roof, this.left_wall, this.right_wall, this.block,this.block2]);
    }

    display() {
        fill(color(118, 240, 155))
        rect(this.ground.position.x, this.ground.position.y, width, 50);
        rect(this.left_wall.position.x, this.left_wall.position.y, 20, height);
        rect(this.right_wall.position.x, this.right_wall.position.y, 20, height);
        rect(this.roof.position.x, this.roof.position.y, width, 20);
        rect(this.block.position.x, this.block.position.y, 10, 40);
        rect(this.block2.position.x, this.block2.position.y, 20, 60);
    }
}