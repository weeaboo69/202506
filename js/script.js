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
	'char_a': {
		name: '鄭筱臻',
		color: '#008000',
		sprites: {
			angry:'1.jpg',
			sad:'1.jpg',
			happy:'1.jpg'
		}
	},
	'char_b': {
		name: '鄭學靖',
		color: '#00ff88',
		sprites: {
			angry:'2.jpg',
			sad:'2.jpg',
			happy:'2.jpg'
		}
	},
	'char_c': {
		name: '朱曉雯',
		color: '#006400',
		sprites: {
			angry:'5.jpg',
			sad:'3.jpg',
			happy:'3.jpg'
		}
	},
	'char_d': {
		name: '鄭治忠',
		color: '#00BFFF',
		sprites: {
			angry:'4.jpg',
			sad:'4.jpg',
			happy:'4.jpg'
		}
	}
});

monogatari.script({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'char_d 人氣女子樂團Ave Mujica 在重新復活之後要舉辦很多場演唱會。',
		'char_d 為此團員做了很多新歌要在演唱會上演奏。',
		'char_d 但是樂團的吉他手小睦沒辦法演奏那麼高難度的歌曲。',
		'char_d 為了不讓演唱會延期團員們決定在演唱會用預錄的吉他聲音並讓吉他手在台上假裝演奏。',
		'char_d 但演唱會當天因為器材問題被觀眾發現了。',
		'show character char_c sad at left with fadeIn',
		'char_c 剛剛的演唱會...真的太糟糕了。',
		'show character char_b sad at right with fadeIn',
		'char_b 對不起...都是我的錯。',
		'char_b 完全忘記了怎麼彈吉他...',
		'hide character char_c',
		'show character char_c angry at left with fadeIn',
		'char_c 你知道這對我們樂團的名聲造成多大的傷害嗎？',
		'char_c 觀眾們現在都在網上討論我們是『假樂團』！',
		'char_b 我...我已經練習了很久，但是還是找不回那種感覺。',
		'char_b 也許我真的不適合當吉他手...',
		'char_c 現在說這些有什麼用？損害已經造成了！',
		'char_c 我們應該公開道歉，然後暫停活動，等風頭過了再重新開始。',
		'show character char_a sad with fadeIn',
		'char_a 冷靜一點，祥子。我們現在需要想辦法解決問題，而不是互相指責。',
		'char_d 小睦拿起東西準備離開，這時初華注意到她的手在微微顫抖...',
		'char_d 這時候初華選擇了...',
		{
			'Choice':{
				fork_a:{
					'Text':'支持小睦',
					'Do':'jump fork_a'
				},
				fork_b:{
					'Text':'同意祥子的建議',
					'Do':'jump fork_b'
				}
			}
		}
	],

	'fork_a': [
		'char_a zxw'
	],

	'fork_b': [
		'char_a zzz'
	]
});