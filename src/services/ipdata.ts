import IPData from 'ipdata';
import { sendIpInfoClient } from './fire-store';
import { IIpInfo } from '@/types';

export function handleSendIpInfo() {
   const cacheConfig = {
      max: 1000, // max size
      maxAge: 10 * 60 * 1000, // max age in ms (i.e. 10 minutes)
   };

   const ipdata = new IPData(import.meta.env.VITE_IPDATA_API_KEY, cacheConfig);

   ipdata.lookup()
      .then(function (info: any) {
         const infoData: IIpInfo = {
            ip: info.ip,
            city: info?.city || '',
            country: info?.languages[0].name || '',
            isProxy: info?.threat?.is_proxy,
            providerName: info?.asn?.name || '',
            providerDomain: info?.asn?.domain || '',
            providerRoute: info?.asn?.route || '',
            timeZoneName: info?.time_zone?.name || '',
            currentTime: Date.now()
         }
         sendIpInfoClient(infoData)
      });

}
