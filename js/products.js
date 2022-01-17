(function() {
  var searchTimer;

  // Define product class
  function Product(
                    name, imgUrl,
                    description, categorie, link,
                    name_en, description_en, link_en,
                    name_es, description_es, link_es,
                    name_ar, description_ar, link_ar,
                    imagesList
                  ) {
    this.name = name || "";
    this.name_en = name_en || this.name;
    this.name_es = name_es || this.name;
    this.name_ar = name_ar || this.name;
    this.imgUrl = imgUrl || "";
    this.description = description || "";
    this.description_en = description_en || this.description;
    this.description_es = description_es || this.description;
    this.description_ar = description_ar || this.description;
    this.categorie = categorie || "";
    this.link = link || "";
    this.link_en = link_en || this.link;
    this.link_es = link_es || this.link;
    this.link_ar = link_ar || this.link;
    this.images = [].concat(this.imgUrl, imagesList) || [this.imgUrl] ;
  }
  Product.prototype.getLowerCaseInfos = function() {
    return this.name.toLowerCase() + " " + this.description.toLowerCase() +
           this.name_en.toLowerCase() + " " + this.description_en.toLowerCase() +
           this.name_es.toLowerCase() + " " + this.description_es.toLowerCase() +
           this.name_ar.toLowerCase() + " " + this.description_ar.toLowerCase();
  }
  Product.prototype.getCategories = function() {
    return this.categories;
  }

  var productsArray = [
    new Product(
          "Palette de manutention",
          "img/produits/pallette.jpg",
          "Ces palettes plastique des grande qualité présente de nombreux avantages en terme de fiablitité et rentablitité",
          "Palettes de manutention",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24991124_1506643079383086_5104554020876970522_n.jpg?oh=b21353862a01a119736b73e98d928d1a&oe=5AD00010",
          /*English NAME, Description, Category name, link*/
          "Handling pallete",
          "These high quality pallettes presents many advantages",
          "https://google.dz/",
          /*Spanish NAME, Description, Category name, link*/
          "Handling pallete",
          "These high quality pallettes presents many advantages",
          "https://google.dz/",
          /*Arabic NAME, Description, Category name, link*/
          "Handling pallete",
          "These high quality pallettes presents many advantages",
          "https://google.dz/",
          /*Array of images*/
          [],

    ),
    new Product(
          "Mannequins",
          "img/produits/manequin6.jpg",
          "Mannequins Description",
          "Mannequins",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24991124_1506643079383086_5104554020876970522_n.jpg?oh=b21353862a01a119736b73e98d928d1a&oe=5AD00010",
          /*English NAME, Description, Category name, link*/
          "Mannequins",
          "Mannequins Description",
          "https://google.dz/",
          /*Spanish NAME, Description, Category name, link*/
          "Maniquíes",
          "Mannequins Description",
          "https://google.dz/",
          /*Arabic NAME, Description, Category name, link*/
          "تماثيل عرض الملابس",
          "Mannequins Description",
          "https://google.dz/",
          /*Array of images*/
          [
            "img/produits/manequin1.jpg",
            "img/produits/manequin2.jpg",
            "img/produits/manequin3.jpg",
            "img/produits/manequin4.jpg",
            "img/produits/manequin5.jpg",
          ],

    ),
    new Product(
          "Jumbo Box",
          "img/produits/jumbo-box.jpg",
          "Jumbo Box",
          "Caisses, palettes et Jumbo Box",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*English NAME, Description, Category name, link*/
          "Jumbo Box",
          "Jumbo Box",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Spanish NAME, Description, Category name, link*/
          "Jumbo Box",
          "Jumbo Box",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Arabic NAME, Description, Category name, link*/
          "Jumbo Box",
          "Jumbo Box",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Array of images*/
          [
            "img/produits/JumboBox1.jpg",
          ],

    ),
    new Product(
          "Caisses de manutention",
          "img/produits/cad.jpg",
          "Jumbo Box",
          "Caisses, palettes et Jumbo Box",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*English NAME, Description, Category name, link*/
          "Caisses de manutention",
          "Caisses de manutention",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Spanish NAME, Description, Category name, link*/
          "Caisses de manutention",
          "Caisses de manutention",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Arabic NAME, Description, Category name, link*/
          "Caisses de manutention",
          "Caisses de manutention",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Array of images*/
          [
            "img/produits/cad1.jpg",
            "img/produits/cad2.jpg",
            "img/produits/cad3.jpg",
            "img/produits/cad4.jpg",
          ],

    ),
    new Product(
          "Citernes",
          "img/produits/citerne.jpg",
          "Fûts et seaux",
          "Fûts et seaux Fûts et seaux Fûts et seaux Fûts et seaux",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*English NAME, Description, Category name, link*/
          "Tank",
          "Fûts et seaux Fûts et seaux Fûts et seaux Fûts et seaux",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Spanish NAME, Description, Category name, link*/
          "Cisterna",
          "Fûts et seaux Fûts et seaux Fûts et seaux Fûts et seaux",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Arabic NAME, Description, Category name, link*/
          "خزان",
          "خزانات مياه مختلفة الأحجام",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Array of images*/
          [],

    ),
    new Product(
          "Fûts d'eau",
          "img/produits/fuits.jpg",
          "Fûts et seaux",
          "Fûts et seaux Fûts et seaux Fûts et seaux Fûts et seaux",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*English NAME, Description, Category name, link*/
          "Barrels",
          "Fûts et seaux Fûts et seaux Fûts et seaux Fûts et seaux",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Spanish NAME, Description, Category name, link*/
          "Barriles",
          "Fûts et seaux Fûts et seaux Fûts et seaux Fûts et seaux",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Arabic NAME, Description, Category name, link*/
          "براميل ",
          "البراميل والدلاء",
          "https://scontent.fmad3-8.fna.fbcdn.net/v/t1.0-9/24899764_1506643009383093_8997592888558044414_n.jpg?oh=75cd1b09970b7a8ac1a9e16b6dd17562&oe=5AB9BE27",
          /*Array of images*/
          [],

    ),
    new Product(
          "Tubes PVC blancs",
          "img/produits/tube_pvc.jpg",
          "Tubes made in DZ, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veculpa qui officia deserunt mollit anim id est laborum.",
          "Tubes PVC",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*English NAME, Description, Category name, link*/
          "PVC pipes",
          "PVC pipes Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Spanish NAME, Description, Category name, link*/
          "PVC pipes",
          "PVC pipes Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Arabic NAME, Description, Category name, link*/
          "PVC pipes",
          "PVC pipes Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Array of images*/
          [],
    ),
    new Product(
          "Multi Couches",
          "img/produits/multi-couche.jpg",
          "Tubes made in DZ, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veculpa qui officia deserunt mollit anim id est laborum.",
          "Tubes PVC",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*English NAME, Description, Category name, link*/
          "Multi Couches",
          "PVC pipes Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Spanish NAME, Description, Category name, link*/
          "Multi Couches",
          "PVC pipes Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Arabic NAME, Description, Category name, link*/
          "Multi Couches",
          "PVC pipes Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Array of images*/
          [],
    ),
    new Product(
          "Pots de fleurs",
          "img/produits/pots_couleurs.jpg",
          "Pots de fleurs Description",
          "Pots de fleurs",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*English NAME, Description, Category name, link*/
          "Flower pots",
          "PVC pipes Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Spanish NAME, Description, Category name, link*/
          "Macetas",
          "Description in spanish goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Arabic NAME, Description, Category name, link*/
          "أواني للزهور",
          "أواني للزهور بألوان و أحجام مختلفة",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Array of images*/
          [
            "img/produits/pfch.jpg",
          ],

    ),
    new Product(
          "Chaises",
          "img/produits/chaise.jpg",
          "Chaise Description",
          "Chaises et tables",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*English NAME, Description, Category name, link*/
          "Chairs",
          "PVC pipes Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Spanish NAME, Description, Category name, link*/
          "Sillas",
          "Description in spanish goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Arabic NAME, Description, Category name, link*/
          "مقاعد",
          "",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Array of images*/
          [
            "img/produits/CPL.jpg",
          ],

    ),
    new Product(
          "Tables",
          "img/produits/Table1.png",
          "Chaise Description",
          "Chaises et tables",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*English NAME, Description, Category name, link*/
          "Tables",
          "Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Spanish NAME, Description, Category name, link*/
          "SPANISH NAME",
          "Description in spanish goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Arabic NAME, Description, Category name, link*/
          "طاولات",
          "",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Array of images*/
          [
            "img/produits/bistro.jpg",
          ],

    ),
    new Product(
          "Tables",
          "img/produits/table7.png",
          "Chaise Description",
          "Chaises et tables",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*English NAME, Description, Category name, link*/
          "Tables",
          "Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Spanish NAME, Description, Category name, link*/
          "SPANISH NAME",
          "Description in spanish goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Arabic NAME, Description, Category name, link*/
          "طاولات",
          "",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Array of images*/
          [],

    ),
    new Product(
          "Sallons",
          "img/produits/salon7p.jpg",
          "Sallons Description",
          "Chaises et tables",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*English NAME, Description, Category name, link*/
          "Sallons",
          "Description in english goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Spanish NAME, Description, Category name, link*/
          "Sallon",
          "Description in spanish goes here",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Arabic NAME, Description, Category name, link*/
          "صالونات",
          "",
          "https://4.imimg.com/data4/NY/IS/MY-9018218/pvc-tube-for-civil-industry-250x250.jpg",
          /*Array of images*/
          [
            "img/produits/salon2p.jpg",
          ],

    ),
    new Product(
          "Caisse de rangement",
          "img/produits/cr.jpg",
          "Item made in Oran, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veculpa qui officia deserunt mollit anim id est laborum.",
          "Caisses, palettes et Jumbo Box",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*English NAME, Description, Category name, link*/
          "Crates",
          "Fish crates Description in English",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Spanish NAME, Description, Category name, link*/
          "Crates",
          "Fish crates Description in English",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Arabic NAME, Description, Category name, link*/
          "Crates",
          "Fish crates Description in English",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Array of images*/
          [],

    ),
    new Product(
          "Caisse de poissons",
          "img/produits/bac-a-poisson.jpg",
          "Item made in Oran, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veculpa qui officia deserunt mollit anim id est laborum.",
          "Caisses de poissons",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*English NAME, Description, Category name, link*/
          "Fish crates",
          "Fish crates Description in English",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Spanish NAME, Description, Category name, link*/
          "Fish crates",
          "Fish crates Description in English",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Arabic NAME, Description, Category name, link*/
          "Fish crates",
          "Fish crates Description in English",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Array of images*/
          [],

    ),
    new Product(
          "Conteneurs roulants 4 roues",
          "img/produits/conteneur.jpg",
          "Description ...",
          "Conteneurs",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*English NAME, Description, Category name, link*/
          "4 Wheeled Containers",
          "Description ...",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Spanish NAME, Description, Category name, link*/
          "4 contenedores de ruedas",
          "Spanish Description",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Arabic NAME, Description, Category name, link*/
          "حاويات بأربع عجلات",
          "Description ...",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Array of images*/
          [],

    ),
    new Product(
          "Conteneurs roulants 4 roues",
          "img/produits/conteneurs_c.jpg",
          "Description ...",
          "Conteneurs",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*English NAME, Description, Category name, link*/
          "4 Wheeled Containers",
          "Description ...",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Spanish NAME, Description, Category name, link*/
          "4 contenedores de ruedas",
          "Spanish Description",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Arabic NAME, Description, Category name, link*/
          "حاويات بأربع عجلات",
          "Description ...",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Array of images*/
          [],
    ),
    new Product(
          "Conteneurs 2 roues",
          "img/produits/bac2r.jpg",
          "Description ...",
          "Conteneurs",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*English NAME, Description, Category name, link*/
          "2 Wheeled Containers",
          "Description ...",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Spanish NAME, Description, Category name, link*/
          "4 contenedores de ruedas",
          "Spanish Description",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Arabic NAME, Description, Category name, link*/
          " عجلات بعجلتين",
          "Description ...",
          "http://www.cnp.tn/img_prd/pic_prd05092011124606.png",
          /*Array of images*/
          [],
    ),
  ]

  var categoriesArray = [
    {
      name: "Conteneurs",
      name_en: "Containers",
      name_es: "Contenedores",
      name_ar: "الحاويات",
      checked: true
    },
    {
      name: "Chaises et tables",
      name_en: "Chairs and tables",
      name_es: "Sillas y mesas",
      name_ar: "الكراسي والطاولات",
      checked: true
    },
    {
      name: "Caisses, palettes et Jumbo Box",
      name_en: "Crates, pallets and Jumbo Box",
      name_es: "Cajas, palets y caja Jumbo",
      name_ar: "الصناديق والحاويات وJumbo Box ",
      checked: true
    },
    {
      name: "Tubes PVC",
      name_en: "PVC pipes",
      name_es: "Tubos de PVC",
      name_ar: "الأنابيب البلاستيكية",
      checked: true
    },
    {
      name: "Caisses de poissons",
      name_en: "Fish crates",
      name_es: "Cajas de pescado",
      name_ar: "صناديق الأسماك",
      checked: true
    },
    {
      name: "Palettes de manutention",
      name_en: "Handling pallets",
      name_es: "Paletas de manejo",
      name_ar: "المنصات الداعمة",
      checked: true
    },
    {
      name: "Caisses agricoles",
      name_en: "Agricultural crates",
      name_es: "Cajas agrícolas",
      name_ar: "الصناديق الفلاحية",
      checked: true
    },
    {
      name: "Pots de fleurs",
      name_en: "Flower pots",
      name_es: "Macetas",
      name_ar: "أواني الزهور",
      checked: true
    },
    {
      name: "Fûts et seaux",
      name_en: "Barrels and buckets",
      name_es: "Barriles y cubos",
      name_ar: "البراميل والدلاء",
      checked: true
    },
    {
      name: "Emballage",
      name_en: "Plastic packaging",
      name_es: "Embalaje",
      name_ar: "التعبئة والتغليف البلاستيكي",
      checked: true
    },
    {
      name: "Mannequins",
      name_en: "Mannequins",
      name_es: "Maniquíes",
      name_ar: "تماثيل عرض الملابس",
      checked: true
    },
  ]

  var app = new Vue({
    el: "#productsApp",
    data:{
      categories: categoriesArray,
      searchQuery: "",
      products: productsArray,
      product: new Product()
    },
    watch: {
      searchQuery: function(){
        /*
        * Wait for 2s while the user finish typing then get the results
        */
        var _this = this;
        if (_this.searchQuery.length > 0) {
          searchTimer = setTimeout(function(){
            clearTimeout(searchTimer);
            var tempArray = _this.products.filter(function(prod){
              return prod.getLowerCaseInfos().search(_this.searchQuery.toLowerCase()) > -1;
            });
            _this.products = tempArray;
          }, 2500);
        } else {
          _this.products = productsArray;
        }
      },
    },
    methods: {
      fetchByCategories: function() {
        var _this = this;
        var tempCategoriesArray = [];
        _this.categories.map(function(cat){
          if (cat.checked) {
            tempCategoriesArray.push(cat.name);
          }
        });

        _this.products = productsArray.filter(function(p){
          return tempCategoriesArray.indexOf(p.categorie) > -1;
        });

      },
      showDetails: function(elm){
        this.product = elm;
        $('#myModal').modal('show');
      },
      loadImgFromThumbnail: function(index) {
        $('#product-image').attr('src', index);
      },
    }
  });
}());
