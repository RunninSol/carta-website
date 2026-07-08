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
