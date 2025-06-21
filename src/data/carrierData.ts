
export interface APNConfig {
  name: string;
  apn_name?: string;
  apn: string;
  proxy?: string;
  port?: string;
  username?: string;
  password?: string;
  server?: string;
  mmsc?: string;
  mms_proxy?: string;
  mms_port?: string;
  mcc: string;
  mnc: string;
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
      name: "Verizon",
      apn_name: "Verizon Internet",
      apn: "vzwinternet",
      mcc: "310",
      mnc: "012",
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      bearer: "Unspecified",
    },
    {
      name: "AT&T",
      apn_name: "AT&T Broadband",
      apn: "broadband",
      mcc: "310",
      mnc: "410",
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      bearer: "Unspecified",
    },
    {
      name: "T-Mobile",
      apn_name: "T-Mobile US",
      apn: "fast.t-mobile.com",
      mcc: "310",
      mnc: "260",
      apn_type: "default,mms,supl",
      apn_protocol: "IPv6",
      apn_roaming_protocol: "IPv4",
      mmsc: "http://mms.msg.eng.t-mobile.com/mms/wapenc",
      bearer: "Unspecified",
    },
  ],
  "United Kingdom": [
    {
      name: "EE",
      apn_name: "EE Internet",
      apn: "everywhere",
      username: "eesecure",
      password: "secure",
      mcc: "234",
      mnc: "30",
      apn_type: "default,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      mmsc: "http://mms/",
      mms_proxy: "149.254.201.135",
      mms_port: "8080",
      bearer: "Unspecified",
    },
    {
      name: "O2",
      apn_name: "O2 Internet",
      apn: "mobile.o2.co.uk",
      username: "faster",
      password: "web",
      mcc: "234",
      mnc: "02",
      apn_type: "default,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      mmsc: "http://mmsc.mms.o2.co.uk:8002",
      mms_proxy: "82.132.254.1",
      mms_port: "8080",
      bearer: "Unspecified",
    },
    {
      name: "Three",
      apn_name: "3 Internet",
      apn: "three.co.uk",
      mcc: "234",
      mnc: "20",
      apn_type: "default,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      mmsc: "http://mms.um.three.co.uk:10021/mmsc",
      mms_proxy: "mms.three.co.uk",
      mms_port: "8799",
      bearer: "Unspecified",
    },
  ],
  "Japan": [
    {
      name: "NTT Docomo",
      apn_name: "Docomo Internet",
      apn: "spmode.ne.jp",
      mcc: "440",
      mnc: "10",
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      bearer: "Unspecified",
    },
    {
      name: "SoftBank",
      apn_name: "SoftBank Internet",
      apn: "plus.4g",
      mcc: "440",
      mnc: "20",
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      bearer: "Unspecified",
    },
    {
      name: "au (KDDI)",
      apn_name: "au Internet",
      apn: "au.au-net.ne.jp",
      mcc: "440",
      mnc: "50",
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      bearer: "Unspecified",
    },
  ],
  "Germany": [
    {
      name: "Deutsche Telekom",
      apn_name: "T-Mobile Internet",
      apn: "internet.t-mobile",
      username: "t-mobile",
      password: "tm",
      mcc: "262",
      mnc: "01",
      apn_type: "default,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      mmsc: "http://mms.t-mobile.de/servlets/mms",
      mms_proxy: "172.28.23.131",
      mms_port: "8008",
      bearer: "Unspecified",
    },
    {
      name: "Vodafone",
      apn_name: "Vodafone Internet",
      apn: "web.vodafone.de",
      mcc: "262",
      mnc: "02",
      apn_type: "default,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      mmsc: "http://139.7.24.1/servlets/mms",
      mms_proxy: "139.7.29.17",
      mms_port: "80",
      bearer: "Unspecified",
    },
  ],
  "Canada": [
    {
      name: "Rogers",
      apn_name: "Rogers Internet",
      apn: "internet.com",
      mcc: "302",
      mnc: "720",
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      mmsc: "http://mms.gprs.rogers.com",
      mms_proxy: "mmsproxy.rogers.com",
      mms_port: "80",
      bearer: "Unspecified",
    },
    {
      name: "Bell",
      apn_name: "Bell Internet",
      apn: "inet.bell.ca",
      mcc: "302",
      mnc: "610",
      apn_type: "default,mms,supl",
      apn_protocol: "IPv4/IPv6",
      apn_roaming_protocol: "IPv4",
      mmsc: "http://mms.bell.ca/mms/wapenc",
      bearer: "Unspecified",
    },
  ],
};
