import type { Dictionary } from "./en";

/** Turkish copy. Terms match the extension's own Turkish interface. */
export const tr: Dictionary = {
	meta: {
		tagline: "Instagram'da seni geri takip etmeyenleri bul",
		description:
			"Unfolks, Instagram'da seni geri takip etmeyenleri gösteren ücretsiz bir Chrome uzantısı. Listeyi filtrele, gözden geçir ve takibi güvenli bir tempoda bırak — şifre yok, giriş yok, listelerin tarayıcından çıkmaz.",
		skipToContent: "İçeriğe geç",
	},
	nav: {
		features: "Özellikler",
		howItWorks: "Nasıl çalışır",
		faq: "SSS",
		blog: "Blog",
		addToChrome: "Chrome'a ekle",
		addToChromeFree: "Chrome'a ekle — ücretsiz",
		mainLabel: "Ana menü",
		mobileLabel: "Mobil menü",
		openMenu: "Menüyü aç",
		closeMenu: "Menüyü kapat",
		toggleTheme: "Açık/koyu temayı değiştir",
	},
	hero: {
		badge: "Her zaman ücretsiz · Şifre gerekmez",
		titleBefore: "Instagram'da seni",
		titleHighlight: "geri takip etmeyenleri",
		titleAfter: "gör",
		intro:
			"Unfolks takipçi ve takip listelerini doğrudan tarayıcında karşılaştırır, seni hiç geri takip etmeyen her hesabı bulur ve onları toplu olarak bırakmanı sağlar.",
		howItWorks: "Nasıl çalışır",
		rating: "{count}+ Instagram kullanıcısından {value}/5",
	},
	preview: {
		refresh: "Listeyi yenile",
		lastScan: "Son tarama: 2 dakika önce",
		dataFileShort: "Veri dosyası",
		dataFile: "Veri dosyasıyla kontrol et",
		search: "Hesaplarda ara",
		sort: "En son takip edilenler",
		chips: ["Onaylı", "Onaysız", "Gizli hesap", "Fotoğrafsız"],
		selectAll: "Tümünü seç",
		copy: "Kopyala",
		unfollowAll: "Tümünü bırak (20)",
		unfollowAllShort: "Bırak (20)",
		unfollow: "Takibi bırak",
	},
	stats: {
		heading: "Rakamlarla Unfolks",
		items: [
			{ value: 25000, prefix: "", suffix: "+", label: "Instagram kullanıcısı" },
			{ value: 5, prefix: "", suffix: "/5", label: "Ortalama puan" },
			{ value: 0, prefix: "", suffix: "", label: "İstenen şifre" },
			{
				value: 100,
				prefix: "%",
				suffix: "",
				label: "Listelerin bilgisayarında kalır",
			},
		],
	},
	browsers: {
		label: "Şu tarayıcılarda çalışır",
	},
	features: {
		heading: "Takip listeni temizlemek için gereken her şey",
		intro:
			"Panel yok, abonelik yok, listelerin bilgisayarında kalır. Tek bir iş, düzgünce yapılmış.",
		items: [
			{
				title: "Kesin sonuç",
				description:
					"Takip ettiğin her hesabı takipçilerinle karşılaştırır ve yalnızca seni gerçekten geri takip etmeyenleri listeler. Listeyi sonra yenilediğinde, son taramadan beri kaç kişinin seni takipten çıkmış olabileceğini söyler.",
			},
			{
				title: "Güvenli tempoda bırak",
				description:
					"Birkaç hesap ya da hepsini seç. Unfolks varsayılan olarak her takip bırakma arasında 4–6 saniye bekler ve her 5 hesapta bir 3 dakika mola verir; ikisini de Ayarlar'dan değiştirebilirsin.",
			},
			{
				title: "Kaldığı yerden devam",
				description:
					"Instagram taramayı sınırlarsa ilerlemen kaybolmaz. Unfolks ne kadar beklemen gerektiğini gösterir, sonra baştan başlamak yerine kaldığı yerden devam edersin.",
			},
			{
				title: "Veri dosyasıyla risksiz kontrol",
				description:
					"Instagram'ın \"Bilgilerini indir\" dosyasını bırak; Instagram'a tek bir istek göndermeden seni geri takip etmeyenleri gör.",
			},
			{
				title: "Filtrele, sırala, tut",
				description:
					"Onaylı, onaysız, gizli hesap ya da fotoğrafsız hesaplara göre filtrele, takip tarihine göre sırala ve ara. Tutmak istediğin hesapları listeden gizle; toplu işlemde takipleri asla bırakılmaz.",
			},
			{
				title: "Asla şifre yok",
				description:
					"Unfolks tarayıcında zaten açık olan Instagram oturumunu kullanır. Giriş formu yok, hesap açmak yok; listelerin bilgisayarında kalır.",
			},
		],
		leadImageAlt:
			"Unfolks panelinde 3 hesabın takibini bırakma onayı: her biri arasında 4–6 saniye, her 5 işlemde 3 dakika mola.",
	},
	howItWorks: {
		eyebrow: "Nasıl çalışır",
		heading: "Daha temiz bir takip listesine üç adım",
		steps: [
			{
				title: "Uzantıyı ekle",
				description:
					"Unfolks'u Chrome Web Mağazası'ndan yükle. Tek tıklama; kayıt yok, ayar yok.",
			},
			{
				title: "Instagram'ı ve yan paneli aç",
				description:
					"Instagram'a her zamanki gibi giriş yap, sonra Unfolks simgesine tıkla. Yan panel sayfanın yanında açılır; giriş yaptığın hesabı taramak için Takip etmeyenleri göster'e tıkla.",
			},
			{
				title: "Gözden geçir ve temizle",
				description:
					"Seni geri takip etmeyenleri ara ve filtrele, tutmak istediklerini gizle, gerisini güvenli bir tempoda bırak.",
			},
		],
		imageAlt:
			"Unfolks yan panelinde seni geri takip etmeyen hesapların listesi; filtreler, arama ve her satırda Takibi bırak düğmesi.",
	},
	testimonials: {
		heading: "Instagram kullanıcıları seviyor",
		intro:
			"{count}+ kişi takip listesini dürüst tutmak için Unfolks kullanıyor.",
		items: [
			{
				quote:
					"Instagram takipçilerini yönetmek için en iyi araç. Tek bir işi yapıyor ve düzgün yapıyor.",
				role: "Yazılım Mühendisi",
			},
			{
				quote:
					"Sonunda beni kimlerin geri takip etmediğini öğrendim. Çok işe yaradı — yaklaşık bir dakika sürdü.",
				role: "Moda Tasarımcısı",
			},
			{
				quote:
					"Temiz bir arayüz, kusursuz çalışıyor. Yıllardır ilgilenmediğim takip listemi temizlememe yardım etti.",
				role: "Manken",
			},
		],
	},
	faq: {
		heading: "Sık sorulan sorular",
		intro: "Yüklemeden önce genelde merak edilen her şey.",
		items: [
			{
				question: "Unfolks'a Instagram şifremi vermem gerekiyor mu?",
				answer:
					"Hayır. Unfolks instagram.com'daki kendi tarayıcı oturumunda çalışır, yani zaten yaptığın girişi kullanır. Uzantıya asla şifre yazmazsın ve açılacak bir Unfolks hesabı yoktur.",
			},
			{
				question: "Instagram hesabım için güvenli mi?",
				answer:
					"Unfolks temkinli olacak şekilde tasarlandı. Toplu takip bırakmada varsayılan olarak her hesap arasında 4–6 saniye bekler ve her 5 hesapta bir 3 dakika mola verir; ikisini de Ayarlar'dan yavaşlatabilirsin. Instagram takip bırakmayı reddetmeye başlarsa Unfolks kendiliğinden durur ve zorlamak yerine ne zaman tekrar deneyebileceğini gösterir. Sınırları Instagram belirler; hiçbir araç bir hesabın asla kısıtlanmayacağını garanti edemez, ama yavaş gitmek riski düşük tutan şeydir.",
			},
			{
				question: "Instagram taramayı durdurursa ne olur?",
				answer:
					"İlerlemen kaybolmaz. Kısa sınırlamalarda Unfolks kendisi bekleyip devam eder. Daha uzun olanlarda ne kadar beklemen gerektiğini söyler, sonra baştan başlamak yerine taramanın kaldığı yerden devam etmeni sağlar. Büyük hesaplar Ayarlar'dan dengeli ya da temkinli tarama hızını da seçebilir.",
			},
			{
				question: "Instagram'a hiç istek göndermeden kontrol edebilir miyim?",
				answer:
					"Evet. Takipçi ve takip listelerini Instagram'ın \"Bilgilerini indir\" sayfasından indir, sonra dosyayı Unfolks'a bırak. Seni geri takip etmeyenleri bilgisayarında bulur; engellenme riski yoktur ve dosya hiçbir yere yüklenmez. Bu yolla bulunan hesapların takibi o ekrandan bırakılamaz: profili aç ya da listeden bırakmak için tarama yap.",
			},
			{
				question: "Unfolks takipçi listemi bir sunucuda saklıyor mu?",
				answer:
					"Hayır. Karşılaştırma tarayıcında yapılır ve listelerin bilgisayarında kalır. Uzantının Instagram dışında bir yere gönderdiği tek şey, bir şey bozulursa hatanın düzeltilebilmesi için gönderilen hata raporudur. Ayrıntılar gizlilik politikasında.",
			},
			{
				question: "Takibini bırakmak istemediğim hesapları tutabilir miyim?",
				answer:
					"Evet. Onları listeden gizle; toplu takip bırakmaya asla dahil edilmezler. İstediğin zaman geri getirebilirsin.",
			},
			{
				question: "Birden fazla hesabı aynı anda bırakabilir miyim?",
				answer:
					"Evet. Seçmeye başlamak için bir hesaba çift tıkla ya da Tümünü seç'i kullan, sonra seçtiklerinin takibini tek seferde bırak. İşlemi istediğin an durdurabilir, seçili kullanıcı adlarını da kopyalayabilirsin.",
			},
			{
				question: "Ücreti ne kadar?",
				answer:
					"Unfolks tamamen ücretsiz. Deneme süresi, ücretli paket ya da kredi kartı yok.",
			},
			{
				question: "Hangi tarayıcılar destekleniyor?",
				answer:
					"Unfolks tarayıcının yan panelinde açılır; bu yüzden uzantı yan panellerini destekleyen Chrome, Edge ya da Brave gibi bir Chromium tarayıcı gerekir. Opera gibi bu desteği olmayan tarayıcılarda açılmaz.",
			},
		],
		supportTitle: "Aradığını bulamadın mı?",
		supportText:
			"Bize e-posta at, bir insan cevap versin. Hata mı buldun? GitHub'da bildir.",
		supportEmail: "E-posta gönder",
		supportIssues: "Hata bildir",
	},
	cta: {
		heading: "Kimin seni geri takip ettiğini tahmin etmeyi bırak",
		text: "Unfolks'u yükle, Instagram'ı aç ve tüm tabloyu doğrudan tarayıcında gör. Ücretsiz; hesap yok, şifre yok.",
	},
	footer: {
		blurb:
			"Instagram'da seni geri takip etmeyenleri gösteren — ve bu konuda bir şey yapmanı sağlayan — ücretsiz bir Chrome uzantısı.",
		product: "Ürün",
		resources: "Kaynaklar",
		chromeStore: "Chrome Web Mağazası",
		privacy: "Gizlilik politikası",
		contact: "İletişim",
		rights: "Tüm hakları saklıdır.",
		builtBy: "Geliştiren:",
		compare: "Unfolks ve Cobanov",
		sourceCode: "GitHub'daki kaynak kod",
		email: "E-posta",
	},
	promo: {
		label: "Tanıtım",
		close: "Tanıtımı kapat",
		title: "Taş Kağıt Makas oyunumuzu dene",
		text: "Bir arkadaşınla tartışmayı mı çözmen gerekiyor? Hızlı bir el oyna, kararı şans versin.",
		play: "Hemen oyna",
	},
	blog: {
		metaDescription:
			"Instagram takipçilerini yönetme, takip listeni temizleme ve Unfolks'tan daha fazla yararlanma üzerine rehberler ve ipuçları.",
		eyebrow: "Blog",
		heading: "Instagram, tahmin yürütmeden",
		intro:
			"Takipçiler, takip bırakma ve hesabını sağlıklı tutma üzerine pratik yazılar.",
		empty: "Henüz yazı yayınlanmadı — yakında tekrar uğra.",
		readingTime: "{minutes} dk okuma",
		allPosts: "Tüm yazılar",
		ctaHeading: "Seni kimlerin geri takip etmediğini merak mı ediyorsun?",
		ctaText:
			"Unfolks bunu doğrudan tarayıcında gösterir. Ücretsiz, şifre gerekmez.",
	},
	compare: {
		metaTitle:
			"Cobanov Instagram Unfollowers alternatifi: Unfolks ve konsol scripti",
		metaDescription:
			"Unfolks'un Cobanov Instagram Unfollowers ile karşılaştırması: nasıl çalıştıkları, ortak yönleri ve bir Chrome uzantısının nerede daha kolay olduğu.",
		eyebrow: "Karşılaştırma",
		title: "Unfolks ve Cobanov Instagram Unfollowers",
		intro:
			"Cobanov Instagram Unfollowers, GitHub'daki InstagramUnfollowers projesinin fikrinden yola çıkan bir konsol scripti; kodunu tarayıcı konsoluna yapıştırınca seni geri takip etmeyenleri bulur. Unfolks aynı işi bir Chrome uzantısı olarak yapar. İşte karşılaştırması.",
		checked:
			"{date} tarihinde, scriptin {version} sürümü ve web sitesiyle karşılaştırıldı.",
		table: {
			title: "Bir bakışta",
			description:
				"İki aracın aynı yaptığı şeyleri gizlemek için Sadece farklar'ı aç.",
			unfolksCaption: "Chrome uzantısı",
			scriptName: "Cobanov",
			scriptCaption: "Konsol scripti",
			cta: "Chrome'a ekle",
			labels: {
				feature: "Özellik",
				included: "Var",
				partial: "Kısmen",
				notIncluded: "Yok",
				onlyDifferences: "Sadece farklar",
				compareWith: "{name} ile karşılaştır",
				showingDifferences: "Yalnızca farklı satırlar gösteriliyor",
				showingAll: "Tüm satırlar gösteriliyor",
			},
			sections: [
				{
					id: "setup",
					title: "Başlarken",
					rows: [
						{
							id: "start",
							feature: "Nasıl başlatılır",
							unfolks: "Bir kez yükle, simgeye tıkla",
							script: "Her girişte kodu konsola yapıştır",
						},
						{
							id: "updates",
							feature: "Güncellemeler",
							unfolks: "Otomatik",
							script: "Yeni kodu kendin kopyalarsın",
						},
						{
							id: "where",
							feature: "Nerede görünür",
							unfolks: "Yan panelde, Instagram'ın yanında",
							script: "Instagram'ın üstünde duran panelde",
						},
						{
							id: "browsers",
							feature: "Tarayıcılar",
							unfolks: "Chrome, Edge, Brave",
							script: "Konsolu olan masaüstü tarayıcılar",
						},
					],
				},
				{
					id: "features",
					title: "Özellikler",
					rows: [
						{
							id: "datafile",
							feature: "Veri dosyasıyla kontrol",
							hint: "Instagram'a hiçbir şey göndermez. Unfolks'ta panelin içinde, scriptte ayrı bir sayfada.",
							unfolks: true,
							script: true,
						},
						{
							id: "warn",
							feature: "Seni takipten çıkmış olabilecekleri bildirir",
							unfolks: true,
							script: false,
						},
						{
							id: "filters",
							feature: "Filtreler ve arama",
							unfolks: true,
							script: true,
						},
						{
							id: "hide",
							feature: "Tutmak istediğin hesapları gizleme",
							unfolks: true,
							script: true,
						},
						{
							id: "copy",
							feature: "Kullanıcı adlarını kopyalama",
							unfolks: true,
							script: true,
						},
						{
							id: "pacing",
							feature: "Takip bırakmalar arasında bekler",
							unfolks: true,
							script: true,
						},
						{
							id: "resume",
							feature: "Yarıda kalan taramaya devam",
							unfolks: true,
							script: true,
						},
					],
				},
				{
					id: "trust",
					title: "Gizlilik ve ücret",
					rows: [
						{
							id: "password",
							feature: "Şifren olmadan çalışır",
							unfolks: true,
							script: true,
						},
						{
							id: "local",
							feature: "Listeler tarayıcında kalır",
							unfolks: true,
							script: true,
						},
						{
							id: "languages",
							feature: "Diller",
							unfolks: "İngilizce, Türkçe",
							script: "İngilizce, Türkçe",
						},
						{
							id: "price",
							feature: "Ücret",
							unfolks: "Ücretsiz",
							script: "Ücretsiz",
						},
						{
							id: "source",
							feature: "Kaynak kod",
							unfolks: "Açık kaynak (MIT)",
							script: "GitHub'da herkese açık",
						},
					],
				},
			],
		},
		sharedTitle: "Ortak yönleri",
		sharedText:
			"İkisi de ücretsiz, Instagram şifreni asla istemez ve listelerini tarayıcında tutar. İkisi de takip bırakmalar arasında bekler, tutmak istediğin hesapları gizlemeni sağlar, Instagram'ın durdurduğu bir taramaya kaldığı yerden devam edebilir ve Instagram'a hiç istek göndermeyen bir veri dosyası kontrolü sunar.",
		diffTitle: "Farkları",
		diffs: [
			{
				title: "Konsola kod yok",
				text: "Bir konsol scripti ancak tarayıcının geliştirici konsoluna yapıştırıldığında çalışır ve Instagram'ı her yenilediğinde yeniden yapıştırman gerekir. Instagram konsolda bir uyarı gösterir: biri sana buraya bir şey yapıştırmanı söylediyse bu bir dolandırıcılıktır ve hesabını ele geçirir. Cobanov'un scripti herkese açık; sitesi kontrol edebilmen için bir hash ve Semgrep raporu da yayınlıyor. Ama kod yapıştırmak, dolandırıcıların güvendiği alışkanlıktır. Unfolks ise Chrome Web Mağazası'ndan bir kez yüklenir; mağaza uzantıları yayınlamadan önce inceler.",
			},
			{
				title: "Her zaman güncel sürüm",
				text: "Instagram bir şeyi değiştirdiğinde script, ancak düzeltilmiş kodu yeniden kopyalarsan çalışmaya devam eder. Unfolks kendini arka planda günceller.",
			},
			{
				title: "Instagram'ın üstünde değil, yanında",
				text: "Unfolks tarayıcının yan panelinde açılır, Instagram sayfası tamamen görünür kalır. Instagram sekmesi açık kaldığı sürece paneli kapatsan da tarama sürer.",
			},
			{
				title: "Neyin değiştiğini söyler",
				text: "Unfolks her yenilemeden sonra, son taramadan beri kaç hesabın seni takipten çıkmış olabileceğini söyler. Script yalnızca son sonucu gösterir.",
			},
		],
		/** Text inside the decorative pictures on the difference cards. */
		diffVisuals: {
			consoleStop: "Dur!",
			consoleText: "Bu, geliştiriciler için bir tarayıcı özelliğidir.",
			upToDate: "Otomatik güncellendi",
			toast: "3 kişi sizi takipten çıkmış olabilir",
		},
		fairTitle: "Script ne zaman mantıklı",
		fairText:
			"Script kurulum gerektirmez; Firefox ya da Safari kullananlara ve yalnızca bir kez bakmak isteyenlere uyar. Veri dosyası sayfası sıradan bir web sayfası, onun için de bir şey yüklemen gerekmez. Yapıştırmadan önce kodu oku.",
		switchTitle: "Geçmek bir dakika sürer",
		switchSteps: [
			"Unfolks'u Chrome Web Mağazası'ndan ekle.",
			"Instagram'ı aç ve Unfolks simgesine tıkla.",
			"Takip etmeyenleri göster'e tıkla. Scripte artık gerek yok.",
		],
		faqTitle: "Sorular",
		faq: [
			{
				question: "Unfolks'u Cobanov mu yapıyor?",
				answer:
					"Hayır. Unfolks'u Özgür Özalp geliştiriyor; Cobanov Instagram Unfollowers ya da InstagramUnfollowers projesiyle bir bağlantısı yok.",
			},
			{
				question: "Konsola script yapıştırmak güvenli mi?",
				answer:
					"Yalnızca kodu okuduysan ve ona güveniyorsan. Instagram'ın konsolu, biri sana oraya bir şey yapıştırmanı söylediyse bunun dolandırıcılık olduğu konusunda uyarır; Cobanov'un kendi güvenlik sayfası da güvenmediğin kodu konsola yapıştırmamanı söyler. Chrome Web Mağazası'ndan bir uzantı bu adımı ortadan kaldırır.",
			},
			{
				question: "Geçince bir şey kaybeder miyim?",
				answer:
					"Hayır. İki araç da listelerini bir sunucuda tutmaz, yani taşınacak bir şey yok. Unfolks'u yükle ve bir tarama yap.",
			},
		],
		disclaimer:
			"Cobanov Instagram Unfollowers ve InstagramUnfollowers projesi kendi geliştiricilerine aittir; Unfolks'un onlarla bir bağlantısı yoktur. Bu sayfa, {date} tarihindeki herkese açık sürümlerini anlatır; o zamandan beri değişmiş olabilirler.",
	},
	notFound: {
		title: "Bu sayfa bizi geri takip etmiyor",
		text: "Aradığın sayfa yok ya da taşınmış.",
		home: "Ana sayfaya dön",
		blog: "Blogu oku",
	},
	privacy: {
		title: "Gizlilik politikası",
		metaDescription:
			"Unfolks bilgilerini nasıl topluyor, kullanıyor ve koruyor.",
		effective: "Yürürlük tarihi: {date}",
	},
};
