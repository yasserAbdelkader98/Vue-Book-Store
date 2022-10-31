
const BOOKS = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/6/65/ThingsFallApart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart#/media/File:ThingsFallApart.jpg",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958,
      "price": 512
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hans_Christian_Andersen_%281834_painting%29.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836,
      "price": 234
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Dante_Domenico_di_Michelino_Duomo_Florence.jpg/800px-Dante_Domenico_di_Michelino_Duomo_Florence.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315,
      "price": 312
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/British_Museum_Flood_Tablet.jpg/220px-British_Museum_Flood_Tablet.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700,
      "price": 346

    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Job_Scroll.jpg/220px-Job_Scroll.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600,
      "price": 763

    },
    {
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cassim.jpg/220px-Cassim.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200,
      "price": 522

    },
    {
      "author": "Unknown",
      "country": "Iceland",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Njal_saga_-_Skarphedinn.jpg/220px-Njal_saga_-_Skarphedinn.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350,
      "price": 2222

    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813,
      "price": 934

    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Le_P%C3%A8re_Goriot%2C_1er_Volume%2C_1835.png/220px-Le_P%C3%A8re_Goriot%2C_1er_Volume%2C_1835.png",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835,
      "price": 445

    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/9/90/Beckett_Molloy.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952,
      "price": 883

    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Boccaccio_-_Decameron%2C_MCCCCLXXXXII_ad_di_XX_de_giugno_-_3852856_Scan00015.tif/lossy-page1-220px-Boccaccio_-_Decameron%2C_MCCCCLXXXXII_ad_di_XX_de_giugno_-_3852856_Scan00015.tif.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351,
      "price": 837

    },
    {
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/d/d6/Ficciones.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965,
      "price": 987

    },
    {
      "author": "Emily Bront\u00eb",
      "country": "United Kingdom",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg/200px-Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847,
      "price": 900

    },
    {
      "author": "Albert Camus",
      "country": "Algeria, French Empire",
      "imageLink": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)",
      "pages": 185,
      "title": "The Stranger",
      "year": 1942,
      "price": 980

    },
    {
      "author": "Miguel de Cervantes",
      "country": "Spain",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Title_page_first_edition_Don_Quijote.jpg/250px-Title_page_first_edition_Don_Quijote.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Don_Quixote",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "year": 1610,
      "price": 567

    },
    {
      "author": "Geoffrey Chaucer",
      "country": "England",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Canterbury_Tales.png/220px-Canterbury_Tales.png",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
      "pages": 544,
      "title": "The Canterbury Tales",
      "year": 1450,
      "price": 999

    },
    {
      "author": "Anton Chekhov",
      "country": "Russia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Anton_Tschechow_-_%C3%96lskizze_von_Lewitan.jpg/250px-Anton_Tschechow_-_%C3%96lskizze_von_Lewitan.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
      "pages": 194,
      "title": "Stories",
      "year": 1886,
      "price": 122

    },
    {
      "author": "Joseph Conrad",
      "country": "United Kingdom",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nostromo1st.jpg/220px-Nostromo1st.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nostromo",
      "pages": 320,
      "title": "Nostromo",
      "year": 1904,
      "price": 889

    },
    {
      "author": "Charles Dickens",
      "country": "United Kingdom",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Greatexpectations_vol1.jpg/200px-Greatexpectations_vol1.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Great_Expectations",
      "pages": 194,
      "title": "Great Expectations",
      "year": 1861,
      "price": 778

    },
    {
      "author": "Denis Diderot",
      "country": "France",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/DiderotJacquesFatalist01.jpg/220px-DiderotJacquesFatalist01.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist",
      "pages": 596,
      "title": "Jacques the Fatalist",
      "year": 1796,
      "price": 888

    },
    {
      "author": "Alfred D\u00f6blin",
      "country": "Germany",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Doeblin_berlin_alexanderplatz.jpg/220px-Doeblin_berlin_alexanderplatz.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz",
      "pages": 600,
      "title": "Berlin Alexanderplatz",
      "year": 1929,
      "price": 454

    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment",
      "pages": 551,
      "title": "Crime and Punishment",
      "year": 1866,
      "price": 123

    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fyodor_Dostoyevsky_manuscript_and_drawing_06.jpg/220px-Fyodor_Dostoyevsky_manuscript_and_drawing_06.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Idiot",
      "pages": 656,
      "title": "The Idiot",
      "year": 1869,
      "price": 888

    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/The_first_edition_of_Dostoevsky%27s_novel_Demons_Petersburg_1873.JPG/220px-The_first_edition_of_Dostoevsky%27s_novel_Demons_Petersburg_1873.JPG",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)",
      "pages": 768,
      "title": "The Possessed",
      "year": 1872,
      "price": 449

    },
    {
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dostoevsky-Brothers_Karamazov.jpg/220px-Dostoevsky-Brothers_Karamazov.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
      "pages": 824,
      "title": "The Brothers Karamazov",
      "year": 1880
    },
    {
      "author": "George Eliot",
      "country": "United Kingdom",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Middlemarch_1.jpg/220px-Middlemarch_1.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Middlemarch",
      "pages": 800,
      "title": "Middlemarch",
      "year": 1871,
      "price": 2211

    },
    {
      "author": "Ralph Ellison",
      "country": "United States",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg/220px-Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Invisible_Man",
      "pages": 581,
      "title": "Invisible Man",
      "year": 1952,
      "price": 778

    },
    {
      "author": "Euripides",
      "country": "Greece",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Alfons_Mucha_-_Medea.jpg/220px-Alfons_Mucha_-_Medea.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Medea_(play)",
      "pages": 104,
      "title": "Medea",
      "year": -431,
      "price": 912

    },
    {
      "author": "William Faulkner",
      "country": "United States",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Absalom%2C_Absalom%21_%281936_1st_ed_cover%29.jpg/220px-Absalom%2C_Absalom%21_%281936_1st_ed_cover%29.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!",
      "pages": 313,
      "title": "Absalom, Absalom!",
      "year": 1936,
      "price": 990

    },
    {
      "author": "William Faulkner",
      "country": "United States",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Sound_and_the_Fury_%281929_1st_ed_dust_jacket%29.jpg/220px-The_Sound_and_the_Fury_%281929_1st_ed_dust_jacket%29.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury",
      "pages": 326,
      "title": "The Sound and the Fury",
      "year": 1929,
      "price": 999

    },
    {
      "author": "Gustave Flaubert",
      "country": "France",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Madame_Bovary_1857_%28hi-res%29.jpg/220px-Madame_Bovary_1857_%28hi-res%29.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Madame_Bovary",
      "pages": 528,
      "title": "Madame Bovary",
      "year": 1857,
      "price": 223

    },
    {
      "author": "Gustave Flaubert",
      "country": "France",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Education_sentimentale_flaubert.jpg/220px-Education_sentimentale_flaubert.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Sentimental_Education",
      "pages": 606,
      "title": "Sentimental Education",
      "year": 1869,
      "price": 667

    },
    {
      "author": "Federico Garc\u00eda Lorca",
      "country": "Spain",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Romancero_gitano.jpg/220px-Romancero_gitano.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads",
      "pages": 218,
      "title": "Gypsy Ballads",
      "year": 1928,
      "price": 444

    },
    {
      "author": "Gabriel Garc\u00eda M\u00e1rquez",
      "country": "Colombia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg/220px-Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
      "pages": 417,
      "title": "One Hundred Years of Solitude",
      "year": 1967,
      "price": 209

    },
    {
      "author": "Gabriel Garc\u00eda M\u00e1rquez",
      "country": "Colombia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/LoveInTheTimeOfCholera.jpg/220px-LoveInTheTimeOfCholera.jpg",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera",
      "pages": 368,
      "title": "Love in the Time of Cholera",
      "year": 1985,
      "price": 346

    },
    {
      "author": "Johann Wolfgang von Goethe",
      "country": "Saxe-Weimar",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Auerbachs_Keller.JPG/220px-Auerbachs_Keller.JPG",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
      "pages": 158,
      "title": "Faust",
      "year": 1832,
      "price": 778

    },
    {
      "author": "Nikolai Gogol",
      "country": "Russia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Dead_Souls_%28novel%29_Nikolai_Gogol_1842_title_page.jpg/220px-Dead_Souls_%28novel%29_Nikolai_Gogol_1842_title_page.jpg",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Dead_Souls",
      "pages": 432,
      "title": "Dead Souls",
      "year": 1842,
      "price": 990

    },
    {
      "author": "G\u00fcnter Grass",
      "country": "Germany",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Die_Blechtrommel_earliest_edition_german.jpg/220px-Die_Blechtrommel_earliest_edition_german.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Tin_Drum",
      "pages": 600,
      "title": "The Tin Drum",
      "year": 1959,
      "price": 332

    },
    {
      "author": "Jo\u00e3o Guimar\u00e3es Rosa",
      "country": "Brazil",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/0/0d/Grande_sertao.gif",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands",
      "pages": 494,
      "title": "The Devil to Pay in the Backlands",
      "year": 1956,
      "price": 456

    },
    {
      "author": "Knut Hamsun",
      "country": "Norway",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Hunger_first_edition.jpg/220px-Hunger_first_edition.jpg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)",
      "pages": 176,
      "title": "Hunger",
      "year": 1890,
      "price": 333
    },
    {
      "author": "Ernest Hemingway",
      "country": "United States",
      "imageLink": "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
      "pages": 128,
      "title": "The Old Man and the Sea",
      "year": 1952,
      "price": 446
    },
    {
      "author": "Homer",
      "country": "Greece",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Detail._Wooden_board_inscribed_in_ink_with_lines_468-473%2C_Book_I_of_Homer%27s_Iliad._Roman_Egypt._On_display_at_the_British_Museum.jpg/250px-Detail._Wooden_board_inscribed_in_ink_with_lines_468-473%2C_Book_I_of_Homer%27s_Iliad._Roman_Egypt._On_display_at_the_British_Museum.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Iliad",
      "pages": 608,
      "title": "Iliad",
      "year": -735,
      "price": 2516
    },
    {
      "author": "Homer",
      "country": "Greece",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Odyssey-crop.jpg/220px-Odyssey-crop.jpg",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Odyssey",
      "pages": 374,
      "title": "Odyssey",
      "year": -800,
      "price": 566
    },
    {
      "author": "Henrik Ibsen",
      "country": "Norway",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/A_Doll%27s_House.jpeg/220px-A_Doll%27s_House.jpeg",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House",
      "pages": 68,
      "title": "A Doll's House",
      "year": 1879,
      "price": 467
    },
    {
      "author": "James Joyce",
      "country": "Irish Free State",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/JoyceUlysses2.jpg/220px-JoyceUlysses2.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)",
      "pages": 228,
      "title": "Ulysses",
      "year": 1922,
      "price": 987
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kafka_Betrachtung_1912.jpg/199px-Kafka_Betrachtung_1912.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories",
      "pages": 488,
      "title": "Stories",
      "year": 1924,
      "price": 456
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/f/f9/TrialKafka.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Trial",
      "pages": 160,
      "title": "The Trial",
      "year": 1925,
      "price": 987
    },
    {
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "imageLink": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Franz_Kafka_Das_Schloss.jpg/220px-Franz_Kafka_Das_Schloss.jpg",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)",
      "pages": 352,
      "title": "The Castle",
      "year": 1926,
      "price": 736
    }
  ]

let id = 0
BOOKS.forEach(book=>{
  book.id=id
  id++
})
