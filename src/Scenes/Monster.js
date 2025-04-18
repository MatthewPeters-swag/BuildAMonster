class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "mouthF.png");
        my.sprite.leftEye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_human_green.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_human_green.png");

        my.sprite.leftArm = this.add.sprite(this.bodyX-100, this.bodyY+80, "monsterParts", "arm_darkB.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX+100, this.bodyY+80, "monsterParts", "arm_darkB.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.leftLeg = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "leg_darkB.png");
        my.sprite.rightLeg = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "leg_darkB.png");
        my.sprite.leftLeg.flipX = true;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}