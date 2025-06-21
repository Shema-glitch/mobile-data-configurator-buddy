
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
  "Afghanistan": [
    { name: "Afghan Wireless", apn: "internet", mcc: 412, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Roshan", apn: "internet", mcc: 412, mnc: 20, apn_type: "default,supl,mms" }
  ],
  "Albania": [
    { name: "Vodafone Albania", apn: "internet", mcc: 276, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Telekom Albania", apn: "internet", mcc: 276, mnc: 2, apn_type: "default,supl,mms" }
  ],
  "Algeria": [
    { name: "Djezzy", apn: "internet.djezzy.dz", mcc: 603, mnc: 2, apn_type: "default,supl,mms" },
    { name: "Mobilis", apn: "internet", mcc: 603, mnc: 1, apn_type: "default,supl,mms" }
  ],
  "Argentina": [
    { name: "Claro", apn: "internet.ctimovil.com.ar", mcc: 722, mnc: 310, apn_type: "default,supl,mms" },
    { name: "Movistar", apn: "internet.movil", mcc: 722, mnc: 7, apn_type: "default,supl,mms" }
  ],
  "Australia": [
    { name: "Telstra", apn: "telstra.internet", mcc: 505, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Optus", apn: "internet", mcc: 505, mnc: 2, apn_type: "default,supl,mms" },
    { name: "Vodafone", apn: "vfinternet.au", mcc: 505, mnc: 3, apn_type: "default,supl,mms" }
  ],
  "Austria": [
    { name: "A1", apn: "a1.net", mcc: 232, mnc: 1, apn_type: "default,supl,mms" },
    { name: "T-Mobile", apn: "internet", mcc: 232, mnc: 3, apn_type: "default,supl,mms" }
  ],
  "Bangladesh": [
    { name: "Grameenphone", apn: "internet", mcc: 470, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Robi", apn: "internet", mcc: 470, mnc: 2, apn_type: "default,supl,mms" }
  ],
  "Belgium": [
    { name: "Proximus", apn: "internet.proximus.be", mcc: 206, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Base", apn: "internet.base.be", mcc: 206, mnc: 20, apn_type: "default,supl,mms" }
  ],
  "Brazil": [
    { name: "Vivo", apn: "zap.vivo.com.br", username: "vivo", password: "vivo", mcc: 724, mnc: 11, apn_type: "default,supl,mms" },
    { name: "Claro", apn: "bandalarga.claro.com.br", username: "claro", password: "claro", mcc: 724, mnc: 5, apn_type: "default,supl,mms" }
  ],
  "Canada": [
    { name: "Rogers", apn: "internet.com", mcc: 302, mnc: 720, apn_type: "default,supl,mms" },
    { name: "Bell", apn: "inet.bell.ca", mcc: 302, mnc: 610, apn_type: "default,supl,mms" },
    { name: "Telus", apn: "sp.telus.com", mcc: 302, mnc: 220, apn_type: "default,supl,mms" }
  ],
  "China": [
    { name: "China Mobile", apn: "cmnet", mcc: 460, mnc: 0, apn_type: "default,supl,mms" },
    { name: "China Unicom", apn: "3gnet", mcc: 460, mnc: 1, apn_type: "default,supl,mms" },
    { name: "China Telecom", apn: "ctnet", mcc: 460, mnc: 11, apn_type: "default,supl,mms" }
  ],
  "Egypt": [
    { name: "Orange Egypt", apn: "internet", mcc: 602, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Vodafone Egypt", apn: "internet.vodafone.net", mcc: 602, mnc: 2, apn_type: "default,supl,mms" }
  ],
  "France": [
    { name: "Orange France", apn: "orange", mcc: 208, mnc: 1, apn_type: "default,supl,mms" },
    { name: "SFR", apn: "websfr", mcc: 208, mnc: 10, apn_type: "default,supl,mms" },
    { name: "Bouygues", apn: "mmsbouygtel.com", mcc: 208, mnc: 20, apn_type: "default,supl,mms" }
  ],
  "Germany": [
    { name: "Telekom", apn: "internet.telekom", username: "telekom", password: "telekom", mcc: 262, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Vodafone DE", apn: "web.vodafone.de", mcc: 262, mnc: 2, apn_type: "default,supl,mms" },
    { name: "O2", apn: "internet", mcc: 262, mnc: 7, apn_type: "default,supl,mms" }
  ],
  "India": [
    { name: "Airtel India", apn: "airtelgprs.com", mcc: 404, mnc: 10, apn_type: "default,supl,mms" },
    { name: "Jio", apn: "jionet", mcc: 405, mnc: 857, apn_type: "default,supl,mms" },
    { name: "Vi (Vodafone Idea)", apn: "www", mcc: 404, mnc: 20, apn_type: "default,supl,mms" }
  ],
  "Italy": [
    { name: "TIM", apn: "ibox.tim.it", mcc: 222, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Vodafone IT", apn: "web.omnitel.it", mcc: 222, mnc: 10, apn_type: "default,supl,mms" }
  ],
  "Japan": [
    { name: "NTT Docomo", apn: "spmode.ne.jp", username: "sp@docomo.ne.jp", password: "sp", mcc: 440, mnc: 10, auth_type: "PAP or CHAP", apn_type: "default,supl,mms" },
    { name: "SoftBank", apn: "plus.4g", username: "plus", password: "4g", mcc: 440, mnc: 20, apn_type: "default,mms,supl" },
    { name: "au", apn: "au.au-net.ne.jp", username: "au@au-net.ne.jp", password: "au", mcc: 440, mnc: 50, apn_type: "default,mms,supl" },
    { name: "Rakuten Mobile", apn: "rakuten.jp", mcc: 440, mnc: 11, apn_type: "default,mms,supl" }
  ],
  "Kenya": [
    { name: "Safaricom", apn: "safaricom", mcc: 639, mnc: 2, apn_type: "default,supl,mms" },
    { name: "Airtel Kenya", apn: "internet", mcc: 639, mnc: 3, apn_type: "default,supl,mms" }
  ],
  "Mexico": [
    { name: "Telcel", apn: "internet.itelcel.com", mcc: 334, mnc: 20, apn_type: "default,supl,mms" },
    { name: "Movistar", apn: "internet.movistar.mx", mcc: 334, mnc: 3, apn_type: "default,supl,mms" }
  ],
  "Netherlands": [
    { name: "KPN", apn: "internet", mcc: 204, mnc: 8, apn_type: "default,supl,mms" },
    { name: "Vodafone NL", apn: "office.vodafone.nl", mcc: 204, mnc: 4, apn_type: "default,supl,mms" }
  ],
  "Nigeria": [
    { name: "MTN Nigeria", apn: "web.gprs.mtnnigeria.net", mcc: 621, mnc: 30, apn_type: "default,supl,mms" },
    { name: "Glo", apn: "glosecure", mcc: 621, mnc: 50, apn_type: "default,supl,mms" }
  ],
  "Norway": [
    { name: "Telenor", apn: "internet", mcc: 242, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Telia", apn: "internet.telia.no", mcc: 242, mnc: 2, apn_type: "default,supl,mms" }
  ],
  "Poland": [
    { name: "Orange Polska", apn: "internet", mcc: 260, mnc: 3, apn_type: "default,supl,mms" },
    { name: "T-Mobile PL", apn: "internet", mcc: 260, mnc: 2, apn_type: "default,supl,mms" }
  ],
  "Russia": [
    { name: "MTS", apn: "internet.mts.ru", username: "mts", password: "mts", mcc: 250, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Beeline", apn: "internet.beeline.ru", username: "beeline", password: "beeline", mcc: 250, mnc: 99, apn_type: "default,supl,mms" }
  ],
  "Rwanda": [
    { name: "MTN Rwanda", apn: "internet", mcc: 635, mnc: 10, apn_type: "default,supl,mms", apn_protocol: "IPv4" },
    { name: "Airtel Rwanda", apn: "internet", mcc: 635, mnc: 14, apn_type: "default,supl,mms" }
  ],
  "Saudi Arabia": [
    { name: "STC", apn: "jawalnet.com.sa", mcc: 420, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Mobily", apn: "web1", mcc: 420, mnc: 3, apn_type: "default,supl,mms" }
  ],
  "South Africa": [
    { name: "MTN SA", apn: "internet", mcc: 655, mnc: 10, apn_type: "default,supl,mms" },
    { name: "Vodacom", apn: "internet", mcc: 655, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Cell C", apn: "internet", mcc: 655, mnc: 7, apn_type: "default,supl,mms" }
  ],
  "South Korea": [
    { name: "SK Telecom", apn: "lte.sktelecom.com", mcc: 450, mnc: 5, apn_type: "default,supl,mms" },
    { name: "KT", apn: "lte.ktfwing.com", mcc: 450, mnc: 8, apn_type: "default,supl,mms" }
  ],
  "Spain": [
    { name: "Movistar", apn: "internet", mcc: 214, mnc: 7, apn_type: "default,supl,mms" },
    { name: "Orange ES", apn: "internet", mcc: 214, mnc: 3, apn_type: "default,supl,mms" },
    { name: "Vodafone ES", apn: "airtelnet.es", mcc: 214, mnc: 1, apn_type: "default,supl,mms" }
  ],
  "Sweden": [
    { name: "Telia", apn: "online.telia.se", mcc: 240, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Telenor SE", apn: "internet.telenor.se", mcc: 240, mnc: 8, apn_type: "default,supl,mms" }
  ],
  "Switzerland": [
    { name: "Swisscom", apn: "event.swisscom.ch", mcc: 228, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Salt", apn: "internet", mcc: 228, mnc: 3, apn_type: "default,supl,mms" }
  ],
  "Thailand": [
    { name: "AIS", apn: "internet", mcc: 520, mnc: 1, apn_type: "default,supl,mms" },
    { name: "TrueMove", apn: "internet", mcc: 520, mnc: 99, apn_type: "default,supl,mms" }
  ],
  "Turkey": [
    { name: "Turkcell", apn: "internet", mcc: 286, mnc: 1, apn_type: "default,supl,mms" },
    { name: "Vodafone TR", apn: "internet", mcc: 286, mnc: 2, apn_type: "default,supl,mms" }
  ],
  "UAE": [
    { name: "Etisalat", apn: "etisalat", mcc: 424, mnc: 2, apn_type: "default,supl,mms" },
    { name: "du", apn: "du", mcc: 424, mnc: 3, apn_type: "default,supl,mms" }
  ],
  "Uganda": [
    { name: "MTN Uganda", apn: "internet", mcc: 641, mnc: 10, apn_type: "default,supl,mms" },
    { name: "Airtel Uganda", apn: "internet", mcc: 641, mnc: 14, apn_type: "default,supl,mms" }
  ],
  "United Kingdom": [
    { name: "EE", apn: "everywhere", username: "eesecure", password: "secure", mcc: 234, mnc: 30, apn_type: "default,supl,mms" },
    { name: "Three UK", apn: "3internet", mcc: 234, mnc: 20, apn_type: "default,supl,mms" },
    { name: "Vodafone UK", apn: "internet", username: "web", password: "web", mcc: 234, mnc: 15, apn_type: "default,supl,mms" },
    { name: "O2 UK", apn: "mobile.o2.co.uk", username: "o2web", password: "password", mcc: 234, mnc: 10, apn_type: "default,supl,mms" }
  ],
  "United States": [
    { name: "T-Mobile", apn: "fast.t-mobile.com", mcc: 310, mnc: 260, apn_type: "default,mms,supl", apn_protocol: "IPv4/IPv6", apn_roaming_protocol: "IPv4/IPv6" },
    { name: "Verizon", apn: "vzwinternet", mcc: 311, mnc: 480, apn_type: "default,mms,supl", apn_protocol: "IPv4/IPv6" },
    { name: "AT&T", apn: "phone", mcc: 310, mnc: 410, apn_type: "default,mms,supl", mmsc: "http://mmsc.mobile.att.net", mms_proxy: "proxy.mobile.att.net", mms_port: 80 },
    { name: "Mint Mobile", apn: "ultra", mcc: 310, mnc: 260, apn_type: "default,mms,supl" }
  ],
  "Vietnam": [
    { name: "Viettel", apn: "e-connect", mcc: 452, mnc: 4, apn_type: "default,supl,mms" },
    { name: "Vinaphone", apn: "internet", mcc: 452, mnc: 2, apn_type: "default,supl,mms" }
  ]
};
