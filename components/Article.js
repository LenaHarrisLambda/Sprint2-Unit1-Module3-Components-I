// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
	{
		title: 'Lambda School Students: "We\'re the best!"',
		date: 'Nov 5th, 2018',
		firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari. Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn jar twi'lek jinn leia jango skywalker mon.`,

		secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2 windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba owen jinn tatooine sith organa.`,

		thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
	},
	{
		title: 'Javascript and You, ES6',
		date: 'May 7th, 2019',
		firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

		secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

		thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`,
	},
	{
		title: 'React vs Angular vs Vue',
		date: 'June 7th, 2019',
		firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet, consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

		secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

		thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`,
	},
	{
		title: 'Professional Software Development in 2019',
		date: 'Jan 1st, 2019',
		firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor. Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

		secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

		thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor! Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`,
	},
	{
		title: 'Japanese Randomness',
		date: 'September 3rd, 2020',
		firstParagraph: '１００万人の人々がその戦争で命を落とした。 「怒ると彼はトラになる」というのは隠喩の例である。 いやしくも何かをするなら、じょうずにやりなさい。 いい誕生日を迎えられますように。 いよいよという時に言葉が出ない。 今日はとても暑い。 ログアウトするんじゃなかったよ。 イベントが成功したのは貴殿のたゆみ無い努力と献身のおかげです。 私たちがそこへ行くかどうかを決めるのは君の責任だ。 「はい」と「いいえ」しか言わない人と会話を続けるのは難しい。 すぐに戻ります。 １００万人の人々がその戦争で命を落とした。 イベントが成功したのは貴殿のたゆみ無い努力と献身のおかげです。 孫娘が自分で描いたおじいさんの絵を贈ってくれた日はおじいさんにはうれしい一日だった。 学校まで１０分で歩いて行ける。 今日はとても暑い。 ２人の外国人にあったが、１人はカナダから来た人で、もう１人はイギリスから来た人だ。 いつ神戸に来るのか教えて下さい。 エコロジーのために堪え忍ぶのではなく、自然と調和した住環境の快適性が必要である。 そうしたなかで急速な進歩を遂げてきたのが、ITである。',
		secondParagraph: '日本には美しい都市が多い。例えば京都、奈良だ。 孫娘が自分で描いたおじいさんの絵を贈ってくれた日はおじいさんにはうれしい一日だった。 ８時にヒースロー空港に到着する予定です。 ９時半の電車に乗れば、何時に秋田につきますか。 いまにも絶滅しようとしている野生動物もいます。 きょう何を昼食に食べましたか。 イルカは人間に次いで最も知能が高く、やがては彼らとの対話も夢ではないと考えている科学者もいる。 きょう何を昼食に食べましたか。 いやあ、見事に晴れ渡った秋の日になったね。これが台風一過というやつかね。 イメージはマスコミの情報に形成される。 いつの日か人間は砂漠を開拓して農業に利用するだろう。 私たちがそこへ行くかどうかを決めるのは君の責任だ。 いやあ、見事に晴れ渡った秋の日になったね。これが台風一過というやつかね。 １０２゜Ｆの熱があります。 「はい」と「いいえ」しか言わない人と会話を続けるのは難しい。 ５月１０日月曜日の午後３時に東京駅八重洲中央口で待ち合わせをしていただけませんか。 いつ神戸に来るのか教えて下さい。 すぐに戻ります。 失礼だが、上記の記事にある３つの誤りを指摘しておきたい。 彼らのコミュニケーションは我々が考えてきたものよりはるかに複雑かもしれません。',
		thirdParagraph: '６ヵ月靴を買っていない。新しいのを買ってよい頃だ。 イメージはマスコミの情報に形成される。 インフレを抑制しようとして金融政策に偏重すると、金融、したがって景気を必要以上に締め付けることになりかねない。 ２、３年でフランス語に熟達するのはきわめて難しい。 愛してる。 ５月１０日月曜日の午後３時に東京駅八重洲中央口で待ち合わせをしていただけませんか。 １０２゜Ｆの熱があります。 ２人の外国人にあったが、１人はカナダから来た人で、もう１人はイギリスから来た人だ。 ブラウンさんをお願いします。 「ｐｒｅｔｔｙ」の綴りは？',
	}
];

/*
Step 1: Write a component called 'articleMaker' to create an article. Your component is a function that takes an article object as its only argument, and returns a DOM node looking like the one below:

<div class="article">
	<h2>{title of the article}</h2>
	<p class="date">{date of the article}</p>
	{three separate paragraph elements}
	<span class="expandButton">+</span>
</div> */

articleMaker = (data) => {
	// Declare Code //
	const article = document.createElement('div');
	const title = document.createElement('h2');
	const date = document.createElement('p');
	const p1 = document.createElement('p');
	const p2 = document.createElement('p');
	const p3 = document.createElement('p');
	const expand = document.createElement('span');
	// Set Class Attributes //
	article.setAttribute('class', 'article');
	date.setAttribute('class', 'date');
	expand.setAttribute('class', 'expandButton');
	// Set Text Content //
	title.textContent = (data.title);
	date.textContent = (data.date);
	p1.textContent = (data.firstParagraph);
	p2.textContent = (data.secondParagraph);
	p3.textContent = (data.thirdParagraph);
	expand.textContent = ('+');
	// Set Event Listener //
	expand.addEventListener('click', (event) => {
		event.target.parentElement.setAttribute('class', 'article-open');
	});
	// Append To Parent Article Div //
	article.append(title);
	article.append(date);
	article.append(p1);
	article.append(p2);
	article.append(p3);
	article.append(expand);
	return article;
}

data.forEach(element => {
	article = articleMaker(element);
	const articles = document.querySelector('.articles');
	articles.append(article);
});

/* Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton. This listener should toggle the class 'article-open' on div.article. */

/* Step 3: Don't forget to return something from your function! */

/* Step 4: Outside your function now, loop over the data. At each iteration you'll use your component to create a div.article element and append it to the DOM inside div.articles (see index.html). */

/* Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others. Refresh the page to see the new article. */