# https://www.netflix.com/ sitesinin frontend birebir yeniden tasarımı
# Sitenin demosu için için https://mfakyol-netflix-clone.netlify.app/ adresini siyaret edebilirsiniz.
## BS435 Web Programlama 1 Dersi Vize Ödevi
### Erciyes Üniversitesi Bilgisayar Mühendisliği Bölümü
#### Tasarlayan: Muhammed Fatih AKYOL Ögrenci No: 1030516343 Öğretim Üyesi: Dr. Fehim KÖYLÜ
## Proje aynı repoda bulunun https://github.com/mfakyol/react-redux-starter-kit adresindeki react projelerine başlarken kulladığım projenin üzerine kurulmuştur. Bu yüzden commit tarihleri ödevin verildiği tarihlerden önceki tarihlerde gözükebilir.
## Projeyi çalıştırmak için klasörün ana dizinine gelip sırasıyla aşağıdaki komutların çalıştırılması gerekmektedir.
#### npm install  
#### npm start 

## Diğer bir çalıştırma şekli iste bir web servis sağlayıcıya build klasörünü yükleyip içindeki index.html dosyasını çağırmaktır. index.html dosyasını normal çalıştırdığınızda karşınıza boş html sayfası çıkacaktır. Ayrıca projenin demosu yukardaki linkte verilmiştir görüntülemek için linki kullanabilirsinz.

#### not1: https://www.netflix.com/ font-family olarak public olmayan netflix-sans adlı fontu kullanıyor. Bu font public olmadığı için bu fonta benzeyen open-sans fontu kullanılmıştır. Buna rağmen font farklılıklarından dolayı asıl site ve klon site arasında farklılıklar bulunmaktadır.

#### not2: Sitede 2 farklı dil desteği bulunmaktadır. Farklı dilleri adresin sonuna /tr veya /tr-en ekleyerek ya da sayfanın en altında bulunan dil seçim kutusu yardımıyla görüntülüyebilirsiniz. 

#### not3: Site tamamen SPA(Single Page Application) olarak tasarlanmıştır yani sayfalar arasında geçişti sayfa yeniden yüklenmiyordur buna diller arasındaki geçişlerde dahil. Ama Asıl sitede diller arasındaki geçiş sırasında sayfa yeniden yükleniyor. Klon projede buna ayak uydurması için Proje SPA olduğu halde Sayfa yeniden yüklenerek Asılına benzer olarak tasarlanmıştır.

#### not4: Asıl sayfa ile klon arasındaki arkaplan resimleri arasında farklılık gözlenebilir. Asıl sayfa belli aralıklarla arka planını güncellemektedir.


# Sitenin kırılma noktaları
1. 1450px  
2. 950px  
3. 740px  
4. 550px  

# Dosyalar
1. build: projenin çıktısı
2. src: projenin geliştirme ortamı
3. public: projenin bağlanacagı html sayfası ve sayfanın iconun bulunduğu dosya
4. `public/_redirects`: netlify adlı sideye demosunun yüklenebilmesi için gereken ayar dosyası
5. diğer dosyalar: git ve node ortamına ait dosyalar 

# Kullanılan Araçlar
1. Html
2. Css
3. Javascript
4. React
4. React Router Dom
5. React Scripts (Scoped css için)


# Kullanılan Yazılımlar
1. VsCode
2. https://www.netlify.com (Ödevin demosu için.)

# Kullanılan Yöntemler
1. Responsive Tasarım

