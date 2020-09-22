import {Injectable} from '@angular/core';
import {Country} from "../interface/country.interface";

@Injectable()
export class CountryService {

  countries: Country[];

  constructor() {
    this.countries = [
      {
        name: '',
        dialCode: '32',
        countryCode: 'be'
      },
      {
        name: '',
        dialCode: '591',
        countryCode: 'bo'
      },
      {
        name: '',
        dialCode: '55',
        countryCode: 'br'
      },
      {
        name: '',
        dialCode: '359',
        countryCode: 'bg'
      },
      {
        name: '',
        dialCode: '226',
        countryCode: 'bf'
      },
      {
        name: '',
        dialCode: '237',
        countryCode: 'cm'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'ca'
      },
      {
        name: '',
        dialCode: '235',
        countryCode: 'td'
      },
      {
        name: '',
        dialCode: '56',
        countryCode: 'cl'
      },
      {
        name: '',
        dialCode: '86',
        countryCode: 'cn'
      },
      {
        name: '',
        dialCode: '57',
        countryCode: 'co'
      },
      {
        name: '',
        dialCode: '243',
        countryCode: 'cd'
      },
      {
        name: '',
        dialCode: '242',
        countryCode: 'cg'
      },
      {
        name: '',
        dialCode: '420',
        countryCode: 'cz'
      },
      {
        name: '',
        dialCode: '45',
        countryCode: 'dk'
      },
      {
        name: '',
        dialCode: '253',
        countryCode: 'dj'
      },
      {
        name: '',
        dialCode: '20',
        countryCode: 'eg'
      },
      {
        name: '',
        dialCode: '503',
        countryCode: 'sv'
      },
      {
        name: '',
        dialCode: '372',
        countryCode: 'ee'
      },
      {
        name: '',
        dialCode: '358',
        countryCode: 'fi'
      },
      {
        name: '',
        dialCode: '33',
        countryCode: 'fr'
      },
      {
        name: '',
        dialCode: '241',
        countryCode: 'ga'
      },
      {
        name: '',
        dialCode: '220',
        countryCode: 'gm'
      },
      {
        name: '',
        dialCode: '49',
        countryCode: 'de'
      },
      {
        name: '',
        dialCode: '502',
        countryCode: 'gt'
      },
      {
        name: '',
        dialCode: '509',
        countryCode: 'ht'
      },
      {
        name: '',
        dialCode: '504',
        countryCode: 'hn'
      },
      {
        name: '',
        dialCode: '36',
        countryCode: 'hu'
      },
      {
        name: '',
        dialCode: '91',
        countryCode: 'in'
      },
      {
        name: '',
        dialCode: '62',
        countryCode: 'id'
      },
      {
        name: '',
        dialCode: '98',
        countryCode: 'ir'
      },
      {
        name: '',
        dialCode: '964',
        countryCode: 'iq'
      },
      {
        name: '',
        dialCode: '353',
        countryCode: 'ie'
      },
      {
        name: '',
        dialCode: '972',
        countryCode: 'il'
      },
      {
        name: '',
        dialCode: '39',
        countryCode: 'it'
      },
      {
        name: '',
        dialCode: '1876',
        countryCode: 'jm'
      },
      {
        name: '',
        dialCode: '81',
        countryCode: 'jp'
      },
      {
        name: '',
        dialCode: '962',
        countryCode: 'jo'
      },
      {
        name: '',
        dialCode: '7',
        countryCode: 'kz'
      },
      {
        name: '',
        dialCode: '965',
        countryCode: 'kw'
      },
      {
        name: '',
        dialCode: '996',
        countryCode: 'kg'
      },
      {
        name: '',
        dialCode: '856',
        countryCode: 'la'
      },
      {
        name: '',
        dialCode: '371',
        countryCode: 'lv'
      },
      {
        name: '',
        dialCode: '961',
        countryCode: 'lb'
      },
      {
        name: '',
        dialCode: '266',
        countryCode: 'ls'
      },
      {
        name: '',
        dialCode: '352',
        countryCode: 'lu'
      },
      {
        name: '',
        dialCode: '389',
        countryCode: 'mk'
      },
      {
        name: '',
        dialCode: '261',
        countryCode: 'mg'
      },
      {
        name: '',
        dialCode: '223',
        countryCode: 'ml'
      },
      {
        name: '',
        dialCode: '356',
        countryCode: 'mt'
      },
      {
        name: '',
        dialCode: '52',
        countryCode: 'mx'
      },
      {
        name: '',
        dialCode: '95',
        countryCode: 'mm'
      },
      {
        name: '',
        dialCode: '264',
        countryCode: 'na'
      },
      {
        name: '',
        dialCode: '31',
        countryCode: 'nl'
      },
      {
        name: '',
        dialCode: '505',
        countryCode: 'ni'
      },
      {
        name: '',
        dialCode: '227',
        countryCode: 'ne'
      },
      {
        name: '',
        dialCode: '234',
        countryCode: 'ng'
      },
      {
        name: '',
        dialCode: '47',
        countryCode: 'no'
      },
      {
        name: '',
        dialCode: '968',
        countryCode: 'om'
      },
      {
        name: '',
        dialCode: '92',
        countryCode: 'pk'
      },
      {
        name: '',
        dialCode: '507',
        countryCode: 'pa'
      },
      {
        name: '',
        dialCode: '675',
        countryCode: 'pg'
      },
      {
        name: '',
        dialCode: '595',
        countryCode: 'py'
      },
      {
        name: '',
        dialCode: '51',
        countryCode: 'pe'
      },
      {
        name: '',
        dialCode: '48',
        countryCode: 'pl'
      },
      {
        name: '',
        dialCode: '351',
        countryCode: 'pt'
      },
      {
        name: '',
        dialCode: '974',
        countryCode: 'qa'
      },
      {
        name: '',
        dialCode: '40',
        countryCode: 'ro'
      },
      {
        name: '',
        dialCode: '7',
        countryCode: 'ru'
      },
      {
        name: '',
        dialCode: '250',
        countryCode: 'rw'
      },
      {
        name: '',
        dialCode: '1869',
        countryCode: 'kn'
      },
      {
        name: '',
        dialCode: '1758',
        countryCode: 'lc'
      },
      {
        name: '',
        dialCode: '966',
        countryCode: 'sa'
      },
      {
        name: '',
        dialCode: '221',
        countryCode: 'sn'
      },
      {
        name: '',
        dialCode: '232',
        countryCode: 'sl'
      },
      {
        name: '',
        dialCode: '65',
        countryCode: 'sg'
      },
      {
        name: '',
        dialCode: '252',
        countryCode: 'so'
      },
      {
        name: '',
        dialCode: '82',
        countryCode: 'kr'
      },
      {
        name: '',
        dialCode: '34',
        countryCode: 'es'
      },
      {
        name: '',
        dialCode: '46',
        countryCode: 'se'
      },
      {
        name: '',
        dialCode: '41',
        countryCode: 'ch'
      },
      {
        name: '',
        dialCode: '992',
        countryCode: 'tj'
      },
      {
        name: '',
        dialCode: '255',
        countryCode: 'tz'
      },
      {
        name: '',
        dialCode: '670',
        countryCode: 'tl'
      },
      {
        name: '',
        dialCode: '90',
        countryCode: 'tr'
      },
      {
        name: '',
        dialCode: '380',
        countryCode: 'ua'
      },
      {
        name: '',
        dialCode: '971',
        countryCode: 'ae'
      },
      {
        name: '',
        dialCode: '1',
        countryCode: 'us'
      },
      {
        name: '',
        dialCode: '58',
        countryCode: 've'
      },
      {
        name: '',
        dialCode: '84',
        countryCode: 'vn'
      },
      {
        name: '',
        dialCode: '967',
        countryCode: 'ye'
      }
    ];
  }

  getCountries(): Country[] {
    return this.countries;
  }


}


