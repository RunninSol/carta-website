export type SeoContentPage = {
  slug: string;
  kind: "destination" | "itinerary";
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  bestFor: string[];
  timing: string;
  hotelLogic: string;
  foodLogic: string;
  avoid: string;
  cartaTake: string;
  highlights: Array<{ title: string; body: string }>;
  tripShapes: Array<{ title: string; body: string }>;
  related: string[];
};

export const destinationPages: SeoContentPage[] = [
  {
    slug: "paris",
    kind: "destination",
    eyebrow: "Paris travel advisor",
    title: "Paris, planned around the version of you that shows up there.",
    seoTitle: "Paris Travel Advisor",
    description:
      "A Paris travel advisor page for choosing the right hotel, restaurants, timing, and trip hub. Built from Carta destination research.",
    intro:
      "Paris is not one trip. It can be palace hotel, Left Bank hideaway, Marais energy, three-star dinner, market morning, or the quiet museum garden most visitors miss. The job is not to prove that Paris is worth visiting. The job is to choose the Paris that fits you.",
    bestFor: [
      "Couples who want food, hotels, and pacing handled with taste",
      "First-time Paris travelers who do not want the generic checklist",
      "Return visitors who want smaller museums, better restaurants, and a calmer rhythm",
    ],
    timing:
      "Late September into early October is the sweet spot: softer light, active restaurants after August closures, and fewer summer crowds. May and June are also strong. I am careful with July and August because heat, crowds, and closures can make the trip feel heavier than it should.",
    hotelLogic:
      "The Ritz and Cheval Blanc are not interchangeable just because they are expensive. The Ritz is old-world Place Vendôme theater. Cheval Blanc is new-school LVMH polish on the Seine. Le Grand Mazarin puts you in the Marais with more movement around you. Relais Christine is the quieter Left Bank answer.",
    foodLogic:
      "The point is not to stack Michelin reservations. A good Paris trip can include Plénitude or Epicure, but it also needs the right bistro, the right market, and the right pastry stop. Bistrot Paul Bert and Marché d'Aligre matter because they make the trip feel like Paris, not just like a booking exercise.",
    avoid:
      "I do not build days around lines, overpacked museum windows, or famous rooms at the wrong hour. Versailles with crowds can feel like a chore. Versailles with a private guide at the right time can be the whole reason for the day.",
    cartaTake:
      "When I plan Paris, I am usually asking where you want to sit. Palace bar, Marais lobby, Left Bank garden, bistro table, Seine view. The answer tells me more than a list of attractions ever will.",
    highlights: [
      {
        title: "Hotel fit matters more than hotel rank",
        body: "A $2,200 room at the Ritz and a $650 room at Le Grand Mazarin solve different emotional problems. The better booking is the one that makes the trip feel like yours.",
      },
      {
        title: "Build one day around food, not sightseeing",
        body: "A market morning at Marché d'Aligre, a real bistro lunch, and a specific pastry or chocolate stop can do more for the trip than another monument.",
      },
      {
        title: "Use private access selectively",
        body: "After-hours Louvre or Versailles can be worth it for art and history clients. It should not be an expensive default.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "One perfect base, one major dinner, one museum, one market, and time to walk. Do not overbuild it.",
      },
      {
        title: "5 nights",
        body: "Enough time for both Right Bank and Left Bank texture, with one private guide day and one deliberately loose day.",
      },
      {
        title: "Return trip",
        body: "Skip the obvious circuit and build around neighborhoods, gardens, small museums, and the restaurants you would not find alone.",
      },
    ],
    related: ["tokyo", "amalfi-coast", "maldives"],
  },
  {
    slug: "tokyo",
    kind: "destination",
    eyebrow: "Tokyo travel advisor",
    title: "Tokyo is easier when someone has already made the cuts.",
    seoTitle: "Tokyo Travel Advisor",
    description:
      "A Tokyo travel advisor page for hotel choice, omakase reservations, hidden bars, neighborhood pacing, and private trip hub planning.",
    intro:
      "Tokyo rewards specificity. The city is too large, too good, and too layered for a best-of list. A useful trip needs the right hotel base, the right reservation path, and enough space for small discoveries between the bookings.",
    bestFor: [
      "Food-focused travelers who want omakase, bars, and neighborhood pacing handled",
      "Couples who want Tokyo to feel precise without feeling rigid",
      "Japan trips that need Tokyo to connect cleanly with Kyoto, Hakone, or the Shinkansen",
    ],
    timing:
      "Spring and fall are the cleanest answers for weather and walking. I plan restaurant and bar reservations around lead times, not just dates, because the best Tokyo nights often depend on small counters and limited seats.",
    hotelLogic:
      "Aman Tokyo is the serene high-floor sanctuary. Palace Hotel Tokyo is classic and practical by the Imperial Palace. Four Seasons Marunouchi is a strong bookend for Shinkansen access. Bulgari Tokyo is the newer glamour play near Tokyo Station. The hotel choice should solve the shape of the trip.",
    foodLogic:
      "Tokyo food planning is not just Sushi Saito or Jiro. The research points to serious counters like Sushi Sugita and more accessible omakase options that are actually bookable. The bar layer matters too: Ben Fiddich, SG Club, Janai Coffee, and smaller hidden rooms can define the trip.",
    avoid:
      "I avoid building Tokyo as a checklist of districts. Shibuya, Ginza, Shinjuku, and Asakusa can all be right, but not if they are jammed together without a reason. Transit time and reservation geography matter.",
    cartaTake:
      "Tokyo is where the trip hub earns its keep. The next reservation, the station exit, the address to show a driver, the note on what to order. That is the difference between a brilliant city and an exhausting one.",
    highlights: [
      {
        title: "Choose the hotel for movement",
        body: "Marunouchi and Otemachi make the city feel calmer. Shibuya and Harajuku give a different kind of energy. There is no universal best base.",
      },
      {
        title: "Protect the reservation nights",
        body: "Small counters and hidden bars need lead time, confirmation, and a clean route. The rest of the day should support the night, not fight it.",
      },
      {
        title: "Do not skip the quieter layers",
        body: "Garden hotels, back-alley bars, coffee-shop speakeasies, and one private cultural evening can make Tokyo feel personal instead of huge.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use Tokyo as a precise opening or closing act: one sushi counter, one bar night, one neighborhood day, and clean transfers.",
      },
      {
        title: "5 nights",
        body: "Enough time for food, shopping, gardens, a private experience, and one day that stays intentionally flexible.",
      },
      {
        title: "Tokyo plus Kyoto",
        body: "Book Tokyo around arrival energy and train timing. The hotel should make the next move easy.",
      },
    ],
    related: ["paris", "kyoto", "maldives"],
  },
  {
    slug: "amalfi-coast",
    kind: "destination",
    eyebrow: "Amalfi Coast travel advisor",
    title: "The Amalfi Coast is not hard to love. It is hard to pace.",
    seoTitle: "Amalfi Coast Travel Advisor",
    description:
      "Amalfi Coast and Capri travel planning for hotel fit, Positano versus Ravello, boat days, restaurants, and honeymoon pacing.",
    intro:
      "The Amalfi Coast can be magic or logistics. Positano is iconic, Ravello is calmer, Capri is its own animal, and the road between them can turn a beautiful day into a long one. The work is deciding where to base, when to move, and when not to move at all.",
    bestFor: [
      "Honeymoons and anniversaries that want sea, hotels, and one perfect boat day",
      "Couples deciding between Positano, Ravello, and Capri",
      "Travelers who want the coast without losing half the trip to traffic",
    ],
    timing:
      "April through June and September through October are the strongest windows. July and August can be crowded, hot, and expensive in a way that changes the feeling of the trip.",
    hotelLogic:
      "Le Sirenuse is the Positano postcard. Il San Pietro is more discreet and self-contained. Caruso in Ravello gives height, quiet, and distance from the crowds. JK Place Capri is intimate and design-driven, but room category matters because standard rooms can feel small for the price.",
    foodLogic:
      "The food plan should mix hotel terraces with places that still feel local. Da Adolfo on Laurito Beach, Carlino at Il San Pietro, JKitchen on Capri, and a lemon-grove experience all solve different parts of the coast.",
    avoid:
      "Do not treat the coast like a city where you can hop everywhere. Too many transfers, too many lunches in different towns, and too many road days will flatten the trip.",
    cartaTake:
      "For Amalfi, I usually plan the trip around restraint. The right hotel, one boat day, one high-view dinner, one beach lunch, and enough quiet that the place can actually work on you.",
    highlights: [
      {
        title: "Pick the base before the itinerary",
        body: "Positano gives the image. Ravello gives breathing room. Capri gives island glamour. The wrong base makes every day harder.",
      },
      {
        title: "Use boats to solve crowds",
        body: "A private boat is not just a splurge. It can be the most intelligent way to experience Capri and the coast without fighting the road.",
      },
      {
        title: "Room category matters",
        body: "On the coast, view, terrace, noise, and room size change the whole value of the hotel. Entry category is not always the smart category.",
      },
    ],
    tripShapes: [
      {
        title: "4 nights",
        body: "Base in Positano or Ravello, add one boat day, one beach lunch, one garden or hike, and stop there.",
      },
      {
        title: "6 nights",
        body: "Split coast plus Capri only if the transfer logic is clean. Otherwise stay put and use boats selectively.",
      },
      {
        title: "Honeymoon",
        body: "Prioritize terrace, view, and pacing over trying to see every village. This is not the place to over-schedule romance.",
      },
    ],
    related: ["paris", "maldives", "tokyo"],
  },
  {
    slug: "maldives",
    kind: "destination",
    eyebrow: "Maldives travel advisor",
    title: "In the Maldives, the resort is the itinerary.",
    seoTitle: "Maldives Travel Advisor",
    description:
      "Maldives travel advisor guidance for choosing the right private island resort, villa type, season, seaplane logistics, and honeymoon pacing.",
    intro:
      "The Maldives looks simple from far away: blue water, white sand, overwater villa. It is not simple when you are choosing between atolls, transfer types, house reefs, villa orientations, dining programs, and the difference between privacy and isolation.",
    bestFor: [
      "Honeymoons that want privacy, design, and very little friction",
      "Families deciding between Soneva-style barefoot luxury and more polished resort structures",
      "Divers and ocean-focused travelers who care about reef, manta, and whale shark timing",
    ],
    timing:
      "December through April is the cleanest weather window. May through November can be better for manta rays in Baa Atoll because plankton brings them closer, but the weather tradeoff needs to be clear.",
    hotelLogic:
      "Soneva Fushi is barefoot and family-friendly. Cheval Blanc Randheli is LVMH-level design and polish. One&Only Reethi Rah is larger, active, and close to Malé. St. Regis Vommuli is architectural and status-forward. Joali is art-driven. Velaa is the private-club answer. These are not interchangeable islands.",
    foodLogic:
      "Food depends heavily on the resort. Underwater restaurants, sandbank dinners, chef's tables, Japanese counters, and private dhoni dinners all exist, but the right choice depends on whether the client wants theater, privacy, or the simplest beautiful meal on the beach.",
    avoid:
      "Do not choose an overwater villa only because it photographs well. Lagoon versus ocean orientation, reef access, wind, deck privacy, and transfer fatigue matter more once you are there.",
    cartaTake:
      "The Maldives is where I slow the planning down. One island, the right villa, the right transfer, the right season, and one or two experiences that feel worth leaving the deck for.",
    highlights: [
      {
        title: "Atoll choice is strategy",
        body: "Baa Atoll changes the manta conversation. South Ari changes whale shark access. North Malé changes transfer ease. The map matters.",
      },
      {
        title: "Villa orientation changes the trip",
        body: "Sunrise, sunset, lagoon, ocean, reef, privacy, and wind all affect the room more than the brochure category does.",
      },
      {
        title: "The best experience may be doing less",
        body: "A sandbank dinner, manta snorkel, or chef's table can be perfect. A full daily schedule usually is not.",
      },
    ],
    tripShapes: [
      {
        title: "5 nights",
        body: "Best for a clean honeymoon add-on after a city or safari. Choose transfer ease and the right villa.",
      },
      {
        title: "7 nights",
        body: "Enough time to settle into the island, add one marine experience, one private dinner, and still do very little.",
      },
      {
        title: "Family trip",
        body: "Prioritize kids club, villa layout, reef safety, and dining flexibility before chasing the most photogenic room.",
      },
    ],
    related: ["amalfi-coast", "paris", "tokyo"],
  },
  {
    slug: "amsterdam",
    kind: "destination",
    eyebrow: "Amsterdam travel advisor",
    title: "Amsterdam rewards the traveler who knows where to look.",
    seoTitle: "Amsterdam Travel Advisor",
    description:
      "Amsterdam travel advisor page for hotel choice, private canal access, Indonesian rijsttafel, after-hours museums, and trip hub planning.",
    intro:
      "Amsterdam in 2026 is not loud luxury. It is old-world canal houses, hidden hofjes, the best Indonesian food outside Jakarta, and after-hours access to the Rijksmuseum and Van Gogh. The compact scale means less transit and more immersion. The job is choosing the right base and the experiences that actually fit the client.",
    bestFor: [
      "Culture and design travelers who want understated elegance",
      "Food-focused clients drawn to the Dutch-Indonesian legacy and Michelin dining",
      "Couples who want private canal boats, secret courtyards, and museums without crowds",
    ],
    timing:
      "Late September through late October is the cleanest window: golden light on the gable stones, cultural season in full swing, fewer crowds than summer, and better hotel availability. Spring brings tulips but also peak tourism.",
    hotelLogic:
      "Waldorf Astoria is the Forbes 5-Star canal palace choice. Conservatorium delivers design and Museumplein access. Pulitzer feels most like real canal houses with a secret garden. The Dylan is intimate boutique scale with Vinkeles. The choice should solve the emotional shape of the trip.",
    foodLogic:
      "The Indonesian rijsttafel is the signature experience, with Blue Pepper as the definitive fine-dining version. Budi gives the more modern Indonesian degustation. Michelin rooms like Spectrum and Vinkeles matter, but so do chef spots and natural wine rooms like Cafe de Klepel.",
    avoid:
      "I would be careful with standard timed-entry Anne Frank House, Red Light District walking tours, Keukenhof in peak tulip season, the Heineken Experience, and Dam Square crowds. Private after-hours access or a Jordaan walk with a local historian are the versions worth doing.",
    cartaTake:
      "When I plan Amsterdam, I am usually asking what kind of quiet the client wants. A private salon boat on the Herengracht at golden hour, a hidden hofje at dusk, or a rijsttafel that feels like it belongs to them. The city gives more when you know where to look.",
    highlights: [
      {
        title: "Hotel choice solves the trip shape",
        body: "Waldorf for legacy and service. Conservatorium for design and museums. Pulitzer for authentic canal-house character. The Dylan for intimate romance. The wrong base makes every day harder.",
      },
      {
        title: "Private access changes the museums",
        body: "After-hours at the Rijksmuseum or Van Gogh is the difference between queuing in a crowd and having the Gallery of Honour to yourself.",
      },
      {
        title: "Indonesian food is the hidden strength",
        body: "Blue Pepper and Budi make rijsttafel and modern Indonesian one of the clearest reasons to choose Amsterdam over another European city.",
      },
    ],
    tripShapes: [
      {
        title: "4 nights",
        body: "One strong base, one private canal experience, one after-hours museum, one rijsttafel dinner, and time to walk the Nine Streets and Jordaan.",
      },
      {
        title: "6 nights",
        body: "Enough time for a full museum day, multiple food experiences, Amsterdam-Noord by ferry, and one deliberately loose day on the canals.",
      },
      {
        title: "Return trip",
        body: "Skip the obvious circuit. Focus on hofjes, private guides, chef counters, and the neighborhoods most visitors never reach.",
      },
    ],
    related: ["paris", "tokyo", "amalfi-coast"],
  },

  {
    slug: "bali",
    kind: "destination",
    eyebrow: "Bali travel advisor",
    title: "Bali works best when the chaos is edited out.",
    seoTitle: "Bali Travel Advisor",
    description:
      "Bali travel advisor guidance for private villas, Ubud and beach split stays, wellness, food, surf, timing, and trip hub planning.",
    intro:
      "Bali is not pristine isolation. It is jungle, surf coast, temples, private villas, serious food, traffic, crowds, and moments of real spiritual depth. The better trip does not pretend the busy parts are not there. It builds around the right bases, early starts, private guiding, and meals that make the island feel specific.",
    bestFor: [
      "Couples who want villa privacy, wellness, food, and a beach or jungle rhythm",
      "Families and multigenerational trips that need resort service with private-villa space",
      "Travelers who want spiritual and cultural access without the performative wellness circuit",
    ],
    timing:
      "April through October is the main dry-season window, with June and September as the cleaner sweet spots. July and August bring stronger weather but heavier crowds. The wet season can still work for villa rates and slower pacing, but I would be careful with Christmas and New Year.",
    hotelLogic:
      "Four Seasons Sayan solves the jungle and river version of Bali. Four Seasons Jimbaran solves beachfront ease for families. Amandari is the quieter connoisseur choice near Ubud. Bulgari and Alila Uluwatu are cliffside and design-forward. Capella Ubud is theatrical jungle romance. Amankila and the east coast are the answer when the client wants a quieter Bali.",
    foodLogic:
      "The food plan should not be only tasting menus. Locavore NXT, Kaum, Sangsaka, Room4Dessert, and Mozaic can anchor the refined side, but Bali also needs babi guling, nasi campur, Jimbaran seafood, a private in-villa Balinese feast, and newer 2026 finds in Pererenan, Tabanan, Bedugul, and Ubud.",
    avoid:
      "I would be careful with Tanah Lot at sunset, Tegallalang at midday, Ubud Monkey Forest, Kuta and Legian, staged swing photos, and the café circuit built more for the photo than the meal. Many famous Bali stops are only good at the right hour, with the right guide, or not at all.",
    cartaTake:
      "When I plan Bali, I am editing for calm. Dawn temple instead of midday crowd. Jatiluwih instead of the swing line. A villa dinner instead of another car ride through traffic. That is the part that makes Bali feel personal instead of overrun.",
    highlights: [
      {
        title: "Base choice is the whole strategy",
        body: "Ubud gives jungle, wellness, temples, and rice terraces. Jimbaran gives family-friendly beach ease. Seminyak and Umalas give dining and villa infrastructure. Uluwatu gives cliffs and surf. East Bali gives quiet.",
      },
      {
        title: "Private villas are Bali's strength",
        body: "The island's staffed-villa ecosystem is unusually deep. For the right client, a villa with chef, driver, and selective resort access can beat a standard hotel stay.",
      },
      {
        title: "The best experiences happen early",
        body: "Temple blessings, rice walks, surf sessions, market visits, and waterfall stops all improve before the crowds and heat arrive. Bali rewards morning discipline.",
      },
    ],
    tripShapes: [
      {
        title: "5 nights",
        body: "Choose one base and keep it clean: Ubud for wellness and culture, Jimbaran for beach and family ease, or Uluwatu for surf and cliffs.",
      },
      {
        title: "7 nights",
        body: "A jungle and beach split works well: Ubud or Sayan first, then Jimbaran, Seminyak, or Uluwatu. Limit transfers and plan around traffic.",
      },
      {
        title: "Villa trip",
        body: "Use the villa as the anchor, then add a private chef dinner, dawn temple, one serious restaurant, one rice terrace or east-coast day, and a driver who knows the timing.",
      },
    ],
    related: ["maldives", "tokyo", "honeymoon-itinerary"],
  },
  {
    slug: "bangkok",
    kind: "destination",
    eyebrow: "Bangkok travel advisor",
    title: "Bangkok is at its best when the river, food, and timing all work together.",
    seoTitle: "Bangkok Travel Advisor",
    description:
      "Bangkok travel advisor guidance for riverside hotels, private canal days, Michelin dining, street food, timing, and trip hub planning.",
    intro:
      "Bangkok can be a serene riverside hotel stay, a late-night noodle crawl, a private longtail boat through the canals, or a serious dining trip built around Sorn, Jay Fai, and the places locals still love. The city works when the plan respects heat, traffic, reservations, and the difference between spectacle and texture.",
    bestFor: [
      "Food-focused travelers who want street stalls, Thai-Chinese institutions, and fine dining in one trip",
      "Couples and families who want a polished riverside base with private guiding",
      "Repeat Southeast Asia travelers who want Bangkok beyond malls, tuk-tuks, and peak-hour temples",
    ],
    timing:
      "November through February is the cleanest weather window, with lower humidity and easier walking. March through June can be hot and smoggy, while July through October brings rain and better hotel value. I like November, December, or February when the client wants Bangkok to feel energetic without being too punishing.",
    hotelLogic:
      "The Mandarin Oriental is the heritage stay, with the Author's Lounge, Bamboo Bar, and a deep sense of old Bangkok on the river. Capella is the contemporary sanctuary where every room faces the Chao Phraya. The Siam is the private, art-collector answer for travelers who value quiet and character over central convenience. A split stay can make sense when the trip needs both history and calm.",
    foodLogic:
      "Bangkok food planning should stretch from the $3 bowl to the near-impossible reservation. Sorn, Côte at Capella, Baan Tepa, Sühring, Gaa, Jay Fai, Wattana Panich, Rung Rueng Pork Noodles, and the original Somboon Seafood all tell different parts of the city. The point is not to chase every famous name. The point is to choose the meals that make Bangkok feel specific.",
    avoid:
      "I would avoid building the trip around Khao San Road, tourist floating markets like Damnoen Saduak, tuk-tuks as real transport, and the Grand Palace at peak heat. Asiatique and Chatuchak can work selectively, but only with the right expectation and timing. Bangkok punishes generic sightseeing more than almost any city.",
    cartaTake:
      "When I plan Bangkok, I am usually protecting the rhythm: river in the morning, air-conditioning when the heat peaks, one serious meal, one local food stop, and a trip hub that keeps addresses, reservation notes, and driver instructions close. That is how the city becomes generous instead of overwhelming.",
    highlights: [
      {
        title: "The river is the planning spine",
        body: "Mandarin Oriental, Capella, Four Seasons, The Peninsula, and The Siam all make different versions of Bangkok possible. Private boats and hotel shuttles can solve traffic while making the transfer feel like part of the trip.",
      },
      {
        title: "The food range is the reason to go",
        body: "A Bangkok trip can move from Sorn's three-star Southern Thai tasting menu to Jay Fai's crab omelette, Wattana Panich's half-century beef soup, and late-night moo ping in Silom. That range is the city.",
      },
      {
        title: "Hidden Bangkok is quieter and better paced",
        body: "Talat Noi, Song Wat Road, Khlong Bang Luang, Bang Krachao, Ari, MOCA, and Rama 4 food institutions give the trip texture without making every day a fight through the same tourist crush.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one riverside base, one private canal morning, one temple window at opening, one anchor dinner, and one local food crawl. Keep the middle of the day light.",
      },
      {
        title: "5 nights",
        body: "Enough time for the big river hotels, Talat Noi or Song Wat, a private food guide, one fine-dining reservation, and a slower Thonburi or Bang Krachao half-day.",
      },
      {
        title: "Bangkok plus islands or Angkor",
        body: "Bangkok works beautifully as the polished city opening before a beach or cultural extension, but the arrival and departure days need to be clean because traffic and heat spend energy quickly.",
      },
    ],
    related: ["tokyo", "bali", "maldives"],
  },

  {
    slug: "barcelona",
    kind: "destination",
    eyebrow: "Barcelona travel advisor",
    title: "Barcelona is best when you leave room for the real city.",
    seoTitle: "Barcelona Travel Advisor",
    description:
      "Barcelona travel advisor guidance for hotel choice, Catalan food, Gaudi timing, day trips, respectful pacing, and private trip hub planning.",
    intro:
      "Barcelona can be Sagrada Familia light, a private guide through Modernisme, a serious Catalan dinner, vermouth in Gracia, or a day that leaves the city for Montserrat, Penedes, Priorat, Girona, or the Costa Brava. The better trip is not about seeing more. It is about avoiding the tourist spine long enough to feel the Barcelona locals still care about.",
    bestFor: [
      "Couples who want architecture, food, wine, and Mediterranean energy without the generic checklist",
      "Food-focused travelers choosing between Disfrutar, Catalan bistros, natural wine bars, and market-adjacent meals",
      "Spain or Catalonia trips that use Barcelona as a base for Montserrat, Penedes, Girona, Priorat, or the Costa Brava",
    ],
    timing:
      "Late April through June and September through October are the cleanest windows, with warm weather and better pacing than peak summer. July and August bring heat, crowds, and higher rates. November through February can work well for cultural trips, fewer crowds, and easier access to the famous rooms.",
    hotelLogic:
      "Mandarin Oriental and Majestic solve the Passeig de Gracia luxury base. Hotel Arts is the beachfront and marina answer. Cotton House, Almanac, and The Barcelona EDITION give more design and neighborhood texture. The Wittmore, Hotel Boutique Mirlo, and Primero Primera are quieter choices for clients who want privacy or a more residential Barcelona.",
    foodLogic:
      "The food plan should not be a tapas and paella checklist. Barcelona is Catalan, and that means pa amb tomaquet, fideua, arroz negro, bomba de la Barceloneta, butifarra amb mongetes, calçots in season, bacalla a la llauna, vermouth, cava, and low-intervention wine. Disfrutar, Lasarte, ABaC, and Cocina Hermanos Torres matter, but so do La Sosenga, Bar Canyi, Bo de Bernat, Bar Puntal, Bar Super, Bar Cañete, and Can Paixano.",
    avoid:
      "I would be careful with Las Ramblas, photo-menu restaurants near major squares, Park Guell expectations, La Pedrera if the client only has time for one Gaudi house, Barceloneta beach as a beach day, Boqueria after midmorning, and Airbnb in pressured neighborhoods. Most Barcelona mistakes come from staying too long on the same tourist corridor.",
    cartaTake:
      "When I plan Barcelona, I am usually trying to protect the real texture of the city. See Sagrada Familia at the right hour, then move the meals into Gracia, Sant Antoni, Santa Caterina, Poblenou, El Born, or Sarria. Learn the Catalan dishes before you sit down. Use the trip hub for timing, reservation notes, driver instructions, and the little warnings that keep a beautiful city from feeling overrun.",
    highlights: [
      {
        title: "The icons need timing",
        body: "Sagrada Familia, Casa Batllo, Palau de la Musica Catalana, and Montserrat can all deliver, but only when the entry time, guide, and crowd strategy are right. The interior of Sagrada Familia matters more than the tower add-on.",
      },
      {
        title: "Catalan food is the better brief",
        body: "I would rather tell a client what to order than send them hunting for generic tapas. Arroz negro, fideua, bombas, calçots, bacalla, vermouth, cava, and natural wine make the meals feel anchored to Barcelona.",
      },
      {
        title: "Barcelona is a base, not just a city break",
        body: "Penedes is about 30 minutes away for cava. Girona is about 40 minutes by high-speed train. Montserrat, Priorat, and the Costa Brava can turn the trip into a Catalonia itinerary instead of a crowded long weekend.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one central hotel base, one Gaudi morning, one El Born or Gracia evening, one serious meal, one market-adjacent lunch, and no more than one major sight per day.",
      },
      {
        title: "5 nights",
        body: "Add a private guide, a Penedes or Montserrat day, stronger restaurant planning, and time in Santa Caterina, Sant Antoni, Poblenou, or Sarria away from the busiest center.",
      },
      {
        title: "Barcelona plus Catalonia",
        body: "Use Barcelona for architecture, bars, and restaurants, then build out to Girona, Priorat, Penedes, Costa Brava, or Montserrat depending on whether the client cares most about food, wine, coast, or landscape.",
      },
    ],
    related: ["paris", "amalfi-coast", "amsterdam"],
  },

  {
    slug: "bordeaux",
    kind: "destination",
    eyebrow: "Bordeaux travel advisor",
    title: "Bordeaux is for travelers who want the wine trip to have a point of view.",
    seoTitle: "Bordeaux Travel Advisor",
    description:
      "Bordeaux travel advisor guidance for wine-focused trips, hotel base logic, Medoc, Saint-Emilion, Graves, dining, timing, and private trip hub planning.",
    intro:
      "Bordeaux is the French wine capital, but the better trip is not just a string of tastings. It is the right city base, the right vineyard days, the right restaurant rhythm, and enough time to understand why the region feels different from Paris or the Riviera.",
    bestFor: [
      "Wine-focused travelers who want Bordeaux, Medoc, Saint-Emilion, and Graves planned with intention",
      "Food travelers who want a refined French city break with Atlantic influence and local produce",
      "Couples who want substance, architecture, wine country, and a calmer alternative to flashier French trips",
    ],
    timing:
      "The research file frames Bordeaux as a refined city break with easy access to surrounding wine regions. I would build timing around vineyard access, restaurant openings, and whether the client wants the city itself or the vineyard days to be the center of gravity.",
    hotelLogic:
      "The hotel question starts with base strategy. Stay in Bordeaux when the trip needs restaurants, historic architecture, and easier movement. Shift part of the trip toward the vineyards only when the client wants the wine country itself to slow the pace down.",
    foodLogic:
      "The research points to a sophisticated food scene shaped by regional produce, Atlantic influence, and a growing natural wine movement. I would use meals to make Bordeaux feel local, not just as filler between chateaux visits.",
    avoid:
      "I would not plan Bordeaux as a generic wine checklist. Too many tastings in too many directions can turn the region into logistics. The better version chooses Medoc, Saint-Emilion, or Graves for a reason, then leaves room for the city to breathe.",
    cartaTake:
      "When I plan Bordeaux, I am thinking about restraint. One smart city base, one or two wine regions that actually match the client, and a trip hub that keeps tastings, drivers, restaurant notes, and timing in one place. That is how a wine trip becomes personal instead of repetitive.",
    highlights: [
      {
        title: "Wine regions need a reason",
        body: "Medoc, Saint-Emilion, and Graves are named in the research as the key access points. The value is not seeing all of them. The value is choosing the ones that fit the trip.",
      },
      {
        title: "Bordeaux is a city break too",
        body: "Historic architecture, revitalized neighborhoods, restaurants, and natural wine give the trip more texture than vineyard visits alone.",
      },
      {
        title: "Substance over spectacle",
        body: "The research describes Bordeaux as less flashy than Paris or the Riviera. That is the appeal for the right traveler: wine depth, food, and a calmer French rhythm.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use Bordeaux as the base, add one focused vineyard day, one strong city dinner, and enough walking time for the architecture and revitalized center.",
      },
      {
        title: "5 nights",
        body: "Build two wine-region days, usually with different purposes, then protect one day for the city, food, and a slower natural-wine or neighborhood layer.",
      },
      {
        title: "Paris plus Bordeaux",
        body: "Use Paris for museums, shopping, and major restaurants, then let Bordeaux become the quieter wine and food counterpoint instead of trying to make it compete.",
      },
    ],
    related: ["paris", "barcelona", "amsterdam"],
  },
  {
    slug: "egypt",
    kind: "destination",
    eyebrow: "Egypt travel advisor",
    title: "Egypt is not hard because of the sights. It is hard because of everything around them.",
    seoTitle: "Egypt Travel Advisor",
    description:
      "Egypt travel advisor guidance for Cairo, Giza, the Grand Egyptian Museum, Luxor, Aswan, Nile cruises, Red Sea extensions, hotels, food, and trip hub planning.",
    intro:
      "Egypt has one of the highest payoffs in travel, but it is not a destination I would leave to chance. Cairo traffic, Giza logistics, temple heat, tipping, guides, boats, and early starts all shape the trip as much as the pyramids do. The work is making the wonder easier to feel.",
    bestFor: [
      "History-focused travelers who want the pyramids, GEM, Luxor, Aswan, and Abu Simbel handled properly",
      "Couples and families who want private guiding, smooth transfers, and a calmer Nile rhythm",
      "Travelers who want a phone-friendly trip hub with hotels, guides, food stops, and logistics in one place",
    ],
    timing:
      "October through April is the cleanest window for Cairo, Luxor, Aswan, and the Nile because the heat is easier to manage. February and March are especially strong for temple-heavy trips. Summer can work for heat-tolerant clients, but the itinerary has to start early and protect recovery time.",
    hotelLogic:
      "Mena House solves the pyramid-view fantasy for Giza and GEM. Four Seasons Nile Plaza or St. Regis Cairo solve a more central Nile city base. In Luxor, I would choose between heritage, convenience, and West Bank quiet. In Aswan, Old Cataract can be the emotional finale if the room and expectations are right. On the Nile, the boat is not just transport. It is the pacing device.",
    foodLogic:
      "Cairo food should be specific, not random. Khufu's or 139 Pavilion can turn a Giza day into a meal with purpose. Abou El Sid, Le Pacha 1901, Crimson, and Naguib Mahfouz Cafe solve different Cairo nights. Koshary Abou Tarek and Zooba give two very different ways into Egyptian staples.",
    avoid:
      "I would avoid building Egypt as a self-guided checklist. Giza without a guide, rushed Nile cruises, forced shopping stops, too many tombs in one morning, and a Red Sea add-on squeezed into a short trip all make Egypt feel harder than it needs to be.",
    cartaTake:
      "When I plan Egypt, I am really planning the hour before and after each famous thing. Who meets you at the airport, where the driver is, when the guide starts, where lunch is, what to skip when the heat hits, and who you text if something moves. That is what turns Egypt from exhausting into extraordinary.",
    highlights: [
      {
        title: "The Grand Egyptian Museum changes the Cairo plan",
        body: "The GEM now belongs at the center of the Cairo and Giza conversation, not as an extra stop. I would pair it carefully with the pyramids so the museum gets real attention instead of leftover energy.",
      },
      {
        title: "Luxor needs restraint",
        body: "Valley of the Kings, Karnak, Luxor Temple, Medinet Habu, Dendera, and Abydos can make the trip. They can also flatten it if every day becomes a race. Fewer sites with a better guide usually wins.",
      },
      {
        title: "The Nile segment should slow the trip down",
        body: "A dahabiya or smaller high-service vessel can make Egypt feel human again after Cairo and Luxor. The right boat matters because it controls the rhythm, not just the room.",
      },
      {
        title: "I built a sample Egypt trip hub",
        body: "The public sample Carta is live at /egypt-carta-yovgmg. It shows the kind of phone-friendly guide I would build around Egypt: hotels, sights, food, guide notes, essentials, and power details in one place.",
      },
    ],
    tripShapes: [
      {
        title: "7 nights",
        body: "Cairo and Giza, Luxor, Aswan, and Abu Simbel. It is efficient and history-first, but I would not pretend it is soft.",
      },
      {
        title: "9 to 10 nights",
        body: "Cairo and Giza, then Luxor to Aswan by dahabiya or small Nile vessel, with a final Cairo buffer if flights require it. This is the best first Egypt shape for most clients.",
      },
      {
        title: "12 to 14 nights",
        body: "Add Red Sea or desert decompression after the cultural spine. This is where Egypt starts to feel spacious instead of impressive but tiring.",
      },
    ],
    related: ["paris", "maldives", "bordeaux"],
  },

  {
    slug: "busan",
    kind: "destination",
    eyebrow: "Busan travel advisor",
    title: "Busan is Korea's ocean city, and it deserves more than a side trip.",
    seoTitle: "Busan Travel Advisor",
    description:
      "Busan travel advisor guidance for Haeundae hotels, seafood markets, Michelin dining, coastal temples, Seoul connections, and private trip hub planning.",
    intro:
      "Busan is the coastal counterpoint to Seoul: beaches below high-rise hotels, mountain temples, raw seafood culture, the Gwangan Bridge at night, and a food identity built from the ocean, the port, and post-war Korea. The better trip does not treat it as a quick add-on. It gives Busan enough room to feel like itself.",
    bestFor: [
      "Korea trips that pair Seoul's pace with ocean, seafood, and a slower coastal rhythm",
      "Food-focused travelers who want Jagalchi Market, dwaeji gukbap, milmyeon, Michelin dining, and street food in one city",
      "Couples and families who want beachfront hotels, private guiding, and a trip hub that keeps the city easy to use",
    ],
    timing:
      "Spring and autumn are the easiest windows, with April through May and September through November giving better walking weather. October adds the Busan International Film Festival, which can be a reason to go if hotels and restaurants are planned early. July and August bring beach energy, humidity, monsoon risk, and Haeundae crowds. Winter can be quiet and good value, with empty beaches and milder cold than Seoul.",
    hotelLogic:
      "Haeundae is the default base for most clients because the luxury hotels, beach, restaurants, and Haeridan-gil cafes cluster together. Signiel Busan is the wow-factor choice in LCT Tower with ocean balconies and the high-floor pool. Park Hyatt Busan is quieter and more design-driven, with Gwangan Bridge views from Marine City. Westin Josun and Grand Josun solve direct beachfront convenience, while Ananti Hilton in Gijang is for a resort-style stay away from the city center.",
    foodLogic:
      "Busan food should start with the sea and then move outward. Jagalchi Market is the defining experience: choose the fish downstairs and eat it prepared upstairs. Hapcheon Gukbapjip introduces dwaeji gukbap, Naeho Naengmyeon explains milmyeon, BIFF Square gives ssiat hotteok for KRW 1,500 to 2,000, and Mori, Fiotto, and Palette show why Michelin's arrival in Busan matters.",
    avoid:
      "I would be careful with Haeundae Beach at peak summer, Gamcheon Culture Village at midday, Seomyeon nightlife for luxury travelers, and Busan Tower as a daytime priority. The better version is Haeundae at sunrise, Huinnyeoul Culture Village on Yeongdo instead of the crowd crush, Gwangalli for bridge-view drinks, and coastal timing that avoids turning the city into a traffic loop.",
    cartaTake:
      "When I plan Busan, I am usually using it to make Korea breathe. Seoul gives the intensity. Busan gives the ocean, the fish market, the temple on the rocks, the bridge at night, and a hotel room where the sea is part of the day. The trip hub matters here because the best Busan is spread out, and the difference is knowing when to go, what to order, and when to stop moving.",
    highlights: [
      {
        title: "Use Busan as Seoul's coastal counterpart",
        body: "The KTX connects Seoul and Busan in about 2.5 hours, which makes a two-city Korea trip feel natural. Busan should not be the leftovers after Seoul. It needs its own food, coast, and hotel rhythm.",
      },
      {
        title: "The food identity is the reason to go",
        body: "Dwaeji gukbap, milmyeon, ssiat hotteok, Jagalchi seafood, Japanese-influenced counters, and Busan's new Michelin scene make the city more specific than a generic beach extension.",
      },
      {
        title: "Haeundae is convenient, but Yeongdo adds texture",
        body: "Most clients should sleep in Haeundae or Marine City, then use Yeongdo for Huinnyeoul Culture Village, Jeoryeong Coastal Walk, Taejongdae, and Momos Coffee. That is where Busan starts to feel less obvious.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use Haeundae as the base, add Jagalchi and BIFF Square, one temple or coastal morning, one Gwangalli night, and one anchor dinner such as Mori, Palette, or Park Hyatt's Dining Room.",
      },
      {
        title: "5 nights",
        body: "Enough time for Haeundae, Nampo markets, Haedong Yonggungsa, the Sky Capsule, Yeongdo, Spa Land, and one private yacht or bridge-view evening without rushing every cross-city move.",
      },
      {
        title: "Seoul plus Busan",
        body: "Start with Seoul for palaces, culture, shopping, and high-density dining, then take the KTX south for seafood, beaches, and a calmer finish. First class on KTX is worth considering for comfort.",
      },
    ],
    related: ["tokyo", "bangkok", "bali"],
  },

];

