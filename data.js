// Game content for RELIQUARY: two modes, shared city pool.

const CITIES = {
  rome: {
    name: "Rome, Italy",
    flag: "🇮🇹",
    flavor:
      "The Eternal City. Campaniles and marble ruins crowd the seven hills; the Tiber loops past them all.",
    witnesses: {
      catholic: [
        "a Swiss Guard at the Bronze Doors",
        "a nun selling rosaries by the colonnade",
        "a taxi driver idling near the Pantheon",
      ],
      secular: [
        "a guide at the Colosseum",
        "a gelato vendor in Piazza Navona",
        "a taxi driver idling near the Pantheon",
      ],
    },
    hints: {
      catholic: [
        "They said they'd kneel at the tomb of the fisherman apostle — Peter himself.",
        "They'd booked tickets to a Wednesday papal audience.",
        "They spoke of seven hills, one river, and the oldest see in Western Christendom.",
        "They mentioned Michelangelo's Pietà, just inside the basilica on the right.",
      ],
      secular: [
        "They were flying to the capital that sits on seven hills along the Tiber.",
        "They asked about the Colosseum and the morning light on the Forum.",
        "They said they'd throw a coin into the Trevi Fountain.",
        "They wanted the city whose empire once stretched from Britain to the Euphrates.",
      ],
    },
  },
  assisi: {
    name: "Assisi, Italy",
    flag: "🇮🇹",
    flavor:
      "Pink limestone walls glow above the Umbrian plain. A small hill town with a very large soul.",
    witnesses: {
      catholic: [
        "a Franciscan friar in a brown habit",
        "a tour guide at the Basilica",
        "a shopkeeper selling olive-wood carvings",
      ],
      secular: [
        "a tour guide at the Basilica",
        "a wine merchant from the Umbrian hills",
        "a shopkeeper selling olive-wood carvings",
      ],
    },
    hints: {
      catholic: [
        "They muttered about the poverello — the little poor man whose rope belt has three knots.",
        "They were obsessed with the shrine of Carlo Acutis, the millennial saint canonized in 2025.",
        "They asked for the basilica with Giotto frescoes on an Umbrian hilltop.",
        "They mentioned a saint who famously preached to the birds.",
      ],
      secular: [
        "They were going to a medieval hill town in Umbria, central Italy.",
        "They asked after the Giotto fresco cycle — early Italian Renaissance painting.",
        "They wanted the pink-stone town you reach by climbing above the Umbrian plain.",
        "They said they'd sleep in a converted monastery with a view over the valley.",
      ],
    },
  },
  santiago: {
    name: "Santiago de Compostela, Spain",
    flag: "🇪🇸",
    flavor:
      "The endpoint of the Camino. Pilgrims with scallop shells crowd the Praza do Obradoiro.",
    witnesses: {
      catholic: [
        "a pilgrim with a wooden staff",
        "a Botafumeiro attendant",
        "an empanada vendor in Plaza de Quintana",
      ],
      secular: [
        "a hiker finishing the Camino",
        "a tapas bar owner off the Praza",
        "an empanada vendor in Plaza de Quintana",
      ],
    },
    hints: {
      catholic: [
        "They said they'd earn a Compostela — the certificate for walking the last hundred kilometres.",
        "They asked after the cathedral of the apostle whose body was borne by boat to Galicia.",
        "They were flying to the northwest corner of Spain, on the Atlantic.",
        "They spoke of the scallop shell as a badge of pilgrimage.",
      ],
      secular: [
        "They were headed to Galicia, the rainy northwest corner of Spain.",
        "They wanted the end point of a 1,000-year-old hiking route.",
        "They said they'd eat pulpo a la gallega and drink Albariño.",
        "They flew to a UNESCO-listed old town of granite arcades.",
      ],
    },
  },
  lisbon: {
    name: "Lisbon, Portugal",
    flag: "🇵🇹",
    flavor:
      "Azulejo tiles shimmer in pastel light. Tram 28 clatters past the Alfama's narrow streets.",
    witnesses: {
      catholic: [
        "a sailor at the Belém docks",
        "a pastel de nata baker",
        "a busker playing fado",
      ],
      secular: [
        "a sailor at the Belém docks",
        "a pastel de nata baker",
        "a busker playing fado",
      ],
    },
    hints: {
      catholic: [
        "They were headed to the Portuguese capital on the Tagus estuary.",
        "They wanted the birthplace of the saint most call 'of Padua' — though he was born elsewhere.",
        "They mentioned the Belém Tower and the Jerónimos Monastery.",
        "They asked about the patron saint of lost things, whose feast is June 13.",
      ],
      secular: [
        "They were flying to the Portuguese capital, mouth of the Tagus.",
        "They asked about tram 28 through the Alfama and the views from Castelo de São Jorge.",
        "They wanted the departure point of Vasco da Gama's 1497 voyage.",
        "They mentioned the 1755 earthquake and the rebuilt Baixa grid.",
      ],
    },
  },
  fatima: {
    name: "Fátima, Portugal",
    flag: "🇵🇹",
    flavor:
      "The Cova da Iria opens wide before a gleaming basilica. A million candles flicker at night.",
    witnesses: {
      catholic: [
        "a Carmelite sister selling candles",
        "a pilgrim from Brazil",
        "a janitor at the Chapel of the Apparitions",
      ],
      secular: [
        "a candle-shop owner by the esplanade",
        "a pilgrim from Brazil",
        "a bus driver on the Lisbon-Porto route",
      ],
    },
    hints: {
      catholic: [
        "They wanted the Portuguese town where three shepherd children saw the Lady in 1917.",
        "They spoke of Lúcia, Francisco, and Jacinta by name.",
        "They asked about the Basilica of the Most Holy Trinity, consecrated in 2007.",
        "They mentioned a town whose name comes from a Moorish princess.",
      ],
      secular: [
        "They were going to a small central-Portuguese town 140 km north of Lisbon.",
        "They mentioned a town whose name traces back to a Moorish-era legend.",
        "They were riding the Lisbon–Porto bus, getting off halfway.",
        "They said they'd stay in a pilgrim hostel for a night and move on.",
      ],
    },
  },
  krakow: {
    name: "Kraków, Poland",
    flag: "🇵🇱",
    flavor:
      "Wawel Castle looms above the Vistula. A hejnał bugle call echoes over the Market Square on the hour.",
    witnesses: {
      catholic: [
        "a docent at the Divine Mercy Shrine",
        "a pierogi vendor in Kazimierz",
        "a trumpeter at St. Mary's Basilica",
      ],
      secular: [
        "a docent at Wawel Castle",
        "a pierogi vendor in Kazimierz",
        "a trumpeter at St. Mary's Basilica",
      ],
    },
    hints: {
      catholic: [
        "They were flying to the Polish city of Wawel and the dragon legend.",
        "They mentioned St. Faustina Kowalska and the Divine Mercy devotion.",
        "They wanted the region of Karol Wojtyła — the future John Paul II — born nearby in Wadowice.",
        "They asked about a bugle call cut short in memory of a Mongol arrow.",
      ],
      secular: [
        "They were headed to Poland's former royal capital on the Vistula.",
        "They asked about the restored Jewish quarter of Kazimierz.",
        "They mentioned Auschwitz-Birkenau, an hour west by bus.",
        "They wanted the hourly bugle call from St. Mary's tower — cut short mid-note.",
      ],
    },
  },
  lourdes: {
    name: "Lourdes, France",
    flag: "🇫🇷",
    flavor:
      "The Gave de Pau rushes past the grotto. The Pyrenees rise white and silent beyond.",
    witnesses: {
      catholic: [
        "a Hospitalité volunteer in a blue vest",
        "a bottled-water hawker",
        "a gendarme at the Domain",
      ],
      secular: [
        "a hiker headed for the Pyrenees",
        "a small-hotel concierge by the station",
        "a gendarme by the Gave river",
      ],
    },
    hints: {
      catholic: [
        "They wanted the French town where Bernadette Soubirous saw the Lady eighteen times in 1858.",
        "They packed empty bottles — they meant to fill them at a miraculous spring.",
        "They were headed to the Pyrenean foothills near the Spanish border.",
        "They asked about the feast of the Immaculate Conception on December 8.",
      ],
      secular: [
        "They were going to a small French town in the Pyrenean foothills.",
        "They were taking a TGV-to-regional-train transfer via Toulouse.",
        "They asked about the nearest ski resorts across the border.",
        "They wanted a town famous for its Gave river gorge and karst caves.",
      ],
    },
  },
  mexico_city: {
    name: "Mexico City, Mexico",
    flag: "🇲🇽",
    flavor:
      "A megacity in a high valley, ringed by volcanoes. Aztec ruins meet glass towers.",
    witnesses: {
      catholic: [
        "a mariachi on break",
        "a street vendor selling tamales",
        "a basilica docent",
      ],
      secular: [
        "a mariachi on break",
        "a street vendor selling tamales",
        "a guide at the Templo Mayor",
      ],
    },
    hints: {
      catholic: [
        "They were flying to the Americas' largest Marian shrine, on Tepeyac hill.",
        "They spoke of Juan Diego's tilma and the miraculous image imprinted in 1531.",
        "They wanted the megacity that is the capital of Mexico.",
        "They mentioned roses blooming in December — Castilian roses on a frozen hill.",
      ],
      secular: [
        "They were heading to a megacity of 22 million in a high valley.",
        "They mentioned the Zócalo, where Aztec Tenochtitlán once stood.",
        "They wanted the Templo Mayor ruins and the Anthropology Museum's Sun Stone.",
        "They asked about the Frida Kahlo blue house in Coyoacán.",
      ],
    },
  },
  manila: {
    name: "Manila, Philippines",
    flag: "🇵🇭",
    flavor:
      "Intramuros' stone walls rise above the Pasig. Jeepneys honk past Spanish-era baroque churches.",
    witnesses: {
      catholic: [
        "a jeepney driver",
        "a sacristan at San Agustín Church",
        "a balut vendor outside the cathedral",
      ],
      secular: [
        "a jeepney driver",
        "a guide at Fort Santiago",
        "a balut vendor near Rizal Park",
      ],
    },
    hints: {
      catholic: [
        "They were bound for the cradle of Asian Catholicism — where Magellan planted a cross in 1521.",
        "They mentioned the Santo Niño and the walled quarter called Intramuros.",
        "They were flying to the capital of the Philippines on Manila Bay.",
        "They asked after the only Christian-majority country in Southeast Asia.",
      ],
      secular: [
        "They were flying to the capital of the Philippines on Manila Bay.",
        "They mentioned the walled district of Intramuros and the ruins of Fort Santiago.",
        "They asked about José Rizal's monument in the park named for him.",
        "They wanted a jeepney ride down EDSA in rush hour — 'for the experience'.",
      ],
    },
  },
  jerusalem: {
    name: "Jerusalem",
    flag: "🇮🇱",
    flavor:
      "Stone walls the color of honey. Church bells, muezzin calls, and shofar blasts mingle at dusk.",
    witnesses: {
      catholic: [
        "a Franciscan Custodian of the Holy Land",
        "a shopkeeper on the Via Dolorosa",
        "an Israeli border officer",
      ],
      secular: [
        "an archaeologist working the Ophel",
        "a shopkeeper in the Old City souk",
        "an Israeli border officer",
      ],
    },
    hints: {
      catholic: [
        "They went to the Holy City claimed by three Abrahamic faiths.",
        "They meant to retrace the fourteen Stations of the Cross.",
        "They were flying to the city with the Church of the Holy Sepulchre on Calvary.",
        "They mentioned the Garden of Gethsemane at the foot of the Mount of Olives.",
      ],
      secular: [
        "They were flying to a walled Old City sacred to three Abrahamic faiths.",
        "They asked after the Western Wall and the Dome of the Rock.",
        "They wanted to walk the Old City's four quarters in a single afternoon.",
        "They mentioned the Israel Museum and the Dead Sea Scrolls on display.",
      ],
    },
  },
  dublin: {
    name: "Dublin, Ireland",
    flag: "🇮🇪",
    flavor:
      "The Liffey bisects the city. Georgian doors, black stout, and bells from Christ Church ring the hours.",
    witnesses: {
      catholic: [
        "a porter at Trinity College",
        "a priest at St. Patrick's Cathedral",
        "a Guinness tour guide",
      ],
      secular: [
        "a porter at Trinity College",
        "a bartender on Grafton Street",
        "a Guinness tour guide",
      ],
    },
    hints: {
      catholic: [
        "They were bound for Ireland's capital on the river Liffey.",
        "They mentioned the Book of Kells in the Long Room.",
        "They talked about the March 17 feast of Ireland's apostle — the one with the shamrock.",
        "They said they'd drink a pint 'on the Black Stuff's home turf.'",
      ],
      secular: [
        "They were flying to the Irish capital on the river Liffey.",
        "They wanted the Long Room library at Trinity College.",
        "They asked after Georgian doors and the GPO on O'Connell Street.",
        "They mentioned a 1916 Rising tour that started at Kilmainham Gaol.",
      ],
    },
  },
  goa: {
    name: "Old Goa, India",
    flag: "🇮🇳",
    flavor:
      "Whitewashed baroque churches stand in tropical heat. Palm trees sway over the Mandovi river.",
    witnesses: {
      catholic: [
        "a sacristan at Bom Jesus",
        "a fisherman on the Mandovi",
        "a feni distiller",
      ],
      secular: [
        "a boatman on the Mandovi",
        "a fisherman at the harbour",
        "a feni distiller",
      ],
    },
    hints: {
      catholic: [
        "They flew to the former Portuguese colony on India's Konkan coast.",
        "They wanted to see the incorrupt body of the Apostle of the Indies.",
        "They mentioned the Basilica of Bom Jesus and Francis Xavier's tomb.",
        "They spoke of a monsoon coastline of palm groves and whitewashed churches.",
      ],
      secular: [
        "They were going to India's smallest state, on the Konkan coast.",
        "They mentioned a former Portuguese colony handed over only in 1961.",
        "They asked after Anjuna beach parties and the Saturday night market.",
        "They wanted the cashew feni distilleries on the Mandovi's banks.",
      ],
    },
  },
  paris: {
    name: "Paris, France",
    flag: "🇫🇷",
    flavor:
      "Notre-Dame's spire, restored and reopened in December 2024, rises again over the Île de la Cité.",
    witnesses: {
      catholic: [
        "a bouquiniste by the Seine",
        "a Notre-Dame docent",
        "a Métro busker playing accordion",
      ],
      secular: [
        "a bouquiniste by the Seine",
        "a Louvre security guard",
        "a Métro busker playing accordion",
      ],
    },
    hints: {
      catholic: [
        "They booked vespers at Notre-Dame, reopened in December 2024 after the 2019 fire.",
        "They wanted the Sainte-Chapelle and the reliquary of the Crown of Thorns.",
        "They were flying to the French capital on the Seine.",
        "They mentioned two islands in the middle of a river: Île de la Cité and Île Saint-Louis.",
      ],
      secular: [
        "They were flying to the French capital on the Seine.",
        "They wanted the Louvre and a morning with the Mona Lisa.",
        "They mentioned the 2024 Olympic legacy sites along the river.",
        "They said they'd climb the Eiffel Tower at sunset.",
      ],
    },
  },
  istanbul: {
    name: "Istanbul, Türkiye",
    flag: "🇹🇷",
    flavor:
      "The Bosphorus slips silver between Europe and Asia. Minarets and domes mark the skyline.",
    witnesses: {
      catholic: [
        "a guide at the Chora Church",
        "a Bosphorus ferryman",
        "a kebab vendor near the Blue Mosque",
      ],
      secular: [
        "a Bosphorus ferryman",
        "a carpet seller in the Grand Bazaar",
        "a kebab vendor near the Blue Mosque",
      ],
    },
    hints: {
      catholic: [
        "They wanted the former cathedral of Constantinople, once the heart of Eastern Christendom.",
        "They mentioned the Chora Church's Byzantine mosaics, newly restored.",
        "They asked after the seat of the Ecumenical Patriarch in the Phanar.",
        "They said they'd light a candle near the empty tomb of John Chrysostom.",
      ],
      secular: [
        "They flew to the city straddling two continents on the Bosphorus.",
        "They asked for Topkapı Palace, once the seat of Ottoman sultans.",
        "They wanted the Grand Bazaar and a hammam by the Galata Bridge.",
        "They mentioned the Hagia Sophia and the Blue Mosque facing each other.",
      ],
    },
  },
  cairo: {
    name: "Cairo, Egypt",
    flag: "🇪🇬",
    flavor:
      "The Nile curves green through desert beige. Minarets outnumber the palm trees; pyramids stand at the western edge.",
    witnesses: {
      catholic: [
        "a Coptic deacon at the Hanging Church",
        "a felucca captain on the Nile",
        "a taxi driver in Tahrir Square",
      ],
      secular: [
        "a guide at the Grand Egyptian Museum",
        "a felucca captain on the Nile",
        "a taxi driver in Tahrir Square",
      ],
    },
    hints: {
      catholic: [
        "They asked after the Coptic quarter and the Hanging Church of Old Cairo.",
        "They mentioned Mark the Evangelist, founder of the See of Alexandria.",
        "They wanted the route of the Holy Family's flight into Egypt.",
        "They said they'd visit a desert monastery of the Desert Fathers.",
      ],
      secular: [
        "They were flying to the Egyptian capital on the Nile.",
        "They asked for the Grand Egyptian Museum, opened in full in 2024 at Giza.",
        "They wanted Tutankhamun's treasures and the tea rooms of Khan el-Khalili.",
        "They mentioned the pyramids visible from the western suburbs.",
      ],
    },
  },
  london: {
    name: "London, United Kingdom",
    flag: "🇬🇧",
    flavor:
      "The Thames swings past the Tower. Double-deckers and glass skyscrapers share the old streets.",
    witnesses: {
      catholic: [
        "a docent at Westminster Cathedral",
        "a black-cab driver",
        "a Beefeater at the Tower",
      ],
      secular: [
        "a British Museum docent",
        "a black-cab driver",
        "a Beefeater at the Tower",
      ],
    },
    hints: {
      catholic: [
        "They mentioned Thomas More, martyred on Tower Hill under Henry VIII.",
        "They asked after Westminster Cathedral — the Catholic one in Victoria, not the Abbey.",
        "They spoke of the Forty Martyrs of England and Wales canonized in 1970.",
        "They said they'd see the relics at the London Oratory.",
      ],
      secular: [
        "They were flying to the British capital on the Thames.",
        "They wanted the British Museum — home of the Rosetta Stone and the Elgin Marbles.",
        "They asked about the Elizabeth Line and the 2025 extensions.",
        "They mentioned the Tower of London and the Crown Jewels.",
      ],
    },
  },
  tokyo: {
    name: "Tokyo, Japan",
    flag: "🇯🇵",
    flavor:
      "Neon and shinkansen. The emperor's palace sits behind the old moats; the bay glitters to the south.",
    witnesses: {
      catholic: [
        "a chaplain at St. Mary's Cathedral",
        "a ramen-shop owner in Shinjuku",
        "a station attendant at Tokyo Station",
      ],
      secular: [
        "a sushi chef in Toyosu",
        "a ramen-shop owner in Shinjuku",
        "a station attendant at Tokyo Station",
      ],
    },
    hints: {
      catholic: [
        "They wanted St. Mary's Cathedral — Kenzō Tange's 1964 modernist masterpiece, sheathed in silver.",
        "They spoke of the 26 Martyrs of Japan and the Kakure Kirishitan of Nagasaki.",
        "They were flying to the Japanese capital — where Francis Xavier's Society once preached before the persecutions.",
        "They mentioned the feast of St. Paul Miki and companions on February 6.",
      ],
      secular: [
        "They were flying to the Japanese capital on Tokyo Bay.",
        "They asked about the Shibuya scramble and the Meiji Shrine's torii.",
        "They mentioned the Imperial Palace moat and the 2025 Expo aftermath in Osaka.",
        "They wanted a shinkansen bento and a morning at Tsukiji's outer market.",
      ],
    },
  },
  buenos_aires: {
    name: "Buenos Aires, Argentina",
    flag: "🇦🇷",
    flavor:
      "Tango drifts from a Palermo café. Jacarandas bloom purple along the avenidas each November.",
    witnesses: {
      catholic: [
        "a priest at the Catedral Metropolitana",
        "a tango busker in San Telmo",
        "a taxi driver on Avenida 9 de Julio",
      ],
      secular: [
        "a steakhouse owner in La Boca",
        "a tango busker in San Telmo",
        "a taxi driver on Avenida 9 de Julio",
      ],
    },
    hints: {
      catholic: [
        "They asked after the parish in Flores where the young Jorge Bergoglio grew up.",
        "They were going to the Argentine capital and the Catedral Metropolitana on Plaza de Mayo.",
        "They mentioned the feast of San Cayetano and the August pilgrimage in Liniers.",
        "They spoke of Our Lady of Luján, patroness of Argentina.",
      ],
      secular: [
        "They were flying to the Argentine capital on the Río de la Plata.",
        "They mentioned the obelisk and the widest avenue in the world.",
        "They asked about Evita's tomb in Recoleta Cemetery.",
        "They said they'd eat asado and walk Caminito in La Boca.",
      ],
    },
  },
  new_york: {
    name: "New York City, USA",
    flag: "🇺🇸",
    flavor:
      "Yellow cabs, glass towers, and the harbor past Liberty Island. The city that wakes early.",
    witnesses: {
      catholic: [
        "a sacristan at St. Patrick's Cathedral",
        "a cabbie near Times Square",
        "a Fifth Avenue doorman",
      ],
      secular: [
        "a MoMA security guard",
        "a cabbie near Times Square",
        "a Fifth Avenue doorman",
      ],
    },
    hints: {
      catholic: [
        "They wanted St. Patrick's Cathedral on Fifth Avenue — seat of the Archbishop of New York.",
        "They mentioned Mother Cabrini, the first American citizen canonized, and her shrine in Washington Heights.",
        "They were flying to the largest American city, at the Hudson's mouth.",
        "They spoke of Elizabeth Ann Seton, the first native-born American saint, born in lower Manhattan.",
      ],
      secular: [
        "They were flying to the largest American city, at the Hudson's mouth.",
        "They mentioned the Met, MoMA, and the 2025 extension of the High Line.",
        "They wanted the Statue of Liberty and a slice at Katz's.",
        "They asked about the new Penn Station plans and the Moynihan Train Hall.",
      ],
    },
  },
  rio: {
    name: "Rio de Janeiro, Brazil",
    flag: "🇧🇷",
    flavor:
      "Sugarloaf rises above the bay. Samba drifts from Lapa; ipanema glitters at dusk.",
    witnesses: {
      catholic: [
        "a guide at Christ the Redeemer",
        "a samba school instructor",
        "a beach vendor on Copacabana",
      ],
      secular: [
        "a guide at Christ the Redeemer",
        "a samba school instructor",
        "a beach vendor on Copacabana",
      ],
    },
    hints: {
      catholic: [
        "They were going to the Brazilian city beneath the outstretched arms of Christ the Redeemer.",
        "They mentioned the art deco statue on Corcovado, consecrated in 1931.",
        "They wanted the Marian sanctuary of Aparecida, patroness of Brazil.",
        "They spoke of St. José de Anchieta, the 16th-century apostle of Brazil.",
      ],
      secular: [
        "They were flying to the great city of Brazil, famous for Carnaval.",
        "They mentioned Sugarloaf, Copacabana, and Ipanema.",
        "They asked about the 2016 Olympic legacy sites and the bay cleanup.",
        "They wanted a tram up to Santa Teresa before a late caipirinha.",
      ],
    },
  },
  sydney: {
    name: "Sydney, Australia",
    flag: "🇦🇺",
    flavor:
      "The Opera House's white sails rise above the harbor. Ferries crisscross toward Manly and Taronga.",
    witnesses: {
      catholic: [
        "a priest at St. Mary's Cathedral",
        "a surfer at Bondi",
        "a ferry captain on Circular Quay",
      ],
      secular: [
        "an Opera House usher",
        "a surfer at Bondi",
        "a ferry captain on Circular Quay",
      ],
    },
    hints: {
      catholic: [
        "They wanted the gothic-revival St. Mary's Cathedral, Sydney's Catholic heart.",
        "They mentioned St. Mary MacKillop — Australia's first canonized saint.",
        "They asked after the Sisters of St. Joseph of the Sacred Heart — the 'Brown Joeys'.",
        "They were flying to the Australian city whose Catholic cathedral faces Hyde Park.",
      ],
      secular: [
        "They were flying to Australia's largest city on its famous harbor.",
        "They mentioned the Opera House sails and the Harbour Bridge climb.",
        "They wanted Bondi Beach on a weekday morning.",
        "They asked about the ferry to Manly and the Taronga Zoo chairlift.",
      ],
    },
  },
  cologne: {
    name: "Cologne, Germany",
    flag: "🇩🇪",
    flavor: "The Rhine bends past twin Gothic spires 157 metres tall. Kölsch beer arrives in 0.2-litre stangen.",
    witnesses: {
      catholic: ["a verger at Kölner Dom", "an Eau de Cologne shop clerk", "a Rhine boat pilot"],
      secular: ["a Ludwig Museum docent", "an Eau de Cologne shop clerk", "a Rhine boat pilot"],
    },
    hints: {
      catholic: [
        "They were flying to the Rhineland city with the cathedral of the Three Magi.",
        "They asked about Kölner Dom and its golden shrine of the Magi.",
        "They mentioned St Ursula and her companions, martyrs of Cologne.",
        "They wanted the relics of St Albert the Great at the Dominican church.",
        "They spoke of World Youth Day 2005 in Cologne.",
      ],
      secular: [
        "They were flying to Germany's fourth-largest city on the Rhine.",
        "They asked about Kölner Dom — twin Gothic spires 157 metres high.",
        "They mentioned Eau de Cologne, invented here in the 1700s.",
        "They wanted the Ludwig Museum's Picassos and Pop Art.",
        "They spoke of Kölsch beer served in small 0.2-litre glasses.",
      ],
    },
  },
  barcelona: {
    name: "Barcelona, Spain",
    flag: "🇪🇸",
    flavor: "Gaudí's curves disrupt the Eixample grid. Palm trees line the Barceloneta beachfront.",
    witnesses: {
      catholic: ["a sacristan at Barcelona Cathedral", "a Rambla street performer", "a metro operator at Sagrada Família"],
      secular: ["a Gaudí guide at Park Güell", "a Rambla street performer", "a metro operator at Sagrada Família"],
    },
    hints: {
      catholic: [
        "They were flying to Catalonia's capital — home of Gaudí's Sagrada Família.",
        "They asked about Antoni Gaudí's cause for canonization, opened in 2000.",
        "They mentioned Montserrat — the mountain monastery of the Black Madonna.",
        "They wanted the Gothic cathedral of Santa Eulàlia.",
        "They spoke of Saint Raymond of Penyafort, Dominican and patron of Barcelona.",
      ],
      secular: [
        "They were flying to Catalonia's capital on the Mediterranean.",
        "They asked about the Sagrada Família — still under construction since 1882.",
        "They mentioned Park Güell and Casa Batlló — Gaudí everywhere.",
        "They wanted tapas at La Boqueria market off La Rambla.",
        "They spoke of Camp Nou and FC Barcelona home matches.",
      ],
    },
  },
  madrid: {
    name: "Madrid, Spain",
    flag: "🇪🇸",
    flavor: "The Castilian plateau meets urban grandeur. Tapas bars crowd La Latina, chocolate steams at San Ginés.",
    witnesses: {
      catholic: ["a sacristan at Almudena Cathedral", "a churros cook at San Ginés", "a metro operator at Sol"],
      secular: ["a Prado gallery guide", "a churros cook at San Ginés", "a metro operator at Sol"],
    },
    hints: {
      catholic: [
        "They were flying to Spain's capital — home to the Almudena Cathedral beside the royal palace.",
        "They asked after Saint Isidore the Farmer, patron of Madrid.",
        "They mentioned Saint Josemaría Escrivá and the founding of Opus Dei.",
        "They wanted the relics of Isidore at the Collegiate Church of San Isidro.",
        "They spoke of the Descalzas Reales convent and its royal-donated art.",
      ],
      secular: [
        "They were flying to Spain's capital on the Castilian plateau.",
        "They asked about the Prado and the Reina Sofía.",
        "They mentioned tapas bars in La Latina and chocolate con churros at San Ginés.",
        "They wanted the Santiago Bernabéu and a Real Madrid match.",
        "They spoke of the Retiro Park and the Crystal Palace.",
      ],
    },
  },
  azores: {
    name: "Ponta Delgada, Azores",
    flag: "🇵🇹",
    flavor: "Hydrangeas line the black basalt stone walls. The Atlantic stretches empty in every direction.",
    witnesses: {
      catholic: ["a sacristan at Igreja Matriz de São Sebastião", "a pineapple farmer near Lagoa", "a hot-spring attendant at Furnas"],
      secular: ["a hiking guide at Sete Cidades", "a pineapple farmer near Lagoa", "a hot-spring attendant at Furnas"],
    },
    hints: {
      catholic: [
        "They were flying to Portugal's Atlantic island chain, 1,500 km west of Lisbon.",
        "They asked about the Festa do Senhor Santo Cristo dos Milagres in Ponta Delgada.",
        "They mentioned the gilded-wood interior of Igreja Matriz de São Sebastião.",
        "They wanted a pilgrim's walk across São Miguel island.",
        "They spoke of Azorean Catholics shaping Fall River and San Joaquin Valley.",
      ],
      secular: [
        "They were flying to a Portuguese archipelago in the middle of the Atlantic.",
        "They asked about Sete Cidades and its twin crater lakes — one green, one blue.",
        "They mentioned Pico — Portugal's highest peak, a volcano on the neighboring island.",
        "They wanted hot-spring bathing at Furnas.",
        "They spoke of trans-Atlantic flying boats once refuelling here.",
      ],
    },
  },
  galapagos: {
    name: "Galápagos Islands, Ecuador",
    flag: "🇪🇨",
    flavor: "Blue-footed boobies step along the lava. Marine iguanas bask beside dinghies at Puerto Ayora.",
    witnesses: {
      catholic: ["the chaplain at the Puerto Ayora chapel", "a fisherman at the pier", "a Darwin Research Station naturalist"],
      secular: ["a Darwin Research Station naturalist", "a panga driver in Puerto Ayora", "a fisherman at the pier"],
    },
    hints: {
      catholic: [
        "They were flying to Ecuador's Pacific archipelago, astride the Equator.",
        "They asked after Fray Tomás de Berlanga — the Dominican bishop whose ship first sighted the islands in 1535.",
        "They mentioned the small Catholic chapel serving Puerto Ayora residents.",
        "They wanted to see where the first Franciscan mission was attempted.",
        "They spoke of the pilgrimage dedicated to the patron of sailors.",
      ],
      secular: [
        "They were flying to Ecuador's Pacific archipelago, astride the Equator.",
        "They asked about Darwin's 1835 visit and the finches that inspired evolution.",
        "They mentioned giant tortoises on Santa Cruz and Isabela.",
        "They wanted to see blue-footed boobies and marine iguanas.",
        "They spoke of Ecuador's first national park, founded 1959.",
      ],
    },
  },
  zurich: {
    name: "Zürich, Switzerland",
    flag: "🇨🇭",
    flavor: "The Limmat pours out of the lake, past Chagall stained glass and bank towers.",
    witnesses: {
      catholic: ["a sacristan at Liebfrauenkirche", "a chocolatier on Bahnhofstrasse", "a tram operator on Limmatquai"],
      secular: ["a Kunsthaus docent", "a chocolatier on Bahnhofstrasse", "a tram operator on Limmatquai"],
    },
    hints: {
      catholic: [
        "They were flying to Switzerland's largest city on the Limmat.",
        "They asked about the Fraumünster and the Chagall stained-glass windows.",
        "They mentioned Liebfrauenkirche — the Catholic Minster of Our Lady.",
        "They wanted the shrine of Saints Felix and Regula, Zürich's martyrs.",
        "They spoke of Zwingli's 1519 Reformation here — and the Catholic minority that endured.",
      ],
      secular: [
        "They were flying to Switzerland's financial capital on the Limmat.",
        "They asked about Bahnhofstrasse — reputed the world's most expensive shopping street.",
        "They mentioned the lakefront promenade and Uetliberg views.",
        "They wanted fondue at Haus Hiltl or chocolate at Sprüngli.",
        "They spoke of the Kunsthaus and its Giacometti sculptures.",
      ],
    },
  },
  vatican_city: {
    name: "Vatican City",
    flag: "🇻🇦",
    flavor: "The Bronze Doors stand at the corner of St Peter's Square. Forty-four hectares of stone, marble, and ink.",
    witnesses: {
      catholic: ["a Papal Swiss Guard on duty", "a Vatican Museums docent", "a Vatican Gardens tour guide"],
      secular: ["a Vatican Museums docent", "a Sistine Chapel steward", "a postcard vendor in St Peter's Square"],
    },
    hints: {
      catholic: [
        "They were flying to the smallest independent state on earth.",
        "They asked after the Swiss Guard and their updated 2026 uniforms.",
        "They wanted the Apostolic Archives — 85 km of shelves.",
        "They mentioned the Sistine Chapel's conclave floor markings.",
        "They spoke of an encyclical due from the Holy Father this autumn.",
      ],
      secular: [
        "They were flying to the smallest independent state — 44 hectares of it.",
        "They asked about the Vatican Museums' 70,000 works.",
        "They mentioned the Sistine Chapel and Michelangelo's Last Judgement.",
        "They wanted St Peter's dome view from Castel Sant'Angelo.",
        "They spoke of the world's oldest standing army — the Pontifical Swiss Guard.",
      ],
    },
  },
  san_marino: {
    name: "San Marino",
    flag: "🇸🇲",
    flavor: "Three stone towers crown Mount Titano. Cars are parked at the foot; you take the funicular up.",
    witnesses: {
      catholic: ["a sacristan at the Basilica of San Marino", "a crossbow-corps soldier in uniform", "a taxi driver to Rimini"],
      secular: ["a guide at the three towers", "a crossbow-corps soldier in uniform", "a taxi driver to Rimini"],
    },
    hints: {
      catholic: [
        "They were flying to the world's oldest republic — perched on Mount Titano.",
        "They asked about the Basilica of San Marino, enshrining the saint-founder.",
        "They mentioned Saint Marinus, the fourth-century stonemason who founded the state.",
        "They wanted the Pieve of San Leo, a Romanesque church nearby.",
        "They spoke of the Feast of the Stonemason on September 3.",
      ],
      secular: [
        "They were flying to the world's oldest republic — founded 301 AD.",
        "They asked about the three towers crowning Mount Titano.",
        "They mentioned the UNESCO-listed historic centre.",
        "They wanted to see the Crossbow Corps' firing demonstration.",
        "They spoke of passport stamps sold as souvenirs at the tourist office.",
      ],
    },
  },
  reggio_calabria: {
    name: "Reggio di Calabria, Italy",
    flag: "🇮🇹",
    flavor: "The Strait of Messina stretches thin across the view. Bergamot orchards scent the hillsides.",
    witnesses: {
      catholic: ["a sacristan at the Cathedral", "a bergamot farmer from the Aspromonte", "a ferry captain to Messina"],
      secular: ["a docent at the National Museum of Magna Graecia", "a bergamot farmer from the Aspromonte", "a ferry captain to Messina"],
    },
    hints: {
      catholic: [
        "They were flying to the Italian toe — the Calabrian capital on the Strait of Messina.",
        "They asked about Our Lady of Consolation, Reggio's patroness.",
        "They mentioned the Madonna of the Mountain pilgrimage at Polsi.",
        "They wanted the Cathedral of Santa Maria Assunta rebuilt after the 1908 earthquake.",
        "They spoke of San Vitaliano, Reggio's sixth-century bishop.",
      ],
      secular: [
        "They were flying to the Italian toe — across the strait from Messina.",
        "They asked about the Riace Bronzes at the National Museum of Magna Graecia.",
        "They mentioned the seafront promenade — 'the most beautiful kilometre in Italy.'",
        "They wanted a ferry to Messina and onward into Sicily.",
        "They spoke of bergamot orchards — the city's famous citrus.",
      ],
    },
  },
  athens: {
    name: "Athens, Greece",
    flag: "🇬🇷",
    flavor: "The Parthenon rises on its rock above the city. Ouzo and grilled octopus drift from rooftop tavernas.",
    witnesses: {
      catholic: ["a priest at St Dionysius Cathedral", "a Plaka taverna owner", "a metro operator at Syntagma"],
      secular: ["an Acropolis guide", "a Plaka taverna owner", "a metro operator at Syntagma"],
    },
    hints: {
      catholic: [
        "They were flying to Greece's capital — Catholic minority under the Archdiocese of Athens.",
        "They asked about the Cathedral of St Dionysius the Areopagite, named for St Paul's convert.",
        "They mentioned Mars Hill where St Paul preached in Acts 17.",
        "They wanted a Mass at the small Catholic church near Syntagma.",
        "They spoke of ecumenical gatherings with the Orthodox hierarchy.",
      ],
      secular: [
        "They were flying to Greece's capital at the foot of Mount Lycabettus.",
        "They asked about the Acropolis and the Parthenon's ongoing restoration.",
        "They mentioned the Plaka old town and the ancient Agora.",
        "They wanted moussaka in a rooftop taverna with an Acropolis view.",
        "They spoke of the National Archaeological Museum's Antikythera mechanism.",
      ],
    },
  },
  thessaloniki: {
    name: "Thessaloniki, Greece",
    flag: "🇬🇷",
    flavor: "The White Tower guards the Thermaic Gulf. Byzantine walls crumble gently into the Upper Town.",
    witnesses: {
      catholic: ["a sacristan at the Basilica of St Demetrius", "a White Tower guide", "a bougatsa baker in Ano Poli"],
      secular: ["a White Tower guide", "an Archaeological Museum docent", "a bougatsa baker in Ano Poli"],
    },
    hints: {
      catholic: [
        "They were flying to Greece's second city — St Paul wrote two epistles to its congregation.",
        "They asked about the Rotunda of Galerius, a fourth-century dome consecrated as a church.",
        "They mentioned Saint Demetrius of Thessaloniki, the city's martyr-patron.",
        "They wanted the basilica containing Demetrius's relics.",
        "They spoke of First and Second Thessalonians still read at Mass.",
      ],
      secular: [
        "They were flying to Greece's second city on the Thermaic Gulf.",
        "They asked about the White Tower and the seaside promenade.",
        "They mentioned the Byzantine Walls and the Arch of Galerius.",
        "They wanted bougatsa for breakfast in Ano Poli.",
        "They spoke of the 1912 liberation and the great fire of 1917.",
      ],
    },
  },
  venice: {
    name: "Venice, Italy",
    flag: "🇮🇹",
    flavor: "Canals lap against crumbling palazzi. St Mark's winged lion watches from every corner.",
    witnesses: {
      catholic: ["a sacristan at St Mark's Basilica", "a gondolier at the Rialto", "a Venetian-mask shop owner"],
      secular: ["a Guggenheim docent", "a gondolier at the Rialto", "a Venetian-mask shop owner"],
    },
    hints: {
      catholic: [
        "They were flying to the city on the lagoon — seat of the Patriarchate of Venice.",
        "They asked about St Mark's Basilica and the bones of the evangelist.",
        "They mentioned St Mark's body smuggled from Alexandria in 828.",
        "They wanted the cathedral of San Pietro di Castello, the old Patriarchal seat.",
        "They spoke of Pope Pius X — Patriarch of Venice before his election.",
      ],
      secular: [
        "They were flying to the city of 118 islands on the Adriatic lagoon.",
        "They asked about St Mark's Square and the acqua alta floods.",
        "They mentioned Murano glass and Burano lace.",
        "They wanted a gondola through the Grand Canal.",
        "They spoke of the Biennale and the city's ongoing battle against mass tourism.",
      ],
    },
  },
  cape_town: {
    name: "Cape Town, South Africa",
    flag: "🇿🇦",
    flavor:
      "Table Mountain rears above the harbor; the Atlantic meets the Indian at the Cape.",
    witnesses: {
      catholic: [
        "a sacristan at St Mary's Cathedral",
        "a waterfront vendor near the V&A",
        "a minibus driver on Long Street",
      ],
      secular: [
        "a Table Mountain cableway operator",
        "a waterfront vendor near the V&A",
        "a minibus driver on Long Street",
      ],
    },
    hints: {
      catholic: [
        "They were flying to South Africa's Mother City at the foot of Table Mountain.",
        "They asked after St Mary's Cathedral, seat of the archdiocese.",
        "They spoke of Blessed Benedict Daswa, the Venda catechist martyred in 1990.",
        "They mentioned the Stations of the Cross on Signal Hill.",
        "They wanted to see where two oceans meet at the cape.",
      ],
      secular: [
        "They were flying to the Mother City at Africa's southern tip.",
        "They wanted the cableway up Table Mountain at sunset.",
        "They mentioned Robben Island and Mandela's 27-year cell.",
        "They asked about penguin colonies at Boulders Beach.",
        "They booked a wine tasting in Stellenbosch.",
      ],
    },
  },
  montevideo: {
    name: "Montevideo, Uruguay",
    flag: "🇺🇾",
    flavor:
      "The Rambla bends along the Río de la Plata's north bank. Tango drifts from Ciudad Vieja.",
    witnesses: {
      catholic: [
        "a sacristan at the Metropolitan Cathedral",
        "a choripán vendor in Mercado del Puerto",
        "a taxi driver on 18 de Julio",
      ],
      secular: [
        "a tango musician in Ciudad Vieja",
        "a choripán vendor in Mercado del Puerto",
        "a taxi driver on 18 de Julio",
      ],
    },
    hints: {
      catholic: [
        "They were bound for the Uruguayan capital on the Río de la Plata's north bank.",
        "They asked about the Virgen de los Treinta y Tres, Uruguay's patroness.",
        "They wanted Cerrito de la Victoria and its basilica above the city.",
        "They mentioned Pope Francis's 2015 Mass in the capital.",
        "They spoke of the Jesuit missions of the colonial Banda Oriental.",
      ],
      secular: [
        "They were flying to Uruguay's capital on the Río de la Plata.",
        "They mentioned the Rambla — one of the world's longest continuous seafronts.",
        "They asked about a tango milonga in Ciudad Vieja.",
        "They said they'd sip mate along the shoreline at sunset.",
        "They mentioned Punta del Este up the coast for a weekend.",
      ],
    },
  },
  dakar: {
    name: "Dakar, Senegal",
    flag: "🇸🇳",
    flavor:
      "Waves crash against the Cap-Vert peninsula. Baobabs and mosques rise from the red earth.",
    witnesses: {
      catholic: [
        "a sacristan at the Cathédrale du Souvenir Africain",
        "a pirogue captain at the port",
        "a taxi driver on Boulevard de la République",
      ],
      secular: [
        "a guide on Gorée Island",
        "a pirogue captain at the port",
        "a taxi driver on Boulevard de la République",
      ],
    },
    hints: {
      catholic: [
        "They were flying to Senegal's capital — seat of an archdiocese since 1955.",
        "They asked about the annual Marian pilgrimage to Popenguine south of the city.",
        "They mentioned Cardinal Hyacinthe Thiandoum, Senegal's first native cardinal.",
        "They wanted the Cathédrale du Souvenir Africain, consecrated in 1936.",
        "They spoke of Catholic Mass held weekly on Gorée Island.",
      ],
      secular: [
        "They were headed to the westernmost capital on mainland Africa.",
        "They asked about Gorée Island and the Door of No Return.",
        "They mentioned the African Renaissance Monument — taller than Liberty.",
        "They wanted to see Lac Rose, the salt lake outside the city.",
        "They booked an mbalax concert at the Institut Français.",
      ],
    },
  },
  merida: {
    name: "Mérida, Mexico",
    flag: "🇲🇽",
    flavor:
      "The White City of the Yucatán. Calash carriages clatter down Paseo de Montejo.",
    witnesses: {
      catholic: [
        "a sacristan at the Cathedral of San Ildefonso",
        "a cochinita pibil vendor in Lucas de Gálvez market",
        "a calesa driver on Paseo de Montejo",
      ],
      secular: [
        "a guide at the Gran Museo del Mundo Maya",
        "a cochinita pibil vendor in the market",
        "a calesa driver on Paseo de Montejo",
      ],
    },
    hints: {
      catholic: [
        "They were headed to Yucatán's capital — the White City of Mexico.",
        "They asked about the Cathedral of San Ildefonso, oldest on the Americas' mainland.",
        "They mentioned the Cristo de las Ampollas — the Christ of Blisters.",
        "They wanted the Franciscan mission churches across the peninsula.",
        "They spoke of a cathedral built from the stones of the Maya pyramid T'hó.",
      ],
      secular: [
        "They were flying to the capital of Yucatán — the White City.",
        "They asked about Chichén Itzá, the Maya pyramid a few hours east.",
        "They mentioned Cenote Ik Kil and the swimming holes of the Yucatán.",
        "They wanted cochinita pibil and pan de cazón in the central market.",
        "They spoke of Celestún and its flamingo reserve.",
      ],
    },
  },
  kotor: {
    name: "Kotor, Montenegro",
    flag: "🇲🇪",
    flavor:
      "Europe's southernmost fjord. A walled town under a stone mountain, reflected in still water.",
    witnesses: {
      catholic: [
        "a sacristan at the Cathedral of St Tryphon",
        "a fishmonger at the old town gate",
        "a guide on the Ladder of Kotor",
      ],
      secular: [
        "a cruise-ship greeter on the quay",
        "a fishmonger at the old town gate",
        "a guide on the Ladder of Kotor",
      ],
    },
    hints: {
      catholic: [
        "They were headed to the Adriatic bay whose Catholic cathedral has stood since 1166.",
        "They asked about the Cathedral of Saint Tryphon inside the walled city.",
        "They mentioned the island church of Our Lady of the Rocks, built on a man-made reef.",
        "They wanted the relics of St Tryphon, gifted by Venetian sailors in 809.",
        "They spoke of the Catholic-majority community of the Bay of Kotor.",
      ],
      secular: [
        "They were flying to a Montenegrin bay — Europe's southernmost fjord.",
        "They asked about the UNESCO-listed walled old town of Kotor.",
        "They mentioned the switchback climb to the fortress above the bay.",
        "They wanted a boat out to Our Lady of the Rocks, a man-made island.",
        "They spoke of Perast and Tivat further along the coast.",
      ],
    },
  },
  sofia: {
    name: "Sofia, Bulgaria",
    flag: "🇧🇬",
    flavor:
      "Vitosha Mountain looms to the south. Gold-domed churches stand over Roman ruins.",
    witnesses: {
      catholic: [
        "a priest at St Joseph's Cathedral",
        "a rakia vendor at Zhenski Pazar",
        "a taxi driver on Vitosha Boulevard",
      ],
      secular: [
        "a guide at the Ancient Serdica excavations",
        "a rakia vendor at Zhenski Pazar",
        "a taxi driver on Vitosha Boulevard",
      ],
    },
    hints: {
      catholic: [
        "They were bound for Bulgaria's capital — a Catholic cathedral amid Orthodox gold.",
        "They asked after the Cathedral of St Joseph, seat of the Apostolic Exarchate.",
        "They mentioned the future John XXIII's decade as Apostolic Delegate here.",
        "They wanted to see Boyana Church's medieval Catholic-era frescoes.",
        "They spoke of pilgrimages to Rila Monastery south of the city.",
      ],
      secular: [
        "They were flying to Bulgaria's capital at the foot of Vitosha Mountain.",
        "They mentioned the gold-domed Alexander Nevsky Cathedral.",
        "They asked about the Ancient Serdica ruins under the central square.",
        "They wanted a weekend at Rila Monastery three hours south.",
        "They spoke of rakia and banitsa in the old Roman baths district.",
      ],
    },
  },
  lima: {
    name: "Lima, Peru",
    flag: "🇵🇪",
    flavor:
      "The City of Kings above the Pacific, forever overcast under its garúa mist.",
    witnesses: {
      catholic: [
        "a sacristan at Lima Cathedral",
        "a ceviche chef in Barranco",
        "a taxi driver in Miraflores",
      ],
      secular: [
        "a guide at the Larco Museum",
        "a ceviche chef in Barranco",
        "a taxi driver in Miraflores",
      ],
    },
    hints: {
      catholic: [
        "They were headed to the City of Kings — founded on the Feast of the Epiphany.",
        "They asked after Saint Rose of Lima, first canonized saint of the Americas.",
        "They mentioned Saint Martín de Porres, the Dominican lay brother of Santo Domingo.",
        "They wanted the relics of Saint John Macías at the Dominican church.",
        "They spoke of the Señor de los Milagros procession each October.",
      ],
      secular: [
        "They were flying to Peru's capital on the Pacific.",
        "They asked about the Plaza Mayor and the historic centre — UNESCO listed.",
        "They mentioned ceviche and pisco sours in Barranco.",
        "They wanted the Larco Museum's pre-Columbian gold.",
        "They spoke of Machu Picchu a train ride away from Cusco.",
      ],
    },
  },
  santiago_chile: {
    name: "Santiago, Chile",
    flag: "🇨🇱",
    flavor:
      "Ringed by the Andes. Smog burns off by noon to reveal white peaks east of the city.",
    witnesses: {
      catholic: [
        "a sacristan at the Metropolitan Cathedral",
        "a completo vendor at Mercado Central",
        "a Metro operator at Universidad de Chile station",
      ],
      secular: [
        "a wine guide from Maipo Valley",
        "a completo vendor at Mercado Central",
        "a Metro operator at Universidad de Chile station",
      ],
    },
    hints: {
      catholic: [
        "They were bound for Chile's capital in the Andean foothills.",
        "They asked about Saint Alberto Hurtado, the Jesuit canonized in 2005.",
        "They mentioned the Basilica of Our Lady of Carmen de Maipú, patroness of Chile.",
        "They wanted Cerro San Cristóbal with its Marian statue above the city.",
        "They spoke of the Catholic University of Chile and its theological library.",
      ],
      secular: [
        "They were flying to Chile's capital, ringed by the Andes.",
        "They asked about Pablo Neruda's house — La Chascona — in Bellavista.",
        "They mentioned a vineyard tour in the Maipo Valley.",
        "They wanted to ride the funicular up Cerro San Cristóbal.",
        "They spoke of Atacama trips departing north from here.",
      ],
    },
  },
  nairobi: {
    name: "Nairobi, Kenya",
    flag: "🇰🇪",
    flavor:
      "The 'Green City in the Sun' sits a mile high. Giraffes wander the national park at the city's edge.",
    witnesses: {
      catholic: [
        "a sacristan at Holy Family Basilica",
        "a matatu driver on Moi Avenue",
        "a nyama-choma cook at Carnivore",
      ],
      secular: [
        "a safari guide at the airport",
        "a matatu driver on Moi Avenue",
        "a nyama-choma cook at Carnivore",
      ],
    },
    hints: {
      catholic: [
        "They were flying to Kenya's capital — seat of the Archdiocese of Nairobi.",
        "They asked after the Basilica of the Holy Family downtown.",
        "They mentioned Pope Francis's 2015 Mass at the University of Nairobi.",
        "They spoke of the Uganda Martyrs' feast day on June 3.",
        "They wanted the Consolata Shrine and the missionaries' Mass.",
      ],
      secular: [
        "They were flying to Kenya's capital, a mile above sea level.",
        "They mentioned safari departures for Maasai Mara.",
        "They asked about the Nairobi National Park within the city limits.",
        "They wanted Karen Blixen's farmhouse on the edge of Karen suburb.",
        "They spoke of ugali and nyama choma at Carnivore restaurant.",
      ],
    },
  },
  valletta: {
    name: "Valletta, Malta",
    flag: "🇲🇹",
    flavor: "Limestone bastions ring the Grand Harbour. Yellow pastizzi steam in every corner café.",
    witnesses: {
      catholic: ["a verger at St John's Co-Cathedral", "a ferry captain at Grand Harbour", "a pastizzi-shop owner"],
      secular: ["a National Archaeological Museum guide", "a ferry captain at Grand Harbour", "a pastizzi-shop owner"],
    },
    hints: {
      catholic: [
        "They were flying to Malta — 95% Catholic, with a church for every village.",
        "They asked after St John's Co-Cathedral and Caravaggio's Beheading of St John.",
        "They mentioned St Paul's shipwreck here in 60 AD, as in Acts 27–28.",
        "They wanted the Catacombs of St Paul in Rabat.",
        "They spoke of the Knights Hospitaller and the 1565 Great Siege.",
      ],
      secular: [
        "They were flying to the island capital at the Mediterranean's crossroads.",
        "They asked about the Grand Harbour and the Valletta bastions.",
        "They mentioned Mdina — the silent city, the old capital.",
        "They wanted a boat to the Blue Grotto on the southern coast.",
        "They spoke of the Ħal Saflieni Hypogeum — a prehistoric underground temple.",
      ],
    },
  },
  tunis: {
    name: "Tunis, Tunisia",
    flag: "🇹🇳",
    flavor: "The Medina tangles past Ottoman mosques. Carthage crumbles gently into the Gulf.",
    witnesses: {
      catholic: ["a priest at St Vincent de Paul Cathedral", "a Bardo Museum guide", "a taxi driver on Avenue Bourguiba"],
      secular: ["a Bardo Museum guide", "a Medina souq trader", "a taxi driver on Avenue Bourguiba"],
    },
    hints: {
      catholic: [
        "They were flying to Tunisia's capital — a small Catholic community under the Archdiocese of Tunis.",
        "They asked about the Cathedral of St Vincent de Paul on Habib Bourguiba Avenue.",
        "They mentioned the ruins of Carthage — seat of the early African Church of Tertullian and Cyprian.",
        "They wanted the Primatial Basilica of Our Lady of Carthage on Byrsa Hill.",
        "They spoke of Saint Monica, mother of Saint Augustine, who lived in Carthage.",
      ],
      secular: [
        "They were flying to Tunisia's capital on the Gulf of Tunis.",
        "They asked about the Bardo National Museum and its Roman mosaics.",
        "They mentioned the ruins of Carthage and the Baths of Antoninus.",
        "They wanted the Medina — the UNESCO-listed old souq.",
        "They spoke of Sidi Bou Said, the blue-and-white village on the hill.",
      ],
    },
  },
  tripoli: {
    name: "Tripoli, Libya",
    flag: "🇱🇾",
    flavor: "The Red Castle looms above the Mediterranean corniche. Italian colonial arcades line the streets.",
    witnesses: {
      catholic: ["a Franciscan at St Francis Church", "a Medina trader", "a taxi driver near Red Square"],
      secular: ["a Red Castle Museum guide", "a Medina trader", "a taxi driver near Red Square"],
    },
    hints: {
      catholic: [
        "They were flying to Libya's capital — a tiny Catholic minority under the Apostolic Vicariate.",
        "They asked after the Franciscan-served St Francis Church downtown.",
        "They mentioned the former Italian-era Our Lady of the Rosary cathedral.",
        "They wanted to see the Franciscans who have served Tripoli for a century.",
        "They spoke of the 2014 relocation of most Catholics during the civil war.",
      ],
      secular: [
        "They were flying to Libya's capital on the Mediterranean.",
        "They asked about Leptis Magna — Roman ruins two hours east.",
        "They mentioned the old Italian-era architecture in the city centre.",
        "They wanted the Red Castle Museum in the Medina.",
        "They spoke of Sabratha's Roman theatre west along the coast.",
      ],
    },
  },
  beirut: {
    name: "Beirut, Lebanon",
    flag: "🇱🇧",
    flavor: "A pine-lined corniche faces the Mediterranean. Reconstruction cranes still stand over the port.",
    witnesses: {
      catholic: ["a Maronite priest at St Elijah's", "a corniche vendor", "a taxi driver in Hamra"],
      secular: ["a National Museum docent", "a corniche vendor", "a taxi driver in Hamra"],
    },
    hints: {
      catholic: [
        "They were flying to Lebanon's capital — Maronite Catholics make up a third of the country.",
        "They asked about the Maronite Cathedral of St Elijah downtown.",
        "They mentioned Saint Charbel's shrine in Annaya, a short drive north.",
        "They wanted Our Lady of Harissa — the twenty-tonne bronze above Jounieh Bay.",
        "They spoke of the Mar Mikhael and Gemmayze churches in the rebuilt quarters.",
      ],
      secular: [
        "They were flying to Lebanon's capital on the Mediterranean.",
        "They asked about the 2020 port explosion reconstruction.",
        "They mentioned the National Museum's Phoenician sarcophagi.",
        "They wanted a day trip to Byblos, one of the oldest inhabited towns.",
        "They spoke of Hamra street cafés and the corniche at sunset.",
      ],
    },
  },
  axum: {
    name: "Axum, Ethiopia",
    flag: "🇪🇹",
    flavor:
      "Ancient stelae rise from the dry plateau. Goats pick between granite obelisks older than Rome's empire.",
    witnesses: {
      catholic: [
        "a deacon at St Mary of Zion",
        "a guide at the stelae field",
        "a shiro cook in the market",
      ],
      secular: [
        "a UNESCO site guide",
        "a guide at the stelae field",
        "a shiro cook in the market",
      ],
    },
    hints: {
      catholic: [
        "They were flying to the ancient Ethiopian capital — where the Ark of the Covenant is said to rest.",
        "They asked about St Mary of Zion and the Chapel of the Tablet beside it.",
        "They mentioned the Kingdom of Aksum — one of the earliest Christian states, fourth century.",
        "They wanted the stone obelisks of Aksum towering since Late Antiquity.",
        "They spoke of the Nine Saints — sixth-century missionaries who shaped Ethiopian Christianity.",
      ],
      secular: [
        "They were flying to an ancient Ethiopian city founded before the third century.",
        "They asked about the towering granite stelae — a UNESCO World Heritage site.",
        "They mentioned the ruins of the palace said to be the Queen of Sheba's.",
        "They wanted the place where the Kingdom of Aksum minted its own coins in gold.",
        "They spoke of the tombs of King Kaleb and King Gebre Meskel above the town.",
      ],
    },
  },
  moscow: {
    name: "Moscow, Russia",
    flag: "🇷🇺",
    flavor: "Onion domes rise above Red Square. The Moskva winds past Stalin-era skyscrapers.",
    witnesses: {
      catholic: ["a priest at the Cathedral of the Immaculate Conception", "a Red Square vendor", "a taxi driver near the Kremlin"],
      secular: ["a Bolshoi box-office clerk", "a Red Square vendor", "a taxi driver near the Kremlin"],
    },
    hints: {
      catholic: [
        "They were flying to the Russian capital — a small Catholic minority but a functioning cathedral.",
        "They asked after the Cathedral of the Immaculate Conception, Russia's largest Catholic church.",
        "They mentioned an icon of Our Lady of Częstochowa on loan from Poland.",
        "They wanted the Polish-language and Latin Mass schedule.",
        "They spoke of the 2016 meeting of Pope Francis and Patriarch Kirill.",
      ],
      secular: [
        "They were flying to the Russian capital on the Moskva river.",
        "They asked about Red Square and St Basil's onion domes.",
        "They mentioned the Kremlin Armoury and its Fabergé eggs.",
        "They wanted an evening at the Bolshoi.",
        "They spoke of the Moscow Metro's marble palaces at Komsomolskaya.",
      ],
    },
  },
  st_petersburg: {
    name: "St Petersburg, Russia",
    flag: "🇷🇺",
    flavor: "The Hermitage stretches along the Neva. Summer nights never quite darken.",
    witnesses: {
      catholic: ["a priest at St Catherine's Catholic Church", "a Hermitage guard", "a bridge operator on the Neva"],
      secular: ["a Hermitage tour guide", "a Mariinsky usher", "a bridge operator on the Neva"],
    },
    hints: {
      catholic: [
        "They were flying to Russia's imperial capital — built by Peter the Great.",
        "They asked after St Catherine's Catholic Church on Nevsky Prospekt.",
        "They mentioned Blessed Leonid Feodorov, Russian Greek Catholic Exarch beatified in 2001.",
        "They wanted the small Catholic parish's chapel hidden behind the facade.",
        "They spoke of Polish exiles who kept the Mass alive in the Siberian beyond.",
      ],
      secular: [
        "They were flying to Russia's northern capital on the Neva.",
        "They asked about the Hermitage's four million artworks in a former palace.",
        "They mentioned the Bronze Horseman and the Winter Palace.",
        "They wanted a White Nights stroll at the summer solstice.",
        "They spoke of the Fabergé Museum and the Shuvalov Palace.",
      ],
    },
  },
  kyiv: {
    name: "Kyiv, Ukraine",
    flag: "🇺🇦",
    flavor: "Gold domes glint above the Dnipro. Chestnut blossoms line the boulevards each May.",
    witnesses: {
      catholic: ["a priest at St Nicholas Cathedral", "a Khreshchatyk street vendor", "a babushka selling flowers"],
      secular: ["a Kyiv Pechersk Lavra guide", "a Khreshchatyk street vendor", "a babushka selling flowers"],
    },
    hints: {
      catholic: [
        "They were flying to the Ukrainian capital on the Dnipro.",
        "They asked after St Nicholas — the Roman Catholic cathedral of Kyiv.",
        "They mentioned the Ukrainian Greek Catholic Church, whose patriarch has his see in Kyiv.",
        "They wanted the modern Cathedral of the Resurrection of Christ.",
        "They spoke of the Pechersk Lavra catacombs — early Kyivan saints interred beneath.",
      ],
      secular: [
        "They were flying to the Ukrainian capital on the Dnipro.",
        "They asked about Maidan Nezalezhnosti and the Revolution of Dignity.",
        "They mentioned the gold-domed St Sophia's Cathedral.",
        "They wanted the Motherland Monument and a Chernobyl-zone day trip.",
        "They spoke of borsch and horilka in a Podil cellar tavern.",
      ],
    },
  },
  lviv: {
    name: "Lviv, Ukraine",
    flag: "🇺🇦",
    flavor: "Habsburg-era cafés spill onto Rynok Square. Tram bells ring under baroque towers.",
    witnesses: {
      catholic: ["a priest at the Latin Cathedral", "a chocolate-shop clerk on Virmenska", "a tram operator on Rynok"],
      secular: ["an Opera House usher", "a chocolate-shop clerk on Virmenska", "a tram operator on Rynok"],
    },
    hints: {
      catholic: [
        "They were flying to Western Ukraine's historic capital — Ukrainian Greek Catholic heartland.",
        "They asked about the Latin Cathedral of Lviv on Rynok Square.",
        "They mentioned Andrey Sheptytsky, twentieth-century Greek Catholic metropolitan.",
        "They wanted the Dominican Church and its Rococo interior.",
        "They spoke of St George's Cathedral, seat of the Ukrainian Greek Catholic patriarchate.",
      ],
      secular: [
        "They were flying to Western Ukraine's cultural capital near the Polish border.",
        "They asked about Rynok Square and its Habsburg-era cafés.",
        "They mentioned the Armenian Quarter and the Opera House.",
        "They wanted Lychakiv Cemetery and its baroque stone angels.",
        "They spoke of chocolate shops and coffeehouses on Virmenska Street.",
      ],
    },
  },
  beijing: {
    name: "Beijing, China",
    flag: "🇨🇳",
    flavor: "Ring roads loop around the Forbidden City. Smog and skyline alternate with the seasons.",
    witnesses: {
      catholic: ["a deacon at Nantang Cathedral", "a Tsinghua University student", "a taxi driver in Xicheng"],
      secular: ["a Forbidden City guide", "a Tsinghua University student", "a taxi driver in Xicheng"],
    },
    hints: {
      catholic: [
        "They were flying to China's capital — home to both the underground and the official Church.",
        "They asked after the Cathedral of the Immaculate Conception, known as Nantang.",
        "They mentioned Matteo Ricci, the Jesuit who arrived at the imperial court in 1601.",
        "They wanted the Zhalan Cemetery where Ricci is buried.",
        "They spoke of the 2018 provisional agreement between the Holy See and Beijing.",
      ],
      secular: [
        "They were flying to China's capital, ringed by a dozen ring roads.",
        "They asked about Tiananmen Square and the Forbidden City.",
        "They mentioned the Great Wall at Mutianyu an hour north.",
        "They wanted Peking duck at Quanjude and the Houhai hutongs.",
        "They spoke of the 2008 Bird's Nest Olympic stadium.",
      ],
    },
  },
  shanghai: {
    name: "Shanghai, China",
    flag: "🇨🇳",
    flavor: "Pudong's towers stare across the Huangpu at the Bund's colonial stone.",
    witnesses: {
      catholic: ["a priest at St Ignatius Cathedral in Xujiahui", "a xiao long bao server in Xintiandi", "a Bund riverboat operator"],
      secular: ["a Bund riverboat operator", "a xiao long bao server in Xintiandi", "a Pudong skyscraper guide"],
    },
    hints: {
      catholic: [
        "They were flying to China's financial capital — home to historic Jesuit institutions.",
        "They asked about St Ignatius Cathedral in Xujiahui.",
        "They mentioned Fudan University's Jesuit founding in 1905 as Aurora University.",
        "They wanted the Sheshan Basilica pilgrimage site south of the city.",
        "They spoke of Xu Guangqi, the convert who collaborated with Matteo Ricci.",
      ],
      secular: [
        "They were flying to China's financial capital at the Yangtze's mouth.",
        "They asked about the Bund and Pudong's futuristic skyline.",
        "They mentioned the Shanghai Tower — second-tallest in the world.",
        "They wanted xiao long bao at Din Tai Fung in Xintiandi.",
        "They spoke of the maglev to the airport hitting 430 km/h.",
      ],
    },
  },
  macau: {
    name: "Macau, China SAR",
    flag: "🇲🇴",
    flavor: "Portuguese paving stones wind past neon casino towers. Cotai crosses a lagoon to Taipa.",
    witnesses: {
      catholic: ["a guide at St Paul's Ruins", "a pastel de nata baker in Coloane", "a taxi driver on the Cotai Strip"],
      secular: ["a guide at St Paul's Ruins", "a pastel de nata baker in Coloane", "a taxi driver on the Cotai Strip"],
    },
    hints: {
      catholic: [
        "They were flying to the former Portuguese enclave on China's southern coast.",
        "They asked about the ruins of St Paul's — the facade still standing after the 1835 fire.",
        "They mentioned the Diocese of Macau, oldest in the Far East, founded in 1576.",
        "They wanted the Chapel of Our Lady of Penha on the hill.",
        "They spoke of the A-Ma Temple and the Madre de Deus church.",
      ],
      secular: [
        "They were flying to the former Portuguese enclave now famous for casinos.",
        "They asked about the ruins of St Paul's and the steps at the top of the square.",
        "They mentioned Senado Square and its Portuguese paving stones.",
        "They wanted a pastel de nata from Lord Stow's in Coloane.",
        "They spoke of the Cotai Strip's gaming revenue — larger than Las Vegas.",
      ],
    },
  },
  vilnius: {
    name: "Vilnius, Lithuania",
    flag: "🇱🇹",
    flavor:
      "Baroque domes and twisting cobbled streets above the Neris. The Gates of Dawn look down on pilgrims below.",
    witnesses: {
      catholic: [
        "a sacristan at the Gate of Dawn",
        "a cathedral usher at St. Stanislaus",
        "a cepelinai cook in Užupis",
      ],
      secular: [
        "a guide at Gediminas Tower",
        "a Užupis poet slash painter",
        "a cepelinai cook in Užupis",
      ],
    },
    hints: {
      catholic: [
        "They were bound for the Baltic capital of the Gate of Dawn Madonna.",
        "They asked where Sr. Faustina first saw the Divine Mercy image painted in 1934.",
        "They mentioned St. Casimir, the country's patron, and the side chapel in the cathedral bearing his name.",
        "They wanted to see the Hill of Three Crosses at dawn.",
      ],
      secular: [
        "They were flying to Lithuania's capital on the Neris.",
        "They asked about the baroque Old Town — a UNESCO World Heritage site.",
        "They wanted Gediminas Tower and the Hill of Three Crosses at sunset.",
        "They mentioned Užupis — the self-declared artists' republic across the Vilnelė river.",
      ],
    },
  },
  ottawa: {
    name: "Ottawa, Canada",
    flag: "🇨🇦",
    flavor: "The Rideau Canal runs between Parliament's copper roofs. Beavertails steam on Sparks Street in winter.",
    witnesses: {
      catholic: ["a sacristan at Notre Dame Cathedral Basilica", "a ByWard Market vendor", "an OC Transpo driver on Rideau"],
      secular: ["a Parliament tour guide", "a ByWard Market vendor", "an OC Transpo driver on Rideau"],
    },
    hints: {
      catholic: [
        "They were flying to Canada's capital on the Ottawa River.",
        "They asked about Notre Dame Cathedral Basilica, the oldest standing church in Ottawa.",
        "They mentioned Saint Kateri Tekakwitha, first Indigenous North American saint.",
        "They wanted the Canadian Martyrs' Shrine in Midland, three hours southwest.",
        "They spoke of Blessed Marie of the Incarnation, Ursuline founder in New France.",
      ],
      secular: [
        "They were flying to Canada's capital on the Ottawa River.",
        "They asked about Parliament Hill and the Peace Tower.",
        "They mentioned the Rideau Canal — a skating rink in winter.",
        "They wanted the ByWard Market and a beavertail pastry.",
        "They spoke of the National Gallery and the Group of Seven collection.",
      ],
    },
  },
  montreal: {
    name: "Montreal, Canada",
    flag: "🇨🇦",
    flavor: "French church bells ring across Mount Royal. Bagels and smoked meat scent the air of the Plateau.",
    witnesses: {
      catholic: ["a priest at Notre-Dame Basilica", "a Schwartz's deli counterman", "a Montréal Métro operator at Berri-UQAM"],
      secular: ["a guide at Mount Royal lookout", "a Schwartz's deli counterman", "a Montréal Métro operator at Berri-UQAM"],
    },
    hints: {
      catholic: [
        "They were flying to Quebec's largest city on the St. Lawrence.",
        "They asked about St. Joseph's Oratory, the world's largest shrine to Saint Joseph.",
        "They mentioned Saint André Bessette, the Oratory's doorkeeper canonized in 2010.",
        "They wanted Notre-Dame Basilica in Old Montreal.",
        "They spoke of Saint Marguerite Bourgeoys and the Congregation of Notre-Dame.",
      ],
      secular: [
        "They were flying to Quebec's largest city on the St. Lawrence.",
        "They asked about Old Montreal's cobblestones and Bonsecours Market.",
        "They mentioned Mount Royal Park, landscaped by Frederick Law Olmsted.",
        "They wanted smoked meat at Schwartz's.",
        "They spoke of the 1967 World's Fair Biosphere — a geodesic dome.",
      ],
    },
  },
  wellington: {
    name: "Wellington, New Zealand",
    flag: "🇳🇿",
    flavor: "Steep suburbs crowd above a deep-water harbour. The Cable Car climbs to a botanic garden over the bay.",
    witnesses: {
      catholic: ["a sacristan at Sacred Heart Cathedral", "a waterfront café owner in Te Aro", "a Cable Car operator"],
      secular: ["a Te Papa museum guide", "a waterfront café owner in Te Aro", "a Cable Car operator"],
    },
    hints: {
      catholic: [
        "They were flying to New Zealand's capital on Te Whanganui-a-Tara harbour.",
        "They asked after Sacred Heart Cathedral on Hill Street.",
        "They mentioned Venerable Suzanne Aubert, founder of the Sisters of Compassion.",
        "They wanted the Catholic Marist missions of the Hokianga.",
        "They spoke of St. Mary of the Angels on Boulcott Street.",
      ],
      secular: [
        "They were flying to the capital at the southern end of the North Island.",
        "They asked about Te Papa — the national museum on the waterfront.",
        "They mentioned the Wellington Cable Car up to the botanic garden.",
        "They wanted the Zealandia nature sanctuary.",
        "They spoke of Weta Workshop tours and The Lord of the Rings film locations.",
      ],
    },
  },
  longyearbyen: {
    name: "Longyearbyen, Svalbard",
    flag: "🇸🇯",
    flavor: "The world's northernmost town. Polar-bear warning signs mark the edge of the inhabited zone.",
    witnesses: {
      catholic: ["a Svalbard Church caretaker", "a coal-mine museum guide", "a snowmobile tour operator"],
      secular: ["a Global Seed Vault scientist", "a coal-mine museum guide", "a snowmobile tour operator"],
    },
    hints: {
      catholic: [
        "They were flying to the world's northernmost town, halfway to the pole.",
        "They asked about Svalbard Church — Lutheran, the archipelago's only church.",
        "They mentioned that the nearest Catholic Mass is an occasional visiting priest from Tromsø.",
        "They wanted to stand above 78 degrees north.",
        "They spoke of polar night, when no Mass is said under the open sky.",
      ],
      secular: [
        "They were flying to the northernmost town on earth at 78°N.",
        "They asked about the Global Seed Vault carved into the permafrost.",
        "They mentioned reindeer and polar bears outnumbering humans.",
        "They wanted the four-month polar night — or the four-month midnight sun.",
        "They spoke of the 1920 Svalbard Treaty and the coal-mining legacy.",
      ],
    },
  },
  port_moresby: {
    name: "Port Moresby, Papua New Guinea",
    flag: "🇵🇬",
    flavor: "The Gulf of Papua slides along a coast of stilt villages. Highland clans descend for markets at Gordons.",
    witnesses: {
      catholic: ["a sacristan at the Cathedral of the Sacred Heart", "a National Museum docent", "a PMV bus driver"],
      secular: ["a Kokoda Track guide", "a National Museum docent", "a PMV bus driver"],
    },
    hints: {
      catholic: [
        "They were flying to PNG's capital on the Gulf of Papua.",
        "They asked after the Cathedral of the Sacred Heart in Port Moresby.",
        "They mentioned Blessed Peter To Rot, PNG's first beatified martyr.",
        "They wanted to see the Catholic mission legacy — millions of faithful nationwide.",
        "They spoke of Pope Francis's 2024 visit to Papua New Guinea.",
      ],
      secular: [
        "They were flying to PNG's capital on the Gulf of Papua.",
        "They asked about the National Museum and its Sepik masks.",
        "They mentioned the Kokoda Track — the WWII trail across the Owen Stanleys.",
        "They wanted to see Parliament Haus with its Spirit House design.",
        "They spoke of the 800-plus languages spoken across the country.",
      ],
    },
  },
  vaduz: {
    name: "Vaduz, Liechtenstein",
    flag: "🇱🇮",
    flavor: "A prince's castle on a ridge. Five thousand residents watch the Rhine flow toward Lake Constance.",
    witnesses: {
      catholic: ["a sacristan at St. Florin's Cathedral", "a postage-stamp collector in town", "a taxi driver on Städtle"],
      secular: ["a Vaduz Castle guide", "a postage-stamp collector in town", "a taxi driver on Städtle"],
    },
    hints: {
      catholic: [
        "They were flying to the capital of Liechtenstein — 75% Catholic.",
        "They asked after the Cathedral of St. Florin, the country's only cathedral.",
        "They mentioned the Archdiocese of Vaduz, elevated in 1997.",
        "They wanted the Wallfahrtskirche in Schellenberg — a Marian pilgrimage site.",
        "They spoke of Saint Lucius, patron of Liechtenstein and Chur.",
      ],
      secular: [
        "They were flying to the capital of Liechtenstein — 5,500 residents above the Rhine.",
        "They asked about Vaduz Castle — the Prince's private residence.",
        "They mentioned the postage-stamp museum, the country's signature export.",
        "They wanted a day trip to the ski slopes at Malbun.",
        "They spoke of wine tasting in the Prince's own vineyards.",
      ],
    },
  },
  vienna: {
    name: "Vienna, Austria",
    flag: "🇦🇹",
    flavor: "Stephansdom's Gothic spire needles the sky. Coffeehouse tables spill from the Ringstrasse in every season.",
    witnesses: {
      catholic: ["a verger at Stephansdom", "a Sachertorte chef at Hotel Sacher", "a Wiener Philharmoniker usher"],
      secular: ["a Schönbrunn tour guide", "a Sachertorte chef at Hotel Sacher", "a Wiener Philharmoniker usher"],
    },
    hints: {
      catholic: [
        "They were flying to the former Habsburg capital on the Danube.",
        "They asked about Stephansdom — Vienna's Gothic cathedral.",
        "They mentioned Karl I of Austria, last Habsburg emperor, beatified in 2004.",
        "They wanted the Imperial Crypt with 149 Habsburg burials.",
        "They spoke of Saint Clemens Maria Hofbauer, patron of Vienna.",
      ],
      secular: [
        "They were flying to the former Habsburg capital on the Danube.",
        "They asked about Schönbrunn Palace and its gardens.",
        "They mentioned Klimt's Kiss at the Belvedere and Schiele's oeuvre.",
        "They wanted a Sachertorte at Hotel Sacher.",
        "They spoke of the Vienna Philharmonic's New Year's Concert.",
      ],
    },
  },
  amsterdam: {
    name: "Amsterdam, Netherlands",
    flag: "🇳🇱",
    flavor: "A semicircle of 17th-century canals. Bikes triple the number of cars on every bridge.",
    witnesses: {
      catholic: ["a priest at St. Nicholas Basilica", "a stroopwafel vendor at Albert Cuyp", "a canal-boat captain"],
      secular: ["a Rijksmuseum docent", "a stroopwafel vendor at Albert Cuyp", "a canal-boat captain"],
    },
    hints: {
      catholic: [
        "They were flying to the Dutch capital on its semicircle of 17th-century canals.",
        "They asked after St. Nicholas Basilica opposite the Central Station.",
        "They mentioned Our Lord in the Attic — a clandestine Catholic church from 1663.",
        "They wanted the annual Silent Walk commemorating the Miracle of Amsterdam.",
        "They spoke of Titus Brandsma, Dutch Carmelite martyr canonized in 2022.",
      ],
      secular: [
        "They were flying to the Dutch capital on its canals.",
        "They asked about the Van Gogh Museum and the Rijksmuseum.",
        "They mentioned Anne Frank House in the Jordaan quarter.",
        "They wanted stroopwafels at Albert Cuyp market.",
        "They spoke of 800,000 bikes sharing streets with 900,000 people.",
      ],
    },
  },
  prague: {
    name: "Prague, Czech Republic",
    flag: "🇨🇿",
    flavor: "The Vltava loops past red roofs. Charles Bridge statues watch pilgrims cross at dawn.",
    witnesses: {
      catholic: ["a sacristan at Our Lady Victorious", "a Pilsner vendor near Old Town Square", "a Charles Bridge busker"],
      secular: ["an Astronomical Clock guide", "a Pilsner vendor near Old Town Square", "a Charles Bridge busker"],
    },
    hints: {
      catholic: [
        "They were flying to the Bohemian capital on the Vltava.",
        "They asked about the Infant Jesus of Prague at Our Lady Victorious.",
        "They mentioned Saint John of Nepomuk, patron of silence under torture.",
        "They wanted St. Vitus Cathedral inside Prague Castle.",
        "They spoke of Saint Agnes of Bohemia, canonized in 1989.",
      ],
      secular: [
        "They were flying to the Bohemian capital on the Vltava.",
        "They asked about the Astronomical Clock — medieval figures strike the hour.",
        "They mentioned Franz Kafka's haunts in the Jewish Quarter.",
        "They wanted a Charles Bridge sunset with the castle behind.",
        "They spoke of the 1989 Velvet Revolution in Wenceslas Square.",
      ],
    },
  },
  budapest: {
    name: "Budapest, Hungary",
    flag: "🇭🇺",
    flavor: "Buda's hills face Pest's grand avenues across the Danube. Thermal baths steam at dawn.",
    witnesses: {
      catholic: ["a verger at St. Stephen's Basilica", "a Széchenyi baths attendant", "a tram operator on the 2"],
      secular: ["a Fisherman's Bastion guide", "a Széchenyi baths attendant", "a tram operator on the 2"],
    },
    hints: {
      catholic: [
        "They were flying to the Hungarian capital on the Danube.",
        "They asked after St. Stephen's Basilica and the saint-king's incorrupt right hand.",
        "They mentioned Saint Stephen of Hungary, founder of the Christian kingdom.",
        "They wanted the Holy Right procession on August 20.",
        "They spoke of the Pauline Fathers — Hungary's native order — and their Mariazell link.",
      ],
      secular: [
        "They were flying to the Hungarian capital straddling the Danube.",
        "They asked about the Parliament — Hungary's largest building.",
        "They mentioned Széchenyi thermal baths and the ruin bars of District VII.",
        "They wanted a Fisherman's Bastion sunset over Pest.",
        "They spoke of goulash, pörkölt, and Tokaj wines.",
      ],
    },
  },
  warsaw: {
    name: "Warsaw, Poland",
    flag: "🇵🇱",
    flavor: "Stalinist towers and rebuilt baroque squares share the skyline. Chopin plays in free parks each Sunday.",
    witnesses: {
      catholic: ["a priest at St. John's Archcathedral", "a pierogi vendor in Old Town", "a tram operator on Nowy Świat"],
      secular: ["a Warsaw Uprising Museum guide", "a pierogi vendor in Old Town", "a tram operator on Nowy Świat"],
    },
    hints: {
      catholic: [
        "They were flying to Poland's capital on the Vistula.",
        "They asked about the Temple of Divine Providence in Wilanów.",
        "They mentioned Blessed Jerzy Popiełuszko, Solidarity chaplain martyred in 1984.",
        "They wanted St. John's Archcathedral in the rebuilt Old Town.",
        "They spoke of Chopin's heart preserved in a pillar of the Holy Cross Church.",
      ],
      secular: [
        "They were flying to Poland's capital on the Vistula.",
        "They asked about the rebuilt Old Town — reconstructed from 1940s rubble.",
        "They mentioned the Warsaw Uprising Museum.",
        "They wanted pierogi at Pod Samsonem.",
        "They spoke of the Palace of Culture and Science — Stalin's uninvited gift.",
      ],
    },
  },
  reykjavik: {
    name: "Reykjavik, Iceland",
    flag: "🇮🇸",
    flavor: "Basalt columns of Hallgrímskirkja rise over pastel rooftops. Northern lights dance in winter skies.",
    witnesses: {
      catholic: ["a sacristan at Christ the King Cathedral", "a Hallgrímskirkja organist", "a taxi driver on Laugavegur"],
      secular: ["a Blue Lagoon attendant", "a Hallgrímskirkja organist", "a taxi driver on Laugavegur"],
    },
    hints: {
      catholic: [
        "They were flying to Iceland's capital — a tiny Catholic minority in a Lutheran country.",
        "They asked after the Cathedral of Christ the King, consecrated in 1929.",
        "They mentioned the Benedictine nuns of Sóleyjargata.",
        "They wanted to see where Pope John Paul II visited Iceland in 1989.",
        "They spoke of pre-Reformation Catholic bishops at Skálholt.",
      ],
      secular: [
        "They were flying to Iceland's capital — the world's northernmost.",
        "They asked about the Blue Lagoon geothermal spa.",
        "They mentioned Hallgrímskirkja — the basalt-column Lutheran cathedral.",
        "They wanted a Golden Circle tour to Geysir and Gullfoss.",
        "They spoke of Northern Lights seen from Perlan on winter nights.",
      ],
    },
  },
  bogota: {
    name: "Bogotá, Colombia",
    flag: "🇨🇴",
    flavor: "The Andean high plain tilts toward Monserrate. Eternal spring settles over cobbled La Candelaria.",
    witnesses: {
      catholic: ["a sacristan at the Catedral Primada", "an arepa vendor in La Candelaria", "a TransMilenio driver"],
      secular: ["a Gold Museum docent", "an arepa vendor in La Candelaria", "a TransMilenio driver"],
    },
    hints: {
      catholic: [
        "They were flying to Colombia's capital on an Andean high plain at 2,640 m.",
        "They asked about the Cathedral of Bogotá on Plaza de Bolívar.",
        "They mentioned Saint Peter Claver, Jesuit 'slave of the slaves' in Cartagena.",
        "They wanted Monserrate and its church of the Fallen Christ.",
        "They spoke of the Salt Cathedral of Zipaquirá — an underground pilgrimage site.",
      ],
      secular: [
        "They were flying to Colombia's capital high in the Andes.",
        "They asked about the Gold Museum and its Muisca collection.",
        "They mentioned La Candelaria — the cobblestone colonial quarter.",
        "They wanted to ride the Monserrate funicular at sunset.",
        "They spoke of ajiaco stew and Juan Valdez coffee.",
      ],
    },
  },
  quito: {
    name: "Quito, Ecuador",
    flag: "🇪🇨",
    flavor: "UNESCO-listed colonial churches crowd the old centre. Pichincha volcano looms straight overhead.",
    witnesses: {
      catholic: ["a sacristan at La Compañía", "a locro chef at the Mercado Central", "a Trolebús operator"],
      secular: ["a TelefériQo operator", "a locro chef at the Mercado Central", "a Trolebús operator"],
    },
    hints: {
      catholic: [
        "They were flying to Ecuador's capital in the Andes, almost on the equator.",
        "They asked about La Compañía — the gilded Jesuit church.",
        "They mentioned Saint Mariana de Jesús de Paredes, patron of Ecuador.",
        "They wanted the Basílica del Voto Nacional with its iguana gargoyles.",
        "They spoke of Saint Hermano Miguel, Ecuador's second canonized saint.",
      ],
      secular: [
        "They were flying to Ecuador's capital in the Andes, 2,850 m high.",
        "They asked about the UNESCO-listed colonial centre — the first World Heritage site ever.",
        "They mentioned La Mitad del Mundo — the equator monument outside town.",
        "They wanted the TelefériQo up Pichincha.",
        "They spoke of Otavalo market a couple of hours north.",
      ],
    },
  },
  la_paz: {
    name: "La Paz, Bolivia",
    flag: "🇧🇴",
    flavor: "A canyon city ringed by the Altiplano. Red roofs tumble between cable-car stations in the thin air.",
    witnesses: {
      catholic: ["a priest at the Cathedral of La Paz", "a Witches' Market vendor", "a teleférico operator"],
      secular: ["a Witches' Market vendor", "a teleférico operator", "a Death Road bike guide"],
    },
    hints: {
      catholic: [
        "They were flying to the world's highest capital — a canyon city in the Andes.",
        "They asked about the Cathedral of La Paz on Plaza Murillo.",
        "They mentioned Our Lady of Copacabana, patroness of Bolivia.",
        "They wanted the Basilica of San Francisco — mestizo baroque.",
        "They spoke of the pilgrimage to Copacabana on Lake Titicaca.",
      ],
      secular: [
        "They were flying to the world's highest capital, 3,640 m above sea level.",
        "They asked about the teleféricos — aerial cable cars across the canyon city.",
        "They mentioned the Witches' Market and the llama fetuses on display.",
        "They wanted a Death Road bike descent.",
        "They spoke of Tiwanaku ruins a couple of hours away.",
      ],
    },
  },
  brasilia: {
    name: "Brasília, Brazil",
    flag: "🇧🇷",
    flavor: "Niemeyer's curves spread across an airplane-shaped plan. A concrete crown of thorns rises on the Eixo Monumental.",
    witnesses: {
      catholic: ["a verger at Brasília Cathedral", "a pastéis vendor in the Eixo Monumental", "a Metrô operator at Central"],
      secular: ["a Niemeyer architecture guide", "a pastéis vendor in the Eixo Monumental", "a Metrô operator at Central"],
    },
    hints: {
      catholic: [
        "They were flying to Brazil's planned modernist capital.",
        "They asked about Oscar Niemeyer's Cathedral of Brasília — 16 curved pillars.",
        "They mentioned the Don Bosco Sanctuary's twelve tonnes of blue stained glass.",
        "They wanted the archdiocesan see founded with the city in 1960.",
        "They spoke of the Eucharistic tabernacle at the Praça dos Três Poderes.",
      ],
      secular: [
        "They were flying to Brazil's planned modernist capital — built in 41 months from 1956.",
        "They asked about Lúcio Costa's airplane-shaped city plan.",
        "They mentioned the National Congress twin towers flanking a saucer and a bowl.",
        "They wanted to see the Palace of the Alvorada.",
        "They spoke of Niemeyer's curves across every superquadra.",
      ],
    },
  },
  addis_ababa: {
    name: "Addis Ababa, Ethiopia",
    flag: "🇪🇹",
    flavor: "Jacarandas bloom purple along the broad avenues. The African Union gleams beside eucalyptus groves.",
    witnesses: {
      catholic: ["a deacon at Holy Savior Cathedral", "a coffee-ceremony woman in Bole", "a Light Rail operator"],
      secular: ["a National Museum docent", "a coffee-ceremony woman in Bole", "a Light Rail operator"],
    },
    hints: {
      catholic: [
        "They were flying to Ethiopia's capital in the highlands, 2,355 m.",
        "They asked about Holy Savior Cathedral of the Ethiopian Catholic archeparchy.",
        "They mentioned Cardinal Berhaneyesus Souraphiel, Ethiopia's first cardinal.",
        "They wanted Medhane Alem Cathedral and its copper dome.",
        "They spoke of the Ethiopian Catholic Church in full communion with Rome.",
      ],
      secular: [
        "They were flying to Ethiopia's capital — Africa's political hub and AU headquarters.",
        "They asked about Meskel Square and the annual True Cross festival.",
        "They mentioned the National Museum and Lucy, the Australopithecus fossil.",
        "They wanted a coffee ceremony in the Bole district.",
        "They spoke of the Addis Ababa–Djibouti Railway.",
      ],
    },
  },
  accra: {
    name: "Accra, Ghana",
    flag: "🇬🇭",
    flavor: "The Gulf of Guinea breeze cools the fishing canoes at Jamestown. Kente stalls glow with orange and green.",
    witnesses: {
      catholic: ["a sacristan at Holy Spirit Cathedral", "a jollof cook on Osu Oxford Street", "a tro-tro driver"],
      secular: ["a Kwame Nkrumah Park guide", "a jollof cook on Osu Oxford Street", "a tro-tro driver"],
    },
    hints: {
      catholic: [
        "They were flying to Ghana's capital on the Gulf of Guinea.",
        "They asked about the Cathedral of the Holy Spirit in Ridge.",
        "They mentioned the Archdiocese of Accra, established in 1950.",
        "They wanted the Shrine of Our Lady of Africa in Akropong.",
        "They spoke of Pope John Paul II's 1980 Mass in the capital.",
      ],
      secular: [
        "They were flying to Ghana's capital on the Gulf of Guinea.",
        "They asked about Cape Coast Castle — the Door of No Return, three hours west.",
        "They mentioned Kwame Nkrumah's mausoleum at the Memorial Park.",
        "They wanted jollof rice and a Labadi Beach evening.",
        "They spoke of kente cloth weaving in the Bonwire workshops.",
      ],
    },
  },
  lagos: {
    name: "Lagos, Nigeria",
    flag: "🇳🇬",
    flavor: "Fifteen million on the Atlantic lagoon. Afrobeats spill from every danfo bus in the rush.",
    witnesses: {
      catholic: ["a sacristan at Holy Cross Cathedral", "a jollof cook in Ikoyi", "an okada motorcycle taxi driver"],
      secular: ["a Nike Gallery guide", "a jollof cook in Ikoyi", "an okada motorcycle taxi driver"],
    },
    hints: {
      catholic: [
        "They were flying to Nigeria's largest city, fifteen million on the Atlantic coast.",
        "They asked about Holy Cross Cathedral on Lagos Island.",
        "They mentioned Blessed Cyprian Michael Iwene Tansi, beatified in 1998.",
        "They wanted the Shrine of Our Lady of Lourdes in Ikoyi.",
        "They spoke of Cardinal Alfred Adewale Martins, Archbishop of Lagos.",
      ],
      secular: [
        "They were flying to Nigeria's largest city on the Atlantic lagoon.",
        "They asked about Nike Art Gallery in Lekki — 8,000 works on five floors.",
        "They mentioned the jollof wars with Senegal and Ghana.",
        "They wanted an Afrobeats show near Tafawa Balewa Square.",
        "They spoke of the Lekki Conservation Centre's canopy walkway.",
      ],
    },
  },
  marrakech: {
    name: "Marrakech, Morocco",
    flag: "🇲🇦",
    flavor: "Red-earth walls enclose a labyrinth of souks. Snake charmers and storytellers fill Jemaa el-Fnaa at dusk.",
    witnesses: {
      catholic: ["a Franciscan at Saints Martyrs' Church", "a souk spice merchant", "a calèche driver in the medina"],
      secular: ["a Jardin Majorelle guide", "a souk spice merchant", "a calèche driver in the medina"],
    },
    hints: {
      catholic: [
        "They were flying to Morocco's red-walled imperial city.",
        "They asked after the Church of the Saints Martyrs — named for 13th-century Franciscan missionaries.",
        "They mentioned Morocco's small Catholic minority served by the Archdiocese of Rabat.",
        "They wanted to see where Pope Francis visited Morocco in 2019.",
        "They spoke of Blessed Ramón Llull, Franciscan missionary to North Africa.",
      ],
      secular: [
        "They were flying to Morocco's imperial red city.",
        "They asked about Jemaa el-Fnaa square and its dusk carnival.",
        "They mentioned the Majorelle Garden and Yves Saint Laurent's villa.",
        "They wanted a day wandering the souks of the medina.",
        "They spoke of tagine cooking classes and mint tea in the Atlas foothills.",
      ],
    },
  },
  johannesburg: {
    name: "Johannesburg, South Africa",
    flag: "🇿🇦",
    flavor: "Gold-rush bones carry a modern megacity a mile high. Vilakazi Street still echoes with Mandela's footsteps.",
    witnesses: {
      catholic: ["a sacristan at Christ the King Cathedral", "a Soweto tour guide", "a Gautrain conductor"],
      secular: ["an Apartheid Museum docent", "a Soweto tour guide", "a Gautrain conductor"],
    },
    hints: {
      catholic: [
        "They were flying to South Africa's largest city, 1,750 m high on the Witwatersrand.",
        "They asked after the Cathedral of Christ the King in the CBD.",
        "They mentioned Blessed Benedict Daswa, Limpopo catechist martyred in 1990.",
        "They wanted the Shrine of Our Lady of Fatima in Turffontein.",
        "They spoke of St. Benedict House of Studies, the Jesuit formation centre.",
      ],
      secular: [
        "They were flying to South Africa's largest city, 5.6 million on the Witwatersrand.",
        "They asked about the Apartheid Museum and Constitution Hill.",
        "They mentioned Nelson Mandela's Soweto house on Vilakazi Street.",
        "They wanted a Cradle of Humankind day trip to the Sterkfontein caves.",
        "They spoke of braai at a Soweto shebeen.",
      ],
    },
  },
};

