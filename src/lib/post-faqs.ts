/**
 * Visible FAQ copy for the posts that need a FAQPage rich result.
 * The blog template renders these strings and emits the same text as
 * FAQPage JSON-LD. Edit the wording here, not in a second copy.
 *
 * Limits stay cautious: Instagram has not published a follow or unfollow
 * quota, so none of these answers state one as fact.
 */
export interface PostFaq {
	question: string;
	answer: string;
}

const postFaqs: Record<string, readonly PostFaq[]> = {
	"instagram-toplu-takipten-cikma": [
		{
			question: "Instagram'da toplu takipten çıkmak güvenli mi?",
			answer:
				"Güvenli, yavaş ve yarıda kesilebilir demektir. Kendi hesabınla, zaten takip ettiğin hesapları bırakmak serbest bir harekettir. Aynı hareketi birkaç dakika içinde yüzlerce kez yapmak, Instagram'ın araya girdiği halidir. Unfolks takipten çıkmalar arasında 4 ile 6 saniye bekler ve her 5 işlemden sonra 3 dakika dinlenir. İkisini de Ayarlar'dan değiştirebilirsin; beklemeyi uzatmak daha temkinli olan taraftır. Hiçbir araç, Unfolks dahil, hesabın kısıtlanmayacağını garanti edemez. Instagram reddetmeye başlarsa durmak, başka bir araçla devam etmekten daha güvenlidir.",
		},
		{
			question: "Günde kaç kişiyi takipten çıkabilirim?",
			answer:
				"Instagram bu sayıyı yayımlamaz. Günde şu kadar güvenli diyen yazılar tahmin eder ve tahmin çabuk eskiyor. Eşik her hesap için bir tane de değildir: yeni bir hesap, geçen hafta sınır yemiş bir hesap ve uzun süredir takip edip bırakarak büyümeye çalışan bir hesap aynı muameleyi görmez. Instagram eşiği duyurmadan da değiştirebilir. Temkinli olan, sandığından küçük bir grupla başlamak, varsayılan beklemeleri kısaltmamak ve kalan listeyi başka bir güne bırakmaktır. Elli dikkatli çıkış, hesabın bugün ne halde olduğunu gösterir. Bu bir resmi kota değil, denemeyi küçük tutma önerisidir.",
		},
		{
			question: "Şifremi vermem gerekir mi?",
			answer:
				"Hayır. Unfolks ücretsizdir ve Chrome, Edge veya Brave'de instagram.com'da açık olan oturumu kullanır. Uzantıda şifre alanı yoktur, açılacak bir Unfolks hesabı da yoktur. Takip listesi bilgisayarında kalır. Şifreni isteyen bir site bu iş için daha güvenli değildir; giriş bilgini de elinde tutuyordur.",
		},
		{
			question: "Instagram toplu takipten çıkma nasıl yapılır?",
			answer:
				"Sırayla ilerle. 1. instagram.com'da her zamanki gibi giriş yap ve Unfolks yan panelini aç. 2. Takip etmeyenleri göster'i çalıştır. Sadece isimleri görmek, Instagram'a tarama göndermemek istiyorsan aynı paneldeki veri dosyası kontrolünü kullan. O ekrandan takipten çıkılmaz. 3. Tutmak istediklerini gizle, sonra arama ve süzgeçlerle listeyi kısalt. 4. Durdurabileceğin küçük bir grup seç. İşlem sürerken durdurabilirsin. 5. Instagram takipten çıkmayı reddetmeye başlarsa bekle. Unfolks kendiliğinden durur ve ne zaman deneyebileceğini gösterir. Aynı grubu başka bir araçla sürdürme.",
		},
		{
			question: "Beni takip etmeyen herkesi tek tıkla bırakmalı mıyım?",
			answer:
				"Seçip bir grup başlatabilirsin. Başlatmamalısın. Takip listende seni takip etmese de sevdiğin yazarlar, dükkanlar ve arkadaşlar vardır. Onları gizle, bir kısmını seç, beklemeler işlesin. Tümünü seç, ekranda kalanlar demektir; ekranda kalanlar, bırakmak istediklerin olmalı. Tüm listeyi son hız boşaltan tek tık, kaçınılacak sonuçtur. Liste kısaysa toplu işleme hiç girme. Hesapları tek tek bırakmak yeter.",
		},
		{
			question: "İnsanları bırakırsam takipçi sayım düşer mi?",
			answer:
				"Takipten çıkmak, senin onları takip etmeni bitirir. Onlar zaten seni takip etmiyorduysa takipçi sayın bu yüzden değişmez. Takipçi sayın, seni takip eden biri ayrılırsa değişir. O ayrı bir olaydır. Toplu takipten çıkma, kimin seni bıraktığını da göstermez.",
		},
		{
			question: "Yanlışlıkla bıraktığım hesapları geri alabilir miyim?",
			answer:
				"Instagram'da bir takipten çıkma grubunu topluca yeniden takip ettiren bir düğme yoktur. Yanlışlıkla bıraktıysan o profili açıp yine takip edersin. Bu yüzden başlamadan gizlemek, sonradan bir geri al düğmesinden önemlidir. Seçili kullanıcı adlarını, başlamadan önce kopyalayıp uzantının dışında da tutabilirsin.",
		},
	],
	"instagramda-beni-takipten-cikanlari-gorme": [
		{
			question: "Instagram'da beni takipten çıkanları görme mümkün mü?",
			answer:
				"Kısmen. Instagram, biri seni takipten çıkınca bildirim göndermez. Gelen kutusu, e-postası ya da son kaybettiklerin sekmesi yoktur. Bugün kurduğun bir araç da elinde olmayan eski günleri uyduramaz. Görebildiğin şey, gerçekten tuttuğun iki takipçi kopyasının farkıdır. Eski kopyada olup yenisinde olmayanlar, arada takipten çıkan ya da hesabı kalkan kişilerdir. İki kopyanın arasındaki boşlukta gelip çıkanı göremezsin. İkisinde de yoksa iz kalmamıştır.",
		},
		{
			question: "Takipten çıkanları uygulamasız görebilir miyim?",
			answer:
				"Evet. Instagram uygulamasının içinde bu listeyi beklemeden iki yol var. Veri dosyasıyla: 1. Bilgilerini indir dosyasını iste. 2. Başka bir gün bir tane daha iste ve yenisini eskisinin üstüne kaydetme. 3. İki dosyadaki takipçi listelerini karşılaştır. Bu karşılaştırma siteyi taramaz. Masaüstünde, ayrı bir uygulama hesabı açmadan: 1. Chrome, Edge veya Brave'e Unfolks'u ekle. 2. instagram.com'da açık oturumla taramayı bitir. 3. Sonra yenile. Uzantı, son taramadan bu yana kaç hesabın takipten çıkmış olabileceğini söyler. Şifre istemez ve listeler bilgisayarda kalır.",
		},
		{
			question: "Şifremi vermem gerekir mi?",
			answer:
				"Hayır. İki listeyi karşılaştırmak için kimseye Instagram şifresi vermen gerekmez. Unfolks ücretsizdir, tarayıcıda açık olan oturumu kullanır ve listeleri bilgisayarda tutar. Takipten çıkanları sürekli izleyeyim diye şifre isteyen bir servise bu soru için ihtiyacın yoktur.",
		},
		{
			question: "Takipten çıkan ile geri takip etmeyen aynı şey mi?",
			answer:
				"Değil. Geri takip etmeyen, senin takip ettiğin ama seni takip etmeyen hesaptır. Hiç etmemiş de olabilir ve bunu bugün, eski bir kayıt olmadan da çıkarabilirsin. Takipten çıkan, daha önce seni takip edip sonra bırakan kişidir. Bunu bilmek için o eski anın bir kopyası gerekir. Geri takip etmeyenler listesini çıkanlar diye okursan, seni hiç takip etmemiş insanları yakalamış gibi olursun. Seni bırakıp senin de takip etmediğin biri o listede görünmez, çünkü liste yalnız senin takip ettiklerini taşır.",
		},
		{
			question: "Unfolks neden çıkmış olabilir diyor?",
			answer:
				"Çünkü iki tarama birden fazla nedenle ayrışabilir. Biri çıkmıştır, bir hesap kapanmış ya da adı değişmiştir, ya da önceki tarama Instagram yarıda kestiği için aynı sayfayı görememiştir. Uzantı, elinde olmayan bir kesinliği uydurmak yerine değişimin büyüklüğünü söyler. Farkı çıkanlar diye okumadan önce taramanın bitmesini ya da kaldığı yerden sürmesini bekle. Yarım kalmış tarama, karşılaştırılacak kötü bir kayıttır. Durmuş bir taramanın ilerlemesi 24 saate kadar saklanır.",
		},
		{
			question: "Beni şimdiye kadar takipten çıkan herkesi görebilir miyim?",
			answer:
				"Hayır. Yalnızca gerçekten elinde olan kayıtların arası görünür. İlk taramadan ya da ilk veri dosyasından öncesi, bugünkü takipçi listesinden bilinemez. İlk kayıt bir başlangıç çizgisidir, birikmiş bir borç değil. Hiç kayıt tutmadıysan, yıllar önce kimin çıktığını kimse dürüstçe söyleyemez. Dakikasına kadar bir saat de, o dakikanın iki yanını sen tutmadıysan, bu kayıtlardan çıkmaz.",
		},
		{
			question: "Ben başkalarını bırakırsam, kim beni bırakmış görür müyüm?",
			answer:
				"Hayır. Takipten çıkmak, senin kimi takip ettiğini değiştirir. Takipçilerinden kimin gittiğini ortaya çıkarmaz. Acele bir grup hesabı da sınırlayabilir. Instagram kaç takipten çıkmaya izin verdiğini yayımlamaz. Temkinli olan, beklemeleri kısa tutmamak ve Instagram dur deyince durmaktır. Kim çıktı kontrolüyle aynı oturuşta büyük bir takipten çıkma grubu çalıştırma. Bunlar ayrı işlerdir.",
		},
	],
	"how-to-see-who-doesnt-follow-you-back-on-instagram": [
		{
			question: "Does Instagram show who doesn't follow you back?",
			answer:
				"Not as a list. Your Following list marks the accounts that follow you, so on a short list you can check one row at a time. There is no built-in view of only the accounts you follow that don't follow you back. The badge wording moves when Instagram redesigns the app, so trust the mark on people who follow you and treat unmarked rows as the ones that do not.",
		},
		{
			question: "How do I see who doesn't follow you back on Instagram?",
			answer:
				"On a list of thirty or forty people, do it by hand. 1. Open your profile and tap Following. 2. Read each row. Marked accounts follow you. Unmarked rows do not follow you back. There is still no filter for only those rows. On a longer list, pick one of the two checks that finish. 3. Request Download your information, ask for followers and following if Instagram offers a partial export, and compare the two lists on your computer. 4. Or add Unfolks, open instagram.com while you are signed in, and click Show unfollowers. The extension uses the Chrome, Edge, or Brave session already open. It does not ask for your password, and the lists stay on your computer.",
		},
		{
			question: "Can I see this without giving anyone my password?",
			answer:
				"Yes. The manual check uses the Instagram app or site you are already signed in to. The data download comes from Instagram's own export. Unfolks is free and uses the browser session already open on instagram.com. There is no password field in the extension and no Unfolks account to create. You should not type your Instagram password into a third-party website to answer this question.",
		},
		{
			question:
				"Can I see who doesn't follow me back without installing an app?",
			answer:
				"Yes. A small Following list can be checked by hand, and Instagram's data download is a file you compare on your computer with no extra app account. Unfolks is not a phone app. It is a desktop side panel for Chrome, Edge, and Brave, and it does not run in browsers without that side panel. The phone is where the manual check lives. You can request the data download from the phone and open the file on a computer.",
		},
		{
			question: "Will looking get my account restricted?",
			answer:
				"Reading your own lists is ordinary Instagram use. A fast automated scan can still be slowed or stopped, because it requests a lot of pages in a row. That is separate from an unfollow limit, and Instagram does not publish the threshold for either one. The data-file check avoids the scan: the comparison happens on your computer and sends Instagram no new requests. Unfollowing is the action most likely to be limited. No tool can guarantee that it will not happen.",
		},
		{
			question: "Is this the same as seeing who unfollowed me?",
			answer:
				"No. Someone who never followed you is a non-follower. Someone who used to follow you and stopped is an unfollow. Who doesn't follow you back is a comparison of who you follow against who follows you, and you can produce it today even if you have never checked before. An unfollow needs an older copy of your followers. Instagram does not send a message when either thing happens. Reading the non-follower list as people who left counts people who may never have followed you.",
		},
		{
			question: "What should I do with the list once I have it?",
			answer:
				"Nothing, if you only wanted to look. That is a valid result. If you want to unfollow, hide the accounts you mean to keep first. Hidden accounts stay out of a bulk unfollow until you bring them back. Then unfollow a portion, not the whole list at full speed. Unfolks waits 4–6 seconds between unfollows by default and rests for 3 minutes after every 5. You can make both waits longer in Settings. Instagram does not publish a safe daily number, so a precise cap you read elsewhere is a guess. If Instagram starts refusing, stop.",
		},
	],
	"how-to-mass-unfollow-on-instagram-safely": [
		{
			question: "Is it safe to mass unfollow on Instagram?",
			answer:
				"Safe means slow and interruptible. It does not mean invisible, and it does not mean Instagram published an approval. Unfollowing accounts you follow, with your own account, is allowed. Doing hundreds of them in a few minutes is the action Instagram interrupts. Unfolks waits 4 to 6 seconds between unfollows and rests for 3 minutes after every 5. Both timings can be made longer in Settings, which is the safer direction. No tool, including Unfolks, can guarantee an account will not be restricted. When Instagram says stop, stopping is the safe part.",
		},
		{
			question: "How many accounts can I unfollow per day?",
			answer:
				"Instagram does not publish that number. There is no help-center page with a daily unfollow cap, and posts that quote one are guessing. The guess goes stale. The limit is not one number for every account. A new account, an account that was limited last week, and an account that has followed and unfollowed in loops for months are not treated the same. Instagram can also change the threshold without announcing it. The cautious version is a small batch, the default waits left alone or made longer, and the rest of the list on another day. Fifty careful unfollows tell you whether Instagram is happy today. That is a way to start small, not a published quota.",
		},
		{
			question: "Do I need to give my password to mass unfollow?",
			answer:
				"No. Unfolks is free and uses the Instagram session already open in Chrome, Edge, or Brave. There is no password field in the extension and no Unfolks account to create. The lists stay on your computer. A website that asks for your Instagram password is not a safer way to unfollow. It is holding your login as well.",
		},
		{
			question: "How do I mass unfollow Instagram safely?",
			answer:
				"Keep the batch smaller than the list, and leave the waits on. 1. Sign in on instagram.com the way you already do and open the Unfolks side panel. 2. Run Show unfollowers. If you only want the names without a scan, use the data-file check in the same panel. That screen cannot unfollow. 3. Hide every account you want to keep, then narrow the list with search and the filters. 4. Select a batch you could stop. You can stop it while it is running. 5. If Instagram starts refusing unfollows, stop. Unfolks does this on its own and shows when you can try again. Do not switch to another tool and continue the same job. It is the same account doing the same action.",
		},
		{
			question: "Can I unfollow everyone who doesn't follow me in one click?",
			answer:
				"You can select them and start a batch. You should not. Your Following list includes writers, shops, and friends you like who happen not to follow you. Hide those first. Select all means the accounts still visible, so still visible should already be the ones you mean to leave. One click that dumps the entire list at full speed is the outcome to avoid. A short list does not need a batch at all. Opening each profile is enough.",
		},
		{
			question: "Will I lose followers if I unfollow people?",
			answer:
				"Unfollowing ends your follow. It does not remove them from your followers. If they were not following you, your follower count does not change because you left. Your follower count changes when someone who follows you decides to leave, which is a separate event. A mass unfollow also does not show you who those people are.",
		},
		{
			question: "What should I do if Instagram stops the batch?",
			answer:
				"Stop. The limit is information, not a puzzle to route around with another browser, a VPN, or a second tool. Unfolks does not keep clicking through the error, and nothing in it clears a limit. Wait until Instagram lets you unfollow a single account by hand. If the message gives you a time, believe the message rather than a blog's clock. If you continue later, use a slower pace than the one that was stopped, and a smaller batch. Resuming a scan is fine once Instagram is answering again. Resuming an unfollow batch in the same hour it was blocked is how a short limit becomes a long one.",
		},
	],
};

/** FAQ for one post, or null when this post has no FAQ block. */
export function getPostFaq(slug: string): readonly PostFaq[] | null {
	const items = postFaqs[slug];
	if (!items) return null;

	if (items.length < 5 || items.length > 7) {
		throw new Error(
			`FAQ for ${slug} must have 5–7 questions, got ${items.length}`,
		);
	}

	const seen = new Set<string>();
	for (const item of items) {
		if (!item.question.trim() || !item.answer.trim()) {
			throw new Error(`FAQ for ${slug} has an empty question or answer`);
		}
		if (seen.has(item.question)) {
			throw new Error(`FAQ for ${slug} repeats a question: ${item.question}`);
		}
		seen.add(item.question);
	}

	return items;
}
