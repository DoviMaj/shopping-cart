const cars = [
  {
    amount: 1,
    id: 0,
    name: "812superfast",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd560d4f8fc7b0aa906c8ca-line-up-ferrari-812-superfast-v2?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "370.00000065",
    description:
      "1,744 kg (3,845 lb) Chronology. Predecessor. Ferrari F12berlinetta. The Ferrari 812 Superfast (Type F152M) is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show.",
  },
  {
    amount: 1,
    id: 1,
    name: "812GTS",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55c232cdb32285a785f25-line-up-ferrari-812-gts?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "370.00000065",
    description:
      "Unveiled in September 2019, the 812 GTS is the open top version of the 812 Superfast. This marks the first front-engine V12 series production convertible model offered by Ferrari in 50 years, as the convertible variants of the 550, the 575 and the 599 were limited edition models meant for special customers only. ",
  },
  {
    amount: 1,
    id: 3,
    name: "SF90 strardale",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "270.000.000,80",
    description:
      "The SF90 Stradale is equipped with three electric motors, adding a combined output of 220 PS (162 kW; 217 bhp) to a twin-turbocharged V8 engine rated at a power output of 780 PS (574 kW; 769 hp) at 7,500 rpm. ... The front wheels are powered by two electric motors (one for each wheel), providing torque vectoring.",
  },
  {
    amount: 1,
    id: 4,
    name: "F8 tributo",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd552850cf6995f44de91fb-line-up-ferrari-f8-tributo?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "120.00000065",
    description:
      "The 2020 Ferrari F8 Tributo pays homage to that history, with the name literally meaning Ferrari V8 (F8) Tribute, and building on the already massive levels of power of the car it replaces, the Ferrari 488 GTB.",
  },
  {
    amount: 1,
    id: 5,
    name: "F8 spider",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55285f8fc7b0aa906c5dc-line-up-ferrari-f8-spider?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "390.00000065",
    description: `The F8 Spider is sold as an all-new model, but despite its extensive styling changes, it's more an evolution of the 488 Spider (which was something of an evolution of the 458 before it) than an all-new variant. Still, it does borrow much of the 488 Pista's engine technology and weight-saving.`,
  },
  {
    amount: 1,
    id: 6,
    name: "488 PISTA",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd5528584077c3b243282c5-line-up-ferrari-488-pista?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "970.00000065",
    description: `The Ferrari 488 Pista can punch out 720 cv at 8000 rpm, giving it the best speciﬁc power output in its class at 185 cv/l, while torque is higher at all engine speeds, peaking at 770 Nm (10 Nm more than the 488 GTB).`,
  },
  {
    amount: 1,
    id: 7,
    name: "488 PISTA SPIDER",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd5528584077c3b243282c3-line-up-ferrari-488-pista-spider?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "350.00000065",
    description:
      "The new special 488 Pista Spider series, the 50th open top model produced by the pracing horse is the company's highest ever performing Ferrari Spider, with a record power-to-weight ratio of 1.92 kg/hp. It combines the ﬁnest race-developed technological solutions with the joy of en plein air driving to deliver an exhilarating experience behind the wheel.",
  },
  {
    amount: 1,
    id: 8,
    name: "GTC4LUSSO",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd552852cdb32285a785d2d-line-up-ferrari-gtc4lusso?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "970.00004065",
    description: `Like its predecessor, the GTC4Lusso is a 3-door shooting-brake with an all-wheel drive drivetrain, and is powered by a front-mid mounted V12 engine. The GTC4Lusso's 6,262 cc (382.1 cu in) Ferrari F140 65° V12 engine is rated at 690 PS (507 kW; 681 hp) at 8,000 rpm and 697 N⋅m (514 lb⋅ft) of torque at 5,750rpm.`,
  },
  {
    amount: 1,
    id: 9,
    name: "ROMA",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55285f8fc7b0aa906c5da-line-up-ferrari-roma?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "224.00000065",
    description: `The Ferrari Roma, the new mid-front-engined 2+ coupé of the Prancing Horse, features refined proportions and timeless design combined with unparalleled performance and handling. With its distinctive flair and style, the car is a contemporary representation of the carefree, pleasurable way of life that characterised Rome in the 1950s and ‘60s.`,
  },
  {
    amount: 1,
    id: 10,
    name: "GTC8 LUSSO T",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd5528584077c3b243282c4-line-up-ferrari-gtc4lusso-t?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "370.00000065",
    description: `The new GTC4Lusso T is equipped with an evolution of the 3.9-litre V8 turbo which punches out a maximum of 610 cv at 7,500 rpm, guaranteeing powerful acceleration with maximum torque of 760 Nm available between 3,000 and 5,250 rpm. Despite such impressive performance, the GTC4Lusso T’s fuel consumption ﬁgures guarantee extended range, ideal for town driving or long trips. Combining this powertrain with rear-wheel drive has resulted in signiﬁcant weight-saving. Adding four-wheel steering to the mix gives the car additional agility and quicker responses. The rearwheel steering system is integrated with the latest evolution of the electronic controls of the SCME suspension, ESP 9.0 and third generation Side Slip Control (SSC3).`,
  },
  {
    amount: 1,
    id: 11,
    name: "Portfino M",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5f61bee9966ae519cbd684fc?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "370.00000065",
    description: `The Ferrari Portofino M, which features the legendary ‘M’ suffix, for Modificata, in its name, is the evolution of the Ferrari Portofino. The new Prancing Horse 2+ spider boasts a slew of new technical and design features, most notably an 8-speed dual-clutch gearbox and a five-position Manettino, an absolute first for a Ferrari GT convertible. Every drive aboard the Ferrari Portofino M is a voyage of (re)discovery.`,
  },
  {
    amount: 1,
    id: 12,
    name: "MONZA SP1",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55285f8fc7b0aa906c5db-line-up-ferrari-monza-sp1?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "3700.000000065",
    description: `The Ferrari Monza SP1, together with the Monza SP2, are the forerunners in a new concept, known as ‘Icona’ (Icon), that taps into a leitmotif of the most evocative cars in the company’s history to create a new segment of special limited series cars for clients and collectors. The intention is to use a modern aesthetic to reinterpret a timeless style, with technologically advanced components and the highest performance possible through continuous innovation.`,
  },
  {
    amount: 1,
    id: 13,
    name: "MONZA SP2",
    image:
      "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd552850cf6995f44de91fa-line-up-ferrari-monza-sp2?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&height=750",
    price: "3700.00000065",
    description: `The Ferrari Monza SP2, together with the Monza SP1, are the forerunners in a new concept, known as ‘Icona’ (Icon), that taps into a leitmotif of the most evocative cars in the company’s history to create a new segment of special limited series cars for clients and collectors. The intention is to use a modern aesthetic to reinterpret a timeless style, with technologically advanced components and the highest performance possible through continuous innovation.`,
  },
];

export default cars;