const CITY_REGIONS = {
  rome: "europe", assisi: "europe", santiago: "europe", lisbon: "europe",
  fatima: "europe", krakow: "europe", lourdes: "europe", dublin: "europe",
  paris: "europe", istanbul: "europe", london: "europe", vilnius: "europe",
  kotor: "europe", sofia: "europe", moscow: "europe", st_petersburg: "europe",
  kyiv: "europe", lviv: "europe", valletta: "europe", cologne: "europe",
  barcelona: "europe", madrid: "europe", azores: "europe", zurich: "europe",
  vatican_city: "europe", san_marino: "europe", reggio_calabria: "europe",
  athens: "europe", thessaloniki: "europe", venice: "europe",
  vaduz: "europe", vienna: "europe", amsterdam: "europe", prague: "europe",
  budapest: "europe", warsaw: "europe", reykjavik: "europe",
  longyearbyen: "europe",
  goa: "asia", manila: "asia", jerusalem: "asia", tokyo: "asia",
  beijing: "asia", shanghai: "asia", macau: "asia", beirut: "asia",
  cairo: "africa", cape_town: "africa", dakar: "africa",
  nairobi: "africa", axum: "africa", tunis: "africa", tripoli: "africa",
  addis_ababa: "africa", accra: "africa", lagos: "africa",
  marrakech: "africa", johannesburg: "africa",
  mexico_city: "americas", new_york: "americas",
  buenos_aires: "americas", rio: "americas",
  montevideo: "americas", lima: "americas",
  santiago_chile: "americas", merida: "americas", galapagos: "americas",
  ottawa: "americas", montreal: "americas",
  bogota: "americas", quito: "americas", la_paz: "americas", brasilia: "americas",
  sydney: "oceania", wellington: "oceania", port_moresby: "oceania",
};

