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
	sc1:'sc1.png',
	sc2:'sc2.png'
});


// Define the Characters
monogatari.characters({
	'char_a': {
		name: '三角初華',
		color: '#F0E68C',
		sprites: {
			angry:'1a.png',
			sad:'1s.png',
			happy:'1h.png'
		}
	},
	'char_b': {
		name: '若葉睦',
		color: '#00ff88',
		sprites: {
			angry:'2a.png',
			sad:'2s.png',
			happy:'2h.png'
		}
	},
	'char_c': {
		name: '豐川祥子',
		color: '#48D1CC',
		sprites: {
			angry:'3a.png',
			sad:'3s.png',
			happy:'3h.png'
		}
	},
	'char_d': {
		name: '旁白',
		color: '#FFFFFF',
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
		'show background sc1 with fadeIn',
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
		'hide character char_a',
		'show character char_a happy with fadeIn',
		'char_a 小睦，我相信你可以重新找回演奏的感覺。我們一起加油吧！',
		'hide character char_b',
		'show character char_b happy at right with fadeIn',
		'char_b 初華...謝謝你還願意相信我。',
		'char_c 你們太天真了！現在網路上全是負面評論，贊助商也在考慮撤資。光憑熱情是解決不了問題的！',
		'char_a 那我們就用實力證明給大家看。祥子，你願意再給我們一次機會嗎？',
		'hide character char_c',
		'show character char_c sad at left with fadeIn',
		'char_c 我...我也想相信，但是我真的很害怕再次失敗。',
		'char_b 我會拼命練習的！這次絕對不會再讓大家失望！',
		'jump ending_good'
	],

	'fork_b': [
		'char_c 初華，你覺得呢？你是想留住樂團，還是這傢伙？',
		'char_a ...',
		'hide character char_b',
		'show character char_b angry at right with fadeIn',
		'char_b 什麼？你們要放棄我嗎？我明明說了會努力練習的！',
		'hide character char_c',
		'show character char_c sad at left with fadeIn',
		'char_c 小睦，這不是放棄，而是為了樂團的未來...',
		'char_b 未來？沒有我的未來嗎？你們根本就不相信我！',
		'char_a 小睦，事情不是你想的那樣...',
		'hide character char_b',
		'show character char_b sad at right with fadeIn',
		'char_b 樂團已經不需要我了吧？',
		{
			'Choice':{
				fork_b1:{
					'Text':'去安慰小睦',
					'Do':'jump fork_b1'
				},
				fork_b2:{
					'Text':'什麼都不說',
					'Do':'jump fork_b2'
				}
			}
		}
	],

	'fork_b1': [
		'char_a 小睦，等等！',
		'char_b 你還想說什麼？你們不是已經不需要我了嗎？',
		'char_d 小睦拿著東西跑了出去。',
		'hide character char_b',
		'hide character char_c',
		'hide character char_a',
		'show background sc2 with fadeIn',,
		'show character char_b sad at right with fadeIn',
		' ',
		'show character char_a sad at left with fadeIn',
		'char_a 我需要小睦！不能少了小睦...回來彈吉他！',
		'char_b ......',
		'char_a 對不起...祥子剛才說話太沖了。他這麼嚴格是因為他太在乎這個樂團了。',
		'hide character char_b',
		'show character char_b happy at right with fadeIn',
		'char_b 我們都知道他很努力，只是表達方式讓大家有些誤會。',
		'hide character char_a',
		'show character char_a happy with fadeIn',
		'char_a 初華，我們一起回去吧，樂團需要你。我們現在就只剩下Ave Mujica了。',
		'jump ending_good'
	],

	'fork_b2': [
		'char_c 小睦，請你理解我們的難處...這真的是最好的選擇。',
		'char_b 不用道歉。也許這樣對大家都好。我從來不覺得玩樂團開心過。',
		'char_d 小睦拿著東西跑了出去。',
		'hide character char_b',
		'hide character char_c',
		'show background sc2 with fadeIn',
		'show character char_b sad with fadeIn',
		' ',
		'char_b 祥子真的好過分喔，我明明就不想毀掉樂團。',
		'show character char_a sad at right with fadeIn',
		'char_a 小睦，等等！',
		'char_b 你還想說什麼？你們不是已經不需要我了嗎？',
		'char_a 我需要小睦！',
		'hide character char_b',
		'show character char_b angry with fadeIn',
		'char_b 初華就只會騙人！',
		'char_d 這時小睦沒注意到前面的樓梯，不小心踩空從樓梯上滾了下去。',
		'jump ending_bad'
	],

	'ending_good': [
		'show background sc1 with fadeIn',
		'show character char_a happy with fadeIn',
		'char_a 我們決定了！一個月後再舉辦一場演唱會，用實力證明給大家看！',
		'show character char_b happy at right with fadeIn',
		'char_b 我會拼命練習的！絕對不會再讓大家失望！',
		'show character char_c happy at left with fadeIn',
		'char_c 好吧...既然你們都這麼堅持，我也會全力以赴。但是這次一定要成功！',
		'char_a 我們一起加油！Ave Mujica永遠不會解散！',
		'char_d 一個月後，街頭演出大成功，小睦找回了自信，樂團比以前更加團結',
		'end'
	],

	'ending_bad': [
		'show background sc1 with fadeIn',
		'char_d 接下來的幾天，小睦都沒有來音樂室。樂團的練習雖然還是能繼續了，但總覺得缺少了什麼...',
		'show character char_a sad with fadeIn',
		'char_a 沒有小睦的吉他，感覺音樂不完整了。',
		'show character char_c sad at left with fadeIn',
		'char_c 我...我們是不是做錯了什麼？',
		'char_d 樂團的其他成員說：「你說過有一個人退出Ave Mujica就等於解散了吧？」',
		'char_d 之後大家都開始愈來愈少來練習，過了一段時間後樂團就解散了。',
		'char_d 戲就這樣散了。祥子抑制著內心的激動，轉頭去看練習室。在剛暗下來的天色裡，猶未燃燈的單薄的練習室，便在她的眼中逐漸模糊起來',
		'end'
	]
});