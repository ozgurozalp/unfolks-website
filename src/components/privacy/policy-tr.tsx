import { siteConfig } from "@/lib/site";

/** The Turkish privacy policy body. Keep it in step with `policy-en.tsx`. */
export function PolicyTr() {
	return (
		<>
			<p>
				Bu Gizlilik Politikası, {siteConfig.name} Chrome uzantısını ve bu web
				sitesini kullandığında {siteConfig.name} (&ldquo;biz&rdquo;) tarafından
				hangi bilgilerin nasıl işlendiğini açıklar.
			</p>

			<h2>1. Uzantının okuduğu bilgiler</h2>
			<p>
				Uzantı, Instagram&apos;a giriş yapmışken Instagram&apos;ın sana zaten
				gösterdiği bilgileri okur:
			</p>
			<ul>
				<li>Instagram adın, kullanıcı adın ve profil fotoğrafının adresi</li>
				<li>
					Takip ettiğin hesaplar: adları, kullanıcı adları, fotoğrafları ve seni
					geri takip edip etmedikleri
				</li>
				<li>
					Ayarların: sıralama ve filtre seçimlerin, tarama ve takip bırakma
					hızı, listeden gizlediğin hesaplar ve son taramanın zamanı
				</li>
				<li>Yarıda kalan bir taramanın ilerlemesi, devam edebilmen için</li>
				<li>
					Veri dosyası seçeneğini kullanırsan: Instagram veri indirmendeki
					takipçi ve takip dosyaları; bunlar panelde okunur ve saklanmaz
				</li>
			</ul>
			<p>
				Uzantı Instagram şifreni asla istemez. Tarayıcında zaten açık olan
				oturumu kullanır.
			</p>

			<h2>2. Nerede saklanır</h2>
			<p>
				Tarama sonuçları, profil bilgilerin, gizlediğin hesaplar ve ayarların
				bilgisayarında, uzantının yerel depolamasında kalır. Yarıda kalan bir
				taramanın ilerlemesi en fazla 24 saat tutulur, sonra silinir. Instagram
				veri indirmendeki dosyalar panelde karşılaştırılır; asla yüklenmez ya da
				kaydedilmez. Hiçbir şey başka cihazlarla eşitlenmez ve Instagram
				verilerini alan bir sunucumuz yoktur.
			</p>

			<h2>3. Nasıl kullanılır</h2>
			<ul>
				<li>Seni geri takip etmeyen hesapları göstermek için</li>
				<li>Adını ve fotoğrafını panelde göstermek için</li>
				<li>
					Seçtiğin hesapların takibini, belirlediğin tempoda bırakmak için
				</li>
				<li>
					Instagram istekleri sınırladığında tekrar denemeden önce beklemek ve
					yarıda kalan bir taramaya devam etmek için
				</li>
			</ul>

			<h2>4. Hata raporları</h2>
			<p>
				Uzantı bir hatayla karşılaşırsa, sorunun düzeltilebilmesi için{" "}
				<a
					href="https://sentry.io/privacy/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Sentry
				</a>
				&apos;ye (Functional Software, Inc.) bir hata raporu gönderilebilir.
				Rapor; hata mesajını, tarayıcı sürümünü ve uzantı sürümünü içerebilir.
				Reklam için kullanılmaz. Uzantının Instagram dışında herhangi bir yere
				gönderdiği tek bilgi budur.
			</p>

			<h2>5. Bilgilerinin paylaşılması</h2>
			<p>
				Verilerini satmayız, reklam için paylaşmayız ve uzantının tek amacı
				dışında hiçbir amaçla kullanmayız.
			</p>

			<h2>6. Bu web sitesi</h2>
			<p>
				Bu web sitesi, ziyaretleri saymak ve hangi sayfaların okunduğunu görmek
				için Google Tag Manager üzerinden yüklenen Google Analytics&apos;i
				kullanır. Google Analytics bunun için kendi çerezlerini (ör.{" "}
				<code>_ga</code>) bırakır. Ayrıntılar için{" "}
				<a
					href="https://policies.google.com/technologies/partner-sites?hl=tr"
					target="_blank"
					rel="noopener noreferrer"
				>
					Google&apos;ın, hizmetlerini kullanan sitelerden gelen verileri nasıl
					kullandığına
				</a>{" "}
				bakabilirsin.
			</p>
			<p>
				Site ayrıca, bir tanıtım kartını kapattığını hatırlamak için tek bir
				işlevsel çerez (<code>rps-promo-closed</code>) bırakır. Bir gün sonra
				silinir ve kişisel bilgi içermez.
			</p>

			<h2>7. Seçeneklerin</h2>
			<ul>
				<li>
					Uzantının sakladığı verileri, uzantıyı kaldırarak ya da tarayıcı
					ayarlarından verilerini temizleyerek silebilirsin.
				</li>
				<li>
					Uzantıyı kullanmayı istediğin an bırakabilir ya da kaldırabilirsin.
				</li>
				<li>
					Bu web sitesinin çerezlerini tarayıcı ayarlarından engelleyebilir ya
					da silebilirsin.
				</li>
			</ul>

			<h2>8. Instagram</h2>
			<p>
				Instagram, Meta tarafından işletilir. {siteConfig.name}&apos;un Meta ile
				bir bağlantısı yoktur. Instagram hesabın için Instagram&apos;ın
				koşulları ve gizlilik politikası geçerlidir.
			</p>

			<h2>9. Bu politikadaki değişiklikler</h2>
			<p>
				Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncellediğimizde
				yukarıdaki yürürlük tarihini değiştiririz.
			</p>

			<h2>10. Bize ulaş</h2>
			<p>Bu Gizlilik Politikası hakkında sorun varsa bize ulaşabilirsin:</p>
			<ul>
				<li>
					<strong>E-posta:</strong>{" "}
					<a href={`mailto:${siteConfig.author.email}`}>
						{siteConfig.author.email}
					</a>
				</li>
				<li>
					<strong>Web sitesi:</strong>{" "}
					<a
						href={siteConfig.author.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{siteConfig.author.url}
					</a>
				</li>
			</ul>
		</>
	);
}