const TRAIT_KEYS = ["hair", "hobby", "vehicle", "feature"];
const TRAIT_LABELS = {
  hair: "Hair",
  hobby: "Hobby",
  vehicle: "Vehicle",
  feature: "Distinguishing feature",
};

const SUSPECTS = {
  moreau: {
    name: "Magdalena \"Maggie\" Moreau",
    title: "The Broker",
    pronouns: { subj: "she", obj: "her", poss: "her" },
    bio: "Franco-Canadian antiquities broker turned thief; moves stolen pieces through a Montréal front gallery.",
    traits: {
      hair: "red, shoulder length",
      hobby: "competitive correspondence chess",
      vehicle: "matte-black electric Peugeot e-3008",
      feature: "a small rose tattoo on the left wrist",
    },
    witnessTraits: {
      hair: "Their mane was titian — the hue of pennies — and it brushed the clavicle.",
      hobby: "They dispatched missives to distant confederates over a chequered board, trading knight for bishop.",
      vehicle: "They wheeled off in a silent Gallic crossover, slate-coloured, with a rampant lion badging the grille.",
      feature: "I spied a dark-inked corolla — no bigger than a shilling — etched upon their off-hand's underside.",
    },
  },
  voss: {
    name: "Henrik Voss",
    title: "The Curator",
    pronouns: { subj: "he", obj: "him", poss: "his" },
    bio: "Disgraced former chief curator of a Central European museum; now moves stolen pieces to collectors in the Gulf.",
    traits: {
      hair: "bald, with a short grey beard",
      hobby: "birdwatching (keeps an obsessive lifelist)",
      vehicle: "a vintage 1978 Vespa PX",
      feature: "a silver signet ring with a falcon crest, always worn",
    },
    witnessTraits: {
      hair: "The dome was bare save for a clipped smoky fringe at the jawline.",
      hobby: "They haunted groves with ocular scopes, ticking off every avian denizen observed.",
      vehicle: "They sputtered away on an aged transalpine motorbike — two-stroke, pale pastel.",
      feature: "I noted a wan metallic band upon their pinky, engraved with a raptor's visage.",
    },
  },
  riva: {
    name: "Carmela \"Carmen\" Riva",
    title: "The Palermitana",
    pronouns: { subj: "she", obj: "her", poss: "her" },
    bio: "Former Palermo gallery manager with deep family ties to the antique-smuggling networks of Sicily.",
    traits: {
      hair: "jet-black, worn in a tight bun",
      hobby: "an obsession with Verdi operas",
      vehicle: "a cream-colored classic Fiat 500",
      feature: "a thin scar above the left eyebrow",
    },
    witnessTraits: {
      hair: "Their tresses were obsidian-hued, bound into a chignon at the occiput.",
      hobby: "I heard them humming cavatinas — the composer of Rigoletto, sotto voce.",
      vehicle: "They drove a diminutive alabaster Italian runabout from the sixties — the jellybean-shaped kind.",
      feature: "A faint cicatrix traced the superciliary arch over one of their ocular sockets.",
    },
  },
  corvus: {
    name: "Dr. Silvan Corvus",
    title: "The Archivist",
    pronouns: { subj: "he", obj: "him", poss: "his" },
    bio: "Rogue antiquities historian, formerly senior fellow at the Bodleian; fugitive since the 2024 manuscripts scandal.",
    traits: {
      hair: "silver, neatly parted",
      hobby: "fly fishing for trout",
      vehicle: "a brand-new hydrogen Mercedes EQS",
      feature: "a walking stick with a raven-head handle",
    },
    witnessTraits: {
      hair: "Their crown was a helm of argent strands, always coiffed into a disciplined line.",
      hobby: "They stood thigh-deep in cold streams, whipping a slender rod and plumed lures at salmonids.",
      vehicle: "They arrived in a pristine Teutonic flagship berline — propelled, they claimed, by the lightest gas in the universe.",
      feature: "They bore a long ebon cane, its grip carved into a corvid — all pinions and beak.",
    },
  },
  duval: {
    name: "Dame Delphine Duval",
    title: "The Collector",
    pronouns: { subj: "she", obj: "her", poss: "her" },
    bio: "Monte-Carlo socialite who 'borrows' artifacts for her private gallery.",
    traits: {
      hair: "platinum blonde, cut in a sharp bob",
      hobby: "ballroom dancing (tango champion, 2023)",
      vehicle: "a 2026 electric Bentley limousine",
      feature: "emerald earrings, inherited",
    },
    witnessTraits: {
      hair: "Their locks were of a frost-flaxen hue, shorn level with the mandible.",
      hobby: "They collected victories in partnered footwork of Argentine pedigree — with a flower betwixt the teeth.",
      vehicle: "They occupied a mint-new British luxury carriage — hydrocarbon-free, long as a yacht, soundless.",
      feature: "A matched pair of verdant gemstones swung from their auricular lobules — bequeathed, they said, down the generations.",
    },
  },
  thorpe: {
    name: "Hermione \"Minnie\" Thorpe",
    title: "The Endurancer",
    pronouns: { subj: "she", obj: "her", poss: "her" },
    bio: "Former British rally champion turned private dealer; smuggles pieces overland in the trunk of her classic Citroën.",
    traits: {
      hair: "wavy chestnut, to the elbows",
      hobby: "ultramarathon running (100-mile circuits)",
      vehicle: "a classic Citroën DS in dusty green",
      feature: "a jade bangle on the right wrist",
    },
    witnessTraits: {
      hair: "Their locks were of a roasted hazelnut hue, rippled and falling to the forearm's hinge.",
      hobby: "They covered distances beyond a century of kilometres — dawn-to-dusk affairs.",
      vehicle: "They drove an elderly saloon from north of the Pyrenees — curvaceous, moss-toned.",
      feature: "I noted a pale-green stone hoop encircling their dominant hand's pivot.",
    },
  },
  okonkwo: {
    name: "Kojo Okonkwo",
    title: "The Apiarist",
    pronouns: { subj: "he", obj: "him", poss: "his" },
    bio: "Lagos-born, Berlin-based fixer who moves pieces through European apiary shipments.",
    traits: {
      hair: "slate-grey dreadlocks down to the waist",
      hobby: "keeping queen-bee colonies across three countries",
      vehicle: "a BMW electric motorcycle with heavy waxed saddlebags",
      feature: "a gold front tooth, left side",
    },
    witnessTraits: {
      hair: "Their hair was twisted into storm-coloured cords that reached the midriff.",
      hobby: "They tended winged-hive matriarchs across three separate nations.",
      vehicle: "They rode a Teutonic e-two-wheeler of substantial heft, with canvas pannier sacks.",
      feature: "I spied a glint of aurum among their incisors — one displaced to port.",
    },
  },
  varga: {
    name: "Lars Varga",
    title: "The Grandmaster",
    pronouns: { subj: "he", obj: "him", poss: "his" },
    bio: "Hungarian-Swedish bridge champion; moves Eastern European private collections between tournament engagements.",
    traits: {
      hair: "tight silver curls to the jaw",
      hobby: "competitive contract bridge tournaments",
      vehicle: "a vintage Jaguar E-type in racing green",
      feature: "a waxed handlebar moustache",
    },
    witnessTraits: {
      hair: "Their scalp was crowned in pewter ringlets, reaching only to the mandible.",
      hobby: "They haunted salons where four sit paired across pasteboard — trumps and all.",
      vehicle: "They piloted an aged roadster from the sceptred isle — feline-named, two-seater, the colour of turf.",
      feature: "Their upper lip was crowned with a stiff, upturned-tipped whisker arrangement — deliberately curled.",
    },
  },
  chen: {
    name: "Lila Chen",
    title: "The Stargazer",
    pronouns: { subj: "she", obj: "her", poss: "her" },
    bio: "Singapore-based trader and amateur astronomer; tracks both inbound artefacts and inbound comets.",
    traits: {
      hair: "ash-brown buzz cut, military-short",
      hobby: "amateur astronomy — tracks inbound comets",
      vehicle: "a matte-white Tesla Cybertruck",
      feature: "a pearl choker, always worn",
    },
    witnessTraits: {
      hair: "Their crown was shorn close to the scalp — a dun fuzz barely a finger's width.",
      hobby: "They spent late nights peering through optical tubes, logging transient celestial visitors.",
      vehicle: "They arrived in an angular battery-driven flatbed, ivory-dulled, very new.",
      feature: "A string of cultured orbs clasped snug at their throat — never removed.",
    },
  },
  diaz: {
    name: "Rafael Diaz",
    title: "The Prestidigitator",
    pronouns: { subj: "he", obj: "him", poss: "his" },
    bio: "Spanish stage magician by day; white-glove relic thief by night.",
    traits: {
      hair: "honey-blonde with a single violet streak",
      hobby: "sleight-of-hand, close-up magic",
      vehicle: "an olive-green Land Rover Defender",
      feature: "mirror-lensed aviator sunglasses, always worn",
    },
    witnessTraits: {
      hair: "Their mane was of a golden-syrup hue, threaded with one lock of lilac.",
      hobby: "They practised prestidigitation — card deceits at arm's length.",
      vehicle: "They drove a boxy off-roader from the sceptred isle — forest-toned, built for the bush.",
      feature: "They kept their gaze hidden behind chrome-polished pilot eyewear, fixed in place.",
    },
  },
  borghese: {
    name: "Don Alaric Borghese",
    title: "The Patriarch",
    ringleader: true,
    pronouns: { subj: "he", obj: "him", poss: "his" },
    bio: "Head of the ring. Directs the entire operation from a Tuscan estate; rarely leaves the continent. Capturing him requires the whole ring first to be in custody.",
    traits: {
      hair: "pure white, slicked back",
      hobby: "tending a private orangery of rare citrus cultivars",
      vehicle: "a burgundy Rolls-Royce Phantom with bespoke coachwork",
      feature: "an antique papal signet ring passed down five generations",
    },
    witnessTraits: {
      hair: "Their head was snow-capped, combed sleek like lacquer.",
      hobby: "They kept a private glasshouse of unusual citrus cultivars.",
      vehicle: "They were in a massive wine-red British carriage, bespoke-built.",
      feature: "A venerable ecclesiastical finger-band of bygone pontiffs, inherited down a dynasty.",
    },
  },
};

