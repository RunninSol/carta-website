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
  photos?: Array<{
    src: string;
    alt: string;
    caption: string;
    credit: string;
    creditUrl: string;
  }>;
  related?: string[];
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
    related: ["paris", "busan", "maldives"],
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

  {
    slug: "budapest",
    kind: "destination",
    eyebrow: "Budapest travel advisor",
    title: "Budapest is not a cheaper Vienna. It is its own kind of beautiful.",
    seoTitle: "Budapest Travel Advisor",
    description:
      "Budapest travel advisor guidance for central Pest hotels, thermal baths, Hungarian wine, Michelin dining, Danube timing, and private trip hub planning.",
    intro:
      "Budapest works when it is planned with restraint. The city can be Parliament at blue hour, a thermal bath at the right time, a Hungarian wine dinner, a grand Pest hotel, or a quieter Buda evening that most first visits miss. The mistake is treating it like a checklist. The better version has rhythm.",
    bestFor: [
      "Couples who want architecture, baths, food, wine, and a high-value European city break",
      "First Central Europe trips that pair Budapest with Vienna, Prague, or a Danube extension",
      "Travelers who want a trip hub with hotel logic, bath timing, restaurant notes, and local warnings in one place",
    ],
    timing:
      "Late April through early June and September through early October are the cleanest windows for walking, baths, river views, and restaurant pacing. July and August can be hot and crowded. The research file cites a 2026 Reddit trip report where heat around 101 degrees changed the shape of the days.",
    hotelLogic:
      "For most first visits, I would base in central Pest rather than choosing Buda only because it looks quieter. Four Seasons Gresham Palace is the classic Danube-facing stay. Dorothea Hotel and Matild Palace add newer central luxury energy. Aria Hotel works for a more boutique base, while Hotel Rum is useful for food-focused travelers because Salt is in the building.",
    foodLogic:
      "The food plan should move between Hungarian comfort, modern dining, and wine. Stand25 Bisztro and Porcz es Bistro are strong local leads for Hungarian cooking, while Salt, Borkonyha Winekitchen, MAK by Mizsseyani, Tati, Szaletly, N28 Wine and Kitchen, Stand, Costes, Babel, and Rumour by Racz Jeno show the higher-end side of the city. Hungarian wine is the sleeper angle.",
    avoid:
      "I would be careful with midday Fisherman's Bastion, random tourist menus in the central corridors, generic dinner cruises, New York Cafe as a food recommendation rather than an interiors stop, and ruin bars as the whole nightlife plan. Budapest gets much better when the famous pieces are timed and edited.",
    cartaTake:
      "When I plan Budapest, I am usually protecting the contrast. A palace hotel, a bathhouse, a Danube view, a real Hungarian bistro, and one wine-forward dinner can all belong in the same trip. The job is knowing when to go grand and when to let the city stay a little gritty.",
    highlights: [
      {
        title: "Use central Pest as the first base",
        body: "The research points to central Pest for most travelers because restaurants, hotels, cafes, Parliament, the Opera, and evening movement are easier from there. Buda can be lovely, but it should solve a specific quiet or view problem.",
      },
      {
        title: "Treat the baths as culture, not filler",
        body: "Szechenyi is the icon, Gellert is the Art Nouveau beauty, and Rudas is more atmospheric. The right bath depends on the client, the time of day, renovation status, and whether the trip needs social energy or calm.",
      },
      {
        title: "Let Hungarian wine carry one night",
        body: "Tokaj, volcanic whites, Kekfrankos, Kadarka, and the city's wine-bar layer make Budapest more interesting than a simple sightseeing weekend. Borkonyha and N28 are useful anchors because the food and wine logic connect.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one central Pest base, one Castle District morning, one bath session, one Danube dusk moment, one Hungarian wine dinner, and one curated District VII or beer stop without overbuilding the days.",
      },
      {
        title: "5 nights",
        body: "Add a second bath with a different personality, Bartok Bela ut or Gellert-side Buda, House of Music or City Park, and either Szentendre or Etyek wine country if the transfer logic is clean.",
      },
      {
        title: "Budapest plus Central Europe",
        body: "Budapest pairs naturally with Vienna or Prague, but I would not let it become the cheaper add-on. Give it enough room for baths, wine, food, and the Danube at dusk so it feels like its own chapter.",
      },
    ],
    related: ["paris", "amsterdam", "bordeaux"],
  },

  {
    slug: "cape-town",
    kind: "destination",
    eyebrow: "Cape Town travel advisor",
    title: "Cape Town works when the mountain, coast, wine, and timing are planned together.",
    seoTitle: "Cape Town Travel Advisor",
    description:
      "Cape Town travel advisor guidance for luxury hotels, Cape Winelands, restaurants, private guiding, safety, timing, and trip hub planning.",
    intro:
      "Cape Town can be Atlantic views from Bantry Bay, a garden hotel below Table Mountain, a private Cape Peninsula day, serious restaurants, or wine country within an hour of the city. The better trip does not treat those pieces as a checklist. It chooses the right base, protects the timing, and keeps movement sensible.",
    bestFor: [
      "Couples and families who want Cape Town paired with wine country, coast, or safari",
      "Food and wine travelers choosing between Constantia, Stellenbosch, Franschhoek, and the city",
      "Active luxury travelers who want Table Mountain, beaches, art, restaurants, and private guides handled cleanly",
    ],
    timing:
      "November through March is best for beaches, Cape Point, and outdoor dining, with the highest rates and crowds. April, May, September, and October are useful shoulder months for wine, walking, and calmer pacing. June through August is cooler and wetter, but it brings whale season and lower rates.",
    hotelLogic:
      "Ellerman House is the private Bantry Bay benchmark with art, wine, and quiet. The Silo is the design-forward V&A Waterfront stay above Zeitz MOCAA. Mount Nelson gives gardens, heritage, and family-friendly space below Table Mountain. Cape Grace, now under Bvlgari, solves marina convenience in a quieter corner of the Waterfront. Cellars-Hohenort matters more when Constantia wine access is part of the plan.",
    foodLogic:
      "Cape Town food planning should move between seafood, Cape Malay cooking, serious tasting menus, and wine bars. La Colombe, FYN, Salsify, Galjoen, Farro, Tannin, The Melting Pot, The Happy Uncles, Biesmiellah, Noon Gun Tea Room, and Chefs Warehouse at Tintswalo all solve different parts of the city. The Winelands layer adds Delaire Graff, Jordan, Babylonstoren, Waterkloof, Creation, and La Petite Colombe.",
    avoid:
      "I would be careful with the V&A Waterfront as a shopping plan, Camps Bay beach at peak summer, the Franschhoek Wine Tram for clients who need privacy, Table Mountain Cableway at midday, group Bo-Kaap photo walks, and Long Street after dark. Cape Town is beautiful, but safety and timing are not side notes.",
    cartaTake:
      "When I plan Cape Town, I am usually deciding what should feel effortless. The mountain, the coast, the wine, the restaurant, the driver, the guide, the adapter in the bag, and the note about where not to walk after dark. That is the difference between a spectacular city and a trip that asks too much from the traveler.",
    highlights: [
      {
        title: "Hotel base changes the whole trip",
        body: "Bantry Bay gives quiet and sunset views. The Waterfront gives access and museums. Gardens gives heritage and space. Constantia turns wine into part of the daily rhythm instead of a long excursion.",
      },
      {
        title: "Cape Town pairs naturally with wine and safari",
        body: "The research frames Cape Town plus Sabi Sands or Phinda as a classic coast and bush shape. Franschhoek or Stellenbosch can also work as the decompression chapter after the city.",
      },
      {
        title: "Private guiding is not just polish",
        body: "For Table Mountain, Bo-Kaap, Cape Point, the Winelands, and evening movement, the right guide or driver improves safety, pacing, and access. It also keeps the day from turning into logistics.",
      },
    ],
    tripShapes: [
      {
        title: "4 nights",
        body: "Use one city base, one Table Mountain or art morning, one Cape Peninsula day, one Constantia or major restaurant evening, and enough time for the coastline to breathe.",
      },
      {
        title: "6 nights",
        body: "Split the focus between Cape Town and the Winelands, with Ellerman House, Mount Nelson, The Silo, or Cape Grace in the city and Franschhoek, Stellenbosch, or Constantia chosen for the wine chapter.",
      },
      {
        title: "Cape Town plus safari",
        body: "Use Cape Town for food, art, coast, and wine before or after Sabi Sands or Phinda. The trip works best when transfers, recovery time, and the first safari night are protected.",
      },
    ],
    related: ["bali", "maldives", "bordeaux"],
  },

  {
    slug: "copenhagen",
    kind: "destination",
    eyebrow: "Copenhagen travel advisor",
    title: "Copenhagen is a taste-level city, not a checklist city.",
    seoTitle: "Copenhagen Travel Advisor",
    description:
      "Copenhagen travel advisor guidance for hotel choice, Michelin dining, bakeries, harbor life, design neighborhoods, and private trip hub planning.",
    intro:
      "Copenhagen works best when it is planned around food, design, water, and neighborhood rhythm. The luxury is not only Geranium, Kadeau, Jordnær, or Alchemist. It is also a morning bun by the harbor, a ferry instead of a taxi, a smørrebrød lunch with schnapps, and a city that feels built around daily life.",
    bestFor: [
      "Design-minded travelers who want a walkable city with excellent food and clean logistics",
      "Couples and urban honeymooners who want restaurants, water, architecture, and quieter style",
      "Food travelers choosing between Michelin dining, bakeries, seafood, smørrebrød, and natural wine",
    ],
    timing:
      "Late May through September is the strongest window for harbor swimming, outdoor dining, biking, long daylight, and waterfront neighborhoods like Refshaleøen and Nordhavn. September is especially good for an adult city break. January through March can still work for design shopping, bakeries, saunas, restaurants, and low crowds, but it is a moodier version of the city.",
    hotelLogic:
      "Hotel d'Angleterre solves the classic luxury stay on Kongens Nytorv. Nimb is the Tivoli romance and family answer. Hotel Sanders is the intimate design-forward choice for couples. Villa Copenhagen and Nobis give larger, polished city stays, while Hotel Ottilia or a Frederiksberg base can make sense for repeat visitors who want a more residential rhythm. The right base depends on whether the trip is about first-timer ease, restaurant access, or living more like a local for a few days.",
    foodLogic:
      "I would not make Copenhagen all tasting menus. One serious reservation can be perfect, but the city needs range: Schønnemann, Palægade, Aamanns 1921, Selma, or Møntergade for smørrebrød, Hart Bakery or Coffee Collective in the morning, Fiskebar or another seafood night in Vesterbro, and one casual hot dog, shawarma, wine bar, or bodega stop so the trip does not become a status exercise.",
    avoid:
      "I would be careful with making Nyhavn, the Little Mermaid, and Tivoli the whole trip. Nyhavn is better early or as a quick drink, the Little Mermaid should be folded into a waterside walk if it matters at all, and Tivoli is strongest at dusk. I also would not plan every dinner around Michelin stars, because that misses the city Copenhageners actually live in.",
    cartaTake:
      "When I plan Copenhagen, I am usually protecting the rhythm. One major booking, one neighborhood walk, one water moment, one bakery or smørrebrød stop, and enough space for the city to feel calm. That is the version I love: precise, stylish, and still human.",
    highlights: [
      {
        title: "Food is broader than the star list",
        body: "Copenhagen has 31 Michelin stars across 21 restaurants in the research file, including Geranium, Kadeau, Jordnær, Alchemist, Koan, AOC, and JATAK. That matters, but so do Hart Bakery, Coffee Collective, Fiskebar, Schønnemann, Palægade, Aamanns, Selma, and the simple morning bun with butter and cheese.",
      },
      {
        title: "The water changes the plan",
        body: "Canal boats, harbor ferries, Nordhavn baths, Christianshavn canals, Opera Park, La Banchina, Reffen, and Refshaleøen make Copenhagen feel like a waterfront city rather than a museum circuit.",
      },
      {
        title: "Neighborhoods do the real work",
        body: "Indre By is useful for first-timers, but Vesterbro, Nørrebro, Christianshavn, Refshaleøen, Frederiksberg, and Nordhavn are where the trip gets texture. I would rather build around those areas than keep circling the same postcard streets.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one central or design-forward base, one smørrebrød lunch, one bakery morning, one harbor or canal moment, one Vesterbro or Nørrebro evening, and one serious dinner if the client wants it.",
      },
      {
        title: "5 nights",
        body: "Add Louisiana Museum, Kronborg if history matters, Nordhavn or CopenHill for contemporary architecture, and a more relaxed food rhythm that mixes Michelin, seafood, bakeries, and wine.",
      },
      {
        title: "Copenhagen plus the region",
        body: "Use four nights in Copenhagen, then add the north coast, Humlebæk or Helsingør, Malmö, Skåne, or rural Denmark only if the transfers support a softer Nordic summer trip.",
      },
    ],
    related: ["amsterdam", "paris", "budapest"],
  },

  {
    slug: "british-virgin-islands",
    kind: "destination",
    eyebrow: "British Virgin Islands travel advisor",
    title: "The British Virgin Islands work best when the water leads the plan.",
    seoTitle: "British Virgin Islands Travel Advisor",
    description:
      "British Virgin Islands travel advisor guidance for Virgin Gorda, Tortola, Anegada, Jost Van Dyke, private islands, sailing, hotels, restaurants, transfers, and trip hub planning.",
    intro:
      "The British Virgin Islands are not one resort island. They are a water-first archipelago, and the best trips are built around boats, coves, private islands, Virgin Gorda beaches, Anegada lobster, Jost Van Dyke beach bars, and a base plan that keeps ferries and sea conditions from owning the vacation.",
    bestFor: [
      "Couples and families who want clear water, sailing, privacy, and a softer island rhythm",
      "Honeymoons that need a polished land base with one or two days on the water",
      "Private-island, villa, and yacht clients who want the trip designed around access, not just hotel rank",
    ],
    timing:
      "December through April is the cleanest weather window and the highest-demand season. May and early June can work well for flexible clients who want softer demand before hurricane risk becomes the main planning issue. I am careful with August through October because closures, storms, ferry changes, and insurance terms can change the whole trip.",
    hotelLogic:
      "Rosewood Little Dix Bay is the safest classic luxury anchor for a first BVI trip. North Sound is the yacht and villa layer, with Oil Nut Bay, Bitter End Yacht Club, Saba Rock, and private boat access changing the feel of the stay. Necker, Moskito, Guana, Peter Island, The Aerial, and villa estates are the high-privacy layer. Tortola is useful for arrivals, yacht starts, food texture, and transit, but it is not the only luxury beach answer for most clients.",
    foodLogic:
      "BVI food planning works by route rather than by a city-style restaurant list. I would use Crandell's Pastry Plus for local Tortola breakfast context, Good Moon Farm for produce and farm-to-table texture, CocoMaya or Sugar Mill for Virgin Gorda polish, Soggy Dollar and Foxy's as Jost rituals, and Anegada for lobster at places like Lobster Trap, Cow Wreck, or The Wonky Dog. The point is not to pretend this is a dining capital. The point is to make each island meal fit the day around it.",
    avoid:
      "Do not plan the BVI like St. Barths or Turks and Caicos. Too many island moves, The Baths at peak hours, a rushed Anegada day trip, late-arrival ferry dependence, and a North Sound plan without confirmed boat access can turn a beautiful destination into logistics. I would rather build two anchors and one excellent water day than make the trip prove it visited every island.",
    cartaTake:
      "When I plan the BVI, I am usually asking whether the client wants a resort, a yacht, a villa, or an island. That answer matters more than a hotel ranking. If the transfers feel effortless, the place feels magic. If the transfers are loose, even a gorgeous room can feel like work.",
    highlights: [
      {
        title: "Virgin Gorda is the first-timer anchor",
        body: "The Baths, Devil's Bay, Savannah Bay, Little Dix Bay, Spanish Town, and North Sound give the strongest mix of beach, scenery, hotel quality, and boat access for most first BVI trips.",
      },
      {
        title: "The private-island layer is real",
        body: "Necker, Moskito, Guana, Peter Island, The Aerial, Oil Nut Bay, and villa estates make the BVI unusually strong for privacy, buyouts, multi-family groups, and clients who want control over the environment.",
      },
      {
        title: "Anegada changes the texture",
        body: "Anegada is the low coral outlier, with lobster, reefs, empty-beach feeling, flamingos, and a very different pace from the volcanic islands. It is better as an overnight or carefully planned boat day than a rushed checkbox.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one Virgin Gorda or North Sound base, go early to The Baths and Devil's Bay, add Savannah Bay or Spring Bay, then use one private boat day instead of trying to change islands every night.",
      },
      {
        title: "5 nights",
        body: "Build a land base plus water rhythm: Virgin Gorda or North Sound for beaches and hotel time, one Jost or Tortola food and farm day, and enough buffer that ferries, weather, and restaurant hours do not crowd the trip.",
      },
      {
        title: "7 nights",
        body: "Combine Rosewood Little Dix Bay, North Sound, or a private-island base with a crewed yacht segment, Anegada lobster night, and a final decompression stay. This is where the BVI starts to feel different from a standard Caribbean resort week.",
      },
    ],
    related: ["maldives", "bali", "amalfi-coast"],
  },
  {
    slug: "anegada",
    kind: "destination",
    eyebrow: "Anegada travel advisor",
    title: "Anegada works only when the itinerary stops moving.",
    seoTitle: "Anegada Travel Advisor",
    description:
      "Anegada travel advisor guidance for BVI yacht itineraries, lobster nights, reef access, simple beach stays, ferries, weather, and trip hub planning.",
    intro:
      "Anegada is the BVI's low coral outlier: north-shore beaches, Horseshoe Reef, lobster dinners, conch history, and a pace that is easy to ruin by rushing. It belongs in the trip when the route gives it enough space.",
    bestFor: [
      "BVI yacht trips that can spare one or two nights without making the route feel tight",
      "Beach-first travelers who understand that Anegada is simple, remote, and weather-dependent",
      "Clients who want a lobster night, reef day, and quiet contrast to the busier BVI stops",
    ],
    timing:
      "Anegada needs same-week sea-state and ferry verification. Late December through February can bring stronger Christmas winds, which may make the crossing rougher even in the drier season. I treat the island as a plan-with-conditions stop, not a fixed trophy stop.",
    hotelLogic:
      "This is not a polished resort island. Anegada Beach Club fits rustic beach bungalows and watersports. Loblolly Beach Cottages work for beach-first simplicity. Anegada Reef Hotel is practical near Setting Point. The right question is whether the client wants the island's simplicity, not whether the property has a luxury label.",
    foodLogic:
      "Lobster is the ritual, but it should not become the whole plan. The Lobster Trap, Potter's by the Sea, Anegada Reef Hotel, Cow Wreck, Big Bamboo, Wonky Dog, and Anegada Beach Club are dinner or beach-meal candidates to verify by season, reservation time, advance lobster order, transport, and payment.",
    avoid:
      "I avoid adding Anegada to a short first-time BVI charter by default. A five-day route can turn the island into a crossing, a rushed dinner, and a weather problem. If the trip cannot give Anegada a real beach day, I would rather omit it cleanly.",
    cartaTake:
      "When I use Anegada, I use it for contrast. Arrive, slow down, choose the lobster dinner, wake up on the north coast, and let the island be quiet. That is the version worth planning around.",
    highlights: [
      {
        title: "Stay long enough for the island to work",
        body: "One night is the minimum viable yacht stop. Two nights is the better recommendation: arrival and lobster dinner, then a full Cow Wreck or Loblolly beach day before departure.",
      },
      {
        title: "Treat reef access as guided, current, and conditional",
        body: "Horseshoe Reef and the wreck history are part of Anegada's appeal, but they are also why casual reef promises are wrong. Use qualified operators, current conditions, and charter-company rules.",
      },
      {
        title: "Plan the small logistics early",
        body: "Island transport, advance lobster orders, cash and card backup, seasonal openings, air-conditioning, power, connectivity, and the return plan all matter more here than they do on easier BVI stops.",
      },
    ],
    tripShapes: [
      {
        title: "One night",
        body: "Daylight arrival, confirmed transport, early lobster order, sunset dinner, and a north-shore beach window the next morning before a weather-aware departure.",
      },
      {
        title: "Two nights",
        body: "The recommended shape: Setting Point arrival dinner, a full Cow Wreck or Loblolly day, and a guided reef, conch, or flexible beach morning before leaving.",
      },
      {
        title: "Inside a BVI week",
        body: "Use Anegada only when the BVI route still has slack. If the week is already packed with Norman, Cooper, Virgin Gorda, Jost, and North Sound, Anegada may be the thing to save for another trip.",
      },
    ],
    related: ["british-virgin-islands", "maldives", "bali"],
  },


  {
    slug: "belize",
    kind: "destination",
    eyebrow: "Belize travel advisor",
    title: "Belize works best when the reef and rainforest share the trip.",
    seoTitle: "Belize Travel Advisor",
    description:
      "Belize travel advisor guidance for pairing Cayo with Ambergris Caye, Placencia, or Hopkins, plus reef days, hotels, food, and honest Blue Hole advice.",
    intro:
      "Belize is not one long beach stay. Its advantage is the combination: the barrier reef, caves and Maya sites in Cayo, Garifuna culture around Hopkins, cacao country in Toledo, and small lodges where the place still feels close. The smartest first trip usually chooses two of those worlds and gives each one enough time.",
    bestFor: [
      "Divers and snorkelers who care more about reef access than a wide resort beach",
      "Couples and families who want rainforest, archaeology, wildlife, and water in one country",
      "Travelers who value intimate lodges and cultural depth more than shopping or polished nightlife",
    ],
    timing:
      "December through May is generally the drier window, but reef departures, cave access, small-aircraft flights, and sargassum can change week by week. I keep the key water day movable and reconfirm marine conditions close to travel rather than pretending a seasonal average can promise a perfect beach.",
    hotelLogic:
      "The hotel should solve the base. Blancaneaux Lodge, Gaia Riverlodge, Chaa Creek, and Ka'ana make Cayo feel deliberate. Matachica and Victoria House suit different versions of Ambergris Caye. Hamanasi links reef and rainforest from Hopkins, while Turtle Inn, Naia, and Itz'ana make Placencia a stronger coast-and-village base. Cayo Espanto and Royal Belize are privacy plays, not substitutes for seeing the country.",
    foodLogic:
      "Belizean food changes with the route. San Ignacio is useful for inland Belizean cooking, Hopkins for Garifuna dishes such as hudut and sere, Placencia for Creole cooking and seafood, and San Pedro for the widest restaurant choice. I would rather build around culture, the day's catch, and seafood seasons than default to the most expensive resort dining room.",
    avoid:
      "I would not sell the Great Blue Hole as mandatory, promise a Maldives-style beach, or squeeze Cayo, multiple cayes, Hopkins, and Placencia into one week. The scenic flight often explains the Blue Hole better for non-divers, while Hol Chan, Turneffe, Glover's Reef, or Lighthouse Reef shallows can deliver the richer marine-life day.",
    cartaTake:
      "For a first Belize trip, I usually start with three nights in Cayo and four on one coast or caye. That gives the caves, Maya sites, jungle, and reef enough room to feel like parts of one country instead of a series of transfers. The choice of that second base is where the trip becomes personal.",
    highlights: [
      {
        title: "Choose the second base by the trip you want",
        body: "Ambergris Caye gives reef access, restaurant depth, and energy. Caye Caulker is more casual. Placencia balances village, beach, reef, and inland access. Hopkins adds the strongest Garifuna layer.",
      },
      {
        title: "Treat the Blue Hole as a choice",
        body: "Qualified divers may value the deep geology and expedition. Non-divers often understand its scale best from the air, while shallower reef sites usually offer more color and marine life.",
      },
      {
        title: "Protect the reef day",
        body: "Wind, rain, sea state, and operator decisions can move departures. Keep one water day flexible and build a land-based fallback that still feels like Belize.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Choose one base, either Cayo or a caye. Two bases in three nights spend too much of the trip on movement.",
      },
      {
        title: "5 nights",
        body: "Pair two nights in Cayo with three on Ambergris Caye, Caye Caulker, Placencia, or Hopkins. Pick one coast, not several.",
      },
      {
        title: "7 nights",
        body: "Three nights in Cayo and four nights on one coast or caye is the cleanest first-trip shape, with one reef day left movable for weather.",
      },
    ],
    photos: [
      {
        src: "/photos/destinations/belize/barrier-reef.webp",
        alt: "Aerial view of the Belize Barrier Reef running beside the coast",
        caption: "Belize makes the most sense as a reef-and-rainforest country, not a beach-only escape.",
        credit: "Ian Morton, CC BY 2.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Belize_Barrier_Reef_Aerial_Looking_North.jpg",
      },
      {
        src: "/photos/destinations/belize/great-blue-hole.webp",
        alt: "Aerial view of the Great Blue Hole with a small boat crossing the water",
        caption: "The Great Blue Hole is a geological icon, but it is not automatically the best marine-life day.",
        credit: "U.S. Geological Survey, public domain",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Great_Blue_Hole.jpg",
      },
      {
        src: "/photos/destinations/belize/xunantunich.webp",
        alt: "El Castillo rising above the green grounds at Xunantunich in Belize",
        caption: "Xunantunich gives a Cayo stay historical weight beyond the caves and jungle.",
        credit: "Denis Barthel, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Xunantunich_Belize_1_19.jpg",
      },
      {
        src: "/photos/destinations/belize/caye-caulker.webp",
        alt: "Aerial view of turquoise water and the settlement on Caye Caulker",
        caption: "Caye Caulker is the casual, smaller-scale caye choice, with a different service ceiling from Ambergris.",
        credit: "dronepicr, CC BY 2.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Caye_Caulker_Belize_aerial_(20688990128).jpg",
      },
      {
        src: "/photos/destinations/belize/placencia.webp",
        alt: "Palm trees, loungers, and calm water on a beach in Placencia, Belize",
        caption: "Placencia works when village life, reef access, and inland days all need to fit one base.",
        credit: "Jim McIntosh, CC0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Placencia_Belize,_December_2021_-_The_Beach.jpg",
      },
      {
        src: "/photos/destinations/belize/cockscomb-waterfall.webp",
        alt: "Waterfall and dark swimming pool in the rainforest at Cockscomb Basin",
        caption: "Cockscomb Basin is a reminder that a coast stay can still include a serious rainforest day.",
        credit: "Cephas, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Cockscomb_Basin_Wildlife_Sanctuary_21.JPG",
      },
    ],
    related: ["british-virgin-islands", "bali", "cape-town"],
  },
  {
    slug: "berlin",
    kind: "destination",
    eyebrow: "Berlin travel advisor",
    title: "Berlin gets better when the plan leaves Mitte.",
    seoTitle: "Berlin Travel Advisor",
    description:
      "Berlin travel advisor guidance for neighborhood-led planning, design hotels, serious restaurants, cultural timing, and a private trip hub.",
    intro:
      "Berlin is a city of layers: Museum Island and the Brandenburg Gate, Kreuzberg and Neukölln food nights, bunker history, Staatsoper performances, adaptive-reuse hotels, and long afternoons beside canals or on a former airfield. The better trip respects those contrasts instead of forcing the city into a two-day landmark checklist.",
    bestFor: [
      "Food and culture travelers who want history, restaurants, art, and music in one city",
      "Couples choosing between formal Mitte hotels and more local design-led bases",
      "Repeat Europe travelers who prefer neighborhood texture to nonstop landmark touring",
    ],
    timing:
      "May through June and September through October give the cleanest balance of walking weather, culture, and neighborhood life. Winter can be excellent for museums, dining, concerts, and clubs, but it is a grayer and more indoor version of Berlin. In every season, I cluster the days by area because the city is more spread out than the map first suggests.",
    hotelLogic:
      "Hotel Adlon, The Ritz-Carlton, and Waldorf Astoria solve formal polish and familiar service. Chateau Royal, Telegraphenamt, Orania.Berlin, Das Stue, and Wilmina give more art, architecture, or neighborhood character. The right choice starts with the version of Berlin the traveler wants outside the lobby, not a generic ranking.",
    foodLogic:
      "Berlin food is spread across the city. Restaurant Tim Raue and Tulus Lotrek can anchor Kreuzberg, CODA and Hallmann & Klee pull a serious dinner into Neukölln, and Kantstrasse adds an Asian food route near the City West hotels. Currywurst, döner, bakeries, markets, and casual neighborhood stops belong beside the tasting menus because that range is part of the city's identity.",
    avoid:
      "I would not build the trip around random meals near Alexanderplatz, a two-day monument sprint, Checkpoint Charlie as a standalone photo stop, or a promised club entry. Mustafa's Gemüse Kebap may be worth the queue for the right traveler, but it should never be the only lunch plan. Berlin rewards context, alternatives, and enough time to change course.",
    cartaTake:
      "When I plan Berlin, I am usually balancing polish with the city people actually came to feel. A landmark morning can lead to a Kreuzberg dinner, a Charlottenburg hotel can open the door to Kantstrasse, and a museum day can end at the Philharmonie. The trip hub keeps those neighborhoods, reservations, transit notes, and backup plans close when the city starts to sprawl.",
    highlights: [
      {
        title: "Plan by neighborhood, not by monument",
        body: "Mitte handles much of the first-time history, while Kreuzberg, Neukölln, Charlottenburg, Prenzlauer Berg, and Friedrichshain give the food and local rhythm. Grouping the days geographically protects time and energy.",
      },
      {
        title: "Use hotel choice to set the tone",
        body: "Adlon is the iconic Brandenburg Gate address. Orania puts the traveler inside Kreuzberg. Wilmina pairs former-prison architecture with Lovis and City West access. These stays create different trips before the itinerary begins.",
      },
      {
        title: "Give history a guide and a reason",
        body: "Museum Island, the Wall, East Side Gallery, underground history, and Potsdam become more meaningful with political and historical context. I would rather plan one strong guided block than stack photo stops without a story.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one well-chosen base, one Mitte history day, one Wall or underground-history block, one Kreuzberg or Neukölln dinner, and either Charlottenburg, Prenzlauer Berg, or a concert for contrast.",
      },
      {
        title: "5 nights",
        body: "Add Potsdam, a deeper contemporary-art block, Kantstrasse food, one serious dining night, and a warm-weather canal, park, lake, or market window without rushing the neighborhoods.",
      },
      {
        title: "7 nights",
        body: "Let Berlin breathe across history, food, art, music, and local days. Use the extra time for Potsdam or the lakes, a flexible gallery afternoon, and evenings that do not all depend on a hard reservation.",
      },
    ],
    photos: [
      {
        src: "/photos/destinations/berlin/brandenburg-gate.webp",
        alt: "Brandenburg Gate illuminated at night on Pariser Platz in Berlin",
        caption: "The Brandenburg Gate belongs in the first-time Berlin story, but it should open the trip rather than define all of it.",
        credit: "Thomas Wolf, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Brandenburger_Tor_nachts_2012-07.jpg",
      },
      {
        src: "/photos/destinations/berlin/museum-island.webp",
        alt: "Aerial view of Berlin's Museum Island with the River Spree and TV Tower",
        caption: "Museum Island anchors the historic center, with the neighborhoods beyond it supplying the trip's second layer.",
        credit: "Kasa Fue, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Museumsinsel_Berlin_Juli_2021_1_(cropped).jpg",
      },
      {
        src: "/photos/destinations/berlin/east-side-gallery.webp",
        alt: "Thierry Noir's colorful mural figures along Berlin's East Side Gallery",
        caption: "The East Side Gallery works best with Wall and Cold War context, not as an isolated photo stop.",
        credit: "Paul VanDerWerf, CC BY 2.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:East_Side_Gallery_-_Thierry_Noir_-_2011.jpg",
      },
      {
        src: "/photos/destinations/berlin/currywurst.webp",
        alt: "Berlin currywurst served with crinkle-cut fries and mayonnaise",
        caption: "Currywurst is one part of a food city that also runs through Turkish Kreuzberg, Kantstrasse, and serious tasting menus.",
        credit: "Anagoria, CC BY 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:2017-06-07_Berliner_Currywurst_anagoria.jpg",
      },
      {
        src: "/photos/destinations/berlin/charlottenburg-palace.webp",
        alt: "Aerial view of Charlottenburg Palace and its formal gardens in Berlin",
        caption: "Charlottenburg and City West can be an intentional base, not a second choice after Mitte.",
        credit: "KK nationsonline, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Schloss-Charlottenburg-from-above.jpg",
      },
      {
        src: "/photos/destinations/berlin/landwehr-canal.webp",
        alt: "Landwehr Canal in Kreuzberg with trees, a red train, and the city beyond",
        caption: "The Landwehr Canal shows the softer neighborhood rhythm that a landmark-only Berlin itinerary misses.",
        credit: "A.Savin, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Landwehrkanal_in_B-Kreuzberg_07-2014.jpg",
      },
    ],
    related: ["copenhagen", "amsterdam", "budapest"],
  },

  {
    slug: "dubai",
    kind: "destination",
    eyebrow: "Dubai travel advisor",
    title: "Dubai gets more interesting when the skyline is only one part of the story.",
    seoTitle: "Dubai Travel Advisor",
    description:
      "Dubai travel advisor guidance for hotel bases, desert timing, Old Dubai, restaurants, honest sightseeing, and private trip hub planning.",
    intro:
      "Dubai is a split-screen city. One side is the skyline, beach resorts, private pools, and reservation-driven dining rooms. The other is Dubai Creek, Al Fahidi, Deira, Alserkal Avenue, desert conservation, and a food culture shaped by Indian, Pakistani, Afghan, East African, and Levantine communities. A strong trip uses both sides without turning either one into a performance.",
    bestFor: [
      "Couples and families who want beach, city, desert, and serious dining in one trip",
      "Food-focused travelers who want Michelin tasting menus and immigrant-led neighborhood meals",
      "First-time visitors who want the famous skyline edited into a more textured Dubai plan",
    ],
    timing:
      "November through March brings the easiest weather for beaches, outdoor dining, creek walks, and the desert, with peak hotel demand and higher rates. October and April can offer a useful balance of warmth and value. From May through September, heat above 95 degrees changes the plan, so outdoor time belongs early or late and the middle of the day needs a pool, spa, museum, or long lunch.",
    hotelLogic:
      "The base should solve the trip. Atlantis The Royal is a large, food-driven Palm resort with a social scene. Jumeirah Marsa Al Arab gives a newer beach stay beside Burj Al Arab. One&Only One Za'abeel is the architectural city choice with strong dining but no beach. Four Seasons Jumeirah Beach and One&Only Royal Mirage offer more classic resort rhythms, while Al Seef Heritage Hotel places the creek and older city at the door. A city-and-beach split can work, but only when the extra move earns its place.",
    foodLogic:
      "Dubai's dining story now runs from Trèsind Studio and FZN, both awarded three Michelin stars in the 2025 guide, to Kinoya, Manāo, Sufret Maryam, Moonrise, and the inexpensive food routes around Deira, Al Barsha, and International City. One tasting menu can anchor the trip. The more revealing day may pair an abra crossing and spice souk with Afghan bread, Pakistani pulao, East African barbecue, or Palestinian-Jordanian cooking, using a driver and verified map pins.",
    avoid:
      "The main mistake is making Downtown, Dubai Mall, Marina, and generic desert packages the whole trip. Burj Khalifa can be worth seeing, but The View at the Palm may explain the city's geography better. Mass-market dune bashing often means a convoy and crowded buffet camp. A private conservation-led desert morning, Al Fahidi and the creek, or Alserkal Avenue usually adds more texture. Regional security, airline operations, and official travel guidance also need fresh checks at booking and before departure.",
    cartaTake:
      "I would plan Dubai around controlled contrast. Start with the hotel that fits the client's version of the city, then protect one old-Dubai morning, one private desert window, one major dinner, and one neighborhood food route. The skyline still belongs in the trip. It just should not be the only thing the traveler remembers.",
    highlights: [
      {
        title: "Choose the base before choosing the sights",
        body: "Palm Jumeirah works best for travelers who plan to use the resort. Jumeirah Beach balances sand with city access. DIFC and One Za'abeel suit food, architecture, and business-meets-pleasure. Creek and Al Seef create a more cultural stay. Traffic makes those distinctions real.",
      },
      {
        title: "Use food to connect both Dubais",
        body: "Trèsind Studio, FZN, Row on 45, Smoked Room, Manāo, Kinoya, and Moonrise show the reservation-driven city. Deira, Al Barsha, and International City reveal the immigrant food culture that gives Dubai much of its everyday flavor.",
      },
      {
        title: "Build the desert around timing and conservation",
        body: "A sunrise or private conservation-reserve experience avoids the evening convoy pattern and leaves the rest of the day open for the pool, spa, or a serious dinner. Desert access should feel deliberate, not like a package-line obligation.",
      },
      {
        title: "Let Old Dubai and Alserkal break the checklist",
        body: "Al Fahidi, an abra across Dubai Creek, Deira's souks, and Alserkal Avenue add architecture, trade, art, and daily life to a trip that can otherwise feel built entirely around new landmarks.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one city or beach base, one early creek and Al Fahidi morning, one private desert window, one skyline view, and one anchor dinner. Keep the geography tight.",
      },
      {
        title: "5 nights",
        body: "Add a neighborhood food route, Alserkal Avenue, a real pool or beach day, and enough time for two different restaurant moods without stacking cross-city drives.",
      },
      {
        title: "7 nights",
        body: "Consider a city-and-beach split or a desert overnight, with one loose recovery day. Hatta can fit active travelers, but the 90-minute drive needs to serve a clear purpose.",
      },
    ],
    photos: [
      {
        src: "/photos/destinations/dubai/skyline.webp",
        alt: "Burj Khalifa rising above the Dubai skyline at sunset",
        caption: "The skyline is Dubai's first impression. The better itinerary gives it context rather than making it the whole trip.",
        credit: "imran shahabuddin, CC BY 2.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Burj_Khalifa_(worlds_tallest_building)_and_the_Dubai_skyline_(25781049892).jpg",
      },
      {
        src: "/photos/destinations/dubai/creek-abra.webp",
        alt: "Traditional wooden abra crossing Dubai Creek in Old Dubai",
        caption: "An abra across Dubai Creek connects Al Fahidi and Deira while restoring a human scale to the city.",
        credit: "selmaperictuzla, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Abra_at_Dubai_Creek_(_Old_Dubai_).jpg",
      },
      {
        src: "/photos/destinations/dubai/al-fahidi.webp",
        alt: "Traditional wind towers and earth-toned buildings in Al Fahidi, Dubai",
        caption: "Al Fahidi adds wind-tower architecture and old-city texture before the heat and crowds build.",
        credit: "Delta.jpg, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Al_Fahidi_Historical_Neighbourhood,_Dubai.jpg",
      },
      {
        src: "/photos/destinations/dubai/desert-oryx.webp",
        alt: "Arabian oryx walking among dunes and trees in Dubai Desert Conservation Reserve",
        caption: "A conservation-led desert experience changes the emphasis from dune-bashing spectacle to landscape and wildlife.",
        credit: "Sobiarahim, CC BY 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:A_herd_of_Arabian_Oryx_in_Dubai_Desert_Conservation_Reserve_Picture_02.jpg",
      },
      {
        src: "/photos/destinations/dubai/alserkal-avenue.webp",
        alt: "Contemporary art district walkway at Alserkal Avenue in Dubai",
        caption: "Alserkal Avenue is the contemporary-art counterpoint to the city's malls and landmark circuit.",
        credit: "Fuzheado, CC0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Dubai_Alserkal_Avenue_2024-11-17.jpg",
      },
      {
        src: "/photos/destinations/dubai/spice-souk.webp",
        alt: "Colorful dried flowers, herbs, and spices displayed at Dubai Spice Souk",
        caption: "Deira's spice souk belongs in a creek morning, ideally before the busiest part of the day.",
        credit: "Frodlekis, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Colourful_spices_in_Dubai_Spice_Souk_2018.jpg",
      },
      {
        src: "/photos/destinations/dubai/burj-al-arab.webp",
        alt: "Burj Al Arab hotel seen across the water from Jumeirah Beach",
        caption: "Burj Al Arab remains the icon, while newer Jumeirah beach hotels offer a more contemporary version of the same coastline.",
        credit: "Aleksandar Pasaric, CC0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Burj_Al_Arab_and_the_beach_(Pexels_823696).jpg",
      },
    ],
    related: ["bangkok", "maldives", "egypt"],
  },

  {
    slug: "florence",
    kind: "destination",
    eyebrow: "Florence travel advisor",
    title: "Florence gets better when the art, food, and neighborhoods have room to breathe.",
    seoTitle: "Florence Travel Advisor",
    description:
      "Florence travel advisor guidance for hotel bases, Uffizi timing, Oltrarno food, Tuscan wine days, honest crowd strategy, and trip hub planning.",
    intro:
      "Florence concentrates the Uffizi, Brunelleschi's dome, Medici history, artisan workshops, bistecca, and the Arno into a city small enough to cross on foot. That compactness is the gift and the trap. The better trip protects the major art, then moves into Oltrarno, Santo Spirito, gardens, markets, and the hill above the city before the center starts to feel like a queue.",
    bestFor: [
      "Art and history travelers who want the Renaissance explained rather than checked off",
      "Couples choosing between a central palazzo, an Oltrarno base, and a hilltop retreat",
      "Food and wine travelers who want trattorias, bistecca, markets, and Chianti planned with judgment",
    ],
    timing:
      "April through June and September through October are the strongest windows for walking, gardens, wine country, and milder temperatures. July and August bring heat and heavy demand, so I protect early museum entries, hill or garden downtime, and fewer cross-city obligations. Winter can be quiet and atmospheric, but seasonal restaurant and shop closures need a fresh check.",
    hotelLogic:
      "The hotel should solve the rhythm. Four Seasons Hotel Firenze gives a private garden and resort-like calm on the eastern edge of the center. Hotel Savoy puts the Duomo and Piazza della Signoria within an easy walk. Belmond Villa San Michele and Il Salviatino trade doorstep access for Fiesole views and relief from the center. Santo Spirito and Oltrarno suit travelers who care more about the evening neighborhood than absolute museum proximity.",
    foodLogic:
      "Florence needs more than one famous steak and a viral sandwich. Trattoria Da Burde, La Vecchia Bettola, Cammillo, Sostanza, Le Volpi e l'Uva, Enoteca Spontanea, Forno Becagli, Semel, and Sant'Ambrogio Market give the plan range. Bistecca alla fiorentina should be ordered by weight and expected rare. All'Antico Vinaio can be good, but the central queue should not own a meal.",
    avoid:
      "I would not stack the Uffizi, Accademia, Duomo complex, and Palazzo Pitti into one exhausting day. I also avoid photo-menu restaurants beside the major sights, San Lorenzo's exterior souvenir and imitation-leather stalls, Mercato Centrale framed as a secret local find, and Piazzale Michelangelo at the busiest part of the day. Timing and a five-minute walk away from the tourist spine solve a surprising amount.",
    cartaTake:
      "When I plan Florence, I am deciding when the city should feel monumental and when it should feel lived in. The Uffizi can have the serious morning. Santo Spirito can have the evening. A garden, a small workshop, or a glass of Chianti can hold the space between them. That balance is what keeps Florence from becoming one beautiful room after another.",
    highlights: [
      {
        title: "Protect the art mornings",
        body: "Use the first entry or a carefully guided window for the Uffizi and Accademia. The Opera del Duomo Museum often explains Brunelleschi, Ghiberti, and the cathedral complex better than a rushed cathedral-interior stop.",
      },
      {
        title: "Cross the Arno for the evening",
        body: "Santo Spirito, San Frediano, and the wider Oltrarno give Florence a more residential rhythm, with trattorias, wine bars, workshops, and fewer reasons to orbit the Duomo after dark.",
      },
      {
        title: "Use the hills as a reset",
        body: "Fiesole, Villa San Michele, Il Salviatino, Bardini Garden, Boboli, and San Miniato al Monte create space around the dense historic center. The hill layer can be a hotel strategy, a half-day, or simply the right sunset.",
      },
      {
        title: "Choose the famous food selectively",
        body: "Bistecca belongs in the trip when the restaurant, appetite, and rare preparation all fit. Mercato Centrale is useful, All'Antico Vinaio is context, and Sant'Ambrogio, Forno Becagli, Semel, or a real neighborhood trattoria often make the more revealing meal.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one walkable base, one protected Uffizi or Accademia morning, the Duomo complex, one Oltrarno evening, one serious Tuscan meal, and a garden or hill view instead of another museum sprint.",
      },
      {
        title: "5 nights",
        body: "Add artisan workshops, Palazzo Pitti or the Bargello, Sant'Ambrogio, a slower Santo Spirito day, and one private-driver Chianti Classico route built around two contrasting estates rather than nonstop tastings.",
      },
      {
        title: "7 nights",
        body: "Split the emotional shape between the center and a Fiesole or countryside base, or keep Florence as the anchor and add carefully chosen wine, garden, and Tuscan town days without changing hotels too often.",
      },
    ],
    photos: [
      {
        src: "/photos/destinations/florence/ponte-vecchio-sunset.webp",
        alt: "Ponte Vecchio crossing the Arno at sunset beneath Florence's historic skyline",
        caption: "The Arno and Ponte Vecchio make the strongest first impression near sunset, after the busiest crossing hours begin to ease.",
        credit: "Daniel Lu, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Ponte_Vecchio_at_sunset_from_Piazzale_Michelangelo_Florence_2023_dllu.jpg",
      },
      {
        src: "/photos/destinations/florence/florence-skyline.webp",
        alt: "Florence skyline with Brunelleschi's dome and Palazzo Vecchio above terracotta roofs",
        caption: "Florence compresses the Duomo, Palazzo Vecchio, the Arno, and the surrounding hills into a remarkably walkable center.",
        credit: "Peter Glyn, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Florence_Skyline.jpeg",
      },
      {
        src: "/photos/destinations/florence/uffizi-gallery.webp",
        alt: "Painted ceiling and sculpture-lined corridor inside the Uffizi Gallery in Florence",
        caption: "The Uffizi deserves a protected morning, not the leftover hour after several other major sights.",
        credit: "Diego Delso, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Galer%C3%ADa_Uffizi,_Florencia,_Italia,_2022-09-18,_DD_65-67_HDR.jpg",
      },
      {
        src: "/photos/destinations/florence/boboli-gardens.webp",
        alt: "Shaded gravel path and clipped greenery in Florence's Boboli Gardens",
        caption: "Boboli and Bardini give the dense museum city a necessary garden interval, especially in spring and early summer.",
        credit: "Armin Kleiner, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Florence,_Giardino_di_Boboli_2.jpg",
      },
      {
        src: "/photos/destinations/florence/bistecca-fiorentina.webp",
        alt: "Raw bone-in bistecca alla fiorentina displayed with Tuscan vegetables in Florence",
        caption: "A real bistecca alla fiorentina is a thick bone-in cut ordered by weight and served rare, so the restaurant fit matters before the plate arrives.",
        credit: "Thomas Oboe Lee, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Bistecca_alla_Fiorentina_@_Firenze_03.jpg",
      },
      {
        src: "/photos/destinations/florence/santo-spirito.webp",
        alt: "Narrow stone-lined Via Santo Spirito in Florence's Oltrarno neighborhood",
        caption: "Santo Spirito and the wider Oltrarno are where the evening can shift from monument traffic to workshops, wine bars, and neighborhood tables.",
        credit: "Francesco Bini, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Via_Santo_Spirito_veduta_verso_piazza_nazario_sauro.jpg",
      },
    ],
    related: ["amalfi-coast", "paris", "bordeaux"],
  },


  {
    slug: "geneva",
    kind: "destination",
    eyebrow: "Geneva travel advisor",
    title: "Geneva becomes interesting when the lake stops being scenery.",
    seoTitle: "Geneva Travel Advisor",
    description:
      "Geneva travel advisor guidance for lakefront hotels, Bains des Pâquis, Carouge, watchmaking, wine country, restaurants, and trip hub planning.",
    intro:
      "Geneva is easy to underestimate. The city is not only banks, watches, and international institutions. It is a public lake ritual at Bains des Pâquis, maker streets in Carouge, neighborhood restaurants in Eaux-Vives and Plainpalais, Geneva wine country, and museums that turn global ideas into human stories. The better trip lets those layers meet.",
    bestFor: [
      "Couples who want a low-friction lake-and-city break with strong food and hotel choices",
      "Watch, design, science, and history travelers who want specialist access instead of retail alone",
      "Switzerland trips that need an elegant opening, closing, or five-night city-and-vineyard chapter",
    ],
    timing:
      "May through June and September are the strongest all-around windows for lake life, walking, vineyards, and culture. July and August bring swimming and boats, but independent restaurant holidays need careful checks. Winter works for fondue, watchmaking, museums, performances, and a quieter city, with shorter daylight built into the plan.",
    hotelLogic:
      "The Woodward is the small, all-suite design choice. Four Seasons des Bergues, Beau-Rivage, and d'Angleterre solve the classic grand-hotel stay. La Réserve is the spa and resort reset outside the center. Old Town properties such as Les Armures trade larger facilities for historic intimacy. In every lakefront hotel, the exact floor and view category matter more than the word lakefront.",
    foodLogic:
      "Geneva's food plan should connect the local and international city. Bains des Pâquis is the essential communal ritual. Bistrot des Halles gives a specific route into longeole and atriaux, La Belotte is a candidate for lake perch with provenance checked on the live menu, and Du Rhône makes Pavés de Genève. Bombar, Matière, Mi Food Mi Raisin, and Susuru add the natural-wine layer, while Brasserie Lipp is a useful late-hours fallback to reconfirm by day.",
    avoid:
      "I would not build a day around the Jet d'Eau or Flower Clock, choose a Pâquis hotel without checking the exact block and room exposure, or spend a two-night stay on an Annecy border day. Geneva gets better when the famous lake view becomes movement, the Old Town is paired with a lived-in neighborhood, and the extra time goes to Carouge or Satigny.",
    cartaTake:
      "I would use Geneva for contrast. Start with a polished lakefront room, then swim or eat fondue at Bains des Pâquis, take a Mouette across the harbor, and give Carouge or the vineyards a real half-day. That mix of precision and ordinary local ritual is what makes the city feel worth the stop.",
    highlights: [
      {
        title: "Make the lake part of the day",
        body: "Bains des Pâquis, the Mouettes, Eaux-Vives, and a private boat all use the same water differently. The lake should shape movement and rhythm, not sit outside the hotel window.",
      },
      {
        title: "Choose a base by the evening you want",
        body: "Old Town and Rive give first-visit ease. Eaux-Vives balances the lake with residential restaurants. Pâquis gives grand hotels and global food with block-by-block noise questions. Plainpalais and Carouge feel younger, more local, and less ceremonial.",
      },
      {
        title: "Treat watchmaking as craft",
        body: "The Patek Philippe Museum is the collection anchor. A private assembly or enameling workshop can make the subject participatory, which is more revealing than a string of retail appointments.",
      },
      {
        title: "Give Geneva wine country real time",
        body: "Satigny and Dardagny add vineyards, estates, and a long-lunch rhythm within the canton. Use a driver for tastings and choose two stops with a purpose rather than turning the day into an inventory exercise.",
      },
    ],
    tripShapes: [
      {
        title: "3 nights",
        body: "Use one central base, one Old Town and lake day, one institution or watchmaking block, Bains des Pâquis, and a Carouge meal. Keep the Jet d'Eau inside the walk rather than making it the plan.",
      },
      {
        title: "5 nights",
        body: "Add a Satigny and Dardagny wine day, more time in Eaux-Vives or Plainpalais, and one unstructured lake window. This is the trip length that lets Geneva stop feeling like a stopover.",
      },
      {
        title: "7 nights",
        body: "Keep five slow Geneva days, then choose one weather-led extension such as Yvoire, Salève, or Annecy and one flexible museum, spa, vineyard, or boat day. Seven days of central sightseeing would be padding.",
      },
    ],
    photos: [
      {
        src: "/photos/destinations/geneva/lake-and-city.webp",
        alt: "Lake Geneva harbor with clear water, a passenger boat, and mountains beyond the city",
        caption: "Geneva works best when the lake becomes transport, swimming, and daily ritual rather than a view alone.",
        credit: "Karlheinz Klingbeil, CC BY 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Geneva,_Switzerland,_2026.jpg",
      },
      {
        src: "/photos/destinations/geneva/bains-des-paquis.webp",
        alt: "Bains des Pâquis lighthouse and swimming area at twilight on Lake Geneva",
        caption: "Bains des Pâquis is the city's democratic lake ritual, from swimming and sauna to communal meals and winter fondue.",
        credit: "Alain Zuin, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Nature,_cr%C3%A9puscule_aux_bains_des_P%C3%A2quis,_1000pix.jpg",
      },
      {
        src: "/photos/destinations/geneva/carouge-market-square.webp",
        alt: "Tree-lined Place du Marché in Carouge with Sainte-Croix church at the end of the street",
        caption: "Carouge deserves time for its market streets, makers, cafés, and neighborhood restaurants rather than a quick photo stop.",
        credit: "HJPD, CC BY 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Carouge_Place_du_March%C3%A9.jpg",
      },
      {
        src: "/photos/destinations/geneva/palais-des-nations.webp",
        alt: "Pale stone façades and formal grounds at the Palais des Nations in Geneva",
        caption: "A guided Palais des Nations visit works best when it is paired with the people and ideas behind the institution.",
        credit: "Vassil, CC0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Palace_of_Nations_Geneva_20102014_02.jpg",
      },
      {
        src: "/photos/destinations/geneva/bourdigny-vineyards.webp",
        alt: "Autumn vineyards and a small field shelter in Bourdigny in the canton of Geneva",
        caption: "Bourdigny, Satigny, and Dardagny make Geneva wine country a genuine regional day, not a generic Swiss-wine add-on.",
        credit: "Sdnegel, CC BY-SA 4.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Bourdigny_in_autumn.jpg",
      },
      {
        src: "/photos/destinations/geneva/saint-pierre-cathedral.webp",
        alt: "Illuminated neoclassical façade of Saint Pierre Cathedral in Geneva's Old Town at night",
        caption: "Saint Pierre and its archaeology give the Old Town depth before the itinerary moves toward the lake and neighborhoods.",
        credit: "Fenliokao, CC BY-SA 3.0",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Cathedral_Saint_Pierre_in_Geneva,_Switzerland.jpg",
      },
    ],
    related: ["paris", "copenhagen", "florence"],
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