export const itineraryPages: SeoContentPage[] = [
  {
    slug: "honeymoon-itinerary",
    kind: "itinerary",
    eyebrow: "Honeymoon itinerary planning",
    title: "A honeymoon itinerary should feel protected, not packed.",
    seoTitle: "Honeymoon Itinerary Planner",
    description:
      "Honeymoon itinerary planning by Carta: choosing the right destination, hotel, pacing, restaurants, and private trip hub for couples.",
    intro:
      "The mistake with honeymoons is trying to make every day prove the trip is special. The better version is simpler: the right room, the right first dinner, one or two moments worth building around, and enough quiet that you remember being together.",
    bestFor: [
      "Couples choosing between city, coast, island, and multi-stop honeymoons",
      "Trips where hotel choice and pacing matter as much as destination",
      "Travelers who want support before and during the trip, not just a list of bookings",
    ],
    timing:
      "Season matters because a honeymoon has less tolerance for compromise. Paris in early fall, Amalfi in shoulder season, Tokyo in spring or fall, and Maldives in the right weather or manta window all solve different emotional needs.",
    hotelLogic:
      "For a honeymoon, I care about room category, view, privacy, arrival feel, breakfast, transfer smoothness, and what happens if the flight lands late. A famous hotel is not enough if the room is wrong.",
    foodLogic:
      "One anchor dinner is usually better than five overbuilt nights. The rest should support the rhythm: a beach lunch, market morning, counter seats, room service after a long flight, or a restaurant close enough that the night stays easy.",
    avoid:
      "I avoid too many hotel moves, too many early starts, and any itinerary that treats romance like a checklist. If the schedule looks impressive but tiring, it is probably wrong.",
    cartaTake:
      "When I plan a honeymoon, I am protecting the feeling of the trip. The trip hub helps because everything is there when you need it, but the real work is deciding what not to put in.",
    highlights: [
      {
        title: "Choose the emotional shape first",
        body: "City and culture, coast and glamour, island and privacy, food and walking, or a two-part trip that balances them. The destination comes after that.",
      },
      {
        title: "Do fewer hotel moves",
        body: "Every transfer spends attention. On a honeymoon, attention is the whole point.",
      },
      {
        title: "Build one private moment",
        body: "A boat, a garden, a sandbank, an after-hours museum, or a small counter can do more than a packed week of famous reservations.",
      },
    ],
    tripShapes: [
      {
        title: "Paris and Amalfi",
        body: "Culture first, coast second. Works best when the Amalfi base is chosen for calm rather than maximum movement.",
      },
      {
        title: "Tokyo and Maldives",
        body: "High-definition city energy followed by island quiet. The transition needs careful flight and arrival planning.",
      },
      {
        title: "Maldives only",
        body: "Best when the resort itself is the trip. Pick the island correctly and resist over-scheduling it.",
      },
    ],
    related: ["maldives", "amalfi-coast", "paris"],
  },
];

export const allSeoPages = [...destinationPages, ...itineraryPages];

export function getDestinationPage(slug: string) {
  return destinationPages.find((page) => page.slug === slug);
}

export function getItineraryPage(slug: string) {
  return itineraryPages.find((page) => page.slug === slug);
}
