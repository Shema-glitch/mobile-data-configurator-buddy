
export interface APNConfig {
  name: string;
  apn_name?: string;
  apn: string;
  proxy?: string;
  port?: string | number;
  username?: string;
  password?: string;
  server?: string;
  mmsc?: string;
  mms_proxy?: string;
  mms_port?: string | number;
  mcc?: string | number;
  mnc?: string | number;
  auth_type?: string;
  apn_type?: string;
  apn_protocol?: string;
  apn_roaming_protocol?: string;
  bearer?: string;
  mvno_type?: string;
  mvno_value?: string;
}

export const carrierData: Record<string, APNConfig[]> = {
  "United States": [
    {
      name: "T-Mobile",
      apn_name: "T-Mobile US",
      apn: "fast.t-mobile.com",
      mcc: 310,
      mnc: 260,
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4/IPv6"
    },
    {
      name: "Verizon",
      apn_name: "Verizon",
      apn: "vzwinternet",
      mcc: 311,
      mnc: 480,
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6"
    },
    {
      name: "AT&T",
      apn_name: "AT&T",
      apn: "phone",
      mcc: 310,
      mnc: 410,
      apn_type: "default,mms,supl",
      mmsc: "http://mmsc.mobile.att.net",
      mms_proxy: "proxy.mobile.att.net",
      mms_port: 80
    }
  ],
  "Japan": [
    {
      name: "NTT Docomo",
      apn_name: "docomo",
      apn: "spmode.ne.jp",
      username: "sp@docomo.ne.jp",
      password: "sp",
      mcc: 440,
      mnc: 10,
      auth_type: "PAP or CHAP",
      apn_type: "default,supl,mms"
    },
    {
      name: "SoftBank",
      apn_name: "SoftBank",
      apn: "plus.4g",
      username: "plus",
      password: "4g",
      mcc: 440,
      mnc: 20,
      apn_type: "default,mms,supl"
    },
    {
      name: "au",
      apn_name: "au",
      apn: "au.au-net.ne.jp",
      username: "au@au-net.ne.jp",
      password: "au",
      mcc: 440,
      mnc: 50,
      apn_type: "default,mms,supl"
    }
  ],
  "Rwanda": [
    {
      name: "MTN Rwanda",
      apn_name: "MTN",
      apn: "internet",
      mcc: 635,
      mnc: 10,
      apn_type: "default,supl,mms",
      apn_protocol: "IPv4"
    },
    {
      name: "Airtel Rwanda",
      apn_name: "Airtel",
      apn: "internet",
      mcc: 635,
      mnc: 14,
      apn_type: "default,supl,mms"
    }
  ],
  "United Kingdom": [
    {
      name: "EE",
      apn_name: "EE Internet",
      apn: "everywhere",
      username: "eesecure",
      password: "secure",
      mcc: 234,
      mnc: 30,
      apn_type: "default,supl,mms"
    },
    {
      name: "Three UK",
      apn_name: "3 Internet",
      apn: "3internet",
      mcc: 234,
      mnc: 20,
      apn_type: "default,supl,mms"
    },
    {
      name: "Vodafone UK",
      apn_name: "Vodafone Internet",
      apn: "internet",
      username: "web",
      password: "web",
      mcc: 234,
      mnc: 15,
      apn_type: "default,supl,mms"
    }
  ],
  "Germany": [
    {
      name: "Telekom",
      apn_name: "Telekom Internet",
      apn: "internet.telekom",
      username: "telekom",
      password: "telekom",
      mcc: 262,
      mnc: 1,
      apn_type: "default,supl,mms"
    },
    {
      name: "Vodafone DE",
      apn_name: "Vodafone Internet",
      apn: "web.vodafone.de",
      mcc: 262,
      mnc: 2,
      apn_type: "default,supl,mms"
    }
  ],
  "France": [
    {
      name: "Orange France",
      apn_name: "Orange Internet",
      apn: "orange",
      mcc: 208,
      mnc: 1,
      apn_type: "default,supl,mms"
    },
    {
      name: "SFR",
      apn_name: "SFR Internet",
      apn: "websfr",
      mcc: 208,
      mnc: 10,
      apn_type: "default,supl,mms"
    }
  ],
  "Canada": [
    {
      name: "Rogers",
      apn_name: "Rogers Internet",
      apn: "internet.com",
      mcc: 302,
      mnc: 720,
      apn_type: "default,supl,mms"
    },
    {
      name: "Bell",
      apn_name: "Bell Internet",
      apn: "inet.bell.ca",
      mcc: 302,
      mnc: 610,
      apn_type: "default,supl,mms"
    }
  ],
  "Australia": [
    {
      name: "Telstra",
      apn_name: "Telstra Internet",
      apn: "telstra.internet",
      mcc: 505,
      mnc: 1,
      apn_type: "default,supl,mms"
    },
    {
      name: "Optus",
      apn_name: "Optus Internet",
      apn: "internet",
      mcc: 505,
      mnc: 2,
      apn_type: "default,supl,mms"
    }
  ],
  "India": [
    {
      name: "Airtel India",
      apn_name: "Airtel",
      apn: "airtelgprs.com",
      mcc: 404,
      mnc: 10,
      apn_type: "default,supl,mms"
    },
    {
      name: "Jio",
      apn_name: "Jio 4G",
      apn: "jionet",
      mcc: 405,
      mnc: 857,
      apn_type: "default,supl,mms"
    }
  ],
  "South Africa": [
    {
      name: "MTN SA",
      apn_name: "MTN",
      apn: "internet",
      mcc: 655,
      mnc: 10,
      apn_type: "default,supl,mms"
    },
    {
      name: "Vodacom",
      apn_name: "Vodacom",
      apn: "internet",
      mcc: 655,
      mnc: 1,
      apn_type: "default,supl,mms"
    }
  ]
};
