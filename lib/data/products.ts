import type { Product } from "@/lib/types";
import { brands, getBrandById } from "./brands";
import { categories, getCategoryById } from "./categories";

// Helper to safely resolve brand/category with fallback
const brand = (id: string) => getBrandById(id)!;
const cat = (id: string) => getCategoryById(id)!;

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════
  // TUNA (Brand: Bostany)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "tuna-001",
    slug: "tuna-chunks",
    name: "Tuna Chunks",
    nameAr: "قطع تونة",
    description:
      "Premium light-meat tuna chunks packed in GMO-free soy oil. Sourced from the finest catches and carefully processed to preserve natural flavor and texture. A staple of the Egyptian kitchen, perfect for sandwiches, salads, or pasta dishes.",
    descriptionAr:
      "قطع تونة لحم فاتح معبأة في زيت صويا خالي من الكائنات المعدلة وراثياً. من أجود أنواع الصيد ومعالجة بعناية للحفاظ على النكهة والقوام الطبيعي.",
    brand: brand("bostany"),
    category: cat("tuna"),
    images: ["/images/products/tuna/tuna-chunks.jpeg"],
    variants: [
      {
        id: "tuna-001-std",
        size: "Standard Can",
        price: 38,
        sku: "BOS-TUN-001",
        inStock: true,
        weight: "170g",
      },
    ],
    badges: [],
    features: ["Light Meat", "GMO-Free Soy Oil", "High Protein"],
    nutritionalInfo: {
      servingSize: "85g (½ can)",
      calories: 120,
      protein: "26g",
      fat: "1.5g",
      carbs: "0g",
      sodium: "320mg",
    },
    isActive: true,
  },
  {
    id: "tuna-002",
    slug: "spicy-tuna-chunks",
    name: "Spicy Tuna Chunks",
    nameAr: "قطع تونة حارة",
    description:
      "Bold and flavorful tuna chunks infused with hot chillies for an extra kick. Made with the same premium light meat and GMO-free oil as our classic tuna, with a spicy twist that elevates any meal. A favorite across Egyptian households.",
    descriptionAr:
      "قطع تونة بنكهة جريئة مع فلفل حار لمزيد من الحرارة. مصنوعة من نفس اللحم الفاتح الممتاز والزيت الخالي من الكائنات المعدلة وراثياً.",
    brand: brand("bostany"),
    category: cat("tuna"),
    images: ["/images/products/tuna/spicy-tuna-chunks.jpeg"],
    variants: [
      {
        id: "tuna-002-std",
        size: "Standard Can",
        price: 42,
        sku: "BOS-TUN-002",
        inStock: true,
        weight: "170g",
      },
    ],
    badges: ["bestseller"],
    features: ["With Hot Chillies", "Light Meat", "GMO-Free Soy Oil"],
    nutritionalInfo: {
      servingSize: "85g (½ can)",
      calories: 125,
      protein: "25g",
      fat: "2g",
      carbs: "1g",
      sodium: "380mg",
    },
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // OLIVE OIL (Brand: Bostany)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "oil-001",
    slug: "virgin-olive-oil",
    name: "Virgin Olive Oil",
    nameAr: "زيت زيتون بكر",
    description:
      "Cold pressed virgin olive oil with a smooth, delicate flavor profile. Ideal for everyday cooking, dressings, and light sautéing. Bostany's olive oil carries over a century of expertise in selecting the finest Mediterranean olives.",
    descriptionAr:
      "زيت زيتون بكر معصور على البارد بنكهة ناعمة ورقيقة. مثالي للطهي اليومي والسلطات والتحمير الخفيف. يحمل زيت زيتون بستاني أكثر من قرن من الخبرة.",
    brand: brand("bostany"),
    category: cat("olive-oil"),
    images: [
      "/images/products/olive-oil/virgin-olive-oil-500ml.jpeg",
      "/images/products/olive-oil/virgin-olive-oil-250ml.jpeg",
    ],
    variants: [
      {
        id: "oil-001-250",
        size: "250ml",
        price: 95,
        sku: "BOS-OIL-001-250",
        inStock: true,
        weight: "250ml",
      },
      {
        id: "oil-001-500",
        size: "500ml",
        price: 165,
        sku: "BOS-OIL-001-500",
        inStock: true,
        weight: "500ml",
      },
    ],
    badges: [],
    features: ["Cold Pressed", "100% Natural", "Rich in Antioxidants"],
    isActive: true,
  },
  {
    id: "oil-002",
    slug: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil",
    nameAr: "زيت زيتون بكر ممتاز",
    description:
      "Premium cold pressed extra virgin olive oil — the finest grade from Bostany's heritage collection. Rich, fruity, and aromatic with a peppery finish. Perfect for drizzling over salads, dipping bread, or finishing cooked dishes.",
    descriptionAr:
      "زيت زيتون بكر ممتاز معصور على البارد — أجود درجة من مجموعة بستاني التراثية. غني وعطري بنكهة فلفلية. مثالي للسلطات وغمس الخبز.",
    brand: brand("bostany"),
    category: cat("olive-oil"),
    images: [
      "/images/products/olive-oil/extra-virgin-olive-oil-500ml.jpeg",
      "/images/products/olive-oil/extra-virgin-olive-oil-250ml.jpeg",
    ],
    variants: [
      {
        id: "oil-002-250",
        size: "250ml",
        price: 120,
        sku: "BOS-OIL-002-250",
        inStock: true,
        weight: "250ml",
      },
      {
        id: "oil-002-500",
        size: "500ml",
        price: 195,
        sku: "BOS-OIL-002-500",
        inStock: true,
        weight: "500ml",
      },
    ],
    badges: ["bestseller"],
    features: ["Cold Pressed", "First Press", "Rich & Fruity", "Low Acidity"],
    nutritionalInfo: {
      servingSize: "15ml (1 tbsp)",
      calories: 120,
      protein: "0g",
      fat: "14g",
      carbs: "0g",
      sodium: "0mg",
    },
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // RICE BRAN OIL (Brand: King)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "oil-003",
    slug: "rice-bran-oil",
    name: "Rice Bran Oil",
    nameAr: "زيت نخالة الأرز",
    description:
      "King Rice Bran Oil with an exceptionally high Oryzanol content of 8,000 ppm — a powerful natural antioxidant. With a high smoke point of 240°C, it's the ideal choice for deep frying, stir-frying, and all high-heat cooking. Heart-healthy and light in taste.",
    descriptionAr:
      "زيت نخالة الأرز كينج بمحتوى أوريزانول عالي 8,000 جزء في المليون — مضاد أكسدة طبيعي قوي. بنقطة دخان عالية 240 درجة مئوية، مثالي للقلي العميق والطهي بحرارة عالية.",
    brand: brand("king"),
    category: cat("rice-bran-oil"),
    images: [
      "/images/products/rice-bran-oil/rice-bran-oil-1l.jpeg",
      "/images/products/rice-bran-oil/rice-bran-oil-2l.jpeg",
    ],
    variants: [
      {
        id: "oil-003-1l",
        size: "1L",
        price: 85,
        sku: "KNG-RBO-001-1L",
        inStock: true,
        weight: "1L",
      },
      {
        id: "oil-003-2l",
        size: "2L",
        price: 155,
        sku: "KNG-RBO-001-2L",
        inStock: true,
        weight: "2L",
      },
    ],
    badges: [],
    features: [
      "Oryzanol 8,000 ppm",
      "High Smoke Point 240°C",
      "Heart Healthy",
      "Light Taste",
    ],
    nutritionalInfo: {
      servingSize: "15ml (1 tbsp)",
      calories: 120,
      protein: "0g",
      fat: "14g",
      carbs: "0g",
      sodium: "0mg",
    },
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // CANNED GOODS (Brand: Bostany)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "can-001",
    slug: "plain-fava-beans",
    name: "Plain Fava Beans (Medammes)",
    nameAr: "فول مدمس",
    description:
      "Bostany's classic foul medammes — the cornerstone of every Egyptian breakfast. Made from 100% natural fava beans with no artificial flavors, colors, or preservatives. Rich in protein and fiber, gluten free, and ready to serve with your favorite toppings.",
    descriptionAr:
      "فول مدمس بستاني الكلاسيكي — أساس كل فطور مصري. مصنوع من فول طبيعي 100% بدون نكهات أو ألوان أو مواد حافظة صناعية. غني بالبروتين والألياف وخالي من الغلوتين.",
    brand: brand("bostany"),
    category: cat("canned-goods"),
    images: ["/images/products/canned-goods/plain-fava-beans.jpeg"],
    variants: [
      {
        id: "can-001-std",
        size: "Standard Can",
        price: 28,
        sku: "BOS-CAN-001",
        inStock: true,
        weight: "400g",
      },
    ],
    badges: [],
    features: [
      "100% Natural",
      "No Artificial Flavors",
      "Gluten Free",
      "High Protein & Fiber",
    ],
    nutritionalInfo: {
      servingSize: "130g (½ can)",
      calories: 140,
      protein: "9g",
      fat: "0.5g",
      carbs: "24g",
      sodium: "460mg",
    },
    isActive: true,
  },
  {
    id: "can-002",
    slug: "sweet-corn",
    name: "Whole Kernel Sweet Corn",
    nameAr: "ذرة حلوة حبات كاملة",
    description:
      "Plump, golden whole-kernel sweet corn harvested at peak sweetness. 100% natural with no artificial flavors and completely gluten free. Versatile for salads, soups, pizza toppings, or as a side dish the whole family enjoys.",
    descriptionAr:
      "ذرة حلوة حبات كاملة ذهبية محصودة في ذروة حلاوتها. طبيعية 100% بدون نكهات صناعية وخالية من الغلوتين تماماً. متعددة الاستخدامات للسلطات والشوربة والبيتزا.",
    brand: brand("bostany"),
    category: cat("canned-goods"),
    images: [
      "/images/products/canned-goods/sweet-corn.jpeg",
      "/images/products/canned-goods/sweet-corn-alt.jpeg",
    ],
    variants: [
      {
        id: "can-002-std",
        size: "Standard Can",
        price: 32,
        sku: "BOS-CAN-002",
        inStock: true,
        weight: "340g",
      },
    ],
    badges: [],
    features: ["100% Natural", "No Artificial Flavors", "Gluten Free"],
    nutritionalInfo: {
      servingSize: "125g (½ can)",
      calories: 100,
      protein: "3g",
      fat: "1g",
      carbs: "21g",
      sodium: "290mg",
    },
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // COFFEE (Brand: TopValue)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cof-001",
    slug: "instant-coffee",
    name: "Instant Coffee",
    nameAr: "قهوة سريعة التحضير",
    description:
      "TopValue Instant Coffee — a smooth, full-bodied blend crafted for the perfect cup every time. Made from carefully selected beans and freeze-dried to lock in aroma and flavor. Dissolves instantly in hot or cold water.",
    descriptionAr:
      "قهوة توب فاليو سريعة التحضير — مزيج ناعم وكامل القوام لفنجان مثالي في كل مرة. مصنوعة من حبوب مختارة بعناية ومجففة بالتجميد للحفاظ على الرائحة والنكهة.",
    brand: brand("topvalue"),
    category: cat("coffee"),
    images: [
      "/images/products/coffee/instant-coffee-100g.jpeg",
      "/images/products/coffee/instant-coffee-200g.jpeg",
    ],
    variants: [
      {
        id: "cof-001-100",
        size: "100g",
        price: 55,
        sku: "TV-COF-001-100",
        inStock: true,
        weight: "100g",
      },
      {
        id: "cof-001-200",
        size: "200g",
        price: 89,
        sku: "TV-COF-001-200",
        inStock: true,
        weight: "200g",
      },
    ],
    badges: [],
    features: ["Premium Quality", "Freeze Dried", "Rich Aroma"],
    isActive: true,
  },
  {
    id: "cof-002",
    slug: "gold-instant-coffee",
    name: "Gold Instant Coffee",
    nameAr: "قهوة سريعة التحضير جولد",
    description:
      "The premium tier of TopValue coffee. Gold Instant Coffee delivers a richer, more refined taste with deeper caramel notes and a velvety smooth finish. Selected from the top 10% of the harvest for an elevated everyday coffee experience.",
    descriptionAr:
      "الفئة الممتازة من قهوة توب فاليو. قهوة جولد سريعة التحضير تقدم طعماً أغنى وأكثر صقلاً مع نكهات كراميل عميقة ونعومة مخملية.",
    brand: brand("topvalue"),
    category: cat("coffee"),
    images: [
      "/images/products/coffee/gold-instant-coffee-100g.jpeg",
      "/images/products/coffee/gold-instant-coffee-200g.jpeg",
    ],
    variants: [
      {
        id: "cof-002-100",
        size: "100g",
        price: 65,
        sku: "TV-COF-002-100",
        inStock: true,
        weight: "100g",
      },
      {
        id: "cof-002-200",
        size: "200g",
        price: 109,
        sku: "TV-COF-002-200",
        inStock: true,
        weight: "200g",
      },
    ],
    badges: ["new"],
    features: ["Premium Gold Quality", "Top 10% Beans", "Velvety Smooth"],
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // CHEESE & DAIRY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dairy-001",
    slug: "feta-white-cheese",
    name: "Feta White Cheese",
    nameAr: "جبنة فيتا بيضاء",
    description:
      "Prego Feta White Cheese — a creamy, tangy feta-style cheese perfect for salads, sandwiches, and traditional Egyptian dishes. Made with a blend of milk and vegetable oils for a smooth texture and consistent quality at an accessible price.",
    descriptionAr:
      "جبنة فيتا بيضاء بريجو — جبنة كريمية حامضة مثالية للسلطات والسندويشات والأطباق المصرية التقليدية. مصنوعة من مزيج الحليب والزيوت النباتية.",
    brand: brand("prego"),
    category: cat("cheese-dairy"),
    images: ["/images/products/cheese-dairy/feta-white-cheese.jpeg"],
    variants: [
      {
        id: "dairy-001-500",
        size: "500g",
        price: 45,
        sku: "PRG-CHE-001",
        inStock: true,
        weight: "500g",
      },
    ],
    badges: [],
    features: ["Creamy Texture", "Tangy Flavor"],
    isActive: true,
  },
  {
    id: "dairy-002",
    slug: "cheese-paste",
    name: "Cheese Paste",
    nameAr: "جبنة مطبوخة",
    description:
      "Brigo Cheese Paste — a smooth, spreadable processed cheese that's a lunchbox and breakfast staple in Egyptian homes. Melts beautifully and pairs perfectly with baladi bread or toast. A convenient, affordable everyday cheese option.",
    descriptionAr:
      "جبنة بريجو مطبوخة — جبنة ناعمة قابلة للدهن، عنصر أساسي في الإفطار ولانش بوكس المصري. تذوب بشكل جميل وتتناسب مع الخبز البلدي أو التوست.",
    brand: brand("brigo"),
    category: cat("cheese-dairy"),
    images: ["/images/products/cheese-dairy/cheese-paste.jpeg"],
    variants: [
      {
        id: "dairy-002-std",
        size: "Standard Pack",
        price: 35,
        sku: "BRG-CHE-001",
        inStock: true,
        weight: "200g",
      },
    ],
    badges: [],
    features: ["Smooth & Spreadable", "Melts Easily"],
    isActive: true,
  },
  {
    id: "dairy-003",
    slug: "cream-spread",
    name: "Cream Spread",
    nameAr: "جبنة كريمية",
    description:
      "Delice Cream Spread — a rich and velvety cream cheese spread in a convenient jar. Perfect for morning toast, crackers, or as a base for dips and sauces. Made with quality ingredients for a consistently smooth, indulgent taste.",
    descriptionAr:
      "جبنة ديليس كريمية — جبنة كريمية غنية ومخملية في برطمان عملي. مثالية لتوست الصباح أو الكراكرز أو كقاعدة للدهن والصوصات.",
    brand: brand("delice"),
    category: cat("cheese-dairy"),
    images: ["/images/products/cheese-dairy/cream-spread.jpeg"],
    variants: [
      {
        id: "dairy-003-jar",
        size: "Jar",
        price: 42,
        sku: "DLC-CHE-001",
        inStock: true,
        weight: "250g",
      },
    ],
    badges: [],
    features: ["Rich & Velvety", "Convenient Jar"],
    isActive: true,
  },
  {
    id: "dairy-004",
    slug: "white-cheese",
    name: "White Cheese",
    nameAr: "جبنة بيضاء",
    description:
      "Delice White Cheese — a fresh, natural white cheese with a mild, clean flavor. A versatile staple that pairs with everything from foul medammes to fresh vegetables. Made simply, the way cheese has been enjoyed in Egypt for generations.",
    descriptionAr:
      "جبنة ديليس بيضاء — جبنة بيضاء طازجة وطبيعية بنكهة خفيفة ونقية. عنصر متعدد الاستخدامات يتناسب مع كل شيء من الفول المدمس إلى الخضروات الطازجة.",
    brand: brand("delice"),
    category: cat("cheese-dairy"),
    images: ["/images/products/cheese-dairy/white-cheese.jpeg"],
    variants: [
      {
        id: "dairy-004-500",
        size: "500g",
        price: 38,
        sku: "DLC-CHE-002",
        inStock: true,
        weight: "500g",
      },
    ],
    badges: [],
    features: ["Fresh & Natural", "Mild Flavor"],
    isActive: true,
  },
  {
    id: "dairy-005",
    slug: "milk-powder",
    name: "Instant Full Cream Milk Powder",
    nameAr: "حليب بودرة كامل الدسم",
    description:
      "Delice Instant Full Cream Milk Powder — fortified with Vitamins A & D, Iron, Zinc, and Calcium for complete nutrition. Dissolves instantly in water for a rich, creamy glass of milk. A trusted pantry essential for baking, cooking, and daily nutrition.",
    descriptionAr:
      "حليب بودرة ديليس كامل الدسم — مدعم بفيتامين أ و د والحديد والزنك والكالسيوم لتغذية متكاملة. يذوب فوراً في الماء لكوب حليب غني وكريمي.",
    brand: brand("delice"),
    category: cat("cheese-dairy"),
    images: ["/images/products/milk/milk-powder.jpeg"],
    variants: [
      {
        id: "dairy-005-pouch",
        size: "Pouch",
        price: 65,
        sku: "DLC-MLK-001",
        inStock: true,
        weight: "400g",
      },
    ],
    badges: [],
    features: ["Vitamins A & D", "Iron", "Zinc", "Calcium", "Instant Dissolve"],
    nutritionalInfo: {
      servingSize: "25g (2 tbsp)",
      calories: 130,
      protein: "7g",
      fat: "7g",
      carbs: "10g",
      sodium: "95mg",
    },
    isActive: true,
  },
  {
    id: "dairy-006",
    slug: "uht-milk",
    name: "UHT Milk",
    nameAr: "حليب طويل الأجل",
    description:
      "Brigo UHT Milk — natural, long-life milk in a convenient 200ml carton. Perfect for on-the-go nutrition, school lunchboxes, or a quick glass anytime. UHT processed to preserve freshness without refrigeration until opened.",
    descriptionAr:
      "حليب بريجو طويل الأجل — حليب طبيعي في عبوة 200 مل عملية. مثالي للتغذية أثناء التنقل أو لانش بوكس المدرسة. معالج بالحرارة الفائقة للحفاظ على الطزاجة.",
    brand: brand("brigo"),
    category: cat("cheese-dairy"),
    images: ["/images/products/milk/uht-milk.jpeg"],
    variants: [
      {
        id: "dairy-006-200",
        size: "200ml",
        price: 8,
        sku: "BRG-MLK-001",
        inStock: true,
        weight: "200ml",
      },
    ],
    badges: [],
    features: ["Natural", "Long Life", "No Refrigeration Needed"],
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // JUICES (Brand: Brigo, except Cocktail = Prego)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "juice-001",
    slug: "apple-juice",
    name: "Apple Juice",
    nameAr: "عصير تفاح",
    description:
      "Brigo Apple Juice — a refreshing, naturally sweet apple drink in a convenient 200ml carton. Made from selected apple concentrate with a crisp, clean taste. Perfect for lunchboxes, picnics, or a refreshing break anytime.",
    descriptionAr:
      "عصير تفاح بريجو — مشروب تفاح منعش وحلو طبيعياً في عبوة 200 مل عملية. مصنوع من مركز تفاح مختار بطعم نقي ومنعش.",
    brand: brand("brigo"),
    category: cat("juices"),
    images: ["/images/products/juices/apple-juice.jpeg"],
    variants: [
      {
        id: "juice-001-200",
        size: "200ml",
        price: 7,
        sku: "BRG-JCE-001",
        inStock: true,
        weight: "200ml",
      },
    ],
    badges: [],
    features: ["Natural Flavor", "Convenient Size"],
    isActive: true,
  },
  {
    id: "juice-002",
    slug: "orange-juice",
    name: "Orange Juice",
    nameAr: "عصير برتقال",
    description:
      "Brigo Orange Juice — bright, tangy, and packed with the taste of sun-ripened oranges. A family favorite in the classic 200ml portion, ideal for breakfast or a midday refreshment. Naturally delicious with every sip.",
    descriptionAr:
      "عصير برتقال بريجو — مشرق وحامض ومليء بطعم البرتقال الناضج تحت الشمس. المفضل لدى العائلة في الحصة الكلاسيكية 200 مل.",
    brand: brand("brigo"),
    category: cat("juices"),
    images: ["/images/products/juices/orange-juice.jpeg"],
    variants: [
      {
        id: "juice-002-200",
        size: "200ml",
        price: 7,
        sku: "BRG-JCE-002",
        inStock: true,
        weight: "200ml",
      },
    ],
    badges: [],
    features: ["Natural Flavor", "Vitamin C"],
    isActive: true,
  },
  {
    id: "juice-003",
    slug: "guava-juice",
    name: "Guava Juice",
    nameAr: "عصير جوافة",
    description:
      "Brigo Guava Juice — thick, tropical, and irresistibly aromatic. Guava is one of Egypt's most beloved fruit flavors, and this 200ml carton delivers that distinctly creamy, sweet nectar taste. A treat for all ages.",
    descriptionAr:
      "عصير جوافة بريجو — كثيف واستوائي وعطري بشكل لا يقاوم. الجوافة من أحب نكهات الفاكهة في مصر وهذه العبوة تقدم ذلك الطعم الكريمي الحلو المميز.",
    brand: brand("brigo"),
    category: cat("juices"),
    images: ["/images/products/juices/guava-juice.jpeg"],
    variants: [
      {
        id: "juice-003-200",
        size: "200ml",
        price: 7,
        sku: "BRG-JCE-003",
        inStock: true,
        weight: "200ml",
      },
    ],
    badges: [],
    features: ["Tropical Flavor", "Thick & Creamy"],
    isActive: true,
  },
  {
    id: "juice-004",
    slug: "mango-juice",
    name: "Mango Juice",
    nameAr: "عصير مانجو",
    description:
      "Brigo Mango Juice — rich, golden, and bursting with the lush sweetness of ripe mangoes. Egypt's favorite summer fruit in a convenient 200ml pack. Our best-selling juice, loved by kids and adults alike.",
    descriptionAr:
      "عصير مانجو بريجو — غني وذهبي ومليء بحلاوة المانجو الناضجة. فاكهة الصيف المفضلة في مصر في عبوة عملية 200 مل. عصيرنا الأكثر مبيعاً.",
    brand: brand("brigo"),
    category: cat("juices"),
    images: ["/images/products/juices/mango-juice.jpeg"],
    variants: [
      {
        id: "juice-004-200",
        size: "200ml",
        price: 7,
        sku: "BRG-JCE-004",
        inStock: true,
        weight: "200ml",
      },
    ],
    badges: ["bestseller"],
    features: ["Rich & Golden", "100% Mango Taste"],
    isActive: true,
  },
  {
    id: "juice-005",
    slug: "cocktail-nectar",
    name: "Cocktail Nectar",
    nameAr: "كوكتيل نكتار",
    description:
      "Prego Cocktail Nectar — a vibrant blend of mixed fruits in a sweet, thick nectar. Combines the best tropical and citrus flavors for a refreshing, well-balanced drink. A colorful addition to any meal or snack time.",
    descriptionAr:
      "كوكتيل نكتار بريجو — مزيج نابض بالحياة من الفواكه المشكلة في نكتار حلو وكثيف. يجمع أفضل النكهات الاستوائية والحمضية لمشروب منعش ومتوازن.",
    brand: brand("prego"),
    category: cat("juices"),
    images: ["/images/products/juices/cocktail-nectar.jpeg"],
    variants: [
      {
        id: "juice-005-200",
        size: "200ml",
        price: 8,
        sku: "PRG-JCE-001",
        inStock: true,
        weight: "200ml",
      },
    ],
    badges: [],
    features: ["Mixed Fruits", "Thick Nectar"],
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════
  // SYRUPS (Brand: Manutti — all use the same group image)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "syr-001",
    slug: "mint-syrup",
    name: "Mint Syrup",
    nameAr: "شراب نعناع",
    description:
      "Manutti Mint Syrup — a cool, refreshing gourmet syrup extracted from natural mint. Perfect for crafting mojitos, lemonades, teas, and specialty beverages. Made in Egypt with premium ingredients for cafés, restaurants, and home bartenders.",
    descriptionAr:
      "شراب مانوتي نعناع — شراب فاخر منعش ومستخلص من النعناع الطبيعي. مثالي لتحضير الموهيتو والليمونادا والشاي والمشروبات المتخصصة.",
    brand: brand("manutti"),
    category: cat("syrups"),
    images: ["/images/products/syrups/manutti-lineup.jpeg"],
    variants: [
      {
        id: "syr-001-1l",
        size: "1L",
        price: 145,
        sku: "MAN-SYR-001",
        inStock: true,
        weight: "1L",
      },
    ],
    badges: [],
    features: ["Gourmet Quality", "Natural Extract", "Made in Egypt"],
    isActive: true,
  },
  {
    id: "syr-002",
    slug: "hazelnut-syrup",
    name: "Hazelnut Syrup",
    nameAr: "شراب بندق",
    description:
      "Manutti Hazelnut Syrup — a rich, nutty gourmet syrup that transforms coffee, hot chocolate, and desserts. The go-to flavoring for lattes and cappuccinos in Egypt's thriving café scene. Smooth, sweet, and deeply aromatic.",
    descriptionAr:
      "شراب مانوتي بندق — شراب فاخر غني بنكهة المكسرات يحول القهوة والشوكولاتة الساخنة والحلويات. النكهة المفضلة للاتيه والكابتشينو في مقاهي مصر.",
    brand: brand("manutti"),
    category: cat("syrups"),
    images: ["/images/products/syrups/manutti-lineup.jpeg"],
    variants: [
      {
        id: "syr-002-1l",
        size: "1L",
        price: 145,
        sku: "MAN-SYR-002",
        inStock: true,
        weight: "1L",
      },
    ],
    badges: [],
    features: ["Gourmet Quality", "Perfect for Coffee", "Made in Egypt"],
    isActive: true,
  },
  {
    id: "syr-003",
    slug: "peach-puree",
    name: "Peach Puree",
    nameAr: "بيوريه خوخ",
    description:
      "Manutti Peach Puree — a velvety, fruit-forward puree made from ripe peaches. Ideal for smoothies, cocktails, pastry fillings, and gourmet desserts. Delivers consistent color, texture, and natural peach sweetness in every pour.",
    descriptionAr:
      "بيوريه خوخ مانوتي — بيوريه مخملي من الخوخ الناضج. مثالي للسموذي والكوكتيلات وحشوات المعجنات والحلويات الفاخرة.",
    brand: brand("manutti"),
    category: cat("syrups"),
    images: ["/images/products/syrups/manutti-lineup.jpeg"],
    variants: [
      {
        id: "syr-003-1l",
        size: "1L",
        price: 145,
        sku: "MAN-SYR-003",
        inStock: true,
        weight: "1L",
      },
    ],
    badges: [],
    features: ["Pure Fruit Puree", "Gourmet Quality", "Made in Egypt"],
    isActive: true,
  },
  {
    id: "syr-004",
    slug: "pineapple-puree",
    name: "Pineapple Puree",
    nameAr: "بيوريه أناناس",
    description:
      "Manutti Pineapple Puree — a tropical, tangy puree bringing the taste of sun-drenched pineapples to your beverages and desserts. Perfect for piña coladas, tropical smoothies, and fruit-based cocktails. Vibrant flavor in every spoonful.",
    descriptionAr:
      "بيوريه أناناس مانوتي — بيوريه استوائي حامض يجلب طعم الأناناس المشمس لمشروباتك وحلوياتك. مثالي للبينا كولادا والسموذي الاستوائي.",
    brand: brand("manutti"),
    category: cat("syrups"),
    images: ["/images/products/syrups/manutti-lineup.jpeg"],
    variants: [
      {
        id: "syr-004-1l",
        size: "1L",
        price: 145,
        sku: "MAN-SYR-004",
        inStock: true,
        weight: "1L",
      },
    ],
    badges: [],
    features: ["Tropical Flavor", "Gourmet Quality", "Made in Egypt"],
    isActive: true,
  },
  {
    id: "syr-005",
    slug: "blue-curacao-syrup",
    name: "Blue Curaçao Syrup",
    nameAr: "شراب بلو كوراساو",
    description:
      "Manutti Blue Curaçao Syrup — a vivid blue, citrus-flavored gourmet syrup that adds color and flavor to any cocktail or mocktail. The striking blue hue makes it the star of layered drinks and specialty beverages. A must-have for creative bartending.",
    descriptionAr:
      "شراب بلو كوراساو مانوتي — شراب فاخر بلون أزرق زاهي ونكهة حمضيات يضيف اللون والنكهة لأي كوكتيل. اللون الأزرق المذهل يجعله نجم المشروبات المتخصصة.",
    brand: brand("manutti"),
    category: cat("syrups"),
    images: ["/images/products/syrups/manutti-lineup.jpeg"],
    variants: [
      {
        id: "syr-005-1l",
        size: "1L",
        price: 145,
        sku: "MAN-SYR-005",
        inStock: true,
        weight: "1L",
      },
    ],
    badges: [],
    features: ["Vivid Blue Color", "Citrus Flavor", "Gourmet Quality", "Made in Egypt"],
    isActive: true,
  },
  {
    id: "syr-006",
    slug: "blueberry-puree",
    name: "Blueberry Puree",
    nameAr: "بيوريه توت أزرق",
    description:
      "Manutti Blueberry Puree — a deep purple, antioxidant-rich puree bursting with the sweet-tart flavor of blueberries. Elevates smoothie bowls, cheesecakes, yogurt parfaits, and specialty cocktails with its natural berry goodness.",
    descriptionAr:
      "بيوريه توت أزرق مانوتي — بيوريه بنفسجي غامق غني بمضادات الأكسدة ومليء بنكهة التوت الأزرق الحلوة الحامضة. يرفع مستوى السموذي بول والتشيز كيك.",
    brand: brand("manutti"),
    category: cat("syrups"),
    images: ["/images/products/syrups/manutti-lineup.jpeg"],
    variants: [
      {
        id: "syr-006-1l",
        size: "1L",
        price: 145,
        sku: "MAN-SYR-006",
        inStock: true,
        weight: "1L",
      },
    ],
    badges: ["new"],
    features: ["Pure Fruit Puree", "Rich in Antioxidants", "Gourmet Quality", "Made in Egypt"],
    isActive: true,
  },
  {
    id: "syr-007",
    slug: "raspberry-syrup",
    name: "Raspberry Syrup",
    nameAr: "شراب توت أحمر",
    description:
      "Manutti Raspberry Syrup — a bold, ruby-red gourmet syrup with the unmistakable sweet-tart bite of ripe raspberries. Our most popular syrup flavor, beloved by cafés across Egypt. Transforms sodas, lemonades, milkshakes, and dessert drizzles.",
    descriptionAr:
      "شراب توت أحمر مانوتي — شراب فاخر بلون أحمر ياقوتي بنكهة التوت الأحمر الحلوة الحامضة. نكهتنا الأكثر شعبية المفضلة في مقاهي مصر.",
    brand: brand("manutti"),
    category: cat("syrups"),
    images: ["/images/products/syrups/manutti-lineup.jpeg"],
    variants: [
      {
        id: "syr-007-1l",
        size: "1L",
        price: 145,
        sku: "MAN-SYR-007",
        inStock: true,
        weight: "1L",
      },
    ],
    badges: ["bestseller"],
    features: ["Gourmet Quality", "Natural Extract", "Made in Egypt"],
    isActive: true,
  },
  {
    id: "syr-008",
    slug: "mixed-berries-puree",
    name: "Mixed Berries Puree",
    nameAr: "بيوريه توت مشكل",
    description:
      "Manutti Mixed Berries Puree — a harmonious blend of strawberries, blueberries, and raspberries in a thick, luxurious puree. The ultimate all-in-one berry solution for smoothies, frozen desserts, pancake toppings, and creative cocktail crafting.",
    descriptionAr:
      "بيوريه توت مشكل مانوتي — مزيج متناغم من الفراولة والتوت الأزرق والتوت الأحمر في بيوريه كثيف وفاخر. الحل المثالي للسموذي والحلويات المجمدة.",
    brand: brand("manutti"),
    category: cat("syrups"),
    images: ["/images/products/syrups/manutti-lineup.jpeg"],
    variants: [
      {
        id: "syr-008-1l",
        size: "1L",
        price: 145,
        sku: "MAN-SYR-008",
        inStock: true,
        weight: "1L",
      },
    ],
    badges: [],
    features: ["Multi-Berry Blend", "Pure Fruit Puree", "Gourmet Quality", "Made in Egypt"],
    isActive: true,
  },
];
