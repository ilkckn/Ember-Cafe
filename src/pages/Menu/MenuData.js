export const menuData = {
  categories: [
    {
      id: "signature-coffee",
      label: "Signature Coffee",
      description:
        "Small-batch roasts, ethically sourced and roasted over an open flame.",
      image: "/menu/coffee.png",
    },
    {
      id: "handmade-pastries",
      label: "Handmade Pastries",
      description:
        "Laminated by hand every morning before the sun peaks over the horizon.",
      image: "/menu/croissant.png",
    },
    {
      id: "special-cakes",
      label: "Special Cakes",
      description: "The Sweet Hearth — crafted for every occasion.",
      image: "/menu/cake.jpg",
    },
    {
      id: "breakfast",
      label: "Breakfast",
      description: "Mornings made warm, served until noon.",
      image: "/menu/breakfast.jpg",
    },
  ],

  items: [
    // ─────────────────────────────────────────────
    // SIGNATURE COFFEE
    // ─────────────────────────────────────────────
    {
      id: "sc-01",
      category: "signature-coffee",
      type: "Signature Coffee",
      name: "Ember Latte",
      description:
        "A velvet-smooth double espresso with locally sourced organic milk and a hint of smoked honey.",
      price: 6.5,
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop",
      tags: ["organic", "chef's choice"],
      featured: true,
      available: true,
    },
    {
      id: "sc-02",
      category: "signature-coffee",
      type: "Signature Coffee",
      name: "Origin Pour-over",
      description:
        "Single origin beans from Ethiopia, notes of jasmine and citrus. Brewed to order.",
      price: 5.75,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop",
      tags: ["vegan"],
      featured: false,
      available: true,
    },
    {
      id: "sc-03",
      category: "signature-coffee",
      type: "Signature Coffee",
      name: "Charred Mocha",
      description:
        "Dark chocolate ganache, double shot, and toasted marshmallow topping.",
      price: 7.0,
      image:
        "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&auto=format&fit=crop",
      tags: [],
      featured: false,
      available: true,
    },
    {
      id: "sc-04",
      category: "signature-coffee",
      type: "Signature Coffee",
      name: "Hearthside Flat White",
      description:
        "Ristretto-pulled double shot with micro-foamed whole milk. Bold and silky.",
      price: 5.5,
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop",
      tags: ["bestseller"],
      featured: false,
      available: true,
    },
    {
      id: "sc-05",
      category: "signature-coffee",
      type: "Signature Coffee",
      name: "Salted Caramel Cortado",
      description:
        "Equal parts espresso and warm milk, finished with house-made salted caramel drizzle.",
      price: 6.0,
      tags: ["seasonal"],
      featured: false,
      available: true,
    },
    // {
    //   id: "sc-06",
    //   category: "signature-coffee",
    //   type: "Signature Coffee",
    //   name: "Cold Brew Reserve",
    //   description:
    //     "Steeped 20 hours in cold water. Served over hand-chipped ember ice with a whisper of vanilla.",
    //   price: 6.25,
    //   tags: ["vegan", "cold"],
    //   featured: false,
    //   available: true,
    // },
    // {
    //   id: "sc-07",
    //   category: "signature-coffee",
    //   type: "Signature Coffee",
    //   name: "Spiced Cardamom Cappuccino",
    //   description:
    //     "Classic cappuccino dusted with freshly ground cardamom and a trace of rose water.",
    //   price: 5.75,
    //   tags: ["organic"],
    //   featured: false,
    //   available: true,
    // },
    // {
    //   id: "sc-08",
    //   category: "signature-coffee",
    //   type: "Signature Coffee",
    //   name: "Ember Espresso Tonic",
    //   description:
    //     "A single origin espresso shot over chilled tonic water with a slice of dried blood orange.",
    //   price: 6.75,
    //   tags: ["cold", "seasonal"],
    //   featured: false,
    //   available: true,
    // },

    // ─────────────────────────────────────────────
    // HANDMADE PASTRIES
    // ─────────────────────────────────────────────
    {
      id: "hp-01",
      category: "handmade-pastries",
      type: "Handmade Pastries",
      name: "Heritage Croissant",
      description:
        "72-hour fermented dough with AOP butter from Normandy. Perfectly golden and flaky.",
      price: 4.5,
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop",
      tags: ["baked fresh"],
      featured: false,
      available: true,
    },
    {
      id: "hp-02",
      category: "handmade-pastries",
      type: "Handmade Pastries",
      name: "Honey & Almond Danish",
      description:
        "Crème pâtissière, wild honey glaze, and toasted flaked almonds.",
      price: 5.25,
      image:
        "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&auto=format&fit=crop",
      tags: [],
      featured: false,
      available: true,
    },
    {
      id: "hp-03",
      category: "handmade-pastries",
      type: "Handmade Pastries",
      name: "Raspberry Pain au Chocolat",
      description:
        "Valrhona dark chocolate with a vibrant house-made raspberry coulis center.",
      price: 5.5,
      image:
        "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=600&auto=format&fit=crop",
      tags: [],
      featured: false,
      available: true,
    },
    {
      id: "hp-04",
      category: "handmade-pastries",
      type: "Handmade Pastries",
      name: "Pistachio Morning Bun",
      description:
        "Orange zest laminated dough rolled in cinnamon sugar and filled with pistachio cream.",
      price: 5.75,
      image:
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop",
      tags: ["chef's choice"],
      featured: true,
      available: true,
    },
    {
      id: "hp-05",
      category: "handmade-pastries",
      type: "Handmade Pastries",
      name: "Brioche Swirl",
      description:
        "Brioche dough swirled with tahini, date syrup, and a pinch of fleur de sel.",
      price: 5.0,
      tags: ["vegan"],
      featured: false,
      available: true,
    },
    {
      id: "hp-06",
      category: "handmade-pastries",
      type: "Handmade Pastries",
      name: "Soft Rye Knot",
      description:
        "Soft rye knot brushed with brown butter and scattered with caraway seeds.",
      price: 4.25,
      tags: ["baked fresh"],
      featured: false,
      available: true,
    },
    // {
    //   id: "hp-07",
    //   category: "handmade-pastries",
    //   type: "Handmade Pastries",
    //   description:
    //     "Caramelised laminated dough with ceremonial grade matcha folded into every layer.",
    //   price: 6.0,
    //   tags: ["seasonal"],
    //   featured: false,
    //   available: true,
    // },
    // {
    //   id: "hp-08",
    //   category: "handmade-pastries",
    //   type: "Handmade Pastries",
    //   description:
    //     "Classic French almond cake with a deep noisette crust, served warm.",
    //   price: 4.0,
    //   tags: ["gluten-free option"],
    //   featured: false,
    //   available: true,
    // },

    // ─────────────────────────────────────────────
    // SPECIAL CAKES
    // ─────────────────────────────────────────────
    {
      id: "ck-01",
      category: "special-cakes",
      type: "Special Cakes",
      name: "The Ember Cake",
      description:
        "Layers of rich dark chocolate sponge, smoked salted caramel, and a velvet ganache. Topped with gold leaf and charred cocoa nibs.",
      price: 12.0,
      priceUnit: "/ slice",
      orderWhole: true,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop",
      tags: ["signature showstopper"],
      featured: true,
      available: true,
    },
    {
      id: "ck-02",
      category: "special-cakes",
      type: "Special Cakes",
      name: "Wild Berry Mascarpone",
      description:
        "Light chiffon cake with fresh seasonal berries and honeyed mascarpone cream.",
      price: 9.5,
      priceUnit: "/ slice",
      orderWhole: true,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop",
      tags: ["gluten-free"],
      featured: false,
      available: true,
    },
    {
      id: "ck-03",
      category: "special-cakes",
      type: "Special Cakes",
      name: "Lavender & Earl Grey Tart",
      description:
        "Buttery tart shell with Earl Grey custard, lavender glaze, and candied lemon peel.",
      price: 8.5,
      priceUnit: "/ slice",
      orderWhole: false,
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop",
      tags: ["seasonal"],
      featured: false,
      available: true,
    },
    {
      id: "ck-04",
      category: "special-cakes",
      type: "Special Cakes",
      name: "Roasted Pear & Hazelnut Torte",
      description:
        "Hazelnut praline mousse layered with cinnamon-roasted pear compote on a dark sablé base.",
      price: 10.0,
      priceUnit: "/ slice",
      orderWhole: true,
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop",
      tags: ["chef's choice"],
      featured: false,
      available: true,
    },
    {
      id: "ck-05",
      category: "special-cakes",
      type: "Special Cakes",
      name: "Miso Caramel Cheesecake",
      description:
        "New York-style cheesecake elevated with white miso caramel swirl and toasted sesame brittle.",
      price: 9.0,
      priceUnit: "/ slice",
      orderWhole: true,
      image:
        "https://images.unsplash.com/photo-1727056353548-128931097fc3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [],
      featured: false,
      available: true,
    },
    // {
    //   id: "ck-06",
    //   category: "special-cakes",
    //   type: "Special Cakes",
    //   name: "Saffron & Orange Blossom Cake",
    //   description:
    //     "Fragrant olive oil sponge soaked in saffron syrup with whipped orange blossom cream.",
    //   price: 9.75,
    //   priceUnit: "/ slice",
    //   orderWhole: false,
    //   tags: ["vegan"],
    //   featured: false,
    //   available: true,
    // },
    // {
    //   id: "ck-07",
    //   category: "special-cakes",
    //   type: "Special Cakes",
    //   name: "Black Sesame Roll Cake",
    //   description:
    //     "Japanese-style swiss roll filled with black sesame cream and a light dusting of kinako.",
    //   price: 8.75,
    //   priceUnit: "/ slice",
    //   orderWhole: false,
    //   tags: ["seasonal"],
    //   featured: false,
    //   available: true,
    // },

    // ─────────────────────────────────────────────
    // BREAKFAST
    // ─────────────────────────────────────────────
    {
      id: "br-01",
      category: "breakfast",
      type: "Breakfast",
      name: "Ember Eggs Benedict",
      description:
        "Slow-poached eggs on toasted sourdough with house-cured salmon, hollandaise, and micro herbs.",
      price: 14.5,
      image:
        "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&auto=format&fit=crop",
      tags: ["bestseller"],
      featured: true,
      available: true,
    },
    {
      id: "br-02",
      category: "breakfast",
      type: "Breakfast",
      name: "Hearth Granola Bowl",
      description:
        "House-toasted oat granola with seasonal compote, Greek yogurt, and wildflower honey.",
      price: 9.0,
      image:
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&auto=format&fit=crop",
      tags: ["vegetarian", "gluten-free option"],
      featured: false,
      available: true,
    },
    {
      id: "br-03",
      category: "breakfast",
      type: "Breakfast",
      name: "Smashed Avocado Toast",
      description:
        "Sourdough with smashed hass avocado, pickled red onion, chilli flakes, and a soft-boiled egg.",
      price: 12.5,
      image:
        "https://images.unsplash.com/photo-1603046891744-1f057a5e9586?w=600&auto=format&fit=crop",
      tags: ["vegan option"],
      featured: false,
      available: true,
    },
    {
      id: "br-04",
      category: "breakfast",
      type: "Breakfast",
      name: "Ricotta Hotcakes",
      description:
        "Fluffy ricotta pancakes served with roasted strawberries, whipped butter, and maple syrup.",
      price: 13.0,
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&auto=format&fit=crop",
      tags: ["vegetarian", "chef's choice"],
      featured: false,
      available: true,
    },
    {
      id: "br-05",
      category: "breakfast",
      type: "Breakfast",
      name: "The Full Ember Plate",
      description:
        "Two eggs your way, smoked back bacon, grilled tomato, house baked beans, sourdough toast, and a seasonal mushroom sauté.",
      price: 17.5,
      tags: ["hearty"],
      featured: false,
      available: true,
    },
    // {
    //   id: "br-06",
    //   category: "breakfast",
    //   type: "Breakfast",
    //   name: "Turkish Morning Plate",
    //   description:
    //     "A spread of white cheese, olives, cucumber, tomato, boiled egg, simit, and house-made fig jam. Served with a glass of çay.",
    //   price: 15.0,
    //   tags: ["vegetarian", "seasonal"],
    //   featured: false,
    //   available: true,
    // },
    // {
    //   id: "br-07",
    //   category: "breakfast",
    //   type: "Breakfast",
    //   name: "Shakshuka",
    //   description:
    //     "Eggs poached in a spiced tomato and roasted pepper sauce, finished with feta crumble and warm sourdough.",
    //   price: 13.5,
    //   tags: ["vegetarian", "gluten-free option"],
    //   featured: false,
    //   available: true,
    // },
    // {
    //   id: "br-08",
    //   category: "breakfast",
    //   type: "Breakfast",
    //   name: "Seasonal Porridge",
    //   description:
    //     "Slow-cooked rolled oats with oat milk, brown sugar crust, seasonal fruit, and a drizzle of tahini.",
    //   price: 8.5,
    //   tags: ["vegan", "gluten-free"],
    //   featured: false,
    //   available: true,
    // },
  ],
};

export default menuData;
