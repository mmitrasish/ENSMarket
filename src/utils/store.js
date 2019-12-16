export const all_domains = [
  {
    domain_name: "gitcoin.eth",
    owner: "0xDDF369C3bf18b1B12EA295d597B943b955eF4671",
    controller: "0xDDF369C3bf18b1B12EA295d597B943b955eF4671",
    registrant: "0x4331B095bC38Dc3bCE0A269682b5eBAefa252929",
    registration_date: "2017.06.01 at 07:24",
    resolver: "0x5FfC014343cd971B7eb70732021E26C35B744cc4",
    parent: "eth",
    on_sale: true,
    price: 5,
    subdomains: [
      {
        subdomain_name: "mrfixpix",
        owner: "0x4eb28aBeb3c6a60C802A5628d3397C4449A842a5",
        registration_date: "2017.06.04 at 12:46"
      },
      {
        subdomain_name: "serkansokmen",
        owner: "0x4eb28aBeb3c6a60C802A5628d3397C4449A842a5",
        registration_date: "2017.06.08 at 13:36"
      },
      {
        subdomain_name: "mumuss",
        owner: "0xE163258542040394b184C4C166c420eC40f1c222",
        registration_date: "2017.06.12 at 18:34"
      }
    ]
  },
  {
    domain_name: "etherbase.eth",
    owner: "0xDDF369C3bf18b1B12EA295d597B943b955eF4671",
    owner: "0xDDF369C3bf18b1B12EA295d597B943b955eF4671",
    controller: "0xC32659651D137A18b79925449722855aA327231d",
    registrant: "0xC32659651D137A18b79925449722855aA327231d",
    registration_date: "2020.05.04 at 05:30",
    parent: "eth",
    on_sale: true,
    price: 0.5,
    subdomains: [
      {
        subdomain_name: "mrfixpixdfj",
        owner: "0x09b28aBeb3c6a60C802Df628d3397C4449A842a5",
        registration_date: "2019.07.24 at 16:44"
      },
      {
        subdomain_name: "serkklanmen",
        owner: "0x4eb28aBeb3c6a60C802AJH28d3397C4449A849H2",
        registration_date: "2019.03.14 at 13:16"
      },
      {
        subdomain_name: "jkdjsliujj",
        owner: "0xOu632585420403sdb184C4C1p6c420eC40f1c9JH",
        registration_date: "2019.07.22 at 22:54"
      }
    ]
  },
  {
    domain_name: "rekpero.eth",
    parent: "eth",
    registration_date: "2019.03.08 at 13:35",
    on_sale: false,
    price: 0.8,
    owner: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    controller: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    registrant: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    resolver: "0xD4fC014343cd971B7eb70732021E26dk5B744cf4",
    subdomains: []
  },
  {
    domain_name: "lifeofpie.eth",
    parent: "eth",
    registration_date: "2019.12.12 at 21:12",
    on_sale: false,
    price: 1,
    owner: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    controller: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    registrant: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    resolver: "0x2dfC014343cd971Bfdb70732021E26dk5B744csd",
    subdomains: []
  }
];
export const my_subdomains = [
  {
    subdomain_name: "jkerskr",
    parent: "gitcoin.eth",
    registration_date: "2019.09.14 at 10:47",
    owner: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1"
  },
  {
    subdomain_name: "opkerwmr",
    parent: "etherbase.eth",
    registration_date: "2019.09.16 at 20:23",
    owner: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1"
  }
];

export const my_domain = [
  {
    domain_name: "rekpero.eth",
    parent: "eth",
    registration_date: "2019.03.08 at 13:35",
    on_sale: false,
    price: 0.8,
    owner: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    controller: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    registrant: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    resolver: "0xD4fC014343cd971B7eb70732021E26dk5B744cf4"
  },
  {
    domain_name: "lifeofpie.eth",
    parent: "eth",
    registration_date: "2019.12.12 at 21:12",
    on_sale: false,
    price: 1,
    owner: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    controller: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    registrant: "0xa7B5B93BF8B322023BDa57e2C86B57f4DDb4F4a1",
    resolver: "0x2dfC014343cd971Bfdb70732021E26dk5B744csd"
  }
];

export const shortenEthAddr = str => {
  const shortenStr =
    str &&
    `${str.substring(0, 5)}...${str.substring(str.length - 5, str.length)}`;
  return shortenStr;
};

export const capitaliseString = str => {
  return str.toUpperCase();
};