const CASES_CATHOLIC = [
  {
    id: "kells",
    title: "The Missing Book of Kells",
    origin: "dublin",
    artifact: "the Book of Kells",
    brief:
      "Overnight, the Book of Kells — the ninth-century illuminated Gospel manuscript — vanished from its case in the Long Room at Trinity College, Dublin. An empty display and a single red thread remain. Begin at the scene.",
  },
  {
    id: "tilma",
    title: "The Tilma of Guadalupe",
    origin: "mexico_city",
    artifact: "the tilma of Juan Diego",
    brief:
      "The tilma of Juan Diego — bearing the miraculous 1531 image of Our Lady of Guadalupe — has been removed from its frame at the Basilica on Tepeyac hill. Mexican authorities are frantic. You begin in Mexico City.",
  },
  {
    id: "xavier",
    title: "The Arm of St. Francis Xavier",
    origin: "goa",
    artifact: "the incorrupt right forearm of St. Francis Xavier",
    brief:
      "The incorrupt right forearm of St. Francis Xavier — on display in Old Goa — has been stolen from its silver reliquary at the Basilica of Bom Jesus. Portuguese and Indian authorities await you in Goa.",
  },
  {
    id: "acutis",
    title: "The Acutis Controller",
    origin: "assisi",
    artifact: "St. Carlo Acutis's personal video-game controller (a second-class relic)",
    brief:
      "A second-class relic of St. Carlo Acutis — the millennial saint's own video-game controller, kept under glass at the shrine — has been lifted from the Shrine of the Renunciation in Assisi. Begin at the scene.",
  },
  {
    id: "thorns",
    title: "The Crown of Thorns",
    origin: "paris",
    artifact: "the Crown of Thorns reliquary",
    brief:
      "The Crown of Thorns reliquary — returned to Notre-Dame for the 2024 reopening — has disappeared from its tabernacle on the Île de la Cité. Paris is on lockdown. You begin at the cathedral.",
  },
  {
    id: "chora",
    title: "The Chora Mosaic",
    origin: "istanbul",
    artifact: "a gilded fragment of the Chora Church mosaic",
    brief:
      "A gilded fragment of the Chora Church's newly restored Byzantine mosaic has been pried from the narthex overnight. Turkish authorities have asked the Vatican Bureau to consult. You begin in Istanbul.",
  },
  {
    id: "cabrini",
    title: "The Cabrini Reliquary",
    origin: "new_york",
    artifact: "the relics of Mother Frances Xavier Cabrini",
    brief:
      "The glass casket containing the relics of Mother Cabrini has been removed overnight from her shrine in Washington Heights. You begin in New York.",
  },
  {
    id: "mackillop",
    title: "The MacKillop Relic",
    origin: "sydney",
    artifact: "a first-class relic of St. Mary MacKillop",
    brief:
      "A first-class relic of St. Mary MacKillop — Australia's first canonized saint — has been taken from the crypt of St. Mary's Cathedral, Sydney. You begin at the scene.",
  },
  {
    id: "aparecida",
    title: "The Aparecida Crown",
    origin: "rio",
    artifact: "the golden crown of Our Lady of Aparecida",
    brief:
      "The golden crown of Our Lady of Aparecida — patroness of Brazil — has been removed from its niche at the national shrine. You begin in Rio, closest major hub.",
  },
  {
    id: "gate_of_dawn",
    title: "The Gate of Dawn Madonna",
    origin: "vilnius",
    artifact: "the Gate of Dawn Madonna icon",
    brief:
      "The Gate of Dawn Madonna — the 17th-century miraculous icon of the Virgin — has been removed overnight from its chapel above the Old Town gate in Vilnius. Lithuanian authorities are coordinating with the Vatican Bureau. Begin at the scene.",
  },
  {
    id: "ark_covenant",
    title: "The Ark of the Covenant",
    origin: "axum",
    artifact: "the Ark of the Covenant, said to contain the tablets of the Ten Commandments",
    brief:
      "By Ethiopian Orthodox tradition, the Ark of the Covenant — housing the stone tablets given to Moses — has rested for centuries in the Chapel of the Tablet beside St Mary of Zion, Axum. At first light the Guardian, the one monk permitted to see it, reported the chamber empty. Ethiopia has requested international assistance. Begin in Axum.",
  },
  {
    id: "santa_rosa",
    title: "The Reliquary of Santa Rosa",
    origin: "lima",
    artifact: "a first-class relic of Saint Rose of Lima",
    brief:
      "A first-class relic of Saint Rose of Lima — first canonized saint of the Americas — has been removed overnight from Lima Cathedral's reliquary. Begin at the scene.",
  },
  {
    id: "uganda_martyrs",
    title: "The Uganda Martyrs Reliquary",
    origin: "nairobi",
    artifact: "a reliquary containing relics of the Uganda Martyrs",
    brief:
      "A silver reliquary holding relics of the Uganda Martyrs — taken on loan to Holy Family Basilica, Nairobi, for their June 3 feast — has gone missing from the sacristy. Begin in Nairobi.",
  },
];

