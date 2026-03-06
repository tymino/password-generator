export type TCheckboxesName = [string, string, string, string]

export interface ICurrentLang {
  tabTitle: string
  headerMain: string
  headerLengthPassword: string
  checkboxName: TCheckboxesName
  successfulCopy: string
}

export interface ILocalization {
  ru: ICurrentLang
  en: ICurrentLang
}
