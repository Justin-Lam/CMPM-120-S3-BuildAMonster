class Monster extends Phaser.Scene {
	constructor() {
		super("monsterScene");
		this.my = {sprite: {}};  // Create an object to hold sprite bindings

		//Create constants for the monster location
		this.bodyX = 300;
		this.bodyY = 350;

		this.legXDelta = 50;
		this.legYDelta = 125;
		this.rightLegX = this.bodyX + this.legXDelta;
		this.leftLegX = this.bodyX - this.legXDelta;
		this.legY = this.bodyY + this.legYDelta;

		this.armXDelta = 100;
		this.armYDelta = -0;
		this.rightArmX = this.bodyX + this.armXDelta;
		this.leftArmX = this.bodyX - this.armXDelta;
		this.armY = this.bodyY + this.armYDelta;

		this.eyeYDelta = -75;
		this.eyeX = this.bodyX;
		this.eyeY = this.bodyY + this.eyeYDelta;

		this.mouthYDelta = 0;
		this.mouthX = this.bodyX;
		this.mouthY = this.bodyY + this.mouthYDelta;

		this.antennaXDelta = 50;
		this.antennaYDelta = -90;
		this.rightAntennaX = this.bodyX + this.antennaXDelta;
		this.leftAntennaX = this.bodyX - this.antennaXDelta;
		this.antennaY = this.bodyY + this.antennaYDelta;
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

		// Legs
		my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.legY, "monsterParts", "leg_whiteB.png");
		my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.legY, "monsterParts", "leg_whiteB.png");
		my.sprite.leftLeg.flipX = true;

		// Antennae
		my.sprite.rightAntenna = this.add.sprite(this.rightAntennaX, this.antennaY, "monsterParts", "detail_green_antenna_small.png");
		my.sprite.leftAntenna = this.add.sprite(this.leftAntennaX, this.antennaY, "monsterParts", "detail_green_antenna_small.png");
		my.sprite.leftAntenna.flipX = true;

		// Body
		my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redA.png");

		// Eye
		my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human.png");

		// Mouths
		my.sprite.mouthSmiling = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthE.png");
		my.sprite.mouthFangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
		my.sprite.mouthFangs.visible = false;

		// Arms
		my.sprite.rightArm = this.add.sprite(this.rightArmX, this.armY, "monsterParts", "arm_blueC.png");
		my.sprite.leftArm = this.add.sprite(this.leftArmX, this.armY, "monsterParts", "arm_blueC.png");
		my.sprite.leftArm.flipX = true;


		// Keyboard Input
		this.input.keyboard.on("keydown", function (event)
		{
			// Mouth
			if (event.code === "KeyS")              // show smile
			{
				my.sprite.mouthSmiling.visible = true;
				my.sprite.mouthFangs.visible = false;
			}
			else if (event.code === "KeyF")         // show fangs
			{
				my.sprite.mouthSmiling.visible = false;
				my.sprite.mouthFangs.visible = true;
			}

			// Movement
			if (event.code === "KeyA")				// move left
			{
				for (let bodyPart in my.sprite)
				{
					my.sprite[bodyPart].x--;
				}
			}
			else if (event.code === "KeyD")			// move right
			{
				for (let bodyPart in my.sprite)
				{
					my.sprite[bodyPart].x++;
				}
			}
		});
	}

	update() {
		let my = this.my;    // create an alias to this.my for readability


	}
}