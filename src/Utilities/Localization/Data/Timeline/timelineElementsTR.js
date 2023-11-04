let timelineElementsTR = [
    {
        title: "Yazılım Geliştirici",
        location: "Bursa, Türkiye",
        description:
            "Şu anda Mert Yazılım ve Elektronik'te Backend yazılım geliştirici olarak çalışıyorum.",
        date: "Mart 2022 - Şu An",
        icon: "work",
        buttonLink: "https://mertyazilim.com.tr/tr/",
        buttonText: "Şirketi görmek için tıklayınız",
    },
    {
        title: "Programcının Blog Uygulaması",
        location: ".Net 5 MVC - C# - .Net Core Identity - Fluent API",
        description:
            "Kullanıcıların kayıt olup giriş yapabildiği, makale ekleyip güncelleyebildiği bir blog uygulaması. Identity sistemi ile kullanıcı bilgileri kayıt ve giriş sırasında kontrol edilir. ",
        buttonText: "Kodu Görmek için tıklayınız",
        buttonLink: "https://github.com/Atakan-droid/ProgrammersBlog_Fluent_API",
        date: "Haziran 2021 -Ekim 2021 ",
        icon: "work",
    },
    {
        title: "Sakarya Üniversitesi",
        location: "Sakarya, Türkiye",
        description:
            "Bilgisayar Mühendisliği - Lisans Derecesi",
        date: "Ekim 2016 - Haziran 2021",
        icon: "school",
    },
    {
        title: "UniApp Mobil Uygulaması",
        location: "React Native - Javascript",
        description:
            "Kullanıcıların üye olabildiği , ilgilendikleri üniversiteleri takip edebildiği ve yorum yapabildiği React Native ile yapılmış bir mobil uygulamadır.",
        buttonText: "Kodu görmek için tıklayınız",
        buttonLink: "https://github.com/Atakan-droid/UniApp_Mobile",
        date: "Nisan 2021- Mayıs 2021",
        icon: "work",
    },
    {
        title: "UniApp Web Uygulaması",
        location: "Angular - Typecript",
        description:
            "Üniversitelerin hesap açıp paylaşım yapabileceği.Kullanıcıların üye olabileceği , ilgilendikleri üniversiteleri takip edebileceği ve yorum yapabileceği Angular Framework kullanılarak yapılmış bir web uygulamasıdır.Yönetici, kullanıcı ve üniversite hesaplarının kendi rolleri bulunmaktadır.Bu roller ,kullanıcıların hangi işlemleri yapıp yapamayacağını denetler.",
        buttonText: "Kodu görmek için tıklayınız",
        buttonLink: "https://github.com/Atakan-droid/uniApp",
        date: "Şubat 2021- Mayıs 2021",
        icon: "work",
    },
    {
        title: "UniApp Web API",
        location: ".Net Core 3.1 - RestAPI- C# - MSSQL - Entity Framework ",
        description:
            "Kullanıcıların ve üniversitelerin kayıt olabileceği bir sistem.Yöneticiler, kullanıcılar ve üniversitelerin kendi rolleri bulunmakta ve bu kontroller istenildiği yerde yapılmaktadır. Üniversiteler kullanıcılara ,en son gelişmeleri aktarabileceği ve kullanıcılar ise ilgilendikleri üniversite hesabını takip edip altına yorum yapabileceği bir arka yüz sistemi. ",
        buttonText: "Kodu görmek için tıklayınız",
        buttonLink: "https://github.com/Atakan-droid/UniAppBackend",
        date: "Şubat 2021- Nisan 2021",
        icon: "work",
    },
    {
        title: " Araba Kiralama Sistemi Web API",
        location: ".Net Core 3.1 - RestAPI- C# - MSSQL - Entity Framework ",
        description:
            "Kullanıcıların kayıt olabildiği , istedikleri arabaları inceleyebildiği ve arabaları kiralayabildiği bir arka yüz sistemi. Kullanıcı bilgileri Fluent Validation ile kontrol edilmektedir.",
        buttonText: "Kodu görmek için tıklayınız",
        buttonLink: "https://github.com/Atakan-droid/CarRentalService-Backend",
        date: "Aralık 2020- Şubat 2021",
        icon: "work",
    },
    {
        title: "ReChefs Mobil Uygulama",
        location: "React Native - Javascript -Firebase",
        description:
            "Yemek tariflerini incelemek ve yeni tarifler eklemek için React Native ile yapılmış bir mobil uygulama. Firebase kullanılarak kullanıcı kayıt , giriş kontrolü yapılmaktadır. Yemek tarifleri Firebase'in Firestore 'un da tutulmaktadır.",
        buttonText: "Kodu görmek için tıklayınız",
        buttonLink: "https://github.com/Atakan-droid/Mobil-App-reChefs",
        date: " Ocak 2020- Şubat 2020",
        icon: "work",
    },
    {
        title: "inHOLD Mobil Uygulaması",
        location: "Java - SQLite",
        description:
            "Kişinin sahibi olduğu eşyaların sayısını ve listesini tutabildiği, java ile geliştirilmiş bir mobil uygulama. Tutulan nesneler kişinin kendi cihazında bulunmaktadır.",
        publishButtonText: "Uygulamayı görmek için tıklayınız",
        publishButtonLink: "https://play.google.com/store/apps/details?id=com.buruqo.inventoryapp",
        buttonText: "Kodu görmek için tıklayınız",
        buttonLink: "https://github.com/Atakan-droid/inHOLD",
        date: "Ekim 2020- Aralık 2020",
        icon: "work",
    },
    {
        title: "Nilüfer Belediyesi",
        location: "Bursa, Türkiye",
        description:
            "Bilgi İşlem Departmanı - Stajyer",
        date: "Ağustos 2020- Eylül 2020",
        icon: "work",
    },
    {
        title: "Halkla İlişkiler ve İletişim Sertifikası",
        location: "İstanbul İşletme Enstitüsü",
        description:
            "",
        date: "Ekim 2019- Ekim 2019",
        icon: "school",
    },
    {
        title: "Temel İş Sağlığı ve Güvenliği Sertifikası",
        location: "İstanbul İşletme Enstitüsü",
        description:
            "",
        date: "Eylül 2019- Ekim 2019",
        icon: "school",
    },
    {
        title: "NETPRO BİLGİSAYAR LTD. ŞTİ",
        location: "Bursa, Türkiye",
        description:
            "Bilgisayar ve Bilişim Sistemleri - Stajyer",
        date: "Haziran 2019- Ağustos 2019",
        icon: "work",
    }
]

export default timelineElementsTR;