const CASES_SECULAR = [
  {
    id: "mona_lisa",
    title: "The Mona Lisa Heist",
    origin: "paris",
    artifact: "the Mona Lisa",
    brief:
      "At some point after closing on Tuesday, the Mona Lisa was removed from her bulletproof case at the Louvre. A convincing forgery has hung in her place for two days. You begin in Paris.",
  },
  {
    id: "rosetta",
    title: "The Rosetta Stone Heist",
    origin: "london",
    artifact: "the Rosetta Stone",
    brief:
      "The Rosetta Stone — 1,680 pounds of black granodiorite — has been lifted overnight from the British Museum. You begin at the scene in London.",
  },
  {
    id: "tut",
    title: "The Tutankhamun Mask",
    origin: "cairo",
    artifact: "the gold funerary mask of Tutankhamun",
    brief:
      "The gold funerary mask of Tutankhamun has disappeared from its case at the Grand Egyptian Museum. Egyptian authorities are furious. You begin in Cairo.",
  },
  {
    id: "topkapi",
    title: "The Topkapı Dagger",
    origin: "istanbul",
    artifact: "the Topkapı emerald dagger",
    brief:
      "The Topkapı emerald dagger — three massive emeralds on a bejeweled hilt — has been lifted from the Imperial Treasury. You begin in Istanbul.",
  },
  {
    id: "sun_stone",
    title: "The Aztec Sun Stone",
    origin: "mexico_city",
    artifact: "a ceremonial obsidian blade from the Aztec Sun Stone vault",
    brief:
      "A ceremonial obsidian blade from the Aztec Sun Stone vault has gone missing from the Anthropology Museum in Mexico City. You begin at the scene.",
  },
  {
    id: "kells2",
    title: "The Missing Book of Kells",
    origin: "dublin",
    artifact: "the Book of Kells",
    brief:
      "Overnight, the Book of Kells — the ninth-century illuminated Gospel manuscript, a UNESCO Memory of the World inscription — vanished from its case in the Long Room at Trinity College, Dublin. Begin at the scene.",
  },
  {
    id: "starry",
    title: "The Starry Night",
    origin: "new_york",
    artifact: "Van Gogh's 'The Starry Night'",
    brief:
      "Van Gogh's 'The Starry Night' has been lifted overnight from the Museum of Modern Art in New York. A convincing forgery hangs in its place. You begin at the scene.",
  },
  {
    id: "samurai",
    title: "The Imperial Sword",
    origin: "tokyo",
    artifact: "the Ichigo Hitofuri tachi sword",
    brief:
      "A legendary tachi sword has disappeared from a sealed vault at the Tokyo National Museum. Japanese authorities are embarrassed; you begin in Tokyo.",
  },
  {
    id: "cook",
    title: "The Endeavour Journal",
    origin: "sydney",
    artifact: "Captain Cook's 1770 Endeavour journal",
    brief:
      "Captain Cook's 1770 Endeavour journal has vanished from the State Library of New South Wales. You begin in Sydney.",
  },
  {
    id: "pedro",
    title: "The Emperor's Crown",
    origin: "rio",
    artifact: "Dom Pedro II's imperial crown",
    brief:
      "Dom Pedro II's imperial crown — ninety-seven diamonds and a central tourmaline — has gone missing from the National Museum in Rio. You begin at the scene.",
  },
  {
    id: "independence_act",
    title: "The 1918 Act of Independence",
    origin: "vilnius",
    artifact: "the original 1918 Act of Independence of Lithuania",
    brief:
      "The original 1918 Act of Independence — rediscovered in a German archive in 2017 and returned to Vilnius — has vanished overnight from the Signatories' House on Pilies Street. You begin in Vilnius Old Town.",
  },
  {
    id: "aksum_obelisk",
    title: "The Aksum Obelisk",
    origin: "axum",
    artifact: "the repatriated Aksum obelisk — a 1700-year-old granite stele",
    brief:
      "The 24-metre Aksum obelisk — carved 1700 years ago, looted by Mussolini in 1937, and returned with much ceremony in 2005 — has vanished from its pedestal overnight. The granite stele weighs 160 tonnes. You begin in Axum wondering how.",
  },
  {
    id: "larco_gold",
    title: "The Larco Gold",
    origin: "lima",
    artifact: "a Moche ceremonial gold mask from the Larco Museum",
    brief:
      "A Moche-era ceremonial gold mask — a centerpiece of the Larco Museum in Lima — has been lifted from its vault overnight. You begin at the scene in Pueblo Libre.",
  },
  {
    id: "neruda_manuscript",
    title: "The Neruda Manuscript",
    origin: "santiago_chile",
    artifact: "an unpublished Pablo Neruda manuscript",
    brief:
      "An unpublished Neruda manuscript — long thought lost, recently authenticated at La Chascona in Santiago — has vanished from the poet's bedroom study. You begin at the scene.",
  },
  {
    id: "mandela_papers",
    title: "The Mandela Papers",
    origin: "cape_town",
    artifact: "Nelson Mandela's original prison notebooks",
    brief:
      "Nelson Mandela's original Robben Island prison notebooks — archived at the District Six Museum in Cape Town — have vanished overnight. You begin at the scene.",
  },
];

const MODES = {
  catholic: {
    id: "catholic",
    label: "Sacred Relics",
    blurb: "Catholic saint lore woven into the geography.",
    cases: CASES_CATHOLIC,
  },
  secular: {
    id: "secular",
    label: "World Heritage",
    blurb: "General history and geography — museums, monuments, UNESCO sites.",
    cases: CASES_SECULAR,
  },
};

const RINGLEADER_CASE = {
  id: "patriarch_hunt",
  title: "The Patriarch",
  origin: "rome",
  artifact: "the Borghese Ledger — names of every buyer the ring has ever served",
  brief:
    "With all ten operators behind bars, Don Alaric Borghese — the Patriarch — is fleeing Rome. He carries the one ledger that names every black-market buyer the ring ever served. If he vanishes, the clients walk. Find him before the ledger burns.",
  ringleader: true,
};

window.RELIQUARY_DATA = {
  CITIES,
  SUSPECTS,
  MODES,
  TRAIT_KEYS,
  TRAIT_LABELS,
  CITY_REGIONS,
  RINGLEADER_CASE,
};
