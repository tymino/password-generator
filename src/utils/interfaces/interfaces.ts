interface ICurrentLang {
  title: string,
  mainHeader: string,
  passwordLengthHeader: string,
  label: string[],
  successfulCopy: string,
}

interface ILangStore {
  rus: ICurrentLang,
  en: ICurrentLang,
}

export {
  ILangStore,
}