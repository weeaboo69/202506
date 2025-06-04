/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {

});


// Define the Characters
monogatari.characters({
	'manA': {
		name: '阿德',
		color: '#008000',
		sprites: {
			face01: 'man01.png',
			face02: 'man02.png',
			face03: 'man03.png',
		}
	},
	'manB': {
		name: '安安',
		color: '#00ff88',
		sprites: {
			face01: 'woman01.png',
			face02: 'woman02.png',
			face03: 'woman03.png',
		}
	}
});

monogatari.script({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show character manA face01',
		'manA 嗨我是大手阿德',
		'show character manA face02 at left',
		'manA 我好帥',
		'show character manB face02 at right',
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});