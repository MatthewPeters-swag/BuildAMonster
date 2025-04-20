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
        my.sprite.nub1 = this.add.sprite(this.bodyX-40, this.bodyY-100, "monsterParts", "detail_dark_eye.png");
        my.sprite.nub2 = this.add.sprite(this.bodyX+40, this.bodyY-100, "monsterParts", "detail_dark_eye.png");
        my.sprite.nub1.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.leftEye = this.add.sprite(this.bodyX-50, this.bodyY, "monsterParts", "eye_human_green.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX+50, this.bodyY, "monsterParts", "eye_human_green.png");

        my.sprite.leftArm = this.add.sprite(this.bodyX-100, this.bodyY+80, "monsterParts", "arm_darkB.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX+100, this.bodyY+80, "monsterParts", "arm_darkB.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.leftLeg = this.add.sprite(this.bodyX-50, this.bodyY+130, "monsterParts", "leg_darkB.png");
        my.sprite.rightLeg = this.add.sprite(this.bodyX+50, this.bodyY+130, "monsterParts", "leg_darkB.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.mouth1 = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "mouthF.png");
        my.sprite.mouth2 = this.add.sprite(this.bodyX, this.bodyY-50, "monsterParts", "mouth_closed_happy.png");

        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.sprite.mouth1.visible = false;
        my.sprite.mouth2.visible = true;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.keyS.isDown) {
            my.sprite.mouth1.visible = false;
            my.sprite.mouth2.visible = true;
        }
        if (this.keyF.isDown) {
            my.sprite.mouth1.visible = true;
            my.sprite.mouth2.visible = false;
        }

        if (this.keyD.isDown) {
            for (const part in my.sprite) {
                my.sprite[part].x += 2;
            }
        }
        if (this.keyA.isDown) {
            for (const part in my.sprite) {
                my.sprite[part].x -= 2;
            }
        }
    }
}