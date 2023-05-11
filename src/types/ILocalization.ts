interface ICurrentLang {
  tabTitle: string;
  headerMain: string;
  headerLengthPassword: string;
  labelCheckbox: string[];
  successfulCopy: string;
}

interface ILocalization {
  rus: ICurrentLang;
  en: ICurrentLang;
}

export default ILocalization;
