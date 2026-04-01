export interface Product {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  price: string;
  image: string;
  category: 'dessert' | 'bun-plain' | 'bun-filled';
}

export const PRODUCTS: Product[] = [
  // Десерты
  {
    id: 1,
    name: "Медовик «Как у бабушки»",
    description: "Классический многослойный торт с нежным сметанным кремом и ароматом горного мёда.",
    ingredients: "Мука, мёд, сметана, сахар, сливочное масло, яйца.",
    price: "180 сом",
    image: "https://images.unsplash.com/photo-1586788680434-30d324671ff6?auto=format&fit=crop&q=80&w=400",
    category: 'dessert'
  },
  {
    id: 2,
    name: "Наполеон Домашний",
    description: "Тончайшие слои слоеного теста, пропитанные настоящим заварным кремом на сливках.",
    ingredients: "Слоеное тесто, молоко, сливки, ваниль, сливочное масло.",
    price: "210 сом",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=400",
    category: 'dessert'
  },
  {
    id: 3,
    name: "Эклер Ванильный",
    description: "Воздушное заварное тесто с обильной начинкой из нежного ванильного крема.",
    ingredients: "Заварное тесто, ванильный крем, белая глазурь.",
    price: "120 сом",
    image: "https://images.unsplash.com/photo-1621236304195-0699937e6797?auto=format&fit=crop&q=80&w=400",
    category: 'dessert'
  },
  {
    id: 4,
    name: "Тарталетка с ягодами",
    description: "Песочная корзинка с заварным кремом и свежими сезонными ягодами.",
    ingredients: "Песочное тесто, крем патисьер, свежая малина, голубика.",
    price: "190 сом",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=400",
    category: 'dessert'
  },
  {
    id: 5,
    name: "Брауни с фундуком",
    description: "Насыщенный шоколадный десерт с влажной текстурой и хрустящими орехами.",
    ingredients: "Темный шоколад, какао, фундук, сливочное масло.",
    price: "150 сом",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=400",
    category: 'dessert'
  },
  {
    id: 6,
    name: "Чизкейк Классический",
    description: "Нежная сливочно-сырная основа на хрустящем песочном корже.",
    ingredients: "Творожный сыр, сливки, песочное печенье, лимонная цедра.",
    price: "230 сом",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=400",
    category: 'dessert'
  },

  // Булочки без начинки
  {
    id: 7,
    name: "Сдобная Плетенка",
    description: "Традиционная пышная булочка, посыпанная кунжутом или маком.",
    ingredients: "Пшеничная мука, молоко, дрожжи, сливочное масло.",
    price: "45 сом",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
    category: 'bun-plain'
  },
  {
    id: 8,
    name: "Булочка «Ромашка»",
    description: "Мягкая и воздушная, идеальна для семейного завтрака.",
    ingredients: "Мука высшего сорта, молоко, сахар, яйца.",
    price: "40 сом",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400",
    category: 'bun-plain'
  },
  {
    id: 9,
    name: "Улитка с корицей",
    description: "Классическая булочка с ароматной корицей, без лишней сладости.",
    ingredients: "Дрожжевое тесто, молотая корица, тростниковый сахар.",
    price: "65 сом",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=400",
    category: 'bun-plain'
  },
  {
    id: 10,
    name: "Бриошь на масле",
    description: "Французская классика с богатым сливочным вкусом.",
    ingredients: "Мука, много сливочного масла, яйца, молоко.",
    price: "80 сом",
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&q=80&w=400",
    category: 'bun-plain'
  },
  {
    id: 11,
    name: "Крендель Сахарный",
    description: "Хрустящая корочка и нежный мякиш, посыпанный крупным сахаром.",
    ingredients: "Пшеничная мука, дрожжи, сахарная посыпка.",
    price: "55 сом",
    image: "https://images.unsplash.com/photo-1544070078-a212eda27b49?auto=format&fit=crop&q=80&w=400",
    category: 'bun-plain'
  },

  // Булочки с начинкой
  {
    id: 12,
    name: "Булочка с творогом",
    description: "Домашний творог с ванилью в нежном сдобном тесте.",
    ingredients: "Мука, натуральный творог, ваниль, изюм.",
    price: "75 сом",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400",
    category: 'bun-filled'
  },
  {
    id: 13,
    name: "Яблочный конвертик",
    description: "Сочная начинка из свежих яблок с легкой ноткой корицы.",
    ingredients: "Слоеное тесто, яблоки, корица, сахарная пудра.",
    price: "85 сом",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&q=80&w=400",
    category: 'bun-filled'
  },
  {
    id: 14,
    name: "Вишневая слойка",
    description: "Кисло-сладкая вишня в хрустящем слоеном тесте.",
    ingredients: "Слоеное тесто, вишня без косточек, конфитюр.",
    price: "90 сом",
    image: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?auto=format&fit=crop&q=80&w=400",
    category: 'bun-filled'
  },
  {
    id: 15,
    name: "Булочка со сгущенкой",
    description: "Любимый вкус детства с вареным сгущенным молоком.",
    ingredients: "Сдобное тесто, вареная сгущенка, ореховая крошка.",
    price: "80 сом",
    image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=400",
    category: 'bun-filled'
  },
  {
    id: 16,
    name: "Шоколадный круассан",
    description: "Настоящий бельгийский шоколад внутри хрустящей слойки.",
    ingredients: "Слоеное тесто, темный шоколад, сливочное масло.",
    price: "110 сом",
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=400",
    category: 'bun-filled'
  },
  {
    id: 17,
    name: "Булочка с заварным кремом",
    description: "Нежнейший крем патисьер в мягкой сдобной оболочке.",
    ingredients: "Мука, молоко, яйца, ваниль, сливочное масло.",
    price: "95 сом",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
    category: 'bun-filled'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Айпери",
    rating: 5,
    text: "Самый вкусный медовик в городе! Заказываем здесь на каждый семейный праздник. Чувствуется, что сделано с любовью."
  },
  {
    id: 2,
    name: "Максим",
    rating: 5,
    text: "Захожу каждое утро за булочкой с корицей. Аромат в пекарне просто волшебный, сразу поднимает настроение на весь день."
  },
  {
    id: 3,
    name: "Елена",
    rating: 5,
    text: "Очень уютное место. Дети обожают ваши эклеры. Спасибо за тепло и всегда свежую выпечку!"
  },
  {
    id: 4,
    name: "Нурбек",
    rating: 4,
    text: "Отличная семейная пекарня. Всегда вежливый персонал и очень вкусные булочки с творогом. Рекомендую!"
  }
];
